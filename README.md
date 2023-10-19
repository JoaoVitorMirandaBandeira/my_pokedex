# Projeto Pokémon App
Este projeto foi desenvolvido por João Vitor e Filipe Demarque e permite aos usuários pesquisar Pokémon, visualizar seus atributos e salvá-los em uma lista de favoritos. Foi construído usando React, SCSS e Styled Components.

#### Link para o Surge : https://wikimon.surge.sh/

## Como executar o projeto
1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone o repositório do projeto para o seu ambiente local.

```bash
git clone https://github.com/seurepositorio/pokemon-app.git

cd pokemon-app
```

3. Instale as dependências do projeto.

```bash
npm install
```
4. Inicie o servidor de desenvolvimento.

```bash
npm start
```
5. O projeto estará disponível no seu navegador em http://localhost:3000.

## Recursos do Projeto

- Pesquisa de Pokémon: Os usuários podem pesquisar Pokémon por nome, número ou outros critérios de pesquisa.

- Visualização de Atributos: Os detalhes de cada Pokémon, como nome, tipo, estatísticas e imagem, são exibidos ao selecionar um Pokémon na lista de resultados da pesquisa.

- Lista de Favoritos: Os usuários podem salvar Pokémon em uma lista de favoritos para fácil acesso posterior.

- Interface Responsiva: A interface do aplicativo é responsiva e pode ser usada em dispositivos móveis e desktop.

## Estrutura do Projeto

- `src/components`: Contém os componentes React reutilizáveis, como `PokemonList`, `Loading`, etc.

- `src/pages`: Contém os componentes de páginas principais, como `Home`,  `Favorites`, onde a lógica principal é implementada.

- `src/services`: Contém funções para interagir com a API do Pokémon, como `getAllPokemons`, `getSpecificPokemon`, etc.

- `src/styles`: Contém os estilos SCSS para o projeto.

- `src/App.js`: Arquivo de configuração principal do React.

- `public`: Contém recursos públicos, como imagens.

## Tecnologias Utilizadas

- React
- SCSS
- Styled Components
- API do Pokémon

## Contribuição

- João Vitor - Desenvolvedor Front-End - [GitHub](https://github.com/JoaoVitorMirandaBandeira)
- Filipe Demarque - Desenvolvedor Front-End - [GitHub](https://github.com/fdemarque)

Se desejar contribuir para o projeto, sinta-se à vontade para criar um fork, fazer melhorias e enviar um pull request.

## Possíveis Erros

Ao configurar o projeto, tenha em mente alguns possíveis problemas que podem surgir:

### 1. Instalação do SASS

- **Problema**: Se você encontrar erros durante a instalação do SASS, verifique se as dependências necessárias estão corretamente configuradas.

  - **Solução**: Certifique-se de seguir as instruções de instalação do SASS de acordo com a documentação oficial para o seu sistema operacional.

### 2. Python Necessário

- **Problema**: Algumas bibliotecas e pacotes utilizados no projeto podem exigir a presença do Python em sua máquina.

  - **Solução**: Verifique se você tem o Python instalado em sua máquina e se está configurado corretamente.

### 3. Versão do Node

- **Problema**: O projeto pode depender de uma versão específica do Node.js, como a 18.17.1.

  - **Solução**: Verifique a versão do Node.js instalada em sua máquina usando o comando `node -v` e, se necessário, atualize-a para a versão requerida.

Lembre-se de verificar a documentação do projeto e os requisitos específicos para evitar esses problemas e garantir uma configuração adequada do ambiente de desenvolvimento.

