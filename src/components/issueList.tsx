import React, { useState, useEffect } from 'react';
import IssueCard from './issueCard';
import api from '../api/common';

const IssueList: React.FC = () => {
  const [issueList, setIssueList] = useState([] as Array<object>);

  useEffect(() => {
    const fetchData = async () => {
      const result =
        await api.send<any>('repos/angular/angular-cli/issues')
          .then(({ data }) => data) as Array<object>;

        console.log(result);

      setIssueList(result);
    }

    fetchData();
  }, []);

  return (
    <div className="issue-list">
      {
        issueList ?
          issueList.map((issue: any) => {
            return <IssueCard
              number={issue.number}
              title={issue.title}
              user={issue.user.login}
              created_at={issue.created_at}
              comments={issue.comments}
              body={issue.body}
              avatar={issue.user.avatar_url}
            />
          })
        : null
      }
    </div>
  );
}

export default IssueList;