import React from 'react';
import './headerBar.scss';
import NavBar from './NavBar';
import { useTranslation } from 'react-i18next';

function HeaderBar() {
  const { t } = useTranslation();

  return (
    <header className="header-bar">
      <h1>{t('app.name')}</h1>
      <NavBar />
    </header>
  );
}

export default HeaderBar;
