<template>
    <article class="col-sm-12 col-md-6 col-lg-4">
        <div class=" p-3 text-center gameBox">
            <img :src="getImage()">
            <h3>{{title}}</h3>
            <div v-bind:class="childFriendly ? 'yeschildFriendly' : 'noChildFriendly'">
                <h4>Barnevennlig: {{childFriendly}}</h4>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        image: String,
        title: String,
        childFriendly: Boolean
    },
    setup(props){
        const getImage = () =>{
            let image;
            image = require(`@/assets/${ props.image }`);
            
            return image;
        }
        return {getImage}
    }
}
</script>
<style>
    img{
        width: 100%;
    }
    .gameBox{
        margin-top: 20px;
        background-color: #A3CCAB;
        border: #34675C;
        border-style: solid;
        border-width: 5px;
    }
    .noChildFriendly{
        color:darkred;
    }
    .yeschildFriendly{
        color: green;
    }
</style>
