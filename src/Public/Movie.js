import React, { useState, useEffect } from 'react';

const Movie = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const apiKey = 'R5on-EY7I1IwUEJOyZaRI2sTAF5clV4DPyobE7Ou3F8';
        const apiUrl = 'https://api.unsplash.com/photos';

        fetch(apiUrl, {
            headers: {
                Authorization: `Client-ID ${apiKey}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setImages(data);
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    return (
        <>
            <div>
                <p>Movies</p>
                <div style={{
                    width: '850px',
                    height: '400px',
                    padding: '20px',
                    border: '1px solid white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    overflow: 'scroll'
                }}>

                    {images.map((image) => (
                        <div
                            style={{
                                width: '250px',
                                height: '300px',
                                border: '1px solid red',
                                borderRadius: '5px',
                            }}
                            key={image.id}
                        >
                            <img
                                src={image.urls.raw}
                                width="100%"
                                height="70%"
                                alt={image.alt_description}
                            />
                            <p>
                                {image.alt_description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Movie;
