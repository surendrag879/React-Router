import React, { memo } from "react";

const FormInput = ({ handleChange, formInputData, handleSubmit }) => {
  return (
    <>
      <form>
        <div className="form-row row">
          <div className="col">
            <input
              className="form-control"
              name="name"
              placeholder="Enter Full Name"
              type="text"
              value={formInputData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              name="userName"
              placeholder="Enter username"
              type="email"
              value={formInputData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              name="password"
              placeholder="Enter password"
              type="password"
              value={formInputData.password}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default memo(FormInput);
