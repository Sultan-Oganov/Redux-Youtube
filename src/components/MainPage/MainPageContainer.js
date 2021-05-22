import React from 'react'
import { connect } from 'react-redux'
import { setVideos, toggleIsFetching } from '../../redux/redusers/home-reducer'
import * as axios from 'axios'
import { API } from '../../config';
import Preloader from '../Preloader/Preloader'
import MainPage from './MainPage';

class MainPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(API)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setVideos(response.data.items)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <MainPage
                    videos={this.props.videos}
                    setVideos={this.props.setVideos}
                    toggleIsFetching={this.props.toggleIsFetching}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.homePage.videos,
        isFetching: state.homePage.isFetching,
    }
}

export default connect(mapStateToProps, {
    setVideos, toggleIsFetching
})(MainPageContainer)