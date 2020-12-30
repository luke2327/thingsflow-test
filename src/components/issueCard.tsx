import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IssueBody } from '../@types/issue';
import Advertisement from './ad';

const IssueCard: React.FC<IssueBody & { ad?: boolean }> = ({
  number,
  title,
  user,
  created_at,
  comments,
  body,
  avatar,
  ad
}) => {
  const history = useHistory();
  const location = useLocation();

  const isDetailPage = location.state;
  const dive = useCallback(() => {
    if (!isDetailPage) {
      const to = `/detail/${number}`;

      history.push({
        pathname: to,
        state: {
          number,
          title,
          user,
          created_at,
          comments,
          body,
          avatar
        }
      });
    }
  }, [number, history]);

  return (
    <>
      <div className="issue-card flexible j-sb ai-c" onClick={dive}>
        <div>
          <h3>#{number} {title}</h3>
          <p>작성자: {user}, 작성일: {created_at}</p>
        </div>
        <div className="flexible vertical ai-fe">
          {
            isDetailPage
            ? <img src={avatar} className="avatar-size" />
            : null
          }
          <span className="issue-comment-count">코멘트: {comments}</span>
        </div>
      </div>
      {
        ad ? <Advertisement /> : null
      }
    </>
  )
}

export default IssueCard;