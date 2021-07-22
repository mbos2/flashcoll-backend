const fetch = require("node-fetch");
module.exports = async function (fastify, opts) {
  fastify.get('/user/:id', async function (request, reply) {
    await fetch(`https://api.github.com/user/${request.params.id}`, {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      }
    })
      .then(response => response.json())
      .then(data => request.body = data);
    // console.log(gh('https://github.com/mbos2/flashcoll/blob/main/src/testMarkdownUrl.md'));
    return request.body;
  })
}