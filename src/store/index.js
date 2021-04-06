import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    // strict: true 로 배포하는 경우, 성능 이슈가 발생
    strict: process.env.NODE_ENV !== 'production',
    state: {
        // 상태값 정의
        chatList: [
            { id: 1, lastMessage: '채팅 메시지 1', new: 1 },
            { id: 2, lastMessage: '채팅 메시지 2', new: 2 },
            { id: 3, lastMessage: '채팅 메시지 3', new: 1 },
            { id: 4, lastMessage: '채팅 메시지 4', new: 5 },
        ],
    },
    // 사용자 정의 > 사용시 mapGetters
    // getters: {
    //     chatList: (state, getters) => state.chatList.filter(chat => chat.new >=2)
    // }
    mutations: {
        readChat(state, chat) {
            
        }
    }
});

export default store;