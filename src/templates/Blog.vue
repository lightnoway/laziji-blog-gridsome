<template>
  <Layout>
    <h2>Post</h2>
    <div>{{$page.blog.title}}</div>
    <div>{{$page.blog.content}}</div>
  </Layout>
</template>
<page-query>
query ($id:ID!){
  blog: strapiPost(id: $id) { 
    id
    title
    content
  }
}
</page-query>