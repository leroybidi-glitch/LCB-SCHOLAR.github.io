/**
 * Universities Page JavaScript - VERSION CORRIGÉE
 * ================================================
 * Génère dynamiquement les cartes d'universités
 */

// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 Chargement de la page Universités...');
    
    // Vérifier que universitiesData existe
    if (typeof universitiesData === 'undefined') {
        console.error('❌ universitiesData non trouvé !');
        alert('Erreur : La base de données des universités n\'a pas pu être chargée.');
        return;
    }

    console.log('✅ Base de données chargée');
    console.log('Top Tier:', universitiesData.topTier.length, 'universités');
    console.log('Accessible:', universitiesData.accessible.length, 'universités');
    
    // Générer les universités
    generateUniversities();
    
    // Setup filtres
    setupFilters();
    
    console.log('✅ Page Universités chargée avec succès !');
});

/**
 * Générer toutes les universités
 */
function generateUniversities() {
    const topTierContainer = document.getElementById('topTierUniversities');
    const accessibleContainer = document.getElementById('accessibleUniversities');
    
    if (!topTierContainer || !accessibleContainer) {
        console.error('❌ Conteneurs non trouvés !');
        return;
    }

    // Vider les conteneurs
    topTierContainer.innerHTML = '';
    accessibleContainer.innerHTML = '';
    
    // Générer Top Tier
    universitiesData.topTier.forEach(uni => {
        const card = createUniversityCard(uni, 'top-tier');
        topTierContainer.appendChild(card);
    });
    
    // Générer Accessibles
    universitiesData.accessible.forEach(uni => {
        const card = createUniversityCard(uni, 'accessible');
        accessibleContainer.appendChild(card);
    });
    
    console.log('✅ Cartes générées:', 
        topTierContainer.children.length, 'Top Tier +',
        accessibleContainer.children.length, 'Accessible'
    );
}

/**
 * Créer une carte université
 */
function createUniversityCard(uni, category) {
    const card = document.createElement('div');
    card.className = `university-card ${category}`;
    card.setAttribute('data-category', category);

    const currentLang = localStorage.getItem('lcb-scholar-language') || 'fr';
    const name = uni.name[currentLang] || uni.name.fr;
    const location = uni.location[currentLang] || uni.location.fr;

    // Badge
    const badgeText = category === 'top-tier' ? 
        (currentLang === 'fr' ? 'Top Tier' : currentLang === 'en' ? 'Top Tier' : 'المستوى الأعلى') :
        (currentLang === 'fr' ? 'Accessible' : currentLang === 'en' ? 'Accessible' : 'في المتناول');

    // Programmes (4 premiers)
    const programsHtml = uni.programs.slice(0, 4).map(prog => {
        const progName = prog[currentLang] || prog.fr;
        return `<div class="program-tag">${progName}</div>`;
    }).join('');

    // Bourses (2 premières)
    const scholarshipsHtml = uni.scholarships.slice(0, 2).map(sch => {
        const type = currentLang === 'fr' ? sch.type :
                     currentLang === 'en' ? sch.typeEn :
                     sch.typeAr;
        const coverage = sch.coverage.slice(0, 2).join(', ');
        const feeLabel = currentLang === 'fr' ? 'Frais de dépôt' : 
                        currentLang === 'en' ? 'Deposit fee' : 'رسوم الإيداع';
        
        return `
            <div class="scholarship-item">
                <div class="scholarship-type">${type}</div>
                <div class="scholarship-coverage">${coverage}</div>
                <div class="scholarship-fee">${feeLabel}: ${sch.fee}</div>
            </div>
        `;
    }).join('');

    // Labels multilingues
    const labels = {
        programs: currentLang === 'fr' ? 'Programmes disponibles' : 
                 currentLang === 'en' ? 'Available Programs' : 'البرامج المتاحة',
        scholarships: currentLang === 'fr' ? 'Bourses disponibles' : 
                     currentLang === 'en' ? 'Available Scholarships' : 'المنح المتاحة',
        tuition: currentLang === 'fr' ? 'Frais de scolarité annuels' : 
                currentLang === 'en' ? 'Annual tuition fees' : 'الرسوم الدراسية السنوية'
    };

    card.innerHTML = `
        <div class="university-image">
            <img src="${uni.image}" alt="${name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x220/1a472a/ffffff?text=University'">
            <div class="university-badge ${category}">${badgeText}</div>
        </div>
        <div class="university-content">
            <div class="university-header">
                <h3 class="university-name">${name}</h3>
                <div class="university-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${location}</span>
                </div>
                <div class="university-ranking">${uni.ranking}</div>
            </div>

            <div class="university-programs">
                <h4>
                    <i class="fas fa-graduation-cap"></i>
                    <span>${labels.programs}</span>
                </h4>
                <div class="programs-list">
                    ${programsHtml}
                </div>
            </div>

            <div class="university-scholarships">
                <h4>
                    <i class="fas fa-award"></i>
                    <span>${labels.scholarships}</span>
                </h4>
                ${scholarshipsHtml}
            </div>

            <div class="tuition-fees">
                <strong>${labels.tuition}</strong>
                <span class="tuition-amount">${uni.tuitionFees}</span>
            </div>
        </div>
    `;

    return card;
}

/**
 * Setup des filtres
 */
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.university-card');
    const dividers = document.querySelectorAll('.section-divider');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            console.log('🔍 Filtre:', filter);

            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            if (filter === 'all') {
                cards.forEach(card => card.classList.remove('hidden'));
                dividers.forEach(div => div.style.display = 'block');
            } else {
                cards.forEach(card => {
                    if (card.getAttribute('data-category') === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });

                dividers.forEach(div => {
                    if (div.getAttribute('data-category') === filter) {
                        div.style.display = 'block';
                    } else {
                        div.style.display = 'none';
                    }
                });
            }

            // Scroll
            document.querySelector('.universities-grid-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    console.log('✅ Filtres configurés');
}

console.log('✅ universities.js chargé');
