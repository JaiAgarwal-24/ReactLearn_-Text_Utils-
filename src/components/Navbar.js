import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="btn-group mx-3" role="group" aria-label="Basic example">
                        <button type="button" onClick={() => {props.changeColor(props.colorMode.col1)}} className="btn" style={{ backgroundColor: props.colorMode.col1, borderRadius: "50%", padding: '12px', margin: '1px 3px' }}></button>
                        <button type="button" onClick={() => {props.changeColor(props.colorMode.col2)}} className="btn" style={{ backgroundColor: props.colorMode.col2, borderRadius: "50%", padding: '12px', margin: '1px 3px' }}></button>
                        <button type="button" onClick={() => {props.changeColor(props.colorMode.col3)}} className="btn" style={{ backgroundColor: props.colorMode.col3, borderRadius: "50%", padding: '12px', margin: '1px 3px' }}></button>
                        <button type="button" onClick={() => {props.changeColor(props.colorMode.col4)}} className="btn" style={{ backgroundColor: props.colorMode.col4, borderRadius: "50%", padding: '12px', margin: '1px 3px' }}></button>
                        <button type="button" onClick={() => {props.changeColor(props.colorMode.col5)}} className="btn" style={{ backgroundColor: props.colorMode.col5, borderRadius: "50%", padding: '12px', margin: '1px 3px' }}></button>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}