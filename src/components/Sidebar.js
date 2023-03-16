import Box from '@mui/material/Box';
import img from './assets/img/photo.jpg';
import { ReactComponent as IconCarrinho } from './assets/img/carrinho.svg'
import { 
    SiInstacart  as Cenoura, 
    SiPicartodottv as Bandeira} from 'react-icons/si'; /* Biblioteca de icones */
import { IoMdCar as Carro} from 'react-icons/io';

const Sidebar = () => {
    return(
        <Box sx={{
            background: "#DDD",
            width: 200,
            // height: 500,
            padding: '15px'
        }}>
            <h2>Sidebar</h2>

            <img alt='' style={{
                    width: 200,
                    height: 123.83
                }}
            src="https://res.cloudinary.com/de340ydyr/image/upload/v1677786086/cld-sample-2.jpg"/>

            <hr/>

            <img style={{ width: 200, height: 123.33}} src={img} alt='' /> {/* quando eu for usar uma variavel tenho que colocar entre {} */}

            <hr/>

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

            <hr/>

            <Carro style={{
                width: 30,
                height: 30,
                fill:'red'
            }}/>

        </Box>
    )
}

export default Sidebar;