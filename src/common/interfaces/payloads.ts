import { IssueStateType } from "@/common/interfaces/types";

export interface IssuePayload {
  organization: string;
  repository: string;
  page: number;
  state: IssueStateType;
}
