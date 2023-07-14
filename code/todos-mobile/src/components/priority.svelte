<script>
    import { Icon } from 'framework7-svelte';

    export let priority = 1;
</script>

{#if priority == 1}
    <Icon f7="arrowtriangle_up_square_fill" color="red" size="40px"/>
{:else if priority == 2}
    <Icon f7="arrowtriangle_left_square_fill" color="yellow" size="40px"/>
{:else}
    <Icon f7="arrowtriangle_down_square_fill" color="green" size="40px"/>
{/if}