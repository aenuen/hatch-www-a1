<script>
export default {
  name: 'ScreenWidth',
  data() {
    return {
      screenWidth: 0,
    }
  },
  mounted() {
    this.updateScreenWidth()
    window.addEventListener('resize', this.updateScreenWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth)
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth
    },
  },
}
</script>
<style lang="scss" scoped></style>
