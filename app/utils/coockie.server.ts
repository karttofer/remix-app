// Dependencies
import { createCookieSessionStorage } from '@remix-run/node'

const coockieSession = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    secrets: ['this_should_be_a_hash'],
    secure: process.env.NODE_ENV === 'development',
    maxAge: 60,
    expires: new Date(Date.now() + 60_000),
  },
})

export default coockieSession
