<img src="http://i.imgur.com/WQWi5sS.png" height="200px">

# vuefire-quickstart

> **vuefire-quickstart** makes web application development with Vue.js and Firebase
simple, providing the required npm modules and helpful comments. In the future we will
likely move toward a more opinionated structure that allows for rapid project
scaffolding. It comes bundled with webpack and Babel so you can tap into the
latest trends in JavaScript app development.


## Deploy to Firebase

**Note:** When deploying with Firebase, you will be prompted for the directory
name that contains your built app. By default, Firebase searches for a `public`
directory. You should change this to `dist` to avoid having to modify the build
process that came with the template.

``` bash

# build for production with minification
npm run build

# make sure you've installed the firebase CLI
npm install -g firebase-tools

# initialize a firebase app; see above note
firebase init

# deploy to firebase servers
firebase deploy

```
