
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

export const interactions = [
    {i: "inte-input", func:inputs}
]