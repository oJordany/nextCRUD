import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"


export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    // Estou dizendo que esse useState vai armazenar elementos do tipo Cliente e eu to inicializando ele com Cliente.vazio()
    // E esse Cliente.vazio() é exatamente o cliente selecionado
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    // Esse useState vai ter por padrão dois possíveis estados: "tabela" e "form"
    // Nós botamos para inicializar por padrão como "tabela"
    // const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    // Vamos usar esse useEffect() para alterar o estado na inicialização do nosso componente 
    useEffect(obterTodos, [])

    function obterTodos() {
        // Como o obterTodos retorna uma Promise, nós usamos o then e com a lista de clientes recebida nós usamos o setClientes para atualizar a minha tabela e em seguida o setVisivel para mostrar a tabela
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        clientes,
        cliente,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}