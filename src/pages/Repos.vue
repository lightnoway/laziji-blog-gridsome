<template>
  <Layout>
    <h2>开源项目</h2>
    <el-card class="box-card" v-for="item in items" :key="item.id">
      <div slot="header" class="clearfix">
        <a :href="item.html_url" target="_blank">{{ item.name }}</a>
      </div>
      <p>{{ item.description }}</p>
    </el-card>
    <div style="text-align: center">
      <el-pagination
        layout="prev, pager, next"
        @current-change="onPageChange"
        :current-page="$page.allRepos.pageInfo.currentPage"
        :page-size="$page.allRepos.pageInfo.perPage"
        :page-count="$page.allRepos.pageInfo.totalPages"
      />
    </div>
  </Layout>
</template>
<page-query>
query (  $page:Int ){
  allRepos(
    perPage: 5
     page: $page
     sort:[{by:"created_at",order:DESC}]
     )@paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id 
        name
        description
        
        url
        html_url
      }
    }
  }
}  
</page-query>
<style scoped>
.box-card{
  margin-bottom: 2em;
}
</style>
<script>
export default {
  metaInfo: {
    title: "开源项目",
  },
  computed: {
    items() {
      return this.$page.allRepos.edges.map(({ node }) => node);
    },
  },
  methods: {
    onPageChange(target) {
      if (target === 1) {
        this.$router.push(`/repos`);
      } else {
        this.$router.push(`/repos/${target}`);
      }
    },
  },
};
</script>
