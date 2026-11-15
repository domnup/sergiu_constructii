# Sergiu Construcții Proiect – site de prezentare

Site static, în limba română, pentru o firmă de dulgherie, acoperișuri și hidroizolații.

## Cum deschizi site-ul

1. Dezarhivează tot conținutul, păstrând folderul `assets/` lângă `index.html`.
2. Deschide `index.html` cu Chrome, Edge sau alt browser modern. Nu este necesar un server sau instalarea unor pachete.
3. Pentru publicare, încarcă `index.html`, `styles.css`, `script.js` și folderul `assets/` pe găzduirea web.

## Important: datele de contact

Datele reale de telefon, WhatsApp și email NU au fost furnizate și NU au fost inventate.
Pentru ca vizitatorii să te poată contacta, editează primele rânduri din `script.js`:

```js
const CONTACT = {
  phone: '+40 ...',
  whatsapp: '40...', // numai cifre; format internațional
  email: 'adresa@firma.ro'
};
```

**Formularul** compune un mesaj pe care vizitatorul îl poate copia. Dacă adaugi `email`, butonul va deschide aplicația de email a vizitatorului, cu textul pregătit. Dacă nu există email, dar adaugi numărul WhatsApp, butonul va deschide WhatsApp. Site-ul NU trimite automat un formular pe server, NU salvează datele vizitatorilor și NU pretinde că a expediat o cerere.

Pentru formular care trimite cererile automat pe email, va fi necesar un serviciu de formulare / backend și configurare GDPR corespunzătoare.

## Fotografii

Au fost identificate 20 de fotografii în arhiva originală; 3 au fost dubluri identice (fotografiile 9, 10 și 11). Site-ul folosește toate cele 17 imagini unice, optimizate WebP, fără fotografii stock. Etichetele galeriei descriu ce este vizibil în fotografii.

## Personalizare

- Titluri, texte și servicii: `index.html`.
- Culori și aspect: `styles.css` (`:root` la început).
- Galerie, meniu, formular, număr de contact: `script.js`.
- Fotografii: `assets/`.
- Confirmă aria efectivă de deplasare și adaugă numărul real de telefon înainte de promovarea finală.

## Ce include

Layout responsive, navigație mobilă, listă de servicii, galerie cu filtre și vizualizare mărită (inclusiv săgeți și gesturi swipe), secțiune de prezentare, pașii colaborării, formular pentru pregătirea unei cereri și metadate SEO de bază. Nu folosește cookies de tracking.

## Fonturi

Fonturile DM Sans și Manrope sunt încărcate opțional din Google Fonts. Site-ul rămâne funcțional și fără conexiune la internet, folosind fonturile de rezervă (Arial).

## GitHub (repository oficial)

Repository: https://github.com/domnup/sergiu_constructii

Pe Windows, cu **Git for Windows** instalat, rulează `PUSH_TO_GITHUB.bat` din folderul proiectului. Scriptul inițializează repo-ul local dacă este necesar, setează ramura `main`, configurează `origin`, creează commit-ul și încearcă să urce toate fișierele pe GitHub. Git poate solicita autentificarea în contul GitHub. Dacă există deja un alt remote `origin`, scriptul se oprește pentru siguranță.

Alternativ, din PowerShell în folderul proiectului:

```powershell
git init
git branch -M main
git remote add origin https://github.com/domnup/sergiu_constructii.git
git add .
git commit -m "Initial Sergiu Constructii Proiect website"
git push -u origin main
```

Atenție: repository-ul este **public**, deci fotografiile și codul încărcate acolo vor deveni publice. Acest pas publică fișierele în GitHub, **nu activează automat găzduirea site-ului**. Pentru GitHub Pages trebuie configurată separat sursa în Settings → Pages.

## Actualizare SEO locală – Oradea, Bihor

- Titlul paginii, descrierea SEO, Open Graph și conținutul vizibil menționează **Oradea, județul Bihor, România**.
- A fost adăugată o secțiune „Zona de activitate” și o întrebare relevantă în FAQ, fără afirmații neconfirmate despre întreaga arie de deplasare.
- Formularul include acum un câmp obligatoriu „Localitatea lucrării”, inclus în mesajul pregătit pentru client; **nu trimite automat solicitările**.
- A fost remediată lățimea excesivă a secțiunii „Despre noi” pe ecrane înguste, care crea derulare orizontală.
- Au fost adăugate o adresă URL canonică, `sitemap.xml` și date structurate JSON-LD cu tipurile `WebSite` și `Organization`.
- **NU** a fost publicată o adresă de stradă, un telefon, un email sau un program de lucru inventat. Datele mai complete de tip `LocalBusiness` pot fi adăugate doar după ce informațiile reale au fost confirmate.

### Când cumpărăm domeniul

Înlocuiește peste tot URL-ul temporar `https://domnup.github.io/sergiu_constructii/` cu adresa finală, în special în:

- `index.html`: `rel=canonical`, `og:url`, `og:image` și datele JSON-LD
- `sitemap.xml`: `<loc>`

După mutarea pe un hosting potrivit pentru activitatea comercială, configurează domeniul în contul de hosting, verifică HTTPS, înregistrează domeniul în **Google Search Console** și transmite sitemapul. Nu crea pagini cu servicii în localități în care firma nu operează în realitate.

### Date necesare înainte de promovare

1. Numărul real de telefon / WhatsApp și adresa email de contact.
2. Confirmarea localităților în care echipa poate prelua lucrări (deocamdată doar **Oradea** este cunoscută).
3. Domeniul ales și serviciul de găzduire.
4. Dacă se dorește, integrarea unui serviciu real pentru trimiterea formularului și informarea GDPR asociată.

### Publică această versiune prin Pull Request

1. Dezarhivează arhiva ZIP.
2. Rulează `UPLOAD_ORADEA_SEO.bat` pe Windows cu Git for Windows instalat și GitHub autentificat.
3. Scriptul creează ramura `improvements/oradea-local-seo-2026-11-15` din versiunea curentă `main` și publică numai `index.html`, `styles.css`, `script.js`, `README.md` și `sitemap.xml`. Nu modifică `main` automat.
4. Creează un Pull Request la `https://github.com/domnup/sergiu_constructii/compare/main...improvements/oradea-local-seo-2026-11-15`.
5. Verifică modificările înainte de a face merge. GitHub Pages va folosi noua versiune numai după merge și deployment.

Nu utiliza vechiul `PUSH_TO_GITHUB.bat` sau `UPLOAD_IMPROVEMENTS.bat` pentru această actualizare.


## Pagini de servicii și portofoliu

Au fost adăugate șase pagini detaliate de servicii, un portofoliu cu 17 fotografii unice, precum și pages.css/pages.js. Titlul principal al homepage-ului rămâne exact neschimbat. Cardurile serviciilor deschid paginile dedicate; butoanele de ofertă preselectează serviciul în formular.

Imaginile sunt grupate după conținutul lor, nu după proiecte sau adrese inventate. Nu există fotografii dedicate verificate pentru un montaj complet de țiglă ceramică sau jgheaburi: paginile respective explică explicit că imaginile oferă doar context. URL-urile canonice folosesc momentan GitHub Pages și trebuie actualizate după cumpărarea domeniului. Contactele și formularul de trimitere reală rămân de configurat.


## Premium preview and Netlify-ready enquiry (client approval pending)

This branch introduces premium presentation improvements and a real delivery path prepared **but not activated**. The homepage headline stays exactly the same.

### Safety / preview mode
- In `script.js`, `ENQUIRY_MODE = 'preview'` is the default. It only formats and displays the visitor's enquiry in their browser. **No network request sends personal details** from the JavaScript form in preview mode. The submit control is initially disabled until JavaScript loads, and the message clearly states that it has not been sent.
- The form does not currently have `data-netlify="true"`; it is **not registered** as a Netlify form. The code is explicitly not production-ready for real delivery.
- The site currently has no verified company phone, email, or privacy policy. Don't ask customers to submit personal information via the demo.

### How to activate after written customer approval
1. Deploy the site to an approved Netlify project. Enable **Forms → Form detection** and redeploy after enabling detection.
2. In `index.html`, change the opening quote form element to `<form id="quote-form" name="cerere-oferta" method="POST" action="/" data-netlify="true" netlify-honeypot="company-site" data-enquiry-mode="netlify">`. Keep the existing hidden `form-name` input and honeypot field. Netlify must see the static HTML at deploy time.
3. In `script.js`, switch `ENQUIRY_MODE` from `'preview'` to `'netlify'` only after form detection is confirmed.
4. Add the client's verified email/phone/WhatsApp and an accurate privacy notice including controller identity, purpose, lawful basis, retention, processors and contact details. Update the form's privacy note/link accordingly; consult the client's legal requirements before collecting live enquiries.
5. In Netlify Forms, set the notification destination and confirm it. Verify new submissions appear in the Forms dashboard. Configure anti-spam and agreed data retention/access controls.
6. Test with a genuine end-to-end enquiry: validation, honeypot, successful submission, notification delivery, failed-network feedback, mobile layout and accessibility. Do not advertise the form as working until these tests pass.
7. After custom domain is chosen, update canonical URLs, Open Graph URLs, sitemap and any privacy links.

**Important:** A successful HTTP response does not prove an email notification reached the inbox. Confirm both submission storage and delivery during production testing. For the preview branch and GitHub Pages, no customer enquiry is transmitted to Netlify.

Netlify references:
- https://docs.netlify.com/manage/forms/setup/
- https://docs.netlify.com/manage/forms/spam-filters/
- https://docs.netlify.com/manage/forms/submissions/
