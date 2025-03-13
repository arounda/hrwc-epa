import Link from 'next/link';
import styled from 'styled-components';

const StyledButtonPrimary = styled.div`
  min-width: 160px;
  min-height: 50px;
  padding: 10px 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  background-color: ${({
  $isHeaderWhite,
  $isButtonBlue,
  $isHome,
  $isHeader,
}) => (
    $isHeaderWhite
      || $isButtonBlue
      || (!$isHome && $isHeader)
      ? 'var(--primary)'
      : 'var(--white)'
  )};
  border: 1px solid var(--white);
  border-color: ${({
    $isHeaderWhite,
    $isButtonBlue,
    $isHome,
    $isHeader,
  }) => (
    $isHeaderWhite
      || $isButtonBlue
      || (!$isHome && $isHeader)
      ? 'var(--primary)'
      : 'var(--white)'
  )};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${({
    $isHeaderWhite,
    $isButtonBlue,
    $isHome,
    $isHeader,
  }) => (
    $isHeaderWhite
      || $isButtonBlue
      || (!$isHome && $isHeader)
      ? 'var(--white)'
      : 'var(--primary)'
  )};
  transition: all var(--btn-hover-transition);

  & path {
    transition: all var(--btn-hover-transition);
  }

  &:hover path {
    stroke: ${({ $isButtonBlue }) => (
    $isButtonBlue ? 'var(--primary)' : 'var(--white)'
  )};
  }

  &:hover {
    color: ${({
    $isHeaderWhite,
    $isButtonBlue,
    $isHome,
    $isHeader,
  }) => (
    $isHeaderWhite
      || $isButtonBlue
      || (!$isHome && $isHeader)
      ? 'var(--primary)'
      : 'var(--white)'
  )};
    background-color: transparent
  }
`;

const ButtonPrimary = ({
  text,
  link = '/',
  isHeaderWhite,
  hasIcon = false,
  isButtonBlue = false,
  isHome,
  isHeader = false,
  isLink = true,
  istargetBlank = false
}) => {
  const iconColor = isButtonBlue ? 'white' : '#2B34FF';

  const StyledButton = () => (
    <StyledButtonPrimary
      $isHeaderWhite={isHeaderWhite}
      $isButtonBlue={isButtonBlue}
      $isHome={isHome}
      $isHeader={isHeader}
    >
      {text}

      {hasIcon && (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 17L17 7M17 7L7 7M17 7V17"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </StyledButtonPrimary>
  )

  return (isLink ? (
    <Link
      href={link}
      target={istargetBlank ? '_blank' : '_self'}
    >
      <StyledButton />
    </Link>
  ) : (
    <StyledButton />
  ))
};

export default ButtonPrimary;
