import React from 'react';

const CamperItem = props => {
  return (
    <tr>
      <td>{props.position}</td>
      <td>
        <img src={props.camper.img} alt="camper" width="35px" height="35px"/>
      </td>
      <td>{props.camper.username}</td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
};

export default CamperItem;
