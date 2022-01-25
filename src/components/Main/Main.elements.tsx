import tw, { css, styled } from "twin.macro";

export const MainWrapper = tw.main`
  flex flex-col flex-grow -ml-64 md:ml-0 
  transition-all duration-150 ease-in`;

export const HeaderBox = tw.header`
bg-white shadow py-4 p-4
  flex items-center justify-end flex-row
`;

export const MainContainer = tw.div`flex flex-col flex-grow p-4`;

export const MainCenter = tw.div`
  flex flex-col flex-grow border-4
border-gray-400 border-dotted 
bg-white rounded mt-4 mx-3`;

export const Footer = styled.footer(() => [
  tw`px-4 py-6 flex items-center justify-center text-sm`,
  css`
    font-family: "Outfit", sans-serif;
  `,
]);

export const Text = styled.p(() => [
  tw`text-sm text-gray-600 text-center`,
  css`
    p {
      font-family: "Outfit", sans-serif;
    }
    span {
      font-family: "Kiwi Maru", serif;
    }
  `,
]);
