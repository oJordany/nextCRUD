import firebase from "../config"
import ClienteRepositorio from "@/core/ClienteRepositorio";
import Cliente from "@/core/Cliente";

// ColecaoCliente vai implementar ClienteRepositorio
export default class ColecaoCliente implements ClienteRepositorio { 
    // Existe dentro do firebase um cara chamado conversor que é um objeto que tem 2 métodos: toFirestore() e fromFirestore()
    // Nós colocamos ele privado ainda a partir do símbolo #
    #conversor = {
        toFirestore(cliente: Cliente) {// Esse método recebe um Cliente e devolve um objeto apto para ser persistido no Firestore
        // Pq o nosso Cliente é uma classe e ele não vai ser convertido automaticamente para JSON
        // Então quando eu quiser converter esse Cliente para o Firestore eu preciso retornar alguma coisa como um objeto 
            return {
                nome: cliente.nome,
                idade: cliente.idade,
                // Como o ID vai ser gerado pelo Firestore eu não preciso me preocupar em retornar ele aqui
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options:firebase.firestore.SnapshotOptions){ // Esse método vai devolver um snapshot e esse options. E a resposta dessa função vai ser um Cliente (ou seja, eu recebo os dados do Firebase e retorno um cliente)
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id) // O ID é gerado pelo próprio Firebase e eu vou pegar do próprio snapshot
        }
    }

    // Com isso, esse conversor é capaz de pegar uma classe converter para algo que vai ser persistido no Firestore e receber algo do Firestore para converter para a minha classe Cliente 
    // Daí eu não preciso me preocupar em ficar fazendo isso dentro do salvar(), do excluir() e do obterTodos()

    // Vamos implementar 3 métodos:
    async salvar(cliente: Cliente): Promise<Cliente> {
        // Para a gente salvar nós teremos esses 2 cenários : ou eu estou alterando um id já existente ou estou criando um novo cliente
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente) // Isso aqui vai retornar um DocumentReference, que é uma Promise e por isso usamos o await
            const doc = await docRef.get() // Vai retornar uma Promise de um DocumentSnapshot
            return doc.data() // Com o doc eu consigo pegar o cliente recebido (inclusive com o ID dele)
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        // Dentro da coleção de clientes eu consigo acessar um cliente específico que é um documento(doc) a partir do ID dele
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get() // Com o get() ele vai retornar uma Promise de um QuerySnapshot
        // Com o query.docs ele vai retornar mais de um documento e com ele nós usamos um map para retornar o doc.data de cada documento
        // Que são justamente os clientes obtidos lá do backend
        // Caso ele não obternha nada ele vai retornar um Array vazio
        return query.docs.map(doc => doc.data()) ?? []
    }
    
    // Criamos um método privado do TS chamado colecao que vai retornar uma coleção chamada 'clientes' que vai ser convertida usando o nosso #conversor
    // Daí eu não preciso repetir esse processo em cada um dos métodos
    // Eu posso simplesmente chamar o método colecao()
    private colecao(){
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}