<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-default-content">
      <span v-if="$page.frontmatter.tags" class="iconfont reco-tag tags">
        <span v-for="(subItem, subIndex) in $page.frontmatter.tags"
          :key="subIndex"
          class="tag-item"
          @click="goTags(subItem)">
            #{{subItem}}
        </span>
      </span>
      <Content />
    </div>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

.video-wrapper 
    position: relative;
    width: 100%;
    &:before
      content:"";
      display: block;
      padding-top: 56.25%;

#content
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
</style>
