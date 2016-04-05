# Pinterest Clone

Fifth dynamic web application from the Free Code Camp back end development certification.

### Objective: 
Build a full stack JavaScript app that is functionally similar to 
this: http://pintech.herokuapp.com/  and deploy it to Heroku.

### User stories: 

  - As an unauthenticated user, I can login with Twitter.
  - As an authenticated user, I can link to images.
  - As an authenticated user, I can delete images that I've linked to.
  - As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.
  - As an unauthenticated user, I can browse other users' walls of images.
  - As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image.

### Live Version:
https://pin-yours.herokuapp.com/#/

### Requirements:
- Node.js
- NPM
- Mongodb
- Passport.js
- Twitter Auth Key
- Masonry

### Installation:

1.Install dependecies 

```sh
$ npm install
```

2.Create a .env file on the app root folder with the following info

```sh
BASEURL=[main url of application]

MONGO_URI=[mongodb url]

TWITTER_KEY=[twitter key]
TWITTER_SECRET=[twitter secret]

```
### Run:

```sh
$ npm start
```