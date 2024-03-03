// Dependencies
import { Authenticator } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
// Auth
import { sessionStorage } from './coockie.server'

interface IUser {
  token: string
}

export const authenticator = new Authenticator<IUser>(sessionStorage)

authenticator.use(
  new FormStrategy(async () => {
    return {
      token: '',
    }
  }),
  'user-pass'
)
