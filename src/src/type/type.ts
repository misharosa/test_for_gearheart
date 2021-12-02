export type Color = {
    color: string,
    id: number,
    conditional: boolean,
    conditional1?: boolean,
}

export interface Props {
    items: Color[]
    onChoose: (colorId: number) => void
    turn: boolean
}