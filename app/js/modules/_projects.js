angular.module('app.translation', []).service('translateService', function () {
    this.languages = ['de', 'en'];

    this.defaultLanguage = function () {
        return this.languages[0];
    };

    this.translate = function (key, lang) {
        var translations = {
            'About Me': {'en': 'About Me', 'de': 'Über mich'},
            'Architect': {'en': 'Architect', 'de': 'Architect'},
            'Apartment blocks': {'en': 'Apartment blocks', 'de': 'Apartment blocks'},
            'Commercial objects': {'en': 'Commercial objects', 'de': 'Commercial objects'},
            'Contact': {'en': 'Contact', 'de': 'Contact'},
            'Download my portfolio': {'en': 'Download my portfolio', 'de': 'Download my portfolio'},
            'Education': {'en': 'Education', 'de': 'Education'},
            'Experience': {'en': 'Experience', 'de': 'Experience'},
            'Expertise': {'en': 'Expertise', 'de': 'Expertise'},
            'Extensions and Reconstructions': {'en': 'Extensions and Reconstructions', 'de': 'Extensions and Reconstructions'},
            'English': {'en': 'English', 'de': 'English'},
            'German': {'en': 'German', 'de': 'German'},
            'Home': {'en': 'Home', 'de': 'Home'},
            'Individual houses': {'en': 'Individual houses', 'de': 'Individual houses'},
            'Industrial objects': {'en': 'Industrial objects', 'de': 'Industrial objects'},
            'Interior design': {'en': 'Interior design', 'de': 'Interior design'},
            'Languages': {'en': 'Languages', 'de': 'Languages'},
            'Links': {'en': 'Links', 'de': 'Links'},
            'Lithuanian': {'en': 'Lithuanian', 'de': 'Litauische'},
            'Lithuanian (Native)': {'en': 'Lithuanian (Native)', 'de': 'Lithuanian (Native)'},
            'Location': {'en': 'Location', 'de': 'Location'},
            'Nationality': {'en': 'Nationality', 'de': 'Nationalität'},
            'Polish': {'en': 'Polish', 'de': 'Polish'},
            'Projects': {'en': 'Projects', 'de': 'Projects'},
            'Russian': {'en': 'Russian', 'de': 'Russian'},
            'Skills': {'en': 'Skills', 'de': 'Skills'},
            'Thanks': {'en': 'Thanks for taking the time to checkout my website. If you\'re interested in my work and would like to get in touch, feel free to contact me via the links below.', 'de': 'Thanks for taking the time to checkout my website. If you\'re interested in my work and would like to get in touch, feel free to contact me via the links below.'},
            'Urban planning': {'en': 'Urban planning', 'de': 'Urban planning'},
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
