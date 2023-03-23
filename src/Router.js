import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'

const Router = () => {
    return( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemSomos" element={<About />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default Router