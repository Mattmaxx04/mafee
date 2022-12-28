<script setup>
const props = defineProps({
    beer: {},
    typeof: Object
})

console.log(props.BeersCart);
</script>
<template>

    <div class="list">
        <div class="list__up">
            <div>
                <h3>{{ beer.type }}</h3>
            </div>


            <h3>{{ beer.quantity }}</h3>

            <h3>${{ beer.price }}</h3>

            <input type="text" readonly class="form-control-plaintext" :value="beer.price * beer.quantity">
        </div>
        <div class="list__down">

        </div>
    </div>

</template>
<style scoped>
.list {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.list__up {
    width: 100%;
    display: flex;
    justify-content: space-between;

}

.list__up h3 {
    font-weight: bold;
    color: var(--color-text-dark)
}

.list__down {
    display: flex;
    gap: 1rem;
}

.list_text {
    display: flex;
}

.list_text h4 {
    font-size: 1.3rem;
    padding-right: 0.5rem;
    font-style: italic;
}

.list_text p {
    font-size: 1.1rem;
    color: var(--color-btn);
    font-weight: bold;
}

hr {
    color: var(--color-text-dark);
    width: 16rem;
    height: 1rem;
}

input {
    font-size: xx-large;
    font-weight: bold;
    padding: 0%;
    height: 2rem;
    width: 5rem;
}
</style>