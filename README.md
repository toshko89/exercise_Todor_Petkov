# Installation

This project is devided in 2 folders client and server 
Navigate to server folder and install all dependencies run "npm start" in order to use the server
Navigate to client folder, after dependencies installation run "npm start" to start the React app 

## Main functionality

Server is build with Express + MongoDB, allowing creating new products 
The React app is using Redux to keep the orders in cart and react-router-dom for navigation 
React MUI is used for the Components

When creating a new product all fields are required, otherwise Error message will pop-up.
The user can define name,price,IMG URL and Deal for the new product.

Even if the server is not running, there is a mockedProductData.js file with 4 items, so the cart functionality may be checked. 