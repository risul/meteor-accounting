Package.describe({
    name: 'risul:accounting',
    summary: 'Meteor package for Accounting.js - http://openexchangerates.github.io/accounting.js/',
    version: '1.0.1',
    git: 'https://github.com/risul/meteor-accounting'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.addFiles('lib/accounting.js', ['client', 'server']);
});