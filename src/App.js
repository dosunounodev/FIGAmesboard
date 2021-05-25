import React from "react";
import DataProvider from "contexts/DataProvider";
import AppRouter from "routers/AppRouter";
import "styles/main.scss";

function App() {
  return (
    <>
      <DataProvider>
        <AppRouter />
      </DataProvider>
    </>
  );
}

export default App;
