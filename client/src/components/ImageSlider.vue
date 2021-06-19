<template>
  <div>
    <transition-group name="fade" tag="div" height="200px">
      <div v-for="number in [currentNumber]" :key="number">
        <img
          :src="currentImage"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["arduinoUno.png", "esp32.png", "esp8266.png"],
      currentNumber: 0,
      timer: null,
    };
  },
  mounted: function() {
    this.startRotation();
  },

  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      this.currentNumber += 1;
    },
    prev: function() {
      this.currentNumber -= 1;
    },
  },

  computed: {
    currentImage: function() {
      return this.images[Math.abs(this.currentNumber) % this.images.length];
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
