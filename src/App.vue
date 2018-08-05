<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-md-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from "./components/Header.vue";

export default {
    components: {
        "app-header": appHeader
    },
    created() {
        this.$store.dispatch('initStocks');
    }
}
</script>

<style>
.slide-enter-active {
    animation: slide 1s;
    animation-fill-mode: forwards;
}

.slide-leave-active {
    animation: slide 1s reverse;
    animation-fill-mode: forwards;
}


@keyframes slide {
    0% {
        transform: translateY(-30px);
        opacity: 0;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>