import Box from "@mui/material/Box";

const CardUser = ({user}) => {
    return (
        <Box sx={{background: '#D3D3D3', borderRadius: '10px', display: 'flex', margin: '20px 0', padding: '15px'}}>
            {/* <img src={user.avatar} alt={user.name} style={{witdh: '80px', height: '80px', borderRadius: '50%'}}/> */}
            <Box>
                <h3>{user.nome}</h3>
                <p>{user.age}</p>
                <p>{user.office}</p>
            </Box>
        </Box>
    )
}

export default CardUser