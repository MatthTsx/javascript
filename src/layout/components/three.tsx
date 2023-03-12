import React, { useEffect, useState } from 'react'

function Three() {
    const [litros, setLitros] = useState<number>(0)
    const [distancia, setDistancia] = useState<number>(0)

    const calc = () => {
        try {
            const p = document.getElementById("response") as HTMLElement
            p.textContent = (distancia/litros || 0).toString()
        } catch (error) {
            
        }
    }

    useEffect(() => {
        calc()
    },[litros, distancia])

  return (
    <div className='jss'>
        <div>
            <label>Litros: </label>
            <input type="number" onChange={(e) => setLitros( parseFloat( e.target.value ) )} className="interact inte-input"/>
        </div>
        <div>
            <label>Distancia:</label>
            <input type="number" onChange={(e) => setDistancia( parseFloat( e.target.value ) )} className="interact inte-input"/>
        </div>
        <p>Consumo de KM/L: <span id="response"/></p>
    </div>
  )
}

export default Three