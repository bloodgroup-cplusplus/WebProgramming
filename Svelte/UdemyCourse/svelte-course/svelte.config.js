import sveltePreprocess from "svelte-preprocess"


const config = {
    preprocess:sveltePreprocess({
        scss: {
            prependData: ''

        }
    })
}

export default config