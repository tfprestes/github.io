# 🚀 Instruções de Deploy - Portfolio Thiago Prestes

## ⚠️ Problema: Git não encontrado

O Git não está instalado ou não está no PATH do sistema. Siga as instruções abaixo:

## 📥 Opção 1: Instalar Git (Recomendado)

### Passo 1: Baixar e Instalar Git
1. Acesse: https://git-scm.com/download/win
2. Baixe o instalador
3. Execute e instale (aceite as opções padrão)
4. **IMPORTANTE**: Marque a opção "Add Git to PATH" durante a instalação

### Passo 2: Reiniciar o PowerShell
Feche e abra novamente o PowerShell após a instalação.

### Passo 3: Executar o Script
```powershell
cd C:\Sistemas\tfprestes
.\deploy.ps1
```

## 📥 Opção 2: GitHub Desktop (Mais Fácil)

### Passo 1: Instalar GitHub Desktop
1. Acesse: https://desktop.github.com/
2. Baixe e instale o GitHub Desktop
3. Faça login com sua conta GitHub

### Passo 2: Publicar via GitHub Desktop
1. Abra o GitHub Desktop
2. File → Add Local Repository
3. Escolha a pasta: `C:\Sistemas\tfprestes`
4. Clique em "Publish repository"
5. Nome do repositório: `tfprestes.github.io`
6. Marque "Keep this code private" se desejar (ou deixe desmarcado para público)
7. Clique em "Publish repository"

### Passo 3: Ativar GitHub Pages
1. Acesse: https://github.com/tfprestes/tfprestes.github.io
2. Vá em Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main` / `root`
5. Salve

## 📥 Opção 3: Comandos Manuais (Após Instalar Git)

Execute cada comando separadamente no PowerShell:

```powershell
# 1. Inicializar repositório
git init

# 2. Adicionar arquivos
git add .

# 3. Criar commit
git commit -m "Portfolio Thiago Prestes - versão profissional completa"

# 4. Renomear branch
git branch -M main

# 5. Adicionar remote
git remote add origin https://github.com/tfprestes/tfprestes.github.io.git

# 6. Enviar para GitHub
git push -u origin main
```

**Nota**: Na primeira vez, você precisará fazer login no GitHub. O Git pode abrir o navegador para autenticação.

## 🔐 Autenticação GitHub

Se pedir credenciais:
- **Username**: Seu usuário do GitHub
- **Password**: Use um **Personal Access Token** (não sua senha)
  - Crie em: https://github.com/settings/tokens
  - Permissões: `repo` (todas)

## ✅ Verificar Deploy

Após o push:
1. Acesse: https://github.com/tfprestes/tfprestes.github.io
2. Verifique se os arquivos foram enviados
3. Vá em Settings → Pages
4. Configure conforme instruções acima
5. Aguarde 2-5 minutos
6. Acesse: https://tfprestes.github.io

## 🆘 Problemas Comuns

### "Git não é reconhecido"
- Instale o Git: https://git-scm.com/download/win
- Reinicie o PowerShell
- Verifique: `git --version`

### "Remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/tfprestes/tfprestes.github.io.git
```

### "Authentication failed"
- Use Personal Access Token em vez de senha
- Crie em: https://github.com/settings/tokens

### "Repository not found"
- Verifique se o repositório `tfprestes.github.io` existe no GitHub
- Crie em: https://github.com/new
- Nome: `tfprestes.github.io` (exatamente este nome)

## 📞 Precisa de Ajuda?

- Documentação Git: https://git-scm.com/doc
- GitHub Docs: https://docs.github.com
- GitHub Pages: https://pages.github.com

---

**Boa sorte com o deploy! 🚀**

