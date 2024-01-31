<script lang="ts">
    export default{
        data() {
            return {
                loading: false,
                infos: null,
                err: null
            }
        },
        created() {
            this.fetchData()

        },
        methods: {
            async fetchData() {
                this.loading = true;
                const response = await fetch("http://localhost:3000/api/customer/personal-infos/1", {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2Mzc3Nzc5LCJleHAiOjE3MDY5ODI1Nzl9.IjhMzqZ2Bb3UxVt4VMvouzvmHQ3gS70bBCSa5ojSh24",
                        "Content-Type": "application/json"
                    }
                })
                const userData = await response.json();
                console.log(userData);
                this.loading = false;
                this.infos = userData;
            }
        }
    }
    
    
</script>

<template>
    <h2 v-if="loading">Loading</h2>
    <div v-if="!loading && infos">
        <h2 >Eh bien...</h2>
        <p>{{ infos.id }}</p>
        <p>{{ infos.email }}</p>
        <p>{{ infos.firstName }}</p>
        <p>{{ infos.lastName }}</p>
    </div>

</template>