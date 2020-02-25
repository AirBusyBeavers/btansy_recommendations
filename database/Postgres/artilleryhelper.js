function x (context, events, done) {
  context.vars['listid'] = '' + Math.floor((Math.random() * 9999999) + 1); // set the "query" variable for the virtual user
  return done();
}

module.exports = {x};