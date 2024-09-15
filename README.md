# Resumo da Aula

  ## Repositório ##
A aula iniciou com a solicitação para criarmos uma conta no **GitHub**. Em seguida, fomos instruídos a procurar e criar um repositório. Na aba **"Home"**, deveríamos digitar o nome do repositório no campo **"Repository Name"** e clicar em "**Create new repository**".

Aprendemos então sobre o arquivo **README.MD**, entendendo o significado da extensão **.MD** (**Markdown**) e a importância de nomeá-lo corretamente. Esse arquivo contém informações cruciais para compreender o projeto. Ele pode incluir: instruções de instalação e uso para softwares, documentação detalhando funcionalidades, requisitos e dependências do projeto.

  ## Commit Changes ##
Foi muito enfatizada a importância de **nunca** esquecer de commitar uma alteração feita em seu projeto, principalmente no **README.md**. Ninguém gostaria de perder as alterações feitas por não ter clicado em um botão, então esse ponto foi bem enfatizado durante a aula. 

  ## Fork ##
Ainda falando sobre repositórios, foi mostrada também a oportunidade de copiar repositorios de outras pessoas a partir de uma ferramenta chamada **Fork**. Esta ferramenta não faz esses repositórios necessariamente seu, mas é possível alterar algumas coisas quando se julgar necessário. 
Caso queira fazer alterações e trabalhar em repositórios copiados por você, utiliza-se a plataforma **Git**, é com ela que você irá criar uma **branch**(_ramificações,galhos_) e fazer alterações livremente sem comprometer o arquivo original de outra pessoa.
Na aula, foi ensinado a copiar repositório de outras pessoas utilizando o Git e quais comandos são necessários utilizar para fazer alterações como:

>- -git init (pasta git oculta é criada)
>- git add . para adicionar todos os arquivos
que estão na sua pasta de uma vez, caso
queria adicionar apenas um digite git add
nome-do-arquivo
>- git commit -m "mensagem para explicar o
que voce fez no código"
>- git remote add origin url-que-voces-copiaram-do-github
>- git remote -v mostra as url que o git está
apontando
>- git push origin master

  ## Pull Request ##
É possível enviar suas modificações para o criador do repositório original para mostrar as melhorias que você fez e ver se ele aprova tais mudanças a partir do **Pull Request**

  ## Merge ##
Quando tais alterações forem aceitas pelo criador original (também chamado de **Branch Master**), temos o que chamamos de Merge. O merge no GitHub é o processo de combinar as mudanças feitas em uma branch (__ramificação__) com outra branch, geralmente a principal (como a **main** ou **master**). Esse processo é essencial para integrar novos recursos, correções ou melhorias no código principal do projeto.
