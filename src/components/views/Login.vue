<script setup>
    import { useRouter} from 'vue-router'
    import { user } from '@/assets/user';

    import VInput from '@/components/ui/VInput.vue';
    import VButton from '@/components/ui/VButton.vue';

    const router = useRouter();

    const onChangeInfoUser = (value, type) => {
        user[type]= value;
    }

    const login = () => {
        router.push({
            name: 'base',
        });
    }
</script>

<template>
    <section :class="$style.Login">
        <h1 :class="$style.title">
            Добро пожаловать
        </h1>

        <div :class="$style.wrapper">
            <VInput
                label="Имя"
                size="medium"
                placeholder="Введите ваше имя"
                :class="$style.input"
                @input="onChangeInfoUser($event, 'name')"
            />

            <VButton
                :class="$style.button"
                @click="login"
            >
                Войти в личный кабинет
            </VButton>
        </div>
    </section>
</template>

<style lang="scss" module>
    .Login {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        height: 45%;
        padding: 36px 24px;
        border-radius: 36px;
        background-color: $white;
    }

    .title {
        margin-bottom: 36px;
        font-size: 36px;
        font-weight: 500;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    .input,
    .button {
        width: 80%;
    }
</style>