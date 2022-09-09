import {Fragment} from 'react'
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux"
import CartIcon from '../../components/cart-icon/cartIcon'
import  CartDropdown from "../../components/cart-dropdown/cartDropdown"
import { selectCartIsOpen } from '../../store/cart/cart.selector'
import {selectCurrentUser} from "../../store/user/user.selector"
import { ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { signOutUser } from '../../utils/firebase/firebase'
import { NavigationContainer, LogoContainer, Navlinks, Navlink } from './navigation.styles'




const Navigation = () => {
  const currentUser =  useSelector(selectCurrentUser) 
  const isCartOpen = useSelector(selectCartIsOpen)

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