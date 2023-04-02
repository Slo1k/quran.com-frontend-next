import React from 'react';

import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { useSelector, shallowEqual } from 'react-redux';

import Banner from '../Banner/Banner';

import styles from './Navbar.module.scss';
import NavbarBody from './NavbarBody';

import { selectNavbar } from 'src/redux/slices/navbar';
import { logEvent } from 'src/utils/eventLogger';

const Navbar = () => {
  const { t } = useTranslation('common');
  const { isVisible: isNavbarVisible } = useSelector(selectNavbar, shallowEqual);

  const onBannerDonateButtonClicked = () => {
    logEvent('donate_button_clicked', {
      source: 'sticky_banner',
    });
  };
  return (
    <>
      <div className={styles.emptySpacePlaceholder} />
      <nav className={classNames(styles.container, { [styles.hiddenNav]: !isNavbarVisible })}>
        <Banner
          cta={t('fundraising-sticky-banner.cta')}
          text={t('fundraising-sticky-banner.title')}
          href="https://donate.quran.com"
          onClick={onBannerDonateButtonClicked}
        />
        <NavbarBody />
      </nav>
    </>
  );
};

export default Navbar;
