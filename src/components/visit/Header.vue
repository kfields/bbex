<template>
  <q-item clickable>
    <q-item-section>
      <div>{{$moment(visit.visitTime).format('LLL')}}</div>
    </q-item-section>
    <q-item-section @click="titleClick">
      {{ visit.transition }}
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'VisitHeader',
  props: ['visit'],
  data () {
    return {
      titleClicks: 0,
      delay: 250
    }
  },
  methods: {
    titleClick (e) {
      if (e.stopPropagation) e.stopPropagation()
      if (e.prvisitDefault) e.prvisitDefault()
      e.cancelBubble = true
      e.returnValue = false
      this.titleClicks++
      if (this.titleClicks === 1) {
        setTimeout(() => {
          switch (this.titleClicks) {
            case 1:
              console.log('single click')
              this.$router.push(`/url/${encodeURIComponent(this.visit.url)}`)
              break
            default:
              console.log('double click')
              window.open(this.visit.url, '_blank')
          }
          this.titleClicks = 0
        }, this.delay)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
