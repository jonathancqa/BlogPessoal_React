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

/*Método para listar/buscar e postagens/temas pelo Id */
export const buscaId = async(url: any,setDado: any, header: any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

/*Método para criar e postagens/temas */
export const post = async(url: any, dados:any, setDado: any, header: any) => {
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

/*Método para atualizar postagens/temas */
export const put = async(url: any, dados:any, setDado: any, header: any) => {
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

/*Método para deletar postagens e temas */
export const deleteId = async(url: any, header: any) => {
    await api.delete(url,header)
}