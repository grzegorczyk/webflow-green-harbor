# Webflow Green Harbor

External Files for Green-Harbor Webflow Website

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Local Server](#local-server)
- [Build](#build)
- [Author](#author)
- [Info](#info)

## Installation

To run the project locally, ensure that Node.js and npm are installed. Then, execute the following commands:

```sh
git clone <REPOSITORY_URL>
cd webflow-green-harbor
npm install
```

## Scripts
In the package.json, there are several useful scripts:

```shell
npm run build           # Builds the project for production.
npm run watch           # Builds the project and watches for changes in development mode.
npm start               # Starts a development server and enables live reload.
```

## Project Structure
```sh
webflow-green-harbor/
│
├── dist/               # Built files will be generated here (.gitignore)
├── node_modules/       # Dependencies (.gitignore)
├── src/                # Source code
│   ├── index.js        # Main Combine file
│   ├── scripts         # JavaScript file
│   ├── styles          # SCSS file
├── .gitignore          # Files/directories to be ignored by Git
├── package.json        # Project dependencies and scripts
├── webpack.config.js   # Webpack configuration file
└── README.md           # This file
```

## Local Server
To start a local server and see your changes live, use:

```shell
npm start
```
The server will run by default on http://localhost:8080.

```shell
cd /dist
http-server
```

By default, http-server runs on port 8080. You should see an output like this:


## Build
To build the project for production, use:

```shell
npm run build
```

The built files will be generated in the dist directory.

## Author
brandneo GmbH

## Info
This README.md file provides a clear overview of the project, including installation, usage of scripts, project structure, and instructions for starting a local server and building the project.


