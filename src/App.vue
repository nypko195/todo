<script setup>
    import { ref } from 'vue'

    import Authorization from '@/components/Authorization.vue';
    import Profile from '@/components/Profile.vue';
    import Wrapper from '@/components/Wrapper.vue';

    const isAuthorized = ref(false);

    function changeStateAuthorized() {
        isAuthorized.value = true;
    }
</script>

<template>
    <section :class="$style.App">
        <transition
            name="fade"
            mode="out-in"
        >
            <Authorization
                v-if="!isAuthorized"
                @click="changeStateAuthorized"
            />

            <section
                v-else
                :class="$style.wrapper"
            >
                <Profile />

                <Wrapper />
            </section>
        </transition>
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

    .wrapper {
        display: grid;
        justify-content: space-between;
        width: 90vw;
        height: 90vh;
        padding: 26px;
        border-radius: 36px;
        background-color: $white;
        grid-template-columns: 24% 74%;
    }
</style>
