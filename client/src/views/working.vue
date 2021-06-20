<template>
    <v-container class="pa-8">
        <v-col cols="12">
            <v-row>
                <h2>1.Tap on these to add device</h2>
                <v-img src="blog1.jpg" loading="lazy"> </v-img>
            </v-row>
            <v-row class="mt-10">
                <h2>You can also add device with custom name by clicking on plus button</h2>
                <v-img src="blog2.jpg" loading="lazy"> </v-img>
            </v-row>
            <v-row class="mt-10">
                <v-img src="blog3.jpg" loading="lazy"> </v-img>
            </v-row>
            <v-row class="mt-10">
                <h2>2.After adding, click on code button</h2>
                <v-img src="blog4.jpg" loading="lazy"> </v-img>
            </v-row>
            <v-row class="mt-10">
                <h2>3.Select your hardware here</h2>
                <v-img src="blog5.jpg" loading="lazy"> </v-img>
            </v-row>
            <v-row class="mt-10">
                <h2>4.Copy the code and also the authID</h2>
                <v-img src="blog6.jpg" loading="lazy"> </v-img>
            </v-row>
            <v-row class="mt-10">
                <h2>5.Paste your code in Arduino IDE </h2>
            </v-row>
            <v-row class="mt-4">
                <ol>
                    <li>Install libraries.</li>
                    <li>Set SSID and Password.</li>
                    <li>Replace with your authID at the place shown in image below.</li>
                </ol>
            </v-row>
            <v-row class="mt-10">
                <v-img src="blog7.jpg" loading="lazy"> </v-img>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
h2 {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
li {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
