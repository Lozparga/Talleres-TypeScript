# 📺 Gestión de Series de Televisión

<img width="1686" height="953" alt="image" src="https://github.com/user-attachments/assets/9283e717-d603-46a6-aeeb-2ffdea913578" />


**Descripción General**

Este proyecto es una aplicación web dinámica para la gestión y visualización de series de televisión. Utiliza **TypeScript** para la lógica de datos y **Bootstrap 4.5** para una interfaz moderna y responsiva.

El sitio web muestra una tabla con las series de televisión y permite al usuario ver los detalles de cada una al hacer clic sobre su nombre. Los datos son cargados dinámicamente desde un arreglo de objetos definido en `data.ts`.

---

## Funcionalidades y Componentes

| Componente | Descripción |
| :--- | :--- |
| **Tabla Principal** | Lista todas las series con su **ID**, **Nombre**, **Canal** y **Número de Temporadas**. |
| **Promedio de Temporadas** | Se calcula y muestra el promedio de temporadas de todas las series. |
| **Tarjeta de Detalle** | Muestra la **imagen**, **descripción** y **enlace a la fuente de información** de la serie seleccionada. |
| **Navegación** | El nombre de cada serie en la tabla es un enlace activo para ver sus detalles. |

---

## Tecnologías Utilizadas

| Tecnología | Rol |
| :--- | :--- |
| **TypeScript** | Lógica de la aplicación, tipado de datos y clases. |
| **HTML5 / CSS3 / Bootstrap 4.5** | Estructura de la interfaz de usuario, diseño moderno y responsivo. |
| **JavaScript (Módulos ES6)** | Código final compilado desde TypeScript, compatible con navegadores. |
| **http-server** | Servidor local para ejecutar la aplicación en un entorno de módulos web. |

---

## Estructura de Archivos Principales

| Archivo | Ubicación | Descripción |
| :--- | :--- | :--- |
| `serie.ts` | `src/` | **Define la clase `Serie`** con sus atributos: `id`, `name`, `channel`, `seasons`, `description`, `link`, e `image`. |
| `data.ts` | `src/` | Contiene el **conjunto de datos** (instancias de `Serie`) con información real. |
| `main.ts` | `src/` | **Controlador principal** que renderiza la tabla, calcula el promedio y gestiona la visualización de la tarjeta de detalle. |
| `index.html` | Raíz | Estructura principal, carga Bootstrap y enlaza al script compilado (`./dist/main.js`). |

---
### Creado por: Ariana Lozano
Desarrollo de Sotfware en Equipos
