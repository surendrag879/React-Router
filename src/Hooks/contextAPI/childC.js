import React, { useContext } from 'react'
import { data1, data2, data3 } from './index';
const ChildC = () => {
    const firstName = useContext(data1);
    const lastName = useContext(data2);
    const city = useContext(data3);
    return (
        <>
            {/* <data1.Consumer>
                {
                    (firstName) => {
                        return (
                            <data2.Consumer>
                                {
                                    (lastName) => {
                                        return (
                                            <data3.Consumer>
                                                {
                                                    (city) => {
                                                        return (
                                                            <div>My Name is <h1>{firstName} {lastName}</h1> and my city: <h1>{city}</h1></div>
                                                        )
                                                    }
                                                }
                                            </data3.Consumer>

                                        )
                                    }
                                }
                            </data2.Consumer>

                        )
                    }
                }
            </data1.Consumer> */}


            {/* useing usecontext...... */}

            <div>
                <h1>My Name is {firstName} {lastName} and my city {city}</h1>
            </div>

        </>
    )
}

export default ChildC