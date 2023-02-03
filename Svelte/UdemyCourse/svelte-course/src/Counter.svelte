<script>
    // to create state in svelte we simply define new variable
    // unlike react state which will be re-rendered each time the
    // value of the state variable changes . The state components in svelte
    // only run once so we see that the value of the count increases during
    // function call ( due to function call )
    // but the string here which is inside the
    let count = 0;
    // let's say our string depends on count state
    let string = `You have clicked ${count} times`;

    function increment() {
        count += 1;
    }
</script>

<button on:click={increment}> Clicks{count}</button>
<h3>{string}</h3>

<style>
    button {
        padding: 15px;
    }
</style>
