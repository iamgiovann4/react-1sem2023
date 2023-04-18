import Box from '@mui/material/Box'

const Footer = () => {
    return(
        <Box component="footer" sx={styles.footer}>
           <p style={styles.paragrafo}>Giovanna Siqueira Nicolau</p>
       </Box>
    )
}

const styles = {
    footer: {
        background: '#555',
        color: '#000',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center'
    },
    paragrafo: {
        color: '#fff'
    }
}
export default Footer