Package.describe({
  summary: "Meteor smart package for mailparser."
})

Npm.depends({
  "mailparser": "0.4.4"
});

Package.on_use(function (api, where) {
  api.add_files('mailparser-server.js', 'server');
  api.export(['mailparser'], 'server');
});
