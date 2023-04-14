import Box from '@mui/material/Box'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Box sx={{padding: "15px", textAlign: "center"}}>
            <h1>Contato</h1>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Contact