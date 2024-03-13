import {
  Alert,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { LoginContext } from "../home-page/LoginContext";

interface TabPanelProps {
  index: number;
  value: number;
  variant: "login" | "signup";
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPanel = (props: TabPanelProps) => {
  const { value, index, variant, onClose } = props;
  const loginContext = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleOnClose = () => {
    onClose(false);
  };

  const handleCloseToast = () => {
    setOpen(false);
  };

  const handleEraseSignUpError = () => {
    setSignUpError(false);
  };

  const handleEraseLoginError = () => {
    setLoginError(false);
  };

  const handleOnLogin = () => {
    axios.post("http://localhost:4010/user/login", { username, password }).then(
      (response) => {
        if (response.data) {
          loginContext.setIsLoggedIn(true);
          loginContext.setUserId(response.data.userId);
          onClose(false);
          setLoginError(false);
        } else {
          setLoginError(() => true);
          alert("Invalid username or password");
        }
      },
      (error) => {
        setLoginError(() => true);
        console.error(error);
      }
    );
  };

  const handleOnSignUp = () => {
    axios
      .post("http://localhost:4010/user/signup", { username, password })
      .then(
        (response) => {
          if (response.data) {
            setSignUpError(false);
            onClose(false);
          } else {
            setSignUpError(() => true);
          }
        },
        (error) => {
          setSignUpError(() => true);
          console.error(error);
        }
      );
  };

  return (
    <>
      <div hidden={value !== index}>
        <DialogTitle>{variant === "login" ? "Log Un" : "Sign Up"}</DialogTitle>
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
          <Button
            onClick={variant === "login" ? handleOnLogin : handleOnSignUp}
          >
            {variant === "login" ? "Log In" : "Sign Up"}
          </Button>
        </DialogActions>
      </div>
      {
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleCloseToast}
        >
          <Alert
            onClose={handleCloseToast}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Successfully signed up!
          </Alert>
        </Snackbar>
      }
      {
        <Snackbar
          open={signUpError}
          autoHideDuration={5000}
          onClose={handleEraseSignUpError}
        >
          <Alert
            onClose={handleEraseSignUpError}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Error signing up
          </Alert>
        </Snackbar>
      }
      {
        <Snackbar
          open={loginError}
          autoHideDuration={5000}
          onClose={handleEraseLoginError}
        >
          <Alert
            onClose={handleEraseLoginError}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Error logging in
          </Alert>
        </Snackbar>
      }
    </>
  );
};

export default LoginPanel;
