# Landing page IBITI


**Site publicado:** https://deploy-landing-page-ibbiti.vercel.app  
**Repositório no GitHub:** [amouadeb/landfiing-page-ibbiti](https://github.com/amouadeb/landfiing-page-ibbiti)

## Briefing e processo de criação

Para a realização da landing page, a primeira etapa foi a prototipagem e a criação de rascunhos em sala de aula com a professora Bruna, no dia 16/09/2026, quando aprendemos a utilizar MCPs para criar landing pages. Antes de começar com o prompt e as conexões dos MCPs, fizemos um rascunho no papel de como nossa landing page seria feita: se teria login, já que a IBITI queria alcançar um público de nicho e oferecer mais privacidade; se colocaríamos uma tela de pagamento; e se ofereceríamos outras ações logo de cara.

No final, nos apegamos ao básico: apenas uma página que conseguisse mostrar a proposta da IBITI e fazer com que o cliente ao menos se interessasse por ela, sem tentar convencê-lo diretamente a comprar. Ou seja, mostraríamos como funcionariam o token, os pagamentos e outros pontos da proposta apenas para esclarecer o usuário. Assim, ele conseguiria sair da landing page e chegar à nossa aplicação final entendendo a proposta, sem cair de paraquedas em uma solução tokenizada.

Além disso, o rascunho em papel também mostrava como seria a hierarquia da página: primeiro, um breve contexto da IBITI, mesmo que o usuário já conhecesse a instituição; depois, informações sobre o projeto, sobre os tokens e sobre a separação entre eles; em seguida, uma seção para mostrar a transparência e os valores da IBITI; e, por fim, um botão que levasse à nossa aplicação real. Com isso em mente, resolvemos colocar a proposta junto com o contexto do projeto em um prompt para a IA.

O prompt inicial da equipe, resumido para facilitar a leitura, foi: “Leia o texto de contexto primeiramente, utilize os documentos da pasta como referência e utilize os MCPs Figma, shadcn e Mobbin para fazer a primeira versão da landing page”. Depois, esclarecemos que não queríamos uma cópia do site institucional: a página deveria traduzir a proposta própria do Token I e das experiências Token B. O barema desta atividade orientou a versão final como interface pública, institucional e estratégica, em português.

### Como a landing foi mudando

Ao longo do projeto, a landing mudou com a própria solução. A exploração inicial ainda testou elementos de portal, como login e aquisição simulada, que foram retirados quando definimos o escopo da página. Posteriormente, a atualização do memorando e da planilha para a Série V2 alterou valores e exigiu revisar a comunicação da operação. Também acrescentamos benefícios selecionados e um catálogo completo para que a pessoa pudesse visualizar melhor o valor de uso da proposta.

1. **Entender a operação e selecionar as fontes.** Foram lidos o contexto mestre do M07/G04 e os documentos de negócio e jurídicos da pasta fornecida. Eles delimitaram o que o Token I representa, a função do Token B, o prazo da Série e o que não pode ser prometido. Documentos da Série V1 ficaram como histórico; os números da landing atual vêm das fontes V2 citadas abaixo.
2. **Explorar a direção visual.** A marca e as fotografias oficiais da IBITI serviram de referência para território, natureza e hospitalidade. O objetivo foi criar uma composição própria e evitar tanto a cópia do site oficial quanto uma estética genérica de exchange ou promessa financeira.
3. **Criar a exploração no Figma.** Foi aberto um novo arquivo de design e parte dos frames foi elaborada pelo Figma MCP. O limite de chamadas do plano Starter interrompeu a edição; portanto, o arquivo Figma permanece parcial. As capturas e os SVGs em `design/` registram a exploração visual, mas não substituem a implementação final.
4. **Implementar a primeira versão.** A interface foi construída com HTML, CSS e JavaScript estáticos, imagens e fontes locais. Essa escolha permite abrir a página diretamente, sem backend ou etapa de build.
5. **Separar a landing do portal.** A primeira exploração incluía login, aquisição e pagamento simulados. A pedido da equipe, esses fluxos foram retirados da landing: este artefato apresenta e explica a operação, sem cadastro, checkout ou transação.
6. **Atualizar a Série V2.** O memorando e a planilha V2 substituíram valores anteriores. A página passou a identificar o preço como estimativa com data-base, os recebimentos como dependentes de receita futura e o Glamping como projeto ainda não operacional.
7. **Selecionar benefícios sem sobrecarregar a leitura.** Quatro exemplos de categorias diferentes aparecem na página. Um PDF baixável reúne o catálogo mais amplo, com ressalvas sobre disponibilidade e valores de referência.
8. **Revisar o texto pela ótica de quem chega pela primeira vez.** A primeira dobra explica a proposta em uma frase. O fluxo do royalty é descrito em etapas; hash e USDC têm explicações contextualizadas. O público principal, os riscos, as fontes, as premissas e o uso de IA são explicitados. Feedbacks da professora em outros trabalhos serviram como alerta para evitar rótulos vagos, premissas ocultas e texto pequeno; exigências específicas daqueles artefatos não foram importadas para este barema.
9. **Ligar a landing à aplicação do grupo.** O encerramento diferencia a aplicação acadêmica do contato da IBITI para vivências reais. Depois que a URL pública foi disponibilizada, substituímos o aviso “Link da aplicação em breve” por um acesso direto à [aplicação do grupo](https://g04-a93a9c.pages.git.inteli.edu.br/). A página de destino solicita identificação e informa contas de demonstração.
10. **Verificar e preparar a publicação.** Foram conferidos conteúdo, imagens, menu móvel, navegação, seção expansível de fontes, console e layout em desktop e celular. A publicação é feita por commit na branch `main` do GitHub conectado à Vercel, seguida de conferência na URL de produção.

### MCPs, ferramentas e conexões efetivamente usados

| Recurso | Papel no trabalho e limite |
| --- | --- |
| Codex / IA generativa | Apoio à síntese, redação, implementação e revisão. As afirmações econômicas foram comparadas aos documentos V2. O uso de IA também é declarado na landing. |
| Figma MCP | Criação do arquivo e exploração inicial de frames; a escrita parou no limite do plano Starter. O Figma não é descrito como versão final da página. |
| shadcn MCP | Consulta a padrões de Button e Input na exploração inicial. A landing final usa HTML/CSS próprios, sem instalar componentes shadcn. |
| Mobbin MCP | O acesso autenticado não estava disponível na sessão registrada. Referências Mobbin não foram usadas nem apresentadas como fonte da interface. |
| Navegador integrado | Conferência visual e funcional da página local e da versão publicada, incluindo responsividade e erros de console. |
| GitHub → Vercel | O repositório da landing está conectado ao projeto Vercel; mudanças enviadas à branch de produção atualizam o site. |

## Fontes da Série V2

O conteúdo foi reconciliado com o *IBITI Memorando de Oferta V2* e a planilha *Valuation_Token_V2.xlsx*, ambos com data-base setembro de 2026. O preço-base exibido corresponde ao cenário base da aba `Valuation` (célula `F7`), arredondado para R$ 105.464. Os valores do Token B vêm da aba `Premissas` (`B24`, `B26` e `B28`). O memorando e a planilha não são publicados junto com a landing.

Os destaques de experiências e o PDF público `site/assets/catalogo-beneficios-ibiti-v2.pdf` foram preparados a partir de *Catálogo de Benefícios.md* (120 itens). O PDF traz os valores de tabela e de resgate como referências, sujeitos à confirmação operacional. A coluna de quantidades de “Tokens” do arquivo de trabalho não foi publicada porque diverge da regra de conversão do Token B da Série V2; o catálogo final deverá ser validado antes de qualquer oferta ou resgate.

## Decisões de comunicação

A jornada da página prioriza a pessoa que pretende frequentar o território IBITI e usar as experiências Token B, enquanto busca entender o direito econômico do Token I. A narrativa segue a ordem: proposta e estágio atual do Glamping, origem do royalty, função de cada token, exemplos de uso e limites da Série. Não há chamada para compra: a operação e a oferta ainda não estão ativas.

O texto distingue dados do modelo (como o preço-base estimado em setembro de 2026), eventos futuros previstos (como a abertura do Glamping) e fatos presentes (como a ausência de operação e de oferta vigente). Termos técnicos são explicados no contexto de uso. Conteúdo e interface foram elaborados com apoio de IA e comparados às fontes acima; o catálogo recebido não informa data de revisão. A página disponibiliza uma nota expansível de fontes e premissas na seção de transparência.

### Da landing à aplicação

A landing funciona como a **porta de entrada pública**: uma pessoa sem familiaridade com blockchain pode entender a proposta, conferir exemplos de benefícios e reconhecer os riscos antes de abrir outro artefato. A aplicação do grupo é a **continuação demonstrativa da jornada digital**; ela não deve ser confundida com o site oficial da IBITI nem com uma oferta ou compra ativa. A chamada fica ao final, depois das explicações e dos limites, para que o visitante não seja enviado prematuramente a uma interface mais complexa.

