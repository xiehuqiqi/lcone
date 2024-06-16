<script setup lang="ts">
import { onMounted } from "vue";
import { appWindow } from "@tauri-apps/api/window";

var xxx = 0;
function lcone_win_close() {
  if (xxx < 10) {
    xxx = xxx + 1;
    console.log(xxx);
  } else {
    appWindow.close();
  }
}

onMounted(() => {
  document
    .getElementById("titlebar-minimize")!
    .addEventListener("click", () => appWindow.minimize());
  document
    .getElementById("titlebar-maximize")!
    .addEventListener("click", () => appWindow.toggleMaximize());
  document
    .getElementById("titlebar-close")!
    .addEventListener("click", () => lcone_win_close());
});
</script>

<template lang="pug">
header#titlebar(data-tauri-drag-region)
  #titlebar-icon.titlebar-icon
  #titlebar-minimize.titlebar-button
    svg.icon(aria-hidden="true")
      use(xlink:href='#icon-suoxiao')
  #titlebar-maximize.titlebar-button
    img(src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize")
  #titlebar-close.titlebar-button
    img(src="https://api.iconify.design/mdi:close.svg" alt="close")
</template>

<style>
#titlebar {
  height: 32px;
  background: #329ea3;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}

.titlebar-icon{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}

.titlebar-button:hover {
  background: #5bbec3;
}

#lcone_header {
  min-height: 30px;
  width: 100%;
}
</style>
