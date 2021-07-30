import React from 'react';
import DataProvider from 'contexts/DataProvider';
import AppRouter from 'routers/AppRouter';
import GlobalStyle from 'styles/GlobalStyle';
import ResetStyle from 'styles/ResetStyle';
import TypoStyle from 'styles/TypoStyles';

function App() {
  return (
    <>
      <DataProvider>
        <AppRouter />
        <ResetStyle />
        <GlobalStyle />
        <TypoStyle />
      </DataProvider>
    </>
  );
}

export default App;
