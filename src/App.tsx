import React, { useEffect, useState } from 'react';
import api from './api/common';
import './App.css';

import IssueList from './components/issueList';

const App: React.FC = () => {
  const [issueList, setIssueList] = useState(null);
  const owner = 'Angular';
  const repoName = 'Angular-cli';

  useEffect(() => {
    const fetchData = async () => {
      const result =
        await api.send<any>('repos/angular/angular-cli/issues')
          .then(({ data }) => data);

        console.log(result);

      setIssueList(result);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{owner} / {repoName}</h1>
      {
        issueList
        ? <IssueList data={issueList}></IssueList>
        : null
      }
    </div>
  );
}

export default App;
