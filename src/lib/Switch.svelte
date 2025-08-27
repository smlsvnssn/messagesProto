<script>
	let { checked = $bindable() } = $props()
</script>

<input type="checkbox" bind:checked />

<style>
	input[type=checkbox] {
	--size: 1.5rem;
	--border: 2px;
	--color: #8b8b8b;
	--checkedColor: var(--blue);
	--accentColor: var(--white);

	appearance: none;

	position: relative;
	width: calc(var(--size) * 2 + (var(--border) * 4));
	height: calc(var(--size) + (var(--border) * 4));
	cursor: pointer;
	background: var(--color);
	border: var(--border) solid var(--color);
	border-radius: var(--size);
	
	transition: all 0.3s;

	&:after {
		--w: calc(var(--size) + (var(--border) * 2));
		
		content: "";
		display: inline-block;
		position: absolute;
		width: var(--w);
		aspect-ratio: 1/1;
		border-radius: 1.5rem;
		border: var(--border) solid var(--accentColor);

		transition: all .3s allow-discrete;

		left: 0;
		
		background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk5OTkgNi42MDA1OUwxMS45OTk5IDEwLjYwMDZMNy45OTk5NCA2LjYwMDU5TDYuNTg1OTQgOC4wMTQ1OUwxMC41ODQ5IDEyLjAxNDZMNi41ODU5NCAxNi4wMTQ2TDcuOTk5OTQgMTcuNDI4NkwxMS45OTk5IDEzLjQyODZMMTUuOTk5OSAxNy40Mjg2TDE3LjQxMzkgMTYuMDE0NkwxMy40MTM5IDEyLjAxNDZMMTcuNDEzOSA4LjAxNDU5TDE1Ljk5OTkgNi42MDA1OVoiIGZpbGw9IiM4QjhCOEIiLz4KPC9zdmc+Cg==),
			var(--accentColor);

		background-position: 50% 50%;
	}

	&:checked {
		background: var(--checkedColor);
		border-color: var(--checkedColor);
		
		&:after {
			left: calc(100% - var(--w));
			
			background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCA3Ljg5ODc5TDEwLjUzNzkgMTcuNUw0IDEwLjg2NjFMNS4zNzg1MyA5LjQ2NzI3TDEwLjUzNzkgMTQuNzAyNEwxOC42MjE1IDYuNUwyMCA3Ljg5ODc5WiIgZmlsbD0iIzAwNUFBMCIvPgo8L3N2Zz4K),
				var(--accentColor);
			
			background-position: 50% 50%;
		}
	}
}
</style>

