
const Navbar = (props) => {
    return(
        <>
            <nav>
                <div onClick={props.viewHome}>
                    logo
                </div>
                <div>
                    opçoes
                </div>
            </nav>
        </>
    )
}

export {Navbar}