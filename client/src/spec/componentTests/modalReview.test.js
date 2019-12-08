import React from 'react';
import { shallow } from 'enzyme';
import ModalReview from '../../components/modal/modalReview/modalReview.jsx';

describe('<ModalReview/>', () => {
    it('properly renders', () => {
        const component = shallow(<ModalReview />);
        expect(component.exists()).toEqual(true);
    });
    it('correctly renders username and last initial', () => {
        const component = shallow(<ModalReview
            name={'Test Name'}
        />);
        expect(component.text()).toContain('Test N.');
    });
    it('correctly renders friend number', () => {
        const component = shallow(<ModalReview
            friendNumber={10}
        />);
        expect(component.text()).toContain(10);
    });
    it('correctly renders review number', () => {
        const component = shallow(<ModalReview
            reviewNumber={12}
        />);
        expect(component.text()).toContain(12);
    });
    it('correctly renders up to 234 characters of the body starting with the sentence that contains the dish name', () => {
        const component = shallow(<ModalReview
            dish={'Potato Pancake'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />);
        expect(component.text()).toContain('Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    });
})