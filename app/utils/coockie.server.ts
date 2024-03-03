// Dependencies
import { createCookieSessionStorage } from '@remix-run/node'

type SessionData = {
  userId: string
}

type SessionFlashData = {
  error: string
}

export const sessionStorage = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: '_session',
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  },
})

export let { getSession, commitSession, destroySession } = sessionStorage
