import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "components/Layout";
import HomePage from "pages/Home/HomePage";
import GamesPage from "pages/Games/GamesPage";
import FranchisesPage from "pages/Franchises/FranchisesPage";
import ConsolesPage from "pages/Consoles/ConsolesPage";
import AddPage from "pages/Add/AddPage";
import AddBatchPage from "pages/AddBatch/AddBatchPage";
import SearchResultsPage from "pages/SearchResults/SearchResultsPage";
import SettingsPage from "pages/Settings/SettingsPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";

export default function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/games" component={GamesPage} />
          <Route exact path="/franchises" component={FranchisesPage} />
          <Route exact path="/consoles" component={ConsolesPage} />

          <Route exact path="/add" component={AddPage} />
          <Route exact path="/addbatch" component={AddBatchPage} />

          <Route exact path="/search" component={SearchResultsPage} />

          <Route exact path="/settings" component={SettingsPage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}
