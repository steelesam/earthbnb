<template>
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <h6>£{{ price }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, description: String, price: Number }
};
</script>