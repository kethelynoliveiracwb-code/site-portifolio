# Kethelyn Alves — primeira seção

Projeto estático em HTML, CSS e JavaScript separados. Não precisa instalar dependências nem executar build. Esta versão contém somente o cabeçalho e a primeira seção aprovados; as demais seções serão adicionadas nas próximas etapas.

## Publicar no GitHub Pages
1. Extraia o ZIP e abra a pasta `Kethelyn Alves`.
2. Crie um repositório no GitHub. Envie **o conteúdo da pasta** (index.html, styles.css, script.js, README.md e assets) para a raiz do repositório, sem a pasta externa.
3. Em Settings > Pages, selecione Deploy from a branch, branch main e pasta / (root). Salve.
4. Aguarde a publicação e abra a URL informada pelo GitHub. Nenhum domínio próprio é necessário.

## Editar
- Textos, botões, telefone e navegação: `index.html`. WhatsApp atual: 5541984678439. Pesquise esse número para substituir todas as ocorrências e o telefone no JSON-LD.
- Cores, fontes e espaçamentos: variáveis no início de `styles.css`. Fonte local do sistema, sem dependências externas.
- Mockups: `assets/images/mockups.webp`. Use imagem transparente e preserve a proporção; atualize width/height no HTML se necessário.
- Logo: `assets/logo/kethelyn-alves.webp`. PNG original transparente também incluído. O cabeçalho usa a versão completa aprovada, sem deformação.
- Favicon: `assets/icons/favicon.ico` e `favicon.png`, derivados do monograma.
- Ícone de seta SVG: `assets/icons/arrow.svg`.
- Fotos de galeria e prints de avaliações: guardar futuramente em `assets/images/`. Esta primeira seção não contém avaliações nem galeria.
- O botão Ver projeto e o link do menu abrem o projeto Controler. Quando a seção de projetos for adicionada, altere ambos para `#projetos` e o rótulo para Ver projetos. Não há âncoras para seções ainda inexistentes.
- Ainda não foi fornecido o link do Instagram. Adicione-o ao montar o rodapé; não existe link fictício nesta versão.

## SEO e acessibilidade
HTML semântico, um H1, descrição, Open Graph básico, JSON-LD com dados fornecidos, texto alternativo nas imagens, menu com aria-expanded, foco visível e redução de movimento. Quando definir a URL final, acrescente canonical e og:url absolutos, imagem social com URL absoluta e sitemap.xml. O site não promete posição no Google; indexação e resultados dependem também de publicação e conteúdo.

## Comportamento e verificação
Layout responsivo para desktop, tablets e celulares, sem altura fixa que corte conteúdo em telas pequenas. Efeitos leves em CSS e menu em JavaScript local. Sem CSS/JS inline, exceto JSON-LD, sem scripts de terceiros. Links externos abrem em nova aba com proteção noopener. As imagens de sites nos mockups são uma composição visual; os prints originais serão usados na futura seção de projetos.

Confira após publicar: menu mobile, navegação por teclado, WhatsApp e carregamento das imagens. Este pacote não inclui formulário ou integração de analytics nesta etapa.

## Ajuste da primeira dobra
Cabeçalho, fontes, margens e mockups acompanham a altura útil da janela (svh). A imagem usa object-fit: contain e limite de altura, sem recorte. Em telas excepcionalmente baixas ou com zoom ampliado, a página permite rolagem para preservar legibilidade e acessibilidade.

## Revisão do banner
Título em três linhas. Composição corrigida: Dra. Eloisa no desktop, Controler no tablet nivelado e JB no celular. A imagem aprovada contém fundo escuro; esta versão conserva esse fundo, sem afirmar transparência. Troque assets/images/mockups.webp para futuras revisões.

## Imagem atual do banner
Substituída pela composição de arquitetura aprovada, apenas computador e celular. É um conceito ilustrativo, não um projeto de cliente. O título permanece em três linhas.

## Efeitos do banner
Luzes roxas com trajetórias elípticas contínuas (10 e 14 segundos), alternando camadas atrás e à frente dos mockups. Separadores com pulsação suave alternada. Ícones com movimentos distintos de flutuação, traçado e crescimento. Edite as durações e cores no bloco final de styles.css. Todos respeitam prefers-reduced-motion. Implementação em CSS sem bibliotecas externas.

### Correção das órbitas
Cada ponto agora percorre a elipse do próprio elemento .orbit, acompanhando sua rotação. Todas as órbitas ficam atrás da imagem dos dispositivos, inclusive do celular.

## Segunda seção: Projetos
Três prints originais PNG em assets/images/projeto-*.png. Cards entram em sequência quando aparecem na tela. No desktop, passe o mouse ou use Tab para percorrer a captura. No celular e com movimento reduzido, o quadro permite rolagem manual. Links dos projetos e textos editáveis em index.html. O botão do banner e o menu agora apontam para #projetos. A rolagem usa object-position em CSS, sem estilos inline.

## Padrão visual
Os títulos de ambas as seções usam --section-title-size, --section-title-leading e --section-title-tracking. O texto de apoio dos projetos é alinhado à direita no desktop, na borda interna da imagem do terceiro card. No celular, fica alinhado à esquerda.

## Terceira seção: Design com estratégia
Conteúdo em #diferenciais, quatro ícones SVG em assets/icons e cards com entrada sequencial. Luzes percorrem a mesma elipse das linhas decorativas, atrás dos textos e cards. A preferência de movimento reduzido desativa os efeitos. Título usa as mesmas variáveis das seções anteriores.

### Revisão da terceira seção
Órbita esquerda removida. Mantida apenas a órbita direita. Título com quebra explícita após “propósito:”, ajustando a distribuição das colunas para acomodar as duas linhas.

## Quarta seção: Como funciona
Quatro etapas em sequência. Ao entrar na tela, o número 01 preenche, a linha avança até 02 e assim sucessivamente até 04. A animação executa uma vez e mantém o estado final. No celular, a linha fica vertical. Degradês roxos nos cantos em CSS. Textos em index.html; cores e tempos no bloco .process de styles.css. Movimento reduzido mostra o estado preenchido sem animação.

### Transição e extensão da linha
O degradê e a grade do processo desaparecem gradualmente nas bordas superior e inferior. A linha se estende às duas bordas da seção no desktop, com trechos animados antes de 01 e depois de 04. No celular, a extensão acompanha a orientação vertical.

## Quinta seção: Sobre mim
Foto original em assets/images/kethelyn-alves.png. Recorte circular, enquadramento e halo roxo em .about-portrait no CSS. Nome, apresentação e WhatsApp editáveis no HTML. O menu Sobre leva à seção. Título segue a escala compartilhada.

### Tamanho do retrato
Foto limitada a 370px no desktop, 310px no tablet e 260px no celular, mantendo proporção circular.

## Sexta seção: Atendimento nacional
Mapa ilustrativo vetorial em SVG dentro do HTML, com pontos pulsantes e luzes seguindo os próprios caminhos das conexões. Não representa clientes ou endereços reais. As classes map-flow e node-halo controlam animações; prefers-reduced-motion mantém visual estático. Contorno ilustrativo, não cartográfico. Atendimento online em todo o Brasil.

### Mapa aprovado em imagem
O contorno vetorial anterior foi substituído por assets/images/mapa-brasil.png. A sobreposição SVG usa o mesmo viewBox 1254 × 1254 para manter pontos e luzes alinhados em diferentes telas. Mapa decorativo gerado, sem indicação de clientes reais.

### Frases do atendimento
Os três ícones são checks. As frases aparecem em sequência ao alcançar a lista, com 250ms entre entradas. Sem JavaScript ou com movimento reduzido, o conteúdo permanece visível.

## Sétima seção: Principais dúvidas
Accordion nativo details/summary com sete perguntas, primeira aberta, ícones de mais/menos e navegação por teclado. Edite perguntas e respostas em #duvidas no index.html. Apenas uma resposta permanece aberta. Órbitas roxas animadas atrás do conteúdo, com redução de movimento respeitada.

## Formulário de contato
Os campos da seção `#contato` ficam em index.html. O destino do envio é configurado no bloco projectForm de script.js (5541984678439). O visitante revisa e confirma a mensagem no WhatsApp. Não há servidor, armazenamento ou envio de e-mail. Nome, empresa, nicho, região, serviço, objetivo, dia e horário são obrigatórios; e-mail e site são opcionais.

## Rodapé e contatos
Logo do rodapé: assets/logo/logo-rodape.png (arquivo original fornecido). Instagram: https://www.instagram.com/kethelyn.c.alves/. Os links de WhatsApp usam a mesma mensagem inicial; o formulário acrescenta as respostas. Para trocar o telefone, atualize 5541984678439 em index.html e script.js e os textos visíveis. O botão flutuante fica no canto inferior direito.
