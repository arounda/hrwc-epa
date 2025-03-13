const ErrorMessage = ({ text }) => {
  return (
    <p className='text'
      style={{
        color: '#F00',
      }}>
      {text}
    </p>
  )
};

export default ErrorMessage;
