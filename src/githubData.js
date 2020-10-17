const axios = require('axios');
const user = process.env.GIT_HUB_USER;
const token = process.env.GIT_HUB_TOKEN;
var request = axios.create({
  auth: {
    username: user,
    password: token
  }
});

const url = `https://api.github.com/users/${user}/`;

async function getAllGists() {
  return await request(url + 'gists');
}
async function getAllFollowers() {
  return await request(url + 'followers');
}
async function getAllRepos() {
  return await request(url + 'repos');
}

module.exports = {
  getAllGists,
  getAllFollowers,
  getAllRepos
}