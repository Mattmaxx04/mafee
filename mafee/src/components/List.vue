<script setup>

const props = defineProps({
    beer: {},
    typeof: Object
})
const prueba = props
console.log(prueba);
</script>

<template>
    <div class="list">
        <div class="list__up">
            <h3>{{ beer.type }}</h3>


            <hr class="hr">
            <h3>${{ beer.price }}</h3>
        </div>
        <div class="list__down">
            <div class="list_text">
                <h4>Ibu: </h4>
                <p> {{ beer.ibu }} </p>
            </div>
            <div class="list_text">
                <h4>%Alc: </h4>
                <p> {{ beer.alc }}</p>
            </div>
            <div class="list_text">
                <h4>Color: </h4>
                <p> {{ beer.color }}</p>
            </div>
        </div>
    </div>

</template>

<style scoped>

.list {
    background: transparent;
    display: flex;
    min-width: 42%;
    max-width: 50%;
    justify-content: space-between;
    flex-direction: column;
}

.list__up {
    width: 100%;
    display: flex;
    justify-content: space-between;

}

.list__up h3{
    font-weight: bold;

}

.list__down{
    display: flex;
    gap: 1rem;
}
.list_text{
    display: flex;
}

.list_text h4{
    font-size: 1.3rem;
    padding-right: 0.5rem;
    font-style: italic;
}

.list_text p{
    font-size: 1.1rem;
    color: var(--color-btn);
    font-weight: bold;
}

hr {
    color: var(--color-btn);
    width: 16rem;
    height: 1rem;
}

@media (max-width: 480px) {
  
.list__container{
    display: flex;
    margin: 0; 
    padding: 1rem;
    flex-direction: column;
}
.list_text{
    flex-wrap: wrap;
    justify-content: center;

}
.list{
    max-width: 100%;
}

}

@media (max-width: 768px) {
  
}

@media (max-width: 1024px) {
  
}

@media (max-width: 1200px) {
  
}



</style>