import * as React from 'react';
import { shallow } from 'enzyme';
import Video from '../Video';
import LoadingState from '../../loading-state/LoadingState';

describe('<Video />', () => {
    it('should have a loading state', () => {
        const video = shallow(<Video />);
        expect(video.find(LoadingState).length).toBe(1);
    });

    it('should display correctly when a video is loaded', () => {
        const video = shallow(<Video
            video={{
                thumbnailUrl: 'my-url'
            }}
        />);
        let thumbnail = video.find('.thumbnail');
        expect(thumbnail.length).toEqual(1);
    });
});