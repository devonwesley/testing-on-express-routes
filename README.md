##Testing [ExpressJS](http://expressjs.com/) API

![Dummy Tesing](https://upload.wikimedia.org/wikipedia/en/c/c0/Crash_Dummie_SNES_Title.jpg)  


##Architecture

 **Testing stack:** | **Router & Database:**
 ------------------ | ----------------------
 [Mocha](https://mochajs.org/) | [Express](http://expressjs.com/)
 [Chai](http://chaijs.com/) | [PG-Promise](https://github.com/vitaly-t/pg-promise)
 [Chai-http](https://github.com/chaijs/chai-http) | [Postgres](https://www.postgresql.org/)

##Setup

###Install Postgres

```
  brew install postgress
  brew tap homebrew/services
  brew services start postgresql
```

###Create Database and Run ```schema.sql``` file

```
  createdb user-chai
  psql user-chai < schema.sql
```

###Install Dependencies, Run Test

```
  npm install
  npm test
```  

###Start Server

```
 npm start
 Homepage Url: http://localhost:3000/
```

### HTTP API

**Action** | **CRUD** | **verb** | **path**
---------- | -------- | -------- | --------
insertUser() | create | post | /user
getUser() | read | get | /user
updateUser() |  update | put | /user/:user_id
deleteUser() | delete | post | /user/:user_id

###Contributors
  * [Jusdev89](https://github.com/Jusdev89)
