import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

const MainMenu = () => { 
    return (
        <nav style={styles.nav}>
            <Box component='nav' sx={styles.nav}>
                <ul style={styles.ulMenu}>menu...</ul>
                <Button sx={{
                backgroundColor: "red", '&:hover': {
               background: "salmon"
           }
            }} variant="contained">Contained</Button>
            </Box>
        </nav>
    )
}

const styles = {
    nav: {
        background: '#555',
        color: '#000',
        padding: '20px'
    },
    ulMenu: {
        listStyleType: 'none'
    }
}


export default MainMenu

// import "./MainMenu.css"; //arquivos css importam sem o from
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const MainMenu = () => { //forma atualizada de montar função
//     return(
//         <Box component="nav">
//             <p className="MainMenu">Giovanna Siqueira Nicolau.</p>
//             <Button sx={{
//                 backgroundColor: "red", '&:hover': {
//                 background: "salmon"
//             }
//             }} variant="contained">Contained</Button>
//         </Box>
//     )
// }

// export default MainMenu; //Para poder ser usado nas de mais rotas