import React from 'react';
import IntroImageSection from './login_page_parts/intro_image_section/intro_image_section';
import LoginFormSection from './login_page_parts/login_form_section/login_form_section';
import classes from './login_page.module.scss';

const Login_Page = (props) => {
  return (
    <div className={classes.login_page_container}>
      <div className={classes.login_page_section_wrapper}>
        <IntroImageSection />
        <LoginFormSection />
      </div>
    </div>
  );
};

export default Login_Page;
