<script setup>
// composable title
const title = ref('TechShop');
</script>

<template>
  <Head>
    <Title>{{title}}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
