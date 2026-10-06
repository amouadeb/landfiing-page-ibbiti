# IBITI · Área de participação — V1

Prévia do projeto acadêmico Inteli M07 / G04. Composição própria para explicar e simular a aquisição de Token I, com benefícios Token B associados. Usa a marca e fotografias oficiais como referências, com uma arquitetura de produto distinta do site institucional.

## Abrir

Abra `index.html` no navegador. Na tela de login, clique em **Entrar**, sem preencher credenciais. O protótipo funciona localmente, com imagens e fontes incluídas.

Percurso: login → contexto Glamping → comparação dos tokens → experiências e riscos → aquisição → PIX ou cartão → confirmação simulada → carteira de exemplo.

Na aquisição, selecione 1 ou 2 Token I. Revise o resumo, marque a ciência das condições e clique em **Simular pagamento**. Não são enviados dados, ordens ou pagamentos. A posição de exemplo existe apenas na memória desta página e é limpa ao sair ou recarregar.

## Figma: estado real da entrega

Arquivo criado: https://www.figma.com/design/OJ5VZTJGU8z9PWKhVv2rVh

O arquivo no Figma está PARCIAL. O MCP atingiu o limite de chamadas do plano Starter durante a montagem. A revisão mais recente, centrada em aquisição, está concluída nesta prévia local, mas ainda não foi aplicada ao arquivo do Figma. Os frames móveis no Figma também permanecem incompletos.

As telas `login-desktop.svg`, `login-mobile.svg`, `landing-desktop.svg` e `landing-mobile.svg` são exportações vetoriais da composição local, com imagens incorporadas. Podem ser usadas como material de importação/referência. A importação no Figma não foi verificada; fontes ou propriedades podem exigir ajustes. Os SVGs não contêm Auto Layout, componentes ou interações. As capturas PNG são a referência visual. Fontes: Cormorant Garamond e Montserrat.

## O que foi construído

- Acesso restrito de demonstração, sem cadastro público.
- Abertura com produto, preço de referência e CTA de compra.
- Explicação curta do Glamping e do fluxo de royalties.
- Comparação Token I / Token B.
- Benefícios, condições de transferência, prazo e riscos.
- Seleção de quantidade, atualização de preço e resumo de aquisição.
- Seleção visual entre PIX e cartão, sem gateway integrado.
- Confirmação simulada e carteira de exemplo.
- Versões responsivas para desktop e celular.

As projeções financeiras completas, calculadora, autenticação, KYC, assinatura, gateway, distribuição de benefícios e saldo real continuam fora desta prévia.

## Regras aplicadas

Conferidas com o contexto mestre, Memorando de Oferta V1 e Artefato Jurídico v7.1 fornecidos na pasta g04-main:

- R$ 113.763 por Token I; limite de 2 por titular incluindo partes relacionadas.
- 100 tokens, com 67 destinados a titulares externos e 33 à tesouraria. A alocação não é apresentada como estoque disponível em tempo real.
- Cada Token I representa 1% do pool de royalties de 15%: 0,15% do faturamento bruto do Glamping.
- Vigência econômica de 01/04/2027 a 31/12/2030; encerramento em 01/01/2031.
- Por Token I: 8 Token B por ano, 32 ao longo da Série, valor de face de R$ 780.
- Custeio total dos benefícios de R$ 24.960, deduzido dos royalties, apresentado junto do valor de uso de R$ 41.600 a preço de tabela.
- Sem promessa de retorno, propriedade, equity, perpetuidade ou recompra.

Os números dinâmicos estão centralizados em `TOKENOMICS` em `app.js`.

## Verificação

Verificado no navegador integrado em 1440 × 1000 e 390 × 844: login, navegação, menu móvel, quantidade mínima/máxima, totais, custos dos benefícios, PIX/cartão, confirmação e carteira. Imagens carregadas, sem rolagem horizontal na página e sem erros relevantes de console. Revisados hierarquia, espaçamento, tipografia, fotografia, contraste e proporção dos cartões. A diferença de espaço entre frases no texto do hero móvel foi corrigida.

Os capturas `checkout-desktop.png`, `checkout-mobile.png` e `carteira-desktop.png` registram estados da interação. As telas de login e landing também têm capturas completas. Não foram testados navegadores externos nem integrações reais.

## Ferramentas e referências

- Figma MCP: criação de arquivo, variáveis e parte dos frames; escrita interrompida pelo limite do plano.
- shadcn MCP: consulta aos componentes Button/Input como referência de estados e composição. A prévia entregue usa HTML/CSS/JS, não uma aplicação React com shadcn instalado.
- Mobbin: acesso autenticado não disponível nesta sessão; suas referências não foram usadas.
- Base de conteúdo: contexto mestre, documentos de negócio e jurídicos de g04-main.
- Imagens e marca: site oficial IBITI, utilizadas como referências de território; não retratam a futura construção do Glamping.

Fontes das imagens:
https://ibiti.com/wp-content/uploads/2024/11/remote-capa.jpg
https://ibiti.com/wp-content/uploads/2024/11/remote-hospedagem.jpg
https://ibiti.com/wp-content/uploads/2024/11/remote-gastronomia.jpg
https://ibiti.com/wp-content/uploads/2024/11/ibiti-logo.png

As fontes tipográficas têm licenças incluídas na pasta assets.
