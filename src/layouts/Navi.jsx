import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import Signout from './Signout'



export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()

    function handleSignOut() {
        setIsAuthenticated(false)
        navigate("/")

    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        <CartSummary></CartSummary>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <Signout signIn={handleSignIn} />}



                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
