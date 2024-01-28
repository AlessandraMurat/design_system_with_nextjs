export type ButtonProps = {
    children: React.ReactNode

    //Extendendo as propriedades do button nativo do HTML
} & React.ButtonHTMLAttributes<HTMLButtonElement>
  

const Button = ({children, className}: ButtonProps) => {
    return <button
    //Passando a props className para o button para que possa ser adicionada classes complementares
    className={`bg-[#2D5BFF] rounded-lg px-8 py-3 text-[#ffffff] text-lg fonr ${className}`}
    >{children}</button>
}

export default Button