<script setup>
    import {ref} from 'vue';
    import { RouterLink } from 'vue-router';
    const email = ref('');
    const password = ref('');

    const handleLogin = () =>{
        console.log(email);
    }

</script>

<template>
    <div class="login-container">
        <h1>Iniciar Sesión</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <div>
                    <label for="email">Correo: </label>
                    <input v-model="email" type="email" name="email" id="" placeholder="example@email.com">
                </div>
                <div>
                    <label for="password">Contraseña: </label>
                    <input v-model="password" type="password" name="password" id="" placeholder="*******">
                </div>
            </div>    
            <button type="button">Entrar</button>
        </form>
        <RouterLink to="/register">
            <a href="">Registrate Aquí</a>
        </RouterLink>
    </div>
</template>

<style scoped>

</style>