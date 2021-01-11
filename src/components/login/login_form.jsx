import React from 'react';
import classes from './login_form.module.scss';

const LoginForm = (props) => {
  return (
    <div className={classes.login_form_container}>
      <form className={classes.login_form} action=''>
        <h1>ΣΥΝΔΕΣΗ</h1>
        <div className={classes.inputs}>
          <div className={classes.input_wrapper}>
            <label htmlFor='#email'>Δ/νση Ηλεκτρονικού Ταχυδρομείου</label>
            <input type='email' id='#email' className={classes.input_email} />
          </div>
          <div className={classes.input_wrapper}>
            <label htmlFor='#password'>Κωδικός Πρόσβασης</label>
            <input
              type='password'
              id='#password'
              className={classes.input_password}
            />
          </div>
        </div>
        <button className={classes.login_button}>Είσοδος</button>
        <a href='www.google.com' className={classes.forgot_password}>
          Ξέχασα τον Κωδικό μου
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
