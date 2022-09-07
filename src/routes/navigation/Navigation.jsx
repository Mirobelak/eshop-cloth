import {Fragment, useContext} from 'react'
import {Outlet, Link} from "react-router-dom"
import { ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { NavigationContainer, LogoContainer, Navlinks, Navlink } from './navigation.styles'
import { UserContext } from '../../context/user.context'
import {CartContext} from "../../context/cart.context"
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../../components/cart-icon/cartIcon'
import  CartDropdown from "../../components/cart-dropdown/cartDropdown"


const Navigation = () => {

  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  return (
    <Fragment>
    <NavigationContainer>
            <LogoContainer to="/" >
            <CrownLogo className='logo' />
            </LogoContainer>
         <Navlinks>
            <Navlink to="/shop" >
                SHOP
            </Navlink>
            {
              currentUser ? (<Navlink as="span" onClick={signOutUser} >SIGN OUT</Navlink>)
              : (  <Navlink to="/auth" >
              SIGN IN
          </Navlink>) 

            }
          <CartIcon/>
        </Navlinks>
        {isCartOpen && <CartDropdown/>}
    </NavigationContainer>
            <Outlet/>
        
    </Fragment>
  )
}

export default Navigation