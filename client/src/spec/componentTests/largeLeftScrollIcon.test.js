import React from 'react';
import { shallow } from 'enzyme';
import LargeLeftScrollIcon from '../../components/modal/icons/largeLeftScrollIcon.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

describe('<LargeLeftScrollIcon/>', () => {
    it('should render', () => {
        const component = shallow(<LargeLeftScrollIcon />);
        expect(component.exists()).toEqual(true);
    });
    it('should render properly - snapshot version', () => {
        const component = renderer.create(<LargeLeftScrollIcon />);
        expect(component).toMatchSnapshot();
    });
})