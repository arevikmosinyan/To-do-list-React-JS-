import React from "react";
import TextField from "@material-ui/core/TextField";
import MainDialog from "./MainDialog";

function EditedDialog(props) {
  return (
    <MainDialog
      onConfirm={props.editConfirm} //+ editConfirm =>onConfirm
      open={props.open}
      onClose={props.handleClose}
      title='Edit your item'
      content={
        <TextField
          autoFocus
          margin='dense'
          label='name of new item'
          type='email'
          fullWidth
          onChange={props.changeEditInputValue}
          value={props.editedItemValue}
        />
      }
    />
  );
}

export default EditedDialog;

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
