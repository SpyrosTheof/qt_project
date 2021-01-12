import React from 'react';
import Aux from '../../hoc/auxiliary';
import Figure1 from '../../assets/figure1.png';
import Figure2 from '../../assets/figure2.png';
import Figure3 from '../../assets/figure3.png';

const Home = (props) => {
  return (
    <Aux>
      <img src={Figure1} alt='figure1' />
      <img src={Figure2} alt='figure2' />
      <img src={Figure3} alt='figure3' />
    </Aux>
  );
};

export default Home;
