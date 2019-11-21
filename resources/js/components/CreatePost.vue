<template>
    <div class="card">
        <div class="card-body">
            <form @submit="add">
                <h5>title</h5>
                <input type="text" class="form-control" v-model="title">
                <h5>body</h5>
                <textarea class="form-control" v-model="body" cols="30" rows="4"></textarea>
                <br>
                <button class="btn btn-success">ADD</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreatePost",
        data() {
            return {
                title: '',
                body: ''
            }
        },
        methods: {
            add(d) {
                axios.post('/api/post', {
                    title: this.title,
                    body: this.body
                }).then(data=>{
                    this.$router.push({name:'home'})
                });
            }
        }
    }
</script>

<style scoped>

</style>
