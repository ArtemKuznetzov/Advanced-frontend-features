import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation('translation');
    const throwFunc = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwFunc}
            className={classNames('', {}, [])}
        >
            {t('Вызвать ошибку')}
        </Button>
    ); 
};

export default BugButton;
