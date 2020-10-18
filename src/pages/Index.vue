<template>
  <Layout>
    <h2>Gists</h2>
    <el-card
      shadow="hover"
      v-for="(item, index) in items"
      :key="'p' + index"
      style="margin-bottom: 20px"
    >
      <div slot="header">
        <span>
          {{ item.description }}
        </span>
      </div>
      <div style="font-sie: 0.9rem; line-height: 1.5; color: #606c71">
        最近更新 {{ item.updated_at }}
      </div>
      <div
        style="
          font-sie: 1.1rem;
          line-height: 1.5;
          color: #303133;
          padding: 10px 0px 0px 0px;
        "
      >
        <dl>
          <dt>files:</dt>
          <dd v-for="file in item.files" :key="file.filename">
            <a :href="file.raw_url" target="_blank"> {{ file.filename }}</a>
          </dd>
        </dl>
      </div>
    </el-card>
    <div style="text-align: center">
      <el-pagination
        layout="prev, pager, next"
        @current-change="onPageChange"
        :current-page="$page.allGists.pageInfo.currentPage"
        :page-count="$page.allGists.pageInfo.totalPages"
      />
    </div>
  </Layout>
</template>
<page-query>
query($page:Int) {
  allGists(
    perPage:2
    page:$page
    )@paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        url
        description
        forks_url
        commits_url
        node_id
        git_pull_url
        git_push_url
        html_url
        files{
          type
          size
          filename
          language
          raw_url
        }
        public
        created_at
        updated_at
        description
        comments
        comments_url
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "最新动态",
  },
  computed: {
    items() {
      return this.$page.allGists.edges.map(({ node }) => node);
    },
  },
  methods: {
    onPageChange(target) {
      if (target === 1) {
        this.$router.push(`/`);
      } else {
        this.$router.push(`/${target}`);
      }
    },
  },
};
</script>
