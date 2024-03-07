import { Menu, MenuItem } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../home-page/LoginContext";

const LoginMenu = ({
  anchorEl,
  isOpen,
  handleClose,
}: {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const loginContext = useContext(LoginContext);

  const handleLogout = () => {
    loginContext.setIsLoggedIn(false);
    handleClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default LoginMenu;
