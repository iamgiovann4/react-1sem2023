import { Box } from '@mui/system'
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar/>
        <Content/>
      </Box>
      <Footer/>
    </>
  )
}

export default App