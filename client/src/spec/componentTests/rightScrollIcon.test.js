import React from 'react';
import { shallow } from 'enzyme';
import RightScrollIcon from '../../components/carousel/icons/rightScrollIcon.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

describe('<RightScrollIcon/>', () => {
    it('should render', () => {
        const component = shallow(<RightScrollIcon />);
        expect(component.exists()).toEqual(true);
    });
    it('should render properly - snapshot version', () => {
        const component = renderer.create(<RightScrollIcon />);
        expect(component).toMatchSnapshot();
    });
})