import './Header.css'
import Box from '@mui/material/Box'

const Header = () => {
    return (
        <Box component='header'>
            <h3>Logo</h3>
        </Box>
    )
}

export default Header

// import "./Header.css"; //arquivos css importam sem o from

// const Header = () => { //forma atualizada de montar função
//     return(
//     <>
//     <header>
//         <h1>Hello World!!!</h1>
//     </header>
//     </>
//     )
// }

// export default Header; //Para poder ser usado nas de mais rotas