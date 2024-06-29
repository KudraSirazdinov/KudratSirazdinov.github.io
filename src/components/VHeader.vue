<script setup>

</script>

<template>
    <header>
        <nav class="navigation">
            <div class="container">
                <div class="navigation__wrap">
                    <div class="navigation__logo">
                        <img src="/public/logo.png" alt="">  
                    </div>
                    <div class="navigation__menu"> <!--класс для кнопки с js-->
                        <button id="navigation__menu-button">
                            <img src="/public/nav_mob.svg" alt="" class="navigation__logo-button">
                        </button>
                        <div id="menu-content" class="navigation__menu-content"> <!--класс при нажатии на кнопку-->
                            <div class="content">
                                <button id="button-close" class="close"> 
                                    <img src="/public/close.svg" alt="">
                                </button>
                                <div class="content__text-list">
                                    <ul class="content__list">
                                    <li class="content__list-item">
                                        Возможности
                                    </li>
                                    <li class="content__list-item">
                                        Как это работает?
                                    </li>
                                    </ul>
                                    <ul class="content__info">
                                        <li class="content__info-item">
                                            г Сургут, ул Базовая, д. 34, офис 10 <br>
                                            ОГРН 1238600001200 <br>
                                            ИНН 8602309464
                                        </li>
                                        <li class="content__info-item">
                                            ООО Дотсолюшн © 2023
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="navigation__list">
                        <li class="navigation__list-item">
                            Возможности
                        </li>
                        <li class="navigation__list-item">
                            Как это работает?
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>