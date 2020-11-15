import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import { MissionsContainer } from "./styles";
import { LAUNCHES_QUERY } from "./queries";
import { GlobalContext } from "../../context/GlobalContext";

const Launches = () => {
  const { saveLaunchList } = useContext(GlobalContext);
  const [isOnce, setOnce] = useState(true);
  return (
    <MissionsContainer>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div id="loading">Loading...</div>;
          if (error) return <h4>{error.message}</h4>;

          setTimeout(() => {
            if (isOnce) {
              saveLaunchList(data?.launches);
              setOnce(false);
            }
          }, 100);

          return (
            <ul>
              {data?.launches.map((_d, _i) => {
                return <LaunchItem index={_i} _d={_d} key={_i} />;
              })}
            </ul>
          );
        }}
      </Query>
    </MissionsContainer>
  );
};

export default Launches;
