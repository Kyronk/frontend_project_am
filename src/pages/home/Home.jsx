import React from 'react'
import Navbar from '../../layouts/navbar/Navbar'
import Live from '../../components/live/Live'
import Body from '../../components/body/Body'

const Home = () => {
    return (
        <>
            <Navbar />
            <Live />
            <Body />
        </>
    )
}

export default Home