import gql from "graphql-tag";

export const LAUNCHES_QUERY = gql`
  query LaunchQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_year
      launch_success
      details
      links {
        mission_patch_small
      }
    }
  }
`;
