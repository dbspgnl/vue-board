<template>
    <div>
        <p class="my-header-blue">게시판 글보기</p>
        <div class="content">
            <table border="1">
                <tr>
                    <th style="width:30%">제목</th>
                    <td>{{items[no].title}}</td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>
                        <textarea cols="30" rows="10" readonly v-model="items[no].content"></textarea>
                    </td>
                </tr>
            </table>
            <p style="text-align: right;">
                <button v-on:click="boardDelete">삭제</button>
                <button v-on:click="boardList">목록</button>
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'Detail',
        // props:{
        //     no:{
        //         type: Number,
        //         default:0
        //     }
        // },
        data(){
            return {
                no: this.$route.query.no-1 //배열은 0부터
            }
        },
        methods:{
            boardList(){
                this.$router.go(-1);
            },
            boardDelete(){
                this.$store.commit('boardDelete', this.no);
                this.$router.push({name:"List"})
            },
        },
        computed:{
            ...mapGetters([
                'items'
            ])
        },
    }
</script>

<style scoped>

</style>