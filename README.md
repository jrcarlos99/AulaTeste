# Resumo da Aula

  ## Repositório ##
A aula começou pedindo para ser criado uma conta no GitHub e em seguida fomos instruídos a procurar e criar um repositório.
  na aba Home, escrever o nome do repositório na opção **Repository Name** e em seguida clicar em **Create new repository**
Foi ensinado em seguida o que é o **README.MD**, tanto sobre o que significa a extensão **.MD**(Markdown) como o que acontece se o nome for qualquer outro além do **README**. É nesse arquivo que contém informações importantes para o entendimento do projeto. Ele pode conter: Instrução de como instalar e usar caso o projeto seja um software, documentação onde é detalhado as principais funcionalidades, requisitos e dependências do projeto.

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
