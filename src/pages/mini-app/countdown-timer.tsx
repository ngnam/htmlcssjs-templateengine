import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { TimerContainer } from '../../components/count-down/TimerContainer'
import { Footer } from '../../components/count-down/Footer'
import { Header } from '../../components/count-down/Header'
import { TimerInput } from '../../components/count-down/TimerInput'

const CountDownTimer: NextPage = () => {
  const [time, setTime] = React.useState<number>(1)

  const [newTime, setNewTime] = React.useState<number>(0)
  const [days, setDays] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>("");

  const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = new Date().getTime() + timeToDays;

  React.useEffect(() => {

    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);


      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setMessage("The Launch starting...");
      }

    })

    return () => {
      clearInterval(updateTime);
    }

  }, [time]);

  const handleClick = () => {
    setTime(newTime);
    console.log(time);
    setNewTime(0);
  };

  const handleChange = (e: any) => {
    let inputTime = e.target.value;
    setNewTime(inputTime);
  };

  return (
    <div className="flex min-h-screen flex-col items-center py-2 bg-[#1e1f29]">
      <Head>
        <title>Launch Countdown Timer | 5 Web apps template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header message={message} />

      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

      <TimerInput value={newTime} handleClick={handleClick} handleChange={handleChange} />

      <Footer />

    </div>
  )
}

export default CountDownTimer;