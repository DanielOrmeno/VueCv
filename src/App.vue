<script lang="ts">
import Header from './components/Header.vue';
import Experience from './components/Experience.vue';
import ExperienceItem from './components/ExperienceItem.vue';
import Tech from './components/Tech.vue';

import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({ name: 'experience', components: { Header, Experience, ExperienceItem, Tech } })
export default class extends Vue {
    public dialog = false;
    public itemSelected: number = -1;

    public openDialog(item: number) {
      this.dialog = true;
      this.itemSelected = item;
    }
}
</script>
<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 lg8 offset-lg2>
          <v-card>
            <Header></Header>
            <v-container class="card-content">
              <v-layout wrap>
                <Tech></Tech>
                <Experience v-on:selected="openDialog"></Experience>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer app>
      <v-spacer></v-spacer>
      <span class="mr-4">Daniel Ormeno &copy; 2018</span>
    </v-footer>
    <v-dialog v-model="dialog"
              width="500">
              <experience-item :itemIndex="itemSelected"></experience-item>
    </v-dialog>
  </v-app>
</template>

<style lang="less" scoped>
@import './assets/styles/variables.less';
.card-content {
  background-color: #F5F5F5;
}
</style>
