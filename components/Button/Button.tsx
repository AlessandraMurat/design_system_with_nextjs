export type ButtonProps = {
    children: React.ReactNode

    //Extendendo as propriedades do button nativo do HTML
} & React.ButtonHTMLAttributes<HTMLButtonElement>
  

const Button = ({children, className, disabled, ...rest}: ButtonProps) => {
    const generalStyle = 'rounded-md px-lg py-2xs text-lg'
    const Btn = (classes: string) => {
        return <button
        //Passando a props className para o button para que possa ser adicionada classes complementares
       
        className={`${generalStyle} ${className} ${classes}`} 
        disabled={disabled}
        {...rest}
        >
            {children}
        </button>
    }

    return Btn(disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white' )
   
}
    
export default Button