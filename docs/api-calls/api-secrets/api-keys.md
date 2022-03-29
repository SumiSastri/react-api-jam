API's
Application Programming Interfaces allow a transfer of data (resources) from clients to servers. Data is transported in JavaScript Object Notation `.json` files or `.xml` files. It is an architectural style used for client-server communications.

External API's
An external API allows you to access data from a third-party database with an API-key. The google API is free, while many external API's have tiered payments for API use starting with a freemium model and scaling up to a premium model.

API-key protection
To protect your API-keys setting up a backend server with Express.js, using node as the environment, API-keys can be saved as a dev dependency and excluded from files that are submitted to github with a gitignore file as well as files that are submitted to a production environment if the app is deployed.

Steps to protect your API-keys

- Check that the dotenv file is in your `.gitignore` file [.env]
- Create a `.env` file to store the keys[touch .env]
- Save your API-key outside the directory and set up in the `.env` file a test string literal `APINAME_API_KEY=<my key>`
- In your `server.js file and ensure that the `.env` files are not included in the development files

```
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const APIKEYNAME_API_KEY = process.env.APIKEYNAME_API_KEY;
```

- Commit files and check that files are not included
- You can then replace the `APINAME_API_KEY=<my key>` test with the real key

If this does not work set up a debugging branch

Debugging at this stage ( your key is visibile on your public repo)

- check your gitignore files
- check your dotenv files `.env`
- check your code in your server
- make sure you are using placeholders at this stage APIKEYNAME and so that when you debug and commit you are not exposing your key
- To stop tracking a file that is currently tracked, use git rm --cached set up .env files and ensure they are in gitignore files [https://help.github.com/en/github/using-git/ignoring-files] / [https://git-scm.com/docs/gitignore] username:password - remove <> which are placeholders
- Once you can see your `.env` files are not tracked merge the bug branch to master and you can add the API keys safely once you have connected the front end files to the back-end server.
