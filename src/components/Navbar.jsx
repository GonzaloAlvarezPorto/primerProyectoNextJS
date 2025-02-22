import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <h3>Navbar</h3>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/tienda">Tienda</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar