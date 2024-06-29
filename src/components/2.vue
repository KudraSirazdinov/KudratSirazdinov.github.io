<!-- const possibilities = [
    {
        class : 'possibilities__card1', //класс
        text : 'Общение с классом', //текст
        description : 'Видеосвязь. Чат с классом', //описание
        src : '/p1.svg' //путь до картинки
    },
    {
        class : 'possibilities__card2',
        text : 'Проведение занятий',
        description : 'Презентация файлов Демонстрация экрана',
        src : '/p2.svg'
    },
    {
        class : 'possibilities__card3',
        text : 'Посещаемость',
        description : 'Автоматическое отслеживание присутствующих',
        src : '/p3.svg',
    },
    {
        class : 'possibilities__card4',
        text : 'История занятий',
        description : 'Материалы урока',
        src : '/p4.svg',
    }
];
</script>

<template>
    <section class="possibilities">
    <div class="container">
            <h2>
                Возможности
            </h2>
            <div class="row">
                <div class="col-sm-6 col-lg-3" v-for = "(item, index) in possibilities" :key="index">
                    <div :class="item.class">
                        <img class = "possibilities-img" :src="item.src" alt="">
                        <div class="possibilities-item">
                            {{ item.text }}
                        </div>
                        <p>
                            {{item.description}}
                        </p>
                    </div>
                </div>
                <!-- <div class="col-sm-6 col-lg-3">
                    <div class="possibilities__card2">
                        <img class = "possibilities-img" src="/public/p2.svg" alt="">
                        <div class="possibilities-item">
                            Проведение занятий
                        </div>
                        <p>
                            Презентация файлов
                            <br>
                            Демонстрация экрана
                        </p>
                    </div>
                </div> -->
                <!-- <div class="col-sm-6 col-lg-3">
                    <div class="possibilities__card3">
                        <img class = "possibilities-img" src="/public/p3.svg" alt="">
                        <div class="possibilities-item">
                            Посещяемость
                        </div>
                        <p>
                            Автоматическое 
                            <br>
                            отслеживание 
                            <br>
                            присутствующих
                        </p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="possibilities__card4">
                        <img class = "possibilities-img" src="/public/p4.svg" alt="">
                        <div class="possibilities-item">
                            История занятий
                        </div>
                        <p>
                            Материалы урока
                        </p>
                    </div>
                </div> --> -->