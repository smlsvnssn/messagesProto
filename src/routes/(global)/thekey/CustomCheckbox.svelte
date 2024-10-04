<script>
	let { group = $bindable(), name, price, id } = $props()

	const onChange = ({ target: { value, checked } }) => {
		group =
			checked ? [...group, value] : group.filter(item => item != value)
	}
</script>

<div class="custom-control extra-custom custom-checkbox mr-05 mb-05">
	<input
		type="checkbox"
		class="custom-control-input"
		{id}
		value={price}
		checked={group.includes(price)}
		onchange={onChange}
	/>
	<label class="custom-control-label super-custom" for={id}>
		<p class="right">{name}</p>
		<p>
			<span><small>Per månad:</small></span>
			{price} kr
		</p>
	</label>
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

			&.super-custom {
				display: flex;
				gap: 1rem;

				p {
					margin-bottom: 0;

					&.right {
						flex-grow: 1;
					}
				}
			}

			span {
				color: var(--gray) !important;
			}
		}

		label:before,
		label:after {
			top: 0.5rem !important;
			left: 0.5rem !important;
		}
	}
</style>
