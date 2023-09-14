
import '../app/styles/index.scss';
import { useTheme } from "app/provider/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';

const App = () => {
    const { theme } = useTheme()
    return(
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;