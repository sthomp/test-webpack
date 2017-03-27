module.exports = function(content) {
  var contentNoNewline = content.replace(/\n$/, '');
  return `export default {hello: '${contentNoNewline}'}`;
};
