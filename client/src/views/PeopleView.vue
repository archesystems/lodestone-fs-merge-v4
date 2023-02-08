<template>
  <v-container class="people">
    <v-card width="360" class="ma-auto">
      <img
        alt="Lodestone Logo"
        class="logo"
        src="../assets/img/android-chrome-192x192.png"
        width="125"
        height="125"
      />
      <div>
        <h1>PeopleView</h1>
      </div>
      <input type="file" ref="fileInput" @change="readFile" />
      <div>
        <v-textarea v-model="fileContent" auto-grow></v-textarea>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const fileInput = ref(null);
    const fileContent = ref("");

    const readFile = (event) => {
      const fileName = event.target.files[0];

      const reader = new FileReader();
      reader.readAsText(fileName, "UTF-8");

      reader.onload = function (event) {
        fileContent.value = event.target.result;
        console.log(fileInput);
        console.log(fileName);
        console.log(fileContent);
      };
    };
    return {
      fileInput,
      fileContent,
      readFile,
    };
  },
};
</script>

<style scoped>
.people {
  margin: 0px;
  padding: 0px;
  background-color: #ffad3b;
}

.v-textarea {
  overflow: scroll;
  margin: 1rem 0;
  height: 360px;
}
</style>
