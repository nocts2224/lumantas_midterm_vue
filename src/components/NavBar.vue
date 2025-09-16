<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-md fixed-top py-3">
      <div class="container">
        <!-- Brand -->
        <h1 class="navbar-brand text-success fw-bold fs-3 mb-0">Car Shop</h1>

        <!-- Links -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav gap-4 fs-5">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-uppercase fw-semibold">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/garage" class="nav-link text-uppercase fw-semibold">Garage</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link text-uppercase fw-semibold">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/fetch" class="nav-link text-uppercase fw-semibold">Find your Car</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-uppercase fw-semibold">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <!-- <router-view /> -->
  </div>
</template>
