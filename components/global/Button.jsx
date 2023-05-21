
const Button = ({buttonText, className, type, children}) => {
  return (
    <button type={type} className={`px-6 py-3 rounded-lg text-lg ${className && className}`} >
      {buttonText}
      {children}
    </button>
  )
}

export default Button