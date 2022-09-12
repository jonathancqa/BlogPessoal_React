import axios from 'axios';

export const api = axios.create({
    baseURL:'https://bloggeneration.herokuapp.com'
})

/* Método de Cadastro de Uusario */
export const cadastroUsuario = async(url: any,dados: any,setDado: any) => {
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}

/*Método de Login de Usuario */
export const login = async(url: any,dados: any,setDado: any) => {
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}

/*Método para listar/buscar e postagens/temas */
export const busca = async(url: any,setDado: any, header: any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}