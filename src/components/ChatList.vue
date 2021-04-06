<template>
    <div class="list-group">
        <template v-for="chat in chatList">
            <!-- <ChatListItem
                :key="chat.index"
                :chat="chat"
                @click="itemClick"/> -->
            <ChatListItem
                :key="chat.index"
                :chat="chat"/>
        </template>
    </div>
</template>
<script>
import ChatListItem from './ChatListItem';

export default {
    props: ['chatList'],
    methods: {
        // itemClick(chatItem) {
        //     this.$emit('read-item', chatItem);
        // }
    },
    components: {
        ChatListItem,
    }
}
</script>