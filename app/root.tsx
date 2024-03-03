// Dependencies
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useNavigate,
  NavigateFunction,
  json,
  useLoaderData,
} from '@remix-run/react'
import type { ActionFunctionArgs } from '@remix-run/node'

// Components
import Navbar from './globals/components/Navbar'

// Style
import stylesheet from './style/root.css'
import { useEffect } from 'react'

export const links = () => [{ rel: 'stylesheet', href: stylesheet }]

export const meta = () => {
  return [
    { title: 'Star Wars App' },
    {
      property: 'og:title',
      content: 'Star Wars App',
    },
    {
      name: 'description',
      content:
        'Simple we app application where you can find some characters from Star wars',
    },
  ]
}

export async function loader({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get('Cookie')
  return json({ cookieHeader })
}

const Root: React.FC = () => {
  const { cookieHeader } = useLoaderData<{
    cookieHeader: string
  }>()
  const nav: NavigateFunction = useNavigate()

  useEffect(() => {
    if (!cookieHeader) {
      nav('/login')
    }
  }, [cookieHeader])

  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <LiveReload />
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}

export default Root
