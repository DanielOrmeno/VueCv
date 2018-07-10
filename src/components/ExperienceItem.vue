<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import service from '../services/xp.service';

@Component({ name: 'experience-item' })
export default class extends Vue {
    @Prop([Number])
    public itemIndex?: number;
    public item?: { company: string, title: string, description: string, logo: string, tags: string[] } | null = null;

    @Watch('itemIndex')
    public onItemIndexUpdated(value: number) {
        if (value >= 0 ) {
            this.item = service.getByIndex(value);
        }
    }
}
</script>

<template>
    <v-card>
        <v-container fluid grid-list-lg v-if="item">
                <v-layout row>
                    <v-flex xs7>
                        <div class="title font-weight-regular">{{item.company}}</div>
                        <div>{{item.years}}</div>
                    </v-flex>
                    <v-flex xs5>
                        <v-card-media
                            :src="item.logo"
                            height="50px"
                            contain></v-card-media>
                        </v-flex>
                </v-layout>
                <v-layout column class="mt-4 mb-4">
                    <div class="title mb-3 font-weight-regular" v-html="item.title"></div>
                    <div class="body-2 font-weight-regular" v-html="item.description"></div>
                </v-layout>
                <v-layout row wrap>
                    <v-chip v-for="t in item.tags"
                                :key="t"
                                outline
                                small
                                color="secondary">{{t}}</v-chip>
                </v-layout>
            </v-container>
    </v-card>
</template>
