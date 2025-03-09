

const app = express();: Crea una instancia de la aplicación Express.
const PORT = 5000;: Define el puerto en el que el servidor escuchará las solicitudes.
Middleware

app.use(cors());: Habilita CORS para que el servidor pueda recibir solicitudes de diferentes dominios.
app.use(bodyParser.json());: Configura el servidor para que pueda interpretar el cuerpo de las solicitudes en formato JSON.
Rutas

app.use('/api/computers', routes);: Define un prefijo de ruta (/api/computers) para las rutas importadas desde computerRoutes. Esto significa que todas las rutas definidas en computerRoutes estarán disponibles bajo este prefijo.
Inicio del Servidor

app.listen(PORT, '0.0.0.0', () => {...});: Inicia el servidor en el puerto 5000 y en todas las interfaces de red disponibles (0.0.0.0). Una vez que el servidor está en funcionamiento, se imprime un mensaje en la consola indicando la dirección donde se puede acceder al servidor.
Resumen

Este código configura un servidor Express que:
Permite solicitudes CORS.
Puede manejar datos JSON en las solicitudes.
Tiene rutas específicas para manejar operaciones relacionadas con "computers".
Escucha en el puerto 5000 y está accesible desde cualquier dirección IP en la red local.
