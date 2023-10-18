import logo from '../public/logo.png'
const Navbar = (props) => {
    return(
        <>
            <nav>
                <div onClick={props.viewHome}>
                    <img src={logo} alt="Logo" />
                </div>
                <div onClick={props.viewFavorites}>
                    Favoritos
                </div>
            </nav>
        </>
    )
}

export {Navbar}