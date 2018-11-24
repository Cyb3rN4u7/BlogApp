import React from 'react';
import Timestamp from '../Timestamp.jsx';

const Updated = ({created , updated}) => {
    return (parseInt(created) === parseInt(updated))
    ? <Timestamp data={created} updated={false} /> 
    : <Timestamp data={updated} updated={true} /> 
}

export default Updated;