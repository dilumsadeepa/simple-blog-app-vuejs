<template>
  <div class="container-fluid">
        <div class="row">
            <br>
                <RouterLink to="/addblog" class="btn btn-info">Add Blog</RouterLink>
            <br>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="item in lists" :key="item.title">
                    <div class="card h-100 text-center">
                    <div class="imgwrap">
                    <img :src="item.imgurl" class="card-img-top cardimg" alt="Hollywood Sign on The Hill"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text">
                    {{item.cat}}
                    </p>

                    <router-link :to="{ name: 'viewblog', params: { id: item.title } }" class="btn btn-primary">view</router-link>
                    <!--router-link :to="{ name: 'editblog', params: { id: item.title } }" class="btn btn-info">Edit</router-link-->
                
                </div>
                </div>
                </div>
  
  
            </div>



        </div>
    </div>
    <br><br>
</template>

<script>

import SideBar from '../components/SideBar.vue'
import { getDatabase, ref, onValue} from "firebase/database";
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

};

export default {
    data(){
        return{
            lists: [],
            blogs: ""
        }
    },
    mounted() {
        //this.lists = this.getblogs()
        //console.log(this.lists);
        const firebaseConfig = {
            databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

        };
        const db = getDatabase();
            onValue(ref(db, '/blogs/'), (snapshot) => {
                this.lists = (snapshot.val());
                console.log(lists);
                // ...
            }, {
                onlyOnce: true
            });
    },
    methods:{
        getblogs(){
            const firebaseConfig = {
                databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

            };
            const db = getDatabase();
            onValue(ref(db, '/blogs/'), (snapshot) => {
                const blog = (snapshot.val());
                console.log(blog);
                let returnArr = [];
                snapshot.forEach(function(childSnapshot) {
                    returnArr.push(childSnapshot.val().title);
                    //console.log(childSnapshot.val());
                    // Fill the local data property with Firebase data
                    //return returnArr
                });
                return blog;
                
                // ...
            }, {
                onlyOnce: true
            });
        }
    },
    components: { SideBar },
    beforeMount(){
        this.getblogs()
    }
}
</script>

<style>
.cardimg{
    max-width: auto;
    max-height: 320px;
    

}
.cardimg:hover{
    position: relative ;
    transform: scale(1.5);
    transition: all 0.9s ease;
    background-color: rgba(192, 201, 192, 0.5);

}
.imgwrap{
    overflow: hidden;
}

.nav-st-de{
    display: inline-block;

}
.nav-st-en{
    display: none;
}
</style>