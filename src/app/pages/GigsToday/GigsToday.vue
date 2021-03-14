<template>
  <div class="full-width">
    <Day :day="todayGigs" :onClick="goTo"/>
  </div>
</template>

<script>
  import { retrieveDays } from '../../services/jota-api'
  import { isoToday } from '../../services/date-utils'

  retrieveDays()
  export default {
    data () {
      return {
        todayGigs: {}
      }
    },
    async created() {
      const days = await retrieveDays()
      this.todayGigs = days[isoToday()]
    }
  }
</script>
