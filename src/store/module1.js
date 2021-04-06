const module1 = {
    namespaced: true, // 모듈 간 이름이 동일한 getter, action을 구분하기 위함
    state: {
        module1Value: 'Module 1'
    },
    getters: {
        module1ValueWithHello(state, getters, rootState) {
            console.log('module1 state: ' , state);
            console.log('module1 rootState: ' , rootState);
            return 'Hello, ' + state.module1Value;
        }
    },
    mutations: {
        setModule1Value(state, value) {
            state.module1Value = value;
        }
    },
    actions: {
        setModule1Value(context, value) {
            context.commit('setModule1Value', value);
        }
    }
};

export default module1;