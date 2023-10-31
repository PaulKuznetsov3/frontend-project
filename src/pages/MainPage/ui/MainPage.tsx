import { BugButton } from 'app/provider/ErrorBoundary';
import { Counter } from 'entetis/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState(' ');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input
                placeholder="Введите текст"
                onChenge={onChange}
                value={value}
            />
        </div>
    );
};

export default MainPage;
