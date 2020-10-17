// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { getAllGists, getAllFollowers, getAllRepos } = require('./src/githubData')
module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const setCollection = [
      ["Gists", getAllGists],
      ["Followers", getAllFollowers],
      ["Repos", getAllRepos]
    ].map(([typeName, getAll]) => {
      const collection = addCollection({
        typeName
      })
      return getAll().then(({ data: items }) => {
        console.log("=======",typeName,items[0]);
        for (const item of items) {
          if (item.files) {
            item.files = Object.entries(item.files);
          }
          collection.addNode({
            ...item
          });
        }
      })
    })
    return Promise.all(setCollection);
  })
}
