import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export interface LogInDialogProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInDialog = ({ isOpen, onClose }: LogInDialogProps) => {
  const handleOnClose = () => {
    onClose(false);
  };

  const handleOnLogin = () => {
    onClose(false);
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
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
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

export default LogInDialog;
