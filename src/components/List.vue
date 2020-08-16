<template>
    <div>
        <p class="my-header-blue">게시판 목록</p>
        <div class="content">
            <table border="1">
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>조회수</th>
                    <th></th>
                </tr>
                <tr v-for="v in items" v-bind:key="v.no">
                    <td>{{v.no}}</td>
                    <td v-on:click="boardRead(v.no)">{{v.title}}</td>
                    <td>{{v.view}}</td>
                    <td><button v-on:click="boardDelete(v.no)">삭제</button></td>
                </tr>
            </table>
            <p style="text-align: right;">
                <button><router-link :to="{name: 'Write'}">작성</router-link></button>
            </p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'List',
    data(){
        return {
            
        }
    },
    methods:{
        boardRead(num){
            this.$router.push({name:"No", query:{no: num}});
        },
        boardDelete(num){
            this.$store.commit('boardDelete', num-1); //인덱스
        }
    },
    computed:{
        ...mapGetters([
            'items'
        ])
    },
    created: function () {
        this.$store.dispatch('initStore');
        
    },
}
</script>

<style scoped>
a{
    color: white;
    text-decoration: none;
}
 .router-link-exact-active {
    color: white;
 }
</style>