import { useState } from 'react';

const MyFirstComponent =  ({ propOne,proptwo}) => {
    const [value,setValue] = useState(0);

    return(
        <div>
            Hola, primer componente {value} one {propOne} two {proptwo}
        </div>
    );
};

export default MyFirstComponent;