import React, { useEffect, useState } from 'react'

function Three() {
    const [litros, setLitros] = useState<number>(0)
    const [distancia, setDistancia] = useState<number>(0)

    const calc = () => {
        try {
            const p = document.getElementById("response") as HTMLElement
            p.textContent = (distancia/litros).toString()
        } catch (error) {
            
        }
    }

    useEffect(() => {
        calc()
    },[litros, distancia])

  return (
    <div className='jss'>
        <input type="number" onChange={(e) => setLitros( parseFloat( e.target.value ) )} />
        <input type="number" onChange={(e) => setDistancia( parseFloat( e.target.value ) )} />
        <p id='response'></p>
    </div>
  )
}

export default Three