# CRUD_MongodbAtlas
How to make API for CRUD operations 

# REQUIREMENTS 
1. Nodejs
2. Mongodb atlas  

# Steps To Run the code
1. make your atlas account and setup the ip connection as well as make a user and save the password in .env file
2. Copy your database user, datbase name and pass word at the place in the uri where the spaces are given 
3. for eg. mongodb+srv://databaseusername:password*@cluster0.pp8efut.mongodb.net/databaseName?retryWrites=true&w=majority
4. Remember only API for Crud is made in this so first type npm start to start the server and then access the CRUD operations through Postman
5. user the url http://localhost:port/ for get and post 
6. http://localhost:port/id for put and delete (get the id from the database)