<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { profile } from '../assets/cv';

@Component({ name: 'experience' })
export default class extends Vue {
    public overview = profile.overview;

    public onDownloadClicked() {
        (this.$refs.downloadBtn as any).click();
    }
}
</script>

<template>
<div>
    <v-layout>
        <v-flex>
            <div class="title font-weight-regular mb-4">Overview</div>
        </v-flex>
        <v-flex class="text-xs-right">
            <v-btn small outline color="secondary lighten-4" @click="onDownloadClicked">
                <fa-icon :icon="['fas', 'file-download']" size="lg"></fa-icon>
                <span class="ml-2">Download</span> 
            </v-btn>
            <a ref="downloadBtn" href="/Daniel.Ormeno.2018.pdf" download="Daniel.Ormeno.2018.pdf" hidden></a>
        </v-flex>
    </v-layout>
    <v-card>
        <v-card-text>
        <div class="body-2 font-weight-regular" v-html="overview"></div>
        </v-card-text>
    </v-card>
</div>
</template>