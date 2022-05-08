import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/git-search-user/Footer';
import SearchBar from '../../components/git-search-user/SearchBar'
import Navbar from '../../components/git-search-user/Navbar'
import GithubUser from '../../components/git-search-user/GithubUser'
import { Loading } from '../../components/git-search-user/Loading'

const GitSearchUserApp: NextPage = () => {
  let API = 'https://api.github.com/users/octocat'

  const userRef = React.useRef(null)
  const [userName, setUserName] = React.useState('')
  const [data, setData] = React.useState({})
  const [isLoading, setLoading] = React.useState(false)

  function handleClick() {
    setUserName(userRef.current?.['value'] || '')
  }

  React.useEffect(() => {
    setLoading(true)
    if (userName) {
      API = `https://api.github.com/users/${userName}`
    }

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [userName]);

  if (!data) (
    <p>No Profile data.</p>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-7 dark:bg-[#1e253f]">
      <Head>
        <title>Git Search User App | 5 Web apps template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {isLoading ? <Loading /> :
        <>
          <SearchBar
            userName={userName}
            handleClick={handleClick}
            userRef={userRef}
          />
          <GithubUser data={data} />
        </>
      }

      <Footer />
    </div>
  )
}

export default GitSearchUserApp;
