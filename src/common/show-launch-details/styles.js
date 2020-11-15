import styled from "styled-components";
import tw from "twin.macro";

export const ShowDetailsContainer = styled.div`
  ${tw`bg-gray-900 p-4 text-white flex items-center`}
  border-radius: 10px;
  & {
    #content-container {
      ${tw`flex flex-col justify-center`}
      img {
        ${tw`h-24 self-center p-1 bg-white rounded-full shadow-2xl cursor-pointer`}
        -webkit-animation:spin 7s linear infinite;
        -moz-animation: spin 7s linear infinite;
        animation: spin 7s linear infinite;

        @-moz-keyframes spin {
          100% {
            -moz-transform: rotate(360deg);
          }
        }
        @-webkit-keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      }
      h2 {
        ${tw`text-center mt-2`}
      }
      #details {
        ${tw`w-full md:w-10/12 self-center`}/* width: 500px; */
      }
    }
    #arrow-container {
      ${tw`hover:bg-gray-800 rounded-full p-4 transition duration-200 ease-in-out cursor-pointer`}
    }
  }
`;
