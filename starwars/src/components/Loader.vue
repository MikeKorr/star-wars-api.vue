<template>
  <div
    class="loader"
    style="--b: 15px; --c: #ffe81f; width: 120px; --n: 8"
  ></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped lang="scss">
.loader {
  margin-top: 100px;
  --b: 10px;
  --n: 10;
  --g: 10deg;

  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000, var(--c)) content-box;
  --_m: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg calc(360deg / var(--n) - var(--g) - 1deg),
      #0000 calc(360deg / var(--n) - var(--g)) calc(360deg / var(--n))
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(98% - var(--b)),
      #000 calc(100% - var(--b))
    );
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: load 1s infinite steps(var(--n));
}
@keyframes load {
  to {
    transform: rotate(1turn);
  }
}
</style>
