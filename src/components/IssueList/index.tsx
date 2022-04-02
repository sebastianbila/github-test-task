import React, { useCallback, useEffect } from "react";

import { FlatList } from "react-native";
import { useRecoilValue } from "recoil";

import { navigator, routes } from "@/common/navigation";
import {
  fetchFavoriteItems,
  removeFromFavorite,
  saveToFavorite,
} from "@/common/services";
import { favoriteIssuesAtom } from "@/common/store";

import IssueItem from "../IssueItem";
import { Wrapper } from "./styled";

type IssueListProps = {
  data: any[];
};

function IssueList({ data }: IssueListProps) {
  const favoriteIssues = useRecoilValue(favoriteIssuesAtom);

  const isAlreadyInFavorite = useCallback((id: string | number) => {
    const isItemExist = favoriteIssues.findIndex((p) => p.id === id);
    return isItemExist !== -1;
  }, []);

  const handleFavorite = (item: any) => {
    const isFavorite = isAlreadyInFavorite(item.id);
    if (!isFavorite) {
      saveToFavorite(item);
    } else {
      removeFromFavorite(item.id);
    }
  };

  const handleOpenDetails = (item: any) => {
    navigator.navigate(routes.detailsPage, {
      item,
    });
  };

  // better to provide type for item
  const renderIssueItem = useCallback(
    ({ item }: any) => {
      const isFavorite = isAlreadyInFavorite(item.id);
      return (
        <IssueItem
          id={item.id}
          title={item.title}
          number={item.number}
          openedBy={item.user.login}
          state={item.state}
          onFavorite={() => handleFavorite(item)}
          isFavorite={isFavorite}
          onOpenDetails={() => handleOpenDetails(item)}
        />
      );
    },
    [handleFavorite, favoriteIssues],
  );

  return (
    <Wrapper>
      <FlatList
        data={data}
        renderItem={renderIssueItem}
        keyExtractor={(item) => item.id}
      />
    </Wrapper>
  );
}

export default IssueList;
