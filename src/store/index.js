import Vuex from 'vuex';
import Vue from 'vue';

// 모듈을 따로 파일에 저장하여 사용 가능
// index.js 파일에 import 할 것
import module1 from './module1';

Vue.use(Vuex);

const module2 = {
    namespaced: true,
    state: {
        module2Value: 'Module 2'
    },
    getters: {
        module2ValueWithHello(state, getters, rootState) {
            console.log('module2 state: ', state);
            console.log('module2 rootState: ', rootState);
            return 'Hello, ' + state.module2Value;
        }
    },
    mutations: {
        setModule2Value(state, value) {
            state.module2Value = value;
        }
    },
    actions: {
        setModule2Value(context, value) {
            context.commit('setModule2Value', value);
        }
    }
};

const module3 = {
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
            state.chatList.forEach(item => {
                if(item.id === chat.id) {
                    item.new = 0;
                }
            })
        }
    },
    actions: {
        readChat(context, chat) {
            context.commit('readChat', chat);
            // $.ajax({
            //     url: 'api/read-chat',
            //     type: 'post',
            //     data: {
            //         chat,
            //     },
            //     success: function() {
            //         context.commit('readChat', chat);
            //     }
            // })
        }
    }
}

const store = new Vuex.Store({
    modules: {
        module1,
        module2,
        module3,
    }
});

export default store;