import React, { useEffect, useState } from 'react'

function Four() {
    const [dollarValue, setDollarValue] = useState<number>(0)
    const [dollar_compra, setDollar_compra] = useState<number>(0)

    const calc = () => {
        try {
            const p = document.getElementById("response") as HTMLElement
            p.textContent = (dollar_compra * dollarValue || 0).toString()
        } catch (error) {
            
        }
    }

    useEffect(() => {
        calc()
    },[dollar_compra, dollarValue])

  return (
    <div className='jss'>
        <div>
            <label>Cotação do dólar</label>
            <input type="number" onChange={(e) => setDollarValue( parseFloat( e.target.value ) )} className="interact inte-input"/>
        </div>
        <div>
            <label>Quantidade de dólars: </label>
            <input type="number" onChange={(e) => setDollar_compra( parseFloat( e.target.value ) )} className="interact inte-input"/>
        </div>
        <p>Preço: R$<span id="response"/></p>
    </div>
  )
}

export default Four