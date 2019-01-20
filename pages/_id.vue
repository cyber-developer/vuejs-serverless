<template>
  <v-layout justify-start column style="height: 100%">
    <div class="title">
      <h1 class="align-right">Nurse</h1>
    </div>
    <v-divider ></v-divider>
    <div class="nurse" v-if="nurse.length > 0">
      <v-card class="bio">
        <div class="avatar elevation-2"></div>
        <span class="name">{{nurse[0].firstname + ' ' + nurse[0].lastname}}</span>
        <span class="job">{{nurse[0].job_title}}</span>
      </v-card>
      <v-card class="experience">
        <v-layout row @click="displayForm">
          <h3>Work Experience</h3> <span>+</span>
        </v-layout>
        <v-layout column>
          <div @click="edit(index)" v-for="(item, index) in nurse" :key="item.id" v-if="nurse[0].company" class="work">
            <div class="company">{{item.company}}</div>
            <span>{{item['date_from'] + ' - ' + item['date_to']}}</span>
          </div>
        </v-layout>
      </v-card>
    </div>
     <v-dialog
      v-model="showForm"
      width="500"
      :value="showForm"
    >
      <v-card
      class="dialog">
        <v-text-field v-model="form.company" label="company name"></v-text-field>
        <v-text-field v-model="form.from" label="From"></v-text-field>
        <v-text-field v-model="form.to" label="to"></v-text-field>
        <v-btn @click="submit" color="success">Submit</v-btn>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import api from '@/services/RestService'

export default {
  data() {
    return {
      id: this.$route.params.id,
      form: {},
      showForm: null
    }
  },
  computed: {
    ...mapGetters({
      nurse: 'activeNurse'
    })
  },
  mounted() {
    this.getNurse(this.$route.params.id);
  },
  methods: {
    ...mapActions(['getNurse']),
    displayForm() {
      this.showForm = true;
    },
    submit() {
      this.form.nurseId = this.id;
      this.showForm = false;
      if(!this.form.eid)
        api.post("experience", this.form)
          .then(res => this.showForm = null)
          .catch(err => console.log(err))
      else
        api.put("nurses/" + this.form.eid, this.form)
          .then(res => this.showForm = null)
          .catch(err => console.log(err))
      this.form = {};
    },
    edit(index) {
      this.form = this.nurse[index];
      this.form.id = this.nurse[index].eid;
      this.form.to = this.nurse[index].date_to;
      this.form.from = this.nurse[index].date_from;
      this.showForm = "true";
    }
  },
  async asyncData ({store, params}) {
    try{
    await store.dispatch('getNurse', params.id);
    }
    catch(err) {
      this.window.location = "http://localhost:3000/" + params.id;
    }
  }
}
</script>

<style>
.title {
    margin-bottom: 20px;
}
.nurse {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
}
.bio, .experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 250px;
  padding: 10px;
}
.bio > * {
  padding: 10px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 80px !important;
}
.experience {
  min-width: 400px;
  align-items:flex-start;
}
.work {
  padding: 10px;
  border: 1px solid rgb(207, 207, 207);
}
.dialog {
  padding: 50px;
}
</style>
