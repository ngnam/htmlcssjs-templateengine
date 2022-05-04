import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { HeaderText } from '../../components/social-proof-section/HeaderText'
import { StarRating } from '../../components/social-proof-section/StarRating'
import { Testimonials } from '../../components/social-proof-section/Testimonials'
import { Footer } from '../../components/social-proof-section/Footer'

const SocialProofSection: NextPage = () => {

  return (
    <div className="flex min-h-screen flex-col items-center py-2 bg-[#ffffff]">
      <Head>
        <title>Social Proof Section | 5 Web apps template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-between mx-a px-4 md:px-24 py-2 ">
        <HeaderText />
        <div className="flex flex-col justify-center items-center">
          <StarRating text="Rated 5 Stars in Reviews" />
          <StarRating text="Rated 5 Stars in Report Guru" />
          <StarRating text="Rated 5 Stars in Best Tech" />
        </div>
      </div>
      <Testimonials />
      
      <Footer />
    </div>
  )
}

export default SocialProofSection;
