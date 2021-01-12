import React from 'react';
import classes from './login_form.module.scss';
import { useFormik } from 'formik';
import formikProps from './formik';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const LoginForm = (props) => {
  //Formik values handler

  const {
    wrongEmail,
    wrongPassword,
    authorizeUser,
    setWrongEmail,
    setWrongPassword,
  } = props;

  const { getFieldProps, handleSubmit, touched, errors } = useFormik({
    ...formikProps(authorizeUser, setWrongEmail, setWrongPassword),
  });

  const invalidCredentials =
    !wrongEmail && !wrongPassword ? (
      ''
    ) : wrongEmail ? (
      <div className={classes.invalidCredentials}>
        Το email σας δεν αντιστοιχεί σε κάποιον χρήστη
      </div>
    ) : (
      <div className={classes.invalidCredentials}>Λανθασμένος Κωδικός</div>
    );

  return (
    <div className={classes.login_form_container}>
      <form className={classes.login_form} action='' onSubmit={handleSubmit}>
        {invalidCredentials}
        <h1>ΣΥΝΔΕΣΗ</h1>
        <div className={classes.inputs}>
          <div className={classes.input_wrapper}>
            <label htmlFor='#email'>
              Δ/νση Ηλεκτρονικού Ταχυδρομείου
              <span className={classes.errorMessage}>
                {touched['email'] && errors['email']}
              </span>
            </label>
            <input
              type='email'
              id='#email'
              className={classes.input_email}
              {...getFieldProps('email')}
            />
          </div>
          <div className={classes.input_wrapper}>
            <label htmlFor='#password'>
              Κωδικός Πρόσβασης{' '}
              <span className={classes.errorMessage}>
                {touched['password'] && errors['password']}
              </span>
            </label>
            <input
              type='password'
              id='#password'
              className={classes.input_password}
              {...getFieldProps('password')}
            />
          </div>
        </div>
        <button type='submit' className={classes.login_button}>
          Είσοδος
        </button>
        <a href='www.google.com' className={classes.forgot_password}>
          Ξέχασα τον Κωδικό μου
        </a>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authorizeUser: (bool) => {
      dispatch(actions.authorizeUser(bool));
    },
    setWrongEmail: (bool) => {
      dispatch(actions.setWrongEmail(bool));
    },
    setWrongPassword: (bool) => {
      dispatch(actions.setWrongPassword(bool));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
