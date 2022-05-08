import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/git-search-user/Footer';

const GitSearchUserApp: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2 bg-[#1e1f29]">
      <Head>
        <title>Git Search User App | 5 Web apps template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <Footer />
    </div>
  )
}

export default GitSearchUserApp;
