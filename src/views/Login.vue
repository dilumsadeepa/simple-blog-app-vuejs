<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-4 login-box">
            <h2 class="login-title">Login to your Account</h2>
            <form @submit.prevent="login">
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" v-model="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <button type="button" class="btn btn-info" @click="signwithgoogle">Sign in with Google</button>
        </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
export default {
    
    methods:{
        signwithgoogle(){
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                
                /*const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                
                const user = result.user;*/
                console.log("success");
                this.$router.push('/dashbord');
                
            }).catch((error) => {
                
                const errorCode = error.code;
                const errorMessage = error.message;
               
                const email = error.customData.email;
                
                const credential = GoogleAuthProvider.credentialFromError(error);
               
            });
        },
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                //const user = userCredential.user;
                // ...
                this.$router.push('/adminblog');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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

    .login-title{
        text-align: center;
        padding: 10px;
        margin: 10px;
    }
    
</style>