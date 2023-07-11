<script>
    export let prio = 3; //1 alta - 2 media - 3 bassa
    export let disabled = false;

    const prio2str = (prio) => {
        let map = {
            1: 'ALTA',
            2: 'MEDIA',
            3: 'BASSA'
        }
        return map[prio];
    }

    const change_prio  = () => {
        if(!disabled)
            prio = (prio + 1) % 3 + 1;
    }
</script>


<span class={disabled ? 'DISABILITATO' : prio2str(prio)} on:click={change_prio}>
    {prio2str(prio)}
</span>

<style>
    span {
        display: inline-block;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 30px;
    }

    span:hover {
        cursor: pointer;
    }

    .ALTA  {
        background-color: red;
    }

    .MEDIA {
        background-color: orange;
    }   

    .BASSA {
        background-color: green;
    }

    .DISABILITATO {
        background-color: grey;
    }
</style>