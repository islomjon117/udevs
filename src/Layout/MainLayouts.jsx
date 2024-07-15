import React from 'react'
// import component
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const MainLayouts = () => {

    return (
        <div>
            {/* navbar start */}
            <nav>
                <Navbar />
            </nav>
            {/* navbar end */}

            {/* outlet start */}
            <main>
                <Outlet />
            </main>
            {/* outlet end */}

            {/* footer start */}
            <footer>
                <Footer />
            </footer>
            {/* footer end */}
        </div>
    )
}

export default MainLayouts