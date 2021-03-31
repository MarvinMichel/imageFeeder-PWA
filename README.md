# ImageFeeder
[![Heroku App Status](http://heroku-shields.herokuapp.com/image-feeder-pwa)](https://image-feeder-pwa.herokuapp.com)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/MarvinMichel/imageFeeder-PWA/master)
![GitHub](https://img.shields.io/github/license/MarvinMichel/imageFeeder-PWA)

ImageFeeder is an application build with the [Unsplash API](https://github.com/unsplash/unsplash-js). It shows you a feed of the latest photo's added to Unsplash and their corresponding photographers. You can view the photo's and their details, search for specific photo's trough keywords or just view random pictures. The application uses server-side rendering by NodeJS and Express. It's an Progressive Web Application and can be cached and installed locally.

![ImageFeeder preview](./docs/images/imagefeeder.png)

## Live Demo
Check the live demo [here](https://image-feeder-pwa.herokuapp.com/)

<img src="https://user-images.githubusercontent.com/25977763/113044763-544b1880-919e-11eb-8395-2ad2cd44228d.png" alt="QR-Code to application" width="100" />


## How to use?
1. [Download](https://github.com/MarvinMichel/imageFeeder-PWA/archive/refs/heads/master.zip) or clone the repo
2. Open the terminal and navigate into the projects' directory: `cd ./imageFeeder-PWA`
3. Install the dependencies by running `npm install`
4. Start the server: `npm start`


## Unsplash API
<img src="./docs/images/api-object-preview.png" alt="Preview of object returned by API" width="350px" align="right">
This project's using the Unsplash API to get the photos and search trough their database with keywords. The API can retrieve a photo object with different attributes. This object can be used to render data to the screen and show it to the user. We can retrieve the url to the image to display it inside a figure. Beneath the image we can show some statistics like the user and the number of likes and downloads. Inside the object we'll retrieve a link to the users' profilepage and create a link to give the photographer a larger podium. 

You can check out an example of an photo-object [here](docs/object-example.json)

>🤓 For more information to use the API, check the [documentation](https://unsplash.com/documentation).


## Design System
The design system applied in this project will be based on the [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/). This means the Javascript code will be split into different layers and functions, hereby creating reusable code troughout the application.

## Performance
To maximize the performance of the application, we use lazyloading for images in combination with Low Quality Image Placeholders(LQIP). The Unsplash API offers dynamic image sizes, which the app uses to create responsive images. The app uses server side compression to scale down the transfer sizes as well. By using the caching abilities of our service-worker, the app will become faster to use after a while!

## License
[MIT License](LICENSE)
