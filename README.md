This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

Simple recipes sharing website written in react. You can publish your own recipes, add the ones you like in your favourites, rate and comment regardless you liked a recipe or not.

## Libraries and apis used to make this project

- React library
- React icons
- React router DOM
- React scripts
- React test renderer
- [REST API](https://github.com/martinnikolov93/recipes-nodejs-api)

## Installation and running

In the project directory, you can run:

### `npm install`

Installs all dependencies (listed in the libraries) required to run the project.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Live demo

You can view a deployed version of the project here [React Recipes](http://react-recipes-softuni.herokuapp.com/).

## Design

- Public | All visitors can:
    - View all recipes
    - View recipes by category
    - View all categories
    - Read all reviews

- Guest visitors can:
    - Create an account
    - Login with an existing account

- Authenticated visitors can:
    - Publish a recipe
    - Edit their published recipes
    - View their profile and see their published recipes
    - Add or remove a recipe to/from favourites
    - View favourite recipes
    - Rate a recipe by choosing stars from 1-5 and leaving a comment
    - Logout from their account


## File explanation

- `index.js` - Our main entry point. Loads the `App` component and renders the application into **div** with _id_ **root**
- `App.js` - Holds the whole application. Wraps all routes with `AuthController`
- `AuthController` - Provides login and logout functionalities. Checks if the user is logged in and provides the data to the `Router`.
- `Router` - Determines which route has been activated and provides the corresponding component. Also protects routes depending on user authentication.

### Pages

- `HomePage.js` - Landing page. Loads `Home` component
- `CategoriesPage.js` - Shows all categories. Loads `Categories` component
- `CategoryPage.js` - Shows all recipes for certain category. Loads `Category` component
- `HomePage.js`
- `HomePage.js`
- `HomePage.js`

### Components

- `Home`
- `HomePage.js`
- `HomePage.js`
- `HomePage.js`
- `HomePage.js`
- `HomePage.js`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
