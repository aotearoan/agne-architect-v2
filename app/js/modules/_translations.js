angular.module('app.translation', []).service('translateService', function () {
    this.languages = ['de'];

    this.defaultLanguage = function () {
        return 'de';
    };

    this.translate = function (key, lang) {
        var translations = {
            'About Me': {'en': 'About Me', 'de': 'Über mich'},
            'Architect': {'en': 'Architect', 'de': 'Architektin'},
            'Apartment buildings': {'en': 'Apartment buildings', 'de': 'Mehrfamilienhäuser'},
            'Commercial objects': {'en': 'Commercial objects', 'de': 'Gewerbebau'},
            'Contact': {'en': 'Contact', 'de': 'Kontakt'},
            'cv': {'en': '2017.BEWERBUNG_Agne Erickson.pdf', 'de': '2017.BEWERBUNG_Agne Erickson.pdf'},
            'CV download': {'en': 'CV download (DE)', 'de': 'CV herunterladen'},
            'Education': {'en': 'Education', 'de': 'Ausbildung'},
            'EFH Uitikon': {'en': 'EFH Uitikon', 'de': 'EFH Uitikon'},
            'English': {'en': 'English', 'de': 'Englisch (fliessend)'},
            'Experience': {'en': 'Experience', 'de': 'Erfahrung'},
            'Expertise': {'en': 'Expertise', 'de': 'Fachkenntnisse'},
            'Extensions and Reconstructions': {
                'en': 'Extensions and Reconstructions',
                'de': 'Erweiterungen und Umbauten'
            },
            'Gediminas Technical University - Vilnius, Lithuania': {'en': 'Gediminas Technical University - Vilnius, Lithuania', 'de': 'Technische Gediminas - Universität Vilnius, Litauen'},
            'German': {'en': 'German', 'de': 'Deutsch (fliessend)'},
            'Home': {'en': 'Home', 'de': 'Home'},
            'Individual houses': {'en': 'Individual houses', 'de': 'Einfamilienhäuser'},
            'Industrial objects': {'en': 'Industrial objects', 'de': 'Industriebau'},
            'Interior design': {'en': 'Interior design', 'de': 'Innenarchitektur'},
            'Languages': {'en': 'Languages', 'de': 'Sprachen'},
            'Links': {'en': 'Links', 'de': 'Links'},
            'Lithuanian': {'en': 'Lithuanian', 'de': 'Litauisch'},
            'Lithuanian (Native)': {'en': 'Lithuanian (Native)', 'de': 'Litauisch (Muttersprache)'},
            'Location': {'en': 'Location', 'de': 'Ort'},
            'Nationality': {'en': 'Nationality', 'de': 'Nationalität'},
            'Polish': {'en': 'Polish', 'de': 'Polnisch (fliessend)'},
            'Portfolio download': {'en': 'Portfolio download (DE)', 'de': 'Portfolio herunterladen'},
            'portfolio': {'en': '2017.Portfolio_Agne Erickson.pdf', 'de': '2017.Portfolio_Agne Erickson.pdf'},
            'Projects': {'en': 'Projects', 'de': 'Projekte'},
            'Russian': {'en': 'Russian', 'de': 'Russisch (fliessend)'},
            'Skills': {'en': 'Skills', 'de': 'Kenntnisse'},
            'Thanks': {
                'en': 'Thanks for taking the time to checkout my website. If you\'re interested in my work and would like to get in touch, feel free to contact me via the links below.',
                'de': 'Vielen Dank, dass Sie sich die Zeit genommen haben, meine Website zu besuchen. Wenn Sie Interesse an meiner Arbeit haben und sich mit mir in Verbindung setzen möchten, zögern Sie nicht, mich über die untenstehenden Links zu kontaktieren.'
            },
            'Uitikon Paragraph 1': {
                'en': 'Bei der Planung ihres Einfamilienhauses legte die Bauherrschaft grössten Wert auf Privatsphäre, und das, obwohl das Grundstück duch seine exponierte Steilhanglage alles andere als sichtgeschützt war. Die grösste Herausforderung war es daher, viel Aussicht mit wenig Einsicht zu planen.',
                'de': 'Bei der Planung ihres Einfamilienhauses legte die Bauherrschaft grössten Wert auf Privatsphäre, und das, obwohl das Grundstück duch seine exponierte Steilhanglage alles andere als sichtgeschützt war. Die grösste Herausforderung war es daher, viel Aussicht mit wenig Einsicht zu planen.'
            },
            'Uitikon Paragraph 2': {
                'en': 'Durch die vorgelagerten Terrassen mit Glasbrüstung und das Gartenmagazin im Obergeschoss, welches über eine Treppe zum Pool hinab führt, begleitet die Natur die Bewohner und gewährt gleichzeitig Schutz vor neugierigen Blicken.',
                'de': 'Durch die vorgelagerten Terrassen mit Glasbrüstung und das Gartenmagazin im Obergeschoss, welches über eine Treppe zum Pool hinab führt, begleitet die Natur die Bewohner und gewährt gleichzeitig Schutz vor neugierigen Blicken.'
            },
            'Urban planning': {'en': 'Urban planning', 'de': 'Städtebauplanung'},
            'Zurich, Switzerland': {'en': 'Zurich, Switzerland', 'de': 'Zürich, Schweiz'}
        };

        if (translations[key] && translations[key][lang]) {
            return translations[key][lang];
        } else {
            return key;
        }
    };
})
;
