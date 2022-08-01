<script>
    let counter = 0;

    function incrementa() { counter++;}

</script>

<div id="contatore">
    {counter}
    <button on:click={incrementa}>Incrementa</button>
</div>

<style>
    #contatore {
        border: 3px solid red;
        margin: 20px auto;
        padding: 20px;
        width: 25%;
    }

    button {
        border: 1px solid black;
        padding: 10px;
        margin: 20px;
    }
</style>

