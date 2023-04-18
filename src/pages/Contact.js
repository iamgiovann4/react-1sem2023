import Box from '@mui/material/Box'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Content sx={{padding: "15px", textAlign: "center"}}>
            <h1>Contato</h1>
        </Content>
      </Box>
      <Footer />
    </>
  )
}

export default Contact