import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <Head>
        <title>5 Mini web apps | 5 Web apps template</title>
        <link rel="icon" href="/favicon.ic  o" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          5 Mini web apps
        </h1>

        <p className="mt-3 text-2xl">
          We're Launching soon
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

          <Link href="/mini-app/countdown-timer">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Lauch Countdown Timer &rarr;</h3>
              <p className="mt-4 text-xl">
              </p>
            </a>
          </Link>

          <Link href="/mini-app/social-proof-section">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Social Proof Section &rarr;</h3>
              <p className="mt-4 text-xl">
              </p>
            </a>
          </Link>

          <Link href="/mini-app/advice-generator">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Advice Generator App &rarr;</h3>
              <p className="mt-4 text-xl">
              </p>
            </a>
          </Link>

          <Link href="/mini-app/tictactoe-game">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">TicTacToe Game &rarr;</h3>
              <p className="mt-4 text-xl">
              </p>
            </a>
          </Link>

          <Link href="#">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
              </p>
            </a>
          </Link>

        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-2">
          Powered by <Link rel="noopener noreferrer" href="https://ngnam.github.io" target="_blank"><a>https://ngnam.github.io</a></Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
