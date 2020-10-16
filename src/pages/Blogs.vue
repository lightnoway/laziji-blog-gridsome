<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card v-if="false" shadow="never" style="margin-bottom: 20px">
        <!-- <el-input
          placeholder="请输入关键字"
          v-model="searchKey"
          clearable
          style="width: 300px"
        ></el-input> -->
        <!-- <el-button
          @click="search"
          icon="el-icon-search"
          style="margin-left: 10px"
          circle
          plain
        ></el-button> -->
        <!-- <el-button
          @click="$share()"
          style="margin-left: 10px"
          icon="el-icon-share"
          type="warning"
          plain
          circle
        ></el-button> -->
        <!-- <el-button
          type="primary"
          icon="el-icon-edit"
          round
          plain
          style="float: right"
          @click="goAdd"
          >写博文</el-button
        > -->
      </el-card>

      <div v-if="$page.blogs.edges.length > 0">
        <el-card
          shadow="hover"
          v-for="({ node: item }, index) in $page.blogs.edges"
          :key="'p' + index"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <g-link :to="`/blog/${item.id}`">
                    <!-- <a
                    style="text-decoration: none; cursor: pointer"
                    @click="goDetails(item.id)"
                  > -->
                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;
                    {{ item.title }}
                  </g-link>
                </span>
              </el-col>
              <el-col :span="8">
                <!-- <div style="text-align: right">
                  <el-button
                    @click="$share('/user/blog/details/' + item.id)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-share"
                  ></el-button>
                  <el-button
                    @click="editBlog(index)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-edit"
                    v-if="token"
                  ></el-button>
                  <el-button
                    @click="deleteBlog(index)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-delete"
                    v-if="token"
                  ></el-button>
                </div> -->
              </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
            最近更新 {{ item.updated_at }}
          </div>
          <div
            style="
              font-size: 1.1rem;
              line-height: 1.5;
              color: #303133;
              padding: 10px 0px 0px 0px;
            "
          >
            {{ item.content }}
          </div>
        </el-card>
        <div style="text-align: center">
          <el-pagination
            layout="prev, pager, next"
            @current-change="onPageChange"
            :current-page="$page.blogs.pageInfo.currentPage"
            :page-size="$page.blogs.pageInfo.perPage"
            :page-count="$page.blogs.pageInfo.totalPages"
          />
        </div>
      </div>

      <el-card
        shadow="never"
        style="
          margin-bottom: 20px;
          padding: 20px 0px 20px 0px;
          text-align: center;
        "
        v-else
      >
        <font style="font-size: 30px; color: #dddddd">
          <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
        </font>
      </el-card>
    </div>
    <!-- <h1>博客列表</h1>
    <p>{{ $page.blogs.pageInfo }}</p> -->
    <Pager :info="$page.blogs.pageInfo" />
  </Layout>
</template>
<page-query>
query ($page: Int) {
  blogs:allStrapiBlog(perPage: 2, page: $page) @paginate {
    pageInfo {
      perPage
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content
        updated_at
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "博客列表",
  },
  components: { Pager },
  methods: {
    onPageChange(target) {
      if (target === 1) {
        this.$router.push(`/blogs`);
      } else {
        this.$router.push(`/blogs/${target}`);
      }
    },
  },
};
</script>
