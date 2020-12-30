import { create } from 'domain';
import React from 'react';

const IssueCard: React.FC<{
  number: number,
  title: string,
  user: string,
  created_at: Date,
  comments: number
}> = ({
  number,
  title,
  user,
  created_at,
  comments
}) => {
  console.log(comments);

  return (
    <div className="issue-card flexible j-sb ai-c">
      <div>
        <h3>#{number} {title}</h3>
        <p>작성자: {user}, 작성일: {created_at}</p>
      </div>
      <span>코멘트: {comments}</span>
    </div>
  )
}

export default IssueCard;