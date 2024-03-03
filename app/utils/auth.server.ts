// Dependencies
import { Authenticator } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'

// Auth
import coockieSession from './coockie.server'

export let authenticator = new Authenticator(coockieSession)

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get('email')
    let password = form.get('password')

    return true
  }),
  'user-pass'
)
