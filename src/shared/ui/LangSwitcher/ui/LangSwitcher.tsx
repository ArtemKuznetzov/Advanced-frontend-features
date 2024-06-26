import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short = true }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'Яз' : 'Язык')}
        </Button>
    );
};

export default LangSwitcher;
