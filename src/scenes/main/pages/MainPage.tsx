import React, { ReactElement, useCallback, useEffect, useState } from "react";

import { useRecoilValue } from "recoil";

import { isValidObject, isValidString } from "@/common/helpers";
import { IssueStateType } from "@/common/interfaces";
import { navigator, routes } from "@/common/navigation";
import { fetchFavoriteItems, fetchIssues } from "@/common/services";
import { issueAtom, loadingAtom } from "@/common/store";
import { ContentContainer, Row } from "@/common/theme/containers";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import IssueList from "@/components/IssueList";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import StatusSwitcher from "@/components/StatusSwitcher";

function MainPage(): ReactElement {
  const [organization, setOrganization] = useState<string>("facebook");
  const [repository, setRepository] = useState<string>("react-native");
  const [switchState, setSwitchState] = useState<IssueStateType>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleInputOrganization = (text: string) => setOrganization(text);
  const handleInputRepository = (text: string) => setRepository(text);

  const isOrganization = isValidString(organization);
  const isRepository = isValidString(repository);

  const issues = useRecoilValue(issueAtom);
  const loading = useRecoilValue(loadingAtom);

  const isIssues = isValidObject(issues);

  const runFetchIssues = async (payload?: any) => {
    await fetchIssues({
      organization: organization,
      repository: repository,
      page: currentPage,
      state: switchState,
      ...payload,
    });
  };

  useEffect(() => {
    fetchFavoriteItems();
  }, []);

  const handleSearch = () => runFetchIssues();

  const handleSwitch = (status) => {
    setSwitchState(status);
    runFetchIssues({ state: status });
  };

  const handleChangePage = (page) => () => {
    setCurrentPage(page);
    runFetchIssues({ page: page });
  };

  const goToFavorites = () => navigator.navigate(routes.favoritePage);

  const renderRepositoryField = useCallback(
    () => (
      <InputField
        value={repository}
        placeholder={"Input the repository"}
        onChangeText={handleInputRepository}
        // no inline styles, I know :) But I am lazy for now
        style={{ width: "100%", marginTop: 7 }}
      />
    ),
    [repository],
  );

  const renderSearchButton = useCallback(
    () => (
      <Row marginTop={10} justifyContent={"space-between"}>
        <Button
          style={{ width: "68%" }} // can be moved to custom HOC
          title={"Search"}
          onPress={handleSearch}
        />
        <Button
          style={{ width: "30%", backgroundColor: "lightblue" }}
          title={"Favorites"}
          onPress={goToFavorites}
        />
      </Row>
    ),
    [handleSearch],
  );

  const renderIssueView = useCallback(
    () => (
      <>
        <StatusSwitcher onChange={handleSwitch} state={switchState} />
        <IssueList data={issues} />
        <Pagination
          pages={10}
          currentPage={currentPage}
          onSelect={handleChangePage}
        />
      </>
    ),
    [issues, currentPage, switchState],
  );

  return (
    <ContentContainer>
      <InputField
        value={organization}
        placeholder={"Input the organization"}
        onChangeText={handleInputOrganization}
        style={{ width: "100%", marginTop: 10 }}
      />
      {isOrganization && renderRepositoryField()}
      {isRepository && renderSearchButton()}
      {loading && <Loading />}
      {!loading && isIssues && renderIssueView()}
    </ContentContainer>
  );
}

export default MainPage;
