import React from "react";
import Button from "@material-ui/core/Button";

function ToDoItem(props) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <div>
        <p
          style={{
            textDecoration: props.data.checked ? "line-through" : "none",
          }}>
          {props.data.text}
        </p>
      </div>
      <div>
        <Button
          style={{
            margin: 10,
          }}
          variant='contained'
          color='primary'
          className='completed'
          size='medium'
          onClick={() => {
            props.onCompleted(props.data.id);
          }}>
          completed
        </Button>
        <Button
          style={{
            margin: 10,
          }}
          variant='contained'
          color='primary'
          className='remove'
          size='medium'
          onClick={() => {
            props.onRemove(props.data.id);
          }}>
          remove
        </Button>
        <Button
          style={{
            margin: 10,
          }}
          className='edit'
          variant='contained'
          color='primary'
          size='medium'
          onClick={() => props.onEdit(props.data.id)}>
          edit
        </Button>
      </div>
    </li>
  );
}

export default ToDoItem;

// class ToDoItem extends React.Component {
//   render() {
//     return (
//       <li>
//         {this.props.data.text}
//         <button
//           onClick={() => {
//             this.props.onRemove(this.props.data.id);
//           }}>
//           remove
//         </button>
//         <button onClick={() => this.props.onEdit(this.props.data.id)}>
//           edit
//         </button>
//       </li>
//     );
//   }
// }
