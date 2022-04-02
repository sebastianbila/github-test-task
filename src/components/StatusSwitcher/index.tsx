import React, { useCallback } from "react";

import { IssueStateType } from "@/common/interfaces";

import { Wrapper, Item } from "./styled";

enum State {
  ALL = "all",
  OPENED = "open",
  CLOSED = "closed",
}

type StatusSwitcherProps = {
  state?: IssueStateType;
  onChange?: (...args) => void;
};

function StatusSwitcher({ state = State.ALL, onChange }: StatusSwitcherProps) {
  const renderStatuses = useCallback(() => {
    const statuses = [State.ALL, State.OPENED, State.CLOSED];

    return statuses.map((status: string, index: number) => (
      <Item
        key={index}
        title={status}
        active={state === status}
        onPress={() => onChange?.(status)}
      />
    ));
  }, [state, onChange]);

  return <Wrapper>{renderStatuses()}</Wrapper>;
}

export default React.memo(StatusSwitcher);
