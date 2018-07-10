<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import service from '../services/xp.service';

@Component({ name: 'experience' })
export default class extends Vue {
    public experience = service.getAll();
}
</script>

<template>
    <v-flex xs12 md8>
        <div class="title font-weight-regular">Professional Experience</div>
        <br>
        <v-card v-for="(e, i) in experience" :key="e.company" class="mb-2">
            <v-container fluid grid-list-lg>
                <v-layout row>
                    <v-flex xs7>
                        <div class="subheading">{{e.company}}</div>
                        <div class="body-2 font-weight-regular" v-html="e.title"></div>
                        <div class="body-2 font-weight-regular">{{e.years}}</div>
                    </v-flex>
                    <v-flex xs5>
                        <v-card-media
                            :src="e.logo"
                            height="35px"
                            contain></v-card-media>
                        </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-chip v-for="t in e.tags"
                            :key="t"
                            outline
                            small
                            color="secondary"
                            disabled>{{t}}</v-chip>
                </v-layout>
                <v-tooltip bottom class="expand">
                    <v-btn flat icon color="secondary lighten-5" @click="$emit('selected', i)" slot="activator">
                        <fa-icon icon="expand-arrows-alt"></fa-icon>
                    </v-btn>
                    <span>Learn more</span>
                </v-tooltip>
            </v-container>
        </v-card>
    </v-flex>
</template>

<style lang="less" scoped>
.expand {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>

