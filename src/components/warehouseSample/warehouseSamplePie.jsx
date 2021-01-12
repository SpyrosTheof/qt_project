import React from 'react';
import Pie from '../charts/pie';
import Aux from '../../hoc/auxiliary';
import { piedata } from './pieData';

const WarehouseSamplePie = (props) => {
  return (
    <Aux>
      <Pie data={piedata} />
    </Aux>
  );
};

export default WarehouseSamplePie;
