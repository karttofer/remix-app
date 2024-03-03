// Dependencies
import { Authenticator } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
// Auth
import coockieSession from './coockie.server'

export const authenticator = new Authenticator(coockieSession)

authenticator.use(
  new FormStrategy(async ({ form }) => {
    return true
  }),
  'user-pass'
)
