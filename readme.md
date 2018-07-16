# Vue CV 😎

### A simple, one pager, resume template written in VueJs.


#### Fork me, hack me, *animate me* and share me!

---
## Dependencies
* [VueJs](https://vuejs.org)
* [Vue CLI](https://cli.vuejs.org)
* [Typescript](https://www.typescriptlang.org/) (Why not)
* [Vuetify](https://Vuetifyjs.com/en/)
* [FontAwesome 5 (free)](https://fontawesome.com/)

## Setup

### Install dependencies

``` bash
$ npm run install
```

### Run

``` bash
$ npm run serve
```

### Build

``` bash
$ npm run build
```

---
## Customising
To setup your own content simply update the `src/assets/cv.ts` file and any images (Profile image, logos, etc... )that you might need.

### Out of the box sections

#### Buttons
An array of buttons to be rendered in the header of the CV to link to social media and whatnot. For example:

``` typescript
export const buttons = [
    { icon: ['fab', 'github'], label: 'Github', url: 'https://github.com/danielOrmeno' },
    { icon: ['fab', 'codepen'], label: 'Codepen', url: 'https://codepen.io/dormenog' }
];
```

Check the Font awesome documentation for Vue icons [here](https://github.com/FortAwesome/vue-fontawesome)

### Profile
Defines the Profile and summary as seen on the header and in the first section of the CV.
The fields are pretty much self-explanatory, the overview can handle `HTML` makup.

``` typescript
export const profile = {
    name: 'John Doe',
    title: 'Software Developer',
    location: 'AwesomeVille.',
    image: '/img/profile.jpg',
    overview: `<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. Phasellus id finibus felis, vel interdum neque. In hac habitasse platea dictumst. Nam facilisis, felis eget pharetra faucibus, neque justo eleifend ligula, a finibus lorem justo ut odio.`,
};
```

### Experience
#### (You can replace it with side projects or whatever)
An array of experience items, fields are pretty self-explanatory, title and description handles `HTML`
``` typescript
export const experience = [
    {
        company: 'Some Company',
        title: 'Software Developer <small>Intern</small>',
        years: '2016 - 2018',
        tags: ['.Net', 'C#', 'VueJS', 'Angular', 'Azure'],
        logo: 'https://someCompany.com/img/copyFreeLogo.svg',
        description: `Made Cofee, introduced bugs, broke build.`,
    },
    // ...
];
```

### Education
An array of education items, fields are pretty self-explanatory, institution handles `HTML`
``` typescript
export const education = [
    {
        institution: 'University Name <span class="font-weight-light">AwesomeVille</span>',
        degree: 'Some Degree'
        years: '2015 - 2018',
        hightlights: ['5 Gold Stars'],
        logo: 'https://www.totallyLegal/img/copy-free-logo.svg',
    },
    // ...
];
```

### Stack
A list of technologies you know. use an object like `{ label: '', techs: [] }` to break it up in sections. For example.

*Note*: Use the `target` field (a number between 0 - 100) to set up the level of proficiency for a specific technology.

``` typescript
export const stack = [
    {
        label: 'Frameworks',
        techs: [
            {
                avatar: 'https://vuejs.org/images/logo.png',
                title: 'VueJs',
                skill: 0,
                target: 85,
            },
            {
                avatar: 'https://docs.microsoft.com/en-us/dotnet/images/hub/net.svg',
                title: '.NET Framework',
                skill: 0,
                target: 70,
            },
        ],
    },
    {
        label: 'Languages',
        techs: [
            {
                avatar: 'https://cdn-images-1.medium.com/max/1052/1*DN7ToydkJZEdVaJVK_Nhvw.png',
                title: 'Javascript',
                skill: 0,
                target: 70,
            },
            {
                avatar: 'https://docs.microsoft.com/en-us/dotnet/images/hub/csharp.svg',
                title: 'C#',
                skill: 0,
                target: 75,
            }
        ],
    },
];
```

### Complementary
Anything else you want to list, like interests or hobbies.

``` typescript
export const complementary = [
    {
        title: 'Agile Software Development',
    },
    {
        title: 'TDD',
    },
    {
        title: 'Webpack',
    },
];
```