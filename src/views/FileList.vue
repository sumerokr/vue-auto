<template>
  <div class="p-4"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { firebase } from "@/firebase/firebase.ts";
import "firebase/storage";

export default defineComponent({
  name: "FileList",

  setup: () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();

    const stelvioRef = storageRef.child("/stelvio/");

    stelvioRef
      .listAll()
      .then(function (res) {
        res.prefixes.forEach(function (folderRef) {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach(function (itemRef) {
          // All the items under listRef.
          console.log(itemRef.name);
        });
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
      });
    // .getDownloadURL()
    // .then(function (url: string) {
    //   console.log(url);
    // });
  },
});
</script>
