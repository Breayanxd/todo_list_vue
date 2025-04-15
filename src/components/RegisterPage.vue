<script setup>
    import { ref, watch } from 'vue';
    import { useRouter } from 'vue-router';
    import { registerUser } from '@/services/AuthServices';

    const router = useRouter();
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const error = ref(false);
    const message = ref('');

    watch([password, confirmPassword], ()=>{                
        if(password.value.length > 0 && password.value !== confirmPassword.value){
            message.value = "Las contraseñas no coinciden, intentalo de nuevo"
            error.value = true
        }else{
            error.value = false
        }
    })

    const handleRegister = async () =>{     
        if(error.value === false){
            try {
                const user = {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                }                                
                const data = await registerUser(user);                                
                setTimeout(() => router.push('/'), 2000)                
            } catch (err) {
                console.log(err);                
            }        
        }
    }

</script>

<template>
    <div>
        <h1>Registro</h1>
        <form @submit.prevent="handleRegister">
            <div>
                <div>
                    <label for="name">Nombre: </label>
                    <input v-model="name" type="text" name="name" id="">
                </div>
                <div>
                    <label for="email">Correo: </label>
                    <input v-model="email" type="email" name="email">
                </div>
                <div>
                    <label for="password">Contraseña: </label>
                    <input v-model="password" type="password" name="password">
                </div>
                <div>
                    <label for="confirmPassword">Confirmar contraseña</label>
                    <input v-model="confirmPassword" type="password" name="confirmPassword">
                </div>                
            </div>
            <p v-if="error" style="color:red;">{{ message }}</p>
            <button type="sumbit">Registrar</button>            
        </form>
        <RouterLink to="/">
            <a href="">Ya tengo una cuenta</a>
        </RouterLink>
    </div>
</template>

<style scoped>

</style>