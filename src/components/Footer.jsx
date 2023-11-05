import React from 'react'

const Footer = ({footerAPI: {title, links}}) => {
  return (
    <>
    <footer className='bg-theme pt-7 pb-5'>
      <div className='nike-container text-slate-200'>
        <div className='grid items-start grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-2xl w-full
        m-auto md:max-w-none md:gap-5'>
        {title?.map((val, i) => {
                  <div key={i} className='grid items-center'>
                    <h1 className='text-lg lg:text-base md:text-sm
                    uppercase font-semibold'>{val.title}</h1>
                  </div>
                })} 
                {links.map((list, i) =>(
                  <ul key={i} className='grid items-center bg-black
                  p-4 mx-3 sm:mx-5 gap-3 rounded-3xl '>
                    {list.map((link, i) =>(
                      <li key={i} className='text-sm sm:text-xs'>
                        {link.link}</li>
                    ))}
                  </ul>
                ))}
        </div>
        <div className='mt-5 text-center'>
          <p className='text-sm md:text-center'>Copyright<span 
          className='text-base font-bold'>&copy;</span>All Reserved Rights
          2022 <span className='font-semibold'>JSSTACK DEVELOPERS</span></p>
        </div>
      </div> 
    </footer>
    </>
    
  )
}

export default Footer 