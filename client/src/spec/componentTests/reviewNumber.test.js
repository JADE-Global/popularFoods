import React from 'react';
import { shallow } from 'enzyme';
import ReviewNumber from '../../components/modal/icons/reviewNumber.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

describe('<ReviewNumber/>', () => {
    it('should render', () => {
        const component = shallow(<ReviewNumber />);
        expect(component.exists()).toEqual(true);
    });
    it('should render properly - snapshot version', () => {
        const component = renderer.create(<ReviewNumber />);
        expect(component).toMatchSnapshot();
    });
})