import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faTwitter, faStackOverflow, faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

var i = [ faExpandArrowsAlt, faCheckSquare ];
var b = [ faCodepen, faTwitter, faStackOverflow, faGithub, faVuejs ];
[...i, ...b].forEach(i => library.add(i));

Vue.component('fa-icon', FontAwesomeIcon)