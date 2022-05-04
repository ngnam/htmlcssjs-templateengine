import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/advice-generator/Footer'
import { AdviceCard } from '../../components/advice-generator/AdviceCard'

const API = 'https://api.adviceslip.com/advice';

const AdviceGenerator: NextPage = () => {
  const [adviceText, setAdviceText] = React.useState<string>("Never regret.  If it's good, it's wonderful. If it's bad, it's experience.");
  const [adviceId, setAdviceId] = React.useState<number>(143);

  const fetchAdvice = async () => {

    const res = await fetch(API);
    const data = await res.json();

    const { advice, id} = data.slip;

    setAdviceId(id);
    setAdviceText(advice);
  };


  const handleAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="flex min-h-screen flex-col items-center py-2 bg-[#ffffff]">
      <Head>
        <title>Advice Generator App | 5 Web apps template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-between mx-a px-4 md:px-24 py-2 ">

      </div>

      <h1 className="text-emerald-200 font-bold text-2xl md:text-4xl font-manrope mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">
        Advice Generator App
      </h1>
      {/* <CircularButton /> */}
      <AdviceCard id={adviceId} adviceText={adviceText} handleAdvice={handleAdvice} />

      <Footer />
    </div>
  )
}

export default AdviceGenerator;
