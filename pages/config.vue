<template>
	<div class="py-20 bg-black" />
</template>

<script setup>
const {app} = useRuntimeConfig();

if (!app.isDev) {
	navigateTo('/');
}
</script>
