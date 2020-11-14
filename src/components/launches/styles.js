import styled from "styled-components";
import tw from "twin.macro";

export const MissionsContainer = styled.div`
  ${tw`container mx-auto pt-2 pt-24`}
  & {
    ul {
      ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3`};
      list-style-type: "none";
    }
    #loading {
      ${tw`text-xl w-full mx-auto text-center`}
    }
  }
`;

export const MissionsItem = styled.li`
  ${tw`mx-3 sm:mx-0 text-white px-4 py-4 rounded cursor-pointer text-xl flex hover:shadow-2xl shadow-xs transition duration-500 ease-in-out`}
  ${(p) =>
    p.launchSuccess
      ? tw`bg-gray-800 hover:bg-green-500`
      : tw`bg-gray-700 hover:bg-red-500`}
  & {
    img {
      ${tw`h-16 self-center p-1 bg-white rounded-full shadow-2xl cursor-pointer`}
    }
    #mission-name {
      ${tw`self-center m-4 cursor-pointer`}
    }
    #mission-year {
      ${tw`self-center mr-4 ml-auto cursor-pointer`}
    }
  }
`;
