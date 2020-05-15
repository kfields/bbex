<template>
  <q-item clickable>
    <q-item-section avatar>
      <img :src="`chrome://favicon/${event.url}`"/>
    </q-item-section>
    <q-item-section @click="titleClick">
      {{ event.title }}
    </q-item-section>
    <q-item-section side>
      <tippy
          interactive
          :animate-fill="false"
          placement="bottom"
          offset="0, 8"
          theme="light"
          animation="fade"
          trigger="click"
          arrow>
        <template v-slot:trigger>
          <q-btn fab-mini flat icon="more_vert"/>
        </template>
        <q-list>
          <q-item @click="frame.remove()" clickable>
            <q-item-section avatar>
              <q-icon name="delete" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Delete</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </tippy>
    </q-item-section>

  </q-item>
</template>

<script>
export default {
  name: 'EventHeader',
  props: ['event'],
  data () {
    return {
      titleClicks: 0,
      delay: 250
    }
  },
  methods: {
    titleClick (e) {
      if (e.stopPropagation) e.stopPropagation()
      if (e.preventDefault) e.preventDefault()
      e.cancelBubble = true
      e.returnValue = false
      this.titleClicks++
      if (this.titleClicks === 1) {
        setTimeout(() => {
          switch (this.titleClicks) {
            case 1:
              console.log('single click')
              this.$router.push(`/url/${encodeURIComponent(this.event.url)}`)
              break
            default:
              console.log('double click')
              window.open(this.event.url, '_blank')
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
