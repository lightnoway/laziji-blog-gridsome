<template>
  <div>
    <h2>Post</h2>
    <div>{{$page.blog.title}}</div>
    <div>{{$page.blog.content}}</div>
  </div>
</template>
<page-query>
query ($id:ID!){
  blog: strapiPost(id: $id) { 
    id
    title
    content
  }
  # blogs:allStrapiPost{
  #   edges{
  #     node{
  #       title
  #       content
  #       id
  #     }
  #   }
  # }
}
</page-query>