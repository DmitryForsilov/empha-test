import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
import { actions } from '../../redux/slices';
import UsersList from '../../components/UsersList';
import { ReactComponent as LogoutIcon } from '../../images/logout-icon.svg';

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
      <header className="p-4 border-bottom border-dark d-flex justify-content-between">
        {renderDownloadUsersButton({
          usersSubmitting, usersSubmitError, authorizationToken, dispatch,
        })}
        <Button variant="warning" type="button" onClick={handleLogoutButton}>
          <LogoutIcon />
        </Button>
      </header>
      <UsersList />
    </>
  );
};
