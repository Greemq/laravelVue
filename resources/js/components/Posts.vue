<template>

    <table class="table">
        <tr class="thead-dark">
            <th>#</th>
            <th>title</th>
            <th>created_at</th>
            <th>action</th>
        </tr>
        <tbody>
        <tr v-for="post in posts">
            <th>{{post.id}}</th>
            <td>{{post.title}}</td>
            <td>{{post.created_at}}</td>
            <td>
                <button class="btn-danger btn" v-on:click="deletePost(post.id)">delete</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data: function () {
            return {
                loading: true,
                posts: [],
                post: {
                    id: '',
                    title: '',
                    created_at: ''
                }
            }
        },
        mounted() {
            this.getPosts().then(function (data) {
                this.posts = data
            })
        },
        methods: {
            getPosts() {
                axios.get('http://lv.local/api/post').then(res => {
                    this.posts = res.data;
                });
            },
            deletePost(id) {
                axios({
                    method: 'delete',
                    url: `api/post/${id}`,
                })
            }
        }
    }

</script>

