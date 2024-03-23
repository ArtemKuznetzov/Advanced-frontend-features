import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/ErrorPage';
import styles from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div className={styles.MainPage}>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
