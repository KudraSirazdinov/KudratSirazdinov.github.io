<script setup>

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { onMounted } from 'vue';

const possibilities = [
    {
        class : 'possibilities__card1', //класс
        text : 'Общение с классом', //текст
        description : 'Видеосвязь. Чат с классом', 
        src : '/p1.svg' 
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
onMounted( () => {
    const swiper = new Swiper(".possibilities__swiper", {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
})


  
</script>

<template>
    <section class="possibilities">
    <div class="container">
            <h2>
                Возможности
            </h2>
            <div class="swiper possibilities__swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for = "(item, index) in possibilities" :key="index">
                        <div class="col-sm-6 col-lg-3" >
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
                    </div>
                </div>  
                <div class="swiper-pagination">

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.possibilities{
    .swiper-pagination {
        position: relative;
        bottom: 0;
    }
}
</style>