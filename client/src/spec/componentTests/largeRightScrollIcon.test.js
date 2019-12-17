import React from 'react';
import { shallow } from 'enzyme';
import LargeRightScrollIcon from '../../components/modal/icons/largeRightScrollIcon.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

describe('<LargeRightScrollIcon/>', () => {
    it('should render', () => {
        const component = shallow(<LargeRightScrollIcon />);
        expect(component.exists()).toEqual(true);
    });
    it('should render properly - snapshot version', () => {
        const component = renderer.create(<LargeRightScrollIcon />);
        expect(component).toMatchSnapshot();
    });
})