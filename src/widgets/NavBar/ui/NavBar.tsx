import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string
}

export const NavBar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
        </div>
    </div>
);
