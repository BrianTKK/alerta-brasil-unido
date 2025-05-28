
// JavaScript específico para a página de reportar

// Inicializar página de reporte
function initializeReportPage() {
    setupReportForm();
    setupFormValidation();
    setupFileUpload();
}

// Configurar formulário de reporte
function setupReportForm() {
    const form = document.getElementById('reportForm');
    if (form) {
        form.addEventListener('submit', handleReportSubmit);
    }
    
    // Configurar máscaras de telefone
    const phoneInput = document.getElementById('reporterPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = formatPhoneInput(e.target.value);
        });
    }
}

// Configurar validação do formulário
function setupFormValidation() {
    const requiredFields = ['reportType', 'urgency', 'location', 'city', 'description'];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', () => validateReportField(field));
            field.addEventListener('input', () => clearReportFieldError(field));
        }
    });
}

// Configurar upload de arquivos
function setupFileUpload() {
    const fileInput = document.getElementById('evidence');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileUpload);
    }
}

// Lidar com envio do formulário
function handleReportSubmit(e) {
    e.preventDefault();
    
    if (!validateReportForm()) {
        showNotification('Por favor, corrija os erros no formulário', 'danger');
        return;
    }
    
    showLoading('reportForm');
    
    // Simular envio do reporte
    setTimeout(() => {
        hideLoading('reportForm');
        
        // Gerar protocolo de reporte
        const protocol = generateReportProtocol();
        
        // Atualizar modal com protocolo
        const protocolElement = document.getElementById('reportProtocol');
        if (protocolElement) {
            protocolElement.innerHTML = `
                Seu reporte foi recebido com sucesso.<br>
                <strong>Protocolo:</strong> ${protocol}<br><br>
                Guarde este número para acompanhar o andamento.
            `;
        }
        
        // Mostrar modal de sucesso
        const modal = new bootstrap.Modal(document.getElementById('reportSuccessModal'));
        modal.show();
        
        // Limpar formulário
        document.getElementById('reportForm').reset();
        
        showNotification('Reporte enviado com sucesso!', 'success');
    }, 2000);
}

// Validar formulário de reporte
function validateReportForm() {
    const requiredFields = [
        'reportType', 'urgency', 'location', 
        'city', 'description', 'reportTerms'
    ];
    
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !validateReportField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validar campo individual
function validateReportField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Validação de campos obrigatórios
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Este campo é obrigatório';
    }
    
    // Validações específicas
    switch (field.id) {
        case 'reporterPhone':
            if (value && !isValidBrazilianPhone(value)) {
                isValid = false;
                errorMessage = 'Por favor, insira um telefone válido';
            }
            break;
        case 'description':
            if (value && value.length < 20) {
                isValid = false;
                errorMessage = 'Descrição deve ter pelo menos 20 caracteres';
            }
            break;
        case 'reportTerms':
            if (field.type === 'checkbox' && !field.checked) {
                isValid = false;
                errorMessage = 'Você deve aceitar os termos';
            }
            break;
    }
    
    if (!isValid) {
        showReportFieldError(field, errorMessage);
    } else {
        clearReportFieldError(field);
    }
    
    return isValid;
}

// Mostrar erro em campo do reporte
function showReportFieldError(field, message) {
    clearReportFieldError(field);
    field.classList.add('is-invalid');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Limpar erro de campo do reporte
function clearReportFieldError(field) {
    field.classList.remove('is-invalid');
    const errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Lidar com upload de arquivos
function handleFileUpload(e) {
    const files = e.target.files;
    const maxFiles = 5;
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    if (files.length > maxFiles) {
        showNotification(`Máximo ${maxFiles} arquivos permitidos`, 'warning');
        e.target.value = '';
        return;
    }
    
    for (let file of files) {
        if (file.size > maxSize) {
            showNotification(`Arquivo ${file.name} excede 10MB`, 'warning');
            e.target.value = '';
            return;
        }
    }
    
    if (files.length > 0) {
        showNotification(`${files.length} arquivo(s) selecionado(s)`, 'success');
    }
}

// Validar telefone brasileiro
function isValidBrazilianPhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 10 && cleanPhone.length <= 11;
}

// Formatar entrada de telefone
function formatPhoneInput(value) {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 2) {
        return `(${numbers}`;
    } else if (numbers.length <= 6) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
}

// Gerar protocolo de reporte
function generateReportProtocol() {
    const prefix = 'BR';
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    const day = String(new Date().getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    
    return `${prefix}${year}${month}${day}${random}`;
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    if (getCurrentPage() === 'reportar') {
        initializeReportPage();
    }
});

console.log('⚠️ Página de reportar carregada com sucesso!');
