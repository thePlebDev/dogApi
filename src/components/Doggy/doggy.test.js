import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Doggy from './doggy'


it('renders without crashing',()=>{
  const numbers =[1,2,3,4]
  const div = document.createElement('div')
  ReactDOM.render(<Doggy data={numbers} />,div)
})
