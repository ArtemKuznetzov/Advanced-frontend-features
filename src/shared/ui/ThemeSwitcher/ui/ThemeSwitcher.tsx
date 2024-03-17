import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import React, {FC} from 'react'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light1.svg'
import DarkIcon from 'shared/assets/icons/theme-dark1.svg'
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const { theme, toggleTheme} = useTheme()
    const Icon = theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {Icon}
        </Button>
    );
};

export default ThemeSwitcher;