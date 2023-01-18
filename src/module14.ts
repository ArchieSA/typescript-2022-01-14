export interface Button {

}

export const Button: (props: Button) => '' = () => {
    return ''
}


interface Props {
    className: string
}

export const Button2: (props: Props) => '' = () => {
    return ''
}


const props: Parameters<typeof Button2>[0] = { className: 'button'};