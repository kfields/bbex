<template>
  <q-item clickable>
    <q-item-section avatar>
      <img :src="`chrome://favicon/${bookmark.url}`"/>
    </q-item-section>
    <q-item-section @click="titleClick">
      {{ bookmark.title }}
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
          <!-- <q-item clickable @click="$pubsub.publish('BookmarkAction', { action: 'edit', bookmark})">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Edit</q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item clickable @click="$pubsub.publish('BookmarkAction', { action: 'delete', bookmark})">
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
  name: 'BookmarkHeader',
  props: ['bookmark'],
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
              this.$router.push(`/bookmarks/${this.bookmark.id}`)
              break
            default:
              console.log('double click')
              window.open(this.bookmark.url, '_blank')
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
