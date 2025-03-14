'use client';

import { useState } from 'react';
import s from './userLogin.module.scss';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const forgotPinURL = '#';

const inputStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  fontSize: '1.6rem',
  outline: 'none',
  fontFamily: 'var(--font-inter)',
  paddingRight: '1.8rem',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& input::placeholder': {
    color: 'black',
    opacity: .5,
  },
  '& .MuiOutlinedInput-input': {
    padding: '1.6rem 1.8rem',
  },
};

const CustomVisibility = () => (
  <Visibility sx={{ color: 'black', opacity: .5 }} fontSize="large" />
);

const CustomVisibilityOff = () => (
  <VisibilityOff sx={{ color: 'black', opacity: .5 }} fontSize="large" />
);

const UserLogin = () => {
  const [ formState, setFormState ] = useState({
    userName: '',
    pin: '',
    employerCode: '',
  });
  const [ showUsername, setShowUsername ] = useState(false);
  const [ showPin, setShowPin ] = useState(false);

  const handleClickShow = (fn) => fn((prev) => !prev);

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormState(prev => ({
      ...prev,
      [ name ]: value,
    }))
  };

  const clearFormFields = () => {
    setFormState({
      userName: '',
      pin: '',
      employerCode: '',
    })
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('form has been submitted', formState);
    clearFormFields();
  };

  return (
    <section className="section">
      <div className="container">
        <div className={s.userLoginWrapper}>
          <div className={s.userLoginFormWrapper}>
            <div className={s.userLoginFormTop}>
              <h2 className='mb-8 is-white'>
                User Login
              </h2>

              <p className="text is-white">
                Please enter your information below.
              </p>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className={s.userLoginForm}
            >
              <div className={s.userLoginFormInputs}>
                <OutlinedInput
                  id="userName"
                  type={showUsername ? 'text' : 'password'}
                  placeholder='Username'
                  sx={inputStyle}
                  name='userName'
                  required
                  onChange={handleInputChange}
                  value={formState.userName}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleClickShow(setShowUsername)}
                        onMouseDown={preventDefault}
                        onMouseUp={preventDefault}
                        edge="end"
                      >
                        {showUsername
                          ? <CustomVisibilityOff />
                          : <CustomVisibility />
                        }
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <OutlinedInput
                  id="pin"
                  type={showPin ? 'text' : 'password'}
                  placeholder='PIN'
                  sx={inputStyle}
                  name='pin'
                  required
                  onChange={handleInputChange}
                  value={formState.pin}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleClickShow(setShowPin)}
                        onMouseDown={preventDefault}
                        onMouseUp={preventDefault}
                        edge="end"
                      >
                        {showPin
                          ? <CustomVisibilityOff />
                          : <CustomVisibility />
                        }
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <input
                  className={s.userLoginFormInput}
                  placeholder='Employer Code'
                  type="text"
                  name="employerCode"
                  id="employerCode"
                  onChange={handleInputChange}
                  value={formState.employerCode}
                  required
                />
              </div>

              <div className={s.userFormBottom}>
                <button
                  type='submit'
                  className={s.userLoginFormButton}
                >
                  Login
                </button>

                <a
                  href={forgotPinURL}
                  className='text is-white is-half-opacity'
                >
                  Forgot your PIN?
                </a>
              </div>
            </form>
          </div>

          <div className={s.userLoginCards}>
            <div className={s.userLoginCard}>
              <div className={s.userLoginIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M7.33268 26.6673H10.666M23.3327 22.6673H21.9993M10.666 8.00065H6.93268C5.43921 8.00065 4.69247 8.00065 4.12204 8.2913C3.62028 8.54696 3.21233 8.95491 2.95666 9.45668C2.66602 10.0271 2.66602 10.7738 2.66602 12.2673V17.0673C2.66602 18.5608 2.66602 19.3075 2.95666 19.878C3.21233 20.3797 3.62028 20.7877 4.12204 21.0433C4.69247 21.334 5.43921 21.334 6.93268 21.334H10.666M20.266 26.6673H25.066C26.5595 26.6673 27.3062 26.6673 27.8767 26.3767C28.3784 26.121 28.7864 25.7131 29.042 25.2113C29.3327 24.6409 29.3327 23.8941 29.3327 22.4007V9.60065C29.3327 8.10718 29.3327 7.36044 29.042 6.79001C28.7864 6.28824 28.3784 5.8803 27.8767 5.62463C27.3062 5.33398 26.5595 5.33398 25.066 5.33398H20.266C18.7725 5.33398 18.0258 5.33398 17.4554 5.62463C16.9536 5.8803 16.5457 6.28824 16.29 6.79001C15.9993 7.36044 15.9993 8.10718 15.9993 9.60065V22.4007C15.9993 23.8941 15.9993 24.6409 16.29 25.2113C16.5457 25.7131 16.9536 26.121 17.4554 26.3767C18.0258 26.6673 18.7725 26.6673 20.266 26.6673Z" stroke="url(#paint0_linear_2712_76672)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_2712_76672" x1="29.3327" y1="26.6673" x2="14.5438" y2="-1.0122" gradientUnits="userSpaceOnUse">
                      <stop offset="0.222951" stopColor="#3A40FF" />
                      <stop offset="0.376393" stopColor="#2D2EF2" />
                      <stop offset="1" stopColor="#2F0092" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h3 className={s.userCardLoginHeading}>
                24/7 Availability
              </h3>

              <p className={`text ${s.userLoginText}`}>
                Access your documents anytime, anywhere, on any device.
              </p>
            </div>

            <div className={s.userLoginCard}>
              <div className={s.userLoginIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.userCardLoginHeading}>
                Instant Access
              </h3>

              <p className={`text ${s.userLoginText}`}>
                View pay statements and year-end documents immediately after payroll processing.
              </p>
            </div>

            <div className={s.userLoginCard}>
              <div className={s.userLoginIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 18L19 20.5M19 20.5L22 18M19 20.5V15M22 10H2M22 12V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H12" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.userCardLoginHeading}>
                Downloadable Formats
              </h3>

              <p className={`text ${s.userLoginText}`}>
                Download your documents in PDF format for easy printing or saving.
              </p>
            </div>

            <div className={s.userLoginCard}>
              <div className={s.userLoginIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8.66602 25.3332C5.35231 25.3332 2.66602 22.6469 2.66602 19.3332C2.66602 16.2084 5.05469 13.6416 8.10567 13.359C8.72977 9.56268 12.0263 6.6665 15.9993 6.6665C19.9724 6.6665 23.2689 9.56268 23.893 13.359C26.944 13.6416 29.3327 16.2084 29.3327 19.3332C29.3327 22.6469 26.6464 25.3332 23.3327 25.3332C17.4796 25.3332 13.7904 25.3332 8.66602 25.3332Z" stroke="url(#paint0_linear_2712_76693)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_2712_76693" x1="29.3327" y1="25.3332" x2="17.3883" y2="-0.216198" gradientUnits="userSpaceOnUse">
                      <stop offset="0.222951" stopColor="#3A40FF" />
                      <stop offset="0.376393" stopColor="#2D2EF2" />
                      <stop offset="1" stopColor="#2F0092" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h3 className={s.userCardLoginHeading}>
                Secure Document Storage
              </h3>

              <p className={`text ${s.userLoginText}`}>
                Your payroll documents are stored securely in the cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserLogin;
