import Box from '@mui/material/Box'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Box sx={{padding: "15px", textAlign: "center"}}>
            <h1>Contato</h1>
            <h5>Giovanna</h5>
            <p>Tel: (12)3883-7489</p>
            <p>Tel: (12)996708806</p>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Contact