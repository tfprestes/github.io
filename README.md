# 🚀 Portfolio Profissional - Thiago Fernando Vieira Prestes

**Portfolio premium de classe mundial para Supervisor Sênior de TI/OT, otimizado para impressionar recrutadores nacionais e internacionais (especialmente vagas remotas nos EUA).**

## ✨ Características Premium

- 🎨 **Design 2025**: Glassmorphism, gradientes animados, particles.js no hero
- 🌍 **Bilíngue Completo**: Português BR e Inglês US com toggle instantâneo via bandeirinhas
- 🌙 **Dark Mode**: Toggle suave com preferência salva no localStorage
- ✨ **Animações Épicas**: AOS (Animate On Scroll) + particles.js interativo
- 📱 **100% Responsivo**: Mobile-first, perfeito em todos os dispositivos
- ⚡ **Performance**: Leve, rápido, otimizado
- 🔍 **SEO Perfeito**: Meta tags, Open Graph, estrutura semântica

## 🎯 Tecnologias Utilizadas

- **Tailwind CSS** (via CDN) - Framework CSS moderno
- **Alpine.js** - Reatividade leve e elegante
- **AOS Library** - Animações ao scroll
- **Particles.js** - Efeito de partículas interativo no hero
- **Font Awesome** - Ícones profissionais
- **Google Fonts (Inter)** - Tipografia premium

## 📁 Estrutura do Projeto

```
tfprestes/
├── index.html                          # Página única épica (single-page)
├── assets/
│   ├── css/
│   │   └── style.css                   # Estilos premium com glassmorphism
│   ├── js/
│   │   └── main.js                     # JavaScript com Alpine.js + particles.js
│   ├── img/
│   │   ├── thiago-hero.jpg            # Foto hero (SUBSTITUIR)
│   │   ├── thiago-hero-dark.jpg       # Foto dark mode (SUBSTITUIR)
│   │   ├── logo.svg                    # Logo TP estilizado
│   │   ├── br.svg                      # Bandeira Brasil
│   │   ├── us.svg                      # Bandeira EUA
│   │   └── favicon.ico                  # Favicon
│   └── pdf/
│       ├── Thiago_Prestes_Resume_USA_2025.html    # CV EN (HTML)
│       └── Curriculo_Thiago_Prestes_BR_2025.html  # CV PT (HTML)
└── README.md
```

## 🚀 Deploy no GitHub Pages

### ⚠️ IMPORTANTE: Git não está instalado

O Git precisa estar instalado no sistema. Escolha uma opção:

### Opção 1: Script Automático (Recomendado)

1. **Instale o Git**: https://git-scm.com/download/win
   - ⚠️ Marque "Add Git to PATH" durante a instalação
2. **Reinicie o PowerShell**
3. **Execute o script**:
   ```powershell
   cd C:\Sistemas\tfprestes
   .\deploy.ps1
   ```

### Opção 2: GitHub Desktop (Mais Fácil)

1. **Instale**: https://desktop.github.com/
2. **Abra GitHub Desktop** → File → Add Local Repository
3. **Escolha**: `C:\Sistemas\tfprestes`
4. **Publish** → Nome: `tfprestes.github.io`
5. **Ative GitHub Pages** em Settings → Pages

### Opção 3: Comandos Manuais (PowerShell)

Execute **um por vez** (PowerShell não aceita `&&`):

```powershell
git init
git add .
git commit -m "Portfolio Thiago Prestes"
git branch -M main
git remote add origin https://github.com/tfprestes/tfprestes.github.io.git
git push -u origin main
```

📖 **Guia completo**: Veja `DEPLOY_INSTRUCOES.md` para detalhes

### Passo a Passo:

1. **Criar repositório no GitHub:**
   - Nome: `tfprestes.github.io` (exatamente este nome)
   - Visibilidade: Público ou Privado

2. **Inicializar Git:**
   ```bash
   cd C:\Sistemas\tfprestes
   git init
   git add .
   git commit -m "Portfolio épico - primeira versão"
   ```

3. **Conectar ao GitHub:**
   ```bash
   git remote add origin https://github.com/tfprestes/tfprestes.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Ativar GitHub Pages:**
   - GitHub → Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
   - Salvar

5. **Acessar:**
   - URL: `https://tfprestes.github.io`
   - Aguarde alguns minutos para propagação

6. **Domínio Customizado (Opcional):**
   - Configure no Registro.br se desejar
   - Adicione CNAME no GitHub Pages

## ⚙️ Configuração Necessária

### 1. Substituir Imagens Hero

**URGENTE:** As imagens `thiago-hero.jpg` e `thiago-hero-dark.jpg` são placeholders.

**Requisitos:**
- **thiago-hero.jpg**: Homem brasileiro, 39 anos, barba rala, camisa social azul escura, sorriso confiante, fundo gradiente azul-escuro
- **thiago-hero-dark.jpg**: Mesma foto ajustada para dark mode
- Formato: JPG, 800x800px ou 600x800px, alta qualidade
- Substitua mantendo os mesmos nomes

### 2. Converter PDFs

Os currículos estão em HTML. Converta para PDF:

**Método Navegador:**
1. Abra `assets/pdf/Curriculo_Thiago_Prestes_BR_2025.html` no navegador
2. `Ctrl+P` → Salvar como PDF
3. Salve como `Curriculo_Thiago_Prestes_BR_2025.pdf` na pasta `assets/pdf/`
4. Repita para `Thiago_Prestes_Resume_USA_2025.html`

### 3. Configurar Formspree

1. Acesse [formspree.io](https://formspree.io) e crie conta
2. Crie formulário e copie o endpoint
3. Abra `assets/js/main.js`
4. Substitua `YOUR_FORM_ID` na linha do fetch pelo seu ID

## 📝 Dados do Portfolio

Todos os dados são **100% reais** do Thiago:
- **Nome:** Thiago Fernando Vieira Prestes
- **E-mail:** tfprestes@gmail.com
- **Telefone:** (45) 9 9855-7786
- **Cidade:** Marechal Cândido Rondon – PR
- **Instagram:** @thiagop86
- **Facebook:** tfprestes
- **Experiência:** Alibra Ingredientes S.A. (2023-atual, 2015-2022), Zero Grau (2013-2015), IT Vale (2012-2013)
- **Formação:** Pós em Engenharia de Redes Industriais (2023-2024), Tecnólogo em Redes (2019-2021)
- **Conquista:** 42% redução de downtime crítico

## 🎨 Personalização

### Cores

As cores principais usam gradientes:
- **Azul**: `#2563EB`
- **Roxo**: `#9333EA`
- **Rosa**: `#EC4899`

Edite em `assets/css/style.css` ou classes Tailwind nos HTMLs.

### Conteúdo

Todo conteúdo está com atributos `data-i18n` para tradução. Edite diretamente no `index.html` ou no objeto `translations` em `assets/js/main.js`.

## 📱 Testes

Teste em:
- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667, 414x896)

Use F12 (DevTools) para testar responsividade.

## 🔧 Funcionalidades

- ✅ Header fixo com glassmorphism
- ✅ Logo TP estilizado
- ✅ Navegação suave entre seções
- ✅ Toggle idioma (bandeirinhas BR/US)
- ✅ Dark mode com preferência salva
- ✅ Hero section com particles.js
- ✅ Foto profissional com efeito glass
- ✅ Timeline de experiência vertical
- ✅ Competências com ícones e badges
- ✅ Card de conquista em destaque (42% redução)
- ✅ Formação acadêmica
- ✅ Currículo com abas (PT/EN)
- ✅ Formulário de contato funcional
- ✅ Footer com links sociais
- ✅ Animações AOS em todas as seções

## 📊 Performance

- **Lighthouse Score**: 95+ (esperado)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Mínimo (CDN)

## 🌟 Destaques do Design

1. **Glassmorphism**: Efeito de vidro fosco em cards
2. **Gradientes Animados**: Botões e textos com gradientes que se movem
3. **Particles.js**: Partículas interativas no background do hero
4. **Timeline Vertical**: Experiência profissional em timeline moderna
5. **Competências com Ícones**: Cards visuais para cada tecnologia
6. **Hover Effects**: Transformações suaves em todos os elementos
7. **Smooth Scroll**: Navegação suave entre seções

## 📝 Licença

Uso pessoal/profissional. Sinta-se livre para usar como base.

## 🆘 Suporte

Para dúvidas:
- Consulte este README
- Verifique os comentários no código
- Teste localmente antes de publicar

---

**Desenvolvido para impressionar recrutadores globais e abrir portas para oportunidades nos EUA! 🚀**

**Disponível para projetos nacionais e vagas 100% remotas internacionais (EUA inclusas)** 🌍
