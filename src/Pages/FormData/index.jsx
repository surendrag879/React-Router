import React, { useState } from "react";
import Table from "./table";
import FormInput from "./formInput";

const initialState = {
  name: "",
  userName: "",
  password: "",
};
const FormData = () => {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setFormInputData] = useState(initialState);

  const handleChange = (e) => {
    setFormInputData({
      ...formInputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formInputData.length === 0) {
      alert("Plz fill all fildes....");
    } else {
      setTableData([...tableData, formInputData]);
      setFormInputData(initialState);
    }
  };
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center" }}>Student Data</h2>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            <Table tableData={tableData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FormData;
