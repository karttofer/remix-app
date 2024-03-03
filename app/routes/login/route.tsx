// Dependencies
import { Form } from '@remix-run/react'
import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
// Auth
import { authenticator } from '../../utils/auth.server'

async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate('user-pass', request, {
    successRedirect: '/home',
    failureRedirect: '/login',
  })
}
async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: '/home',
  })
}

const LoginPage: React.FC = () => {
  return (
    <main className="bg-gray-800 text-white">
      <section className="flex items-center justify-center">
        <Form
          method="post"
          className="flex flex-col items-center p-8 bg-black rounded-md border border-yellow-400"
        >
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-yellow-400 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-black text-white"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="password"
              className="block text-yellow-400 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-black text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:shadow-outline-yellow active:bg-yellow-600"
          >
            Sign In
          </button>
        </Form>
      </section>
    </main>
  )
}
export default LoginPage
export { action, loader }
