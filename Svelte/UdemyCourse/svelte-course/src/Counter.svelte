<script>
    // to create state in svelte we simply define new variable
    let count = 0;
    function increment() {
        count += 1;
    }
</script>

<button on:click={increment}> Clicks{count}</button>

<style>
    button {
        padding: 15px;
    }
</style>
