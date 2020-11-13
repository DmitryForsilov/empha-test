import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/slices';

const generateSortIdsByBigger = ({ dispatch }) => () => {
  dispatch(actions.sortIdsByBigger());
};

const generateSortIdsBySmaller = ({ dispatch }) => () => {
  dispatch(actions.sortIdsBySmaller());
};

const generateSetUsernameFilter = ({ dispatch }) => ({ target }) => {
  dispatch(actions.setUsernameFilter({ filter: target.value }));
};

const renderIdCheckboxes = ({ handleSortIdsByBigger, handleSortIdsBySmaller }) => (
  <div>
    <Button className="w-100" variant="outline-primary" onClick={handleSortIdsByBigger} style={{ maxWidth: '234px' }}>Sort by bigger</Button>
    <Button className="w-100" variant="outline-primary" onClick={handleSortIdsBySmaller} style={{ maxWidth: '234px' }}>Sort by smaller</Button>
  </div>
);

const renderUsernameFilter = ({ handleSetUsernameFilter }) => (
  <input
    className="pl-2 w-100"
    type="text"
    placeholder="Enter username filter"
    style={{ maxWidth: '215px' }}
    onChange={handleSetUsernameFilter}
  />
);

const renderUser = (data) => (
  <div className="d-flex" key={data.id}>
    <p className="col text-center m-0 p-2 border">{data.id}</p>
    <p className="col text-center m-0 p-2 border">{data.username}</p>
  </div>
);

export default () => {
  const usersData = useSelector(({ users }) => users.allIds
    .map((id) => users.usersById[id]));
  const usernameFilter = useSelector(({ users }) => users.usernameFilter);
  const filteredUsersData = usersData.filter((user) => user.username.includes(usernameFilter));
  const dispatch = useDispatch();

  if (usersData.length === 0) {
    return <p className="text-center mt-2">UsersList is empty.</p>;
  }

  const handleSortIdsByBigger = generateSortIdsByBigger({ dispatch });
  const handleSortIdsBySmaller = generateSortIdsBySmaller({ dispatch });
  const handleSetUsernameFilter = generateSetUsernameFilter({ dispatch });

  return (
    <div className="bg-light">
      <div className="d-flex border-bottom border-dark">
        <div className="col text-center m-0 p-2 border text-info font-weight-bold d-flex justify-content-around align-items-center flex-wrap">
          ID
          {renderIdCheckboxes({ handleSortIdsByBigger, handleSortIdsBySmaller })}
        </div>
        <div className="col text-center m-0 p-2 border text-info font-weight-bold d-flex justify-content-around align-items-center flex-wrap">
          USERNAME
          {renderUsernameFilter({ handleSetUsernameFilter })}
        </div>
      </div>
      {filteredUsersData.map(renderUser)}
    </div>
  );
};
