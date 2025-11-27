# Blog Pausa Consciente

Blog minimalista e otimizado para SEO para o livro "Meditação Para Pessoas Sem Tempo".

## Estrutura do Projeto

- **Design System**: Tailwind CSS v4 com paleta de cores personalizada (Sand, Sage, Clay).
- **Fontes**: Inter (sans-serif) e Lora (serif) auto-hospedadas para performance.
- **SEO**: Otimização completa com Meta tags, Open Graph, Schema.org, sitemap.xml e robots.txt.

## Como Rodar Localmente

1. **Instale as dependências** (apenas para desenvolvimento):
   ```bash
   npm install
   ```

2. **Compile o CSS** (se fizer alterações nos estilos):
   ```bash
   ./tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --minify
   ```

3. **Inicie o servidor local**:
   ```bash
   npx serve .
   ```
   Acesse em: `http://localhost:3000`

## Conteúdo

O blog possui 8 artigos baseados nas técnicas do livro:

1. **Respiração Âncora** (Conteúdo Completo)
2. **Escaneamento Relâmpago** (Conteúdo Completo)
3. **Retorno ao Agora** (Conteúdo Completo)
4. **Respiração Quadrada** (Estrutura pronta)
5. **Afirmação Gentil** (Estrutura pronta)
6. **Mini-Meditação Caminhando** (Estrutura pronta)
7. **Como Meditar na Correria** (Estrutura pronta)
8. **Criando Micro-Hábitos** (Estrutura pronta)

## Próximos Passos

- Substituir as imagens placeholder por ilustrações finais.
- Expandir o conteúdo dos artigos 4 a 8 com o texto completo do manuscrito.
- Configurar domínio e hospedagem (ex: Vercel, Netlify).
