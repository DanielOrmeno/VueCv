<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { buttons, profile } from '../assets/cv';

@Component({ name: 'header' })
export default class extends Vue {
    public buttons = buttons;
    public profile = profile;

    public open(url: string) {
      window.open(url);
    }
}
</script>

<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs4 md3 class="text-xs-center">
       <v-avatar
          :tile="false"
          size="100"
          color="grey lighten-4">
          <img :src="profile.image" alt="profile picture">
        </v-avatar>
      </v-flex>
      <v-flex xs8 md6>
        <div class="mt-3">
          <div class="headline">{{profile.name}}</div>
          <v-spacer></v-spacer>
          <div class="title font-weight-light">{{profile.title}}</div>
          <div class="subheading font-weight-light">{{profile.location}}</div>
        </div>
      </v-flex>
      <v-flex xs12 md3 class="text-xs-center text-md-right">
          <v-btn v-for="btn in buttons"
                :key="btn.label"
                small
                outline
                color="grey lighten-2"
                @click="open(btn.url)">
            <fa-icon :icon="btn.icon" size="lg"></fa-icon>
            <span class="hidden-sm-and-down">{{ btn.label }}</span>
          </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="less">
  @import '../assets/styles/variables.less';
  .container {
    background-color: @secondary;
    color: white;
  }
  .social, .v-btn {
    cursor: pointer;
    span {
      margin-left: 1em;
    }
  }
</style>
