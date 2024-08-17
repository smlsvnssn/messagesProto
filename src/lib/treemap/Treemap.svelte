<script>
	import Node from './Node.svelte';

	 let {root, children} = $props();
</script>

<pancake-treemap>
	<Node node={root} let:node>
		{@render children(node)}
	</Node>
</pancake-treemap>

<style>
	pancake-treemap {
		position: absolute;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
</style>
