import {
  MainWrapper,
  HeaderBox,
  MainContainer,
  MainCenter,
  Footer,
  Text,
} from "./Main.elements";
import "twin.macro";
import { PasswordCard } from "../PasswordCard";

const Main = () => {
  return (
    <MainWrapper>
      <HeaderBox>
        <a href="#" tw="flex flex-row items-center">
          <span tw="flex flex-col ml-2">
            <span tw="w-20 font-semibold tracking-wide leading-none">
              Hello
            </span>
            <span tw="w-20 text-xs leading-none mt-1">Manager</span>
          </span>
        </a>
      </HeaderBox>
      <MainContainer>
        <h1 tw="font-bold text-2xl text-gray-700 mx-3">Dashboard</h1>
        <MainCenter>
          <PasswordCard />
        </MainCenter>
      </MainContainer>
      <Footer>
        <Text>
          © AI01-2 <span>卒業制作</span> 01 2022. All rights reserved.{" "}
        </Text>
      </Footer>
    </MainWrapper>
  );
};

export default Main;
