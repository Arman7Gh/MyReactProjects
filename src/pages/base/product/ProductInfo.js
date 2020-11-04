import React from "react";
import { connect } from "react-redux";
import { add } from "../../../stateManagement/actions/productActions";
import uuid from 'uuid';

const ProductInfo = ({addNewItem}) => {
  const [title, setTitle] = React.useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  }

  const addItem = () => {
    const newItem = {
      id:uuid(),
      title: title,
    };

    addNewItem(newItem);
    setTitle('');
    document.querySelector("#title").focus();
  }
  return (
    <div>
      <h2>Add New Product</h2>
      <hr />
      Title : <input id="title" onChange={(event) => changeTitle(event)} value={title}/>
      <button onClick={() => addItem()}>Add New Product</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewItem: item => dispatch(add(item))
  };
};

export default connect(null, mapDispatchToProps)(ProductInfo);
