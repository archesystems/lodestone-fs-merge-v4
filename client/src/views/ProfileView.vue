<template>
  <v-container class="profile">
    <v-card width="360" class="ma-auto">
      <img
        alt="Lodestone Logo"
        class="logo"
        src="../assets/img/android-chrome-192x192.png"
        width="125"
        height="125"
      />
      <div>
        <h1>ProfileView</h1>
      </div>
      <div>
        <v-textarea v-model="textToSave"></v-textarea>
        <v-btn color="indigo" @click="saveTextToFile">Save to file</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      textToSave: "This is a test",
    };
  },
  methods: {
    async saveTextToFile() {
      try {
        const fileName = "savedText.txt";
        const text = this.textToSave;
        const blob = new Blob([text], { type: "text/plain" });

        // Check if the device supports the download attribute
        if ("download" in document.createElement("a")) {
          // Create a link element and trigger the download
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // If the device does not support the download attribute, use the FileSaver library
          const fileSaver = require("file-saver");
          fileSaver.saveAs(blob, fileName);
        }
        this.textToSave = "";
        alert("Text saved to file successfully!");
      } catch (error) {
        console.error(error);
        alert("Failed to save text to file. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.profile {
  margin: 0px;
  padding: 0px;
  background-color: #ffad3b;
}

.v-textarea {
  overflow: scroll;
  margin: 1rem 0;
  height: 355px;
}
</style>
