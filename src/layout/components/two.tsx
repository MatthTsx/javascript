import React, { useState } from 'react'
import {ImBin2} from "react-icons/im"
import { Nota } from '~/utils/classes'
import type { addNota } from '~/utils/interfaces'
import { getMedias } from '~/utils/scripts'


function Two() {
  const [Notas, setNotas] = useState<Array<Nota>>([])
  const [addNota, setAddNota] = useState<addNota>({nota:null , peso: null})
  const [upd, setUpd] = useState(1)

  const AddNota_ = () => {
    try {
      if(addNota.nota == null || addNota.peso == null) return
      const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("#inputs_add_nota input")
      const nota_ = new Nota({peso: addNota.peso, nota: addNota.nota})
      setNotas([...Notas, nota_])
      inputs.forEach((i) => {
        i.value = ""
      })
      setAddNota({nota:null, peso:null})
    } catch (error) {
      
    }
  }

  const remove = (i: number) => {
    const arry = Notas
    try {
      arry.splice(i,1)
      setNotas(arry)
      setUpd(upd * -1)
    } catch (error) {
      
    }
  }

  const calc = () => {
    const resp = document.getElementById("response") as HTMLElement
    try {
      resp.textContent = getMedias(Notas).toString()
    } catch (error) {
      resp.textContent = "Error"
    }
  }

  return (
    <div className='jss flex items-center flex-col gap-y-4 justify-between h-[75%]'>
        <div className='w-full flex items-center flex-col gap-4 h-[80%] overflow-y-scroll'>
          {Notas?.map((n,i) => (
            <div key={i} className="flex justify-between w-[60%] border-b px-4 border-black">
              <div className=' flex flex-col'>
                <span className='font-semibold tracking-tighter'>Nota: {n.nota}</span>
                <span className='font-semibold tracking-tighter'>Peso: {n.peso}</span>
              </div>
              <button onClick={() => remove(i)} className="group inte-remove interact w-8 h-8 flex
              items-center justify-center">
                <ImBin2 className='group-hover:fill-red-500 group-hover:scale-110 transition-all pointer-events-none'/>
              </button>
            </div>
          ))}
        </div>
        <div id="inputs_add_nota" className='flex flex-col items-center justify-center gap-y-2'>
          <div className='flex'>
            <div>
              <label>Nota: </label>
              <input type="number" onChange={(e) => setAddNota({...addNota, nota: parseFloat(e.target.value)})}
              className="interact inte-input"/>
            </div>
            <div>
              <label>Peso: </label>
              <input type="number" onChange={(e) => setAddNota({...addNota, peso: parseFloat(e.target.value)})}
              className="interact inte-input"/>
            </div>
          </div>
          <div className='flex gap-x-4 items-center'>
            <button onClick={() => AddNota_()} className="interact p-2 px-4 bg-green-400 rounded-md bg-opacity-75
            hover:bg-opacity-100 transition-all inte-add hover:scale-105 duration-300">
              add
            </button>
            <button className='interact p-2 px-4 bg-orange-400 rounded-md bg-opacity-75
            hover:bg-opacity-100 transition-all inte-calc hover:scale-105 duration-300' onClick={() => calc()}>
              Calcular
            </button>
            <p>media: <span id="response"/></p>
          </div>
        </div>
    </div>
  )
}

export default Two