import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

function MainDialog(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'> {props.title}</DialogTitle>
      <DialogContent> {props.content}</DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={props.onConfirm} color='primary'>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MainDialog;

// class EditedDialog extends React.Component {
//   render() {
//     return (
//       <Dialog
//         open={this.props.open}
//         onClose={this.props.handleClose}
//         aria-labelledby='form-dialog-title'>
//         <DialogTitle id='form-dialog-title'> Edit your item</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Change item</DialogContentText>
//           <TextField
//             autoFocus
//             margin='dense'
//             label='name of new item'
//             type='email'
//             fullWidth
//             onChange={this.props.changeEditInputValue}
//             value={this.props.editedItemValue}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.props.handleClose} color='primary'>
//             Cancel
//           </Button>
//           <Button onClick={this.props.editConfirm} color='primary'>
//             Change
//           </Button>
//         </DialogActions>
//       </Dialog>
//     );
//   }
// }
