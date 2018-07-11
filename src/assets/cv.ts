// tslint:disable:max-line-length
export const buttons = [
    { icon: ['fab', 'github'], label: 'Github', url: 'https://github.com/danielOrmeno' },
    { icon: ['fab', 'codepen'], label: 'Codepen', url: 'https://codepen.io/dormenog' },
    { icon: ['fab', 'stack-overflow'], label: 'StackOverflow', url: 'https://stackoverflow.com/users/5229157' },
];

export const profile = {
    name: 'Daniel Ormeño',
    title: 'Software Engineer',
    location: 'Brisbane, Australia.',
    image: 'https://media.licdn.com/dms/image/C5603AQEy_zqX7zJGdQ/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=SRDTOZ6zTli6WpKdsSTIx-79AD1RAVCPQIKwlGS0M_M',
    overview: `
    I'm a software engineer currently located in Brisbane, Australia.
    I have worked with a variety of technologies and frameworks that vary from simple mobile applications, to complex, cloud-based,
    enterprise systems that integrate with multiple information systems.
    <br/>
    <br/>
    I am originally from Venezuela and have been living in Australia for the last few years. I have a growing interest in software design, building customer driven solutions, greenfield projects using cutting edge and disruptive technologies.
    <br/>
    <br/>
    Lets get in touch!
    `,
};

export const education = [
    {
        institution: 'Griffith University <span class="font-weight-light">Australia</span>',
        degree: 'M.S. Information Technology Professional',
        years: '2016 - 2018',
        logo: 'https://www.griffith.edu.au/_globaldesigns/gen-10/images/griffith-logo-2.svg',
    },
    {
        institution: 'Universidad Andrés Bello <span class="font-weight-light">Venezuela</span>',
        degree: 'B.S. Telecommunications Engineering',
        years: '2017',
        logo: 'https://www.ucab.edu.ve/wp-content/uploads/sites/2/2017/09/Logo-UCAB-04.png',
    },
];

// tslint:disable:max-line-length
export const experience = [
    {
        company: 'Icon Group',
        title: 'Software Engineer',
        years: '2016 - 2018',
        tags: ['.Net', 'C#', 'VueJS', 'Angular', 'Azure'],
        logo: 'http://icongroup.global/wp-content/uploads/2016/06/icon-group-logo-small-1.png',
        description: `
        Worked with a complex cloud enterprise architecture, involving cloud services, message queues and RESTful APIs on Microsoft Azure.
        <br/>
        <br/>
        Responsible for the design, implementation and delivery of full features including web application development, web API endpoints and on-premise services and database management.
        <br/>
        <br/>
        Worked as an active member of two teams (Backend and Frontend). Overlooking code quality, mentoring and Leading the refactoring of a large legacy codebase moving to newer data driven frameworks <span class="font-weight-light">Vue Js</span>.
        <br/>
        <br/>
        Designed, Developed and maintained a full stack BackOffice solution using Angular, Material Design and .Net Core`,
    },
    {
        company: 'Creative Curiosity',
        title: 'Software Developer <span class="font-weight-light">Casual</span>',
        years: '2017',
        tags: ['Angular', 'Javascript'],
        logo: 'https://creativecuriosity.com.au/wp-content/uploads/2018/04/CreativeCuriosityLogo_2018_70px.jpg',
        description: `Worked as a Casual Software developer supporting the core development team in a variety of projects. Assisted with data migrations using Entity Framework, development of new features in existing projects build with ASP.NET and contributed to the development and delivery of projects using the Angular (4+) Framework including unit testing. Performed code reviews to maintain quality of code.`,
    },
    {
        company: 'RightCrowd',
        title: 'Software Engineer',
        years: '2015 - 2016',
        tags: ['.Net', 'C#', 'Knockout', 'Angular', 'SQL'],
        logo: 'https://www.rightcrowd.com/Images/logo280.png',
        description: `Involved in the development, implementation, maintenance and design of enterprise software. Worked as a full stack software engineer for leading
        software company in the physical security and compliance industry.<br/><br/>Involved in various projects for multinational companies, focusing on the Microsoft .NET framework and the design and development of solutions driven by web
        technologies.`,
    },
    {
        company: 'App Factory',
        title: 'iOS Developer',
        years: '2014 - 2015',
        tags: ['iOS', 'Swift', 'Android', 'ionic', 'JS'],
        logo: 'http://app-factory.com.au/assets/images/AFLogo.svg',
        description: `
        Worked as part of a team to deliver iOS components for a hybrid mobile application using the ionic framework.
        <br/>
        Responsible for the design, development, integration, delivery and maintenance of an native iOS localization plugin for a survey based mobile application.`,
    },
];

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
                avatar: 'https://angular.io/assets/images/logos/angular/angular.svg',
                title: 'Angular',
                skill: 0,
                target: 75,
            },
            {
                avatar: 'https://docs.microsoft.com/en-us/dotnet/images/hub/net.svg',
                title: '.NET Framework',
                skill: 0,
                target: 70,
            },
            {
                avatar: 'https://docs.microsoft.com/en-us/dotnet/images/hub/netcore.svg',
                title: '.NET Core',
                skill: 0,
                target: 55,
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
            },
            {
                avatar: 'https://cdn-images-1.medium.com/max/1187/1*JsyV8lXMuTbRVLQ2FPYWAg.png',
                title: 'Typescript',
                skill: 0,
                target: 65,
            },
            {
                avatar: 'https://devimages-cdn.apple.com/assets/elements/icons/swift/swift-64x64_2x.png',
                title: 'Swift',
                skill: 0,
                target: 50,
            },
        ],
    },
];

export const complementary = [
    {
        title: 'Agile Software Development',
    },
    {
        title: 'Strong OOP',
    },
    {
        title: 'Interested in TDD',
    },
    {
        title: 'Interested UX and Design',
    },
    {
        title: 'Design Patterns',
    },
    {
        title: 'S.O.L.I.D. principles',
    },
];

