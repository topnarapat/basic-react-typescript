import React, { Component } from 'react';
import { ThemeContext } from './App';

type Props = {};

type State = {};

class ClassContextComponent extends Component<Props, State> {
  state = {};

  themeStyles(dark: any) {
    return {
      backgroundColor: dark ? '#333' : '#CCC',
      color: dark ? '#CCC' : '#333',
      padding: '2rem',
      margin: '2rem',
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassContextComponent;
