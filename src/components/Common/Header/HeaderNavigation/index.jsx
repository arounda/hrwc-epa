import { navLinks } from '@/constants/navLinks';
import Link from 'next/link';
import styled from 'styled-components';
import s from './headerNavigation.module.scss';

const StyledSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: 'var(--dark)';
  transition: all var(--btn-hover-transition);
`;

const HeaderNavigation = ({
  isMenuOpen,
  onMenuOpen,
}) => {
  return (
    <nav className={s.headerNav}>
      <ul className={s.headerDesktopNav}>
        {navLinks.map(item => (
          <li
            key={item.id}
            className={s.headerNavListItem}
          >
            <Link href={item.url}>
              <StyledSpan>
                {item.title}
              </StyledSpan>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={s.headerMobileNav}
        style={{
          transform: `${isMenuOpen
            ? 'translateX(0%)'
            : 'translateX(100%)'
            }`
        }}
      >
        <div className={s.headerMobileNavWrapper}>
          <ul className={s.headerMobileNavList}>
            {navLinks.map(item => (
              <li
                className={s.headerNavListItem}
                key={item.id}
              >
                <Link
                  href={item.url}
                  className={s.headerNavLink}
                  onClick={() => onMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={s.headerMobileNavOverlay}
          onClick={() => onMenuOpen(false)}
        ></div>
      </div>
    </nav>
  )
};

export default HeaderNavigation;
