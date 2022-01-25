import "twin.macro";
import { Button, ButtonContainer } from "./Sidebar.elements";

type ButtonProps = {
  title: string;
  handleClick: () => void;
  clasName?: string;
};

const SidebarButton = ({ title, handleClick }: ButtonProps) => {
  return (
    <ButtonContainer>
      <Button onClick={handleClick}>
        {title ? title : "Create a new tag"}
      </Button>
    </ButtonContainer>
  );
};

export default SidebarButton;
