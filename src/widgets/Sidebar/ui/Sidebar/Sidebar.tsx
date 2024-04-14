import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import Button, { ButtonsSize, ButtonTheme } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation('translation');

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonsSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная страница')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                
                <LangSwitcher className={cls.lang} />
            </div>
        </div>

    );
};

export default Sidebar;
