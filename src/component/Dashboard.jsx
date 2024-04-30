import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard(){
    // const [carName, setCarName ] = useState ('');
    // const [price, setPrice] = useState ('');
    // const [type, setType] = useState ('');

    const [data, setCarData] = useState ([]);

    const fetchCar = async () => {
            const response = await axios.get('http://localhost:3000/api/v1/cars');

            setCarData(response.data.data);
    }
    useEffect(() => {
        fetchCar();
    }, [data]);
    const handleCreate = async (e) =>{
        e.preventDefault();
        await axios.post ('http://localhost:3000', {
            name: carName,
            price: price,
            type: type,
        });
    }
     const handleUpdate = async (e) =>{
        e.preventDefault();
        console.log("masuk")
        await axios.patch ('http://localhost:3000', {
            name: carName,
            price: price,
            type: type,
        });

    }
    return (
       <section className="home-section">
            <nav>
                <div className="sidebar-button">
                    <i className="bx bx-menu sidebarBtn" />
                    <span className="dashboard">Dashboard</span>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <i className="bx bx-search" />
                </div>
                <div className="profile-details">
                    <img src="images/profile.jpg" alt="" />
                    <span className="admin_name">#</span>
                    <i className="bx bx-chevron-down" />
                </div>
            </nav>

{/* Bagian table */}

            <div className="home-content">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Data</button>
                </div>
                <div className="overview-boxes" />
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Car Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((car, index)=>(
                            <tr className='border-b'>
                                <td scope="column">{car.carName}</td>
                                <td scope="column">{car.price}</td>
                                <td scope="column">{car.type}</td>
                                <td>
                                <button
                                type="button"
                                className="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalEdit"
                                >
                                Update
                                </button>

                                <button type="button" className="btn btn-danger">
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

  {/* Modal Tambah Data*/}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Data
                    </h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                    </div>
                    <div className="modal-body">
                    <form onSubmit = {handleCreate}>
                    <div className="mb-3">
                        <label htmlFor="input1" className="form-label">
                        Car Name
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setCarName(e.target.value)}
                        placeholder="please enter car name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input1" className="form-label">
                        Price
                        </label>
                        <input
                        type="integer"
                        className="form-control"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Please enter a price"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input3" className="form-label">
                        Type
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        onChange={(e)=> setType(e.target.value)}
                        placeholder="please enter car type"
                        />
                    </div>
                     <button type="submit" className="btn btn-primary">
                        Add Data
                    </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>

{/* Modal Edit Data */}
               <div
                className="modal fade"
                id="exampleModalEdit"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                        Edit Data
                        </h1>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                        <label htmlFor="input1" className="form-label">
                            Car name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="please enter car name"
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="input1" className="form-label">
                            Price
                        </label>
                        <input
                            type="integer"
                            className="form-control"
                            placeholder="please enter car name"
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="input3" className="form-label">
                            Type
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="please enter car name"
                        />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        >
                        Close
                        </button>
                        <button type="button" className="btn btn-primary">
                        Edit Data
                        </button>
                    </div>
                    </div>
                </div>
                </div>

        </section>


    )
}
export default Dashboard