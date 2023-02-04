<script>
    export let title = 'My button';
    // slots can accept a callback
    export let size = 'large';
    export let shadow = false;
</script>

<button class:size-lg={size === 'large'} class:size-em={size === 'small'}>
    <slot>Fallback</slot>
</button>

<style lang="scss">
    @use '../styles/variables.scss';
    button {
        border: none;
        background-color: #ff3e00;
        color: #ffffff;
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        &.size-sm {
            padding: 15px 20px;
        }
        &.size-lg {
            padding: 20px 25px;
            font-size: 20px;
        }
    }
</style>
