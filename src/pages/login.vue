<script setup lang="ts">
import AInput from '~/lib/ui/components/a-input.vue'

const { BASE_URL } = useRuntimeConfig().public
const supabase = useSupabaseClient()
const email = ref('')

console.log(BASE_URL)
const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: `${BASE_URL}/confirm`,
    },
  })
  if (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class='-container'>
    <div class='p-login'>
      <h1>
        Login
      </h1>
      <div class='login__wrapper'>
        <a-input :value='email' type='email' @update:value='email=$event' />

        <button class='a-button -btn-link' @click='signInWithOtp'>
          Iniciar sesión
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="css">
.p-login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
}

h1 {
  margin-bottom: 1em;
}

.login__wrapper > *:not(:last-child) {
  margin-bottom: 1em;
}
</style>
