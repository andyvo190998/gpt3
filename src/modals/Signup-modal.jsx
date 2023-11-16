import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { FcGoogle } from 'react-icons/fc';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export default function SignUpModal({
  open,
  handleClose,
  isSignUp,
  setIsSignUp,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}
          id="modal-modal-title"
          variant="h5"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: 5,
          }}
        >
          <TextField
            id="userName"
            name="userName"
            label="User name or email"
            sx={{ mb: 2 }}
          />
          <TextField
            id="password"
            type="password"
            name="password"
            label="Password"
            sx={{ mb: 2 }}
          />
          {isSignUp && (
            <TextField
              id="password"
              type="password"
              name="password"
              label="Repeat password"
              sx={{ mb: 2 }}
            />
          )}
          <Button variant="contained" sx={{ background: '#FF4820' }}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItem: 'center',
          }}
        >
          <Typography sx={{ textAlign: 'center', mb: 2, color: 'grey' }}>
            Or login with
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              mb: 5,
            }}
          >
            <Box
              sx={{
                m: 1,
                boxShadow: 3,
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <FacebookIcon />
            </Box>
            <Box
              sx={{
                m: 1,
                boxShadow: 3,
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <GoogleIcon />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {isSignUp ? (
              <Button onClick={() => setIsSignUp(false)}>Sign In</Button>
            ) : (
              <Button onClick={() => setIsSignUp(true)}>Sign Up</Button>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
