<script setup>

</script>

<template>
    <section :class="$style.App">
        <router-view v-slot="{ Component }">
            <transition
                name="fade"
                mode="out-in"
            >
                <component
                    :is="Component"
                />
            </transition>
        </router-view>
    </section>
</template>

<style lang="scss" module>
    .App {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(0deg, rgb(42 5 71 / 100%) 0%, rgb(213 143 244 / 100%) 100%);
    }
</style>
