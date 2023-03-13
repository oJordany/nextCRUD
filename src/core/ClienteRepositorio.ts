import Cliente from "@/core/Cliente"

export default interface ClienteRepositorio {
    // Como estamos trabalhando em termos de interface, dentro do /core vc não precisa saber q vc está trabalhando com o firebase
    // Vc pode simplesmente definir uma interface e a partir dessa interface vc pode usar uma implementação que vai salvar no firebase
    // Esse ClienteRepositorio vai ter 3 métodos: salvar, excluir e obterTodos
    salvar(cliente: Cliente): Promise<Cliente> // Aqui eu retorno uma Promise que vai devolver um Cliente
    excluir(cliente: Cliente): Promise<void> // Aqui eu retorno uma Promise que não vai devolver nada
    obterTodos(): Promise<Cliente[]> // Aqui eu retorno uma Promise que vai devoler um Array de Clientes
}