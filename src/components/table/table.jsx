import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ headerData, list }) => {
  const getTableRow = () => {
    return list.map((rowObj) => {
      return (
        <tr>
          {/* {headerData.map((v) => {
            <td>
              {v === 'image' ? <img src={rowObj[v]} : rowObj[v]}
              </td>})} */}
        </tr>
      );
    });
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headerData.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
      {/* <tbody>{getTableRow()}</tbody> */}
    </Table>
  );
};

export default TableComponent;
