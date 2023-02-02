<script>
  let name = "chad";
  let src="http://picsum.com/200/200";
  let string="Some <strong> string </string> with html "
</script>


<h1>
  Hello {name.toUpperCase()}!
</h1>

<img src={src} alt={`Some text ${name}`}/>

<p>{@html string}</p>


<style>
  /* we can directly use h1 instead of classname in styles cause svelte will directly generate
  a hash of html components so that we can directly use it in our styles this is called stlye copying 
  in svelte  */

  h1{
    color: red;
  }
</style>