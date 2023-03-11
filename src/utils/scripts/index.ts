
const inputs = () => {
    return
    try {
        const mouse = document.getElementById("mouse") as HTMLElement
        mouse.animate({

        },{
            duration: 400,
            fill:"forwards"
        })
    } catch (error) {
        
    }
}

export const sleep = (ms : number) => new Promise(resolve => setTimeout(resolve, ms))

export const interactions = [
    {i: "inte-input", func:inputs}
]