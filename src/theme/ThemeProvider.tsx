import React, { FC } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_LOCAL_KEY} from './ThemeContext';

    
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_LOCAL_KEY) as Theme || Theme.LIGHT;


 const ThemeProvider: FC = ({children}) => {
  


    // const [theme, setTheme] = React.useState<Theme>(Theme.LIGHT);
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);





    const defaultProps = React.useMemo(() => ({
            theme: theme ,
            setTheme: setTheme
    }), [theme])

    return (
    
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;