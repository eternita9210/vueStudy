<template>
    <button type="button" class="list-group-item text-left d-flex justify-content-between align-items-center" @click="itemClick">
        {{ chat.lastMessage }}
        <span class="badge badge=primary badge-pill">{{ chat.new }}</span>
    </button>
</template>
<script>
//import { bus } from '../event-bus';

export default {
    props: ['chat'],
    methods: {
        itemClick() {
            // 일반적으로 선언한 이벤트: this.$emit('click', {...this.chat});
            // event bus를 이용한 이벤트: bus.$emit('CHAT_CLICK', {...this.chat});
            // store의 mutation을 이용한 이벤트: this.$store.commit('readChat', {...this.chat});
            // store의 actions를 이용한 이벤트
            this.$store.dispatch('readChat', {...this.chat});
        }
    }
}
</script>