<template>
  <v-app>
    <v-main>
      <v-container class="pa-8">
        <v-spacer></v-spacer>

        <v-row>
          <v-col cols="12" align="center">
            <h1 class="font-weight-black " id="Heading">
              Clyck
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center">
            "Anything that can be connected, will be connected."
          </v-col>
        </v-row>
        <br />
        <v-row>
          <v-col cols="12" align="center"
            ><v-btn class="login" to="dashboard">Login</v-btn>
          </v-col></v-row
        >

        <br />
        <v-row>
          <v-col col="12">
            <v-carousel
              :show-arrows="false"
              cycle
              hide-delimiter-background
              class="height-carousel"
              height="400"
            >
              <v-carousel-item
                contain
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <!-- <image-slider /> -->
        </v-row>
        <br />
        <br />
        <v-row>
          <v-col cols="6" smAndDown="12">
            <v-row>
              <h1 class="font-weight-black">About Us</h1>
            </v-row>
            <br />
            <br />
            <v-row>
              We are Clyck, an IOT platform that allows you to control your
              devices from any part of the world.
            </v-row>
          </v-col>
          <v-col cols="6" smAndDown="12">
            <v-img src="iotImage1.png"> </v-img>
          </v-col>
        </v-row>
        <br />
        <br />
        <v-row>
          <v-col cols="6" smAndDown="12">
            <v-img src="iotImage2.png"> </v-img>
          </v-col>
          <v-col cols="6" smAndDown="12">
            <v-row>
              <h1 class="font-weight-black pl-5">
                Our mission
              </h1>
            </v-row>
            <br />
            <br />
            <v-row>
              <p class="pl-5">
                We are working towards creating an application that is capable
                of controlling a low-cost, low-power microcontrollers through
                modern web interfaces.
              </p>
            </v-row>
          </v-col>
        </v-row>
        <br />
        <br />
        <v-row>
          <v-col align="center" sm="12">
            <h1 class="font-weight-black">
              Technologies
            </h1>
          </v-col>
        </v-row>
        <br />
        <br />
        <v-row>
          <v-col cols="2.4" align="center">
            <a href="https://nodejs.org/en/"
              ><v-img
                max-width="200"
                src="nodeJS.png"
                href="https://nodejs.org/en/"
              >
              </v-img
            ></a>
          </v-col>
          <v-col cols="2.4" align="center">
            <a href="https://firebase.google.com"
              ><v-img src="firebase2.png" max-width="250"> </v-img
            ></a>
          </v-col>
          <v-col cols="2.4" align="center">
            <a href="https://vuejs.org/"
              ><v-img src="logo.png" max-width="170"> </v-img
            ></a>
          </v-col>
          <v-col cols="2.4" align="center">
            <a href="https://www.heroku.com"
              ><v-img src="heroku4.png" max-width="250"> </v-img
            ></a>
          </v-col>
          <v-col cols="2.4" align="center">
            <a href="https://www.mongodb.com/3"
              ><v-img src="mongodb.png" max-width="170"> </v-img
            ></a>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import router from '../router/index'

export default {
  components: {},
  data() {
    return {
      items: [
        {
          src: "arduinoUno.png",
        },
        {
          src: "esp32.png",
        },
        {
          src: "esp8266.png",
        },
      ],
      LoggedIn: false,
    };
  },
};
</script>

<style scoped>
#Heading {
  font-size: 3.75rem;
}
.login {
  color: #5680E9;
}
</style>
