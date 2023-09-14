import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
};

export const NavBar = ({className}: NavbarProps) => {
    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink> 
            </div> 
        </div>
    );
};
