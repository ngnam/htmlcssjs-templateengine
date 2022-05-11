import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer';
import { MiniAppRouter } from '../routers/mini-app.route'
import Navbar from './../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <Head>
        <title>100+ Mini Application - ngnam.github.io</title>
        <meta name="description" content="100+ Mini Application, using ReactJS + Typescript, Taiwindcss Framework & Others" />
        <link rel="icon" href="/favicon.ic  o" />
      </Head>

      <Navbar />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <b>100+ Mini Application</b> <br /> 
          <small>using ReactJS + Typescript + Taiwindcss Framework + Others.</small>
        </h1>

        <p className="mt-3 text-2xl">
          We're Launching soon
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

          {
            MiniAppRouter && MiniAppRouter.map(route => (
              <Link href={route.url} key={route.id}>
                <a
                  className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                >
                  <h3 className="text-2xl font-bold">{route.name} &rarr;</h3>
                  <p className="mt-4 text-xl">
                  </p>
                </a>
              </Link>
            ))
          }

        </div>
      </main>

      <Footer />
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-2">
          Powered by <Link rel="noopener noreferrer" href="https://ngnam.github.io" target="_blank"><a>https://ngnam.github.io</a></Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
