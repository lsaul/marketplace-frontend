import Link from "next/link";
import NavStyles from './styles/NavStyles'

const Nav = () =>{
    return(
        <NavStyles>
            <Link href="/product">Products</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">Account</Link>
        </NavStyles>
    )
}

export default Nav;