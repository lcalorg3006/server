import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Computer } from '../entities/Computer.ts';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

const dataPath = path.join(__dirname, '../data/computers.json'); 

const readData = (): Computer[] => {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

const writeData = (data: Computer[]) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

export const addComputer = (req: Request, res: Response) => {
  const { id, classroomId, studentName, grade } = req.body;
  const computers = readData();

  const newComputer: Computer = { id, classroomId, studentName, grade };
  computers.push(newComputer);
  writeData(computers);

  res.status(201).json(newComputer);
};

export const removeComputer = (req: Request, res: Response) => {
  const { id, classroomId } = req.body;
  const computers = readData();

  const updatedComputers = computers.filter(
    (computer) => !(computer.id === id && computer.classroomId === classroomId)
  );
  if (updatedComputers.length === computers.length) {
    return res.status(404).json({ message: 'Computer not found' });
  }

  writeData(updatedComputers);
  res.status(204).send();
};

export const searchComputer = (req: Request, res: Response) => {
  const { id, studentName } = req.query;
  const computers = readData();

  const computer = computers.find(
    (comp) => comp.id === id || comp.studentName === studentName
  );
  if (!computer) {
    return res.status(404).json({ message: 'Computer not found' });
  }

  res.status(200).json(computer);
};

export const getComputersByClassroom = (req: Request, res: Response) => {
  const { classroomId } = req.params;
  const computers = readData();

  const filteredComputers = computers.filter(
    (comp) => comp.classroomId === classroomId
  );
  res.status(200).json(filteredComputers);
};
