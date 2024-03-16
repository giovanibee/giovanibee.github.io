<script>
  export let title = '';
  export let image = '';
  export let meaning = '';
</script>

<div class="h-svh w-96">
{#if title}
  <div>
    {title}
  </div>
  <div>
    <img src={image} alt="flower" />
  </div>
  <div>
    {meaning}
  </div>
  {:else}
    <div class='bg-yellow'>
      ''
    </div>
    <div class='bg-yellow'>
      ''
    </div>
    <div class='bg-yellow'>
      ''
    </div>
  {/if}
</div>
