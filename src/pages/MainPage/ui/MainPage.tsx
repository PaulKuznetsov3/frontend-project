import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('новый текст')}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
