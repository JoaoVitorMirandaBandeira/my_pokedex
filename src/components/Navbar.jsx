
const Navbar = (props) => {
    return(
        <>
            <nav>
                <div onClick={props.viewHome}>
                    logo
                </div>
                <div onClick={props.viewFavorites}>
                    Favoritos
                </div>
            </nav>
        </>
    )
}

export {Navbar}