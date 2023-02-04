<script>
    export let title = 'My button';
    // slots can accept a callback
</script>

<button><slot>Fallback</slot> </button>

<style>
    button {
        border: none;
        background-color: #ff3e00;
        color: #ffffff;
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
</style>
