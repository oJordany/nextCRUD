interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' // Definindo 3 cores literais
    className?: string
    children: any
    // Vamos fazer uma coisa q pode dar problema na hr de gerar a produção
    // Mas vamos ver como resolver isso
    // Essa parada de passar a cor dentro de props funciona só em desenvolvimento e não em produção
    // Pq quando o tailwindCSS for olhar os arquivos dentro de /pages e /components e for procurar as classes do tailwindCSS usadas, na hr q ele for gerar a versão final vai dar um problema pq ele não vai conseguir detectar que essa variável "cor" que foi interpolada é uma classe que tem 'green' | 'blue' | 'gray'
    // Pq eciste uma lógica e essa lógica não está a disposição nesse caso 
    // Existe uma forma de garantir que algumas classes CSS estarão sempre disponíveis quando esse processo de geração da produção for ser feito
    // Para fazer isso, nós precisamos adicionar um atributo chamado "safelist" dentro de tailwind.config.js
    // E dentro desse atributo a gente pode colocar um array com todas as classes que eu quero q estejam disponíveis na versão final 
    // E com isso eu posso colocar inclusive uma regex dentro desse Array, basta ir lá no arquivo tailwind.config.js e dar uma conferida
    // Dessa forma eu granto que o tailwind não vai excluir as classes que tem valor gerado dinaicamente como é esse caso aqui
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}