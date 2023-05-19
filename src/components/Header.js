import './Header.css'
import Box from '@mui/material/Box'
import { FaReact as IconReact } from 'react-icons/fa';
import MainMenu from './MainMenu';
import useAuthStore from '../store/authStore'
import { useState } from 'react'

const Header = () => {
    const isLogged = useAuthStore((state) => state.isLogged)
    const nomeUserLogged = useAuthStore((state) => state.nome)
    const officeUserLogged = useAuthStore((state) => state.office)
    const tokenUserLogged = useAuthStore((state) => state.token)
    const login = useAuthStore((state) => state.login)
    const logout = useAuthStore((state) => state.logout)

    const [modalOpen, setModalOpen] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault() 
        const nome = event.target.nome.value
        const age = event.target.age.value
        const user = {nome, age}
        try {
          const response = await fetch('http://localhost:3100/auth/login',
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user), 
          })
          const data = await response.json()

          console.log(data)
          if(response.status === 200) {
            //logar
            login(data.token, data.user)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            setModalOpen(false)
          } else{
            alert(data.message)
          }

        } catch (error) {
          console.log(error)
        }
      }

      const handleLogout = async () => {
        try {
          const response = await fetch('http://localhost:3100/auth/logout',
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({nome: nomeUserLogged, token: tokenUserLogged}), 
          })
          const data = await response.json()
          console.log(data)
          if(response.status === 200) {
            logout()
            localStorage.removeItem('token')
            localStorage.removeItem('user')
          } else{
            alert(data.message)
          }

        } catch (error) {
          console.log(error)
        }
      }


    return (
        <Box component='header' sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={styles.stack}>
                <IconReact style={styles.logo} />
                <h3>Logo</h3>
            </Box>
            <MainMenu />
            <div style={{margin: '0 0 0 20px', color: '#FFF' }}>
                {isLogged ? (
                    <>
                        <p style={styles.nome}>{nomeUserLogged}</p>
                        {/* <img onClick={() => handleLogout()} style={styles.avatar} src={avatarUserLogged} alt={nomeUserLogged} /> */}
                    </>
                ) : (<button onClick={() => setModalOpen(true)}>Logar</button>) }
            </div>
            {modalOpen && 
              <Box className="bgModal" onClick={(event) => {
                if(event.target.className.includes('bgModal')) {
                  setModalOpen(false)
                }
              }} sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#000000A0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9
                }}>
                  <Box sx={{
                    width: '500px',
                    height: '300px',
                    background: '#FFF',
                    borderRadius: '10px',
                    padding: '20px',
                  }}>
                    <h1>Logar</h1>
                    <form onSubmit={handleSubmit}>
                      <input type="text" name="email" placeholder="Email" /><br />
                      <input type="password" name="pass" placeholder="Senha" /><br />
                      <br />
                      <button type="submit">Logar</button>
                    </form>
                  </Box> 
              </Box>
            }
        </Box>
    )
}

const styles = {
    stack: {
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
        gap: '10px',
        width: 'fit-content'
    },
    logo:{
        color:'#FFF',
        width: '7em',
        height: '3em'
    },
    nome: {
        fontSize: '40px',
        cursor: 'pointer'
    }
}

export default Header