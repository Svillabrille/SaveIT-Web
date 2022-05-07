import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './NewTicket.scss'
import {createTicket} from '../../services/TicketService'

const NewTicket = (props) => {
  const [data, setData] = useState('No result');

  const onClick = () => {
    createTicket({ content: data })
      .then(res => {
        setData('')
      })
      .catch(e => console.log(e))
  }

  return (
    <div className='NewTicket'>

      <QrReader className='Camera'
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            //console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
      <button className='QrButton' onClick={onClick}>Add to my profile</button>
    </div>
  );
};

export default NewTicket