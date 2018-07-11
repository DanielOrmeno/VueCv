<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { stack } from '../assets/cv';

@Component({ name: 'tech' })
export default class extends Vue {

    public stack = stack;

    public mounted() {
        this.stack.forEach((s, j) => s.techs.forEach((t, i) => {
            setTimeout(() => this.$nextTick(() => t.skill = t.target), i * j * 400);
        }));
    }
}
</script>

<template>
    <v-flex xs12 md4>
        <div class="title font-weight-regular">Tech Stack</div>
        <br/>
        <div v-for="s in stack" :key="s.label">
            <div class="subheading font-weight-regular">{{s.label}}</div>
            <br/>
            <v-list dense>
                <template v-for="(item, index) in s.techs">
                    <v-list-tile :key="item.title" avatar>
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-progress-linear color="secondary lighten-5"
                                    height="5"
                                    :value="item.skill"
                                    :key="index"></v-progress-linear>
                </template>
            </v-list>
            <br>
        </div>
    </v-flex>
</template>

<style lang="less" scoped>
.v-list {
    margin: 0 1em 0 0;
    .v-progress-linear {
        margin-top: 0;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
