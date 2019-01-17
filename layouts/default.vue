<template>
  <v-app>
    <v-layout column>
      <v-content>
        <v-container style="height: 100%">
          <nuxt />
        </v-container>
      </v-content>
      <v-footer app>
        <span>&copy; all rights reserved 2019</span>
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style>
  #app {
    color: rgb(65, 65, 65);
  }
  .h-100 {
    height: 100%;
  }
  .align-right {
    text-align: right;
  }
  .w-fit-content {
    width: fit-content;
    width: -moz-fit-content;
  }
  .color-gray {
    color: rgb(65, 65, 65);
  }
  .link-undecorated {
    color: rgb(65, 65, 65);
    text-decoration: none;
  }
  .row-flex {
    display: flex;
    flex-direction: row;
  }
  .col-flex {
    display: flex;
    flex-direction: column;
  }
</style>

