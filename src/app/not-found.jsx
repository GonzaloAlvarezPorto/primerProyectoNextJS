import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <p>
                404
            </p>
            <p>
                Not Found
            </p>
            <Link href="/">Volver</Link>
        </div>
    )
}

export default NotFound