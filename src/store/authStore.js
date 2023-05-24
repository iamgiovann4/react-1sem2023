import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isLogged: false,
    token: '',
    nome: '',
    office: '',
    roles: '',
  login: (token, user) => set({ isLogged: true, token: token, nome: user.nome, office: user.office, roles: user.roles }),
  logout: () => set({ isLogged: false, token: '', nome: '', office: '', roles: ''}),
}))

export default useAuthStore