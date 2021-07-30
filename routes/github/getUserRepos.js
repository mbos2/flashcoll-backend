const fetch = require("node-fetch");
const { request } = require("@octokit/request");
const {Octokit} = require("@octokit/core");
module.exports = async function (fastify, opts) {
  console.log(process.env.GITHUB_PERSONAL_ACCESS_TOKEN);
  fastify.get('/user/:id/repos', async function (request, reply) {
    const octo = new Octokit({ auth: `${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}` });
    const result = await octo.request("GET /user/{id}/repos?per_page=100", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Credentials": true
    },
      id: request.params.id
    });
    //return 'this is an example'
    //console.log(result.data);
    console.log(result)
    return result.data;
  })
}