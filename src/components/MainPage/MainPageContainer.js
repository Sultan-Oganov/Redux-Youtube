import React from 'react'
import { connect } from 'react-redux'
import { setVideos, toggleIsFetching } from '../../redux/redusers/home-reducer'
import * as axios from 'axios'
import { API } from '../../config';
import Preloader from '../Preloader/Preloader'
import MainPage from './MainPage';

const MainPageContainer = (props) => {

    React.useEffect(() => {
        serchVideoByName()
    }, [])

    const serchVideoByName = (name = '') => {
        props.toggleIsFetching(true)

        axios.get(API + name)
            .then(response => {
                props.toggleIsFetching(false)
                props.setVideos(response.data.items)
            })
    }

    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <MainPage
                videos={props.videos}
                setVideos={props.setVideos}
                toggleIsFetching={props.toggleIsFetching}
                serchVideoByName={serchVideoByName}
            />
        </>
    )
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