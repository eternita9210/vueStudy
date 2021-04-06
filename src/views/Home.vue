<template>
    <div>
        <h1>Welcome to {{title}}</h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
        </select>

        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d, i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>

        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d, i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>

        <!-- v-if는 조건 성립하지 않으면 해당 태그를 렌더링 하지 않지만
            v-show는 조건 성립 유무와 상관 없이 렌더링은 해둔 상태에서 show/not show = display none -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Vue 공부하기',
            input1: 'abc',
            options: [
                {v: "S", t:"Seoul"},
                {v: "J", t:"Jeju"},
                {v: "B", t:"Busan"},
            ],
            region: "J",
            tableShow: false,
        }
    },
    watch: { // data 변수명과 동일하게 지은 함수가 있으면 data 변경 시 watch에서 확인 가능
        input1() {
            console.log(this.input1);
        }
    },
    methods: {
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1 = "12345";
        },
        changeRegion() {
            this.tableShow = true;
        }
    },
    beforeCreate() {
        console.log('beforeCreated');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
}
</script>