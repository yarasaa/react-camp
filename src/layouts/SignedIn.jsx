import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://wallpapercave.com/wp/Gn6c2Wp.jpg" />
                <Dropdown pointing="top left" text='Mehmet'>
                    <DropdownMenu>
                        <DropdownItem text="Bilgilerim" icon="info" />
                        <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out" />


                    </DropdownMenu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
