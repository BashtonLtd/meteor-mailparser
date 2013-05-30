Package.describe({
  summary: "Meteor smart package for mailparser."
})

Npm.depends({
  "mailparser": "0.3.6"
});

Package.on_use(function (api, where) {
  api.add_files('mailparser-server.js', 'server');
});
