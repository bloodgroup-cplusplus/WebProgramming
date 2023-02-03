<script>
    // to create state in svelte we simply define new variable
    // unlike react state which will be re-rendered each time the
    // value of the state variable changes . The state components in svelte
    // only run once so we see that the value of the count increases during
    // function call ( due to function call )
    // but the string here which is inside the
    let count = 0;
    // let's say our string depends on count state
    //let string = `You have clicked ${count} times`;
    // this string value does not update unless we use reactive statement
    // we have something like this i.e., a varialbe that depends on a state
    // and this variable to update when state updates
    // we can use reactive statements the format is
    /* $: {
        console.log(`The count is ${count}`)
    }*/
    // this above statement runs every time when count changes
    // let's write this within reactive statements
    // any dependency on the reactive varialbe changes the statement inside
    // the $sign runs again and again
    // define your string in a reactive statement
    let string;
    $: {
        string = `You have clicked ${count} times.`;
    }
    // you could also write your reactive variables like this

    $: string_two = `You have clicked ${count} times.`;

    $: if (count > 5) {
        console.log(`The count is ${count}`);
    }

    function increment() {
        count += 1;
    }
</script>

<button on:click={increment}> Clicks{count}</button>
<h3>{string}</h3>
<h4>{string_two}</h4>

<style>
    button {
        padding: 15px;
    }
</style>
