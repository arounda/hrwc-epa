import Link from 'next/link';
import styled from 'styled-components';

const StyledButtonSecondary = styled.div`
  min-width: 160px;
  min-height: 50px;
  padding: 10px 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid;
  border-color: ${({
    $isHeaderWhite,
    $isHome,
    $isHeader
  }) => (
    $isHeaderWhite || (!$isHome && $isHeader)
      ? 'var(--primary)'
      : 'var(--white)'
  )};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${({
    $isHeaderWhite,
    $isHome,
    $isHeader
  }) => (
    $isHeaderWhite || (!$isHome && $isHeader)
      ? 'var(--primary)'
      : 'var(--white)'
  )};
  transition: var(--btn-hover-transition);

  &:hover {
    color: ${({
      $isHeaderWhite,
      $isHome,
      $isHeader
    }) => (
      $isHeaderWhite || (!$isHome && $isHeader)
        ? 'var(--white)'
        : 'var(--primary)'
    )};
    background-color: ${({
      $isHeaderWhite,
      $isHome,
      $isHeader
    }) => (
      $isHeaderWhite || (!$isHome && $isHeader)
        ? 'var(--primary)'
        : 'var(--white)'
    )};
  }
`;

const ButtonSecondary = ({
  text,
  link,
  isHeaderWhite,
  isHome,
  isHeader = false,
  istargetBlank = false
}) => {
  return (
    <Link
      href={link}
      target={istargetBlank ? '_blank' : '_self'}
    >
      <StyledButtonSecondary
        $isHeaderWhite={isHeaderWhite}
        $isHome={isHome}
        $isHeader={isHeader}
      >
        {text}
      </StyledButtonSecondary>
    </Link>
  )
};

export default ButtonSecondary;
