<script setup>
    import { useCssModule, computed, ref } from 'vue';

    const props = defineProps({
        label: {
            type: String,
            default: '',
        },

        placeholder: {
            type: String,
            default: '',
        },

        size: {
            type: String,
            default: 'medium',
            validator: val => ['small', 'medium', 'large'].includes(val),
        },

        error: {
            type: String,
            default: '',
        },
    });

    const emits = defineEmits(['input', 'focus', 'blur']);

    const isFocus = ref(false);
    const value = ref('');

    const $style = useCssModule();

    $style.color = props.size;

    const classList = computed(() => {
        return [
            $style[`_${props.size}`],
            { [$style._active]: value.value || isFocus.value },
        ];
    })

    const onInput = () => {
        emits('input', value.value);
    }

    const onFocus = () => {
        isFocus.value = true;

        emits('focus');
    }

    const onBlur = () => {
        isFocus.value = false;

        emits('blur');
    }
</script>

<template>
    <div :class="[$style.VInput, classList]">
        <label
            v-if="label"
            for="name"
            :class="$style.label"
        >
            {{ label }}
        </label>

        <div :class="$style.wrapper">
            <input
                id="name"
                v-model="value"
                :class="$style.input"
                :placeholder="placeholder"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur"
            />

            <p
                v-if="error"
                :class="$style.error"
            >
                {{ error }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" module>
    .VInput {
        display: flex;
        flex-direction: column;

        &._small {
            .label {
                font-size: 12px;
            }

            .input {
                height: 32px;
                font-size: 12px;
            }
        }

        &._medium {
            .label {
                font-size: 14px;
            }

            .input {
                height: 36px;
                font-size: 14px;
            }
        }

        &._large {
            .label {
                font-size: 16px;
            }

            .input {
                height: 48px;
                font-size: 16px;
            }
        }

        &._active {
            .label {
                color: #000;
            }

            .wrapper {
                &:before {
                    opacity: 1;
                }
            }
        }
    }

    .label {
        margin-bottom: 6px;
        color: #aba9ac;
        transition: color .3s;
    }

    .wrapper {
        position: relative;
        z-index: 0;
        width: 100%;
        background-color: transparent;
        transition: background .3s;

        &:before {
            content: '';
            position: absolute;
            z-index: -1;
            border-radius: 10px;
            background: linear-gradient(90deg, rgb(42 5 71 / 100%) 0%, rgb(213 143 244 / 100%) 100%);
            opacity: .5;
            inset: -2px -2px -2px -2px;
            transition: opacity .3s;
        }
    }

    .input {
        width: 100%;
        padding: 4px 8px;
        border: none;
        outline: none;
    }

    .wrapper,
    .input {
        border-radius: 8px;
    }

    .error {
        position: absolute;
        bottom: -16px;
        font-size: 12px;
        color: red;
    }
</style>