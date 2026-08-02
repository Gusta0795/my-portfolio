// Gustavo Medeiros — portfolio (v4)
// Bilingual toggle. English lives directly in the HTML (the
// primary language, and the no-JS fallback); this file only needs
// to carry the Portuguese (secondary) translations and the small
// amount of logic to switch between them.

(function () {
  "use strict";

  var dict = {
    "role-tagline": "vCISO &amp; Consultor de Segurança da Informação",
    "nav-services": "Serviços",
    "nav-certifications": "Certificações",
    "nav-cases": "Casos de Sucesso",
    "nav-about": "Sobre",
    "nav-cta": "Fale comigo",

    "hero-h1": "Liderança Estratégica em <span>Cibersegurança</span> e Resiliência de Infraestrutura",
    "hero-sub": "Desenho, proteção e governança de ambientes de TI. Alinhamento técnico entre segurança digital e os objetivos financeiros do seu negócio.",
    "hero-cta-primary": "Ver casos de sucesso",
    "hero-cta-ghost": "Fale comigo",

    "fact-1-k": "Foco",
    "fact-1-v": "Redes, Linux &amp; Governança",
    "fact-2-k": "Certificações",
    "fact-3-k": "Atuação",

    "services-eyebrow": "Serviços",
    "services-h2": "Como posso ajudar a sua empresa",
    "service-1-title": "Segurança de Redes e Perímetro",
    "service-1-desc": "Implementação, auditoria e gerenciamento de firewalls de próxima geração (NGFW), VPNs seguras e políticas de acesso rigorosas.",
    "service-2-title": "Hardening e Infraestrutura Linux",
    "service-2-desc": "Auditoria, correção de vulnerabilidades e blindagem de servidores de missão crítica para garantir alta disponibilidade.",
    "service-3-title": "vCISO As-a-Service (Governança)",
    "service-3-desc": "Gestão de riscos, desenho de políticas de segurança da informação e preparação para conformidade regulatória.",

    "certs-eyebrow": "Certificações e Roadmap",
    "certs-h2": "Credenciais e trajetória de especialização",
    "certs-sub": "Cada credencial ativa linka para sua página oficial de verificação — basta substituir o link de exemplo pela URL pública do certificado.",
    "certs-active-h3": "Certificações Ativas",
    "cert-badge-active": "Ativa",
    "cert-1-desc": "Certificação voltada à administração e operação de soluções Fortinet, com conhecimentos em FortiGate, FortiOS, políticas de firewall, NAT, VPN/IPSec, HA e troubleshooting.",
    "cert-verify": "Verificar credencial",
    "cert-2-desc": "Certificação que demonstra conhecimentos fundamentais de administração de sistemas Linux, incluindo linha de comando, gerenciamento de arquivos, processos, usuários e permissões, pacotes, serviços e fundamentos de redes.",

    "roadmap-h3": "Roadmap de Especialização Contínua <span style=\"color:var(--text-faint); font-weight:500;\">(Em Progresso)</span>",
    "roadmap-badge": "Em progresso",
    "roadmap-1-title": "Governança e Fundamentos",
    "roadmap-1-desc": "Alinhado às diretrizes EXIN ISFS (Information Security Foundation).",
    "roadmap-2-title": "Segurança Avançada",
    "roadmap-2-desc": "Preparação técnica contínua baseada na CompTIA Security+.",
    "roadmap-3-title": "Gestão Executiva (vCISO)",
    "roadmap-3-desc": "Desenvolvimento de visão macro de riscos focado nas diretrizes CISSP.",

    "cases-eyebrow": "Casos de Sucesso",
    "cases-h2": "Portfólio técnico prático",
    "case-1-id": "PROJETO 01",
    "case-1-title": "Blindagem de Perímetro e Acesso Remoto Seguro",
    "case-label-challenge": "O Desafio",
    "case-1-challenge": "Empresa sofrendo com tentativas de invasão em acessos remotos de funcionários.",
    "case-label-action": "A Ação",
    "case-1-action": "Implementação de firewall Fortinet utilizando as melhores práticas do ecossistema NSE 4, com criptografia de ponta a ponta e autenticação de duplo fator.",
    "case-label-result": "O Resultado",
    "case-1-result": "Bloqueio de 100% dos ataques de força bruta e estabilização das conexões remotas.",
    "case-1-tag-remote": "Acesso Remoto",
    "case-2-id": "PROJETO 02",
    "case-2-title": "Hardening de Servidores Críticos de Aplicação",
    "case-2-challenge": "Servidores Linux locais vulneráveis e sem atualizações de segurança padronizadas.",
    "case-2-action": "Auditoria completa do sistema com base nas diretrizes LPIC-1, fechamento de portas desnecessárias e automação de patches de segurança.",
    "case-2-result": "Redução drástica da superfície de ataque e conformidade com requisitos mínimos de segurança de dados.",
    "case-2-tag-patch": "Automação de Patches",

    "about-eyebrow": "Perfil Executivo",
    "about-quote": "\u201cSou especialista em infraestrutura de TI com foco em segurança da informação, unindo a precisão técnica da administração de sistemas Linux e segurança Fortinet à visão estratégica de governança corporativa. Atuo como vCISO para desenhar ambientes resilientes, mitigar riscos de incidentes e garantir a continuidade dos negócios através de frameworks modernos de cibersegurança.\u201d",

    "closing-line": "Proteja a sua empresa hoje contra as <span>ameaças de amanhã</span>.",
    "footer-built": "Feito para GitHub Pages"
  };

  var metaDict = {
    en: {
      title: "Gustavo Medeiros — vCISO & Information Security Consultant",
      description: "Gustavo Medeiros — Strategic leadership in cybersecurity and infrastructure resilience. vCISO, network security, and Linux hardening."
    },
    pt: {
      title: "Gustavo Medeiros — vCISO & Consultor de Segurança da Informação",
      description: "Gustavo Medeiros — Liderança estratégica em cibersegurança e resiliência de infraestrutura. vCISO, segurança de redes e hardening Linux."
    }
  };

  var elements = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var enCache = new Map();
  elements.forEach(function (el) { enCache.set(el, el.innerHTML); });

  var toggleButtons = Array.prototype.slice.call(document.querySelectorAll(".lang-toggle__btn"));

  function applyLang(lang) {
    elements.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = (lang === "pt" && dict[key]) ? dict[key] : enCache.get(el);
    });

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    var meta = metaDict[lang] || metaDict.en;
    document.title = meta.title;
    var descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    toggleButtons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("site-lang", lang); } catch (e) { /* ignore */ }
  }

  toggleButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var initial = "en";
  try {
    var saved = localStorage.getItem("site-lang");
    if (saved === "en" || saved === "pt") initial = saved;
  } catch (e) { /* ignore */ }

  applyLang(initial);
})();
