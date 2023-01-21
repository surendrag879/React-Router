import React, { createContext } from 'react'
import '../../assets/styles/style.css';
import ChildA from './childA';
// export const data = createContext(
//   {
//     firstName: "Surendra",
//     lastName: 'Goswami',
//     city: 'kota',
//     MobileNo: 9694292587
//   }
// );
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();
const firstName = "Surendra"
const lastName = 'Goswami'
const city = 'Kota'
const Appcontext = () => {


  return (
    <>
      <div className='main'>
        <data1.Provider value={firstName}>
          <data2.Provider value={lastName}>
            <data3.Provider value={city}>
              <ChildA />
            </data3.Provider>
          </data2.Provider>
        </data1.Provider>
      </div >
    </>
  )
}

export default Appcontext;
export { data1, data2, data3 }