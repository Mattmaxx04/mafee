<script setup>

const props = defineProps({
    beer: {},
    typeof: Object
})
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
                <h4>Ibu:</h4>
                <p>{{ beer.ibu }} </p>
            </div>
            <div class="list_text">
                <h4>%Alc:</h4>
                <p>{{ beer.alc }}</p>
            </div>
        </div>
    </div>

</template>

<style scoped>
.list {
    background: transparent;
    display: flex;
    min-width: 40%;
    justify-content: space-between;
    flex-direction: column;
}

.list__up {
    width: 100%;
    display: flex;


}
.list__down{
    display: flex;
    gap: 1rem;
}
.list_text{
    display: flex;
}

hr {
    color: var(--color-btn);
    width: 16rem;
    height: 1rem;
}
</style>