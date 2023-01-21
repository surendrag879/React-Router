import React from 'react';

function Table({ tableData }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td contentEditable>{data.fullName}</td>
                                <td>{data.email}</td>
                                <td>{data.salary}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Table;