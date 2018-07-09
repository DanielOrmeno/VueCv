import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faTwitter, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCodepen);
library.add(faTwitter);
library.add(faStackOverflow);
library.add(faGithub);

Vue.component('fa-icon', FontAwesomeIcon)