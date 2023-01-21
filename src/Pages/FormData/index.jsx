import { Button } from '@mui/material'
import React, {useState } from 'react'
import Table from './table';
import FormInput from './formInput';


const initialState = {
    fullName: '',
    email: '',
    salary: '',
}
const FormData = () => {

    const [tableData, setTableData] = useState([])
    const [formInputData, setFormInputData] = useState(initialState);


    const handleChange = (e) => {
        setFormInputData({
            ...formInputData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = () => {
        setTableData([...tableData, formInputData]);
        console.log('clciked')
        setFormInputData(initialState)

    }
    return (
        <React.Fragment>
            <h2 style={{ textAlign: 'center' }}>Student Data</h2>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">

                        {/* <div className="form-row row">
                            <div className="col">
                                <input
                                    className="form-control"
                                    name="fullName"
                                    placeholder="Full Name"
                                    type="text"
                                    value={values.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    name="salary"
                                    placeholder="Salary"
                                    type="text"
                                    value={values.salary}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col">
                                <Button
                                    variant='outlined'
                                    onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </div>
                        </div> */}
                        <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
                        <Table tableData={tableData} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormData