import React, { useCallback } from "react";

import { Pressable, TouchableOpacity } from "react-native";

import { Wrapper, Item } from "./styled";

type PaginationProps = {
  pages: number;
  currentPage?: number;
  onSelect: (...args) => (...args) => void;
};

function Pagination({ pages, currentPage, onSelect }: PaginationProps) {
  const renderPagination = useCallback(() => {
    return Array(pages)
      .fill("")
      .map((_, index) => (
        <Item
          title={index + 1}
          active={index + 1 === currentPage}
          key={index}
          onPress={onSelect?.(index + 1)}
        />
      ));
  }, [pages, currentPage]);
  return <Wrapper horizontal={true}>{renderPagination()}</Wrapper>;
}

export default React.memo(Pagination);
