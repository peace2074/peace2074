<script lang="ts" setup>
import { RequestPostI } from "~/types";
const { data: post } = ((await useFetch("/api/posts")) as unknown) as RequestPostI;
</script>

<template>
  <div class="p2">    
    <h3>
      <em>{{ post.data?.id }}</em> - {{ post?.data.title }}
    </h3>
    <p>{{ post?.data.body }}</p>
  </div>
</template>

<style>
.p2{
  padding: 2rem;
}
</style>
