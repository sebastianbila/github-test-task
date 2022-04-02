import React, { ReactElement } from "react";

import { useRecoilValue } from "recoil";

import { navigator } from "@/common/navigation";
import { favoriteIssuesAtom, loadingAtom } from "@/common/store";
import { ContentContainer } from "@/common/theme/containers";
import IssueList from "@/components/IssueList";
import Loading from "@/components/Loading";
import { BackButton } from "@/scenes/main/pages/styles";

function FavoritePage(): ReactElement {
  const loading = useRecoilValue(loadingAtom);
  const favorites = useRecoilValue(favoriteIssuesAtom);

  return (
    <ContentContainer>
      <BackButton title={"Back"} onPress={navigator.goBack} />
      {loading && <Loading />}
      <IssueList data={favorites} />
    </ContentContainer>
  );
}

export default FavoritePage;
