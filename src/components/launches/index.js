import React from "react";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import { MissionsContainer } from "./styles";
import { LAUNCHES_QUERY } from "./queries";

const Launches = () => {
  return (
    <MissionsContainer>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div id="loading">Loading...</div>;
          if (error) return <h4>{error.message}</h4>;
          return (
            <ul>
              {data.launches.map((_d, _i) => {
                return <LaunchItem _d={_d} key={_i} />;
              })}
            </ul>
          );
        }}
      </Query>
    </MissionsContainer>
  );
};

export default Launches;
