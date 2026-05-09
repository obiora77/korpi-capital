<template>
  <nav
    class="flex justify-between items-center p-6 sticky top-0 transition-all duration-300 z-50"
    :class="isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'"
  >
    <h1 class="text-xl font-semibold">
      <router-link to="/">Korpi Capital</router-link>
    </h1>

    <!-- Desktop Menu -->
    <div class="space-x-6 hidden md:flex">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/approach">Approach</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      @click="toggleMenu"
      class="md:hidden flex flex-col space-y-1 p-2"
      :class="{ 'open': isMenuOpen }"
    >
      <span class="w-6 h-0.5 bg-white transition-transform duration-300" :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"></span>
      <span class="w-6 h-0.5 bg-white transition-opacity duration-300" :class="{ 'opacity-0': isMenuOpen }"></span>
      <span class="w-6 h-0.5 bg-white transition-transform duration-300" :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"></span>
    </button>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-primary py-4 px-6 space-y-4 shadow-lg"
      data-aos="fade-down"
    >
      <router-link to="/" @click="closeMenu" class="block hover:text-gray-300 transition-colors">Home</router-link>
      <router-link to="/about" @click="closeMenu" class="block hover:text-gray-300 transition-colors">About</router-link>
      <router-link to="/approach" @click="closeMenu" class="block hover:text-gray-300 transition-colors">Approach</router-link>
      <router-link to="/portfolio" @click="closeMenu" class="block hover:text-gray-300 transition-colors">Portfolio</router-link>
      <router-link to="/contact" @click="closeMenu" class="block hover:text-gray-300 transition-colors">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>