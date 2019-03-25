import React from 'react';
import { shallow } from 'enzyme';
import TopNav from 'top-nav';

describe('<TopNav/>', () => {
    it('should display component', () => {
        shallow(<TopNav/>)
    })

    it('Should fire the onGenerateAuralUpdate function', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback} />);
        const link = wrapper.find('.new');
        link.stimulate('click', {
            preventDefault(){}
        })
        expect(callback).to.toHaveBeenCalled();
    })
 
    it('Should call onGenerateAuralUpdate when state-of-game link is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
        const link = wrapper.find('.status-link');
        link.simulate('click', {
          preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

})