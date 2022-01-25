import {
  SidebarWrapper,
  ItemContainer,
  ItemBox,
  Span,
  LogoContainer,
  List,
  ListItem,
} from "./Sidebar.elements";
import SidebarButton from "./SidebarButton";
import "twin.macro";

const SvgLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    tw="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clip-rule="evenodd"
    />
  </svg>
);

const SideBar = () => {
  return (
    <SidebarWrapper>
      <LogoContainer>
        <SvgLogo />
        <h1>パスワード 保管庫</h1>
      </LogoContainer>

      <ItemContainer>
        <ItemBox>
          <List>
            <ListItem>
              <Span>タグ　ソーシャル</Span>
            </ListItem>
            <ListItem>
              <Span>タグ　ソーシャル</Span>
            </ListItem>
            <ListItem>
              <Span>タグ　ソーシャル</Span>
            </ListItem>
          </List>
        </ItemBox>

        <ItemBox>
          <List>
            <ListItem>
              <SidebarButton
                title="タブを追加する"
                handleClick={() => alert("hello")}
              />
            </ListItem>
            <ListItem>
              <SidebarButton
                title="コンフィギュレーション"
                handleClick={() => alert("add success!")}
              />
            </ListItem>
            <ListItem>
              <SidebarButton
                title="エクスポート"
                handleClick={() => alert("add success!")}
              />
            </ListItem>
          </List>
        </ItemBox>
      </ItemContainer>
    </SidebarWrapper>
  );
};

export default SideBar;
