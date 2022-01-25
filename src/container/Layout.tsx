import * as React from "react";
import { SidebarComponent } from "../components/Sidebar/Sidebar";
import { Container, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

type Props = { children: React.ReactChild };

export function Layout(props: Props) {
  const showSidebar = useSelector((state: any) => state.sidebar.showSidebar);

  return (
    <Container
      className="full-container"
      minWidth="full"
      mx={0}
      px={0}
      height="full"
    >
      <SidebarComponent
        className={`app-sidebar ${showSidebar ? "active" : ""}`}
      />

      <Box className={`app-content`}>{props.children}</Box>
    </Container>
  );
}
