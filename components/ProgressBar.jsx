const ProgressBar = (props) => {
    const { bgColor, completed } = props;
        
    const fillerStyles = {
      backgroundColor: bgColor,
      borderRadius: 'inherit',
      width: `${completed}%`
    }
  
    return (
      <div className={`h-4 w-full bg-[#D0D0D2] rounded-lg`}>
        <div style={fillerStyles} className='h-full'>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;