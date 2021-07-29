const fetch = require("node-fetch");
module.exports = async function (fastify, opts) {
  fastify.get('/user/:id/repos', async function (request, reply) {
    await fetch(`https://api.github.com/user/${request.params.id}/repos`,{
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'token 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',
      }
    })
    .then(response => response.json())
    .then(data => request.body = data);
    return request.body;
  })
}