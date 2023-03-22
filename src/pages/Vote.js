import React, { useState, useEffect } from "react";

function Vote() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="row">
            <div className="col-ms-6">
                <form >
                    <div class="img-area2" data-img="">
                        <div className="img-holder2">
                            <ul>
                                {data.map((image, i) => (
                                    <li key={i}>
                                        {/* <img className="img-responsive" src={URL.createObjectURL(image)} alt={image.name} /> */}
                                        {image.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </form>
            </div>
            <div className='col-ms-6'>
                <div className="row">
                    <div className="col-ms-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-ms-12">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vote;