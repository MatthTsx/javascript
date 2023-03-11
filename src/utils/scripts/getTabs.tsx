import { Four, One, Three, Two } from "~/layout/components";

export const getTab = (index : number) => {
    if(index == 0) return <></>
    if(index == 1) return <One/>
    if(index == 2) return <Two/>
    if(index == 3) return <Three/>
    if(index == 4) return <Four/>
}

export const changeTab = (newValue: number, tab : number) => {
    if(tab == newValue) return 0
    return newValue
}