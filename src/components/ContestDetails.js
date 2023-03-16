import React from "react";
const ContestDetails = (props) => {
  return (
    <div>
      {props.contests.map((con) => {
        const { name, url, status } = con;
        return (
          <div className="description">
            <h3 className="name">{name}</h3>
            <div className="url">
              <a href={url} target="_blank">
                {url}
              </a>
            </div>
            <p className="status">STATUS: {status}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ContestDetails;
/* {"name":"ProjectEuler+","url":"https://hackerrank.com/contests/projecteuler","start_time":"2014-07-07T15:38:00.000Z","end_time":"2024-07-30T18:30:00.000Z","duration":"317616720.0","site":"HackerRank","in_24_hours":"No","status":"CODING"} */
