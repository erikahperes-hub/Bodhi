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
