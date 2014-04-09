module.exports.error = function(msg){
  var w = 10;
  var type = 'error';
  var len = Math.max(0, w - type.length);
  var pad = Array(len + 1).join(' ');
  console.error('  \033[31m%s\033[m : \033[90m%s\033[m', pad + type, msg);
}

module.exports.fatal = function(){
  console.error();
  error.apply(null, arguments);
  console.error();
  process.exit(1);
}

module.exports.log = function(type, msg, color){
  color = color || '32';
  var w = 10;
  var len = Math.max(0, w - type.length);
  var pad = Array(len + 1).join(' ');
  console.log('  \033[' + color + 'm%s\033[m : \033[90m%s\033[m', pad + type, msg);
}

module.exports.warn = function(type, msg){
  this.log(type, msg, '33');
}