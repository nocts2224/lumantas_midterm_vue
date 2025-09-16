<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-lg p-4" style="width: 28rem;">
      <h1 class="mb-4 text-dark text-center">Car Search</h1>

      <form @submit.prevent="handleSubmit">
        <label for="carId" class="form-label">Car ID</label>
        <input
          class="form-control"
          id="carId"
          placeholder="Enter ID Number"
          v-model="carId"
          type="number"
          required
        />
        <button class="btn btn-success mt-4">Fetch Car Image</button>
      </form>

      <div v-if="loading">Loading Car Image....</div>
      <p v-if="error" class="error">{{ error }}</p>

      <div v-if="car" class="card shadow-md mt-5 bg-light">
        <h2 class="text text-primary">Result:</h2>
        <p><strong>Brand: </strong>{{ car.brand }}</p>
        <img v-if="car.url" :src="car.url" :alt="car.brand" class="car-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carId = ref("")
const car = ref(null)
const error = ref(null)
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  error.value = null
  car.value = null

  try {
    const response = await fetch('/data/cars.json')

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    const data = await response.json()

    // if cars.json is a single object
    if (!Array.isArray(data)) {
      if (data.id === Number(carId.value)) {
        car.value = data
      } else {
        throw new Error(`Car with ID ${carId.value} not found`)
      }
    } else {
      // if cars.json is an array of cars
      const found = data.find(c => c.id === Number(carId.value))
      if (found) {
        car.value = found
      } else {
        throw new Error(`Car with ID ${carId.value} not found`)
      }
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.car-image {
  max-width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}
.error {
  color: red;
  font-weight: bold;
}
</style>
