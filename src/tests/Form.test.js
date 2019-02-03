/* globals describe, it, expect, beforeAll */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Form } from '../components/Form';

configure({ adapter: new Adapter() });

describe('<Form />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Form />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
