<template>
  <v-app>
    <v-layout class="layout" justify-center>
      <v-card class="rounded-card" height="510px" width="400" elevation="8">
        <v-card-text>
          <v-card-title primary-title class="justify-center headline mb-1">
            <h3>Register</h3>
          </v-card-title>
          <v-text-field
            type="name"
            v-model="name"
            label="Name"
            clearable
            outlined
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
          <v-text-field
            type="email"
            v-model="email"
            label="E-mail"
            clearable
            outlined
            :rules="[rules.required, rules.email]"
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            label="password"
            clearable
            outlined
            :rules="[rules.required, rules.counter, rules.min]"
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password2"
            label="confirm password"
            clearable
            outlined
            :rules="[rules.required, rules.counter, rules.min]"
          ></v-text-field>

          <v-card-actions class="justify-center">
            <v-btn
              color="#364F6B"
              width="150px"
              dark
              @click="submit"
            >
              Register
            </v-btn>
          </v-card-actions>

          <h3 class="loginLink">
            Already a member? <a href="/login">login</a>
          </h3>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script>
// import axios from "axios";
import router from "../router";

export default {
  name: "signup",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();

      // check required fields
      if (!this.name || !this.email || !this.password || !this.password2) {
        // todo: show error on ui
        return;
      }

      // Check for password match
      if (this.password !== this.password2) {
        // todo: show error on ui
        return;
      }

      // Check pass length
      if (this.password.length < 6) {
        // todo: show error on ui
        return;
      }

      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password2: this.password2,
      };

      // console.log(data);
      const url = "/api/register";
      const respData = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const commits = await respData.json();
      console.log(commits.msg);
      if (respData.status === 201) {
        router.push("/login");
      } else {
        console.log(commits.msg);
      }
    },
  },
};
</script>

<style scoped>
.layout {
  background-color: #abdce2;
  padding-top: 50px;
}
.rounded-card {
  border-radius: 15px;
}
.v-text-field {
  width: 300px;
}

.v-text-field.v-text-field--enclosed {
  margin: auto;
}

.v-card__actions {
  padding: 0;
}
</style>
