export interface RepoIssueList {
  config: Object,
  data: Array<Object>
  headers: Headers,
  request: Request,
  status: number,
  statusText: string
}

export interface IssueBody {
  number: number,
  title: string,
  user: string,
  created_at: Date,
  comments: number,
  body: string,
  avatar?: string
}