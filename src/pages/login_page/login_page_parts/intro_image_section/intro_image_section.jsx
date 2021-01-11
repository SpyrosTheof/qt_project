import React from 'react';
import IntroImage from '../../../../assets/intro_image.svg';

import classes from './intro_image_section.module.scss';

const IntroImageSection = (props) => {
  return (
    <section className={classes.intro_image_container}>
      <img className={classes.intro_image} src={IntroImage} alt='intro_image' />
    </section>
  );
};

export default IntroImageSection;
