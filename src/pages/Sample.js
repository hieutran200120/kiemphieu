
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import './Sample.css';

function Sample() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);
    function handleChange(e) {
        // console.log(e.target.files);
        setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", selectedFile);
        axios
            .post("/server/upload", formData)
            .then((res) => {
                console.log(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                toast.error("Failed to upload image. Please try again later.");
            });

    };
    return (
        <div className='row '>
            <div className='col-ms-6'>
                <form onSubmit={handleSubmit}>
                    <div class="img-area" data-img="">
                        <input type="file" id="input" onChange={handleChange} />
                        <div className="img-holder">
                            <img src={selectedFile} alt="" id="img" className="img-responsive" />
                        </div>
                        <div className="label">
                            <label className="image-upload" htmlFor="input">
                                <FontAwesomeIcon className="icon" icon={faCloudArrowUp} />
                            </label>

                        </div>
                        <div className="submit">
                            <label htmlFor="input">
                                <span className="upload">upload</span>
                            </label>
                            <button type="submit" className="send">Tạo Mẫu</button>
                        </div>
                    </div>

                </form>
                {isLoading && <div className="loading"></div>}
                <ToastContainer />
            </div>
            <div className='col-ms-6'>
                <div className="row">
                    <div className="col-ms-12">
                        <h2>THÔNG TIN</h2>
                        <ol>
                            {data.map(item => (
                                <input type="text" value={item.title} />
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-ms-12">
                        <h2>DANH SÁCH</h2>
                        <ol>
                            {data.map(item => (
                                <div className="list">
                                    <label >
                                        {item.id}
                                        <input type="text" value={item.title} />
                                    </label>

                                </div>

                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample