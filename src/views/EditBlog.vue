<template>
  <div class="container-fluid">
    <div class="row" v-for="item in blogs" :key="item.id">
        <div class="col-sm-8" v-if="item.title == id">
            <br>
               <h2>Edit Blogs</h2><br>
                <h3>{{ms}}</h3>
                <h3>{{item.title}}</h3>
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
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { getDatabase, ref, onValue} from "firebase/database";
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

};
export default {
    data () {
            return {
                id: "",
                blogs: [],
                ms:'',
                title:'',
                imgurl:'',
                cat:'',
                content:''
            }
    },
    mounted(){
     this.id = this.$route.params.id;

     const firebaseConfig = {
            databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

        };
        const db = getDatabase();
            onValue(ref(db, '/blogs/'), (snapshot) => {
                this.blogs = (snapshot.val())
                console.log(snapshot.val())
                
                // ...
            }, {
                onlyOnce: true
            });
    },
    components: { VueEditor },
}
</script>

<style>

</style>