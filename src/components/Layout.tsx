import Titulo from '@/components/Titulo'

// Isso aqui é um recurso do TypeScript
// Com isso, toda vez que eu colocar o componente Layout, ele vai exigir que eu coloque um children e uma propriedade titulo
// Se eu quisesse que isso fosse opcional eu poderia colocar uma interrogação. Tipo: 
// titulo?: string
interface LayoutProps {
    // Aqui eu consigo dizer exatamente quais são as propriedades que eu espero receber nesse componente 
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            {/* Aqui no título eu vou esperar receber via props dentro do meu Layout */}
            {/* Assim, no layout eu passo o meu título como parâmetro */}
            <Titulo>{props.titulo}</Titulo>
            <div className='p-6'>
                {props.children}
            </div>
        </div>
    )
}