import "./App.css";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import ToDoItem from "./Components/ToDoItem";
import EditedDialog from "./Components/EditedDialog";
import DeleteDialog from "./Components/DeleteDialog";

function App() {
  const [newToDo, setNewTodo] = useState("");
  const [nameToDo, setNameToDo] = useState([]);
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [deletedItemValue, setDeletedItemValue] = useState("");
  const [editedItemId, setEditedItemId] = useState(null);
  const [editedItemValue, setEditedItemValue] = useState("");

  function changeInputValueFunc(event) {
    setNewTodo(event.target.value);
  }

  function changeEditInputValue(event) {
    setEditedItemValue(event.target.value);
  }

  function showInputedValueFunc() {
    setNameToDo(
      nameToDo.concat({ id: uuidv4(), text: newToDo, checked: false }),
    );
    setNewTodo("");
  }

  function onRemoveClickFunc(itemId) {
    setDeletedItemId(itemId);
    setDeletedItemValue(nameToDo.find((elem) => elem.id === itemId).text);
    setShowRemoveDialog(true);
  }

  function onEditClickFunc(itemId1) {
    setShowEditDialog(true);
    setEditedItemId(itemId1);
    setEditedItemValue(nameToDo.find((elem) => elem.id === itemId1).text);
  }

  function onCompletedFunc(itemId2) {
    setNameToDo(
      nameToDo.map((elem) => {
        if (elem.id === itemId2) {
          return { ...elem, checked: elem.checked ? false : true };
        }
        return elem;
      }),
    );
  }
  function handleClose() {
    setShowRemoveDialog(false);
    setShowEditDialog(false);
    setEditedItemId(null);
  }

  function removeConfirm() {
    setNameToDo(nameToDo.filter((el) => el.id !== deletedItemId));
    setShowRemoveDialog(false);
    setDeletedItemId(null);
    setDeletedItemValue("");
  }

  function editConfirm() {
    setNameToDo(
      nameToDo.map((elem) => {
        if (elem.id === editedItemId) {
          return Object.assign({}, { id: editedItemId, text: editedItemValue });
        }
        return elem;
      }),
    );
    handleClose();
  }

  return (
    <div className='container'>
      <h2> To Do List</h2>
      <div className='head'>
        <TextField
          label='your to do list'
          variant='outlined'
          onChange={changeInputValueFunc}
          value={newToDo}
        />
        <Button
          disabled={newToDo.length < 3}
          className='Add'
          onClick={showInputedValueFunc}
          variant='contained'
          color='primary'>
          Add
        </Button>
      </div>

      <div className='ListedItems'>
        <ul>
          {nameToDo.map((elem) => {
            return (
              <ToDoItem
                key={elem.id}
                data={elem}
                onRemove={onRemoveClickFunc}
                onEdit={onEditClickFunc}
                onCompleted={onCompletedFunc}
              />
            );
          })}
        </ul>
        <DeleteDialog
          open={showRemoveDialog}
          handleClose={handleClose}
          removeConfirm={removeConfirm}
          del={deletedItemValue}
        />

        <EditedDialog
          open={showEditDialog}
          handleClose={handleClose}
          editConfirm={editConfirm}
          changeEditInputValue={changeEditInputValue}
          editedItemValue={editedItemValue}
        />
      </div>
    </div>
  );
}

export default App;
{
  /* 
  
  
  class App extends React.Component {
  state = {
    newToDo: "",
    nameToDo: [],
    showRemoveDialog: false,
    showEditDialog: false,
    deletedItemId: null,
    deletedItemValue: "",
    editedItemId: null,
    editedItemValue: "",
  };
  changeInputValue = (event) => {
    this.setState({
      newToDo: event.target.value,
    });
  };
  changeEditInputValue = (event) => {
    this.setState({
      editedItemValue: event.target.value,
    });
  };

  showInputedValue = () => {
    this.setState({
      nameToDo: this.state.nameToDo.concat({
        // mer elemner@ togh irencic nerkayacnen voch te stringeri array, ayl objectneri array{id:..,text:..}
        id: uuidv4(), //id-n kgenerecnenq ays function-ov
        text: this.state.newToDo, //text@ togh lini inputum havaqac text@ (newToDo)//piti aseinq concat newToDo , bayc asum enq concat ara objectneri tesqov
      }),
    });
    this.setState({
      newToDo: "",
    });
  };
  onRemoveClick = (itemId) => {
    this.setState({
      showRemoveDialog: true,
      deletedItemId: itemId,
      deletedItemValue: this.state.nameToDo.find((elem) => elem.id === itemId) // hamozvenq vor array-i henc ayd elementi vra enq remove button@ sexmel(vercnum enq text@)
        .text,
    });
  };

  onEditClick = (itemId1) => {
    this.setState({
      showEditDialog: true,
      editedItemId: itemId1,
      editedItemValue: this.state.nameToDo.find((elem) => elem.id === itemId1) //hamozvenq vor array-i henc ayd elementi vra enq edit button@ sexmel(vercnum enq text@)
        .text, // sa kapahovi vor konkret en elemi vra vor sexmel enq, dra tex@ ta mez default
    });
  };

  handleClose = () => {
    this.setState({
      showRemoveDialog: false,
      showEditDialog: false,
      editedItemId: null,
    });
  };
  removeConfirm = () => {
    this.setState({
      nameToDo: this.state.nameToDo.filter((el) => {
        return el.id !== this.state.deletedItemId; // filtri u tur nor zangvac aranc en elementi vori id-n deletedItemId-n e(onRemoveClick functionic enq imanum)
      }),
      showRemoveDialog: false,
      deletedItemId: null,
      deletedItemValue: "",
    });
  };
  editConfirm = () => {
    this.setState({
      nameToDo: this.state.nameToDo.map((elem) => {
        // nameToDo arrayin veragri nor array, hni vra map arac, ete elem-i id(mer elem@ objecta {id:..., text:...}) nuyn editedItemId-n a(vor@ gtnum en onEditClick function-i shnorhiv) uremn elem-i text-in veragri bacvac inputi dashtum havaqac text@
        if (elem.id === this.state.editedItemId) {
          elem.text = this.state.editedItemValue;
        }
        return elem; // ete voch, veradarcru nuyn elem@
      }),
    });

    this.handleClose(); // change-i dialog@ vor pakvi, erb talis enq change
  };
  render() {
    console.log(this);
    return (
      <div className='container'>
        <h2> To Do List</h2>
        <div className='head'>
          <TextField
            label='your to do list'
            variant='outlined'
            onChange={this.changeInputValue}
            value={this.state.newToDo}
          />
          <Button
            disabled={this.state.newToDo.length < 3}
            className='Add'
            onClick={this.showInputedValue}
            variant='contained'
            color='primary'>
            Add
          </Button>
        </div>
        <div className='ListedItems'>
          <ul>
            {this.state.nameToDo.map((elem) => {
              return (
                <ToDoItem
                  key={elem.id}
                  data={elem}
                  onRemove={this.onRemoveClick}
                  onEdit={this.onEditClick}
                />
              );
            })}
          </ul>

          <DeleteDialog
            open={this.state.showRemoveDialog}
            handleClose={this.handleClose}
            removeConfirm={this.removeConfirm}
            del={this.deletedItemValue}
          />

          <EditedDialog
            open={this.state.showEditDialog}
            handleClose={this.handleClose}
            editConfirm={this.editConfirm}
            changeEditInputValue={this.changeEditInputValue}
            editedItemValue={this.state.editedItemValue}
          />
        </div>
      </div>
    );
  }
}

export default App; */
}
