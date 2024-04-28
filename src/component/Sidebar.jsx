function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo-details">
                <i className="bx bxl-c-plus-plus" />
                <span className="logo_name">CAR</span>
            </div>
            <ul className="nav-links">
                <li>
                <a href="#" className="active">
                    <i className="bx bx-grid-alt" />
                    <span className="links_name">Dashboard</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <i className="bx bx-box" />
                    <span className="links_name">Car Product</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <i className="bx bx-list-ul" />
                    <span className="links_name">Order list</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <i className="bx bx-cog" />
                    <span className="links_name">Setting</span>
                </a>
                </li>
                <li className="log_out">
                <a href="#">
                    <i className="bx bx-log-out" />
                    <span className="links_name">Log out</span>
                </a>
                </li>
            </ul>
        </div>

    )

}
export default Sidebar