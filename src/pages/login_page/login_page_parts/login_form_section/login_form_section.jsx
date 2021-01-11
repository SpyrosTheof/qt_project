import React from 'react';
import LoginForm from '../../../../components/login/login_form';

import classes from './login_form_section.module.scss';

const LoginFormSection = (props) => {
  return (
    <section className={classes.login_form_container}>
      <LoginForm />
    </section>
  );
};

export default LoginFormSection;
