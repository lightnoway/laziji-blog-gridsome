<template>
  <section
    class="page-header"
    :style="
      'background-image: linear-gradient(120deg, ' +
      backgroundColorLeft +
      ', ' +
      backgroundColorRight +
      ');color: ' +
      fontColor +
      ';'
    "
  >
    <div style="position: absolute; top: 20px; right: 20px; z-index: 2">
      <!-- <el-tooltip
        effect="dark"
        :content="fullButton.full ? '退出' : '全屏'"
        placement="bottom-end"
      >
        <el-button
          @click="full"
          :icon="fullButton.full ? 'el-icon-close' : 'el-icon-rank'"
          circle
        ></el-button>
      </el-tooltip> -->
    </div>
    <div
      v-for="(item, index) in randomIcon"
      :key="'ri' + index"
      :style="
        'position:absolute; top:' +
        item.top +
        'px; left:' +
        item.left +
        'px; z-index:1;'
      "
    >
      <font :style="'font-size: ' + item.size + 'px;color:#fff;'">
        <b>♪</b>
      </font>
    </div>
    <h1 class="project-name">{{ blogTitle }}</h1>
    <h2 class="project-tagline">{{ blogDescribe }}</h2>
    <a
      :href="'https://github.com/' + githubUsername"
      class="btn"
      target="_blank"
      >GitHub主页</a
    >
    <!-- <a
      href="https://github.com/GitHub-Laziji/vblog"
      class="btn"
      target="_blank"
      v-if="!mini"
      >博客源码</a
    > -->
    <el-button>button</el-button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      backgroundColorLeft: "#2690F9",
      backgroundColorRight: "#FC2D2D",
      fontColor: "#ffffff",
      fullButton: {
        full: false,
      },
      randomIcon: [],
      blogTitle: "Laziji",
      blogDescribe: "欢迎来到辣子鸡的个人博客。",
      githubUsername: "GitHub-Laziji",
    };
  },
};
</script>