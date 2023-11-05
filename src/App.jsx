
import React from 'react'
import { Cart, FlexContent, Footer, Hero, Sales, Stories, Navbar } from './components'
import { heroapi, popularsales, topratesales, highlight, 
  sneaker, story, footerAPI} from './data/data.js'

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  )
}

export default App