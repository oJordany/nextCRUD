export default class Cliente {
    // private é um recurso do TS 
    #id:  string 
    #nome: string 
    #idade: number

    // Como o id vai ser gerado, nós colocamos ele por último pq assim nós conseguimos setar um valor padrão para ele de null 
    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome 
        this.#idade = idade 
        this.#id = id  
    }

    // Criando os nossos getters & setters
    // Como a gente tá criando um  getter com o nome exatamente igual ao do atributo, dá problema 
    // Então para evitar isso a gente pode usar o próprio recurso do JS para trabalhar com dados privados 
    // E para fazer isso temos que ir em tsconfig.json e setar a propriedade "target": "ES2015" 
    // Pois essa versão já suporta essa questão dos atributos privados 
    // Daí, ao invés de eu usar :
    // private id:  string 
    // private nome: string 
    // private idade: number
    // Nós colocamos o # , igual tá lá em cima ↑↑↑↑
    // Além disso, usamos this.#[nome-do-atributo] ao invés de:
    // this.nome = nome 
    // this.idade = idade 
    // this.id = id 
    // E isso é um recurso nativo do JS e não do TS

    // Criaremos tb um método estático para criar uma instância/Cliente vazio:
    static vazio(){
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }

    // Por enquanto nós não vamos criar nenhum setter, pois não vamos precisar na aplicação
    // Se fosse precisar, a gente criaria de outra forma para não criar objetos mutáveis 
}