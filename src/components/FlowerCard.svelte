<script>
  export let title = '';
  export let image = '';
  export let meaning = '';
</script>

<div class="h-svh w-fit border-teal-200 border-double border-4 p-5 rounded-md">
{#if title}
  <div>
    {title}
  </div>
  <div class='w-20rem'>
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
