<script>
    export let last = false;
</script>

<div class="cell {last ? 'cell-last' : ''}"> 
    <slot />
</div>

<style>
    .cell {
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-top: 10px;
        color: #525252;
        line-height: 32px;
        font-size: 18px;
    }

    .cell-last {
        border-right: none;
    }
</style>