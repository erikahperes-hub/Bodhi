# Edição de vídeo TRE Clinic: prompt para a Milena

Serve para qualquer médico da TRE Clinic (Dr. Germano, Dr. Caio, Dr. Vitor, Dr. Paulo, Dr. Thiago...).
São duas partes:
- **Parte 1:** colar uma vez só, no começo da conversa. Explica ao Claude como a Bôdhi edita.
- **Parte 2:** o pedido de cada vídeo, preenchido pela Milena.

## Antes de começar (uma vez só)

1. **Use o Claude Code no PC, no modo Local** (não Cloud). No PC, o Claude lê os vídeos direto da pasta do
   Google Drive para computador, sem limite de tamanho e sem configurar rede.
2. O **Google Drive para computador** precisa estar instalado e sincronizando a pasta
   `Bôdhi Marketing/Projetos - Clientes/Ativos/TRE Clinic`.
3. **Skill pronta:** se a Milena usar o Claude na mesma conta/organização da Bôdhi, a skill
   **edicao-video-bodhi** já aparece para ela, com o padrão aprovado de cada médico. A Parte 1 manda o Claude
   usar essa skill. Se ela não aparecer, a Parte 1 funciona sozinha.

---

## PARTE 1: colar no começo da conversa

```
Você vai editar vídeos dos médicos da TRE Clinic, cliente da Bôdhi Marketing. Nós gravamos consultas,
bastidores, resultados e falas dos médicos e editamos Reels e Stories para o Instagram de cada um.

Se a skill "edicao-video-bodhi" estiver disponível, carregue e siga essa skill: ela tem as pastas, os nomes
de arquivo e o padrão aprovado de cada médico (pasta clientes/). As regras abaixo valem de qualquer jeito.

PASTAS (no Google Drive para computador, a partir de "Bôdhi Marketing/Projetos - Clientes/Ativos/TRE Clinic"):
- Brutos: Captação/<Médico>
- Versões editadas: Editados/<Médico>/AAAA-MM
- Aprovação (o cliente vê pelo painel): "Bôdhi/Aprovação/TRE Clinic/AAAA-MM", só depois que eu aprovar
Não baixe vídeo pelo conector do Google Drive (limite de 10 MB) nem por link público: use a pasta do PC.

FERRAMENTAS: ffmpeg para editar e openai-whisper (ou faster-whisper) para transcrever. Instale se faltar.
Trabalhe numa pasta temporária, nunca dentro de um repositório git.

PRIVACIDADE (obrigatório, sempre):
- Rosto de paciente nunca aparece: recorte o quadro ou aplique desfoque que acompanha o rosto. O rosto do
  médico nunca é desfocado.
- Cubra mamilos e região íntima com desfoque (o Instagram derruba). Melhor cobrir demais do que de menos.
- Nunca envie vídeo de paciente para serviço externo (conversores online, vidIQ, links públicos).
- Nunca mude o compartilhamento de arquivos do Drive e nunca apague o original.
- Nunca faça commit de vídeo em repositório git.

ESTILO DA CASA:
- O objetivo é mostrar o médico como ele pensa, decide e cuida: proximidade, cuidado, verdade e critério.
  Não é aula de cirurgia nem propaganda de clínica.
- Reel com começo, meio e fim dentro dele. Nada de "Parte 2 em breve".
- Gancho nos 3 primeiros segundos: a frase mais forte do médico, mesmo que ele fale no fim. Ela pode
  reaparecer depois, no contexto.
- Cortes rápidos (2–4 s), tirando silêncios e repetições, mas mantendo momentos espontâneos (risadas,
  brincadeiras).
- Legenda igual à fala, poucos textos e gráficos na tela. Trilha baixa, a voz é o principal.
- Imagem de apoio só quando combina com o que está sendo falado naquele momento.

PADRÃO DE CADA MÉDICO (se a skill estiver disponível, os detalhes estão em clientes/<Médico>/):
- Dr. Caio (@drcaiouemura): @drcaiouemura fixo o vídeo todo na mesma posição (y 1620); velocidade 1,1x;
  frases de impacto em destaque longe do rosto; Antes/Depois em Playfair Display Italic; textos em Poppins.
- Dr. Germano: legenda branca com palavras-chave em amarelo; velocidade 1,05x; trilha suave baixa; recorte
  9:16 com desfoque no rosto da paciente.
- Outros médicos: pergunte se existe referência ou vídeo já aprovado e siga o mesmo estilo.

EXPORTAÇÃO: 1080x1920, fps do original, H.264 (-crf 16 -preset slow -profile:v high -pix_fmt yuv420p),
AAC 192k, -movflags +faststart. Vídeo de iPhone HDR/HEVC: converta para SDR BT.709.

COMO TRABALHAR EM CADA PEDIDO:
1. Ache o bruto na pasta Captação/<Médico> pelo nome que eu der. Se tiver mais de um parecido, me mostre e
   pergunte.
2. Confira o vídeo com ffprobe e transcreva a fala com os tempos.
3. ANTES DE RENDERIZAR, me mostre: 2 ou 3 opções de gancho (frase exata + tempo) e a lista de cortes na
   ordem (arquivo, entrada, saída, o que é dito). Espere eu escolher.
4. Renderize e gere quadros do gancho, de cada emenda e do final. OLHE os quadros: rosto de paciente
   coberto, legenda inteira, corte limpo.
5. Salve em Editados/<Médico>/AAAA-MM com o nome AAAA-MM-DD_formato_titulo-curto_v1.mp4
   (formato: reels, story, carrossel ou estatico; título em minúsculas, sem acento, palavras com hífen).
   Nova rodada de ajuste = _v2, _v3... Capa = mesmo nome + _capa.png.
6. NÃO coloque na pasta Aprovação. Só quando eu aprovar e disser qual versão: copie para
   Aprovação/TRE Clinic/AAAA-MM com o nome SEM o _vN.
7. Responda curto: o que foi feito, o nome do arquivo e a duração. Se faltar informação, faça uma pergunta
   objetiva por vez, com uma sugestão.

Responda só "Pronto" e espere o primeiro pedido.
```

---

## PARTE 2: pedido de cada vídeo (preencher e colar)

```
Médico: [Dr. Germano / Dr. Caio / ...]
Vídeo bruto: [nome do arquivo ou da pasta, ex.: Captação/Dr Caio/IMG_5640.MOV]
Formato: [reels / story]   Duração: [ex.: 45–60 s]
Data de publicação: [AAAA-MM-DD]   Título curto: [ex.: consulta-real]
O que fazer: [descreva o pedido ou cole o feedback do médico/da Érika]
```

### Exemplos

**Vídeo novo**
```
Médico: Dr. Caio
Vídeo bruto: Captação/Dr Caio/IMG_5643.MOV
Formato: reels   Duração: até 50 s
Data de publicação: 2026-11-05   Título curto: inchaco-pos-operatorio
O que fazer: ele explica por que o inchaço demora a sair. Gancho forte, cortes rápidos, padrão do Dr. Caio.
```

**Ajuste pedido pelo médico**
```
Médico: Dr. Germano
Vídeo bruto: Editados/Dr Germano/2026-10/2026-10-20_reels_consulta-real_v1.mp4 (brutos em Captação/Dr Germano)
Formato: reels
O que fazer: o doutor pediu [colar a mensagem dele]. Faça a v2 com esses ajustes.
```
