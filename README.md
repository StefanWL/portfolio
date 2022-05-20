# Portfolio

My portfolio is made with React and Laravel.
The set up is fairly standard for a SPA.
The backend has API controllers to receive requests and query the database.
Queries are sent to the database using the Eloquent ORM.
Requests that only read data are accessible to the public, but any routes that add, edit or delete data require authentication by token that's issued when valid credentials are entered in the admin login.

The frontend is a React SPA and used React to manage routing, components and states.
If you're interested in seeing, you can give yourself access to the forms for editing, by setting isLoggedIn to true in localStorage, but no requests you send will be accepted by the server.

The frontend and the backend are hosted on Heroku and the database is a JAWS MySQL DB.

# Running
To run this yourself:
1. Run composer install.
2. Copy .env.example to a new file called .env.
3. Run php artisan key:generate.
4. Edit the .env file match the database you are using
5. Run php artisan migrate.
6. Run npm install
7. Run npm run watch
8. Run php artisan serve.
