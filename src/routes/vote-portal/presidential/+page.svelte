<script lang="ts">
    import People from "$lib/components/cards/People.svelte";
	import { presidentialPicks } from "$lib/data";
</script>

<div class="flex flex-wrap gap-10 my-20 justify-center">
    {#each presidentialPicks as people}
        <People {people} />
    {/each}
</div>
