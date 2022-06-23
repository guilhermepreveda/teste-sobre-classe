# Teste sobre classes

## Instruções

### Static Class Loja 

> Uma **classe estática** é quando ela não possui um construtor e todas as suas propriedades e métodos **são estáticos**!

No arquivo `script.js`, terá uma classe estática `Loja` contendo a seguinte propriedade estática predefinida:

- `estoque` - Tipo **Array** | Representa o estoque de produtos de uma loja
  - *Predefinida com o valor `[...produtos]`*

### Class Pessoa 

Desenvolva uma classe `Pessoa` que terá as seguintes propriedades recebidas por parâmetro:

- `Nome` - Tipo **String** | Representa o nome da pessoa
- `cpf` - Tipo **Number** | Representa o CPF da pessoa

### Class Funcionario 

Desenvolva uma classe `Funcionario` que será uma estensão da classe Pessoa, ou seja, tudo dessa classe será herado, porém, terá a seguinte propriedade predefinida adicional:

- `contratada` - Tipo **Boolean** | Representa a situação do contrato do funcionário
  - *Predefinida com o valor `true`*

Além dessa, terá a seguinte propriedade recebida por parâmetro

- `setor` - Tipo **String** | Representa o setor que esse funcionário trabalha
