/* ===========================
   LCB-SCHOLAR Application Form JavaScript
   Multi-step Form Management
   =========================== */

// Current step tracking
let currentStep = 1;
const totalSteps = 4;

// Form data storage
let formData = {};

// ===========================
// Initialize
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    setupFileUploads();
    setupFormValidation();
    updateProgressBar();
});

// ===========================
// Form Initialization
// ===========================

function initializeForm() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('lcb-scholar-language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }

    // Prevent form submission on Enter key (except in textareas)
    document.getElementById('applicationForm').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });

    // Form submission handler
    document.getElementById('applicationForm').addEventListener('submit', handleFormSubmit);
}

// ===========================
// Navigation Functions
// ===========================

function nextStep() {
    if (validateStep(currentStep)) {
        saveStepData(currentStep);
        
        if (currentStep < totalSteps) {
            currentStep++;
            updateFormDisplay();
            updateProgressBar();
            updateProgressSteps();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // If step 4, generate summary
            if (currentStep === 4) {
                generateSummary();
            }
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateFormDisplay();
        updateProgressBar();
        updateProgressSteps();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateFormDisplay() {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((step, index) => {
        if (index + 1 === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const percentage = (currentStep / totalSteps) * 100;
    progressBar.style.width = percentage + '%';
}

function updateProgressSteps() {
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
        const stepNumber = index + 1;
        
        if (stepNumber < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNumber === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

// ===========================
// Validation Functions
// ===========================

function validateStep(step) {
    const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
    const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
    
    let isValid = true;
    let firstInvalidElement = null;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('invalid');
            
            if (!firstInvalidElement) {
                firstInvalidElement = input;
            }
            
            // Show error message
            showFieldError(input);
        } else {
            input.classList.remove('invalid');
            hideFieldError(input);
        }
    });

    // Additional validation for specific fields
    if (step === 1) {
        // Validate email format
        const email = document.getElementById('email');
        if (!isValidEmail(email.value)) {
            isValid = false;
            showCustomError(email, currentLanguage === 'fr' ? 'Email invalide' : 'Invalid email');
        }

        // Validate date of birth (must be at least 17 years old)
        const dob = document.getElementById('dateOfBirth');
        if (!isValidAge(dob.value)) {
            isValid = false;
            showCustomError(dob, currentLanguage === 'fr' ? 'Âge minimum : 17 ans' : 'Minimum age: 17 years');
        }
    }

    if (step === 2) {
        // Validate motivation letter length
        const motivation = document.getElementById('motivation');
        if (motivation.value.length < 200) {
            isValid = false;
            showCustomError(motivation, currentLanguage === 'fr' ? 'Minimum 200 caractères requis' : 'Minimum 200 characters required');
        }
    }

    if (step === 3) {
        // Validate file uploads
        const requiredFiles = currentStepElement.querySelectorAll('input[type="file"][required]');
        requiredFiles.forEach(fileInput => {
            if (!fileInput.files || fileInput.files.length === 0) {
                isValid = false;
                showCustomError(fileInput.nextElementSibling, currentLanguage === 'fr' ? 'Fichier requis' : 'File required');
            }
        });
    }

    if (step === 4) {
        // Validate checkboxes
        const terms = document.getElementById('terms');
        const accuracy = document.getElementById('accuracy');
        const consent = document.getElementById('consent');
        
        if (!terms.checked || !accuracy.checked || !consent.checked) {
            isValid = false;
            alert(currentLanguage === 'fr' ? 'Veuillez accepter tous les termes et conditions.' : 'Please accept all terms and conditions.');
        }
    }

    if (!isValid && firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidElement.focus();
    }

    return isValid;
}

function setupFormValidation() {
    const form = document.getElementById('applicationForm');
    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value) {
                if (input.checkValidity()) {
                    input.classList.remove('invalid');
                    hideFieldError(input);
                } else {
                    input.classList.add('invalid');
                    showFieldError(input);
                }
            }
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                if (input.checkValidity()) {
                    input.classList.remove('invalid');
                    hideFieldError(input);
                }
            }
        });
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 17;
    }
    
    return age >= 17;
}

function showFieldError(input) {
    const formGroup = input.closest('.form-group');
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('small');
        errorElement.className = 'error-message';
        errorElement.style.color = 'var(--primary-red)';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        errorElement.style.display = 'block';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = input.validationMessage || (currentLanguage === 'fr' ? 'Ce champ est requis' : 'This field is required');
}

function hideFieldError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function showCustomError(element, message) {
    const formGroup = element.closest ? element.closest('.form-group') : element.parentElement.parentElement;
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('small');
        errorElement.className = 'error-message';
        errorElement.style.color = 'var(--primary-red)';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        errorElement.style.display = 'block';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    
    if (element.classList) {
        element.classList.add('invalid');
    }
}

// ===========================
// File Upload Handling
// ===========================

function setupFileUploads() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const fileName = this.files[0]?.name;
            const fileNameSpan = this.parentElement.querySelector('.file-name');
            
            if (fileName) {
                fileNameSpan.textContent = '✓ ' + fileName;
                fileNameSpan.style.color = 'var(--primary-green)';
                this.classList.remove('invalid');
                hideFieldError(this);
            } else {
                fileNameSpan.textContent = '';
            }
            
            // Validate file size (5MB max)
            if (this.files[0] && this.files[0].size > 5 * 1024 * 1024) {
                alert(currentLanguage === 'fr' ? 'La taille du fichier ne doit pas dépasser 5MB' : 'File size must not exceed 5MB');
                this.value = '';
                fileNameSpan.textContent = '';
            }
        });

        // Drag and drop support
        const fileLabel = input.nextElementSibling;
        
        fileLabel.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileLabel.style.borderColor = 'var(--primary-green)';
            fileLabel.style.background = 'rgba(46, 125, 50, 0.1)';
        });

        fileLabel.addEventListener('dragleave', (e) => {
            e.preventDefault();
            fileLabel.style.borderColor = '';
            fileLabel.style.background = '';
        });

        fileLabel.addEventListener('drop', (e) => {
            e.preventDefault();
            fileLabel.style.borderColor = '';
            fileLabel.style.background = '';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                input.files = files;
                input.dispatchEvent(new Event('change'));
            }
        });
    });
}

// ===========================
// Save Step Data
// ===========================

function saveStepData(step) {
    const stepElement = document.querySelector(`.form-step[data-step="${step}"]`);
    const inputs = stepElement.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.type === 'file') {
            if (input.files && input.files[0]) {
                formData[input.name] = {
                    fileName: input.files[0].name,
                    fileSize: input.files[0].size,
                    fileType: input.files[0].type
                };
            }
        } else if (input.type === 'checkbox') {
            formData[input.name] = input.checked;
        } else {
            formData[input.name] = input.value;
        }
    });
}

// ===========================
// Generate Summary
// ===========================

function generateSummary() {
    const summarySection = document.getElementById('summarySection');
    
    const personalInfoHTML = `
        <div class="summary-block">
            <h3>${currentLanguage === 'fr' ? '👤 Informations Personnelles' : '👤 Personal Information'}</h3>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Nom complet' : 'Full name'}:</span>
                <span class="summary-value">${formData.firstName} ${formData.lastName}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Date de naissance' : 'Date of birth'}:</span>
                <span class="summary-value">${formData.dateOfBirth}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Email:</span>
                <span class="summary-value">${formData.email}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Téléphone' : 'Phone'}:</span>
                <span class="summary-value">${formData.phone}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Nationalité' : 'Nationality'}:</span>
                <span class="summary-value">${formData.nationality}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Passeport' : 'Passport'}:</span>
                <span class="summary-value">${formData.passportNumber}</span>
            </div>
        </div>
    `;

    const academicInfoHTML = `
        <div class="summary-block">
            <h3>${currentLanguage === 'fr' ? '🎓 Parcours Académique' : '🎓 Academic Background'}</h3>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Programme désiré' : 'Desired program'}:</span>
                <span class="summary-value">${formData.programLevel}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Domaine d\'études' : 'Field of study'}:</span>
                <span class="summary-value">${formData.fieldOfStudy}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Langue d\'enseignement' : 'Language of instruction'}:</span>
                <span class="summary-value">${formData.languageOfInstruction}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Dernier diplôme' : 'Highest degree'}:</span>
                <span class="summary-value">${formData.highestDegree}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Dernière école' : 'Last school'}:</span>
                <span class="summary-value">${formData.lastSchool}</span>
            </div>
        </div>
    `;

    const paymentInfoHTML = `
        <div class="summary-block">
            <h3>${currentLanguage === 'fr' ? '💳 Informations de Paiement' : '💳 Payment Information'}</h3>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Montant' : 'Amount'}:</span>
                <span class="summary-value"><strong>7,200¥</strong></span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Méthode' : 'Method'}:</span>
                <span class="summary-value">${formData.paymentMethod}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Référence' : 'Reference'}:</span>
                <span class="summary-value">${formData.transactionId}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">${currentLanguage === 'fr' ? 'Date' : 'Date'}:</span>
                <span class="summary-value">${formData.paymentDate}</span>
            </div>
        </div>
    `;

    const documentsHTML = `
        <div class="summary-block">
            <h3>${currentLanguage === 'fr' ? '📁 Documents Téléchargés' : '📁 Uploaded Documents'}</h3>
            ${formData.paymentProof ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Preuve de paiement' : 'Payment proof'}:</span><span class="summary-value">✓ ${formData.paymentProof.fileName}</span></div>` : ''}
            ${formData.passport ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Passeport' : 'Passport'}:</span><span class="summary-value">✓ ${formData.passport.fileName}</span></div>` : ''}
            ${formData.photo ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Photo' : 'Photo'}:</span><span class="summary-value">✓ ${formData.photo.fileName}</span></div>` : ''}
            ${formData.diploma ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Diplôme' : 'Diploma'}:</span><span class="summary-value">✓ ${formData.diploma.fileName}</span></div>` : ''}
            ${formData.transcripts ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Relevés' : 'Transcripts'}:</span><span class="summary-value">✓ ${formData.transcripts.fileName}</span></div>` : ''}
            ${formData.medicalCert ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Certificat médical' : 'Medical cert'}:</span><span class="summary-value">✓ ${formData.medicalCert.fileName}</span></div>` : ''}
            ${formData.criminalRecord ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Casier judiciaire' : 'Criminal record'}:</span><span class="summary-value">✓ ${formData.criminalRecord.fileName}</span></div>` : ''}
            ${formData.recommendationLetter ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Recommandation' : 'Recommendation'}:</span><span class="summary-value">✓ ${formData.recommendationLetter.fileName}</span></div>` : ''}
            ${formData.motivationLetter ? `<div class="summary-item"><span class="summary-label">${currentLanguage === 'fr' ? 'Motivation' : 'Motivation'}:</span><span class="summary-value">✓ ${formData.motivationLetter.fileName}</span></div>` : ''}
        </div>
    `;

    summarySection.innerHTML = personalInfoHTML + academicInfoHTML + paymentInfoHTML + documentsHTML;
}

// ===========================
// Form Submission
// ===========================

function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateStep(4)) {
        return;
    }

    // Show loading state
    const submitButton = document.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLanguage === 'fr' ? 'Envoi en cours...' : 'Submitting...');
    submitButton.disabled = true;

    // Save final step data
    saveStepData(4);

    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        // Generate application number
        const appNumber = generateApplicationNumber();
        
        // Show success modal
        showSuccessModal(appNumber);
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Log form data (for development)
        console.log('Application submitted:', formData);
        
        // In production, send to server:
        // sendApplicationToServer(formData);
    }, 2000);
}

function generateApplicationNumber() {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `LCB-${year}-${random}`;
}

function showSuccessModal(appNumber) {
    const modal = document.getElementById('successModal');
    const appNumberElement = document.getElementById('applicationNumber');
    
    appNumberElement.textContent = appNumber;
    modal.classList.add('active');
    
    // Store application number
    localStorage.setItem('lastApplicationNumber', appNumber);
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// ===========================
// API Communication (Template)
// ===========================

async function sendApplicationToServer(data) {
    try {
        const formDataToSend = new FormData();
        
        // Add all text fields
        Object.keys(data).forEach(key => {
            if (typeof data[key] !== 'object') {
                formDataToSend.append(key, data[key]);
            }
        });
        
        // Add files
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            if (input.files && input.files[0]) {
                formDataToSend.append(input.name, input.files[0]);
            }
        });
        
        const response = await fetch('/api/applications', {
            method: 'POST',
            body: formDataToSend
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.error('Error submitting application:', error);
        alert(currentLanguage === 'fr' ? 'Erreur lors de l\'envoi. Veuillez réessayer.' : 'Error submitting. Please try again.');
        throw error;
    }
}

// ===========================
// Make functions globally accessible
// ===========================

window.nextStep = nextStep;
window.prevStep = prevStep;
window.closeModal = closeModal;