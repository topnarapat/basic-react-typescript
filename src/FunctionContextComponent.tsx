import React, { useContext } from 'react';
import { ThemeContext } from './App';

type Props = {};

export default function FunctionContextComponent({}: Props) {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
  return <div style={themeStyles}>Function Theme</div>;
}
