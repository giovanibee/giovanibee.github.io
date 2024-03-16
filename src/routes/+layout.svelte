<script>
  import "../app.pcss";
  import pattern from '../lib/images/patterns/noveu_pattern_6.webp';
</script>
<img src={pattern} alt="background pattern" class="bg-pattern" />

<nav class='bg-white p-2 shadow-inner'>
  <a href='/'>home</a>
  <a href='/resume'>resume</a>
  <a href='/floriography'>floriography</a>
</nav>

<slot>
</slot>

<style>
  .bg-pattern {
    height: 100%;
    object-fit: cover;
    opacity: 0.56;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
</style>