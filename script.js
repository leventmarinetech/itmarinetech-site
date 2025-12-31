const STRINGS = {
  en: {
    navServices: "Services",
    navContact: "Contact",
    kicker: "Marine Electrical & Automation Support",
    h1: "Fast & Reliable Marine Electrical Solutions",
    slogan: "Fault finding, maintenance, and commissioning — fast and reliable.",
    rotatingLabel: "We support:",
    ctaEmail: "Email",
    ctaWhatsApp: "WhatsApp",
        contactEmailBtn: "Contact via Email",
    
    contactWhatsAppBtn: "Message us on WhatsApp",addrTitle: "Address",
    addrUsaLabel: "USA:",
    addrTrLabel: "Turkey:",
    addrUsa: "Wyoming, USA",
    
    addrUsaNote: "Registered office address for legal correspondence",
    telLabel: "Tel:",
    whatsappLabel: "WhatsApp:",addrTr: "Velibaba Mah. Filika Sokak No:1, Pendik / İstanbul",

    sideTitle: "Onboard-ready support",
    sideNote: "Focused on troubleshooting and uptime for commercial vessels.",
    tile1Title: "Response",
    tile1Desc: "Clear problem definition, fast isolation, safe fix.",
    tile2Title: "Documentation",
    tile2Desc: "Test results, photos, and handover notes when needed.",
    tile3Title: "Standards",
    tile3Desc: "Best practices for marine electrical work and safety.",
    tile4Title: "Coverage",
    tile4Desc: "Remote guidance + onboard service support.",
    secServicesTitle: "Core services",
    secServicesDesc: "A focused set of services that covers most shipboard electrical and automation problems.",
    secContactTitle: "Contact",
    secContactDesc: "Reach out by email, or scan the QR code to message on WhatsApp.",
    qrLabel: "",
    footer: "© " + new Date().getFullYear() + " Levent Marine Electro Technical Services. All rights reserved."},
  tr: {
    navServices: "Servisler",
    navContact: "İletişim",
    kicker: "Gemi Elektrik & Otomasyon Desteği",
    h1: "Hızlı ve Güvenilir Gemi Elektrik Çözümleri",
    slogan: "Arıza tespiti, bakım ve devreye alma — hızlı ve güvenilir.",
    rotatingLabel: "Servis verdiğimiz alanlar:",
    ctaEmail: "E‑posta",
    ctaWhatsApp: "WhatsApp",
        contactEmailBtn: "E‑posta ile İletişim",
    
    contactWhatsAppBtn: "WhatsApp’tan Mesaj",addrTitle: "Adres",
    addrUsaLabel: "USA:",
    addrTrLabel: "Türkiye:",
    addrUsa: "Wyoming, USA",
    
    addrUsaNote: "Yasal yazışmalar için kayıtlı ofis adresi",
    telLabel: "Tel:",
    whatsappLabel: "WhatsApp:",addrTr: "Velibaba Mah. Filika Sokak No:1, Pendik / İstanbul",

    sideTitle: "Gemide kullanıma hazır destek",
    sideNote: "Ticari gemilerde arıza tespiti ve sürekliliğe odaklı.",
    tile1Title: "Müdahale",
    tile1Desc: "Net arıza tanımı, hızlı izolasyon, güvenli çözüm.",
    tile2Title: "Dokümantasyon",
    tile2Desc: "Gerekirse test sonuçları, fotoğraf ve devir notu.",
    tile3Title: "Standart",
    tile3Desc: "Gemi elektriği için güvenlik ve iyi uygulamalar.",
    tile4Title: "Kapsam",
    tile4Desc: "Uzaktan yönlendirme + onboard servis desteği.",
    secServicesTitle: "Ana servisler",
    secServicesDesc: "Gemi elektrik ve otomasyon arızalarının çoğunu kapsayan odaklı servis listesi.",
    secContactTitle: "İletişim",
    secContactDesc: "E‑posta ile ulaşın veya WhatsApp için QR kodu okutun.",
    qrLabel: "",
    footer: "© " + new Date().getFullYear() + " Levent Marine Electro Technical Services. Tüm hakları saklıdır."}
};

const SERVICES = [
  { key: "power", en: "Electrical & Power Systems (PMS)", tr: "Elektrik & Güç Sistemleri (PMS)" },
  { key: "automation", en: "Automation & Control Systems", tr: "Otomasyon & Kontrol Sistemleri" },
  { key: "sensors", en: "Remote I/O & Sensors (PT100, Pressure, Level, etc.)", tr: "Remote I/O & Sensörler (PT100, basınç, seviye vb.)" },
  { key: "fire", en: "Fire Alarm System", tr: "Yangın Alarm Sistemi" },
  { key: "crane", en: "Crane Electrical System", tr: "Kreyn Elektrik Sistemi" },
  { key: "winch", en: "Winch & Mooring System", tr: "Vinç & Mooring Sistemi" },
  { key: "steering", en: "Steering Gear Electrical System", tr: "Dümen Makinesi Elektrik Sistemi" },
  { key: "hatch", en: "Hatch Cover Electrical System", tr: "Hatch Cover Elektrik Sistemi" },
  { key: "ballast", en: "Ballast Water Treatment System", tr: "Balast Suyu Arıtma Sistemi" },
  { key: "tools", en: "Troubleshooting • Preventive Maintenance • Commissioning & Testing", tr: "Arıza tespiti • Periyodik bakım • Devreye alma & Test" }
];

const ICONS = {
  power: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6z"/></svg>`,
  automation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21V12"/><path d="M12 8V3"/><path d="M20 21v-9"/><path d="M20 8V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 12h4"/></svg>`,
  sensors: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4 4 0 1 0 5 0Z"/><path d="M12 17v-7"/></svg>`,
  fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-3-10 0 0-2 2-2 4-1-2-3-3-4-6-3 4-6 7-6 12a7 7 0 0 0 8 7Z"/></svg>`,
  crane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16"/><path d="M6 20V6l4-2v16"/><path d="M10 4h8l-3 6h-5z"/><path d="M18 4v8"/><path d="M18 12h-3"/><path d="M15 12v4a2 2 0 0 0 4 0v-1"/></svg>`,
  winch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h6"/><path d="M15 12h6"/><path d="M12 3v6"/><path d="M12 15v6"/></svg>`,
  steering: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><path d="M12 3v3"/><path d="M21 12h-3"/><path d="M12 21v-3"/><path d="M3 12h3"/></svg>`,
  hatch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 10h8"/><path d="M8 14h8"/></svg>`,
  ballast: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z"/></svg>`,
  tools: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6.3 6.3 2.7 2.7 6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-2.7-2.7 3-3Z"/></svg>`
};

function setLang(lang){
  const s = STRINGS[lang] || STRINGS.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (s[key]) el.textContent = s[key];
  });
  // update rotating list
  startRotator(lang);
  // toggle button label
  const btn = document.getElementById("langBtn");
  btn.textContent = (lang === "en") ? "TR" : "EN";
  localStorage.setItem("lm_lang", lang);
}

let rotTimer = null;
let rotIndex = 0;

function startRotator(lang){
  const list = SERVICES.map(s => ({ key: s.key, text: (s[lang] || s.en) }));
  const textEl = document.getElementById("rotText");
  const iconEl = document.getElementById("rotIcon");
  rotIndex = 0;
  if (rotTimer) clearInterval(rotTimer);

  const show = ()=>{
    textEl.style.opacity = 0;
    if (iconEl) iconEl.style.opacity = 0;
    setTimeout(()=>{
      const item = list[rotIndex % list.length];
      textEl.textContent = item.text;
      if (iconEl) {
        iconEl.innerHTML = ICONS[item.key] || "";
        iconEl.style.opacity = 1;
      }
      textEl.style.opacity = 1;
      rotIndex++;
    }, 220);
  };

  show();
  rotTimer = setInterval(show, 2500);
}


document.addEventListener("DOMContentLoaded", ()=>{
  const saved = localStorage.getItem("lm_lang");
  setLang(saved || "en");

  document.getElementById("langBtn").addEventListener("click", ()=>{
    const current = document.documentElement.lang || "en";
    setLang(current === "en" ? "tr" : "en");
  });
});