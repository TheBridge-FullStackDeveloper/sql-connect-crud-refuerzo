# 🐬 SQL Users Importer - MySQL Refuerzo

### 🚀 Descripción del Proyecto

Este proyecto es una API de backend diseñada para gestionar usuarios de forma persistente. La aplicación conecta con un servicio externo (JSONPlaceholder) para importar datos y almacenarlos en una base de datos relacional **MySQL**. El objetivo es dominar la arquitectura de servicios, la conexión a bases de datos SQL y el manejo de consultas preparadas.

### 🎯 Funcionalidades

✅ **1. Conexión Persistente y Segura**

- Conexión robusta mediante `mysql2` y uso de variables de entorno (`.env`) para proteger credenciales sensibles.

✅ **2. Importación Masiva (API to SQL)**

- Integración con Axios para obtener usuarios externos y guardarlos en la tabla local mediante bucles asíncronos.

✅ **3. Seguridad contra Inyección SQL**

- Implementación de **Consultas Preparadas** utilizando placeholders (`?`) para limpiar y validar los datos antes de insertarlos.

✅ **4. CRUD Relacional Completo**

- **GET**: Listado de todos los usuarios registrados.
- **PUT**: Actualización de campos específicos con validación de filas afectadas.
- **DELETE**: Eliminación física de registros mediante IDs únicos.

✅ **5. Arquitectura por Capas**

- Separación clara de responsabilidades: Rutas (Routes), Lógica de Base de Datos (DB) y Servicios Externos (Services).

### 🛠️ Tecnologías Utilizadas

- **Node.js** & **Express**
- **MySQL2**
- **Axios**
- **Dotenv**
