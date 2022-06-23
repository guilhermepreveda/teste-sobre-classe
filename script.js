class Loja {
  static estoque = [
    {
      id: 1,
      nome: "Abajur",
      preco: 19.9,
    },
    {
      id: 2,
      nome: "Sofá",
      preco: 2999.99,
    },
    {
      id: 3,
      nome: "Cadeira",
      preco: 359.9,
    },
  ];
}

/* ==== Você desenvolve o seu código a partir daqui ============ */
class Pessoa {
  constructor(nome,cpf){
    this.nome=nome
    this.cpf=cpf
  }
}

class Funcionario extends Pessoa{
  constructor(nome,cpf,setor){
  super(nome,cpf)
  this.contratada= true
  this.setor= setor
  }
  cadastrarProduto(nomeProduto,precoProduto){
    const incrementoid= Loja.estoque[Loja.estoque.length-1].id+1
    const produto = {
      id:incrementoid,
      nome:nomeProduto,
      preco:precoProduto,
    }
    Loja.estoque.push(produto)
    return  "Produto cadastrado com sucesso!"
  }
}


const pessoa1= new Funcionario("Jardel", 123456789)
console.log(pessoa1)


pessoa1.cadastrarProduto("macarrao",12)
console.log(Loja.estoque)
/* ============================================================= */
/* Valores para usar como parâmetro ao instanciar a classe Pessoa: */
//   - "Jardel", 123456789

/* Valores para usar como parâmetro ao instânciar a classe Funcionario: */
//   - "Victor", 987654321, "Móveis"

/* Valores para utilizar o método cadastrarProduto() da classe Funcionario: */
//   - "Mesa de Jantar", 398.9
//   - "Pouff", 149.9

console.log("> Os console.log() estão funcionando corretamente! ;)");
// ex.: const classe = new Classe("parametro1", 2, true, ["a", 1, 2], {chave: "valor"})
