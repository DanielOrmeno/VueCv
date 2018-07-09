<script lang="ts">
import { experience } from '../assets/experience';

export default {
    name: 'experience',
    data: () => ({
        experience,
    }),
};
</script>

<template>
    <v-flex xs12 md8>
        <div class="title font-weight-regular">Professional Experience</div>
        <br>
        <v-card v-for="e in experience" :key="e.company" class="mb-2">
            <v-container fluid grid-list-lg>
                <v-layout row>
                    <v-flex xs7>
                        <div class="subheading">{{e.company}}</div>
                        <div>{{e.years}}</div>
                    </v-flex>
                    <v-flex xs5>
                        <v-card-media
                            :src="e.logo"
                            height="35px"
                            contain></v-card-media>
                        </v-flex>
                </v-layout>
                <v-layout row>
                    <v-chip v-for="t in e.tags"
                                :key="t"
                                outline
                                small
                                color="secondary">{{t}}</v-chip>
                </v-layout>
            </v-container>
        </v-card>
    </v-flex>
</template>
