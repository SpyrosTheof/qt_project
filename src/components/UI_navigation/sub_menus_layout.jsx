import React from 'react';
import Aux from '../../hoc/auxiliary';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import WarehouseSamplePie from '../warehouseSample/warehouseSamplePie';
import WarehouseSampleBar from '../warehouseSample/warehouseSampleBar';

const SubMenusLayout = (props) => {
  return (
    <Aux>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/warehouse1' component={WarehouseSamplePie} />
        <Route exact path='/warehouse2' component={WarehouseSampleBar} />
        <Route exact path='/warehouse3' component={WarehouseSamplePie} />
        <Route exact path='/warehouse4' component={WarehouseSampleBar} />
        <Route path='/entry' component={Home} />
      </Switch>
    </Aux>
  );
};

export default SubMenusLayout;
