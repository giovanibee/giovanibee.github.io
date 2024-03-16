<script>
  import { flowers } from '../../lib/flower_list';
  import FlowerCard from '../../components/FlowerCard.svelte';

  let flower = {
    title: '',
    image: '',
    meaning: '',
  };

  function selectOracle() {
    const keys = Object.keys(flowers);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomFlower = keys[randomIndex];
    const newFlower = flowers[randomFlower];
    flower = newFlower;
  }

</script>

<div
  class="bg-white card container mx-auto mt-16 p-8 border-none rounded-none space-y-8 shadow-inner"
>
	<div class="card-header font-serif text-3xl">
    Floriography
  </div>
  <div class="pl-4">
    <FlowerCard {...flower} />
    <button
      class="shadow-inner hover:bg-purple-900 bg-purple-800 text-white py-2 px-4"
      on:click={selectOracle}
    >
      reveal today's oracle
    </button>
  </div>
</div>

<style>
</style>