<script lang="ts">
import Header from './components/Header.vue';
import Experience from './components/Experience.vue';
import Tech from './components/Tech.vue';

export default {
  name: 'App',
  components: { Header, Experience, Tech },
};
</script>
<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 lg8 offset-lg2>
          <v-card>
            <Header></Header>
            <v-container class="card-content">
              <v-layout>
                <Tech></Tech>
                <Experience></Experience>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer app>
      <v-spacer></v-spacer>
      <span>Daniel Ormeno &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<style lang="less" scoped>
@import './assets/styles/variables.less';
.card-content {
  background-color: #F5F5F5;
}
</style>
