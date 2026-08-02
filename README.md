# Portfolio — Gustavo Medeiros (v4)

Site estático (HTML/CSS/JS puro, sem build) pronto para o GitHub Pages. **Inglês é o idioma principal**, com um alternador para **português** no canto superior direito do menu (EN / PT).

## Estrutura

```
index.html
css/style.css
js/i18n.js      ← dicionário de tradução (PT) + lógica do alternador de idioma
js/main.js      ← barra de progresso de rolagem + animações de entrada
assets/favicon.svg
```

## Como funciona o idioma

- O HTML já vem escrito em **inglês** — é o idioma que aparece mesmo se o JavaScript não carregar.
- `js/i18n.js` guarda as traduções em português e troca o conteúdo de cada elemento marcado com `data-i18n="..."` quando o visitante clica em **PT** no menu.
- A escolha do visitante fica salva no navegador (`localStorage`), então quem já trocou para português continua vendo o site em português nas próximas visitas — sem afetar outros visitantes.
- Textos que não mudam entre os idiomas (nomes próprios, siglas como "NGFW", "VPN", "Fortinet", "LPIC-1", o e-mail, o link do LinkedIn) não têm tradução — permanecem iguais nos dois idiomas.

### Como adicionar ou ajustar uma tradução

Cada elemento traduzível tem um atributo `data-i18n="chave"` no `index.html`. Para editar o texto em português correspondente, abra `js/i18n.js` e altere o valor daquela mesma chave no objeto `dict`. Para editar o texto em inglês, edite diretamente o `index.html` (é a fonte da verdade do idioma principal).

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `gustavo-medeiros.github.io` para um site de usuário, ou qualquer nome para um site de projeto).
2. Envie estes arquivos para a raiz do repositório (branch `main`).
3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
5. Salve. O GitHub gera a URL do site em alguns minutos (formato `https://SEU-USUARIO.github.io/NOME-DO-REPO/`).

## Antes de publicar — preencher os placeholders

- `[ADD-FORTINET-NSE4-VERIFICATION-URL]` — aparece 2x na seção de Certificações. Cole a URL pública de verificação do certificado.
- `[ADD-LPIC-1-VERIFICATION-URL]` — mesma lógica, para o LPIC-1.
- `[ADD-EMAIL]` — e-mail de contato, no rodapé (aparece no texto e no `href="mailto:..."`).
- `[ADD-LINKEDIN-URL]` — URL completa do seu perfil do LinkedIn, no rodapé.
- `assets/og-cover.png` — referenciado no meta Open Graph mas não incluído; adicione uma imagem 1200×630px, ou remova a linha `og:image` do `<head>`.

## Direção visual (mantida da v3, sem mudanças)

Acento único em azul cobalto (`#4c6fe0`), Manrope nos títulos + Inter no corpo, grades de cards alinhadas via "hairline por gap" (sem `align-items:baseline`), barra de progresso fixa no topo em vez de barra lateral.
