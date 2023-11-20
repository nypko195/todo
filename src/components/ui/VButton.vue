<script setup>
    import { useCssModule, computed } from 'vue';

    const props = defineProps({
        tag: {
            type: String,
            default: 'button',
            validator: val => ['button'].includes(val),
        },

        size: {
            type: String,
            default: 'medium',
            validator: val => ['small', 'medium', 'large'].includes(val),
        },

        disabled: {
            type: Boolean,
            default: false,
        },
    });

    const emits = defineEmits(['click']);

    const $style = useCssModule();

    $style.color = props.size;

    const classList = computed(() => {
        return [
            $style[`_${props.size}`],
        ];
    })
</script>

<template>
    <component
        :is="props.tag"
        :class="[$style.VButton, classList]"
        @click="emits('click')"
    >
        <slot></slot>
    </component>
</template>

<style lang="scss" module>
    .VButton {
        padding: 12px 24px;
        border-radius: 24px;
        background-color: $violet-600;
        font-weight: 600;
        color: $white;
        transition: border-radius .3s;

        &:hover {
            border-radius: 12px;
        }

        &._medium {
            font-size: 20px;
            line-height: 24px;
        }

        &._disabled {
            opacity: .7;
            pointer-events: none;
        }
    }
</style>