<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Registration</h1>

    <form class="grid gap-4" @submit.prevent="register">
      <p>
        Already registered?
        <router-link class="text-blue-700" :to="{ name: 'Login' }">
          Log in</router-link
        >
      </p>

      <AppInput
        v-model="email"
        type="email"
        label="Email"
        id="email"
        required
      />

      <AppInput
        v-model="password"
        type="password"
        label="Password"
        id="password"
        required
      />

      <AppButton size="48" appearance="primary">Register</AppButton>

      <p class="flex items-center">
        <span class="flex-grow border-t mr-4"></span>
        <span class="">OR</span>
        <span class="flex-grow border-t ml-4"></span>
      </p>

      <button
        class="shadow-2"
        type="button"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          background-color: #fff;
          min-height: 48px;
          font-weight: 500;
          outline: none;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1877f2"
          style="margin-right: 12px"
        >
          <path
            d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
          />
        </svg>
        Continue with Facebook
      </button>

      <button
        class="shadow-1"
        type="button"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          background-color: #fff;
          min-height: 48px;
          font-weight: 500;
          outline: none;
        "
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 48 48"
          class="abcRioButtonSvg"
          style="margin-right: 12px"
        >
          <g>
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            ></path>
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            ></path>
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            ></path>
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            ></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </g>
        </svg>
        Sign-in with Google
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppButton from "@/components/AppButton/AppButton.vue";

export default defineComponent({
  name: "Registration",

  components: {
    AppInput,
    AppButton,
  },

  setup: () => {
    const email = ref("");
    const password = ref("");

    const register = async () => {
      try {
        const response = await fetch("https://example.com/api/v1/register", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
        }).then((res) => res.json());
        alert("success! see console for details");
        console.log(response);
      } catch (error) {
        alert("failure! see console for details");
        console.log(error);
      }
    };

    return {
      email,
      password,
      register,
    };
  },
});
</script>
