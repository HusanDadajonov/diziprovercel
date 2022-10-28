import { useState,useMemo } from "react";
import { useSelector } from "react-redux";
import { darkTheme, GlobalStyles, lightTheme } from "./Theme";

const ThemeProviderWrapper = function (props) {
    const [theme,setTheme] = useState("light")
    const themeStatus = useSelector((state) => state.themeSlice.ThemStatus)

    useMemo(()=> {
        if(typeof window !== 'undefined'){
            const status =  localStorage.getItem("theme")
            status === "true" ? setTheme("light") : setTheme("dark")
        }
         
     },[themeStatus])


    return (
        <div>
            { props.children }
            <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme}/>
        </div>
    );
};

export default ThemeProviderWrapper;

