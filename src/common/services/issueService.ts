import { setRecoil } from "recoil-nexus";

import { issueApi } from "@/apis";
import { IssuePayload } from "@/common/interfaces";
import storageService from "@/common/services/storageService";
import { STORAGE_FAVORITE_ISSUE_KEY } from "@/common/storageKeys";
import { favoriteIssuesAtom, issueAtom, loadingAtom } from "@/common/store";

export async function fetchIssues(payload: IssuePayload) {
  try {
    setRecoil(loadingAtom, true);
    const issues: any[] = await issueApi.getIssues(payload);

    if (issues) {
      setRecoil(issueAtom, issues);
    }
  } catch (err) {
    console.error("Error while fetching issues: ", err);
  } finally {
    setRecoil(loadingAtom, false);
  }
}

export async function saveToFavorite(item: any) {
  const favoriteIssues =
    (await storageService.getByKey(STORAGE_FAVORITE_ISSUE_KEY)) || [];

  const isItemExist = favoriteIssues.findIndex((p) => p.id === item.id);

  if (isItemExist === -1) {
    setRecoil(loadingAtom, true); // better move to helper function, for toggling the loader
    favoriteIssues.push(item);
    await storageService.saveToStorage(
      STORAGE_FAVORITE_ISSUE_KEY,
      favoriteIssues,
    );
    setRecoil(favoriteIssuesAtom, favoriteIssues);
    setRecoil(loadingAtom, false);
  }
}

/**
 * Remove favorite item by id from async storage
 * @param id
 */
export async function removeFromFavorite(id: string | number) {
  const favoriteIssues =
    (await storageService.getByKey(STORAGE_FAVORITE_ISSUE_KEY)) || [];

  // Finding in existing favorites by id
  const isItemExist = favoriteIssues.findIndex((p) => p.id === id);

  // If item exist, then save it
  if (isItemExist !== -1) {
    setRecoil(loadingAtom, true);
    const result = favoriteIssues.filter((p) => p.id !== id);
    await storageService.saveToStorage(STORAGE_FAVORITE_ISSUE_KEY, result);
    setRecoil(favoriteIssuesAtom, result);
    setRecoil(loadingAtom, false); // toggling loader
  }
}

export async function fetchFavoriteItems() {
  const data =
    (await storageService.getByKey(STORAGE_FAVORITE_ISSUE_KEY)) || [];
  setRecoil(favoriteIssuesAtom, data);
}

const issueService = {
  fetchIssues,
  saveToFavorite,
  fetchFavoriteItems,
  removeFromFavorite,
};
export default issueService;
