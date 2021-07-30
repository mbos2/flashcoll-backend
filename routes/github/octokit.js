const fetch = require("node-fetch");
const { request } = require("@octokit/request");
const {Octokit} = require("@octokit/core");
module.exports = async function (fastify, opts) {
  console.log(process.env.GITHUB_PERSONAL_ACCESS_TOKEN);
  fastify.get('/ouser/:username', async function (request, reply) {
    const octo = new Octokit({ auth: `${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}` });
    const result = await octo.request("GET /users/{username}", {
      username: request.params.username
    });
    //return 'this is an example'
    console.log(result);
    return result.data;
  })
}