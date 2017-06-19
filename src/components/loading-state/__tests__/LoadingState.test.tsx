import * as React from 'react';
import { shallow } from 'enzyme';
import LoadingState from '../LoadingState';

describe('<LoadingState />', () => {
    it('should display nothing by default', () => {
        let loading = shallow(<LoadingState />);
        expect(loading.childAt(0).children().length).toEqual(0);
    });

    it('should display an icon', () => {
        let loading = shallow(<LoadingState showIcon={true} />);
        expect(loading.find('.loading-icon').length).toEqual(1);
    });
});