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
- Adaugă regiunea deservită și numărul de telefon al firmei înainte de publicarea finală.

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

## Îmbunătățiri de pregătire pentru lansare

- Cele șase linkuri „Discută proiectul” din cardurile serviciilor deschid formularul cu serviciul potrivit deja selectat.
- Fotografiile au dimensiuni explicite și decodare asincronă; culorile linkurilor mici au fost ajustate pentru lizibilitate.
- Datele de contact necompletate și formularul fără expediere sunt marcate clar. **Nu considera formularul activ pentru primirea cererilor** până nu configurezi numărul/emailul.
- Linkul Open Graph către fotografie este momentan absolut și folosește adresa temporară GitHub Pages; **actualizează-l la domeniul final**.
- Înainte de lansare, completează telefonul, WhatsApp-ul, emailul și zona deservită. Recomandat: adaugă o metodă de trimitere reală a formularului, informații despre protecția datelor și pagini legale potrivite modului de operare.
- Un domeniu propriu nu schimbă singur furnizorul de hosting. Pentru site-ul comercial al firmei, folosește un furnizor care permite găzduire comercială și conectează repository-ul GitHub ca sursă de cod. GitHub Pages nu este conceput pentru site-uri comerciale.

- A fost adăugată o secțiune FAQ cu răspunsuri bazate numai pe serviciile menționate de firmă, fără promisiuni inventate.

## Publică îmbunătățirile pentru revizuire (fără modificarea site-ului live)

Folosește **`UPLOAD_IMPROVEMENTS.bat`** din această arhivă pe Windows (necesită Git for Windows și autentificare GitHub). Scriptul clonează repository-ul într-un folder temporar, creează ramura `improvements/site-review-2026-11-15`, copiază numai cele 4 fișiere modificate, apoi publică acea ramură. Nu modifică `main`.

După finalizare, mergi la: https://github.com/domnup/sergiu_constructii/compare/main...improvements/site-review-2026-11-15 și creează un Pull Request. **Nu folosi `PUSH_TO_GITHUB.bat` pentru această actualizare**; acesta a fost creat pentru încărcarea inițială a site-ului.
