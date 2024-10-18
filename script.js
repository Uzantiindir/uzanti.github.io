document.getElementById('download-button').addEventListener('click', function () {
    const zip = new JSZip();
    const formElements = document.querySelectorAll('.file-option');

    formElements.forEach(element => {
        const checkbox = element.querySelector('input[type="checkbox"]');
        const fileNameInput = element.querySelector('.file-name');

        if (checkbox.checked) {
            const extension = checkbox.value;
            const fileName = fileNameInput.value ? fileNameInput.value + extension : 'default' + extension;

            let content = '';
            switch (extension) {
                case '.js':
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.py':
                    content = '# ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.php':
                    content = '<?php // ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur. ?>\n';
                    break;
                case '.html':
                case '.htm':
                    content = '<!-- ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur. -->\n';
                    break;
                case '.css':
                    content = '/* ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur. */\n';
                    break;
                case '.java':
                case '.class':
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.c':
                case '.cpp':
                case '.h':
                case '.hpp':
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.cs':
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.rb':
                    content = '# ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.go':
                case '.rs':
                case '.swift':
                case '.kt':
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.sh':
                case '.pl':
                case '.lua':
                    content = '# ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.sql':
                case '.pls':
                    content = '-- ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.ts':
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.md':
                    content = '> ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.yaml':
                case '.yml':
                    content = '# ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.dart':
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.bash':
                    content = '# ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                case '.gd':
                    content = '# ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
                    break;
                default:
                    content = '// ' + extension + ' uzantısı ' + window.location.hostname + ' tarafından oluşturulmuştur.\n';
            }

            zip.file(fileName, content);
        }
    });

    zip.generateAsync({ type: "blob" }).then(function (content) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'dosyalar.zip';
        link.click();

        // İndirme işleminden sonra teşekkür ekranını göster
        document.getElementById('thank-you-screen').style.display = 'block';
    });
});

// Çarpı butonuna tıklandığında ekranı kapatma
document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('thank-you-screen').style.display = 'none';
});
