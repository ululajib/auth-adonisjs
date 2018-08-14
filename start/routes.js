'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('home').as('home').middleware(['auth'])
// REGISTER
Route.get('register', 'Auth/RegisterController.showRegisterForm').middleware(['authenticated'])
Route.post('register', 'Auth/RegisterController.register').as('register')
Route.get('register/confirm/:token', 'Auth/RegisterController.confirm')
// LOGIN
Route.get('login', 'Auth/LoginController.showLoginForm').middleware(['authenticated'])
Route.post('login', 'Auth/LoginController.login').as('login')
// LOGOUT
Route.get('logout', 'Auth/AuthenticatedController.logout')
// RESET PASSWORD
Route.get('password/reset', 'Auth/PasswordResetController.showLinkRequestForm')
Route.post('password/email', 'Auth/PasswordResetController.sendResetLinkEmail')
Route.get('password/reset/:token', 'Auth/PasswordResetController.showResetForm')
Route.post('password/reset', 'Auth/PasswordResetController.reset')
