import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

interface ErrorPageProps {
    className?: string
}

const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation('translation');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames('', {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

export default ErrorPage;
