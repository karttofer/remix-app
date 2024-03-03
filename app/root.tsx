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
import { useEffect } from 'react'
// Components
import Navbar from './globals/components/Navbar'
import Footer from './globals/components/Footer'
// Style
import stylesheet from './style/root.css'

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
    {
      name: 'viewport',
      content: 'width=device-width',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '72x72',
      href: '../public/maskable_icon_x72.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: '../public/maskable_icon_x48.png',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '../public/maskable_icon_x48.ico',
    },
  ]
}

export async function loader({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get('_session')
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
    <html lang="en">
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
        <footer className="bg-gray-800 text-white py-8">
          <Footer />
        </footer>
      </body>
    </html>
  )
}

export default Root
