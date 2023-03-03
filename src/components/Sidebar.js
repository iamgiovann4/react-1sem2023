import Box from '@mui/material/Box';
import img from './assets/img/photo.jpg';
import { ReactComponent as IconCarrinho } from './assets/img/carrinho.svg'
import { SiInstacart  as Cenoura, SiPicartodottv as Bandeira} from 'react-icons/si';

const Sidebar = () => {
    return(
        <Box sx={{
            background: "yellow",
            width: '1000px',
            height: '500px'
        }}>
            <h2>Sidebar</h2>

            <img alt='' style={{width: 200, height: 123.33 }}
            src="https://res.cloudinary.com/de340ydyr/image/upload/v1677786086/cld-sample-2.jpg"/>

            <img style={{ width: 200, height: 123.33}} src={img} alt='' />

            <IconCarrinho style={{
                width: 50,
                height: 50,
            }} />

            <hr/>

            <Cenoura style={{
                width: 30,
                height: 30
            }} />

            <Bandeira style={{
                width: 30,
                height: 30,
                fill:'blue'
            }} />
        </Box>
    )
}

export default Sidebar;