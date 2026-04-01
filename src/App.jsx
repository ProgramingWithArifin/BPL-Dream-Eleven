import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import PlayerSection from './components/Playersection/PlayerSection'
import Subscription from './components/Subscription/Subscription'
import Loding from './components/loding/Loding'
const fetchPlayer =async ()=>{
  const res = await fetch("./player.json");
  return res.json();
}
const playersPromise = fetchPlayer();
function App() {
  const [coin, setCoin]=useState(50000)
  return (
    <div className='space-y-5'>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Suspense fallback=<Loding></Loding>>
        <PlayerSection playersPromise={playersPromise} setCoin={setCoin} coin={coin}></PlayerSection>
      </Suspense>
      <Subscription></Subscription>
    </div>
  )
}

export default App
