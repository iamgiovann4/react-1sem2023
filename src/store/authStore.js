import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isLogged: false,
    token: '',
    nome: '',
    age: '',
    office: '',
    roles: '',
  login: (token, user) => set({ isLogged: true, token: token, nome: user.nome, age: user.age, office: user.office, roles: user.roles }),
  logout: () => set({ isLogged: false, token: '', nome: '', age: '', office: '', roles: ''}),
}))

export default useAuthStore