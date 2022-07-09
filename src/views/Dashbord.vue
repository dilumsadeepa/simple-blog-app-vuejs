<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2">
                <SideBar />
            </div>
        </div>
    </div>

</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SideBar from '../components/SideBar.vue';



export default {
    data(){
        uid: ''
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                this.$router.push("/");
            }).catch((error) => {
                console.log(error.message);
            });
        },
        getuser(){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                this.uid = user.email;
                console.log(uid);
                
            } else {
                // User is signed out
                // ...
            }
            });
        }
    },
    components: { SideBar },
    beforeMount(){
        this.getuser()
    }
}
</script>

<style>
.nav-st-en{
    display: none;
}

.nav-st-de{
    display: block;
}

</style>