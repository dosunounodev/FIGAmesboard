import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import HomePage from "../pages/HomePage";
import GamesPage from "../pages/Games/GamesPage";
import GamesAddPage from "../pages/Games/GamesAddPage";
import GamesAddBatchPage from "../pages/Games/GamesAddBatchPage";
import ConsolesPage from "../pages/Consoles/ConsolesPage";
import ConsolesAddPage from "../pages/Consoles/ConsolesAddPage";
import FranchisesPage from "../pages/Franchises/FranchisesPage";
import FranchisesAddPage from "../pages/Franchises/FranchisesAddPage";
import SettingsPage from "../pages/SettingsPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games" component={GamesPage} />
          <Route exact path="/games/add" component={GamesAddPage} />
          <Route exact path="/games/addbatch" component={GamesAddBatchPage} />
          <Route exact path="/consoles" component={ConsolesPage} />
          <Route exact path="/consoles/add" component={ConsolesAddPage} />
          <Route exact path="/franchises" component={FranchisesPage} />
          <Route exact path="/franchises/add" component={FranchisesAddPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/search" component={SearchResultsPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}
