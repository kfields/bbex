<template>
  <div style="max-width: 300px">
    <q-input filled v-model="date" :dark="dark" :label="label" stack-label>

      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="date" :mask="mask"/>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="date" :mask="mask" />
          </q-popup-proxy>
        </q-icon>
      </template>

    </q-input>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number, Date],
    label: String,
    dark: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mask: 'YYYY-MM-DD hh:mm a',
      date: this.$moment(this.value).format(this.mask)
    }
  },
  watch: {
    value: function (val) {
      this.date = this.$moment(val).format(this.mask)
    },
    date: function (val) {
      this.$emit('input', new Date(val))
    }
  },
  mounted () {
    this.date = this.$moment(this.value).format(this.mask)
  },
  methods: {
  }
}
</script>
