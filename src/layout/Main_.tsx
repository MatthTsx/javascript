import React from 'react'
import { One } from './components'
import Mouse_ from './Mouse_'

function Main_() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-gradient-to-b from-[#026d5f] to-[#151a2c]">
        <div className='absolute w-[5%] h-[80%] flex flex-col justify-evenly hover:left-0
        -left-10 transition-all duration-300 hover:scale-100 scale-90 drop-shadow-2xl'>
            <div className='w-full h-[10%] rounded-tr-full bg-[#08080f]'/>
            <div className='w-full h-[80%] bg-[#08080f]'>

            </div>
            <div className='w-full h-[10%] bg-[#08080f] rounded-br-full'/>
        </div>
        <div className='w-full h-screen flex items-center justify-center'>
            <One/>
        </div>
        <Mouse_/>
    </main>
  )
}

export default Main_