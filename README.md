# Frontend - Patient Data Management

Aplicacion que renderiza lista de usuarios, permite crear y editar usuarios (Se persiste solo en memoria).

## Tech Stack

- React: Decidi usar React como herramienta para crear las interfaces de usuario
- Typescript: Para tipar la app
- Tailwind y CSS: Para manejar estilos
- Redux: Para manejar estado global

## Arquitectura

Tome algunas consideraciones a la hora de armar la arquitectura del proyecto

- Patron Container/Presentation: Use el patron container presentation para manejar la logica de negocio del lado de componentes container y la UI de los componentes de presentacion
- Infra: Contienen la implementacion de paquetes como http fetch o el store, de modo que en otros archivos se dependan de estas abstracciones y sea facil de mantener en el tiempo
- Layout: Layout de la app base
- Modelos y DTO: Contienen la firma de los pacientes y la firma de la respuesta del servicio
- Hooks: Se divide en servicios y en store, usan las abstracciones de infra y setean estado de ser necesario que luego utilizan los container components

## Levantar el proyecto
Clonar el proyecto y ejecutar los siguientes comandos para

Instalar dependencias 

```
npm i
```

Para levantar el dev server 

```
npm run dev 
```

Realizar un build productivo
```
npm run build
```

## Challenge

The objective of this challenge is to create a frontend application that enables users to manage patient data. The application should have the following features:
- Retrieve a list of patient records from a this API.
- Display the patient records individually in cards within a user interface.
- Each patient card should include a button or icon that allows users to view additional details (expand/collapse).
- Implement a modal or a similar component to edit and add patient information.
- Users should have the ability to edit existing patient data and add new patients to the list.  This has no persistent data.
- Implement form validation to ensure the accuracy and completeness of patient data.
- Optional: Provide user-friendly notifications for successful or failed data modifications.
- Optional: Ensure that the application is interactive and responsive, with smooth animations where necessary.

### Technologies:
The solution must be implemented using the React/Vue ecosystem, leaving you the freedom to choose any design patterns, state management strategies, and libraries.

### UI:
You are the creative director here, feel free to make any decisions.

### Guidelines:

- Share the source code of the application in a Git repository (preferably on GitHub).
- Showcase you organization skills, your own styling methods, domain of the selected tech, domain at making reusable components, usage of - standard industry-accepted tooling (TypeScript, linting, formatters), etc...
- Include detailed instructions on how to run the application locally.
- Provide brief documentation explaining your design decisions and the libraries/tools you used.
- Feel free to adapt the challenge further to specific requirements and preferences.