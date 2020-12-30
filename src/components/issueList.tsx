import React from 'react';
import IssueCard from './issueCard';

const IssueList: React.FC<{
  data: Array<object> | null
}> = ({ data: issueList }) => {

  return (
    <div className="issue-list">
      {
        issueList?.map((issue: any) => {
          return <IssueCard
            number={issue.number}
            title={issue.title}
            user={issue.user.login}
            created_at={issue.created_at}
            comments={issue.comments}
          />
        })
      }
    </div>
  );
}

export default IssueList;