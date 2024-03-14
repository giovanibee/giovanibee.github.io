<script>
  import "../app.pcss";
  import pattern from '../lib/images/noveu_pattern_6.webp';
</script>
<img src={pattern} alt="background pattern" class="bg-pattern" />

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