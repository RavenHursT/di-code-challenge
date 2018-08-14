# React/Redux/Redux-Thunk/Reactstrap/Node/Koa2 Code Challenge Example App

This is a good reference app for people to get an idea on how to wire together a comprehensive app that utilizes the technologies in the title.  Was put together by Matthew Marcus as a "code challenge" durring an interview process.

It's just a "navigator" app for a design/photography portfolio community called [https://www.behance.net/](Behest).  It uses Behest's APIs to pull data for searching and navigating through users' profiles and projects.

## Installation
```bash
 git clone https://github.com/RavenHursT/di-code-challenge.git
 cd di-code-challenge
 yarn install
```

## Running
> TODO: Put these into a single command
```bash
yarn run start-api
```
```bash
yarn run start
```

Visit [http://localhost:3001](http://localhost:3001) in your browser if it doesn't automatically open a browser and navigate there for you.

##Requirements
Tested w/ the following environment:
```bash
node -v && npm -v && yarn -v
v10.6.0
6.1.0
1.7.0
```

## The Challenge

Behance is one of the most popular websites for front-end and art portfolios.  For this code challenge, you'll be using the Behance JSON API to build out a quick front-end for a search users and profile display website.  To get started, visit here: [Behance Developers](https://www.behance.net/dev).

- The first view of the app should have a search box where searches for users are executed
- When a user is chosen/found, the next view is an individual profile page for the user. The profile page should include:

	- basic information about the user (including stats)
	- a list of their projects with links to them (links should be exterior to your app and link directly to Behance)
	- a list of their work experience,
	- a preview of their followers and following lists.

## Expectations

You provide and code an original, usable, and contemporary design.

You use your favorite front-end javascript framework to create the REST API requests, but do **not** use the Behance JS library itself. (Normally we don't like to re-invent the wheel, but in this case, we want to see how you wrangle the JSON directly.)
