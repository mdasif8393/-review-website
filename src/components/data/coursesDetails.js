const coursesInfo = [
    {
        name: 'C',
        info: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.',
        key: '1',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'
    },
    {
        name: 'C++',
        info: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
        key: '2',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'
    },
    {
        name: 'Java',
        info: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
        key: '3',
        img: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png'
    },
    {
        name: 'Python',
        info:'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.',
        key:'4',
        img: 'https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png'
    },
    {
        name: 'Kotlin',
        info:'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlins standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. ',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1024px-Kotlin_Icon.png'
    },
    {
        name: 'GO',
        info:'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.',
        key: '6',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png'
    },
    {
        name: 'JavaScript',
        info:'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
        key: '7',
        img: 'data:image/png;base64,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'
    },
    {
        name: 'React',
        info:'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
        key: '8',
        img: 'data:image/png;base64,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'
    },
    {
        name: 'Angular',
        info:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
        key: '9',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
    },
    {
        name: 'Vue JS',
        info:'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
        key: '10',
        img: 'data:image/png;base64,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'
    },
]