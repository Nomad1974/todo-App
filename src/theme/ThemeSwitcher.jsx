
import useTheme from './useTheme';
import { ReactComponent as LightIcon } from '../icons/icon-sun.svg';
import { ReactComponent as DarkIcon } from '../icons/icon-moon.svg';

const ThemeSwitcher = () => {
    const [theme, toggleTheme] = useTheme();

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
