import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from './themeSlice';

import { ReactComponent as LightIcon } from '../icons/icon-sun.svg';
import { ReactComponent as DarkIcon } from '../icons/icon-moon.svg';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const toggleTheme = () =>
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div onClick={toggleTheme}>
            {theme === 'light' ? (
                <DarkIcon style={{ cursor: 'pointer' }} />
            ) : (
                <LightIcon style={{ cursor: 'pointer' }} />
            )}
        </div>
    );
};

export default ThemeSwitcher;
