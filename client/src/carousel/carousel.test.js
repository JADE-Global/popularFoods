import React from 'react';
import regeneratorRuntime from "regenerator-runtime";
import { shallow, mount, render } from 'enzyme';

import Carousel from './carousel.jsx';
import CarouselItem from '../carouselItem/carouselItem.jsx';

describe('<Carousel />', () => {
    it('it should exist', () => {
        const wrapper = shallow(<Carousel />);
        expect(wrapper.exists()).toEqual(true);
    }),
        it('should render the carouselItem components', async () => {
            const wrapper = shallow(<Carousel />);
            CarouselItem.displayName = 'CarouselItem';
            const waitForAsync = () => new Promise(resolve => setImmediate(resolve));
            await waitForAsync();
            wrapper.update();
            wrapper.setState({
                dishes: [{
                    imageUrl: 'https://source.unsplash.com/random',
                    price: 8.29,
                    name: 'Galvanize',
                    photoNumber: 5,
                    reviewNumber: 10
                }, {
                    imageUrl: 'https://source.unsplash.com/random',
                    price: 12.44,
                    name: 'Hack Reactor',
                    photoNumber: 10,
                    reviewNumber: 15
                }, {
                    imageUrl: 'https://source.unsplash.com/random',
                    price: 7.59,
                    name: 'cohort124',
                    photoNumber: 15,
                    reviewNumber: 20
                }
                ]
            });
            wrapper.update();
            expect(wrapper.find('CarouselItem').length).toBe(3);
        })
});