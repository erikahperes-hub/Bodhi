# Guia da Milena: edição de vídeo TRE Clinic com Claude Code

Serve para todos os médicos da TRE Clinic. São **3 passos de configuração (uma vez só)**.
Depois, para cada vídeo, é só colar uma ficha.

---

## PASSO 1: preparar o PC (uma vez só, ~5 min)

- [ ] **Google Drive para computador** instalado e logado na sua conta. No Explorador de Arquivos, confira se
      aparece a pasta `Bôdhi Marketing > Projetos - Clientes > Ativos > TRE Clinic`.
      Se não aparecer: no Drive pela internet, em "Compartilhados comigo", clique com o botão direito em
      **Bôdhi Marketing** → **Organizar** → **Adicionar atalho ao Drive** → "Meu Drive".
- [ ] **Fonte Gotham Black:** abra
      https://drive.google.com/file/d/1OGXYaSESQ8RK0yPgjfxwrMOjY0s1vA5x/view → baixe → dois cliques no arquivo
      `gotham-black.otf` → **Instalar**. (Se o link não abrir, peça o arquivo para a Érika pelo WhatsApp.)
- [ ] Abra o **Claude Code** e deixe no modo **Local** (não Cloud).

---

## PASSO 2: instalar a skill (uma vez só)

A skill é um "manual" que o Claude lê sozinho sempre que você pedir uma edição. Assim você não precisa
explicar as regras toda vez.

1. Numa conversa nova do Claude Code, copie e cole **todo o bloco abaixo** (do "Crie a skill" até o fim do bloco):

````
Crie a skill abaixo para mim. Salve o texto entre as linhas ===INICIO=== e ===FIM=== exatamente igual,
sem mudar nada, no arquivo %USERPROFILE%\.claude\skills\edicao-video-tre\SKILL.md (crie as pastas que
faltarem). Depois:
1) confira se Python, ffmpeg e Whisper estão instalados e instale o que faltar (pode pedir minha permissão);
2) confira se a fonte Gotham Black está instalada no Windows;
3) encontre a pasta "Ativos" do Google Drive neste PC, me mostre o caminho e salve em
   %USERPROFILE%\.bodhi\pasta-drive.txt depois que eu confirmar.
No fim, me diga em 3 linhas o que ficou pronto e o que faltou.

===INICIO===
---
name: edicao-video-tre
description: Edição de vídeo dos médicos da TRE Clinic (Dr. Germano, Dr. Caio, Dr. Vitor, Dr. Paulo, Dr. Thiago e outros) para a Bôdhi Marketing, no PC com Google Drive para computador. Use sempre que o pedido for editar, cortar, ajustar, legendar, juntar trechos ou exportar Reels/Stories de médico da TRE Clinic, mesmo que seja só "edita esse vídeo" ou uma ficha com Médico / Vídeo bruto / O que fazer.
---

# Edição de vídeo TRE Clinic (Bôdhi Marketing)

Nós gravamos consultas, bastidores, resultados e falas dos médicos da TRE Clinic e editamos Reels e Stories
para o Instagram de cada um. Se a skill `edicao-video-bodhi` também estiver disponível, leia a pasta
`clientes/<Médico>/` dela para os detalhes do padrão aprovado. As regras abaixo valem sempre.

## 1. Pasta do Drive neste PC

- O caminho fica salvo em `%USERPROFILE%\.bodhi\pasta-drive.txt` (pasta `...\Bôdhi Marketing\Projetos - Clientes\Ativos`).
- Se o arquivo não existir (primeira vez): procure a pasta `Ativos` dentro de `Bôdhi Marketing\Projetos - Clientes`
  nas unidades do Google Drive para computador (ex.: `G:\Meu Drive\...`, `G:\Outros computadores`, atalhos em
  "Meu Drive"). Mostre o caminho encontrado, peça confirmação e salve nesse arquivo.
- Não baixe vídeo pelo conector do Google Drive (limite de 10 MB) nem por link público: use a pasta do PC.

Pastas a partir de `Ativos\TRE Clinic`:
- Brutos: `Captação\<Médico>`
- Versões editadas: `Editados\<Médico>\AAAA-MM`
- Aprovação (o cliente vê pelo painel): `Ativos\Bôdhi\Aprovação\TRE Clinic\AAAA-MM`. Só depois que eu aprovar.

## 2. Ferramentas (conferir na primeira vez)

- Python, ffmpeg e Whisper. Se faltar: `winget install Python.Python.3.12`, `winget install Gyan.FFmpeg`,
  depois `pip install openai-whisper`. Feche e abra o terminal se o comando não for encontrado depois de instalar.
- Fonte **Gotham Black** instalada no Windows (`C:\Windows\Fonts` ou `%LOCALAPPDATA%\Microsoft\Windows\Fonts`).
  Se não achar, PARE e me avise: ela está no Drive em REELS > Identidade Visual > Fontes > Fonte Legenda Reels
  (https://drive.google.com/file/d/1OGXYaSESQ8RK0yPgjfxwrMOjY0s1vA5x/view). Nunca troque por outra fonte parecida.
- Poppins e Playfair Display (só para o perfil do Dr. Caio): podem ser baixadas do Google Fonts.
- Trabalhe numa pasta temporária, nunca dentro de um repositório git.

## 3. Privacidade (obrigatório, sempre)

- Rosto de paciente nunca aparece: recorte o quadro ou aplique desfoque que acompanha o rosto. O rosto do médico nunca é desfocado.
- Cubra mamilos e região íntima com desfoque (o Instagram derruba). Melhor cobrir demais do que de menos.
- Nunca envie vídeo de paciente para serviço externo (conversores online, vidIQ, links públicos).
- Nunca mude o compartilhamento de arquivos do Drive e nunca apague o original.
- Nunca faça commit de vídeo em repositório git.

## 4. Estilo da casa

- Objetivo: mostrar o médico como ele pensa, decide e cuida (proximidade, cuidado, verdade, critério). Não é aula de cirurgia nem propaganda de clínica.
- Reel com começo, meio e fim dentro dele. Nada de "Parte 2 em breve".
- Gancho nos 3 primeiros segundos: a frase mais forte do médico, mesmo que ele fale no fim. Ela pode reaparecer depois, no contexto.
- Cortes rápidos (2–4 s), sem silêncios e repetições, mas mantendo momentos espontâneos (risadas, brincadeiras).
- Legenda igual à fala, poucos textos e gráficos na tela. Trilha baixa: a voz é o principal.
- Imagem de apoio só quando combina com o que está sendo falado naquele momento.

## 5. Fonte e padrão de cada médico

- **Todos os médicos: Gotham Black** em legendas e textos.
- **Exceção: vídeos para o perfil do Dr. Caio (@drcaiouemura)**: Poppins nos textos, Antes/Depois em Playfair Display
  Italic, @drcaiouemura fixo o vídeo todo na mesma posição (y 1620), velocidade 1,1x, frases de impacto em destaque longe do rosto.
  Dr. Caio em vídeo da clínica ou de outro perfil = Gotham Black.
- Dr. Germano: legenda branca com palavras-chave em amarelo, velocidade 1,05x, trilha suave baixa, recorte 9:16 com desfoque no rosto da paciente.
- Outros médicos: pergunte se existe referência ou vídeo já aprovado e siga o mesmo estilo.

## 6. Exportação

1080x1920, fps do original, H.264 (`-crf 16 -preset slow -profile:v high -pix_fmt yuv420p`), AAC 192k,
`-movflags +faststart`. Vídeo de iPhone HDR/HEVC: converta para SDR BT.709.

## 7. Como trabalhar em cada pedido

1. Ache o bruto em `Captação\<Médico>` pelo nome que eu der. Se houver mais de um parecido, mostre e pergunte.
2. Confira o vídeo com ffprobe e transcreva a fala com os tempos.
3. **Antes de renderizar**, me mostre 2 ou 3 opções de gancho (frase exata + tempo) e a lista de cortes na ordem
   (arquivo, entrada, saída, o que é dito). Espere eu escolher.
4. Renderize e gere quadros do gancho, de cada emenda e do final. **Olhe** os quadros: rosto de paciente coberto,
   legenda inteira e na fonte certa, corte limpo.
5. Salve em `Editados\<Médico>\AAAA-MM` como `AAAA-MM-DD_formato_titulo-curto_v1.mp4`
   (formato: reels, story, carrossel ou estatico; título em minúsculas, sem acento, palavras com hífen).
   Nova rodada de ajuste = `_v2`, `_v3`... Capa = mesmo nome + `_capa.png`.
6. **Não coloque na Aprovação.** Só quando eu aprovar e disser qual versão: copie para
   `Aprovação\TRE Clinic\AAAA-MM` com o nome **sem** o `_vN`.
7. Responda curto: o que foi feito, o nome do arquivo e a duração. Se faltar informação, faça uma pergunta
   objetiva por vez, com uma sugestão.
===FIM===
````

2. Vão aparecer pedidos de permissão (**Allow / Permitir**). Pode aprovar: é o Claude instalando as
   ferramentas e salvando os arquivos.
3. Quando ele disser que terminou, **feche e abra o Claude Code de novo**. Isso faz a skill passar a valer.

---

## PASSO 3: editar um vídeo (sempre)

Abra uma conversa nova no Claude Code (modo Local), preencha e cole:

```
Edita esse vídeo da TRE Clinic.
Médico: [Dr. Germano / Dr. Caio / Dr. Vitor / ...]
Vídeo bruto: [nome do arquivo, ex.: Captação/Dr Caio/IMG_5640.MOV]
Formato: [reels / story]   Duração: [ex.: 45–60 s]
Perfil: [perfil do médico / perfil da TRE Clinic]
Data de publicação: [AAAA-MM-DD]   Título curto: [ex.: consulta-real]
O que fazer: [descreva o pedido ou cole o feedback do médico]
```

**O que vai acontecer:**
1. O Claude acha o vídeo, transcreve e te mostra **2 ou 3 opções de gancho** e a **lista de cortes**.
   → Você escolhe (ex.: "gancho 2, pode seguir").
2. Ele edita, confere os quadros e salva em `Editados/<Médico>/<mês>` com `_v1` no nome.
3. Assista. Quer mudar algo? Escreva o ajuste na mesma conversa → ele faz a `_v2`.
4. Gostou? Escreva: **"aprovado, manda a v2 para a Aprovação"**. Só aí ele copia para a pasta que o
   cliente vê no painel.

**Exemplo de ajuste pedido pelo médico:**
```
Edita esse vídeo da TRE Clinic.
Médico: Dr. Germano
Vídeo bruto: Editados/Dr Germano/2026-10/2026-10-20_reels_consulta-real_v1.mp4 (brutos em Captação/Dr Germano)
O que fazer: o doutor pediu [colar a mensagem dele]. Faça a v2.
```

---

## Regras que o Claude já segue sozinho (só para você saber)

- **Rosto de paciente nunca aparece.** Mamilos e região íntima vão desfocados.
- **Fonte Gotham Black** para todos os médicos. Exceção: vídeos para o **perfil do Dr. Caio**, que têm padrão próprio.
- Gancho nos 3 primeiros segundos, cortes rápidos, legenda igual à fala, pouco texto na tela, trilha baixa.
- Nada vai para a pasta Aprovação sem você aprovar.
- Nunca apaga o original e nunca manda vídeo de paciente para site ou app de fora.

## Se der problema

| Aconteceu | O que fazer |
|---|---|
| "Não encontrei a fonte Gotham" | Refazer a instalação da fonte (Passo 1) e fechar/abrir o Claude Code |
| "Não encontrei a pasta Ativos" | Conferir o atalho do Drive (Passo 1) e responder com o caminho certo |
| Comando "não reconhecido" depois de instalar | Fechar e abrir o Claude Code |
| A skill não parece funcionar | Começar a mensagem com: "Use a skill edicao-video-tre." |
