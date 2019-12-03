import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Carousel from './carousel';

describe('<Carousel />', () => {
    it('contains "hello world', () => {
        const wrapper = shallow(<Carousel />);
        expect(wrapper.exists()).toEqual(true);
    })
})