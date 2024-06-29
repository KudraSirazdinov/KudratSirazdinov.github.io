
import './scss/vendor.scss' /* сначала  подключаем стили библиотек, потом наши собственные*/
import './scss/style.scss'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

var body = document.getElementById("body");
var modal = document.getElementById("menu-content"); //переменная modal отвечает за элемент с id menu-content и возвращает объект глобальный атрибут id которого соответствует указанной строке.
var btn1 = document.getElementById("navigation__menu-button"); //btn1 - кнопка открытия меню
var btn2 = document.getElementById("button-close"); //btn2 - кнопка закрытия меню
btn1.onclick = function(){ //при нажатии на кнопку меняется стиль с ID menu-content на display = "block (изначально было none)
    modal.style.display = "block"; /*Это меняет стиль отображения модального элемента на «блочный», делая его видимым.*/ 
    body.style.position = "fixed"; /* Это устанавливает стиль позиции элемента body на «фиксированный», предотвращая прокрутку тела.*/
    body.style.overflow = "scroll"; /*Это устанавливает стиль «переполнения» элемента «body» на «прокрутку», гарантируя, что содержимое по-прежнему можно прокручивать внутри фиксированного тела. */
    
}

btn2.onclick = function(){ //снова становить дислей нан при нажатии на крестик
    modal.style.display = "none"; /*Это изменяет стиль отображения модального элемента на «none», делая его невидимым. */
    body.style.position = "static"; /*Это устанавливает стиль позиции элемента body обратно на статический.*/
    body.style.overflow = "auto"; /*Это устанавливает стиль «переполнения» элемента «body» обратно на «авто», восстанавливая поведение прокрутки по умолчанию. */

}