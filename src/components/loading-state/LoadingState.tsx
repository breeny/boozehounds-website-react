import * as React from 'react';
import './loading.scss';

export interface Props {
    showIcon?: boolean;
    showThumbnail? :boolean;
}

export default class LoadingState extends React.Component<Props, {}> {
    render() {
        let { 
            showIcon,
            showThumbnail 
        } = this.props;
        return (
            <div>
                {showIcon && <div className="loading-icon"></div> }
                {showThumbnail && <div className="loading-thumbnail"></div>}
            </div>
        );
    }
}