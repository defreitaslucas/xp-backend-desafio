# Boas-Vindas ao repositório do projeto xp-backend-desafio
Desafio Técnico XP Inc - BackEnd
=================================================

Este projeto faz parte do processo seletivo da XP Inc voltado aos alunos da Trybe Turma XP - 18. O projeto tem como finalidade testar os conhecimentos dos alunos sobre os temas abordados
no curso da Trybe na área de Back End afim de alinhar conhecimento e qualificar os alunos a futuras oportunidades.
Este é um arquivo README que irá explicar todo processo de desenvolvimento do projeto e como faze-lo funcionar.

[![ Licença ](https://img.shields.io/badge/License-CC0-lightgray.svg?style=flat-square)](https://creativecommons.org/publicdomain/zero/1.0/)
[![ Último lançamento ](https://img.shields.io/github/v/release/mhucka/readmine.svg?style=flat-square&color=b44e88)](https://github.com/mhucka/readmine /lançamentos)
[![ DOI ](http://img.shields.io/badge/DOI-10.22002%20%2f%20D1.20173-blue.svg?style=flat-square)](https://data.caltech. edu/registros/20173)


Índice
-----------------

* [ Introdução ](#introdução)
* [ Tecnologias Utilizadas ](#tecnologias)
* [ Instalação ](#instalação)
* [ Uso ](#uso)
* [ Problemas e limitações conhecidos ](#known-issues-and-limitations)
* [ Obtendo ajuda ](#getting-help)
* [ Contribuindo ](#contribuindo)
* [ Licença ](#licença)
* [ Autores e história ](#autores-e-história)
* [ Agradecimentos ](#agradecimentos)


Introdução
------------

O desafio foi criar uma API que retornasse informações para o Front-End/Mobile que simulasse uma aplicação de compra e venda de ações, manutenção de conta e geração/autenticação de usuários.

Tecnologias Utilizadas
------------
<details>
  <summary><strong> Tecnologias </strong></summary>
    1. JavaScript
    2. NodeJS
    3. Express
    4. JOI
    5. Sequelize
    6. JWT
    7. ESLINT
    8. Heroku
    9. Swagger
    10. Docker
</details>
Instalação
------------
<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `xp-desafio` e outro chamado `xp-desafio-bd`;

  - A partir daqui você pode rodar o container `xp-desafio` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando
  ```bash
    docker exec -it xp-desafio bash
  ```

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com
  ```bash
    npm install
  ```
  - **:warning: Atenção:** (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.
  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com
  ```bash
    npm install
  ```
  
  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos.

  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 14 ou 16.

  <br/>
</details> 

Uso
-----

<details>
  <summary><strong>‼️ Para utilizar </strong></summary>

1. Clone o repositório
  * `git clone https://github.com/defreitaslucas/xp-backend-desafio.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `pasta do repositório`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Renomeie o arquivo .env_example para .env
  * Informe a PORT da sua API
    * Exemplo: API_PORT=3000
  * Informe o ambiente que o node irá rodar
    * Exemplo: NODE_ENV=development
  * Informe os dados para criação e acesso ao banco de dados MYSQL
    * Exemplo: HOSTNAME=localhost
    * Exemplo: DB_PORT=3306
    * Exemplo: MYSQL_USER=root
    * Exemplo: MYSQL_PASSWORD=root
    * Exemplo: MYSQL_DATABASE=xp-inc

4. Utilize os comandos abaixo para criar e povoar o banco de dados
  * NPM RUN DROP para apagar qualquer resquício do banco ou caso tenha feito alguma alteração erronea.
    ```bash
      npm run drop
    ```
  * NPM RUN PRESTART para recriar todo o database, tabelas e inserir os dados nas tabelas.
    ```bash
      npm run prestart
    ```
  * NPM RUN DEBUG para startar o projeto em modo de desenvolvimento através do nodemon e poder ver alterações sem precisar parar e startar o projeto toda hora.
    ```bash
      npm run debug
    ```
  * NPM START para startar o projeto em produção, lembre-se que qualquer alteração você deverá parar o serviço e restartar utilizando este comando.
    ```bash
      npm run start
    ```
  * NPM TEST para startar os testes.
  ```bash
    npm run test
  ```
<br />
</details>

###  Operação básica

Uma abordagem sugerida para usar este arquivo README de exemplo é a seguinte:

1. Copie o [ arquivo de origem ](README.md) deste arquivo para seu repositório e envie-o para seu sistema de controle de versão
2. Exclua todo o corpo do texto, mas mantenha os títulos das seções
3. Escreva seu conteúdo README
4. Confirme o novo texto em seu sistema de controle de versão
5. Atualize seu arquivo README à medida que seu software evolui

O primeiro parágrafo no arquivo README (sob o título no topo) deve resumir seu software de forma concisa, de preferência usando não mais que uma ou duas frases.

<p align="center"><img width="80%" src=".graphics/screenshot-top-paragraph.png"></p>

O espaço abaixo do primeiro parágrafo e _antes_ do [ Table of Contents ](#table-of-contents) é um bom local para [ badges ](https://github.com/badges/shields) opcionais, que são pequenos tokens visuais comumente usado em repositórios do GitHub para comunicar o status do projeto, dependências, versões, DOIs e outras informações. Os emblemas e cores específicos que você usa dependem do seu projeto e gostos pessoais.

As seções [ Introdução ](#introdução) e [ Uso ](#uso) estão descritas acima.

Na seção [ Problemas e limitações conhecidos](#known-issues), resuma quaisquer problemas notáveis ​​e/ou limitações do seu software. A seção [ Obtendo ajuda ](#getting-help) deve informar aos leitores como eles podem entrar em contato com você ou, pelo menos, como podem relatar problemas que possam encontrar. A seção [ Contribuindo ](#contribuindo) é opcional; se o seu repositório for para um projeto que aceita contribuições de código aberto, esta seção é onde você pode explicar aos leitores como eles podem fazer contribuições.

A seção [ License ](#license) deve indicar quaisquer direitos autorais declarados nos materiais do projeto, bem como os termos de uso do software, arquivos e outros materiais encontrados no repositório do projeto. Finalmente, a seção [ Autores e história ](#autores-e-história) deve informar aos leitores quem são os autores; é também um lugar onde você pode reconhecer outras contribuições para o trabalho e o uso de software ou ferramentas de outras pessoas.

###  Opções adicionais

Alguns projetos precisam comunicar informações adicionais aos usuários e podem se beneficiar de seções adicionais no arquivo README. É difícil dar instruções específicas – depende muito do seu software, do seu público-alvo, etc. Use seu julgamento e peça feedback de usuários ou colegas para ajudar a descobrir o que mais vale a pena explicar.


Problemas e limitações conhecidos
----------------------------

Nesta seção, resuma quaisquer problemas notáveis ​​e/ou limitações do seu software. Se nenhum for conhecido ainda, esta seção pode ser omitida (e não se esqueça de remover também a entrada correspondente no [ Índice ](#tabela-de-conteúdo)); alternativamente, você pode deixar esta seção e escrever algo como "nenhum é conhecido neste momento".


Conseguindo ajuda
------------

Informe os leitores de como eles podem entrar em contato com você, ou pelo menos como eles podem relatar problemas que possam encontrar. Isso pode ser simplesmente uma solicitação para usar o rastreador de problemas em seu repositório, mas muitos projetos têm chats ou listas de discussão associadas, e esta seção é um bom lugar para mencioná-los.


Contribuindo
------------

Mencione como as pessoas podem oferecer contribuições e aponte-as para suas diretrizes de contribuição.


Licença
-------

Este arquivo README é distribuído sob os termos da [ Licença Creative Commons 1.0 Universal (CC0) ](https://creativecommons.org/publicdomain/zero/1.0/). A licença se aplica a este arquivo e outros arquivos no [ repositório GitHub ](http://github.com/mhucka/readmine) que hospeda este arquivo. Isso _não_ significa que você, como usuário deste arquivo README em seu projeto de software, também deve usar a licença CC0! Você pode usar qualquer licença para o seu trabalho que achar melhor.


Autores e história
---------------------------

Nesta seção, liste os autores e colaboradores do seu projeto de software. (O autor original deste arquivo é [ Mike Hucka ](http://www.cds.caltech.edu/~mhucka/).) Adicionar notas adicionais aqui sobre a história do projeto pode torná-lo mais interessante e atraente.


Agradecimentos
---------------

Se seu trabalho foi financiado por qualquer organização ou instituição, reconheça seu apoio aqui. Além disso, se o seu trabalho depende de outras bibliotecas de software, ou foi inspirado por outros trabalhos, é apropriado reconhecer essa dívida intelectual também. Por exemplo, no processo de desenvolvimento deste arquivo, usei não apenas minhas próprias ideias e experiências – Eu li muitas recomendações (às vezes contraditórias) para arquivos README e examinei READMEs reais em uso real, e tentei destilar as melhores ideias no resultado que você vê aqui. As fontes incluíram o seguinte:

* http://tom.preston-werner.com/2010/08/23/readme-driven-development.html
* https://changelog.com/posts/top-ten-reasons-why-i-wont-use-your-open-source-project
* https://thoughtbot.com/blog/how-to-write-a-great-readme
* http://jonathanpeelle.net/making-a-readme-file
* https://github.com/noffle/art-of-readme
* https://github.com/noffle/common-readme
* https://github.com/RichardLitt/standard-readme
* https://github.com/jehna/readme-best-practices
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
* https://github.com/matiassingers/awesome-readme
* https://github.com/cfpb/open-source-project-template
* https://github.com/davidbgk/open-source-template/
* https://www.makeareadme.com
* https://github.com/lappleapple/feedmereadmes
* https://github.com/badges/shields