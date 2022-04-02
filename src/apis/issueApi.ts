import { AxiosInstance } from "axios";

import { withQuery } from "@/common/helpers";
import { IssuePayload } from "@/common/interfaces";

function registerIssueApi(api: AxiosInstance) {
  return {
    getIssues: ({
      organization,
      repository,
      page,
      state,
    }: IssuePayload): any => {
      return api.get(
        withQuery(`/repos/${organization}/${repository}/issues`, {
          page,
          state,
        }),
      );
    },
  };
}

export default registerIssueApi;
