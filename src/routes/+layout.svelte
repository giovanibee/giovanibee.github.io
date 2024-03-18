<script lang="ts">
  import "../app.pcss";
  import pattern from '../lib/images/patterns/curved-lines.svg';
</script>

<img
  src={pattern}
  alt="background pattern"
  class="bg-pattern"
/>

<nav class=' surfer-font inline-flex m-0 w-full bg-white/[0.9] p-2 shadow-xl'>
    <a class='ml-auto pl-5 pr-10' href='/'>home</a>
    <a class='pr-10' href='/floriography'>floriography</a>
</nav>

<slot>
</slot>

<style>
  .surfer-font {
    font-family: "Sen", sans-serif;
    font-size: x-large;
    font-weight: 400;
    font-style: normal;
  }
  .bg-pattern {
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,1)));
    mask-image: linear-gradient(to bottom,
      rgba(0,0,0,0), rgba(0,0,0,0.01), rgba(0,0,0,0.1), rgba(0,0,0,0.2), rgba(0,0,0,0.8)
    );
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
</style>