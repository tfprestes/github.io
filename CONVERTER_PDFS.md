# Como Converter os HTMLs para PDF

Os currículos estão em formato HTML e precisam ser convertidos para PDF.

## Método 1: Navegador (Mais Simples)

1. Abra `assets/pdf/curriculo-thiago-prestes-br-2025.html` no seu navegador
2. Pressione `Ctrl+P` (Windows) ou `Cmd+P` (Mac)
3. Na janela de impressão:
   - Destino: "Salvar como PDF"
   - Layout: Retrato
   - Margens: Padrão
   - Opções: Marque "Gráficos de segundo plano"
4. Clique em "Salvar"
5. Salve como `curriculo-thiago-prestes-br-2025.pdf` na pasta `assets/pdf/`

Repita o processo para `cv-thiago-prestes-usa-2025.html`

## Método 2: Ferramenta Online

1. Acesse [HTML to PDF](https://www.html2pdf.com/) ou [PDF24](https://tools.pdf24.org/pt/html-para-pdf)
2. Faça upload do arquivo HTML
3. Configure as opções (margens, orientação)
4. Baixe o PDF
5. Salve na pasta `assets/pdf/` com o nome correto

## Método 3: Node.js (Puppeteer)

Se você tem Node.js instalado:

```bash
npm install -g puppeteer
```

Crie um script `convert-pdfs.js`:

```javascript
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHTMLtoPDF(htmlFile, pdfFile) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const htmlPath = path.resolve(__dirname, htmlFile);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await page.pdf({
        path: pdfFile,
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' }
    });
    await browser.close();
    console.log(`✅ Convertido: ${pdfFile}`);
}

(async () => {
    await convertHTMLtoPDF(
        'assets/pdf/curriculo-thiago-prestes-br-2025.html',
        'assets/pdf/curriculo-thiago-prestes-br-2025.pdf'
    );
    await convertHTMLtoPDF(
        'assets/pdf/cv-thiago-prestes-usa-2025.html',
        'assets/pdf/cv-thiago-prestes-usa-2025.pdf'
    );
})();
```

Execute:
```bash
node convert-pdfs.js
```

## Método 4: Python (weasyprint)

Se você tem Python instalado:

```bash
pip install weasyprint
```

Crie um script `convert-pdfs.py`:

```python
from weasyprint import HTML

HTML('assets/pdf/curriculo-thiago-prestes-br-2025.html').write_pdf('assets/pdf/curriculo-thiago-prestes-br-2025.pdf')
HTML('assets/pdf/cv-thiago-prestes-usa-2025.html').write_pdf('assets/pdf/cv-thiago-prestes-usa-2025.pdf')

print("✅ PDFs convertidos com sucesso!")
```

Execute:
```bash
python convert-pdfs.py
```

## Verificação

Após a conversão, verifique se os arquivos existem:
- ✅ `assets/pdf/curriculo-thiago-prestes-br-2025.pdf`
- ✅ `assets/pdf/cv-thiago-prestes-usa-2025.pdf`

Os links de download no site funcionarão automaticamente após a conversão.

