'use strict'

const { validateAll } = use('Validator')
const User = use('App/Models/User')
const randomString = require('random-string')
const Mail = use('Mail')

class RegisterController {
  showRegisterForm ({ view }) {
    return view.render('auth.register')
  }

  async register({ request, session, response }) {
    //validate form input
    const validation = await validateAll(request.all(), {
      username: 'required|unique:users,username',
      email: 'required|email|unique:users,email',
      password: 'required'
    })
    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(['password'])
      return response.redirect('back')
    }
    //create users
    const user = await User.create({
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password'),
      confirmation_token: randomString({ length: 40 })
    })
    // send confirmed email
    await Mail.send('auth.emails.confirm_email', user.toJSON(), message => {
      message.to(user.email)
        .from('hello@adonisjs.com')
        .subject('plese comfrime this email address')
    })
    // display success message
    session.flash({
      notification: {
        type: 'success',
        message: 'please check your email for your confirm email address.'
      }
    })

    return response.redirect('back')
  }

  async confirm({ params, session, response }) {
    //get user with confirm token
    const user = await User.findBy('confirmation_token', params.token)
    //set confirmation null and is active true
    user.confirmation_token = null
    user.is_active = true
    //save
    await user.save();
    session.flash({
      notification: {
        type: 'success',
        message: 'Your email address has been confirmed.'
      }
    })

    return response.redirect('/login')
  }
}

module.exports = RegisterController
