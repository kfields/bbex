<template>
    <q-card>
        <q-card-section class="bg-primary text-white">
          Add Bookmark
        </q-card-section>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="submit"
      @reset="reset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="tabTitle"
        label="Title"
      />

      <q-input
        filled
        v-model="tabUrl"
        label="Url"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Cancel" flat class="q-ml-sm" @click="cancel" />
      </div>
    </q-form>

  </div>
        <q-card-actions/>
    </q-card>
</template>

<style lang="scss">
</style>

<script>
export default {
  mixins: [],
  name: 'PopupPage',
  data () {
    return {
      tabTitle: '',
      tabUrl: ''
    }
  },
  mounted () {
    this.reset()
  },
  methods: {
    submit () {
      const data = {
        title: this.tabTitle,
        url: this.tabUrl
      }
      chrome.bookmarks.create(data, (bookmark) => {
        console.log(bookmark)
      })
      this.close()
    },
    reset () {
      chrome.tabs.getSelected(null, (tab) => {
        this.tabTitle = tab.title
        this.tabUrl = tab.url
      })
    },
    cancel () {
      this.close()
    },
    close () {
      this.$q.bex.send('close-popup', { someKey: 'aValue' }).then(response => {
        window.alert('Some response from the other side')
      })
    }
  }
}
</script>
