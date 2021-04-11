import React from "react";
import "./App.css";
import Layout from "./layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import FeaturePage from "./pages/Feature.page";
import Header from "./components/header.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/features" component={FeaturePage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
