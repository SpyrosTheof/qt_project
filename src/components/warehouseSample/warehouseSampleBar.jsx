import React from 'react';
import Aux from '../../hoc/auxiliary';
import { bardata } from './barData';
import BarChart from '../charts/barChart';

const WarehouseSampleBar = (props) => {
  return (
    <Aux>
      <BarChart data={bardata} />
    </Aux>
  );
};

export default WarehouseSampleBar;
