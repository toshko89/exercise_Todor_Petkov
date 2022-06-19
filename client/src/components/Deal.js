import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function Deal() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" color="inherit" onClick={handleClickOpen}>
        Special Deals
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Special Deals'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText fontWeight={'bold'} id="alert-dialog-description">
            2 for 3 - buy 3 items but pay 2 of them, the cheapest one is free
          </DialogContentText>
          <DialogContentText fontWeight={'bold'} id="alert-dialog-description">
            Buy 1 get 1 half price - receive a 50% reduction in the price of a second item of the same type
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Shop now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}