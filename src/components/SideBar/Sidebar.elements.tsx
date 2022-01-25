import tw, { css, styled } from "twin.macro";

// all the styled components used in SideBar
export const SidebarWrapper = tw.aside`
  w-64 md:shadow transform -translate-x-full 
  md:translate-x-0 transition-transform 
  duration-150 ease-in bg-blue-300
`;

export const LogoContainer = styled.div(() => [
  tw`flex flex-row items-center justify-center 
  px-4 py-2 mx-auto m-4 space-x-2
  border-b-2 border-blue-800
  font-medium text-lg text-gray-800`,
  css`
    h1 {
      font-family: "Kiwi Maru", serif;
    }
  `,
]);

export const ItemContainer = tw.div`
  flex flex-col justify-end items-center max-h-full
`;

export const ItemBox = tw.div`
  flex flex-col items-center justify-center px-4 pt-12 pb-20
`;

export const Span = tw.span`
  flex items-center justify-center 
  font-bold
  px-4 my-4 uppercase`;

export const List = tw.ul`
  flex flex-col w-full
`;

export const ListItem = tw.li`flex flex-row space-x-2 p-3`;

// SidebarButton Elements
export const ButtonContainer = tw.div`
  flex space-x-2 justify-center w-full
`;

export const Button = tw.button`
  inline-block px-6 py-2.5 bg-blue-600
 text-white font-medium text-xs leading-tight
  min-w-full
  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
`;
