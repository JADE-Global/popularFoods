import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CarouselItem from '../../components/carouselItem/carouselItem';

describe('<CarouselItem />', () => {
    it('properly renders', () => {
        const component = shallow(<CarouselItem />);
        expect(component.exists()).toEqual(true);
    });
    it('renders the price', () => {
        const component = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(component.text()).toContain(8.29);
    });
    it('renders the name', () => {
        const component = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(component.text()).toContain('Galvanize');
    });
    it('renders the photoNumber', () => {
        const component = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(component.text()).toContain(5);
    });
    it('renders the reviewNumber', () => {
        const component = shallow(<CarouselItem
            imageUrl={'https://source.unsplash.com/random'}
            price={8.29}
            name={'Galvanize'}
            photoNumber={5}
            reviewNumber={10} />);
        expect(component.text()).toContain(10);
    });
})