import React, { useEffect, useState } from 'react'

function One() {
    const [paes, setPaes] = useState<number>(0)
    const [milk, setMilk] = useState<number>(0)

    const calc = () => {
        try {
            const resp = paes * 1.25 + milk * 4.5 || 0
            const response_client = document.getElementById("response") as HTMLElement
            response_client.textContent = resp.toString();
        } catch (error) {}
    }

    useEffect(() => {
        calc()
    },[milk,paes])

  return (
    <div className='w-[50%] h-[50%] bg-blue-500 p-4'>
        <input type={"number"} onChange={(e) => setPaes( parseFloat(e.target.value) )}
        className={"interact inte-input"}/>
        <input type={"number"} onChange={(e) => setMilk( parseFloat(e.target.value) )}
        className={"interact inte-input"}/>
        <p id='response'></p>
    </div>
  )
}

export default One