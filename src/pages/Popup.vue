<template>
    <q-form
      ref="popup"
      id="bbex-popup"
      tabindex="-1"
      @keyup.enter="submit"
      @keyup.esc="cancel"
      @submit="submit"
      @reset="reset"
      class="q-gutter-md q-pa-md" style="max-width: 400px"
    >
      <q-card>
        <q-toolbar class="bg-primary text-white">
          <q-toolbar-title>
            Add Bookmark
          </q-toolbar-title>
          <q-space/>
          <q-btn
            flat
            dense
            round
            @click="cancel"
            aria-label="Cancel"
          >
            <q-icon name="cancel" />
          </q-btn>

        </q-toolbar>

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

        <q-card-actions>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="Cancel" color="primary" flat class="q-ml-sm" @click="cancel" />
        </q-card-actions>

      </q-card>
    </q-form>

</template>

<style lang="scss">
.q-form {
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;
  border: 0px;
  outline: 0px;
}
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
    this.open()
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
    open () {
      this.$refs.popup.$el.focus()
      /* this.$q.bex.send('open-popup', { someKey: 'aValue' }).then(response => {
        window.alert('Some response from the other side')
      }) */
    },
    close () {
      this.$q.bex.send('close-popup', { someKey: 'aValue' }).then(response => {
        window.alert('Some response from the other side')
      })
    }
  }
}
</script>
