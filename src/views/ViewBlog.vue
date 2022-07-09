<template>
    <div class="row" v-for="item in blogs" :key="item.title">
        <div class="col-sm-12" v-if="item.title == id">
           
           <div class="head">
                <img :src="item.imgurl" alt="" class="img-fluid head-img">
          
                <div class="heding">
                    <h1 class="head-title">{{item.title}}</h1><br>
                    <h4 class="head-cat">{{item.cat}}</h4>
                </div>
             </div>
           <br>
           
           <div class="cont" v-html="item.content">

           </div>
        </div>

    </div>
    <br><br><br>
    <div class="row card-holder">
        <div class="col-sm-3 card-box" v-for="item in blogs" :key="item.title">
            <img :src="item.imgurl" alt="" class="img-fluid">
            <hr>
            <h2>{{item.title}}</h2>
            <h5>{{item.cat}}</h5>
            <br>
            <router-link :to="{ name: 'viewblog', params: { id: item.title } }" class="btn btn-primary">view</router-link>
        </div>
    </div>
    <br><br><br>
  
</template>

<script>
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
                blogs: []
            }
    },
    mounted(){
     this.id = this.$route.params.id;

     const firebaseConfig = {
            databaseURL: "https://simple-blog-5b9cf-default-rtdb.firebaseio.com/",

        };
        const db = getDatabase();
            onValue(ref(db, '/blogs/'), (snapshot) => {
                this.blogs = (snapshot.val());
                
                // ...
            }, {
                onlyOnce: true
            });
    }

    
}
</script>

<style>
    body{
        overflow-x:hidden;
    }
    .head{
        width: 100%;
        /* position: relative; */
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .head-img{
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        /* max-height: 600px; */
        background-size: cover;
        min-width: 100%;
    }

    .heding{
        /* width: 100% !important;
        top: 50%;
        right: 50%; */
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 130px;
        background: rgba(0,0, 0,0.6);
         /* top: 40%;
         left: 45%;
        margin: -125px 0 0 -125px;
        margin: auto; */
        z-index: 100 !important;
    }

    .head-title{
        color: white;
        font-size: 50px;
        font-weight: 500;
    }

    .head-cat{
        color: white;
        font-weight: 500;
    }

    .cont{
        
        margin: 20px;
        padding: 20px;
    }

    .card-holder{
        border-top: 1px solid black;
    }

    .card-box{
        margin: 20px;
        padding: 20px;
    }
</style>