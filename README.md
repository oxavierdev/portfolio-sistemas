# 🎨 Portfólio Profissional - HTML5 Puro

Portfólio moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript puro. Design com efeito glass, paleta de cores em cinza e azul (#60a5fa), e funcionalidade de alternância entre tema claro e escuro.

## 📋 Características

- ✅ **HTML5 Puro** - Sem frameworks ou bibliotecas
- 🎨 **Design Moderno** - Efeito glass e gradientes
- 🌓 **Tema Claro/Escuro** - Alternância com persistência no localStorage
- 📱 **Totalmente Responsivo** - Mobile-first design
- ⚡ **Performance** - Código otimizado e leve
- 🎯 **SEO Friendly** - Estrutura semântica HTML5
- 🚀 **GitHub Pages Ready** - Pronto para deploy

## 🎨 Paleta de Cores

- **Azul Principal**: #60a5fa
- **Cinza**: #6b7280
- **Backgrounds**: Gradientes dinâmicos
- **Efeito Glass**: backdrop-filter com transparência

## 📁 Estrutura de Arquivos

```
portfolio/
│
├── index.html              # Página principal
├── css/
│   ├── styles.css         # Estilos principais
│   └── responsive.css     # Media queries e responsividade
├── js/
│   └── main.js           # JavaScript (tema, menu, filtros, etc)
└── README.md             # Documentação
```

## 🚀 Como Usar

### Instalação Local

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador
3. Pronto! Não precisa de servidor ou instalação

### Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings → Pages
4. Selecione a branch `main` e pasta `/ (root)`
5. Clique em Save
6. Seu portfólio estará disponível em: `https://seu-usuario.github.io/nome-do-repo`

## ✏️ Personalização

### 1. Informações Pessoais

Edite o arquivo `index.html` e substitua:

- **Nome**: Linha 61 - `<h1 class="hero-name">Seu Nome</h1>`
- **Email**: Linha 547 - `seu.email@exemplo.com`
- **Telefone**: Linha 560 - `+55 (11) 99999-9999`
- **Localização**: Linha 573 - `São Paulo, SP - Brasil`

### 2. Foto de Perfil

Substitua a URL da imagem na linha 105:

```html
<img src="SUA_FOTO_AQUI.jpg" alt="Profile" class="profile-img">
```

### 3. Redes Sociais

Atualize os links nas linhas 78-100 (Hero) e 588-610 (Contact):

```html
<a href="https://github.com/seu-usuario" ...>
<a href="https://linkedin.com/in/seu-perfil" ...>
<a href="https://twitter.com/seu-usuario" ...>
```

### 4. Projetos

Edite a seção de projetos (linhas 242-428) para adicionar seus próprios projetos:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="URL_DA_IMAGEM" alt="Nome do Projeto">
    </div>
    <div class="project-content">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição do projeto...</p>
        <div class="project-tags">
            <span class="project-tag">Tecnologia 1</span>
            <span class="project-tag">Tecnologia 2</span>
        </div>
        <a href="LINK_DO_PROJETO" class="project-link">Ver Projeto</a>
    </div>
</div>
```

### 5. Habilidades

Atualize as habilidades na seção About (linhas 154-189):

```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Nome da Habilidade</span>
        <span class="skill-percent">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### 6. Serviços

Personalize os serviços oferecidos (linhas 430-545):

```html
<div class="service-card">
    <div class="service-icon">
        <!-- Ícone SVG aqui -->
    </div>
    <h3 class="service-title">Nome do Serviço</h3>
    <p class="service-description">Descrição do serviço...</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
</div>
```

## 🎨 Customização de Cores

Para alterar as cores do tema, edite o arquivo `css/styles.css` nas variáveis CSS (linhas 10-30):

```css
:root {
    /* Altere estas cores */
    --color-blue: #60a5fa;
    --color-blue-dark: #3b82f6;
    --color-gray: #6b7280;
    --color-gray-dark: #4b5563;
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints em:

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## ⚡ Funcionalidades JavaScript

- **Tema Claro/Escuro**: Alternância com persistência
- **Menu Mobile**: Hambúrguer menu responsivo
- **Smooth Scroll**: Navegação suave entre seções
- **Filtro de Projetos**: Filtragem por categoria
- **Formulário de Contato**: Validação e envio
- **Animações**: Scroll animations e efeitos hover

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript (ES6+)
- SVG Icons

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através das redes sociais no portfólio.

---

**Desenvolvido com ♥ usando HTML5, CSS3 e JavaScript puro**
