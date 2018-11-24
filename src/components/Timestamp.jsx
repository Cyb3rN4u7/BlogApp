import React from 'react'
import moment from 'moment';

const Timestamp = ({ data }) => {
  const d = moment(new Date(data)).format("MMM Do YY");
  return <span>{d}</span>
}

export default Timestamp

