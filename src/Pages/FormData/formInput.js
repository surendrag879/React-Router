import React from 'react';

const FormInput = ({ handleChange, formInputData, handleSubmit }) => {
    return (
        <div className="form-row row">
            <div className="col">
                <input
                    className="form-control"
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    value={formInputData.fullName}
                    onChange={handleChange}
                />
            </div>
            {/* <div className="col">
                <input
                    className="form-control"
                    name="dathOfBirth"
                    placeholder="select DOB"
                    type="date"
                    value={formInputData.dathOfBirth}
                    onChange={handleChange}
                />
            </div> */}
            <div className="col">
                <input
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    value={formInputData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="col">
                <input
                    className="form-control"
                    name="salary"
                    placeholder="Salary"
                    type="text"
                    value={formInputData.salary}
                    onChange={handleChange}
                />
            </div>
            <div className="col">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={()=> {
                        console.log('clicked');
                        handleSubmit()
                    }}
                >Submit </button>
            </div>
        </div>
    )
}


export default FormInput;