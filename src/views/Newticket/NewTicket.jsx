import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './NewTicket.scss'

const NewTicket = (props) => {
  const [data, setData] = useState('No result');

  return (
    <div className='NewTicket'>

      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </div>
  );
};

export default NewTicket