<template>
  <Layout>
    <h2>Blog</h2>
    <div>{{$page.blog.title}}</div>
    <div>{{$page.blog.content}}</div>
  </Layout>
</template>
<page-query>
query ($id:ID!){
  blog: strapiBlog(id: $id) { 
    id
    title
    content
  }
}
</page-query>