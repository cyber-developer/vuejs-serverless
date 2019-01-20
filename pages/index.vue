<template>
  <v-layout justify-start column style="height: 100%">
    <div class="title">
      <h1 class="align-right">Nurses</h1>
    </div>
    <v-divider ></v-divider>
    <div 
      class="nurses">
      <nuxt-link 
        v-for="nurse in nurses"
        :key="nurse.id"
        :to="`/${nurse.id}`" 
        class="nurse elevation-5 link-undecorated">
        <div class="row-flex">
          <div class="avatar elevation-2"></div>
          <h3>{{nurse.firstname + ' ' + nurse.lastname}}</h3>
        </div>
        <div>
          {{nurse.job_title}}
        </div>
      </nuxt-link>
    </div>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['nurses'])
  },
  mounted() {
    this.getNurses();
  },
  methods: {
    ...mapActions(['getNurses'])
  },
  async asyncData ({store}) {
    await store.dispatch('getNurses');
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 20px;
  }
  .nurses {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
  .nurses .nurse {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-width: 200px;
    width: 250px;
    min-height: 150px;
    margin: 0 10px;
    padding: 0px 20px;
  }
  .nurse .row-flex {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .nurse .row-flex * {
    margin: 0 10px;
  }
  .nurse .avatar {
    min-width: 80px;
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }
</style>

