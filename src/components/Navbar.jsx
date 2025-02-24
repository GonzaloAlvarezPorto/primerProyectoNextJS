import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3>Navbar</h3>
            <ul>
                <li>
                    <Link className='link' href="/">Home</Link>
                </li>
                <li>
                    <Link className='link' href="/about">About</Link>
                </li>
                <li>
                    <Link className='link' href="/tienda">Tienda</Link>
                </li>
                <li>
                    <Link className='link' href="/posts">Posts</Link>
                </li>
                <li>
                    <Link className='link' href="/api/users">Users</Link>
                </li>
                <li>
                    <Link className='link' href="/api/cuchas">Cuchas</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar