<script setup>
    defineEmits(['click']);
</script>

<template>
    <section :class="$style.Authorization">
        <h1 :class="$style.title">
            Добро пожаловать
        </h1>

        <button @click="$emit('click')">
            Войти в кабинет
        </button>
    </section>
</template>

<style lang="scss" module>
    .Authorization {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 45%;
        height: 45%;
        padding: 36px 24px;
        border-radius: 36px;
        background-color: $white;
    }

    .title {
        font-size: 32px;
        font-weight: 500;
    }
</style>