### To do list with React-Node-Express

An app that connects back-end data via an API to a React front-end
![Eurostar-todo-list](src/frontend/assets/app-complete.png)

## Scaffolding and set up

With webpack-babel and node-sass

1. [npm install node-sass –D] (installs sass - as a dev dependency as it is a complier)
2. Styling - tachyons and bulma

For the React library

1. [npm install react react-dom -S] (installs react and react dom)
2. [npm install react-router-dom –S] (installs the router component of react)
3. [npm install react-scripts –S] (installs the router component of react)

Backend dependencies

1. [npm install nodemon] (adds hot loading of backend server with nodemon)
2. [npm install node -S]  (adds node.js)
3. [npm install express -S] (install express midware that runs data from server via axios to Postman/ Insomnia)
4. [npm install axios -S] (installs axios runner from backend with JSON files to Insomnia or Postman Axios no need to install body-parser any more, it comes inbuilt)
5. [npm install request-promise -S] [npm install request] (sets up back end API to get methods of request-promise from ES-6)
6. [npm install cors] helps in cross-origin-settings
7. [npm install dotenv] installs the .env files to store keys and passwords

To connect backend and front end
[npm install npm-run-all]

```
"scripts": {
		"start": "npm-run-all -s build start-backend",
		"start-frontend": "react-scripts start",
		"start-backend": "nodemon src/backend/server.js",
		"start-dev": "npm-run-all -p start-frontend start-backend",
		"build": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	},
	"proxy": "http://localhost:3001",
```
