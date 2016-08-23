require('!style!css!reset.css/reset.css');
require('!style!css!animate.css/animate.min.css');
require('!style!css!sass!./app.sass');

if (module.hot) {
  module.hot.accept(function(err) {
    if (err) console.error(err);
  });
}
