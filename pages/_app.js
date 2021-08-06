/* pages/_app.js */
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Login from './page/login.js'
import { AppWrapper, useAppContext } from '../context/state.js';
import Link from 'next/link'

export default function MyApp({ Component, pageProps }) {
  // console.log('_app', pageProps)
  return (
    <AppWrapper>
      <div>
        <nav className="border-b p-6">
          <p className="text-4xl font-bold">Tokens</p>
          <div className="flex mt-4">
            <Link href="/">
              <a className="mr-4 text-pink-500">
                Home
              </a>
            </Link>
            <Link href="/page/create-item">
              <a className="mr-6 text-pink-500">
                Sell Digital Asset
              </a>
            </Link>
            <Link href="/page/my-assets">
              <a className="mr-6 text-pink-500">
                My Digital Assets
              </a>
            </Link>
            <Link href="/page/creator-dashboard">
              <a className="mr-6 text-pink-500">
                Creator Dashboard
              </a>
            </Link>
            <Link href="/page/login">
              <a className="mr-6 text-pink-500">
                Login
              </a>
            </Link>
          </div>
        </nav>

        <Component {...pageProps} />
      </div>
    </AppWrapper>
  )
}

