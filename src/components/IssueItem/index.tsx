import React from "react";

import { Icons } from "@/common/lib";

import { Wrapper, IconWrapper, Subtitle, Details, Title } from "./styled";

type IssueItemProps = {
  id: number | string;
  title: string;
  number: string | number;

  // move state to separate file and use as type, ex: state: StateType
  state: "open" | "closed";

  openedBy: string;
  isFavorite?: boolean;
  onFavorite?: (...args) => void;
  onOpenDetails?: (...args) => void;
};

function IssueItem({
  id = 0,
  title = "Issue",
  number = 1,
  state = "closed",
  openedBy = "simulator",
  isFavorite = false,
  onFavorite,
  onOpenDetails,
}: IssueItemProps) {
  const subtitle = `#${number}, ${state} by ${openedBy}`;

  const iconColor = isFavorite ? "red" : "black";
  return (
    <Wrapper>
      <Details onPress={onOpenDetails}>
        <Title numberOfLines={1}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Details>
      <IconWrapper onPress={onFavorite}>
        <Icons.FavoriteActive width={25} height={25} fill={iconColor} />
      </IconWrapper>
    </Wrapper>
  );
}

export default React.memo(IssueItem);
