<script setup>
  const route = useRoute();
  const { toTitleCase } = useUtilities();
  useHead({
    title: `${
      route.params.make ? toTitleCase(route.params.make) : "Cars"
    } in ${toTitleCase(route.params.city)}`,
  });
</script>

<template>
  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >
    <div class="mt-32 flex">
      <CarSideBar />
      <NuxtPage />
    </div>
  </div>
</template>
