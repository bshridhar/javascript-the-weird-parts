(function (global, $) {

    // initial function that is called.
    // create new objects from the Greetr.init function
    var Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Conectado'
    };

    // Create the prototype with all the methods
    Greetr.prototype = {

        fullName: function () {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid Language';
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        greet: function (formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function (lang) {
            this.language = lang;

            this.validate();

            return this;

        },

        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw 'jQuery not loaded';
            }

            if(!selector) {
                throw 'Missing selector';
            }

            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    // Intialise the function constructor
    init = Greetr.init = function (firstname, lastname, language) {
        var self = this;

        // set some default values for the variables
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';


    }

    // attach the greetr.prototype to each object created
    Greetr.init.prototype = Greetr.prototype;

    // attach Greetr to the window
    global.Greetr = global.G$ = Greetr;


    // return Greetr;
}(window, jQuery));