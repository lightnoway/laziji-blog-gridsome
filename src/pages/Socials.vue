<template>
  <Layout>
    <h2>followers</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <a :href="item.html_url" target="_blank">{{ item.login }}</a>
      </li>
    </ul>
  </Layout>
</template>
<page-query>
query {
  allFollowers{
    edges{
      node{
        id
        login 
        html_url
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "社交圈",
  },
  computed: {
    items() {
      return this.$page.allFollowers.edges.map(({ node }) => node);
    },
  },
};
</script>
