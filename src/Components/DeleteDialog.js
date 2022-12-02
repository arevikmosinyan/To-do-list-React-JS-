import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import MainDialog from './MainDialog';

function DeleteDialog(props) {
  return (
    <MainDialog
      open={props.open}
      onClose={props.handleClose}
      onConfirm={props.removeConfirm} //+removeConfirm => onConfirm
      handleClose={props.handleClose}
      title='Remove item'
      content={
        <DialogContentText id='alert-dialog-slide-description'>Are you sure you want to delete item {props.del} ?</DialogContentText>
      }
    />
  );
}

export default DeleteDialog;

// class DeleteDialog extends React.Component {
//   render() {
//     return (
//       <Dialog
//         open={this.props.open}
//         onClose={this.props.handleClose}
//         aria-labelledby='alert-dialog-slide-title'
//         aria-describedby='alert-dialog-slide-description'>
//         <DialogTitle id='alert-dialog-slide-title'>Remove item</DialogTitle>
//         <DialogContent>
//           <DialogContentText id='alert-dialog-slide-description'>
//             Are you sure you want to delete item {this.props.del} ?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.props.handleClose} color='primary'>
//             Cancel
//           </Button>
//           <Button onClick={this.props.removeConfirm} color='primary'>
//             Yes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     );
//   }
// }
