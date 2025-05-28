
// JavaScript específico para a página de voluntariado

// Inicializar página de voluntário
function initializeVolunteerPage() {
    populateAreasOfInterest();
    populateAvailabilityOptions();
    setupFormValidation();
    setupFormSubmission();
    setupPhoneMask();
}

// Popular áreas de interesse
function populateAreasOfInterest() {
    const container = document.getElementById('areasOfInterest');
    if (!container) return;
    
    container.innerHTML = availableAreas.map(area => `
        <div class="col-md-6">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="area-${area.replace(/\s+/g, '')}" value="${area}">
                <label class="form-check-label" for="area-${area.replace(/\s+/g, '')}">
                    ${area}
                </label>
            </div>
        </div>
    `).join('');
}

// Popular opções de disponibilidade
function populateAvailabilityOptions() {
    const select = document.getElementById('availability');
    if (!select) return;
    
    availabilityOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

// Configurar máscara de telefone
function setupPhoneMask() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;
    
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length >= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 7) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }
        
        e.target.value = value;
    });
}

// Configurar validação do formulário
function setupFormValidation() {
    const form = document.getElementById('volunteerForm');
    if (!form) return;
    
    // Validação em tempo real
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('is-invalid')) {
                validateField(field);
            }
        });
    });
    
    // Validação específica para email
    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.addEventListener('blur', () => validateEmailField(emailField));
    }
    
    // Validação de termos
    const termsCheckbox = document.getElementById('termsAccepted');
    if (termsCheckbox) {
        termsCheckbox.addEventListener('change', () => validateTerms(termsCheckbox));
    }
}

// Validar campo individual
function validateField(field) {
    if (!field.value.trim()) {
        showFieldError(field, 'Este campo é obrigatório');
        return false;
    } else {
        clearFieldError(field);
        return true;
    }
}

// Validar campo de email
function validateEmailField(field) {
    if (!field.value.trim()) {
        showFieldError(field, 'Este campo é obrigatório');
        return false;
    } else if (!isValidEmail(field.value)) {
        showFieldError(field, 'Por favor, insira um email válido');
        return false;
    } else {
        clearFieldError(field);
        return true;
    }
}

// Validar termos
function validateTerms(checkbox) {
    if (!checkbox.checked) {
        showFieldError(checkbox, 'Você deve aceitar os termos para continuar');
        return false;
    } else {
        clearFieldError(checkbox);
        return true;
    }
}

// Configurar envio do formulário
function setupFormSubmission() {
    const form = document.getElementById('volunteerForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitVolunteerForm();
    });
}

// Enviar formulário de voluntário
function submitVolunteerForm() {
    const form = document.getElementById('volunteerForm');
    if (!form) return;
    
    // Validar formulário completo
    if (!validateVolunteerForm()) {
        showNotification('Por favor, corrija os erros no formulário', 'danger');
        return;
    }
    
    // Coletar dados do formulário
    const formData = collectFormData();
    
    // Simular envio (adicionar loading)
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
    
    // Simular delay de envio
    setTimeout(() => {
        // Salvar dados localmente (simulação)
        saveVolunteerData(formData);
        
        // Restaurar botão
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        
        // Mostrar modal de sucesso
        showSuccessModal();
        
        // Limpar formulário
        form.reset();
        clearAllFieldErrors();
        
        console.log('Dados do voluntário:', formData);
    }, 2000);
}

// Validar formulário completo
function validateVolunteerForm() {
    const form = document.getElementById('volunteerForm');
    let isValid = true;
    
    // Validar campos obrigatórios
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Validar email especificamente
    const emailField = document.getElementById('email');
    if (emailField && !validateEmailField(emailField)) {
        isValid = false;
    }
    
    // Validar termos
    const termsCheckbox = document.getElementById('termsAccepted');
    if (termsCheckbox && !validateTerms(termsCheckbox)) {
        isValid = false;
    }
    
    return isValid;
}

// Coletar dados do formulário
function collectFormData() {
    const form = document.getElementById('volunteerForm');
    
    // Coletar áreas selecionadas
    const selectedAreas = [];
    const areaCheckboxes = form.querySelectorAll('#areasOfInterest input[type="checkbox"]:checked');
    areaCheckboxes.forEach(checkbox => {
        selectedAreas.push(checkbox.value);
    });
    
    return {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        location: document.getElementById('location').value.trim(),
        skills: document.getElementById('skills').value.trim(),
        areas: selectedAreas,
        availability: document.getElementById('availability').value,
        experience: document.getElementById('experience').value,
        registrationDate: new Date().toISOString().split('T')[0],
        id: Date.now() // ID simples baseado em timestamp
    };
}

// Salvar dados do voluntário (localStorage)
function saveVolunteerData(data) {
    const existingVolunteers = JSON.parse(localStorage.getItem('volunteers') || '[]');
    existingVolunteers.push(data);
    localStorage.setItem('volunteers', JSON.stringify(existingVolunteers));
}

// Mostrar modal de sucesso
function showSuccessModal() {
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
}

// Limpar todos os erros de campo
function clearAllFieldErrors() {
    const form = document.getElementById('volunteerForm');
    const invalidFields = form.querySelectorAll('.is-invalid');
    invalidFields.forEach(field => clearFieldError(field));
}

// Carregar dados salvos de voluntários
function getSavedVolunteers() {
    return JSON.parse(localStorage.getItem('volunteers') || '[]');
}

// Estatísticas de voluntários
function getVolunteerStats() {
    const volunteers = getSavedVolunteers();
    
    return {
        total: volunteers.length,
        byLocation: volunteers.reduce((acc, vol) => {
            const location = vol.location.split(',')[1]?.trim() || vol.location;
            acc[location] = (acc[location] || 0) + 1;
            return acc;
        }, {}),
        byArea: volunteers.reduce((acc, vol) => {
            vol.areas.forEach(area => {
                acc[area] = (acc[area] || 0) + 1;
            });
            return acc;
        }, {}),
        byAvailability: volunteers.reduce((acc, vol) => {
            if (vol.availability) {
                acc[vol.availability] = (acc[vol.availability] || 0) + 1;
            }
            return acc;
        }, {})
    };
}

// Filtrar voluntários por critérios
function filterVolunteers(criteria) {
    const volunteers = getSavedVolunteers();
    
    return volunteers.filter(volunteer => {
        const matchesLocation = !criteria.location || 
            volunteer.location.toLowerCase().includes(criteria.location.toLowerCase());
        
        const matchesArea = !criteria.area || 
            volunteer.areas.some(area => area.toLowerCase().includes(criteria.area.toLowerCase()));
        
        const matchesAvailability = !criteria.availability || 
            volunteer.availability === criteria.availability;
        
        const matchesSkills = !criteria.skills || 
            volunteer.skills.toLowerCase().includes(criteria.skills.toLowerCase());
        
        return matchesLocation && matchesArea && matchesAvailability && matchesSkills;
    });
}

// Exportar dados de voluntários
function exportVolunteersData() {
    const volunteers = getSavedVolunteers();
    const dataStr = JSON.stringify(volunteers, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'voluntarios-brasil-unido.json';
    link.click();
    
    showNotification('Dados exportados com sucesso!', 'success');
}

// Função para administradores verem lista de voluntários
function displayVolunteersList() {
    const volunteers = getSavedVolunteers();
    
    if (volunteers.length === 0) {
        return '<p class="text-muted">Nenhum voluntário cadastrado ainda.</p>';
    }
    
    return volunteers.map(volunteer => `
        <div class="card mb-3">
            <div class="card-body">
                <h6 class="card-title">${volunteer.name}</h6>
                <p class="card-text">
                    <small class="text-muted">${volunteer.location}</small><br>
                    <strong>Áreas:</strong> ${volunteer.areas.join(', ')}<br>
                    <strong>Disponibilidade:</strong> ${volunteer.availability || 'Não informado'}<br>
                    <strong>Experiência:</strong> ${volunteer.experience || 'Não informado'}<br>
                    <strong>Cadastrado em:</strong> ${formatDateBR(volunteer.registrationDate)}
                </p>
                <button class="btn btn-sm btn-outline-primary" onclick="showVolunteerDetails('${volunteer.id}')">
                    Ver Detalhes
                </button>
            </div>
        </div>
    `).join('');
}

// Mostrar detalhes de um voluntário específico
function showVolunteerDetails(volunteerId) {
    const volunteers = getSavedVolunteers();
    const volunteer = volunteers.find(v => v.id.toString() === volunteerId.toString());
    
    if (!volunteer) {
        showNotification('Voluntário não encontrado', 'danger');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Detalhes do Voluntário</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <h6>${volunteer.name}</h6>
                    <p><strong>Email:</strong> ${volunteer.email}</p>
                    <p><strong>Telefone:</strong> ${volunteer.phone || 'Não informado'}</p>
                    <p><strong>Localização:</strong> ${volunteer.location}</p>
                    <p><strong>Habilidades:</strong></p>
                    <p class="ms-3">${volunteer.skills}</p>
                    <p><strong>Áreas de Interesse:</strong> ${volunteer.areas.join(', ')}</p>
                    <p><strong>Disponibilidade:</strong> ${volunteer.availability || 'Não informado'}</p>
                    <p><strong>Experiência:</strong> ${volunteer.experience || 'Não informado'}</p>
                    <p><strong>Data de Cadastro:</strong> ${formatDateBR(volunteer.registrationDate)}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <a href="mailto:${volunteer.email}" class="btn btn-primary">Contatar</a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    modal.addEventListener('hidden.bs.modal', () => {
        document.body.removeChild(modal);
    });
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    if (getCurrentPage() === 'voluntario') {
        initializeVolunteerPage();
    }
});

console.log('👥 Página de voluntariado carregada com sucesso!');
