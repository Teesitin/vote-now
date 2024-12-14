<script lang="ts">
    export let people:Candidates;
</script>


<div class="w-[350px] h-[500px] pt-4 px-4 bg-{people.color} rounded-xl  border-2 shadow-xl bg-opacity-80 hover:scale-105 transition-all hover:bg-opacity-100">
    <div class="flex flex-col justify-between h-full">
        <div>
            <div class="text-3xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{people.name}</div>
            <div class="text-xl text-white">{people.party}</div>
        </div>

        {#if people.portrait}
            <img src={people.portrait}>
        {/if}
    </div>
</div>