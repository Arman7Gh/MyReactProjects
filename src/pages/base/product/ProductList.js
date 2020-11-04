import React from "react";
import { connect } from "react-redux";
import ProductInfo from "./ProductInfo";
import { remove } from "../../../stateManagement/actions/productActions";

const ProductList = ({ products, removeItem }) => {
  return (
    <div>
      <h1>لیست محصولات</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <ProductInfo />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productState.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch(remove(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
