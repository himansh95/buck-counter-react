import React from 'react';
import { useTranslation } from 'react-i18next';
import './navBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">{t('nav.item.home')}</Link>
        </li>
        <li>
          <Link to="/accounts">{t('nav.item.accounts')}</Link>
        </li>
        <li>
          <Link to="/transactions">{t('nav.item.transactions')}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
