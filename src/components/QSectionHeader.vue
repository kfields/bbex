<template>
  <q-card-section class="q-section-header">
    <q-icon :name="icon" class/>
    <slot/>
  </q-card-section>
</template>

<script>
export default {
  name: 'QSectionHeader',
  props: ['icon'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
