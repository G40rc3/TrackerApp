deploying to render struggles:
-.env not present with port 8080,
-package.json, the following were not present:
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "nodemon server.js",
"start": "node server.js"
},(nodemon automatically restarts the server when changes are detected or something in that regard)

-the URL from RENDER was not present in the server.js, so our client wasn t linked to our server.
Problem solved by adding the url from RENDER and also by addint GET and POST to the methods array.
(sending and receiving from the URL can be done if the get and post options exist for the server to use)

app.use(
cors({
origin: "https://trackerappserver.onrender.com",
methods: ["GET", "POST"],
})
);

-had other issues with the client side which were solved by recreating vite@latest and that replaced the busted files and the client was ok fterwards.
Server and Client is now up and running, so we should be able to use them in order to host our app.
