<template>
  <div class="container-fluid">
        <div class="row">
            <div class="col-sm-1">
                
            </div>

            <div class="col-sm-10">
                <br>
               <h2>Add Blogs</h2><br>
                <h3>{{ms}}</h3>
                    <div class="mb-3 mt-3">
                        <label for="title" class="form-label">Title:</label>
                        <input type="text" class="form-control" placeholder="Enter Title" v-model="title">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="image" class="form-label">Image URL:</label>
                        <input type="text" class="form-control" placeholder="Enter Image URL" v-model="imgurl">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="catagaey" class="form-label">Catagary:</label>
                        <input type="text" class="form-control" placeholder="Enter Catagary" v-model="cat">
                    </div>
                    
                    <div class="mb-3 mt-3">
                        <label for="Blog" class="form-label">Blog:</label>
                        <vue-editor v-model="content"></vue-editor>
                    </div>
                    <br>
                    <button type="button" class="btn btn-info" @click="addtodatabase">Save</button>
                

            </div>
            <div class="col-sm-1">
                
            </div>

        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

};
// Initialize Realtime Database and get a reference to the service
 

export default {
    data(){
        return {
            uid: '',
            title: '',
            cat: '',
            imgurl: '',
            content: "<h1>Some initial content</h1>",
            id: new Date().toLocaleString(),
            ms:''
        };
        
    },
    methods:{
        getuser(){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                this.uid = user.email;
                
            } else {
                // User is signed out
                // ...
            }
            });
        },
        addtodatabase(){
            const firebaseConfig = {
                databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

            };
            const db = getDatabase();
            set(ref(db, 'blogs/' + this.title), {
                title:this.title,
                imgurl:this.imgurl,
                cat:this.cat,
                content:this.content,
                uid:this.uid
            });

            this.uid = '',
            this.title= '',
            this.cat= '',
            this.imgurl= '',
            this.content= "<h1>Some initial content</h1>",
            this.ms = "successfully saved your blog"
        }
    },
    components: { VueEditor },
    beforeMount(){
        this.getuser()
    }
   
}
</script>

<style>
   .addblogbox{
    height: 200vh;
   }
</style>