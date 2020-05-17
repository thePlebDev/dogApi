import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './app';


describe('app',()=>{
  it('renders without crashing',()=>{  
    shallow(<App />)
  });



});
