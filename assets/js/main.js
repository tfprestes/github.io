// Premium Portfolio JavaScript - Thiago Prestes

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        offset: 100,
        delay: 0
    });
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#1e40af', '#3b82f6', '#6366f1', '#06b6d4']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#3b82f6',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Language System
let currentLang = localStorage.getItem('lang') || 'pt';

const translations = {
    pt: {
        'nav.home': 'Home',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Skills',
        'nav.resume': 'Currículo',
        'nav.contact': 'Contato',
        'hero.available': 'Disponível para oportunidades',
        'hero.badge': 'Projetos nacionais e vagas remotas internacionais',
        'hero.subtitle': 'Supervisor Sênior de TI/OT',
        'hero.line1': '+23 anos em Tecnologia | +10 anos em Automação Industrial',
        'hero.line2': 'Especialista em Redes Industriais & Cybersecurity OT',
        'hero.highlight1': 'Arquitetura OT resiliente para plantas críticas',
        'hero.highlight2': 'Programas de cybersecurity alinhados à ISA/IEC 62443',
        'hero.highlight3': 'Integração com times globais, fornecedores e EPCs',
        'hero.metricProjectsLabel': 'Projetos críticos',
        'hero.metricProjectsDesc': 'Transformações completas OT',
        'hero.metricPlantsLabel': 'Plantas monitoradas',
        'hero.metricPlantsDesc': 'Operação 24/7 no Brasil e EUA',
        'hero.metricTeamsLabel': 'Times integrados',
        'hero.metricTeamsDesc': 'TI, OT, manufatura e parceiros',
        'hero.downloadEN': 'Ver CV (EN)',
        'hero.downloadPT': 'Ver CV (PT)',
        'hero.contact': 'Fale comigo',
        'hero.trustLabel': 'Responsável por operações industriais reguladas',
        'hero.trustDescription': 'OT, cybersecurity, governança e inovação alinhadas a KPI executivos.',
        'hero.signalLabel': 'Command Center TI/OT',
        'hero.signalTitle': 'Monitoramento em tempo real',
        'hero.signalSubtitle': '5 sites conectados • 12 SLAs críticos',
        'hero.signalLive': 'Ao vivo',
        'hero.signalCycle': 'Ciclo médio de resposta',
        'hero.signalSLA': 'SLA crítico',
        'hero.signalAudit': 'Auditorias OT',
        'hero.metricStack1Label': 'Roadmap OT',
        'hero.metricStack1Desc': 'Expansão de SOC industrial & zero-trust',
        'hero.metricStack2Label': 'ROI médio',
        'hero.metricStack2Desc': 'Payback anual em projetos híbridos TI/OT',
        'hero.timelineLabel': 'Transformação recente',
        'hero.timelineItem1Title': 'Segmentação OT & migração de 180 PLCs',
        'hero.timelineItem1Desc': 'Nova malha redundante, hardening e visibilidade cibernética fim-a-fim.',
        'hero.timelineItem2Title': 'Governança unificada TI/OT',
        'hero.timelineItem2Desc': 'KPIs executivos conectados a disponibilidade, OEE e cybersecurity.',
        'about.title': 'Sobre Mim',
        'about.currentRole': 'Supervisor Sênior de TI/OT na Alibra Ingredientes S.A.',
        'about.p1': 'Engenheiro de Automação Industrial com mais de 23 anos de experiência em tecnologia, especializado em redes industriais, segurança cibernética OT e integração de sistemas. Supervisor Sênior de TI/OT na Alibra Ingredientes S.A., liderando equipes técnicas e projetos estratégicos de infraestrutura industrial.',
        'about.p2': 'Com formação em Pós-graduação em Engenharia de Redes Industriais e Tecnólogo em Redes de Computadores, possuo expertise comprovada em protocolos industriais (PROFINET, EtherNet/IP, OPC-UA, Modbus TCP), programação de CLPs (Siemens S7, Allen-Bradley, Schneider) e sistemas SCADA/HMI.',
        'about.p3': 'Localizado em Marechal Cândido Rondon – PR, estou disponível para projetos nacionais e vagas 100% remotas internacionais, especialmente nos Estados Unidos. Inglês técnico avançado para leitura e escrita de documentação técnica.',
        'project.badge': 'PROJETO EM DESTAQUE',
        'project.title': 'Redução de 42% no Downtime Crítico',
        'project.description': 'Implementação estratégica de infraestrutura industrial com monitoramento proativo e otimização de processos, resultando em redução de 42% no downtime crítico da planta nos últimos 3 anos na Alibra Ingredientes S.A.',
        'project.reduction': 'Redução no Downtime',
        'experience.title': 'Experiência Profissional',
        'exp.2023.period': '2023 – Atual',
        'exp.2023.title': 'Supervisor de Tecnologia da Informação e Tecnologia da Automação',
        'exp.2023.description': 'Liderança técnica em infraestrutura industrial, gestão de equipes, projetos estratégicos de TI/OT e implementação de soluções de automação industrial.',
        'exp.2015.period': '2015 – 2022',
        'exp.2015.title': 'Analista Sênior em Informática e Automação',
        'exp.2015.description': 'Análise e desenvolvimento de sistemas industriais, manutenção de infraestrutura de TI/OT, suporte técnico avançado e projetos de integração.',
        'exp.2013.period': '2013 – 2015',
        'exp.2013.title': 'Encarregado de TI',
        'exp.2013.description': 'Coordenação de equipe de TI, gestão de infraestrutura e suporte técnico para operações industriais.',
        'exp.2012.period': '2012 – 2013',
        'exp.2012.title': 'Técnico em Informática',
        'exp.2012.description': 'Suporte técnico, manutenção de equipamentos e infraestrutura de TI.',
        'exp.2002.period': '2002 – 2012',
        'exp.2002.title': '+10 anos em Infraestrutura TI',
        'exp.2002.company': 'Diversas Empresas',
        'exp.2002.description': 'Construção de base sólida em infraestrutura de TI, suporte técnico e manutenção de sistemas.',
        'skills.title': 'Competências Técnicas',
        'skills.networks': 'Redes Industriais',
        'skills.systems': 'Sistemas e Infraestrutura',
        'skills.certifications': 'Certificações NR',
        'education.title': 'Formação Acadêmica',
        'contact.infoTitle': 'Informações de Contato',
        'contact.phone': 'Telefone',
        'contact.location': 'Localização',
        'contact.linkedin': 'LinkedIn',
        'contact.whatsapp': 'WhatsApp',
        'contact.telegram': 'Telegram',
        'resume.title': 'Currículo',
        'resume.portuguese': 'Português',
        'resume.english': 'English',
        'resume.download': 'Download PDF',
        'resume.openNew': 'Open in New Tab',
        'resume.print': 'Print / Save PDF',
        'contact.title': 'Entre em Contato',
        'contact.name': 'Nome',
        'contact.email': 'E-mail',
        'contact.subject': 'Assunto',
        'contact.message': 'Mensagem',
        'contact.send': 'Enviar Mensagem',
        'footer.copyright': '© 2025 Thiago Fernando Vieira Prestes. Todos os direitos reservados.',
        'footer.ready': 'Available for national projects and 100% international remote positions (USA included)'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.resume': 'Resume',
        'nav.contact': 'Contact',
        'hero.available': 'Available for opportunities',
        'hero.badge': 'National projects and international remote positions',
        'hero.subtitle': 'Senior IT/OT Supervisor',
        'hero.line1': '+23 years in Technology | +10 years in Industrial Automation',
        'hero.line2': 'Industrial Networks & OT Cybersecurity Specialist',
        'hero.highlight1': 'Resilient OT architecture for critical plants',
        'hero.highlight2': 'Cybersecurity programs aligned with ISA/IEC 62443',
        'hero.highlight3': 'Integration with global teams, vendors and EPCs',
        'hero.metricProjectsLabel': 'Critical projects',
        'hero.metricProjectsDesc': 'End-to-end OT transformations',
        'hero.metricPlantsLabel': 'Plants monitored',
        'hero.metricPlantsDesc': '24/7 operations in Brazil and USA',
        'hero.metricTeamsLabel': 'Integrated teams',
        'hero.metricTeamsDesc': 'IT, OT, manufacturing & partners',
        'hero.downloadEN': 'View CV (EN)',
        'hero.downloadPT': 'View CV (PT)',
        'hero.contact': 'Get in Touch',
        'hero.trustLabel': 'Trusted by regulated industrial operations',
        'hero.trustDescription': 'OT, cybersecurity, governance and innovation aligned to executive KPIs.',
        'hero.signalLabel': 'IT/OT Command Center',
        'hero.signalTitle': 'Real-time monitoring',
        'hero.signalSubtitle': '5 connected sites • 12 critical SLAs',
        'hero.signalLive': 'Live',
        'hero.signalCycle': 'Average response cycle',
        'hero.signalSLA': 'Critical SLA',
        'hero.signalAudit': 'OT audits closed',
        'hero.metricStack1Label': 'OT roadmap',
        'hero.metricStack1Desc': 'Industrial SOC expansion & zero-trust',
        'hero.metricStack2Label': 'Average ROI',
        'hero.metricStack2Desc': 'Annual payback on IT/OT hybrid projects',
        'hero.timelineLabel': 'Latest transformation',
        'hero.timelineItem1Title': 'OT segmentation & 180 PLC migration',
        'hero.timelineItem1Desc': 'New redundant mesh, hardening and end-to-end cyber visibility.',
        'hero.timelineItem2Title': 'Unified IT/OT governance',
        'hero.timelineItem2Desc': 'Executive KPIs tied to availability, OEE and cybersecurity.',
        'about.title': 'About Me',
        'about.currentRole': 'Senior IT/OT Supervisor at Alibra Ingredientes S.A.',
        'about.p1': 'Industrial Automation Engineer with over 23 years of experience in technology, specialized in industrial networks, OT cybersecurity and systems integration. Senior IT/OT Supervisor at Alibra Ingredientes S.A., leading technical teams and strategic industrial infrastructure projects.',
        'about.p2': 'With a Postgraduate degree in Industrial Network Engineering and a Technology degree in Computer Networks, I have proven expertise in industrial protocols (PROFINET, EtherNet/IP, OPC-UA, Modbus TCP), PLC programming (Siemens S7, Allen-Bradley, Schneider) and SCADA/HMI systems.',
        'about.p3': 'Located in Marechal Cândido Rondon – PR, I am available for national projects and 100% international remote positions, especially in the United States. Advanced technical English for reading and writing technical documentation.',
        'project.badge': 'FEATURED PROJECT',
        'project.title': '42% Critical Downtime Reduction',
        'project.description': 'Strategic implementation of industrial infrastructure with proactive monitoring, resulting in significant reduction of unplanned stops and increased productivity.',
        'project.reduction': 'Downtime Reduction',
        'experience.title': 'Professional Experience',
        'exp.2023.period': '2023 – Current',
        'exp.2023.title': 'Information Technology and Automation Technology Supervisor',
        'exp.2023.description': 'Technical leadership in industrial infrastructure, team management, strategic IT/OT projects and implementation of industrial automation solutions.',
        'exp.2015.period': '2015 – 2022',
        'exp.2015.title': 'Senior IT and Automation Analyst',
        'exp.2015.description': 'Analysis and development of industrial systems, IT/OT infrastructure maintenance, advanced technical support and integration projects.',
        'exp.2013.period': '2013 – 2015',
        'exp.2013.title': 'IT Supervisor',
        'exp.2013.description': 'IT team coordination, infrastructure management and technical support for industrial operations.',
        'exp.2012.period': '2012 – 2013',
        'exp.2012.title': 'IT Technician',
        'exp.2012.description': 'Technical support, equipment maintenance and IT infrastructure.',
        'exp.2002.period': '2002 – 2012',
        'exp.2002.title': '+10 years in IT Infrastructure',
        'exp.2002.company': 'Various Companies',
        'exp.2002.description': 'Building a solid foundation in IT infrastructure, technical support and systems maintenance.',
        'skills.title': 'Technical Skills',
        'skills.networks': 'Industrial Networks',
        'skills.systems': 'Systems and Infrastructure',
        'skills.certifications': 'NR Certifications',
        'education.title': 'Education',
        'contact.infoTitle': 'Contact Information',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.linkedin': 'LinkedIn',
        'contact.whatsapp': 'WhatsApp',
        'contact.telegram': 'Telegram',
        'resume.title': 'Resume',
        'resume.portuguese': 'Portuguese',
        'resume.english': 'English',
        'resume.download': 'Download PDF',
        'resume.openNew': 'Open in New Tab',
        'resume.print': 'Print / Save PDF',
        'contact.title': 'Get in Touch',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        'footer.copyright': '© 2025 Thiago Fernando Vieira Prestes. All rights reserved.',
        'footer.ready': 'Available for national projects and 100% international remote positions (USA included)'
    }
};

// Update language function
window.updateLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
};

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('shadow-2xl');
    } else {
        header.classList.remove('shadow-2xl');
    }
    
    lastScroll = currentScroll;
});

// Contact Form Handler (Formspree)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;
        
        try {
            // Replace YOUR_FORM_ID with your Formspree endpoint
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                formMessage.className = 'p-4 rounded-lg bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
                formMessage.textContent = currentLang === 'pt' 
                    ? 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
                    : 'Message sent successfully! I will contact you soon.';
                formMessage.classList.remove('hidden');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formMessage.className = 'p-4 rounded-lg bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
            formMessage.textContent = currentLang === 'pt'
                ? 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente.'
                : 'Error sending message. Please try again or contact directly.';
            formMessage.classList.remove('hidden');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate progress bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.bg-gradient-to-r');
            if (progressBar) {
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card').forEach(card => {
    if (card.querySelector('.bg-gradient-to-r')) {
        observer.observe(card);
    }
});

// Print Resume Function
window.printResume = function() {
    const resumeSection = document.querySelector('#resume');
    if (resumeSection) {
        const iframe = resumeSection.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.print();
        } else {
            // Fallback: print current page
            window.print();
        }
    }
};

// Initialize resume tab (Alpine.js will handle this, but we set default)
document.addEventListener('DOMContentLoaded', () => {
    // Set default resume tab
    if (typeof Alpine !== 'undefined') {
        Alpine.data('resumeTab', () => ({ resumeTab: 'pt' }));
    }
});
