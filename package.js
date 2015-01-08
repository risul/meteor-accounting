Package.describe({
    name: 'risul:accounting',
    summary: 'Meteor package for Accounting.js - A lightweight JavaScript library for number, money and currency formatting - fully localisable, zero dependencies',
    version: '1.0.0',
    git: 'https://github.com/risul/meteor-accounting'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.addFiles('lib/accounting.js', ['client', 'server']);
});