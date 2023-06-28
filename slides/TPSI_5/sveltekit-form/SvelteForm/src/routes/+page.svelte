<script>
    export let data;
    export let form;
    let nome, cognome, eta;
    let error = false;

    if(form?.form_error) {
        error = true;
        nome = form.form_vals.nome;
        cognome = form.form_vals.cognome;
        eta = form.form_vals.eta;
    }
</script>

<h1>Welcome to SvelteKit FORM Example</h1>

<form method="POST">
  <div><label for="nome">Nome</label></div>
  <div>
    <input type="text" id="nome" name="nome" size="40" bind:value={nome} />
    <p class={error && nome?.length == 0? '': 'hidden'}>Nome invalido</p>
  </div>
  <div><label for="cognome">Cognome</label></div>
  <div>
    <input
      type="text"
      id="cognome"
      name="cognome"
      size="40"
      bind:value={cognome}
    />
    <p class={error && cognome?.length == 0? '': 'hidden'}>Cognome invalido</p>
  </div>
  <div><label for="eta">Età</label></div>
  <div>
    <input type="number" id="eta" name="eta" min="15" bind:value={eta} />
    <p class={error && eta?.length == 0? '': 'hidden'}>Età invalida</p>
  </div>
  <div><input type="submit" /></div>
</form>

<ul>
  {#each data.utenti as utente}
    <li>{utente.nome} {utente.cognome} ha {utente.eta} anni</li>
  {/each}
</ul>

<style>
  form {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    row-gap: 15px;
  }

  input,
  label {
    height: 25px;
    border-radius: 6px;
  }

  label {
    line-height: 25px;
  }

  p {
    color: red;
    font-weight: bold;
  }

  .hidden {
    display: none;
  }
</style>
