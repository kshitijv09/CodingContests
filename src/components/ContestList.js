import React, { Fragment, useState } from "react";
import ContestDetails from "./ContestDetails";
import ContestSite from "./ContestSite";
const ContestList = (props) => {
  const contestList = props.list;
  const contestSites = [
    "All",
    ...new Set(contestList.map((contest) => contest.site)),
  ];
  const [site, setSite] = useState(contestSites);
  const [contests, setContests] = useState(contestList);

  const displaySite = (currentSite) => {
    if (currentSite === "All") {
      setContests(contestList);
      return;
    }
    const siteContest = contestList.filter((item) => item.site === currentSite);
    setContests(siteContest);
  };
  return (
    <Fragment>
      <ContestSite siteList={site} displaySite={displaySite} />
      <ContestDetails contests={contests} />
    </Fragment>
  );
};
export default ContestList;
