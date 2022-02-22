<template>
    <article class="col-sm-12 col-md-6 col-lg-4">
        <div class="sportBox text-light">
            <img :src="getImage()">
            <h3>{{title}}</h3>
            <p>{{ description }} </p>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        image: String,
        title: String,
        description: String
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
    .sportBox{
        padding-bottom: 5px;
        margin-bottom: 25px;
        background-color: #1e90ff;
        

    }
    .sportBox h3, p {
        margin-left: 10px;
    }

        .sportBox img {
        margin-bottom: 5px;
    }

</style>
