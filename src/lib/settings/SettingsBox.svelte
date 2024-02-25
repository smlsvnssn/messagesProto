<script>
	import ThumbIcon24 from '$lib/icons/ThumbIcon24.svelte'
	import { slide } from 'svelte/transition'
	import * as ö from 'ouml'

	export let data

	const id = ö.randomChars(10)

	$: isOn = data.isEnabled === 'true'
	$: if (data.channels.every(channel => channel.value === false)) {
		data.isEnabled = 'false'
		data.channels.find(channel => channel.role === 'default').value = true
	}
</script>

<div class:isOn class="wrapper">
	<ThumbIcon24 />
	<div class="content">
		<div class="text">
			<h5>{data.header}</h5>
			<p>{data.body}</p>
		</div>
		<div class="settings">
			<div class="custom-control custom-radio mr-1">
				<input
					bind:group={data.isEnabled}
					type="radio"
					class="custom-control-input"
					value="true"
					id="true{id}"
					name="toggle{id}"
				/>
				<label class="custom-control-label" for="true{id}">
					Skicka gärna{isOn ? ':' : '!'}
				</label>
			</div>
			<div class="custom-control custom-radio mr-1 master">
				<input
					bind:group={data.isEnabled}
					type="radio"
					class="custom-control-input"
					value="false"
					id="false{id}"
					name="toggle{id}"
				/>
				<label class="custom-control-label" for="false{id}">
					Skicka inte
				</label>
			</div>

			<br />

			{#if isOn}
				<div transition:slide>
					{#each data.channels as channel}
						<div class="custom-control custom-checkbox mr-1">
							<input
								type="checkbox"
								bind:checked={channel.value}
								class="custom-control-input"
								id={channel.name + id}
							/>
							<label
								class="custom-control-label"
								for={channel.name + id}
							>
								{channel.name}
							</label>
						</div>
						<br />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		outline-offset: -2px;
		outline: 2px solid var(--smoke);
		border-radius: 0.25rem;
		padding: 1rem;
		display: flex;

		gap: 1rem;
		transition: all 0.5s;

		.master {
			margin-bottom: 0.5rem;
		}

		.content {
			display: flex;
			@container (width < 500px) {
				flex-direction: column;
				gap: 0;
			}
		}

		.text {
			padding-right: 2rem;
			text-wrap: pretty;
		}
		.settings {
			flex: 1 0 50%;
		}

		label {
			vertical-align: -0.125rem;
		}

		h5 {
			color: var(--gray);
		}

		:global(path) {
			fill: var(--gray) !important;
		}

		&.isOn {
			outline: 2px solid transparent;
			background: var(--cloud);

			h5 {
				color: var(--navy);
			}

			:global(path) {
				fill: var(--blue) !important;
			}
		}
	}
</style>
