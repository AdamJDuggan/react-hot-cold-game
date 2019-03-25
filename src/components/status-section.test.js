import React from 'react';
import { shallow } from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', () => {

    it('should display component on render', () => {
        shallow(<StatusSection auralStatus="" guesses={[]}/>)
    } )


})