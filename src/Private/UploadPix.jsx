import React, { useState } from 'react';

function PictureUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const formData = new FormData();
    //     formData.append('file', file);

    //     // send the form data to your server using fetch or axios
    // };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <button type="submit">Upload</button>
        </form>
    );
}

export default PictureUpload