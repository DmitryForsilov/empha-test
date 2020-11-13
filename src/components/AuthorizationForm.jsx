import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { Form, Button, Spinner } from 'react-bootstrap';
import usersApi from '../api/usersApi';
import { actions } from '../redux/slices';

const authorizationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const generateOnSubmit = ({ dispatch }) => async (fieldsData, { setErrors, resetForm }) => {
  try {
    const { data } = await usersApi.getAuthToken(fieldsData);

    resetForm();
    dispatch(actions.setAuthorization({ loggedIn: true, token: data.token }));
  } catch (error) {
    console.log(error);
    setErrors({ submitError: error.message });
  }
};

const renderForm = (formik) => (
  <Form onSubmit={formik.handleSubmit} className="m-auto p-4 rounded-lg shadow bg-white w-75" style={{ maxWidth: '420px' }}>
    <h2>Authorization</h2>
    <Form.Group>
      <Form.Label>Username</Form.Label>
      <Form.Control
        name="username"
        type="text"
        placeholder="Enter username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={formik.isSubmitting}
      />
      <Form.Control.Feedback className="d-block" type="invalid">
        {formik.touched.username && formik.errors.username}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control
        name="password"
        type="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={formik.isSubmitting}
      />
      <Form.Control.Feedback className="d-block" type="invalid">
        {formik.touched.password && formik.errors.password}
      </Form.Control.Feedback>
    </Form.Group>

    <div className="d-flex justify-content-between">
      <Button variant="primary" type="submit" style={{ width: '78px' }} disabled={formik.isSubmitting}>
        {formik.isSubmitting
          ? <Spinner as="span" animation="border" size="sm" />
          : 'Submit'}
      </Button>
      <div className="text-danger">
        {formik.errors.submitError}
      </div>
    </div>
  </Form>
);

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/users' } };
  const loggedIn = useSelector(({ authorization }) => authorization.loggedIn);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: authorizationSchema,
    onSubmit: generateOnSubmit({ dispatch }),
  });

  if (loggedIn) {
    return <Redirect to={from} />;
  }

  return renderForm(formik);
};
