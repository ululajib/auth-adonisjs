# Authentication with AdonisJs

This is my first result of studying adonisJs

# Installing

1. clone this project
```
git clone https://github.com/ululajib/auth-adonisjs.git
```
2. run npm install, for install package javascript
```
npm install
```
3. Setup file .env, copy file .env.example or rename file
4. run migration database. go directory auth-adonisjs and run:

```
adonis migration:run
```
note: or please check the adonisjs documentation, for migration database
5. run
```
adonis serve --dev
``` 


# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
