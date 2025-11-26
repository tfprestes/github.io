# Script de Deploy para GitHub Pages - Thiago Prestes Portfolio
# Execute este script no PowerShell: .\deploy.ps1

Write-Host "🚀 Iniciando deploy do portfolio..." -ForegroundColor Cyan

# Verificar se Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git não encontrado!" -ForegroundColor Red
    Write-Host "📥 Instale o Git em: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Ou use GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
    exit 1
}

# Inicializar repositório
Write-Host "`n📦 Inicializando repositório Git..." -ForegroundColor Cyan
git init

# Adicionar arquivos
Write-Host "📝 Adicionando arquivos..." -ForegroundColor Cyan
git add .

# Commit
Write-Host "💾 Criando commit..." -ForegroundColor Cyan
git commit -m "Portfolio Thiago Prestes - versão profissional completa"

# Renomear branch para main
Write-Host "🌿 Configurando branch main..." -ForegroundColor Cyan
git branch -M main

# Adicionar remote (verificar se já existe)
Write-Host "🔗 Configurando repositório remoto..." -ForegroundColor Cyan
$remoteExists = git remote | Select-String -Pattern "origin"
if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' já existe. Removendo..." -ForegroundColor Yellow
    git remote remove origin
}
git remote add origin https://github.com/tfprestes/tfprestes.github.io.git

# Push
Write-Host "`n🚀 Enviando para GitHub..." -ForegroundColor Cyan
Write-Host "⚠️  Você precisará fazer login no GitHub se ainda não estiver autenticado." -ForegroundColor Yellow
git push -u origin main

Write-Host "`n✅ Deploy concluído!" -ForegroundColor Green
Write-Host "🌐 Seu site estará disponível em: https://tfprestes.github.io" -ForegroundColor Cyan
Write-Host "⏳ Aguarde alguns minutos para a propagação do GitHub Pages." -ForegroundColor Yellow
Write-Host "`n📋 Próximos passos:" -ForegroundColor Cyan
Write-Host "   1. Acesse: https://github.com/tfprestes/tfprestes.github.io/settings/pages" -ForegroundColor White
Write-Host "   2. Configure: Source = 'Deploy from a branch'" -ForegroundColor White
Write-Host "   3. Branch: 'main' / 'root'" -ForegroundColor White
Write-Host "   4. Salve e aguarde alguns minutos" -ForegroundColor White

