<script>
	let {title, sub, id} = $props()
</script>
<div>
	<div class="custom-control extra-custom custom-radio mr-05 mb-05">
		<input
			{id}
			name="radio"
			type="radio"
			checked
			class="custom-control-input"
		/>
		<label class="custom-control-label" for={id}>
			{title}<br />
			<span>{sub}</span>
		</label>
	</div>
</div>

<style lang="scss">
	.extra-custom {
			border: 2px solid var(--shadow);
			border-radius: 0.25rem;
			display: flex;
			width: 100%;

			transition: all 0.2s;

			&:has(input[type='checkbox']:checked),
			&:has(input[type='radio']:checked) {
				border: 2px solid var(--blue);
				background: var(--cloud);
			}

			&:hover {
				border: 2px solid var(--silver);

				label {
					border: none !important;
					background: none !important;
				}
			}

			label {
				padding: 0.5rem;
				display: block;
				width: 100%;

				span {
					color: var(--gray) !important;
				}
			}

			label:before,
			label:after {
				top: 0.5rem !important;
				left: 0.5rem !important;
			}

			input[type='radio'] {
				margin-left: 1rem;
			}
		}
</style>
