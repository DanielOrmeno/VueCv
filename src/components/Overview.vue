<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { profile } from '../assets/cv';

@Component({ name: 'experience' })
export default class extends Vue {
    public overview = profile.overview;
}
</script>

<template>
<div>
    <div class="title font-weight-regular mb-4">Overview</div>
    <v-card>
        <v-card-text>
        <div class="body-2 font-weight-regular" v-html="overview"></div>
        </v-card-text>
    </v-card>
</div>
</template>