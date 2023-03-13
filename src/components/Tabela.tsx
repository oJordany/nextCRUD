import Cliente from '@/core/Cliente'
import {IconeEdicao, IconeLixo} from '@/components/Icones'

// Criando uma interface só para ficar mais bem definido as props que a gente vai querer passar 
interface TabelaProps {
    clientes: Cliente[] 
    // Depois a gente vai criar funções pq na nossa aplicação final, vamos querer, por exemplo, selecionar/deletar um cliente 
    // E isso vão ser os eventos da tabela que vão ser disparados quando clicados 
    clienteSelecionado?: (cliente: Cliente) => void // Vou devolver um Cliente e essa função vai retornar void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props){
    /* Uma coisa que podemos fazer é quebrar a renderização da tabela em múltiplas funções */

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirAcoes ? <th className='p-4'>Ações</th> : false}
            </tr>
        )
    }

    // Preciso do parâmetro cliente pois nós vamos renderizar as ações para um cliente específico da linha tal
    function renderizarAcoes(cliente){
        return (
            <td className='flex justify-center'>   
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50 
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50 
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderizarDados(){
        return (
            // Sintaxe do optional chaining (?) do JS → Isso faz com q o .map() só seja executado caso props.clientes != null
            props.clientes?.map((cliente, i) => {
                return (
                    // Dentro de um contexto de lista o NextJS reclama quando não tem a propriedade key
                    <tr key={cliente.id}
                        className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                        <td className='text-left p-4'>{cliente.id}</td>
                        <td className='text-left p-4'>{cliente.nome}</td>
                        <td className='text-left p-4'>{cliente.idade}</td>
                        {exibirAcoes ? renderizarAcoes(cliente) : false}
                    </tr>
                )
            })
        )
    }
    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}