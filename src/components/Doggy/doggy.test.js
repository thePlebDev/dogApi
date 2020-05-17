import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Doggy from './doggy'


it('renders without crashing',()=>{
  const numbers =[1,2,3,4]

shallow(<Doggy data={numbers} />)
})
