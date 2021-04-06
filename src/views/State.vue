<template>
    <div>
        <Header :new-message-count="newMessageCount"/>
        <div class="container mx-auto mt-5">
            <!-- <ChatList
                :chat-list="chatList"
                @read-item="readChatItem"/> -->
            <ChatList
                :chat-list="chatList"/>
        </div>
    </div>
    <!-- <div>
        <button type="button" @click="makeEvent">이벤트 생성</button>
    </div> -->
</template>
<script>
//import Vue from 'vue';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import { mapState } from 'vuex';

import { bus } from '../event-bus';

//const bus = new Vue();
// 이벤트 버스의 경우, 이벤트 상속으로 인한 복잡한 형태 대신 이벤트 시작점과 부모를 간단하게
// 이어주지만 대규모 서비스로 갈 수록 이벤트의 출처를 찾기 어려워 유지보수가 어렵다
// 따라서 대규모에서 사용하는 것이 Vuex

export default {
    // 이벤트 버스 테스트
    // methods: {
    //     makeEvent() {
    //         bus.$emit('BUTTON-CLICK', 'data');
    //     }
    // },
    // created() {
    //     bus.$on('BUTTON-CLICK', data => {
    //         console.log(data);
    //     });
    // }
    data() {
        return {
            // vuex로 이동
            // chatList: [
            //     { id: 1, lastMessage: '채팅 메시지 1', new: 1 },
            //     { id: 2, lastMessage: '채팅 메시지 2', new: 2 },
            //     { id: 3, lastMessage: '채팅 메시지 3', new: 1 },
            //     { id: 4, lastMessage: '채팅 메시지 4', new: 5 },
            // ],
        }
    },
    computed: {
        // 현재 새 메시지 갯수
        newMessageCount() {
            return this.chatList.map(item => item.new).reduce((a, b) => a + b);
        },
        // spread 연산자 ... 
        ...mapState({
            // 아래 두 내용은 동일
            chatList: state => state.chatList
            //chatList: 'chatList'
            // 함수로도 설정 가능
            // chatlist(state) {
            //     return state.chatList.filter(chat => chat.new >=2);
            // }
        }),
        // ...mapGetters({
        //     chatList: 'chatList'
        // })
    },
    methods: {
        // 메시지 체크 이후 갯수
        readChatItem(chatItem) {
            this.chatList.filter(item => item.id === chatItem.id)[0].new = 0;
        }
    },
    created() {
        bus.$on('CHAT_CLICK', chat => {
            this.readChatItem(chat);
        });
    },
    components: {
        Header,
        ChatList,
    },
    mounted() {
        //console.log(this.$store);
    }
}
</script>

<style>
</style>