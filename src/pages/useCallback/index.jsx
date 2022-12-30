import { React, useState, useCallback ,useMemo} from 'react';
import ChildComponent from '../useMemo/childComponent';

function UseCallBack() {
    const [num, setNum] = useState(0);

    const handleUpdateNum = useCallback(() => {
        //some code
    },[]);

    const getChildComp = useMemo(() => 
    <ChildComponent handleUpdateNum={handleUpdateNum} />,
    [handleUpdateNum]);

    return (
        <div>
            <h1>{num}</h1>
            {getChildComp}
            <button onClick={() => setNum(num + 1)}> Addition </button>
        </div>
    );
}

export default UseCallBack;