import api from "./config";
import registerInterceptors from "./interceptors";
import registerIssueApi from "./issueApi";

registerInterceptors(api);

export const issueApi = registerIssueApi(api);
