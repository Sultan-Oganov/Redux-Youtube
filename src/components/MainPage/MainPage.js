import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as axios from 'axios'
import { API } from '../../config';

const MainPage = (props) => {
    console.log(props)
    const [value, setValue] = useState('')
    const serchVideoByName = (name) => {
        props.toggleIsFetching(true)

        axios.get(API + name)
            .then(response => {
                props.toggleIsFetching(false)
                props.setVideos(response.data.items)
            })
    }

    return (
        <div>

            <form onSubmit={(e) => {
                e.preventDefault()
                serchVideoByName(value)
            }}>
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button>Search</button>
            </form>

            {
                props.videos[0].length > 5 ?
                    props.videos[0]?.map(video => {
                        return (
                            <Link to={`/video/${video.id.videoId}`}>
                                <div key={video.id.videoId}>
                                    <img src={video.snippet.thumbnails.medium.url} />
                                </div>
                            </Link>
                        )
                    })
                    :
                    <h2>Мало Видосов</h2>
            }

        </div>
    );
};

export default MainPage;