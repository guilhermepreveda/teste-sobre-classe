# Teste sobre classes

## Instruções

### static class Loja 

> Uma **classe estática** é quando ela não possui um construtor e todas as suas propriedades e métodos **são estáticos**!

No arquivo `script.js`, terá uma classe estática `Loja` contendo a seguinte propriedade estática predefinida:

- `estoque` - Tipo **Array** | Representa o estoque de produtos de uma loja
  - *Predefinida com o valor `[...produtos]`*

### class Pessoa 

Desenvolva uma classe `Pessoa` que terá as seguintes propriedades recebidas por parâmetro:

- `Nome` - Tipo **String** | Representa o nome da pessoa
- `cpf` - Tipo **Number** | Representa o CPF da pessoa

### class Funcionario 

Desenvolva uma classe `Funcionario` que será uma estensão da classe `Pessoa`, ou seja, tudo dessa classe será herado, porém, terá a seguinte propriedade predefinida adicional:

- `contratada` - Tipo **Boolean** | Representa a situação do contrato do funcionário
  - *Predefinida com o valor `true`*

Além dessa, terá a seguinte propriedade recebida por parâmetro

- `setor` - Tipo **String** | Representa o setor que esse funcionário trabalha

Com isso, desenvolva o seguinte método nessa classe:

#### method cadastrarProduto

Esse método será responsável por **cadastrar um novo produto no estoque** da loja. Ele receberá as seguintes propriedades via parâmetro:

- `nome` - Tipo **String** | Representa o nome do produto a ser cadastrado
- `preco` - Tipo **Number** | Representa o preço do produto a ser cadastrado

Com isso, a **seguinte lógica** precisará ser aplicada:

- **Montar o objeto do produto** a ser cadastrado utilizando a seguinte estrutura:

```javascript
{
  id: /* O id será sempre um número maior que o id do último produto cadastrado */,
  nome: /* Nome do produto a ser cadastrado */,
  preco: /* Preço do produto a ser cadastrado */
}
```

- **Adicionar o objeto acima ao array** `estoque` da classe estática `Loja`

- Por fim, **retornar a seguinte mensagem** (sem ser `console.log()`):

```javascript
  "Produto cadastrado com sucesso!"
```
