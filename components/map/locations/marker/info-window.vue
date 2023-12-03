<template>
  <div class="pin-container">
    <div class="pin" />
  </div>
</template>

<style scoped>
.pin {
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -115px;

  border-radius: 50% 50% 50% 0;
  border: 4px solid #791010c7;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
}

.pin::after {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin-left: -5px;
  margin-top: -5px;
  background-color: #791010c7;
}
</style>
