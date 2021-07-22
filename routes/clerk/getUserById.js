const fetch = require("node-fetch");
const gh = require('parse-github-url');
module.exports = async function (fastify, opts) {
  fastify.get('/user/:id', async function (request, reply) {
    let clerkUser = await fetch(`https://api.clerk.dev/v1/users/${request.params.id}`, {
      method: 'GET',
      headers: {
        Authorization: "Bearer test_zvAwkXGjs3gyO4DOG5xv8GqQwjYnV2xjlk",
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