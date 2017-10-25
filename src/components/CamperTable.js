import React from 'react';
import {Table} from 'react-bootstrap';
import CamperItem from './CamperItem';

const CamperTable = props => {
  const camperList = props.camplist.map((camper, index) => {
    return (<CamperItem camper={camper} key={"a" + index} position={index + 1}/>);
  });

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Image</th>
          <th>Username</th>
          <th>Recent</th>
          <th>AllTime</th>
        </tr>
      </thead>
      <tbody>{camperList}</tbody>
    </Table>
  );
};

export default CamperTable;
