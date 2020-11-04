import React from "react";
import { Table } from "reactstrap";

const CategoryGrid = ({items}) => {
  return (
    <Table hover bordered striped responsive size="sm">
      <thead>
        <tr>
          <th>کد گروه</th>
          <th>نام گروه</th>
          <th>توضیحات</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.categoryId}>
            <td>{item.categoryId}</td>
            <td>{item.categoryName}</td>
            <td>{item.description}</td>
            <td>---</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CategoryGrid;
