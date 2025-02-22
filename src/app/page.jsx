"use client"

import React from 'react'
import '@/styles/globals.scss'

const HomePage = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={()=> {
                alert('hello!')
            }}>
                Click
            </button>
        </div>
    )
}

export default HomePage