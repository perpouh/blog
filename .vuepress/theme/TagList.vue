<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-default-content">
      <template v-for="tag in tags">
        <a v-bind:href="tag.path" style="margin-right: 8px;">{{ tag.name }}</a>
      </template>
    </div>
    <slot name="bottom" />
  </main>
</template>

<script>
export default {
  computed: {
    tags() {
      return this.$frontmatterKey.list;
    }
  }
};
</script>