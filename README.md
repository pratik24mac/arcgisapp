### README for Global Logic Task

---

# Global Logic Task

This repository contains a React-based application designed to render an interactive map using the `@arcgis/map-components-react` library. The application fulfills the requirements specified in the attached PDF, including rendering geospatial data, providing search functionality, and supporting various map controls like zoom in, zoom out, and a home button.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Preview](#preview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Deployment](#deployment)
- [Sample GeoJSON Data](#sample-geojson-data)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, clone this repository and install the necessary dependencies:

```bash
git clone https://github.com/pratik24mac/arcgisapp.git
cd arcgisapp
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will run the application in development mode using Vite, which provides fast and optimized development tooling.

## Build

To create a production build:

```bash
npm run build
```

This will generate the necessary files for deployment in the `dist` directory.

## Preview

To preview the production build:

```bash
npm run preview
```

This command will serve the production build on a local server so you can verify the application before deploying it.

## Features

- **Interactive Map:** The application uses `@arcgis/map-components-react` to render a fully interactive map.
- **Search Functionality:** The map includes a search bar allowing users to search for specific locations.
- **Map Controls:** The application provides zoom in, zoom out, and home buttons for easy navigation.
- **Geospatial Data Rendering:** GeoJSON data is displayed on the map, with an interactive legend to provide additional context.
- **Pop-up Templates:** Detailed information is available via pop-ups when interacting with data points on the map.

## Technology Stack

- **React:** Frontend framework for building the user interface.
- **Vite:** Bundler and development server for fast build times and hot module replacement.
- **ArcGIS:** Used for rendering the map and handling geospatial data.
- **ESLint:** Linter to maintain code quality.

## Deployment

For deployment, you can use platforms like Netlify or Heroku. After building the project using `npm run build`, upload the contents of the `dist` folder to your chosen platform.

Alternatively, you can deploy directly from the repository using the following commands:

```bash
netlify deploy --prod
```

or

```bash
heroku create
git push heroku main
```

## Sample GeoJSON Data

For demonstration, you can use the following sample GeoJSON data:

```url
https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LATEST_CORE_SITE_READINGS/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson
```

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to run `npm run lint` to check for any linting issues before submitting.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Let me know if you need any more details or modifications!
