import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ThemeProvider from './ThemeProvider';

export default function LearnUseContext() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
