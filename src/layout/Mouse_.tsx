import React, { useEffect, useState } from 'react'
import { interactions } from '~/utils/scripts';

function Mouse_() {
    const [load, setLoad] = useState(true);
    const [inte, setInte] = useState(false);
    const [visible,setvisible] = useState(0);

    const Mouse = (e : MouseEvent, interact: boolean) => {
        try {
            var mouse = document.getElementById("mouse") as HTMLDivElement
            const x = e.clientX - mouse.offsetWidth / 2,
                y = e.clientY - mouse.offsetHeight / 2

            const keyframes = {
                transform: `translate(${x}px,${y}px)`
            }
            mouse.animate(keyframes,{
                duration: 800,
                fill:"forwards"
            })

            const keyframes2 = {
                width: `${interact? 3 : 1}rem`,
                height: `${interact? 3 : 1}rem`,
            }
            mouse.animate(keyframes2,{
                duration: 400,
                fill:"forwards"
            })

            if(!interact){
                const keyframes_default = {
                    opacity: "1.0"
                }
                mouse.animate(keyframes_default, { duration:400, fill:"forwards" })
            }
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if(!load) return
        setLoad(false)
        window.onmousemove = e => {
            const target = e.target as HTMLElement
            const interact = target.classList.contains("interact") ? true : false
            setInte(interact)
            Mouse(e, interact)
            setvisible(0)
            interactions.forEach((i,index) => {
                if(target.classList.contains(i.i)){
                    i.func()
                    setvisible(index + 1)
                    return
                }
            })
        }
    },[load])


  return (
    <div className={`fixed w-4 h-4 bg-white z-[100000] top-0 left-0 rounded-full pointer-events-none
    mouse`}
    id={"mouse"}>
        <div className={`absolute w-full h-full flex flex-col items-center justify-center transition-all
        ${visible != 1 && 'hide'}`}>
            <div className='w-[25%] h-[10%] bg-black/75 rounded-sm'/>
            <div className='w-[10%] h-[15%] bg-black/75'/>
            <div className='w-[25%] h-[10%] bg-black/75 rounded-sm'/>
        </div>
        <style>
            {`
                *{
                    ${inte && 'cursor: none;'}
                }
                .hide{
                    opacity: 0;
                    display: none;
                }
            `}
        </style>
    </div>
  )
}

export default Mouse_