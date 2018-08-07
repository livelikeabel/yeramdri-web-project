<template>
  <div class="bible-card-box">
    <div class="bible-card-content" v-bind:style="bibleCardStyle" v-on:click="goIndividualPage"></div>
  </div>
</template>
<script>
import { EventBus } from '../../event-bus.js'
import router from '../../../../router'
export default {
  props: ['cardId', 'cardImage'],
  name: 'BibleCard',
  data () {
    return {
      bibleCardStyle: {
        width: '26vw',
        height: '26vw',
        background: 'url("' + this.cardImage + '")',
        backgroundSize: 'cover'
      }
    }
  },
  methods: {
    goIndividualPage () {
      EventBus.$emit('cardClick', 'click')
      router.push('/bible/' + this.cardId)
    }
  }
}
</script>
