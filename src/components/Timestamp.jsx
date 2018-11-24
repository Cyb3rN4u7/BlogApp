import React from 'react'
import moment from 'moment';

const Timestamp = ({ data, updated }) => {
  const d = moment(new Date(data)).format("MMM Do YY");
  return updated ? <span>Updated: {d}</span> : <span>Created: {d}</span> ;
}

export default Timestamp

