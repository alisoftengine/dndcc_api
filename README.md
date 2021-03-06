# Dungeons and Dragons Character Creator API (DnDCC_API)

#### GA-SEI-Project-Three

#### SEI: 1130, Project Three

#### Scrum Master: Keenan Ward

#### Git Master: Fahim Ali

#### Code Monkey: Joachim Canete

## Welcome

Welcome to the **Dungeons and Dragons Character Creator API (DnDCC_API)**, which is the API serving requests from the **Dungeons and Dragons Character Creator (DnDCC)** web-app. **DnDCC_API** was developed by **Keenan Ward**, **Fahim Ali**, and **Joachim Cañete**.

## About

The **DnDCC_API** server runs on `Express`, with connections to `MongoDB` via `Mongoose`. You can view the **DnDCC_API** [HERE](https://dndcc-api.herokuapp.com/)!

## Deployment

**DnDCC_API** was deployed via [Heroku](https://www.heroku.com/), which communicates with a MongoDB database on Atlas.

## Development

_Back-end_ scaffolding was built to provide the _front-end_ with **RESTful API** functionality. Utilizing the **DnDCC_API** to create and store this information, API calls were made in the front-end components to render consistent information across all characters created. The scaffolding of a back-end wireframe aided in fleshing out the structure of the files and their usability for later development of front-end applications. he back-end database is complete with a homepage, via the Handlebars templating system which helps direct the user to the front-end of the app.

![backend_wireframe](https://i.imgur.com/c5wSmus.png)

The core of the back-end lay in the `Model` used to structure the web-app's API. This schema would accept information in a format that would be utilized all across the front end and is actively updated based on user interaction. This schema has specific accepted values which prevents erroneous data from being included in the database.

![character_schema](https://i.imgur.com/qMgF7I7.png)

## User Stories

- [x] As a player, I want to model a character quickly and easily.
- [x] As a player, I want to input my name.
- [x] As a player, I want to input the campaign name.
- [x] As a player, I want to input the character’s name.
- [x] As a player, I want to choose the character’s sex.
- [x] As a player, I want to choose from the basic races.
- [x] As a player, I want to choose from the basic classes.
- [x] As a player, I would like to choose my ability point loadout (APL).
- [x] As a player, I want to choose from the basic backgrounds.
- [x] As a player, I want to choose from the nine alignments.
- [x] As a player, I want to peruse custom character loadouts that other people have created.
