import tw, { css, styled } from "twin.macro";

// CardItem's elements
export const CardWrapper = tw.div`
  flex justify-between
  p-5 mb-3 w-full rounded-xl
`;

export const CardItemWrapper = tw.div`
  flex flex-col cursor-pointer w-full
`;

export const PasswordBox = tw.div`
  font-bold text-gray-900 text-xl
`;

export const MenuButton = tw.button`
  flex
`;
