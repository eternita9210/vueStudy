<template>
    <div>
        <button type="button" @click="add">더하기</button>
        {{ counter }}
        <input type="text" @keyup="keyUp"/>
        <button type="button" @click="buttonClick">클릭</button>
        <div :class="[dropdown, toggle]">
            <ul>
                <li><a href="#">메뉴1</a></li>
                <li><a href="#">메뉴2</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0,
            dropdown: {
                dropdown: true,
            },
            toggle: {
                on: false,
            }
        }
    },
    methods: {
        add() {
            this.counter++;
        },
        keyUp(ev) {
            if(ev.keyCode !== 13) {
                console.log('엔터키가 아님');
                return;
            }
            console.log('엔터키 눌림');
        },
        buttonClick() {
            this.toggle.on = ! this.toggle.on;
        }
    }
}
</script>