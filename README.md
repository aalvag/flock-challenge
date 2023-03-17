# Challenge Técnico - Desarrollo FrontEnd React

Este proyecto es una aplicación en React que permite visualizar los datos obtenidos por la API pública [georef-ar-api](https://datosgobar.github.io/georef-ar-api/), la cual devuelve la latitud y longitud de provincias por nombre.

## Requerimientos

Para este proyecto se utilizaron las siguientes herramientas y tecnologías:

- React
- React Context API para el manejo del estado
- [Mapbox](https://www.mapbox.com/) para la visualización del mapa
- `SWR` para el manejo de las peticiones
- `Material-UI` para el diseño de la aplicación
- `react-testing-library` para la realización de tests unitarios

## Instrucciones

Para correr la aplicación, se deben seguir los siguientes pasos:

1.  Clonar el repositorio
2.  Obtener una API Key de [Mapbox](https://www.mapbox.com/)
3.  Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

        REACT_APP_MAPBOX_TOKEN=<API_KEY>
        REACT_APP_API_URL=https://apis.datos.gob.ar/georef/api/provincias

4.  Instalar las dependencias con `npm install`
5.  Correr el comando `npm start` para iniciar la aplicación en modo desarrollo

## Estructura del Proyecto

La estructura del proyecto se encuentra organizada de la siguiente manera:

- `src/`: Contiene el código fuente de la aplicación
  - `components/`: Contiene los componentes de la aplicación
  - `contexts/`: Contiene los contextos utilizados para el manejo del estado
  - `hooks/`: Contiene los hooks utilizados en la aplicación
  - `constants/`: Contiene las constantes utilizadas en la aplicación

## Tests

Para correr los tests de la aplicación, se debe ejecutar el siguiente comando:

    npm test

## Demo

Para ver una demostración de la aplicación, se puede acceder a la siguiente URL:

