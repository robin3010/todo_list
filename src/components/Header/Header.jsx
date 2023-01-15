import clsx from 'clsx';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = memo(() => {
  console.log('Render Header');

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          <div className={clsx(
            'navbar-nav',
            [styles.header__nav],
          )}
          >
            <NavLink Link to="/" className="nav-link">
              <i className="fa-solid fa-house" />
              {' '}
              Home
            </NavLink>
            <h2 className="m-0 py-0 text-center">My Todo List</h2>
            <NavLink to="/tasks" className="nav-link">Tasks</NavLink>
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
});
