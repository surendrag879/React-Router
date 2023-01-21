import React, { memo } from "react";
const Columns = [
  {
    id: "id",
    label: "Id",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "userName",
    label: "Email Id",
  },
  {
    id: "password",
    label: "Password",
  },
];
function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {Columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData?.length ? (
          tableData.map((item, index) => {
            return (
              <tr key={index}>
                {Columns.map((column, key) => {
                  const value = item[column.id];
                  if (column.id === "id") {
                    return <td key={column.id}>{index + 1}</td>;
                  }
                  return <td key={column.id}>{value}</td>;
                })}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4} style={{ textAlign: "center" }}>
              No record found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default memo(Table);
