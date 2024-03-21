import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames('loader', {}, [className])}>
        <span />
    </div>
);

export default Loader;
