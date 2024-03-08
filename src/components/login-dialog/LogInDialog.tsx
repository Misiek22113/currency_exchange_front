import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { LoginContext } from "../home-page/LoginContext";
import { useContext, useState } from "react";
import axios from "axios";

export interface LogInDialogProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginDialog = ({ isOpen, onClose }: LogInDialogProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginContext = useContext(LoginContext);

  const handleOnClose = () => {
    onClose(false);
  };

  const handleOnLogin = () => {
    axios.post("http://localhost:4010/user/login", { username, password }).then(
      (response) => {
        if (response.data) {
          loginContext.setIsLoggedIn(true);
          loginContext.setUserId(response.data.userId);
          onClose(false);
        } else {
          alert("Invalid username or password");
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <Dialog onClose={handleOnClose} open={isOpen}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Cancel</Button>
        <Button onClick={handleOnLogin}>Login</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
