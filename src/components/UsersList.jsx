import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/slices';

const renderUser = (data) => (
  <div className="d-flex" key={data.id}>
    <p className="col text-center m-0 p-2 border">{data.id}</p>
    <p className="col text-center m-0 p-2 border">{data.username}</p>
  </div>
);

const generateSortIdsByBigger = ({ dispatch }) => () => {
  dispatch(actions.sortIdsByBigger());
};

const generateSortIdsBySmaller = ({ dispatch }) => () => {
  dispatch(actions.sortIdsBySmaller());
};

const renderIdCheckboxes = ({ handleSortIdsByBigger, handleSortIdsBySmaller }) => (
  <div>
    <Button className="mr-2" variant="outline-primary" onClick={handleSortIdsByBigger}>Sort by bigger</Button>
    <Button variant="outline-primary" onClick={handleSortIdsBySmaller}>Sort by smaller</Button>
  </div>
);

export default () => {
  const usersData = useSelector(({ users }) => users.allIds
    .map((id) => users.usersById[id]));
  const dispatch = useDispatch();

  if (usersData.length === 0) {
    return <p className="text-center mt-2">UsersList is empty.</p>;
  }

  const handleSortIdsByBigger = generateSortIdsByBigger({ dispatch });
  const handleSortIdsBySmaller = generateSortIdsBySmaller({ dispatch });

  return (
    <div className="bg-light">
      <div className="d-flex border-bottom border-dark">
        <div className="col text-center m-0 p-2 border text-info font-weight-bold d-flex justify-content-around align-items-center">
          ID
          {renderIdCheckboxes({ handleSortIdsByBigger, handleSortIdsBySmaller })}
        </div>
        <p className="col text-center m-0 p-2 border text-info font-weight-bold">USERNAME</p>
      </div>
      {usersData.map(renderUser)}
    </div>
  );
};
