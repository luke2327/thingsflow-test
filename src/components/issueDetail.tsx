import React from 'react';
import ReactMarkdown from 'react-markdown';
import IssueCard from './issueCard';
import { useLocation } from 'react-router-dom';
import { IssueBody } from '../@types/issue';

interface UseLocation {
  state: IssueBody
}

const IssueDetail: React.FC = () => {
  const { state } = useLocation() as UseLocation;

  return (
    <div>
      <IssueCard {...state}></IssueCard>
      <ReactMarkdown>{state.body}</ReactMarkdown>
    </div>

  )
}

export default IssueDetail;