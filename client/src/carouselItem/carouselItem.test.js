import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CarouselItem from './carouselItem';

describe('<CarouselItem />', () => {
    it('contains "hello world', () => {
        const wrapper = shallow(<CarouselItem />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('renders the price', () => {
        const wrapper = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(wrapper.text()).toContain(8.29);
    });
    it('renders the name', () => {
        const wrapper = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(wrapper.text()).toContain('Galvanize');
    });
    it('renders the photoNumber', () => {
        const wrapper = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(wrapper.text()).toContain(5);
    });
    it('renders the reviewNumber', () => {
        const wrapper = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(wrapper.text()).toContain(10);
    });
})