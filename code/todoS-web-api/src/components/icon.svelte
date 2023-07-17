<svelte:head>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
    rel="stylesheet"
  />
</svelte:head>

<script>
    export let name;
    export let handler = () => {}; //handler di default
    export let color = "green";
</script>

<span class="material-icons-outlined icon" style="--color:{color};" on:click={handler}>
    {name}
</span>

<style>
    .icon {
        color: var(--color);
        font-size: 32px;
    }

    .icon:hover {
        cursor: pointer;
    }
</style>