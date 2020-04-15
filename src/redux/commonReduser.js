import React from "react";
import htmlImg from "../assets/img/svg/html.db258945.svg";
import cssImg from "../assets/img/svg/css.0af690f7.svg";
import javaScriptImg from "../assets/img/svg/javascript.6f32e301.svg";
import reactImg from "../assets/img/svg/reactIcon.633579c4.svg";
import reduxImg from "../assets/img/svg/redux.17af9974.svg";
import typeScriptImg from "../assets/img/svg/typescript.a6e0504b.svg";
import axiosImg from "../assets/img/svg/axios.5b4197e9.svg";
import githubImg from "../assets/img/svg/github.144406db.svg";
import workItem1 from "../assets/img/works/1.jpg";
import workItem2 from "../assets/img/works/2.jpg";
import workitem5 from "../assets/img/works/5.jpg";
import workItem3 from "../assets/img/works/3.jpg";
import workItem4 from "../assets/img/works/4.jpg";
import produce from 'immer'

const CHANGE_CURRENT_LANGUAGE = 'CHANGE_CURRENT_LANGUAGE'

let initialState = {
    language: 'EN', textContent: {
        about: {
            h2: 'About Me',
            h3FirstPart: 'A Quick', h3SecondPart: 'Info',
            welcomeParagraph: 'Welcome to my portfolio site.',
            aboutMeFirstParagraph: 'My name is Alexander Shibaev, i am a frontend developer (with some knowledge of backend development).\n' +
                '                                            Here you can find some examples of my projects, which are based on the use\n' +
                '                                            of the "React" library',
            aboutMeSecondParagraph: 'My main goal for now -  is to progress and level up my skills in web development and make some benefit to my employer.  So if  you liked my projects, and you think that we can be useful to each other , contact me.',
            hireButton: 'Hire Me Now'
        },
        contact: {
            h2: 'Contact Me',
            nameFormFieldPlaceholder: 'Name',
            contactsFormFieldPlaceholder: 'contacts',
            messageFormFieldPlaceholder: 'message',
            buttonSubmit: 'Send Message'
        },
        footer: {address: 'Perm, Russia', copyright: '2020 Copyright Shibaev Alex'},
        header: {
            navigationLink1: 'Home',
            navigationLink2: 'About',
            navigationLink3: 'Skills',
            navigationLink4: 'My Projects',
            navigationLink5: 'Contact',
            typedFirstDisplay: 'Frontend-developer.',
            typedSecondDisplay: 'Shibaev Alexander.',
            languageActive: 'EN'
        },
        skills: {
            h2: 'Skills', skillsData: [{
                h: "HTML",
                src: htmlImg,
                description: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. "
            },
                {
                    h: "CSS",
                    src: cssImg,
                    description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML."
                },
                {
                    h: "JavaScript",
                    src: javaScriptImg,
                    description: "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages,"
                },
                {
                    h: "React",
                    src: reactImg,
                    description: "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time."
                },
                {
                    h: "Redux",
                    src: reduxImg,
                    description: "A library which holds and updates the entire state of the app in the simplest manner possible while also using the least amount of boilerplate code."
                },
                {
                    h: "TypeScript",
                    src: typeScriptImg,
                    description: "TypeScript is an open-source programming language. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language."
                },
                {
                    h: "Axios",
                    src: axiosImg,
                    description: "Axios is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and Node. js platforms."
                },
                {
                    h: "GitHub",
                    src: githubImg,
                    description: "GitHub is a Git repository hosting service, but it adds many of its own features."
                }
            ]
        },
        work: {
            h2: 'My Projects',
            link: 'Watch',
            workData: [{
                img: workItem1,
                projectTitle: "Todolist",
                projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,TypeScript,react,redux,react-redux,redux-thunk, axios, e.t.c.</span>
                    <h6>Used technologies for backend :</h6><span>NodeJS, Express, MongoDB,Mongoose, Heroku (Self made solution).</span>
                </React.Fragment>,
                link: 'https://alexgitrepo.github.io/todoListRefactor/',
                linkText:'Watch'

            },
                {
                    img: workItem2,
                    projectTitle: "Social Network",
                    projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux, redux-thunk, axios, redux-form e.t.c.</span>
                        <h6>Used technologies for backend :</h6>
                        <span>https://social-network.samuraijs.com/api/1.0.</span>
                        <p><b>Notice: If you want to try all available opportunities - request login and password.</b>
                        </p>
                    </React.Fragment>
                    ,
                    link: 'https://alexgitrepo.github.io/SocialNetwork/',
                    linkText:'Watch'
                },
                {
                    img: workitem5,
                    projectTitle: "Charity run",
                    projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux,redux-form e.t.c.</span>
                    </React.Fragment>
                    ,
                    link: 'https://alexgitrepo.github.io/competition/',
                    linkText:'Watch'
                },
                {
                    img: workItem3, projectTitle: "Portfolio",
                    projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux, axios, redux-form e.t.c.</span>
                        <h6>Used technologies for backend :</h6><span> NodeJS, Express, nodemailer, Heroku (Self made solution, for e-mail sending).</span>
                    </React.Fragment>,
                    link: 'https://alexgitrepo.github.io/portfolio/',
                    linkText:'Watch'
                },
                {
                    img: workItem4, projectTitle: "Counter",
                    projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux e.t.c.</span>
                    </React.Fragment>,
                    link: 'https://alexgitrepo.github.io/counter/',
                    linkText:'Watch'
                }
            ]
        }
    }
}

const russianState = {
    language: 'RU', textContent: {
        about: {
            h2: 'Обо Mнe',
            h3FirstPart: 'Краткая', h3SecondPart: 'Информация',
            welcomeParagraph: 'Добро пожаловать в мое портофлио.',
            aboutMeFirstParagraph: 'Меня зовут Шибаев Александр, я фронтенд разработчик (с определенными познаниями в области бекенда).\n' +
                '                                            Здесь вы можете найти примеры моих проектов, которые основаны на использовании библиотеки React.',
            aboutMeSecondParagraph: 'Моя главная цель на данный момент - развивать свои познания в области веб разработки и приносить пользу своему работодателю.  Если Вас заинтересовали мои проекты, и вы думайте, что мы можем быть полезны друг другу, свяжитесь со мной.',
            hireButton: 'Связаться со мной'
        },
        contact: {
            h2: 'Связаться со мной',
            nameFormFieldPlaceholder: 'Ваше имя',
            contactsFormFieldPlaceholder: 'Ваши контакты',
            messageFormFieldPlaceholder: 'Текст сообщения',
            buttonSubmit: 'Отправить Сообщение'
        },
        footer: {address: 'Пермь, Россия', copyright: '2020 Все права защищены Шибаев Алесандр'},
        header: {
            navigationLink1: 'Главная',
            navigationLink2: 'Обо Мне',
            navigationLink3: 'Навыки',
            navigationLink4: 'Проекты',
            navigationLink5: 'Связь',
            typedFirstDisplay: 'Фронтенд-разработчик.',
            typedSecondDisplay: 'Шибаев Александр.',
            languageActive: 'RU'
        },
        skills: {
            h2: 'Навыки', skillsData: [{
                h: "HTML",
                src: htmlImg,
                description: "Язык гипертекстовой разметки (HTML) - это стандартный язык разметки для документов, предназначенных для отображения в веб-браузере. "
            },
                {
                    h: "CSS",
                    src: cssImg,
                    description: "Каскадные таблицы стилей - это язык таблиц стилей, используемый для описания отображения документа, написанного на языке разметки, например HTML."
                },
                {
                    h: "JavaScript",
                    src: javaScriptImg,
                    description: 'JavaScript - это динамический типизируемый язык программирования. Чаще всего используется как часть веб-страниц.'
                },
                {
                    h: "React",
                    src: reactImg,
                    description: "React - это библиотека для создания пользовательских интерфейсов. В её основе лежит создание повторно используемых компонентов."
                },
                {
                    h: "Redux",
                    src: reduxImg,
                    description: "Библиотека, которая хранит и обновляет состояние приложения самым простым способом, используя при этом наименьшее количество стандартного кода."
                },
                {
                    h: "TypeScript",
                    src: typeScriptImg,
                    description: "TypeScript - это язык программирования с открытым исходным кодом. TypeScript - добавляет в язык JavaScript статическую типизацию."
                },
                {
                    h: "Axios",
                    src: axiosImg,
                    description: "Axios - это очень популярная JavaScript библиотека, которую вы можете использовать для выполнения HTTP-запросов, которая работает как в браузере, так и в Node.js."
                },
                {
                    h: "GitHub",
                    src: githubImg,
                    description: "GitHub - это хостинг Git-репозиториев, так же он добавляет множество дополнительных функций."
                }
            ]
        },
        work: {
            h2: 'Мои проекты',
            workData: [{
                img: workItem1,
                projectTitle: "Тodo Лист",
                projectDescription: <React.Fragment><h6>Технологии для фронтенда :</h6><span>HTML, CSS, Javascript,TypeScript,react,redux,react-redux,redux-thunk, axios, и.т.д.</span>
                    <h6>Технологии для бекенда :</h6><span>NodeJS, Express, MongoDB,Mongoose, Heroku (Собственное решение).</span>
                </React.Fragment>,
                link: 'https://alexgitrepo.github.io/todoListRefactor/',
                linkText:'Смотреть'
            },
                {
                    img: workItem2,
                    projectTitle: "Социальная сеть",
                    projectDescription: <React.Fragment><h6>Технологии для фронтенда :</h6><span>HTML, CSS, Javascript,react,redux,react-redux, redux-thunk, axios, redux-form и.т.д.</span>
                        <h6>Технологии для бекенда :</h6>
                        <span>https://social-network.samuraijs.com/api/1.0.</span>
                        <p><b>Внимание: Запросите логин и пароль чтобы оценить все возможности .</b>
                        </p>
                    </React.Fragment>
                    ,
                    link: 'https://alexgitrepo.github.io/SocialNetwork/',
                    linkText:'Смотреть'

                },
                {
                    img: workitem5,
                    projectTitle: "Благотворительный забег",
                    projectDescription: <React.Fragment><h6>Технологии для фронтенда :</h6><span>HTML, CSS, Javascript,react,redux,react-redux,redux-form и.т.д.</span>
                    </React.Fragment>
                    ,
                    link: 'https://alexgitrepo.github.io/competition/',
                    linkText:'Смотреть'

                },
                {
                    img: workItem3, projectTitle: "Портфолио",
                    projectDescription: <React.Fragment><h6>Технологии для фронтенда :</h6><span>HTML, CSS, Javascript,react,redux,react-redux, axios, redux-form и.т.д.</span>
                        <h6>Технологии для бекенда :</h6><span> NodeJS, Express, nodemailer, Heroku (Собственное решение, для отправки e-mail).</span>
                    </React.Fragment>,
                    link: 'https://alexgitrepo.github.io/portfolio/',
                    linkText:'Смотреть'

                },
                {
                    img: workItem4, projectTitle: "Счетчик",
                    projectDescription: <React.Fragment><h6>Технологии для фронтенда :</h6><span>HTML, CSS, Javascript,react,redux,react-redux и.т.д.</span>
                    </React.Fragment>,
                    link: 'https://alexgitrepo.github.io/counter/',
                    linkText:'Смотреть'

                }
            ]
        }
    }
}
const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case (CHANGE_CURRENT_LANGUAGE): {
            if (action.language === 'EN'){
                return produce(state, (draftState) => {
                    return draftState = initialState
                })
            } else if (action.language === 'RU') {
                return produce(state, (draftState) => {
                    return draftState = russianState
                })
            }
        }
        default :
            return state
    }
}

export const changeLanguage = (language) => {
    return {type: CHANGE_CURRENT_LANGUAGE, language}
}
export default commonReducer


