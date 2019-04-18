# Guess Who?

This is a full-stack JavaScript web application game based on the boardgame 'Guess Who?'. 

## MVP

A user should be able to:

* View all characters cards.
* Select a question from a list. The selected question by the user will affect the character card view.
* View the result of the game.

## Extensions

A user should be able to:

* Have a turn time limit.
* View animation when card is out of play.
* View score board of previous games.

## Advanced Extensions

The app should be:

* A multiplayer game.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before starting, there are a few packages that are needed to be installed. First, npm init and npm install the followings:

* Webpack
* Express
* Mongodb

### Installing

First

```
npm init
```

Second, install Webpack is a static module bundler for modern JavaScript applications. Once it is installed, a config file is required.

```
npm install -D webpack webpack-cli
```

```
webpack.config.js
```

Third, install Express is a minimal and flexible Node.js web application framework that provides a set of features for web and mobile applications

```
npm install express --save

nnpm install --save-dev nodemon

npm install body-parser
```

Fourth, install MongoDB is an open-source, non-relational database. It was designed for storing huge amounts of non-relational data.

```
npm install mongodb
```

### Running

In order to make the app running, there are required to add some "scripts".

```
"build": "webpack -w"
```
This is for making the bundle.js in a watch mode.

```
"start": "node server.js"

"server:dev": "nodemon server/server.js"
```

This other one runs our server with Nodemon, so that it watches the file for changes and restarts the server as appropriate.


