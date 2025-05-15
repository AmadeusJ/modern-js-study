<script setup lang="ts">
  const route = useRoute();
  const { cars } = useCars();
  const { toTitleCase } = useUtilities();
  useHead({
    title: toTitleCase(route.params.name),
  });

  // 특정 페이지에만 적용할 레이아웃을 설정
  definePageMeta({
    layout: "custom",
  });

  const car = computed(() => {
    return cars.find((car) => {
      return car.id === parseInt(route.params.id);
    });
  });

  // Throwing Server Error
  if (!car.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Car with id of ${route.params.id} not found",
      fatal: true,
    });
  }
</script>

<template>
  <div v-if="car">
    {{ route.params.name }} - {{ route.params.id }}
    <!-- CAR HERO -->
    <CarDetailHero :car="car" />
    <!-- CAR HERO -->
    <!-- CAR ATTRIBUTES -->
    <CarDetailAttribute :feature="car.feature" />
    <!-- CAR ATTRIBUTES -->
    <!-- CAR DESCRISPTION -->
    <CarDetailDescription :description="car.description" />
    <!-- CAR DESCRISPTION -->
    <!-- CAR CONTACT -->
    <CarDetailContact />
    <!-- CAR CONTACT -->
  </div>
</template>
