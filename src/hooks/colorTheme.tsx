import { themeDark } from '../theme/themeDark';
import { themeLight } from '../theme/ThemeLight';
import { useSelector } from 'react-redux';

export function useAppTheme() {
    const isDark = useSelector((state: any) => state.app.isDark);
    return isDark  ? themeDark.colors : themeLight.colors;
}
