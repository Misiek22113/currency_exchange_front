import { Box, Dialog, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import LoginPanel from "./LoginPanel";

export interface LogInDialogProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginDialog = ({ isOpen, onClose }: LogInDialogProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleOnClose = () => {
    onClose(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    event.preventDefault();
  };

  return (
    <Dialog onClose={handleOnClose} open={isOpen}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Log In" {...a11yProps(0)} />
          <Tab label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <LoginPanel
        value={tabIndex}
        index={0}
        variant="login"
        onClose={onClose}
      />
      <LoginPanel
        value={tabIndex}
        index={1}
        variant="signup"
        onClose={onClose}
      />
    </Dialog>
  );
};

export default LoginDialog;
