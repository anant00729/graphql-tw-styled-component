import styled from "styled-components";
import tw from "twin.macro";
import Button from "@material-ui/core/Button";

export const MissionsContainer = styled.div`
  ${tw`container mx-auto pt-2 pt-24`}
  & {
    ul {
      ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`};
      list-style-type: "none";
    }
    #loading {
      ${tw`text-xl w-full mx-auto text-center`}
    }
  }
`;

export const MissionsItem = styled.li`
  ${tw`text-white px-4 py-4 rounded cursor-pointer text-xl flex hover:shadow-2xl shadow-xs transition duration-500 ease-in-out h-full`}
  ${(p) =>
    p.launchSuccess
      ? tw`bg-blue-900 hover:bg-green-500`
      : tw`bg-blue-500 hover:bg-red-500`}
  & {
    img {
      ${tw`h-16 self-center p-1 bg-white rounded-full shadow-2xl cursor-pointer`}
    }
    #mission-name {
      ${tw`self-center m-4 cursor-pointer text-sm`}
    }
    #mission-year {
      ${tw`self-center cursor-pointer text-sm`}
    }
    #cta-wrapper {
      ${tw`flex flex-col items-center ml-auto justify-center`}
    }
  }
`;

export const ShowDetailsButton = styled(Button)`
  ${tw`text-sm`}
  border: 0;
  color: #fff;
  padding: 5px 30px;
  background: linear-gradient(45deg, #1a212c, #2d3848);
  box-shadow: 0;
  text-transform: lowercase !important;
  outline: none !important;
`;
