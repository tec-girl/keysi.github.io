// KEYSI KUNZ — menú móvil, animación al hacer scroll e idiomas (ES · EN · DE · PT · 中文)
(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ================= I18N ================= */
  var I18N = {
    en: {
      "pageTitle": "KEYSI KUNZ — Fashion Designer · Elite Runway Model · Keysi Models",
      "nav.runway": "Runways", "nav.brand": "The Brand", "nav.fencing": "Fencing", "nav.contact": "Contact",
      "hero.kicker": "Puebla · Paris · Latin America", "hero.presenta": "presents",
      "hero.roles": "International Fashion Designer &nbsp;·&nbsp; Elite Runway Model<br>Founder &amp; Director — <strong>Keysi Models</strong>",
      "hero.season": "PERMANENT COLLECTION — Fashion, Fencing & Pole Dance",
      "hero.btnProgram": "View the program", "hero.btnBook": "Bookings &amp; contact",
      "marquee": "DESIGNER ✦ ELITE MODEL ✦ KEYSI MODELS ✦ PARIS FASHION WEEK ✦ FENCER ✦ POLE DANCER ✦ 케이시 쿤즈 ✦ PUEBLA — MEXICO ✦&nbsp;",
      "prog.title": "Runway Program",
      "prog.sub": "My whole world, like a great fashion event: each section is a look on the runway. Tap any look to jump straight to it.",
      "prog.l1": "International Runways", "prog.n1": "Paris · Mexico · Latin America",
      "prog.l2": "Keysi Models — The Agency", "prog.n2": "Representation · Training · Bookings",
      "prog.l3": "Keysi Kunz — The Brand", "prog.n3": "Clothing &amp; accessories, since 2022",
      "prog.n4": "Foil &amp; épée · National medalist", "prog.n5": "Performer &amp; instructor",
      "prog.l6": "Contact &amp; Bookings",
      "nav.news": "News",
      "news.title": "News: Fashion & Fencing",
      "news.sub": "Recent headlines from fashion and fencing channels, refreshed when the page loads.",
      "news.fashion": "Fashion",
      "news.fencing": "Fencing",
      "news.more": "More news ↗", "prog.n6": "Let's take the stage",
      "run.sub": "Co-creator and model on international fashion stages.",
      "run.c1tag": "Paris · 2024",
      "run.c1p": "Co-creator and model with the house of Florentina Leitner, presented at the SPHERE showroom of the Fédération de la Haute Couture et de la Mode (FHCM) during Paris Fashion Week.",
      "run.c2tag": "Paris · 2025",
      "run.c2p": "Co-creator and model with Vautrait, a house on the official Paris Fashion Week calendar and LVMH Prize semi-finalist, renowned for its exceptional tailoring and draping.",
      "run.c3tag": "Paris",
      "run.c3p": "Co-author and model at About A Worker, the Paris collaborative project by Kim Hou and Paul Boulenger that turns the hands that make fashion into designers.",
      "run.c4tag": "Paris · May 2026",
      "run.c4p": "Appearance in a red dress at the Palais Galliera, the City of Paris Fashion Museum, during La Nuit des Musées, Europe's great night of museums.",
      "run.c5tag": "Mexico · Latin America", "run.c5h": "Runways &amp; presentations",
      "run.c5p": "Presentations of my brand and work as an Elite model on runways in Mexico and Latin America, bringing Puebla design to the stage.",
      "ag.sub": "My modeling agency in Puebla, founded in 2023. I am its Founder &amp; Director.",
      "ag.tag": "Service", "ag.c1h": "Representation",
      "ag.c1p": "Representation of models for brands, designers and productions looking for professional talent.",
      "ag.c2h": "Training", "ag.c2p": "Complete model training: runway, projection, posture and stage presence.",
      "ag.c3p": "Production of and participation in fashion shows and events with a professional seal.",
      "ag.c4p": "Bookings for campaigns, editorials, events and brands in Mexico and abroad.",
      "ag.cta": "Hire the agency",
      "marca.sub": "My clothing and accessories brand, founded in 2022.",
      "marca.h": "Design by my own hands",
      "marca.p1": "I design and create clothing and accessories with their own identity. My signature in accessories: <strong>earrings and pieces with hand-made embroidery</strong>, Mexican artisanal detail taken to the runway.",
      "marca.p2": "Education: Bachelor's degree in Fashion Design and Management — <strong>TROZMER Centro Universitario, Puebla (2025)</strong>.",
      "marca.menuH": "Brand menu",
      "marca.m1": "Accessories — @keyss.accesorios <span>Instagram ↗</span>",
      "marca.m2": "Clothing &amp; runways — @key_si_kunz <span>Instagram ↗</span>",
      "marca.m3": "Presentations in Paris <span>Look 01 ↗</span>",
      "marca.m4": "Sales &amp; collaborations <span>Contact ↗</span>",
      "esg.sub": "Professional fencer in foil and épée. I have practiced since I was 6 and won medals since I was 12, with Club Alpha (Titanes) of Puebla.",
      "esg.y15h": "Medalist — 2015 National Olympics",
      "esg.y15p": "Fencing medalist representing Puebla at the 2015 National Olympics, interviewed by CEID Puebla.",
      "esg.yt": "▶ Watch the interview on YouTube",
      "esg.y16h": "Bronze — 2016 National Olympics",
      "esg.y16p": "Bronze medal in individual foil, 14–15 age category, at the 2016 National Olympics — recorded by Poblanerías. That same year, silver in category C at the Club Alpha Copa Jenkins.",
      "esg.y19h": "Bronze — 2019 National Olympics",
      "esg.y19p": "Bronze medal in team foil at the 2019 National Olympics, with Club Alpha (Titanes). Coach: Miguel León.",
      "pole.sub": "Professional Pole Dance Performer &amp; Instructor — on stage and in class since I was 18.",
      "pole.tag": "Classes", "pole.tag2": "Stage",
      "pole.c1h": "In person", "pole.c1p": "In-person pole dance classes in Puebla, for all levels.",
      "pole.c2h": "Online", "pole.c2p": "Online classes from wherever you are, with personalized follow-up.",
      "pole.c3p": "Professional shows and performances for events and productions.",
      "pole.book": "Book your class or a performance via <a class=\"inline-link\" href=\"https://www.linkedin.com/in/keysi-kunz\" target=\"_blank\" rel=\"noopener\">LinkedIn</a> or <a class=\"inline-link\" href=\"https://t.me/Dalila_kunz\" target=\"_blank\" rel=\"noopener\">Telegram (@Dalila_kunz)</a>.",
      "cont.sub": "Runways, collaborations, model bookings, brand sales and pole dance classes.",
      "cont.b2": "Accessories — @keyss.accesorios", "cont.b3": "Clothing — @key_si_kunz", "cont.b5": "Telegram channel",
      "cont.note": "Native Spanish · English (B2) &nbsp;|&nbsp; Puebla, Mexico 🇲🇽",
      "foot.line": "Keysi Models · Keysi Kunz — The Brand · Puebla, Mexico",
      "foot.rights": "© 2026 Keysi Kunz. All rights reserved."
    },
    fr: {
      "pageTitle": "KEYSI KUNZ — Créatrice de Mode · Mannequin Elite de Podium · Keysi Models",
      "nav.runway": "Podiums", "nav.brand": "La Marque", "nav.fencing": "Escrime", "nav.contact": "Contact",
      "hero.kicker": "Puebla · Paris · Amérique Latine", "hero.presenta": "présente",
      "hero.roles": "Créatrice de Mode Internationale &nbsp;·&nbsp; Mannequin Elite de Podium<br>Founder &amp; Director — <strong>Keysi Models</strong>",
      "hero.season": "COLLECTION PERMANENTE — Mode, Escrime &amp; Pole Dance",
      "hero.btnProgram": "Voir le programme", "hero.btnBook": "Bookings &amp; contact",
      "marquee": "CRÉATRICE ✦ MANNEQUIN ELITE ✦ KEYSI MODELS ✦ PARIS FASHION WEEK ✦ ESCRIMEUSE ✦ POLE DANCER ✦ 케이시 쿤즈 ✦ PUEBLA — MEXIQUE ✦&nbsp;",
      "prog.title": "Programme du défilé",
      "prog.sub": "Tout mon univers, comme un grand événement de mode : chaque section est un look du podium. Touchez un look pour y aller directement.",
      "prog.l1": "Podiums Internationaux", "prog.n1": "Paris · Mexique · Amérique Latine",
      "prog.l2": "Keysi Models — L'Agence", "prog.n2": "Représentation · Formation · Bookings",
      "prog.l3": "Keysi Kunz — La Marque", "prog.n3": "Vêtements &amp; accessoires, depuis 2022",
      "prog.n4": "Fleuret &amp; épée · Médaillée nationale", "prog.n5": "Performeuse &amp; instructrice",
      "prog.l6": "Contact &amp; Bookings",
      "nav.news": "Actus",
      "news.title": "Actus : Mode & Escrime",
      "news.sub": "Titres récents des chaînes de mode et d'escrime, actualisés à l'ouverture de la page.",
      "news.fashion": "Mode",
      "news.fencing": "Escrime",
      "news.more": "Plus d'actus ↗", "prog.n6": "Entrons en scène",
      "run.sub": "Co-créatrice et mannequin sur les scènes de mode internationales.",
      "run.c1tag": "Paris · 2024",
      "run.c1p": "Co-créatrice et mannequin avec la maison Florentina Leitner, présentée au showroom SPHERE de la Fédération de la Haute Couture et de la Mode (FHCM) pendant la Paris Fashion Week.",
      "run.c2tag": "Paris · 2025",
      "run.c2p": "Co-créatrice et mannequin avec Vautrait, maison inscrite au calendrier officiel de la Paris Fashion Week et demi-finaliste du LVMH Prize, reconnue pour sa couture et son drapé exceptionnels.",
      "run.c3tag": "Paris",
      "run.c3p": "Co-auteure et mannequin chez About A Worker, le projet collaboratif parisien de Kim Hou et Paul Boulenger qui transforme les mains qui font la mode en créateurs.",
      "run.c4tag": "Paris · Mai 2026",
      "run.c4p": "Apparition en robe rouge au Palais Galliera, Musée de la Mode de la Ville de Paris, pendant La Nuit des Musées, la grande nuit des musées d'Europe.",
      "run.c5tag": "Mexique · Amérique Latine", "run.c5h": "Podiums &amp; présentations",
      "run.c5p": "Présentations de ma marque et travail comme mannequin Elite sur les podiums du Mexique et d'Amérique latine, portant le design de Puebla sur scène.",
      "ag.sub": "Mon agence de mannequins à Puebla, fondée en 2023. J'en suis la Founder &amp; Director.",
      "ag.tag": "Service", "ag.c1h": "Représentation",
      "ag.c1p": "Représentation de mannequins pour les marques, créateurs et productions à la recherche de talents professionnels.",
      "ag.c2h": "Formation", "ag.c2p": "Formation complète de mannequins : podium, projection, posture et présence scénique.",
      "ag.c3p": "Production et participation à des défilés et événements de mode au cachet professionnel.",
      "ag.c4p": "Bookings pour campagnes, éditoriaux, événements et marques au Mexique et à l'étranger.",
      "ag.cta": "Engager l'agence",
      "marca.sub": "Ma marque de vêtements et d'accessoires, fondée en 2022.",
      "marca.h": "Un design de mes propres mains",
      "marca.p1": "Je crée et confectionne des vêtements et accessoires à l'identité propre. Ma signature en accessoires : <strong>boucles d'oreilles et pièces à la broderie faite main</strong>, le détail artisanal mexicain porté sur le podium.",
      "marca.p2": "Formation : Licence en Design et Direction de Mode — <strong>TROZMER Centro Universitario, Puebla (2025)</strong>.",
      "marca.menuH": "Menu de la marque",
      "marca.m1": "Accessoires — @keyss.accesorios <span>Instagram ↗</span>",
      "marca.m2": "Vêtements &amp; podiums — @key_si_kunz <span>Instagram ↗</span>",
      "marca.m3": "Présentations à Paris <span>Look 01 ↗</span>",
      "marca.m4": "Ventes &amp; collaborations <span>Contact ↗</span>",
      "esg.sub": "Escrimeuse professionnelle au fleuret et à l'épée. Je pratique depuis mes 6 ans et je gagne des médailles depuis mes 12 ans, avec le Club Alpha (Titanes) de Puebla.",
      "esg.y15h": "Médaillée — Olimpiada Nacional 2015",
      "esg.y15p": "Médaillée d'escrime représentant Puebla à l'Olimpiada Nacional 2015, interviewée par le CEID Puebla.",
      "esg.yt": "▶ Voir l'interview sur YouTube",
      "esg.y16h": "Bronze — Olimpiada Nacional 2016",
      "esg.y16p": "Médaille de bronze en fleuret individuel, catégorie 14-15 ans, à l'Olimpiada Nacional 2016 — enregistrée par Poblanerías. La même année, argent en catégorie C à la Copa Jenkins du Club Alpha.",
      "esg.y19h": "Bronze — Olimpiada Nacional 2019",
      "esg.y19p": "Médaille de bronze en fleuret par équipes à l'Olimpiada Nacional 2019, avec le Club Alpha (Titanes). Entraîneur : Miguel León.",
      "pole.sub": "Professional Pole Dance Performer &amp; Instructor — sur scène et en cours depuis mes 18 ans.",
      "pole.tag": "Cours", "pole.tag2": "Scène",
      "pole.c1h": "En présentiel", "pole.c1p": "Cours de pole dance en présentiel à Puebla, pour tous les niveaux.",
      "pole.c2h": "En ligne", "pole.c2p": "Cours en ligne où que vous soyez, avec un suivi personnalisé.",
      "pole.c3p": "Spectacles et performances professionnels pour événements et productions.",
      "pole.book": "Réservez votre cours ou une performance via <a class=\"inline-link\" href=\"https://www.linkedin.com/in/keysi-kunz\" target=\"_blank\" rel=\"noopener\">LinkedIn</a> ou <a class=\"inline-link\" href=\"https://t.me/Dalila_kunz\" target=\"_blank\" rel=\"noopener\">Telegram (@Dalila_kunz)</a>.",
      "cont.sub": "Podiums, collaborations, bookings de mannequins, ventes de la marque et cours de pole dance.",
      "cont.b2": "Accessoires — @keyss.accesorios", "cont.b3": "Vêtements — @key_si_kunz", "cont.b5": "Canal Telegram",
      "cont.note": "Espagnol natif · Anglais (B2) &nbsp;|&nbsp; Puebla, Mexique 🇲🇽",
      "foot.line": "Keysi Models · Keysi Kunz — La Marque · Puebla, Mexique",
      "foot.rights": "© 2026 Keysi Kunz. Tous droits réservés."
    },
    de: {
      "pageTitle": "KEYSI KUNZ — Modedesignerin · Elite-Laufstegmodel · Keysi Models",
      "nav.runway": "Laufstege", "nav.brand": "Die Marke", "nav.fencing": "Fechten", "nav.contact": "Kontakt",
      "hero.kicker": "Puebla · Paris · Lateinamerika", "hero.presenta": "präsentiert",
      "hero.roles": "Internationale Modedesignerin &nbsp;·&nbsp; Elite-Laufstegmodel<br>Founder &amp; Director — <strong>Keysi Models</strong>",
      "hero.season": "PERMANENTE KOLLEKTION — Mode, Fechten &amp; Pole Dance",
      "hero.btnProgram": "Programm ansehen", "hero.btnBook": "Bookings &amp; Kontakt",
      "marquee": "DESIGNERIN ✦ ELITE-MODEL ✦ KEYSI MODELS ✦ PARIS FASHION WEEK ✦ FECHTERIN ✦ POLE DANCER ✦ 케이시 쿤즈 ✦ PUEBLA — MEXIKO ✦&nbsp;",
      "prog.title": "Programm der Modenschau",
      "prog.sub": "Meine ganze Welt, wie bei einem großen Mode-Event: Jeder Bereich ist ein Look auf dem Laufsteg. Tippe auf einen Look, um direkt dorthin zu springen.",
      "prog.l1": "Internationale Laufstege", "prog.n1": "Paris · Mexiko · Lateinamerika",
      "prog.l2": "Keysi Models — Die Agentur", "prog.n2": "Vertretung · Ausbildung · Bookings",
      "prog.l3": "Keysi Kunz — Die Marke", "prog.n3": "Kleidung &amp; Accessoires, seit 2022",
      "prog.n4": "Florett &amp; Degen · Nationale Medaillengewinnerin", "prog.n5": "Performerin &amp; Trainerin",
      "prog.l6": "Kontakt &amp; Bookings",
      "nav.news": "News",
      "news.title": "News: Mode & Fechten",
      "news.sub": "Aktuelle Schlagzeilen von Mode- und Fechtkanälen, beim Öffnen der Seite aktualisiert.",
      "news.fashion": "Mode",
      "news.fencing": "Fechten",
      "news.more": "Mehr News ↗", "prog.n6": "Ab auf die Bühne",
      "run.sub": "Co-Creatorin und Model auf internationalen Modebühnen.",
      "run.c1tag": "Paris · 2024",
      "run.c1p": "Co-Creatorin und Model für das Haus Florentina Leitner, präsentiert im SPHERE-Showroom der Fédération de la Haute Couture et de la Mode (FHCM) während der Paris Fashion Week.",
      "run.c2tag": "Paris · 2025",
      "run.c2p": "Co-Creatorin und Model für Vautrait, ein Haus im offiziellen Kalender der Paris Fashion Week und Halbfinalist des LVMH Prize, bekannt für außergewöhnliche Schneiderei und Drapierung.",
      "run.c3tag": "Paris",
      "run.c3p": "Co-Autorin und Model bei About A Worker, dem Pariser Gemeinschaftsprojekt von Kim Hou und Paul Boulenger, das die Hände, die Mode machen, zu Designerinnen und Designern macht.",
      "run.c4tag": "Paris · Mai 2026",
      "run.c4p": "Auftritt in einem roten Kleid im Palais Galliera, dem Modemuseum der Stadt Paris, während der La Nuit des Musées, der großen Museumsnacht Europas.",
      "run.c5tag": "Mexiko · Lateinamerika", "run.c5h": "Laufstege &amp; Präsentationen",
      "run.c5p": "Präsentationen meiner Marke und Arbeit als Elite-Model auf Laufstegen in Mexiko und Lateinamerika — Design aus Puebla auf der Bühne.",
      "ag.sub": "Meine Modelagentur in Puebla, gegründet 2023. Ich bin ihre Founder &amp; Director.",
      "ag.tag": "Leistung", "ag.c1h": "Vertretung",
      "ag.c1p": "Vertretung von Models für Marken, Designer und Produktionen, die professionelle Talente suchen.",
      "ag.c2h": "Ausbildung", "ag.c2p": "Umfassende Modelausbildung: Laufsteg, Ausstrahlung, Haltung und Bühnenpräsenz.",
      "ag.c3p": "Produktion und Teilnahme an Modenschauen und Mode-Events mit professionellem Anspruch.",
      "ag.c4p": "Bookings für Kampagnen, Editorials, Events und Marken in Mexiko und im Ausland.",
      "ag.cta": "Agentur buchen",
      "marca.sub": "Meine Marke für Kleidung und Accessoires, gegründet 2022.",
      "marca.h": "Design aus eigenen Händen",
      "marca.p1": "Ich designe und fertige Kleidung und Accessoires mit eigener Identität. Meine Signatur bei Accessoires: <strong>Ohrringe und Stücke mit handgemachter Stickerei</strong>, mexikanisches Kunsthandwerk auf dem Laufsteg.",
      "marca.p2": "Ausbildung: Bachelor in Modedesign und -management — <strong>TROZMER Centro Universitario, Puebla (2025)</strong>.",
      "marca.menuH": "Markenmenü",
      "marca.m1": "Accessoires — @keyss.accesorios <span>Instagram ↗</span>",
      "marca.m2": "Kleidung &amp; Laufstege — @key_si_kunz <span>Instagram ↗</span>",
      "marca.m3": "Präsentationen in Paris <span>Look 01 ↗</span>",
      "marca.m4": "Verkauf &amp; Kooperationen <span>Kontakt ↗</span>",
      "esg.sub": "Professionelle Fechterin mit Florett und Degen. Ich trainiere, seit ich 6 bin, und gewinne Medaillen, seit ich 12 bin, mit dem Club Alpha (Titanes) aus Puebla.",
      "esg.y15h": "Medaillengewinnerin — Olympiade Nacional 2015",
      "esg.y15p": "Fecht-Medaillengewinnerin für Puebla bei der Olympiade Nacional 2015, interviewt vom CEID Puebla.",
      "esg.yt": "▶ Interview auf YouTube ansehen",
      "esg.y16h": "Bronze — Olympiade Nacional 2016",
      "esg.y16p": "Bronzemedaille im Einzel-Florett, Altersklasse 14–15, bei der Olympiade Nacional 2016 — dokumentiert von Poblanerías. Im selben Jahr Silber in Kategorie C bei der Copa Jenkins des Club Alpha.",
      "esg.y19h": "Bronze — Olympiade Nacional 2019",
      "esg.y19p": "Bronzemedaille im Team-Florett bei der Olympiade Nacional 2019, mit dem Club Alpha (Titanes). Trainer: Miguel León.",
      "pole.sub": "Professional Pole Dance Performer &amp; Instructor — auf der Bühne und im Unterricht, seit ich 18 bin.",
      "pole.tag": "Kurse", "pole.tag2": "Bühne",
      "pole.c1h": "Vor Ort", "pole.c1p": "Pole-Dance-Kurse vor Ort in Puebla, für alle Levels.",
      "pole.c2h": "Online", "pole.c2p": "Online-Kurse von überall, mit persönlicher Betreuung.",
      "pole.c3p": "Professionelle Shows und Auftritte für Events und Produktionen.",
      "pole.book": "Buche deinen Kurs oder einen Auftritt über <a class=\"inline-link\" href=\"https://www.linkedin.com/in/keysi-kunz\" target=\"_blank\" rel=\"noopener\">LinkedIn</a> oder <a class=\"inline-link\" href=\"https://t.me/Dalila_kunz\" target=\"_blank\" rel=\"noopener\">Telegram (@Dalila_kunz)</a>.",
      "cont.sub": "Laufstege, Kooperationen, Model-Bookings, Markenverkäufe und Pole-Dance-Kurse.",
      "cont.b2": "Accessoires — @keyss.accesorios", "cont.b3": "Kleidung — @key_si_kunz", "cont.b5": "Telegram-Kanal",
      "cont.note": "Spanisch Muttersprache · Englisch (B2) &nbsp;|&nbsp; Puebla, Mexiko 🇲🇽",
      "foot.line": "Keysi Models · Keysi Kunz — Die Marke · Puebla, Mexiko",
      "foot.rights": "© 2026 Keysi Kunz. Alle Rechte vorbehalten."
    },
    pt: {
      "pageTitle": "KEYSI KUNZ — Designer de Moda · Modelo Elite de Passarela · Keysi Models",
      "nav.runway": "Passarelas", "nav.brand": "A Marca", "nav.fencing": "Esgrima", "nav.contact": "Contato",
      "hero.kicker": "Puebla · Paris · América Latina", "hero.presenta": "apresenta",
      "hero.roles": "Designer de Moda Internacional &nbsp;·&nbsp; Modelo Elite de Passarela<br>Founder &amp; Director — <strong>Keysi Models</strong>",
      "hero.season": "COLEÇÃO PERMANENTE — Moda, Esgrima &amp; Pole Dance",
      "hero.btnProgram": "Ver o programa", "hero.btnBook": "Bookings &amp; contato",
      "marquee": "DESIGNER ✦ MODELO ELITE ✦ KEYSI MODELS ✦ PARIS FASHION WEEK ✦ ESGRIMISTA ✦ POLE DANCER ✦ 케이시 쿤즈 ✦ PUEBLA — MÉXICO ✦&nbsp;",
      "prog.title": "Programa do desfile",
      "prog.sub": "Todo o meu mundo, como num grande evento de moda: cada seção é um look da passarela. Toque em qualquer look para ir direto.",
      "prog.l1": "Passarelas Internacionais", "prog.n1": "Paris · México · América Latina",
      "prog.l2": "Keysi Models — A Agência", "prog.n2": "Representação · Formação · Bookings",
      "prog.l3": "Keysi Kunz — A Marca", "prog.n3": "Roupas &amp; acessórios, desde 2022",
      "prog.n4": "Florete &amp; espada · Medalhista nacional", "prog.n5": "Performer &amp; instrutora",
      "prog.l6": "Contato &amp; Bookings",
      "nav.news": "Notícias",
      "news.title": "Notícias: Moda & Esgrima",
      "news.sub": "Manchetes recentes de canais de moda e esgrima, atualizadas ao abrir a página.",
      "news.fashion": "Moda",
      "news.fencing": "Esgrima",
      "news.more": "Mais notícias ↗", "prog.n6": "Vamos ao palco",
      "run.sub": "Co-criadora e modelo em palcos internacionais de moda.",
      "run.c1tag": "Paris · 2024",
      "run.c1p": "Co-criadora e modelo com a casa Florentina Leitner, apresentada no showroom SPHERE da Fédération de la Haute Couture et de la Mode (FHCM) durante a Paris Fashion Week.",
      "run.c2tag": "Paris · 2025",
      "run.c2p": "Co-criadora e modelo com a Vautrait, casa no calendário oficial da Paris Fashion Week e semifinalista do LVMH Prize, reconhecida por sua alfaiataria e drapeado excepcionais.",
      "run.c3tag": "Paris",
      "run.c3p": "Co-autora e modelo na About A Worker, o projeto colaborativo parisiense de Kim Hou e Paul Boulenger que transforma as mãos que fazem a moda em designers.",
      "run.c4tag": "Paris · Maio 2026",
      "run.c4p": "Aparição com um vestido vermelho no Palais Galliera, Museu da Moda da Cidade de Paris, durante a La Nuit des Musées, a grande noite dos museus da Europa.",
      "run.c5tag": "México · América Latina", "run.c5h": "Passarelas &amp; apresentações",
      "run.c5p": "Apresentações da minha marca e trabalho como modelo Elite em passarelas do México e da América Latina, levando o design de Puebla ao palco.",
      "ag.sub": "Minha agência de modelos em Puebla, fundada em 2023. Sou sua Founder &amp; Director.",
      "ag.tag": "Serviço", "ag.c1h": "Representação",
      "ag.c1p": "Representação de modelos para marcas, designers e produções que buscam talento profissional.",
      "ag.c2h": "Formação", "ag.c2p": "Formação integral de modelos: passarela, projeção, postura e presença de palco.",
      "ag.c3p": "Produção e participação em desfiles e eventos de moda com selo profissional.",
      "ag.c4p": "Bookings para campanhas, editoriais, eventos e marcas no México e no exterior.",
      "ag.cta": "Contratar a agência",
      "marca.sub": "Minha marca de roupas e acessórios, fundada em 2022.",
      "marca.h": "Design com as próprias mãos",
      "marca.p1": "Eu desenho e crio roupas e acessórios com identidade própria. Minha assinatura em acessórios: <strong>brincos e peças com bordado feito à mão</strong>, detalhe artesanal mexicano levado à passarela.",
      "marca.p2": "Formação: Bacharelado em Design e Direção de Moda — <strong>TROZMER Centro Universitario, Puebla (2025)</strong>.",
      "marca.menuH": "Menu da marca",
      "marca.m1": "Acessórios — @keyss.accesorios <span>Instagram ↗</span>",
      "marca.m2": "Roupas &amp; passarelas — @key_si_kunz <span>Instagram ↗</span>",
      "marca.m3": "Apresentações em Paris <span>Look 01 ↗</span>",
      "marca.m4": "Vendas &amp; colaborações <span>Contato ↗</span>",
      "esg.sub": "Esgrimista profissional em florete e espada. Pratico desde os 6 anos e ganho medalhas desde os 12, com o Club Alpha (Titanes) de Puebla.",
      "esg.y15h": "Medalhista — Olimpíada Nacional 2015",
      "esg.y15p": "Medalhista de esgrima representando Puebla na Olimpíada Nacional 2015, entrevistada pelo CEID Puebla.",
      "esg.yt": "▶ Ver a entrevista no YouTube",
      "esg.y16h": "Bronze — Olimpíada Nacional 2016",
      "esg.y16p": "Medalha de bronze no florete individual, categoria 14–15 anos, na Olimpíada Nacional 2016 — registrado por Poblanerías. No mesmo ano, prata na categoria C da Copa Jenkins do Club Alpha.",
      "esg.y19h": "Bronze — Olimpíada Nacional 2019",
      "esg.y19p": "Medalha de bronze no florete por equipes na Olimpíada Nacional 2019, com o Club Alpha (Titanes). Treinador: Miguel León.",
      "pole.sub": "Professional Pole Dance Performer &amp; Instructor — no palco e em aula desde os 18 anos.",
      "pole.tag": "Aulas", "pole.tag2": "Palco",
      "pole.c1h": "Presenciais", "pole.c1p": "Aulas presenciais de pole dance em Puebla, para todos os níveis.",
      "pole.c2h": "Online", "pole.c2p": "Aulas online de onde você estiver, com acompanhamento personalizado.",
      "pole.c3p": "Apresentações e performances profissionais para eventos e produções.",
      "pole.book": "Reserve sua aula ou uma apresentação pelo <a class=\"inline-link\" href=\"https://www.linkedin.com/in/keysi-kunz\" target=\"_blank\" rel=\"noopener\">LinkedIn</a> ou pelo <a class=\"inline-link\" href=\"https://t.me/Dalila_kunz\" target=\"_blank\" rel=\"noopener\">Telegram (@Dalila_kunz)</a>.",
      "cont.sub": "Passarelas, colaborações, bookings de modelos, vendas da marca e aulas de pole dance.",
      "cont.b2": "Acessórios — @keyss.accesorios", "cont.b3": "Roupas — @key_si_kunz", "cont.b5": "Canal do Telegram",
      "cont.note": "Espanhol nativo · Inglês (B2) &nbsp;|&nbsp; Puebla, México 🇲🇽",
      "foot.line": "Keysi Models · Keysi Kunz — A Marca · Puebla, México",
      "foot.rights": "© 2026 Keysi Kunz. Todos os direitos reservados."
    },
    zh: {
      "pageTitle": "KEYSI KUNZ — 时装设计师 · 精英T台模特 · Keysi Models",
      "nav.runway": "T台秀", "nav.brand": "品牌", "nav.fencing": "击剑", "nav.contact": "联系",
      "hero.kicker": "普埃布拉 · 巴黎 · 拉丁美洲", "hero.presenta": "呈现",
      "hero.roles": "国际时装设计师 &nbsp;·&nbsp; 精英T台模特<br>创始人兼总监 — <strong>Keysi Models</strong>",
      "hero.season": "常设系列 — 时尚、击剑与钢管舞",
      "hero.btnProgram": "查看节目单", "hero.btnBook": "预约与联系",
      "marquee": "设计师 ✦ 精英模特 ✦ KEYSI MODELS ✦ 巴黎时装周 ✦ 击剑运动员 ✦ 钢管舞者 ✦ 케이시 쿤즈 ✦ 普埃布拉 — 墨西哥 ✦&nbsp;",
      "prog.title": "时装秀节目单",
      "prog.sub": "我的整个世界，就像一场盛大的时尚活动：每个板块都是T台上的一个造型。点击任意造型即可直达。",
      "prog.l1": "国际T台", "prog.n1": "巴黎 · 墨西哥 · 拉丁美洲",
      "prog.l2": "Keysi Models — 经纪公司", "prog.n2": "经纪 · 培训 · 预约",
      "prog.l3": "Keysi Kunz — 品牌", "prog.n3": "服装与配饰，始于2022年",
      "prog.n4": "花剑与重剑 · 全国奖牌得主", "prog.n5": "表演者与教练",
      "prog.l6": "联系与预约",
      "nav.news": "新闻",
      "news.title": "新闻：时尚与击剑",
      "news.sub": "时尚与击剑频道的最新头条，打开页面时更新。",
      "news.fashion": "时尚",
      "news.fencing": "击剑",
      "news.more": "更多新闻 ↗", "prog.n6": "让我们登台",
      "run.sub": "国际时尚舞台上的共创者与模特。",
      "run.c1tag": "巴黎 · 2024",
      "run.c1p": "与 Florentina Leitner 品牌合作担任共创者与模特，在巴黎时装周期间于法国高级定制与时尚联合会（FHCM）的 SPHERE 展厅呈现。",
      "run.c2tag": "巴黎 · 2025",
      "run.c2p": "与 Vautrait 合作担任共创者与模特，该品牌列入巴黎时装周官方日程，是 LVMH Prize 半决赛入围者，以卓越的剪裁与垂褶工艺著称。",
      "run.c3tag": "巴黎",
      "run.c3p": "在 About A Worker 担任共创作者与模特，这是 Kim Hou 与 Paul Boulenger 在巴黎发起的协作项目，让制作时尚的双手成为设计师。",
      "run.c4tag": "巴黎 · 2026年5月",
      "run.c4p": "在欧洲博物馆之夜 La Nuit des Musées 期间，身着红裙亮相巴黎城市时尚博物馆 Palais Galliera。",
      "run.c5tag": "墨西哥 · 拉丁美洲", "run.c5h": "T台与展示",
      "run.c5p": "在墨西哥与拉丁美洲的T台上展示我的品牌，并以精英模特身份工作，将普埃布拉的设计带上舞台。",
      "ag.sub": "我于2023年在普埃布拉创立的模特经纪公司，我是创始人兼总监。",
      "ag.tag": "服务", "ag.c1h": "经纪代理",
      "ag.c1p": "为寻找专业人才的品牌、设计师与制作方提供模特经纪服务。",
      "ag.c2h": "培训", "ag.c2p": "全面的模特培训：T台走秀、表现力、体态与舞台气场。",
      "ag.c3p": "以专业水准制作并参与时装秀与时尚活动。",
      "ag.c4p": "为墨西哥及海外的广告、杂志大片、活动与品牌提供预约服务。",
      "ag.cta": "预约经纪公司",
      "marca.sub": "我于2022年创立的服装与配饰品牌。",
      "marca.h": "亲手设计",
      "marca.p1": "我设计并制作具有独特个性的服装与配饰。我的配饰标志：<strong>手工刺绣耳环与饰品</strong>，将墨西哥手工艺细节带上T台。",
      "marca.p2": "教育背景：时尚设计与管理学士 — <strong>TROZMER 大学中心，普埃布拉（2025）</strong>。",
      "marca.menuH": "品牌菜单",
      "marca.m1": "配饰 — @keyss.accesorios <span>Instagram ↗</span>",
      "marca.m2": "服装与T台 — @key_si_kunz <span>Instagram ↗</span>",
      "marca.m3": "巴黎展示 <span>Look 01 ↗</span>",
      "marca.m4": "销售与合作 <span>联系 ↗</span>",
      "esg.sub": "职业击剑运动员，擅长花剑与重剑。我6岁开始练习，12岁起赢得奖牌，所属普埃布拉 Club Alpha（Titanes）。",
      "esg.y15h": "奖牌得主 — 2015年全国奥林匹克运动会",
      "esg.y15p": "代表普埃布拉参加2015年全国奥林匹克运动会并获得击剑奖牌，接受 CEID Puebla 采访。",
      "esg.yt": "▶ 在 YouTube 观看采访",
      "esg.y16h": "铜牌 — 2016年全国奥林匹克运动会",
      "esg.y16p": "在2016年全国奥林匹克运动会14–15岁组个人花剑比赛中获得铜牌，由 Poblanerías 记录。同年，在 Club Alpha 的 Copa Jenkins 比赛中获得 C 组银牌。",
      "esg.y19h": "铜牌 — 2019年全国奥林匹克运动会",
      "esg.y19p": "在2019年全国奥林匹克运动会团体花剑比赛中与 Club Alpha（Titanes）一起获得铜牌。教练：Miguel León。",
      "pole.sub": "专业钢管舞表演者与教练 — 18岁起登台表演并授课。",
      "pole.tag": "课程", "pole.tag2": "舞台",
      "pole.c1h": "线下课", "pole.c1p": "在普埃布拉开设线下钢管舞课程，适合所有水平。",
      "pole.c2h": "线上课", "pole.c2p": "随时随地参加线上课程，并获得个性化指导。",
      "pole.c3p": "为活动与制作提供专业演出。",
      "pole.book": "通过 <a class=\"inline-link\" href=\"https://www.linkedin.com/in/keysi-kunz\" target=\"_blank\" rel=\"noopener\">LinkedIn</a> 或 <a class=\"inline-link\" href=\"https://t.me/Dalila_kunz\" target=\"_blank\" rel=\"noopener\">Telegram (@Dalila_kunz)</a> 预约课程或演出。",
      "cont.sub": "T台秀、合作、模特预约、品牌销售与钢管舞课程。",
      "cont.b2": "配饰 — @keyss.accesorios", "cont.b3": "服装 — @key_si_kunz", "cont.b5": "Telegram 频道",
      "cont.note": "西班牙语母语 · 英语（B2）&nbsp;|&nbsp; 普埃布拉，墨西哥 🇲🇽",
      "foot.line": "Keysi Models · Keysi Kunz — 品牌 · 普埃布拉，墨西哥",
      "foot.rights": "© 2026 Keysi Kunz。保留所有权利。"
    }
  };

  var originals = {};   // español = el HTML original
  var textEls = document.querySelectorAll('[data-i18n]');
  var htmlEls = document.querySelectorAll('[data-i18n-html]');
  textEls.forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in originals)) originals[k] = el.innerHTML;
  });
  htmlEls.forEach(function (el) {
    var k = el.getAttribute('data-i18n-html');
    if (!(k in originals)) originals[k] = el.innerHTML;
  });

  function applyLang(lang) {
    var dict = I18N[lang] || null;
    textEls.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      el.innerHTML = (dict && dict[k] != null) ? dict[k] : originals[k];
    });
    htmlEls.forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      el.innerHTML = (dict && dict[k] != null) ? dict[k] : originals[k];
    });
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : lang;
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('keysi-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = null;
  try { saved = localStorage.getItem('keysi-lang'); } catch (e) {}
  if (saved && saved !== 'es') applyLang(saved);
})();

/* ===== NOTICIAS EN VIVO (Google News vía rss2json) ===== */
(function () {
  var lang = 'es';
  try { lang = localStorage.getItem('keysi-lang') || 'es'; } catch (e) {}
  var LOCALES = { es: 'es-MX', en: 'en-US', fr: 'fr-FR', de: 'de-DE', pt: 'pt-BR', zh: 'zh-CN' };
  var STR = {
    es: { loading: 'Cargando noticias…', error: 'No se pudieron cargar las noticias en este momento.' },
    en: { loading: 'Loading news…', error: 'News could not be loaded right now.' },
    fr: { loading: 'Chargement des actus…', error: "Impossible de charger les actus pour le moment." },
    de: { loading: 'News werden geladen…', error: 'Die News konnten gerade nicht geladen werden.' },
    pt: { loading: 'Carregando notícias…', error: 'Não foi possível carregar as notícias agora.' },
    zh: { loading: '正在加载新闻…', error: '目前无法加载新闻。' }
  };
  var S = STR[lang] || STR.es;
  document.querySelectorAll('[data-news-loading]').forEach(function (el) { el.textContent = S.loading; });

  var FEEDS = {
    'news-moda': 'https://news.google.com/rss/search?q=fashion+week+OR+pasarela+OR+moda&hl=es-419&gl=MX&ceid=MX:es-419',
    'news-esgrima': 'https://news.google.com/rss/search?q=esgrima+OR+fencing&hl=es-419&gl=MX&ceid=MX:es-419'
  };

  function render(id, items) {
    var ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = '';
    (items || []).slice(0, 5).forEach(function (it) {
      var title = it.title || '';
      var source = it.author || '';
      var m = title.match(/^(.*) - ([^-]+)$/);
      if (m) { title = m[1]; if (!source) source = m[2].trim(); }
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = it.link;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = title;
      li.appendChild(a);
      var meta = document.createElement('span');
      meta.className = 'news-meta';
      var date = '';
      try { date = new Date(it.pubDate).toLocaleDateString(LOCALES[lang] || 'es-MX', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) {}
      meta.textContent = (source ? source + ' · ' : '') + date;
      li.appendChild(meta);
      ul.appendChild(li);
    });
    if (!ul.children.length) throw new Error('empty');
  }

  function fail(id) {
    var ul = document.getElementById(id);
    if (ul) ul.innerHTML = '<li class="news-msg">' + S.error + '</li>';
  }

  function fromXML(text) {
    var doc = new DOMParser().parseFromString(text, 'text/xml');
    var nodes = doc.querySelectorAll('item');
    var out = [];
    nodes.forEach(function (n) {
      var src = n.querySelector('source');
      out.push({
        title: (n.querySelector('title') || {}).textContent || '',
        link: (n.querySelector('link') || {}).textContent || '',
        pubDate: (n.querySelector('pubDate') || {}).textContent || '',
        author: src ? src.textContent : ''
      });
    });
    return out;
  }

  function loadFeed(id) {
    var feed = FEEDS[id];
    var enc = encodeURIComponent(feed);
    var attempts = [
      function () {
        return fetch('https://api.rss2json.com/v1/api.json?rss_url=' + enc)
          .then(function (r) { return r.json(); })
          .then(function (d) {
            if (d && d.status === 'ok' && d.items && d.items.length) return d.items;
            throw new Error('rss2json');
          });
      },
      function () {
        return fetch('https://api.allorigins.win/get?url=' + enc)
          .then(function (r) { return r.json(); })
          .then(function (d) {
            var items = d && d.contents ? fromXML(d.contents) : [];
            if (items.length) return items;
            throw new Error('allorigins');
          });
      },
      function () {
        return fetch('https://api.codetabs.com/v1/proxy?quest=' + enc)
          .then(function (r) { return r.text(); })
          .then(function (t) {
            var items = fromXML(t);
            if (items.length) return items;
            throw new Error('codetabs');
          });
      }
    ];
    (function next(i) {
      if (i >= attempts.length) { fail(id); return; }
      attempts[i]().then(function (items) { render(id, items); }).catch(function () { next(i + 1); });
    })(0);
  }

  Object.keys(FEEDS).forEach(loadFeed);
})();
