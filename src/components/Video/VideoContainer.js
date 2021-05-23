import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Preloader from '../Preloader/Preloader';
import Video from './Video';

const VIdeoContainer = (props) => {
    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <Video {...props} />
        </>
    );
};

let withUrlDataContainerComponent = withRouter(VIdeoContainer)

export default connect()(withUrlDataContainerComponent);