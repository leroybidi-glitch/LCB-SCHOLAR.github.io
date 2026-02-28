/**
 * LCB-SCHOLAR - Base de données des universités chinoises
 * ======================================================
 * Liste complète des universités avec matières et types de bourses
 */

const universitiesData = {
    // ========== UNIVERSITÉS TOP TIER ==========
    topTier: [
        {
            id: 'tsinghua',
            name: {
                fr: 'Tsinghua University',
                en: 'Tsinghua University',
                ar: 'جامعة تسينغهوا'
            },
            location: {
                fr: 'Beijing',
                en: 'Beijing',
                ar: 'بكين'
            },
            ranking: '#12 mondial (THE 2026)',
            image: 'https://sspark.genspark.ai/cfimages?u1=i9IU9y%2FKMrz10C8mlVMVyPWTk17znKHoYwC2dd1nZDYUCnr9QVLdPR1cyJp0%2FF%2B%2F7VXYdOUV8iso1R8M4dbqmMC6pg82jjQtPTp%2FZT6FgjspAkDmGEdZ4HZYmySyoKQsBXRwOzC03hEZNbcCX3EnUPNOiTdO%2FVtJOtQp5M7JNsPv&u2=gZxGGC%2FGj7Guy7gv&width=2560',
            programs: [
                {
                    fr: 'Ingénierie Informatique',
                    en: 'Computer Engineering',
                    ar: 'هندسة الحاسوب',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Intelligence Artificielle',
                    en: 'Artificial Intelligence',
                    ar: 'الذكاء الاصطناعي',
                    level: ['Master', 'PhD']
                },
                {
                    fr: 'Génie Électrique',
                    en: 'Electrical Engineering',
                    ar: 'الهندسة الكهربائية',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Architecture',
                    en: 'Architecture',
                    ar: 'الهندسة المعمارية',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Physique',
                    en: 'Physics',
                    ar: 'الفيزياء',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Sciences des Matériaux',
                    en: 'Materials Science',
                    ar: 'علوم المواد',
                    level: ['Master', 'PhD']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Complète',
                    typeEn: 'Full Scholarship',
                    typeAr: 'منحة كاملة',
                    coverage: ['Frais de scolarité', 'Logement', 'Assurance santé', 'Subsistance mensuelle (3000-3500 RMB)'],
                    fee: '18870¥'
                },
                {
                    type: 'Bourse Partielle (1er Degré)',
                    typeEn: 'Partial Scholarship (1st Degree)',
                    typeAr: 'منحة جزئية (الدرجة الأولى)',
                    coverage: ['Frais de scolarité', 'Logement'],
                    fee: '16650¥'
                }
            ],
            tuitionFees: '30,000-50,000 RMB/an'
        },
        {
            id: 'peking',
            name: {
                fr: 'Peking University',
                en: 'Peking University',
                ar: 'جامعة بكين'
            },
            location: {
                fr: 'Beijing',
                en: 'Beijing',
                ar: 'بكين'
            },
            ranking: '#13 mondial (THE 2026)',
            image: 'https://sspark.genspark.ai/cfimages?u1=0OrJvklkAhSPHxkKPD15hbCv7cHjl1943ZWCsGE1wWxO7k6z4dREMxZuSDBL2Oe2MIzYeVk58piL5QnpH%2F0hwuLetgzza%2Btd1CR6BMhN6YGlL%2FvsV75ZaDHuIQ35wr9OsMni&u2=h7c%2BscNgQvnlnaE%2B&width=2560',
            programs: [
                {
                    fr: 'Médecine',
                    en: 'Medicine',
                    ar: 'الطب',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Relations Internationales',
                    en: 'International Relations',
                    ar: 'العلاقات الدولية',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Économie',
                    en: 'Economics',
                    ar: 'الاقتصاد',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Droit',
                    en: 'Law',
                    ar: 'القانون',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Littérature Chinoise',
                    en: 'Chinese Literature',
                    ar: 'الأدب الصيني',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Sciences Politiques',
                    en: 'Political Science',
                    ar: 'العلوم السياسية',
                    level: ['Bachelor', 'Master']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Complète',
                    typeEn: 'Full Scholarship',
                    typeAr: 'منحة كاملة',
                    coverage: ['Frais de scolarité', 'Logement', 'Assurance santé', 'Subsistance mensuelle (3000-3500 RMB)'],
                    fee: '18870¥'
                },
                {
                    type: 'Bourse Partielle (1er Degré)',
                    typeEn: 'Partial Scholarship (1st Degree)',
                    typeAr: 'منحة جزئية (الدرجة الأولى)',
                    coverage: ['Frais de scolarité', 'Logement'],
                    fee: '16650¥'
                }
            ],
            tuitionFees: '28,000-48,000 RMB/an'
        },
        {
            id: 'fudan',
            name: {
                fr: 'Fudan University',
                en: 'Fudan University',
                ar: 'جامعة فودان'
            },
            location: {
                fr: 'Shanghai',
                en: 'Shanghai',
                ar: 'شنغهاي'
            },
            ranking: '#36 mondial (THE 2026)',
            image: 'https://sspark.genspark.ai/cfimages?u1=YEfET5pOEF2E9xpiINA6src0jnL8PJ1bjDsVmqmxEBBvL%2B%2B5tcuf3eMXCoLzdtSa4fHshk7bUcvNoYx1xIkAktbV25jy5dbDVSRzJs5JIwL23RIg77qvuzuo7dXfyZaMW1nb8urCa3E%3D&u2=BRVsGO8IkGlatfUS&width=2560',
            programs: [
                {
                    fr: 'Business Administration (MBA)',
                    en: 'Business Administration (MBA)',
                    ar: 'إدارة الأعمال (ماجستير)',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Finance Internationale',
                    en: 'International Finance',
                    ar: 'المالية الدولية',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Marketing',
                    en: 'Marketing',
                    ar: 'التسويق',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Journalisme',
                    en: 'Journalism',
                    ar: 'الصحافة',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Pharmacie',
                    en: 'Pharmacy',
                    ar: 'الصيدلة',
                    level: ['Bachelor', 'Master', 'PhD']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Complète',
                    typeEn: 'Full Scholarship',
                    typeAr: 'منحة كاملة',
                    coverage: ['Frais de scolarité', 'Logement', 'Assurance santé', 'Subsistance mensuelle (3000 RMB)'],
                    fee: '18870¥'
                },
                {
                    type: 'Bourse Partielle (1er Degré)',
                    typeEn: 'Partial Scholarship (1st Degree)',
                    typeAr: 'منحة جزئية (الدرجة الأولى)',
                    coverage: ['Frais de scolarité', 'Logement'],
                    fee: '16650¥'
                },
                {
                    type: 'Bourse Partielle (2e Degré)',
                    typeEn: 'Partial Scholarship (2nd Degree)',
                    typeAr: 'منحة جزئية (الدرجة الثانية)',
                    coverage: ['Frais de scolarité uniquement'],
                    fee: '14650¥'
                }
            ],
            tuitionFees: '25,000-45,000 RMB/an'
        },
        {
            id: 'zhejiang',
            name: {
                fr: 'Zhejiang University',
                en: 'Zhejiang University',
                ar: 'جامعة تشجيانغ'
            },
            location: {
                fr: 'Hangzhou',
                en: 'Hangzhou',
                ar: 'هانغتشو'
            },
            ranking: '#39 mondial (THE 2026)',
            image: 'https://sspark.genspark.ai/cfimages?u1=PTHgrSYN1u7ddWJljNnLzm0XkARVIZ4Lcb40Qzc33DwZDWk6bq26d0aORGn90laCABC%2BsjpEVcKBL13qcK1Q7hyZLAbs8tlgLh9%2F58nYZ8BnKA7h7YQ5U4G8w0wtWA6E&u2=rrI3dgP2PSR0ibWa&width=2560',
            programs: [
                {
                    fr: 'Intelligence Artificielle',
                    en: 'Artificial Intelligence',
                    ar: 'الذكاء الاصطناعي',
                    level: ['Master', 'PhD']
                },
                {
                    fr: 'Science des Données',
                    en: 'Data Science',
                    ar: 'علم البيانات',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Biotechnologie',
                    en: 'Biotechnology',
                    ar: 'التكنولوجيا الحيوية',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Génie Mécanique',
                    en: 'Mechanical Engineering',
                    ar: 'الهندسة الميكانيكية',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Génie Civil',
                    en: 'Civil Engineering',
                    ar: 'الهندسة المدنية',
                    level: ['Bachelor', 'Master']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Complète',
                    typeEn: 'Full Scholarship',
                    typeAr: 'منحة كاملة',
                    coverage: ['Frais de scolarité', 'Logement', 'Assurance santé', 'Subsistance mensuelle (3000 RMB)'],
                    fee: '18870¥'
                },
                {
                    type: 'Bourse Partielle (1er Degré)',
                    typeEn: 'Partial Scholarship (1st Degree)',
                    typeAr: 'منحة جزئية (الدرجة الأولى)',
                    coverage: ['Frais de scolarité', 'Logement'],
                    fee: '16650¥'
                }
            ],
            tuitionFees: '26,000-46,000 RMB/an'
        },
        {
            id: 'sjtu',
            name: {
                fr: 'Shanghai Jiao Tong University',
                en: 'Shanghai Jiao Tong University',
                ar: 'جامعة شنغهاي جياو تونغ'
            },
            location: {
                fr: 'Shanghai',
                en: 'Shanghai',
                ar: 'شنغهاي'
            },
            ranking: '#69 mondial (UNIRANKS 2026)',
            image: 'https://sspark.genspark.ai/cfimages?u1=%2BCwbV7iZmZO8Jx5o3InjdIOy%2FPJzL0Gz66dS%2FpOxk6DUoNfL3UUZp9MZXtU2FQMxxGIRLJ6XmulPCvWzHKpO&u2=WU%2B4ys0w%2BB8vfU3q&width=2560',
            programs: [
                {
                    fr: 'Génie Mécanique',
                    en: 'Mechanical Engineering',
                    ar: 'الهندسة الميكانيكية',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Médecine Clinique',
                    en: 'Clinical Medicine',
                    ar: 'الطب السريري',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Génie Naval',
                    en: 'Naval Engineering',
                    ar: 'الهندسة البحرية',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Management',
                    en: 'Management',
                    ar: 'الإدارة',
                    level: ['Bachelor', 'Master', 'MBA']
                },
                {
                    fr: 'Automatisation',
                    en: 'Automation',
                    ar: 'الأتمتة',
                    level: ['Bachelor', 'Master']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Complète',
                    typeEn: 'Full Scholarship',
                    typeAr: 'منحة كاملة',
                    coverage: ['Frais de scolarité', 'Logement', 'Assurance santé', 'Subsistance mensuelle (3000 RMB)'],
                    fee: '18870¥'
                },
                {
                    type: 'Bourse Partielle (1er Degré)',
                    typeEn: 'Partial Scholarship (1st Degree)',
                    typeAr: 'منحة جزئية (الدرجة الأولى)',
                    coverage: ['Frais de scolarité', 'Logement'],
                    fee: '16650¥'
                }
            ],
            tuitionFees: '25,000-45,000 RMB/an'
        }
    ],

    // ========== UNIVERSITÉS ACCESSIBLES ==========
    accessible: [
        {
            id: 'bohai',
            name: {
                fr: 'Bohai University',
                en: 'Bohai University',
                ar: 'جامعة بوهاي'
            },
            location: {
                fr: 'Jinzhou, Liaoning',
                en: 'Jinzhou, Liaoning',
                ar: 'جينتشو، لياونينغ'
            },
            ranking: 'Régionale',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
            programs: [
                {
                    fr: 'Commerce International',
                    en: 'International Business',
                    ar: 'التجارة الدولية',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Langue et Culture Chinoises',
                    en: 'Chinese Language and Culture',
                    ar: 'اللغة والثقافة الصينية',
                    level: ['Bachelor', 'Language Year']
                },
                {
                    fr: 'Informatique',
                    en: 'Computer Science',
                    ar: 'علوم الحاسوب',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Tourisme et Hôtellerie',
                    en: 'Tourism and Hospitality',
                    ar: 'السياحة والضيافة',
                    level: ['Bachelor']
                },
                {
                    fr: 'Arts et Design',
                    en: 'Arts and Design',
                    ar: 'الفنون والتصميم',
                    level: ['Bachelor', 'Master']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Partielle (2e Degré)',
                    typeEn: 'Partial Scholarship (2nd Degree)',
                    typeAr: 'منحة جزئية (الدرجة الثانية)',
                    coverage: ['Frais de scolarité uniquement'],
                    fee: '14650¥'
                },
                {
                    type: 'Programme de Langue',
                    typeEn: 'Language Program',
                    typeAr: 'برنامج اللغة',
                    coverage: ['Frais de scolarité', 'Logement pour 1 an'],
                    fee: '12600¥'
                },
                {
                    type: 'Bourse Conditionnelle',
                    typeEn: 'Conditional Scholarship',
                    typeAr: 'منحة مشروطة',
                    coverage: ['Selon résultats académiques'],
                    fee: '10870¥'
                }
            ],
            tuitionFees: '15,000-20,000 RMB/an'
        },
        {
            id: 'jiangsu',
            name: {
                fr: 'Jiangsu University',
                en: 'Jiangsu University',
                ar: 'جامعة جيانغسو'
            },
            location: {
                fr: 'Zhenjiang, Jiangsu',
                en: 'Zhenjiang, Jiangsu',
                ar: 'تشنجيانغ، جيانغسو'
            },
            ranking: 'Régionale+',
            image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800',
            programs: [
                {
                    fr: 'Génie Automobile',
                    en: 'Automotive Engineering',
                    ar: 'هندسة السيارات',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Médecine',
                    en: 'Medicine',
                    ar: 'الطب',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Agriculture Moderne',
                    en: 'Modern Agriculture',
                    ar: 'الزراعة الحديثة',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Génie Électrique',
                    en: 'Electrical Engineering',
                    ar: 'الهندسة الكهربائية',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Chimie Appliquée',
                    en: 'Applied Chemistry',
                    ar: 'الكيمياء التطبيقية',
                    level: ['Bachelor', 'Master']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Partielle (2e Degré)',
                    typeEn: 'Partial Scholarship (2nd Degree)',
                    typeAr: 'منحة جزئية (الدرجة الثانية)',
                    coverage: ['Frais de scolarité uniquement'],
                    fee: '14650¥'
                },
                {
                    type: 'Programme de Langue',
                    typeEn: 'Language Program',
                    typeAr: 'برنامج اللغة',
                    coverage: ['Frais de scolarité', 'Logement pour 1 an'],
                    fee: '12600¥'
                },
                {
                    type: 'Bourse Conditionnelle',
                    typeEn: 'Conditional Scholarship',
                    typeAr: 'منحة مشروطة',
                    coverage: ['Selon résultats académiques'],
                    fee: '10870¥'
                }
            ],
            tuitionFees: '18,000-25,000 RMB/an'
        },
        {
            id: 'ningbo',
            name: {
                fr: 'Ningbo University',
                en: 'Ningbo University',
                ar: 'جامعة نينغبو'
            },
            location: {
                fr: 'Ningbo, Zhejiang',
                en: 'Ningbo, Zhejiang',
                ar: 'نينغبو، تشجيانغ'
            },
            ranking: 'Régionale+',
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
            programs: [
                {
                    fr: 'Sciences Marines',
                    en: 'Marine Sciences',
                    ar: 'العلوم البحرية',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Génie Logistique',
                    en: 'Logistics Engineering',
                    ar: 'هندسة اللوجستيات',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Commerce Électronique',
                    en: 'E-Commerce',
                    ar: 'التجارة الإلكترونية',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Génie Côtier',
                    en: 'Coastal Engineering',
                    ar: 'الهندسة الساحلية',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Langue Anglaise',
                    en: 'English Language',
                    ar: 'اللغة الإنجليزية',
                    level: ['Bachelor', 'Master']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Partielle (2e Degré)',
                    typeEn: 'Partial Scholarship (2nd Degree)',
                    typeAr: 'منحة جزئية (الدرجة الثانية)',
                    coverage: ['Frais de scolarité uniquement'],
                    fee: '14650¥'
                },
                {
                    type: 'Programme de Langue',
                    typeEn: 'Language Program',
                    typeAr: 'برنامج اللغة',
                    coverage: ['Frais de scolarité', 'Logement pour 1 an'],
                    fee: '12600¥'
                },
                {
                    type: 'Bourse Conditionnelle',
                    typeEn: 'Conditional Scholarship',
                    typeAr: 'منحة مشروطة',
                    coverage: ['Selon résultats académiques'],
                    fee: '10870¥'
                }
            ],
            tuitionFees: '20,000-28,000 RMB/an'
        },
        {
            id: 'chengdu',
            name: {
                fr: 'Chengdu University',
                en: 'Chengdu University',
                ar: 'جامعة تشنغدو'
            },
            location: {
                fr: 'Chengdu, Sichuan',
                en: 'Chengdu, Sichuan',
                ar: 'تشنغدو، سيتشوان'
            },
            ranking: 'Régionale',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
            programs: [
                {
                    fr: 'Arts Visuels',
                    en: 'Visual Arts',
                    ar: 'الفنون البصرية',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Commerce et Gestion',
                    en: 'Business and Management',
                    ar: 'التجارة والإدارة',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Animation et Jeux Vidéo',
                    en: 'Animation and Video Games',
                    ar: 'الرسوم المتحركة وألعاب الفيديو',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Développement Logiciel',
                    en: 'Software Development',
                    ar: 'تطوير البرمجيات',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Gastronomie Chinoise',
                    en: 'Chinese Gastronomy',
                    ar: 'فن الطهي الصيني',
                    level: ['Bachelor']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Partielle (2e Degré)',
                    typeEn: 'Partial Scholarship (2nd Degree)',
                    typeAr: 'منحة جزئية (الدرجة الثانية)',
                    coverage: ['Frais de scolarité uniquement'],
                    fee: '14650¥'
                },
                {
                    type: 'Programme de Langue',
                    typeEn: 'Language Program',
                    typeAr: 'برنامج اللغة',
                    coverage: ['Frais de scolarité', 'Logement pour 1 an'],
                    fee: '12600¥'
                },
                {
                    type: 'Bourse Conditionnelle',
                    typeEn: 'Conditional Scholarship',
                    typeAr: 'منحة مشروطة',
                    coverage: ['Selon résultats académiques'],
                    fee: '10870¥'
                }
            ],
            tuitionFees: '16,000-22,000 RMB/an'
        },
        {
            id: 'shenzhen',
            name: {
                fr: 'Shenzhen University',
                en: 'Shenzhen University',
                ar: 'جامعة شنتشن'
            },
            location: {
                fr: 'Shenzhen, Guangdong',
                en: 'Shenzhen, Guangdong',
                ar: 'شنتشن، قوانغدونغ'
            },
            ranking: 'Montante',
            image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800',
            programs: [
                {
                    fr: 'Informatique et Technologies',
                    en: 'IT and Technologies',
                    ar: 'تكنولوجيا المعلومات',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Fintech et Blockchain',
                    en: 'Fintech and Blockchain',
                    ar: 'التكنولوجيا المالية والبلوكتشين',
                    level: ['Master', 'PhD']
                },
                {
                    fr: 'Design Industriel',
                    en: 'Industrial Design',
                    ar: 'التصميم الصناعي',
                    level: ['Bachelor', 'Master']
                },
                {
                    fr: 'Intelligence Artificielle',
                    en: 'Artificial Intelligence',
                    ar: 'الذكاء الاصطناعي',
                    level: ['Bachelor', 'Master', 'PhD']
                },
                {
                    fr: 'Entrepreneuriat',
                    en: 'Entrepreneurship',
                    ar: 'ريادة الأعمال',
                    level: ['Bachelor', 'Master']
                }
            ],
            scholarships: [
                {
                    type: 'Bourse Partielle (2e Degré)',
                    typeEn: 'Partial Scholarship (2nd Degree)',
                    typeAr: 'منحة جزئية (الدرجة الثانية)',
                    coverage: ['Frais de scolarité uniquement'],
                    fee: '14650¥'
                },
                {
                    type: 'Programme de Langue',
                    typeEn: 'Language Program',
                    typeAr: 'برنامج اللغة',
                    coverage: ['Frais de scolarité', 'Logement pour 1 an'],
                    fee: '12600¥'
                },
                {
                    type: 'Bourse Conditionnelle',
                    typeEn: 'Conditional Scholarship',
                    typeAr: 'منحة مشروطة',
                    coverage: ['Selon résultats académiques'],
                    fee: '10870¥'
                }
            ],
            tuitionFees: '22,000-30,000 RMB/an'
        }
    ]
};

console.log('✅ Universities database loaded: ' + (universitiesData.topTier.length + universitiesData.accessible.length) + ' universities');
