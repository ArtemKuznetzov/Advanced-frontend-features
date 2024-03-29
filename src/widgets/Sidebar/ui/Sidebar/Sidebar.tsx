import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
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
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {t('Переключить')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
