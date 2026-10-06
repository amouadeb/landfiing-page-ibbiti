# Landing page IBBITI

Landing page acadêmica do projeto IBITI Token (Inteli M07 / G04), com apresentação da Série V2, das experiências associadas e dos riscos.

**Site publicado:** https://deploy-landing-page-ibbiti.vercel.app

## Estrutura

- `site/`: landing executável, CSS, JavaScript, imagens e fontes.
- `design/`: telas PNG/SVG e referências visuais da primeira versão.

Abra `site/index.html` no navegador. A apresentação é pública e abre diretamente, sem cadastro ou login.

## Publicação automática

Repositório: https://github.com/amouadeb/landfiing-page-ibbiti
Projeto Vercel: `deploy-landing-page-ibbiti`, no workspace MOUA.
Root Directory: `site`. Framework: Other (HTML/CSS/JS estáticos), sem etapa de build.
Branch de produção: `main`.

Depois da conexão Git na Vercel, cada push em `main` atualiza o site de produção. Branches e pull requests recebem prévias conforme a configuração do projeto. Não é necessário criar um novo projeto nem executar um deploy manual a cada alteração.

Edite os arquivos em `site/`, faça commit e envie para `main`. Os números dinâmicos do protótipo estão em `TOKENOMICS`, em `site/app.js`.

## Fontes da Série V2

O conteúdo foi reconciliado com o *IBITI Memorando de Oferta V2* e a planilha *Valuation_Token_V2.xlsx*, ambos com data-base setembro de 2026. O preço-base exibido corresponde ao cenário base da aba `Valuation` (célula `F7`), arredondado para R$ 105.464. Os valores do Token B vêm da aba `Premissas` (`B24`, `B26` e `B28`). O memorando e a planilha não são publicados junto com a landing.

## Escopo

Esta é apenas uma landing page informativa. Não há cadastro, login, carteira, checkout, pagamento, backend ou emissão de tokens. O conteúdo é acadêmico e não representa oferta vigente.

As fotografias e a marca são referências oficiais do ecossistema IBITI. As licenças das fontes estão em `site/assets/`. Os documentos originais do projeto não fazem parte da publicação.

