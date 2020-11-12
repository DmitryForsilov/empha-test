import React from 'react';
import { useSelector/* , useDispatch */ } from 'react-redux';

const renderUser = (data) => (
  <div className="d-flex" key={data.id}>
    <p className="col text-center m-0 p-2 border">{data.id}</p>
    <p className="col text-center m-0 p-2 border">{data.username}</p>
  </div>
);

export default () => {
  const usersData = useSelector(({ users }) => users.allIds
    .map((id) => users.usersById[id]));
  // const dispatch = useDispatch();

  if (usersData.length === 0) {
    return <p className="text-center mt-2">UsersList is empty.</p>;
  }

  return (
    <div className="bg-light">
      <div className="d-flex border-bottom border-dark">
        <p className="col text-center m-0 p-2 border text-info font-weight-bold">ID</p>
        <p className="col text-center m-0 p-2 border text-info font-weight-bold">USERNAME</p>
      </div>
      {usersData.map(renderUser)}
    </div>
  );
};
