import React, {useState} from 'react'
import Blog from './Blog'
import {ThemeContext} from './context/theme-context'
export default function LightAndDarkMode() {
  const [theme, setTheme] = useState("Dark")
  return (
    <ThemeContext>
    <Blog theme={theme}/>
    </ThemeContext>
  )
}
