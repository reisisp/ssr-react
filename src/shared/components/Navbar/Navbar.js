import React from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import cl from './Navbar.module.css';

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/products', name: 'Товары' },
    { path: '/create', name: 'Создать товар' }
  ]

  return (
    <nav className={cl.nav}>
      <ul className={cl.nav__list}>
        {links.map(link =>
          <li className={cl.nav__item} key={link.name}>
            <a className={link.path === location.pathname ? cn(cl.nav__link, cl.nav__link_active) : cl.nav__link} href={link.path}>{link.name}</a>
          </li>
        )}
      </ul>
    </nav>
  )
}
