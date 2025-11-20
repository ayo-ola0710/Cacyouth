interface ButtonProps {
    title:string
    containerClass:string
    handleClick?:() => void
}

const Button =({handleClick, containerClass, title}: ButtonProps) => {
    return (
        <button onClick={handleClick} className={`px-8 py-3 rounded-lg w-fit bg-linear-to-b from-black-light to-purple-100 ${containerClass}`}>
            <p className='text-sm'>{title}</p>
        </button>
    )
}

export default Button