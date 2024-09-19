<script>
    import "../app.postcss";
    import HeaderBase from "$lib/components/header/HeaderBase.svelte";
</script>


<div class="bg-gray-100 min-h-screen">

    <HeaderBase/>

    <slot />
</div>