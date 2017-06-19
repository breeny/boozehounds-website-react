import * as React from 'react';
import LoadingState from '../loading-state/LoadingState';
import VideoModel from '../../app/model/Video';

export interface Props {
    video?: VideoModel
}

export default class Video extends React.Component<Props, {}> {
    render() {
        if (this.props.video) {
            return (
                null
            );
        } else {
            return (
                <LoadingState
                    showThumbnail={true}
                />
            );
        }
    }
}