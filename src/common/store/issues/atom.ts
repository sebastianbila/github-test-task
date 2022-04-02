import { atom } from "recoil";

export const issueAtom = atom<any>({
  key: "issueAtom",
  default: [],
});

export const favoriteIssuesAtom = atom<any>({
  key: "favoriteIssuesAtom",
  default: [],
});
