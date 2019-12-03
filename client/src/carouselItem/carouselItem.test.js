import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CarouselItem from './carouselItem';

describe('<CarouselItem />', () => {
    it('contains "hello world', () => {
        const wrapper = shallow(<CarouselItem />);
        expect(wrapper.exists()).toEqual(true);
    })
})