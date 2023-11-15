
<script setup>
import { computed, useCssModule } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '',
    },
})

const $style = useCssModule();

$style.color = props.color;

const classList = computed(() => {
    return [
        $style[`_${props.color}`],
    ]
})
</script>

<template>
    <section :class="[$style.Profile, classList]">
        <div :class="$style.image">
        </div>

        <span :class="$style.name">Aлексей</span>
    </section>
</template>

<style lang="scss" module>
    .Profile {
        display: flex;
        align-items: center;
        padding: 24px 0;
        border-radius: 24px;
        flex-direction: column;
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 90%);
    }

    .image {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        background-color: grey;
    }

    .name {
        margin-top: 12px;
        font-size: 16px;
    }
</style>
