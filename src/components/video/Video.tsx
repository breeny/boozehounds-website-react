import * as React from 'react';
import LoadingState from '../loading-state/LoadingState';
import VideoModel from '../../app/model/Video';

export interface Props {
    video?: VideoModel
}

export default class Video extends React.Component<Props, {}> {
    render() {
        if (this.props.video) {
            let { thumbnailUrl } = this.props.video;
            return (
                <div className="thumbnail">
                    <img src={thumbnailUrl} />
                </div>
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