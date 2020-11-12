import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
import { actions } from '../../redux/slices';
import UsersList from '../../components/UsersList';

const generateDownloadUsersHandler = ({ authorizationToken, dispatch }) => async () => {
  dispatch(actions.downloadUsers({ authorizationToken }));
};

const renderDownloadUsersButton = (args) => {
  const {
    usersSubmitting, usersSubmitError, authorizationToken, dispatch,
  } = args;

  return (
    <div className="d-flex">
      <Button
        variant="primary mr-2"
        type="button"
        style={{ width: '120px' }}
        onClick={generateDownloadUsersHandler({ authorizationToken, dispatch })}
        disabled={usersSubmitting}
      >
        {usersSubmitting
          ? <Spinner as="span" animation="border" size="sm" />
          : 'Show users'}
      </Button>
      <div className="text-danger">
        {usersSubmitError}
      </div>
    </div>
  );
};

const handleLogoutButton = () => {
  console.log('logout');
};

export default () => {
  const usersSubmitting = useSelector(({ users }) => users.submitting);
  const usersSubmitError = useSelector(({ users }) => users.submitError);
  const authorizationToken = useSelector(({ authorization }) => authorization.token);
  const dispatch = useDispatch();

  return (
    <>
      <header className="p-3 border-bottom border-dark d-flex justify-content-between">
        {renderDownloadUsersButton({
          usersSubmitting, usersSubmitError, authorizationToken, dispatch,
        })}
        <Button variant="warning" type="button" onClick={handleLogoutButton}>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="logout-button" opacity=".8" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
            </g>
          </svg>
        </Button>
      </header>
      <UsersList />
    </>
  );
};
