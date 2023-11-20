<script setup>
</script>

<template>
    <section :class="$style.Wrapper">
        <header :class="$style.header">
        </header>

        <div :class="$style.wrapper">
        </div>
    </section>
</template>

<style lang="scss" module>
    .Wrapper {
        display: grid;
        flex-direction: column;
        grid-template-rows: 10% calc(90% - 20px);
        gap: 20px;
        width: 100%;
    }

    .header,
    .wrapper {
        width: 100%;
        border-radius: 24px;
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 90%);
    }
</style>