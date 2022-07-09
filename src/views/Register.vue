<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-4 login-box">
            <h2 class="login-title">Register</h2>
            <form @submit.prevent="register">
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" v-model="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-primary" @click="registerwithgoogle">Register with Google</button>
            </form>
            <p>{{email}}</p>
            <p>{{password}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref } from 'vue';

export default {
    data() { 
        return { 
            email: ref(''), 
            password: ref(''), 
        }; 
    },
    methods:{
        register() {
            console.log("fun run");
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((data) => {
                console.log('success');
                this.$router.push('/dashbord');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

        },
        registerwithgoogle(){
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                
                /*const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                
                const user = result.user;*/
                console.log("success");
                this.$router.push('/adminblog');
                
            }).catch((error) => {
                
                const errorCode = error.code;
                const errorMessage = error.message;
               
                const email = error.customData.email;
                
                const credential = GoogleAuthProvider.credentialFromError(error);
               
            });
        }
    }
    
    
}
</script>


<style>
    .login-box{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 2px;
        background-color: gainsboro;
        padding: 20px;
        margin: 20px;
        border-radius: 24px;
    }
    
</style>