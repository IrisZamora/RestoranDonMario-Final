Sistema de Reservas de Restaurante

Este es un proyecto de un sistema de reservas de restaurante que permite gestionar mesas y reservas utilizando Node.js, Express, MongoDB Atlas como base de datos, y Pug como motor de vistas para el frontend.

Funcionalidades: 

Reservas:
Los clientes y el administrador pueden realizar reservas para una fecha y hora específica.
Las reservas se asignan a mesas disponibles de forma automática.
Las reservas pueden ser canceladas por el administrador y el cliente

Gestión de Mesas:

El administrador puede:

-Crear nuevas mesas.
-Cambiar el estado de disponibilidad de una mesa.
-Eliminar mesas existentes.

Informes:
El administrador puede generar un informe de ocupación basado en la fecha actual.

Tecnologías utilizadas:

Node.js: Plataforma para la ejecución del servidor backend.
Express: Framework web para manejar rutas y middleware.
MongoDB Atlas: Base de datos en la nube para almacenar mesas y reservas.
Mongoose: ODM para interactuar con la base de datos MongoDB.
Pug: Motor de plantillas para renderizar el frontend.
Socket.io: Para implementar un chat en tiempo real

Instalación y configuración.

Requisitos previos:
-Tener instalado Node.js y npm .
-Crear una base de datos en MongoDB Atlas.