<template>
    <div>
        <p class="my-header-blue">게시판 글쓰기</p>
        <div class="content">
            <table border="1">
                <tr>
                    <th style="width:30%">제목</th>
                    <td><input type="text" v-model="title" style="width:94%"></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>
                        <textarea v-model="content" cols="30" rows="10"></textarea>
                    </td>
                </tr>
            </table>
            <p style="text-align: right;">
                <button v-on:click="boardSave">작성</button>
                <button v-on:click="boardList">목록</button>
            </p>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Write',
        data(){
            return {
                title:"",
                content:""
            }
        },
        methods:{
            boardList(){
                this.$router.go(-1);
            },
            boardSave(){
                this.$store.commit('boardSave', this.title, this.content);
                this.$router.push({name:"List"})
            },
            
        },
        created: function () {
            this.$store.dispatch('initStore');
        },
        
    }
</script>

<style scoped>

</style>