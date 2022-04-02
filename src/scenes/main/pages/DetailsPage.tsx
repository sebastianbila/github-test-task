import React from "react";

import { useRoute } from "@react-navigation/native";
import Markdown from "react-native-markdown-display";

import { navigator } from "@/common/navigation";
import { ContentContainer } from "@/common/theme/containers";
import {
  BackButton,
  DetailsScrollView,
  Title,
} from "@/scenes/main/pages/styles";

function DetailsPage() {
  const route: any = useRoute();
  const data = route?.params?.item;

  return (
    <ContentContainer>
      <BackButton title={"Back"} onPress={navigator.goBack} />
      <Title>{data.title}</Title>
      <DetailsScrollView>
        <Markdown>{data.body}</Markdown>
      </DetailsScrollView>
    </ContentContainer>
  );
}

export default DetailsPage;
