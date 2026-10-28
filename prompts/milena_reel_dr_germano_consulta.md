# Prompt para a Milena: Reel do Dr. Germano (consulta real)

## Antes de colar o prompt (uma vez só)

1. **Use o Claude Code no PC, no modo Local** (não Cloud). No PC, o Claude lê os vídeos direto da pasta do
   Google Drive para computador, sem limite de tamanho e sem configurar rede.
2. O **Google Drive para computador** precisa estar instalado e sincronizando a pasta
   `Bôdhi Marketing/Projetos - Clientes/Ativos/TRE Clinic`.
3. Se a Milena estiver na mesma conta/organização Claude da Bôdhi, a skill **edicao-video-bodhi** já aparece
   para ela, e o Claude usa sozinho o padrão aprovado do Dr. Germano. Se não aparecer, o prompt abaixo funciona
   mesmo assim.

## Prompt (copiar tudo daqui para baixo e colar no Claude Code)

---

Você vai editar um Reel do Dr. Germano Lima (cliente TRE Clinic, da Bôdhi Marketing). Se a skill
`edicao-video-bodhi` estiver disponível, carregue e siga essa skill (pastas, nomes de arquivo, padrão do
Dr. Germano em `clientes/Dr Germano/`). As regras abaixo valem de qualquer jeito.

### Material
Pasta do Drive: https://drive.google.com/drive/folders/1-3ptQNz1jPD8eB9PMS-w2r6H_qSCnxQb
Arquivos: `Parte 1 - Dr Germano.mov`, `Parte 2 - Dr Germano.mp4`, `Parte 3 - Dr Germano.mp4` (+ capas `.png`).
São 3 edições (~3min20 no total) de uma consulta real: o doutor conversa com uma paciente que não aparece
de rosto, só a voz. Os vídeos já têm legenda.
Se estiver no PC, ache os arquivos na pasta do Google Drive para computador. Não baixe pelo conector do
Drive (limite de 10 MB) e não use link público.

### O que o cliente pediu
Um **Reel único de 45–60s** usando material das 3 partes. Não é para ensinar cirurgia: a pessoa tem que
terminar pensando "é com esse médico que eu gostaria de me consultar". A mensagem é
proximidade + cuidado + verdade + critério médico: o médico que deixa as pessoas verem como ele pensa,
decide e cuida.

Estrutura:
| Tempo | Bloco | Conteúdo |
|---|---|---|
| 0–3s | Gancho | Frase forte dele, sem introdução, mesmo que aconteça no fim da consulta (candidatas: "você mudou seu CPF", "você acha que cirurgia plástica vai resolver todos os problemas…") |
| 3–8s | Contexto | Começo da conversa, só o suficiente para entender que é consulta real |
| 8–20s | Exame + critério | Cortes de 2–4s: mãos, olhar, ele explicando UMA ideia curta |
| 20–30s | Verdade / limite | Ele falando sério, mostrando limite ou o que é realista |
| 30–42s | Evolução | Cena dela treinando + voz dela sobre a experiência (Parte 3) |
| 42–52s | Retorno do gancho | A frase do gancho reaparece no contexto completo |
| 52–60s | Fechamento | Momento espontâneo (sorriso, brincadeira, despedida) |

As Partes 2 e 3 são as melhores; a Parte 1 entra no máximo como imagem de apoio.

Checklist:
- Tirar "Parte 2/3 em breve" e qualquer "Parte X".
- Manter as legendas das falas; reduzir textos, setas e títulos na tela.
- Rosto, voz e interação do doutor como protagonistas.
- Manter imperfeições e momentos espontâneos; nada com cara de propaganda.
- Trilha baixa ou nenhuma.
- Começo, meio e fim dentro do próprio Reel.
- Capa nova sem "Parte X".

### Como trabalhar
1. Instale o que faltar (`ffmpeg`, `openai-whisper` ou `faster-whisper`) e trabalhe numa pasta temporária,
   nunca dentro de um repositório git.
2. Transcreva as Partes 2 e 3 com tempo de cada fala.
3. **Pare e me mostre 3 opções de gancho** (frase exata, parte e tempo) e a lista de cortes proposta, com
   entrada e saída de cada trecho na ordem do Reel. Espere eu escolher antes de renderizar.
4. Renderize em 1080x1920, H.264 (`-crf 16 -preset slow -pix_fmt yuv420p`), AAC 192k, `-movflags +faststart`.
5. Antes de entregar, gere quadros do gancho, de cada emenda e do final e **olhe**: rosto da paciente
   nunca aparece, legenda não cortada, nenhum "Parte X" sobrando.
6. Salve como versão em `Bôdhi Marketing/Projetos - Clientes/Ativos/TRE Clinic/Editados/Dr Germano/AAAA-MM/`
   com o nome `AAAA-MM-DD_reels_consulta-real_v1.mp4` (pergunte a data de publicação). A capa vai como
   `..._v1_capa.png`. **Não mande para a pasta Aprovação**: isso só depois que a Érika aprovar.
7. Me responda curto: o que foi feito, o nome do arquivo e a duração.

### Nunca
- Mostrar o rosto da paciente.
- Enviar vídeo de paciente para serviço externo (conversores online, vidIQ, links públicos).
- Mudar o compartilhamento de arquivos do Drive ou apagar os originais (as 3 edições ficam guardadas para
  comparar desempenho depois).
- Fazer commit de vídeo em repositório git.

---
