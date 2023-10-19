import logo from '../public/logo.png'
import staled from 'styled-components'
import '../style/navbar.scss'

const Nav = staled.div`
    display: flex;
    padding: 5px 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #FF0000;
    color: #FFFFFF;
    font-weight: 600;
`

const Img = staled.img`
    height: 40px;
    cursor: pointer;
`
const Navbar = (props) => {
    return(
        <>
            <Nav>
                <div onClick={props.viewHome}>
                    <Img src={logo} alt="Logo" />
                </div>
                <div className='favorites' onClick={props.viewFavorites}>
                    Favoritos
                </div>
            </Nav>
        </>
    )
}

export {Navbar}