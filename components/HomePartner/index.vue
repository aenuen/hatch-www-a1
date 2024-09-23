<template>
  <div class="partnerContent">
    <ul>
      <li v-for="(item, index) in linkAry" :key="index">
        <a :href="item.url" target="_blank" :title="item.name" :style="{ backgroundImage: 'url(' + item.cover + ')' }" />
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api'
export default {
  name: 'HomeParent',
  data() {
    return {
      api,
      linkAry: [],
    }
  },
  created() {
    this.gainLinkData()
  },
  methods: {
    async gainLinkData() {
      await api.linkList({ type: 2, sort: '-sort' }).then(({ code, data, msg }) => {
        this.linkAry = data
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
