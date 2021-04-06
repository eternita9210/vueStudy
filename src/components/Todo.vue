<template>
    <button class="list-group-item text-left" @click="clickButton">
        {{label}}
    </button>
</template>
<script>
export default {
    props: ['label'], // import 시 건네 받을 값
    methods: {
        clickButton() {
            this.$emit('componentClick'); // 이벤트 발생
        }
    }
}
</script>