<template>
    <v-sheet class="pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field v-model="userid" :readonly="loading" :rules="[required]" class="mb-2" clearable
                    label="User ID"></v-text-field>

                <v-text-field v-model="password" :readonly="loading" :type="'password'" :rules="[required]" clearable label="Password"
                    placeholder="Enter your password"></v-text-field>

                <br>

                <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                    variant="elevated">
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script>
import userStore from '@/store'
import router from '@/router'

export default {
    data: () => ({
        form: false,
        userid: null,
        password: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return

            this.loading = true
            let saveData = {};
            saveData.userId = this.userId;
            saveData.userPassword = this.userPassword;

            try {
                this.axios
                    .post("/v1/account/login", JSON.stringify(saveData), {
                        headers: {
                            "Content-Type": `application/json`,
                        },
                    })
                    .then((res) => {
                        if (res.status === 200) {
                            userStore.commit("login", res.data);
                            alert('Login Succeeded')
                            router.push("/");
                        }
                    });
            } catch (error) {
                console.error(error);
            }
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>
