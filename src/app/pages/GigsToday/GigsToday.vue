<template>
  <div class="full-width">
    <LoadSpinner :isLoading="isLoading" />
    <Day :day="todayGigs" :onClick="goTo" v-if="!isLoading" />
    <BackToTopButton />
  </div>
</template>

<script>
  import { retrieveDays } from '../../services/jota-api'
  import { isoToday } from '../../services/date-utils'

  retrieveDays()
  export default {
    data () {
      return {
        todayGigs: {},
        isLoading: false
      }
    },
    async created() {
      this.isLoading = true
      const days = await retrieveDays()
      this.todayGigs = days[isoToday()]
      this.isLoading = false
    },
    methods: {
      goTo(gig) {
        this.jotaRouter.navigateToGig(gig.id)
      }
    }
  }
</script>
