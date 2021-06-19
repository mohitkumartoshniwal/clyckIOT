<template>
  <v-app>
    <v-container class="pa-8">
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-row>
            <v-img
              class="profilePic"
              src="vinayaka.jpg"
              height="300"
              width="400"
              contain
            >
            </v-img>
          </v-row>
          <v-row>
            <v-col id="BIO">
              <v-row>
                <h2 class="name">Vinayaka Raju S</h2>
              </v-row>
              <v-row>
                <p>
                  "Interested in Robotics, computer vision, Web Development"
                </p>
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiSchoolOutline }}</v-icon>
                : BMS College of Engineering, Bangalore
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiBriefcase }}</v-icon>
                : Software Engineer at Finastra
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiGithub }}</v-icon>
                :
                <a href="https://github.com/vinayakaraju46"
                  >vinayakaraju46</a
                ></v-row
              >
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiLinkedin }}</v-icon>
                :
                <a href="https://www.linkedin.com/in/vinayaka-raju-442895157/"
                  >VinayakaRajuS</a
                ></v-row
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pl-5">
          <v-row>
            <v-img
              class="profilePic"
              src="MohitProfilePicture.jpeg"
              height="300"
              width="400"
              contain
            >
            </v-img>
          </v-row>
          <v-row>
            <v-col id="BIO">
              <v-row>
                <h2 class="name">Mohit Toshniwal</h2>
              </v-row>
              <v-row>
                <p>
                  "Interested in web Development, computer graphics, AR/VR"
                </p>
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiSchoolOutline }}</v-icon>
                : MSRIT, Bangalore
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiBriefcase }}</v-icon>
                : Software Engineer at Finastra
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiGithub }}</v-icon>
                :
                <a href="https://github.com/mohitkumartoshniwal"
                  >mohitkumartoshniwal</a
                ></v-row
              >
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiLinkedin }}</v-icon>
                :
                <a href="https://www.linkedin.com/in/mohitkumartoshniwal"
                  >mohitkumartoshniwal</a
                ></v-row
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col cols="7" id="BIO" class="mr-5 pl-7">
          <v-row justify="left">
            <h2 class="name">Mohit Toshniwal</h2>
          </v-row>
          <v-row class="pt-12">
            <v-col>
              <v-row
                ><p>
                  "Interested in web Development, computer graphics, AR/VR"
                </p></v-row
              >
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiSchoolOutline }}</v-icon>
                : MSRIT, Bangalore
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiBriefcase }}</v-icon>
                :Software Engineer at Finastra
              </v-row>
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiGithub }}</v-icon>
                :
                <a href="https://github.com/mohitkumartoshniwal"
                  >mohitkumartoshniwal</a
                ></v-row
              >
              <v-row class="pt-6">
                <v-icon>{{ icons.mdiLinkedin }}</v-icon>
                :
                <a href="https://www.linkedin.com/in/mohitkumartoshniwal"
                  >mohitkumartoshniwal</a
                ></v-row
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-img src="VinProfilePic.png" height="300" contain> </v-img>
        </v-col>
      </v-row> -->
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import {
  mdiSchoolOutline,
  mdiGithub,
  mdiLinkedin,
  mdiBriefcase,
} from "@mdi/js";

export default {
  name: "contactus",
  data() {
    return {
      icons: { mdiSchoolOutline, mdiGithub, mdiLinkedin, mdiBriefcase },
    };
  },
  components: {},
};
</script>

<style scoped>
#BIO {
  background-color: rgb(236, 234, 220);
  padding-left: 50px;
  padding-bottom: 30px;
}
.name {
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 5px;
  padding-bottom: 10px;
}
.profilePic {
  min-height: 400px;
  min-width: 210px;
  margin-bottom: 30px;
}
</style>
