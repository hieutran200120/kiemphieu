import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./Votecounting.css";
function Votecounting() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);
    const handleChange = e => {
        setImages(Array.from(e.target.files));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("image", images);
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
        <div className="row">
            <div className="col-ms-6">

                <form onSubmit={handleSubmit}>
                    <div class="img-area2" data-img="">
                        <input type="file" id="input" multiple onChange={handleChange} />
                        <div className="img-holder2">
                            <ul>
                                {images.map((image, i) => (
                                    <li key={i}>
                                        <img className="img-responsive" src={URL.createObjectURL(image)} alt={image.name} />
                                    </li>
                                ))}
                            </ul>
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
                        <h2>KẾT QUẢ</h2>

                        <div className="ketqua">
                            <label >
                                Số Lượng Phiếu Nhập:
                            </label>
                            <label >
                                Số Lượng Phiếu hợp lệ:
                            </label>
                            <label >
                                Số Lượng Phiếu không hợp lệ:
                            </label>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-ms-12">
                        <h2>DANH SÁCH ĐẠI BIỂU</h2>
                        <ol>
                            {data.map(item => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Votecounting