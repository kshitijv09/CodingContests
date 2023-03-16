import React, { Fragment } from "react";
const ContestSite = (props) => {
  return (
    <Fragment>
      <div className="btn-container">
        {props.siteList.map((site, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => props.displaySite(site)}
            >
              {site}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};
export default ContestSite;
