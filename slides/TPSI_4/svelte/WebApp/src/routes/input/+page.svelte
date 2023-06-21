<script>
    let nome, cognome, eta;
    let confermato = false;
    let residenza;
</script>

<h1>Input Page</h1>

Nome <input bind:value={nome}>
Cognome <input bind:value={cognome}>
Età <input bind:value={eta}>
Residenza <input bind:value={residenza}>

<br><br>

Confermato <input type="checkbox" bind:checked={confermato}>

<br><br>

Io sono {nome} {cognome} ed ho {eta} anni e abito a {residenza}

<br><br>

<button disabled={!confermato}>Invia</button>