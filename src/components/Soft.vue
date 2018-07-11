<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { complementary } from '../assets/cv';

@Component({ name: 'complementary' })
export default class extends Vue {
    public complementary = complementary;
}
</script>

<template>
    <v-flex xs12 md4>
        <div class="title font-weight-regular">Complementary</div>
        <br/>
        <v-list dense>
            <template v-for="(item, index) in complementary">
                <v-list-tile :key="item.title" avatar>
                    <v-list-tile-avatar>
                        <fa-icon :icon="['far', 'check-square']" size="2x" color="secondary lighten-6"></fa-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider :key="index" v-if="index < complementary.length - 1"></v-divider>
            </template>
        </v-list>
    </v-flex>
</template>

<style lang="less" scoped>
.v-list {
    margin: 0 1em 0 0;
    .fa-check-square {
        color: darkgray;
    }
}
</style>
