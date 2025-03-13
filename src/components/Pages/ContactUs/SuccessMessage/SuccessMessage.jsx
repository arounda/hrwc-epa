import ButtonPrimary from '@/components/Common/ButtonPrimary';

const SuccessMessage = () => {
  return (
    <>
      <h2 className='heading-h3 mb-8'>
        Thank You
      </h2>

      <p
        className='text'
        style={{
          marginBottom: '24px'
        }}
      >
        You submission has been successfully received.
      </p>

      <ButtonPrimary
        text='Ok'
        isButtonBlue={true}
        isHome={false}
      />
    </>
  )
};

export default SuccessMessage;
