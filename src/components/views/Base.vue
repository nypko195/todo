
<script setup>
    import Profile from '@/components/common/Profile.vue';
    import Wrapper from '@/components/common/Wrapper.vue';
</script>

<template>
    <section :class="$style.Base">
        <Profile />

        <Wrapper />
    </section>
</template>

<style lang="scss" module>
    .Base {
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