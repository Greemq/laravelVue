<template>
    <nav class="navbar navbar-expand-sm navbar-dark mb-2" style="background-color: #00a1d2">
        <div class="container">
            <a href="" class="navbar-brand">LV</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{name:'posts'}" class="nav-link">posts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'create'}" class="nav-link">create</router-link>
                    </li>
                </ul>

            </div>
        </div>

    </nav>
</template>

<script>
    export default {}
</script>
