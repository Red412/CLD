const App = {
    data() {
        return {
            activeTab: 0,
            tabs: [
                { 
                    heading: '1 шаг',
                    title: 'Проводим консультацию', 
                    text: 'Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.', 
                    linkAdding: '#', 
                    linkAgree: '#', 
                    img: 'img/tabs_1.jpg', 
                },
                { 
                    heading: '2 шаг',
                    title: 'Составляем смету', 
                    text: 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.',
                    linkAdding: '#', 
                    linkAgree: '#', 
                    img: 'img/tabs_2.jpg',
                },
                { 
                    heading: '3 шаг',
                    title: 'Привлекаем подрядчиков', 
                    text: 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.',
                    linkAdding: '#', 
                    linkAgree: '#', 
                    img: 'img/tabs_3.jpg',
                },
                { 
                    heading: '4 шаг',
                    title: 'Инспектируем все этапы работ', 
                    text: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.',
                    linkAdding: '#', 
                    linkAgree: '#', 
                    img: 'img/tabs_4.jpg',
                },
            ],
            
        }
    },
    computed: {
        activeTabContent() {
            return this.tabs[this.activeTab]
        }
    }
}

Vue.createApp(App).mount('#app')

const app = {
    data() {
        return {
            activeAccordion: null,
            accordion: [
                {
                    title: 'Из чего формируется конечная стоимость проекта?',
                    text: 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.',
                    imgPlus: 'img/+х.svg',
                    imgMinus: 'img/-х.svg'
                },
                {
                    title: 'У меня есть свой проект. Сможем ли мы его доработать / реализовать?',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsum sunt cumque architecto eveniet quod atque. Quaerat nisi ipsum quos vel nesciunt! Officiis numquam molestiae rerum ipsa nostrum maiores aut! Incidunt cum facilis optio eum, totam soluta nobis? Libero cumque mollitia assumenda non necessitatibus est, cupiditate aliquid deleniti ad nobis! Molestias maiores recusandae non reiciendis nobis optio, accusantium sapiente pariatur minus. Aut tempore, voluptatibus quo voluptates et aliquam unde. Quibusdam deserunt blanditiis, alias temporibus numquam odit tenetur provident? Nam eveniet temporibus adipisci rerum iure quod saepe at debitis. Illo harum architecto aliquam ducimus placeat distinctio cum qui, corrupti natus voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsum sunt cumque architecto eveniet quod atque. Quaerat nisi ipsum quos vel nesciunt! Officiis numquam molestiae rerum ipsa nostrum maiores aut! Incidunt cum facilis optio eum, totam soluta nobis? Libero cumque mollitia assumenda non necessitatibus est, cupiditate aliquid deleniti ad nobis! Molestias maiores recusandae non reiciendis nobis optio, accusantium sapiente pariatur minus. Aut tempore, voluptatibus quo voluptates et aliquam unde. Quibusdam deserunt blanditiis, alias temporibus numquam odit tenetur provident? Nam eveniet temporibus adipisci rerum iure quod saepe at debitis. Illo harum architecto aliquam ducimus placeat distinctio cum qui, corrupti natus voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    imgPlus: 'img/+х.svg',
                    imgMinus: 'img/-х.svg'
                },
                {
                    title: 'Я выбираю между разными компаниями. В чём ваше отличие?',
                    text: 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.',
                    imgPlus: 'img/+х.svg',
                    imgMinus: 'img/-х.svg'
                },
                {
                    title: 'Могу ли я делегировать вам работу / согласование с подрядчиком / организацией? ',
                    text: 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.',
                    imgPlus: 'img/+х.svg',
                    imgMinus: 'img/-х.svg'
                },
                {
                    title: 'Могу ли я вернуть деньги на каком-либо из этапов работ?',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsum sunt cumque architecto eveniet quod atque. Quaerat nisi ipsum quos vel nesciunt! Officiis numquam molestiae rerum ipsa nostrum maiores aut! Incidunt cum facilis optio eum, totam soluta nobis? Libero cumque mollitia assumenda non necessitatibus est, cupiditate aliquid deleniti ad nobis! Molestias maiores recusandae non reiciendis nobis optio, accusantium sapiente pariatur minus. Aut tempore, voluptatibus quo voluptates et aliquam unde. Quibusdam deserunt blanditiis, alias temporibus numquam odit tenetur provident? Nam eveniet temporibus adipisci rerum iure quod saepe at debitis. Illo harum architecto aliquam ducimus placeat distinctio cum qui, corrupti natus voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsum sunt cumque architecto eveniet quod atque. Quaerat nisi ipsum quos vel nesciunt! Officiis numquam molestiae rerum ipsa nostrum maiores aut! Incidunt cum facilis optio eum, totam soluta nobis? Libero cumque mollitia assumenda non necessitatibus est, cupiditate aliquid deleniti ad nobis! Molestias maiores recusandae non reiciendis nobis optio, accusantium sapiente pariatur minus.',
                    imgPlus: 'img/+х.svg',
                    imgMinus: 'img/-х.svg'
                },
            ]
        }
    },
    methods: {
        start(el) {
            el.style.height = el.scrollHeight + "px";
        },
        end(el) {
            el.style.height = "";
        },
    }
}

Vue.createApp(app).mount('#accordion')
