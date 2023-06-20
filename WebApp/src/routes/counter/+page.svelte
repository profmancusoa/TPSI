<script>
    import Counter from "../../lib/components/counter.svelte";
    let contatore = 0;

    function gestisci_evento(evento) {
        console.log(`${evento.detail.tipo} -- ${evento.detail.valore}`);
    }
</script>

<h1>Pagina Counter!!!</h1>

<h2>
    Il valore del contatore vale: {contatore}
</h2>

<Counter bind:counter={contatore} on:contatore={gestisci_evento}/> 


