import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import IssueList from './components/issueList';
import IssueDetail from './components/issueDetail';

const App: React.FC = () => {
  const owner = 'Angular';
  const repoName = 'Angular-cli';

  return (
    <div className="App cover">
      <Router>
        <h1>{owner} / {repoName}</h1>
        <Switch>
          <Route exact path="/">
            <IssueList />
          </Route>
          <Route path="/detail/:id">
            <IssueDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
