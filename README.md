# Portfólio de Caio Dias

Portfólio de projetos e trajetória em Engenharia da Computação, desenvolvimento e automação. O site usa HTML, CSS e JavaScript nativo, com publicação na raiz do repositório pelo GitHub Pages.

[Abrir o portfólio](https://cdbr4zil.github.io/meu-curriculo/)

## Prévia local

Na raiz do projeto, execute:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Abra [localhost:5500](http://127.0.0.1:5500/) e use `Ctrl+C` para encerrar. O site não precisa instalar dependências ou gerar um build.

## Como editar

- **Adicionar um projeto.** No `index.html`, duplique um `article.project-card` dentro de `#projects`. Ajuste nome, descrição, tecnologias e links. Salve a capa em `assets/images/projects/`, de preferência em WebP, e atualize `src`, `alt`, `width` e `height`. Inclua o link de demonstração quando houver uma página pública que funcione.
- **Editar apresentação, trajetória ou contato.** Atualize a seção correspondente no `index.html`. As âncoras `#projects`, `#about`, `#ability` e `#contato` são usadas em links diretos.
- **Alterar a aparência.** Cores dos dois temas, tipografia e espaçamentos ficam em `assets/css/base.css`. Os estilos de cada seção ficam em `assets/css/components/`. O controle de tema está em `assets/js/components/theme.js`.
- **Trocar a imagem de compartilhamento.** Atualize `assets/images/social.jpg` e confira a URL absoluta e as dimensões nas tags Open Graph de `index.html`.

Antes de publicar, confira a página nos dois temas, no celular e no desktop. Envie as alterações para a branch que serve a raiz do site no GitHub Pages.

As capas usam capturas dos projetos. Movimenta e Clube Recreativo foram capturados em ambiente de demonstração. Geist e Roboto Mono são distribuídas sob a SIL Open Font License. As licenças estão em `assets/fonts/`.
