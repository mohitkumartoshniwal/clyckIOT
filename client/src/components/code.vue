<template>
  <div>
    <div class="right">
      <v-btn @click="copyTestingCode()">
        Copy
      </v-btn>
    </div>
    <pre class="language-c">

<v-textarea id="code" v-model="generatedCode" auto-grow ></v-textarea>
<!-- <input id="code" :value="generatedCode"> -->
<!-- <code id="code" :value="generatedCode">
{{generatedCode}}
</code> -->

        </pre>
  </div>
</template>

<script>
import codeGen from "../utils/codeGen.js";

export default {
  name: "",
  props: ["hardwareSelect"],
  data() {
    return {
      hardware: "",
      libraries:
        "#include <WiFi.h>;\n#include <HTTPClient.h>;\n#include <Arduino_JSON.h>;",
      pinList: "{2,4,5,18}",
      reqBody: '{\\"auth\\":\\"XXXXXXXXXXXXX\\"}',
      value: "",
    };
  },
  created() {
    this.value = codeGen(this.libraries, this.pinList);

    this.$bus.$on("hardWareSelect", (val) => {
      console.log(val, "On event");
      if (val === "esp32") {
        this.libraries =
          "#include <WiFi.h>;\n#include <HTTPClient.h>;\n#include <Arduino_JSON.h>;";
        this.pinList = `{2,4,5,18}`;
      } else if (val === "esp8266") {
        this.libraries =
          "#include <ESP8266WiFi.h>;\n#include <ESP8266HTTPClient.h>;\n#include <Arduino_JSON.h>;";
        this.pinList = `{2,4,5,18}`;
      }
      this.value = codeGen(this.libraries, this.pinList);
      // this.hardware = val;
    });
  },
  computed: {
    generatedCode() {
      return codeGen(this.libraries, this.pinList);
    },
  },
  methods: {
    async copyToClipboard() {
      console.log("CODE", this.value);
      this.$clipboard(this.value);
    },
    copyTestingCode() {
      let testingCodeToCopy = document.querySelector("#code");
      console.log(testingCodeToCopy.innerText);
      // testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        let successful = document.execCommand("copy");
        let msg = successful
          ? "Code was copied successfully"
          : "Something went wrong";
        this.$bus.$emit("error", {
          msg: msg,
        });
      } catch (err) {
        this.$bus.$emit("error", {
          msg: "Oops unable to copy",
        });
      }

      /* unselect the range */
      // testingCodeToCopy.setAttribute("type", "hidden");
      // window.getSelection().removeAllRanges();
    },
  },
};
</script>

<style scoped>
.right {
  position: absolute;
  right: 30px;
}
</style>
