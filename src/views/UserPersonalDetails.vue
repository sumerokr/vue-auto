<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">User details</h1>

    <!-- <form @submit.prevent="onEdit">
      <label for="name">Name</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="text"
        id="name"
      /><br /><br />

      <label for="phone">Phone</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="tel"
        id="phone"
      />

      <ul class="flex mt-2 space-x-2">
        <li>
          <label
            class="block border-2 border-gray-200 p-1 rounded"
            for="whatsup"
            ><input type="checkbox" id="whatsup" name="type" value="whatsup" />
            WhatsUp</label
          >
        </li>
        <li>
          <label class="block border-2 border-gray-200 p-1 rounded" for="viber"
            ><input type="checkbox" id="viber" name="type" value="viber" />
            Viber</label
          >
        </li>
      </ul>

      <br />

      <label for="city">City</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="text"
        id="city"
      /><br /><br />

      <button
        class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
        type="submit"
      >
        Update
      </button>
    </form> -->

    <p v-if="email">Email: {{ email }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserAdverts",

  setup: () => {
    const router = useRouter();
    const email = ref("");

    const getProfile = async () => {
      try {
        const response = await fetch(
          "https://oll9kk9mhi.execute-api.eu-central-1.amazonaws.com/test/profile",
          {
            credentials: "include",
          }
        ).then((res) => res.json());
        alert("success! see console for details");
        console.log(response);
      } catch (error) {
        alert("failure! see console for details");
        console.log(error);
      }
    };

    getProfile();

    return {
      email,
      onEdit: () => {
        router.push({
          name: "User",
        });
      },
    };
  },
});
</script>
