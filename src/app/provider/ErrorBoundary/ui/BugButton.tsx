import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const trow = () => setError(true);
    const { t } = useTranslation();
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={trow}>
            {t('throw error')}
        </Button>
    );
};
