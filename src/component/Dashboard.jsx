function Dashboard(){
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
            <div className="home-content">
                <div className="overview-boxes"></div>
                <div className="sales-boxes">
                <div className="recent-sales box">
                    <div className="title">CRUD</div>
                    <div className="sales-details">
                        <table>
                            <th>Cars</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>CreatedAt</th>
                            <th>UpdatedAt</th>
                            <th>Action</th>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                   <button type="button" className="btn btn-success">Update</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </table>
                        </div>
                </div>
                </div>
            </div>
        </section>


    )
}
export default Dashboard