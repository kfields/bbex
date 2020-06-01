<template>
    <q-card>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>
          Add Favorite
        </q-toolbar-title>
        <q-space/>
        <q-btn
          flat
          dense
          round
          v-close-popup
          aria-label="Cancel"
        >
          <q-icon  name="cancel" />
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
        <q-btn v-close-popup label="Submit" type="submit" color="primary" @click="submit"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn v-close-popup label="Cancel" color="primary" flat class="q-ml-sm" @click="cancel" />
      </q-card-actions>

    </q-card>

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
  name: 'FavoriteCreate',
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
      this.$favorites.create(this.tabUrl, this.tabTitle)
      this.close()
    },
    reset () {
      this.tabTitle = ''
      this.tabUrl = ''
    },
    cancel () {
      this.close()
    },
    open () {
      // this.$refs.popup.$el.focus()
    },
    close () {
    }
  }
}
</script>
