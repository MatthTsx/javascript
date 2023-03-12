import type { Nota } from "../classes"

export const sleep = (ms : number) => new Promise(resolve => setTimeout(resolve, ms))

export const interactions = [
    {i: "inte-input"},
    {i: "inte-btn"},
    {i: "inte-btn-2"},
    {i: "inte-remove"},
    {i: "inte-add"},
    {i: "inte-calc"},
]

export const getMedias = (notas: Array<Nota>) => {
    let media = 0
    let pesos = 0
    notas.forEach((n) => {
        media += n.nota * n.peso
        pesos += n.peso
    })
    return media / pesos
}