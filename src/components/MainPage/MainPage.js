import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
    const [value, setValue] = useState('')

    return (
        <div>

            <form onSubmit={(e) => {
                e.preventDefault()
                props.serchVideoByName(value)
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