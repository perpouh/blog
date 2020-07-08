<template>
  <div>
    <!-- 中略 -->
    <div class="theme-default-content">
      <h2>タグ一覧</h2>
      <TagList />
    </div>
    <!-- 中略 -->
  </div>
</template>

<script>
import TagList from './TagList.vue';
export default {
  components: {
    TagList
  }
}
</script>