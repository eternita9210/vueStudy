<template>
    <div>
        <h1>About Page</h1>
        <!-- <ul style="list-style:none">
            <li :key="item.id" v-for="item in items">
                {{item.id}}
                <img :src="item.image"/>
                <br/>
                {{item.title}}
            </li>
        </ul>
        <img :id="`thumbnail_${id}`" :src="image" />
        <div :style="[style, fontStyle]">
            테스트용 div
        </div> -->
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
            items: [
                {id: 1, image: 'https://picsum.photos/201/118/?image=1', title: '컴퓨터'},
                {id: 2, image: 'https://picsum.photos/201/118/?image=100', title: '해변'},
                {id: 3, image: 'https://picsum.photos/201/118/?image=160', title: '휴대폰'},
                {id: 4, image: 'https://picsum.photos/201/118/?image=200', title: '소'},
            ],
            id: 1,
            image: "https://picsum.photos/200/200/?image=353",
            style: {
                background: 'red',
            },
            fontStyle: {
                fontSize: '10px',
                'font-family': 'dotum',
            },
            dropdown: {
                dropdown: true,
            },
            toggle: {
                on: false,
            }
        }
    }
}
</script>