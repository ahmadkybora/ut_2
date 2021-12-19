// test 1 

// import App from './App';
// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });  

// test("render without error", () => {
//   const wrapper = shallow(<App />);
//   const appComponent = wrapper.find("[data-test='component-app']");
//   expect(appComponent.length).toBe(1);
// });

// test("renders increment button", () => {
//   const wrapper = shallow(<App />);
//   const button = wrapper.find("[data-test='increment-button']");
//   expect(button.length).toBe(1);
// });

// test("renders counter display", () => {
//   const wrapper = shallow(<App />);
//   const counterDisplay = wrapper.find("[data-test='counter-display']");
//   expect(counterDisplay.length).toBe(1);
// });

// test("counter start at 0", () => {}); 

// test("clicking button increments counter display", () => {});

// test 2 is summary

import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });  

// بدون تنظیم کردن شرط
// const setup = (props={}, state = null) => {
//   return shallow(<App {...props} />);
// }

const setup = (props={}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState({state}); // اگر استیت بود ست استیت را انجام بده
  return wrapper;
}

const findByTestAtt = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAtt(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAtt(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAtt(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter start at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
}); 

/**
 * شبیه سازی داده به کامپوننت و اراسال و انجام عملیات روی آن
 */
test("clicking button increments counter display", () => {
  const counter = 11;
  const wrapper = setup(null, counter);
  
  // find button and click
  const button = findByTestAtt(wrapper, 'increment-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAtt(wrapper, 'counter-display');
  // expect(counterDisplay).toContain(counter + 1);
  // expect(counterDisplay.text()).toBe(counter + 1);
});