import styled from "styled-components";
import tw from "twin.macro";

export const AppBar = styled.div`
  ${tw`bg-gray-900 h-20 w-full flex justify-center fixed shadow-2xl`}
  & {
    img {
      ${tw`h-12 self-center p-1 bg-white rounded-full shadow-2xl`}
    }
    label {
      ${tw`self-center ml-2 text-white text-2xl`}
    }
  }
`;
