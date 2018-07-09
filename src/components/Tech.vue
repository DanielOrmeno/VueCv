<script lang="ts">
export default {
    name: 'tech',
    data: () => ({
        items: [
            {
                avatar: 'https://vuejs.org/images/logo.png',
                title: 'VueJs',
                skill: 85,
            },
            {
                avatar: 'https://angular.io/assets/images/logos/angular/angular.svg',
                title: 'Angular',
                skill: 75,
            },
            {
                avatar: 'https://docs.microsoft.com/en-us/dotnet/images/hub/net.svg',
                title: '.NET Framework',
                skill: 70,
            },
            {
                avatar: 'https://docs.microsoft.com/en-us/dotnet/images/hub/netcore.svg',
                title: '.NET Core',
                skill: 60,
            },
        ],

        languages: [
            {
                avatar: 'https://cdn-images-1.medium.com/max/1052/1*DN7ToydkJZEdVaJVK_Nhvw.png',
                title: 'Javascript',
                skill: 70,
            },
            {
                avatar: 'https://docs.microsoft.com/en-us/dotnet/images/hub/csharp.svg',
                title: 'C#',
                skill: 75,
            },
            {
                avatar: 'https://cdn-images-1.medium.com/max/1187/1*JsyV8lXMuTbRVLQ2FPYWAg.png',
                title: 'Typescript',
                skill: 65,
            },
            {
                avatar: 'https://devimages-cdn.apple.com/assets/elements/icons/swift/swift-64x64_2x.png',
                title: 'Swift',
                skill: 50,
            },
        ],
        web: [
            {
                avatar:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png',
                title: 'HTML',
                skill: 85,
            },
            {
                avatar: 'http://lesscss.org/public/img/less_logo.png',
                title: 'Less',
                skill: 85,
            },
        ],
    }),
};
</script>

<template>
    <v-flex xs12 md4>
        <div class="title font-weight-regular">Tech Stack</div>
        <br/>
        <div class="subheading font-weight-regular">Frameworks</div>
        <br/>
        <v-list dense>
            <template v-for="(item, index) in items">
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
        <div class="subheading font-weight-regular">Languages</div>
        <br/>
        <v-list dense>
            <template v-for="(item, index) in languages">
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
        <br/>
        <div class="subheading font-weight-regular">Web Development</div>
        <br/>
        <v-list dense>
            <template v-for="(item, index) in web">
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
