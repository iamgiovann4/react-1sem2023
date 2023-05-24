import Box from '@mui/material/Box'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Error404 = () => {
  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex'
      }}>
        <Sidebar />
        <Box sx={{padding: "25px"}}>
            <h1>Opsss... Página não encontrada!</h1>
            <h4>Verifique se a URL está correta.</h4>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Error404