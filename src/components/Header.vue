<script lang="ts">
export default {
  name: 'header',
  methods: {
      open(url: string) {
          window.open(url);
      },
  },
};
</script>

<template>
  <v-container fluid grid-list-lg>
    <v-layout row>
      <v-flex xs3 class="text-xs-center">
       <v-avatar
          :tile="false"
          size="100"
          color="grey lighten-4">
          <img src="https://pbs.twimg.com/profile_images/948567401141948417/0jKTRl4B_400x400.jpg" alt="profile picture">
        </v-avatar>
      </v-flex>
      <v-flex xs6>
        <div class="mt-3">
          <div class="headline">Daniel Ormeño</div>
          <v-spacer></v-spacer>
          <div class="title font-weight-light">Software Engineer</div>
          <div class="subheading font-weight-light">Brisbane, Australia.</div>
        </div>
      </v-flex>
      <v-flex xs3 class="text-xs-right">
          <v-btn  small outline color="grey lighten-2" @click="open('https://github.com/danielOrmeno')">
            <fa-icon :icon="[ 'fab', 'github' ]" size="lg"></fa-icon>
            <span>GitHub</span>
          </v-btn>
          <v-btn  small outline color="grey lighten-2" @click="open('https://codepen.io/dormenog')">
            <fa-icon :icon="[ 'fab', 'codepen' ]" size="lg"></fa-icon>
            <span>Codepen</span>
          </v-btn>
          <v-btn small outline color="grey lighten-2" @click="open('https://stackoverflow.com/users/5229157')">
            <fa-icon :icon="[ 'fab', 'stack-overflow' ]" size="lg"></fa-icon>
            <span>StackOverflow</span>
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
