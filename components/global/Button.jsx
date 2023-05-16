
const Button = ({buttonText, className, type}) => {
  return (
    <button type={type} className={`px-6 py-3 rounded-lg text-lg ${className && className}`} >
      {buttonText}
    </button>
  )
}

export default Button