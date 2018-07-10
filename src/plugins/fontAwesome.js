import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faTwitter, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faExpandArrowsAlt);

library.add(faCodepen);
library.add(faTwitter);
library.add(faStackOverflow);
library.add(faGithub);

Vue.component('fa-icon', FontAwesomeIcon)