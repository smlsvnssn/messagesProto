<script>
	let options = ['Bank', 'Försäkring', 'Pension']
	let activeOption = options[0]

	let subject = 'bobo'
	let body = 'bibi'

	export const snapshot = {
		capture: () => {
			activeOption, subject, body
		},
		restore: value => ({ activeOption, subject, body } = value),
	}
</script>

<header><h4>Skriv ett nytt meddelande till oss</h4></header>
<div class="form-group">
	<label for="validationCustom01">Vad handlar ditt meddelande om?</label>
	<div class="btn-group btn-group-stretch">
		{#each options as option}
			<label class="btn" class:active={option === activeOption}>
				<input
					type="radio"
					bind:group={activeOption}
					name="filters"
					value={option}
				/>
				{option}
			</label>
		{/each}
	</div>
</div>

<div class="form-group">
	<label for="validationCustom01">Ämne</label>
	<input
		type="text"
		required=""
		class="form-control"
		id="exampleInputEmail1"
		aria-describedby="emailHelp1"
		placeholder=""
		bind:value={subject}
	/>
</div>

<div class="form-group">
	<label for="validationCustom01">Meddelande</label>
	<textarea
		class="form-control"
		required=""
		id="exampleTextarea"
		rows="10"
		bind:value={body}
	/>
</div>

<div class="form-group">
	<div class="upload w-100">
		<div class="upload-placeholder" />
		<input
			class="upload-input"
			type="file"
			name="filename"
			id="upload"
			multiple
		/>
		<label class="upload-label btn btn-secondary px-1" for="upload">
			<svg
				focusable="false"
				aria-hidden="true"
				class="icon mr-025"
				width="24"
				height="24"
			>
				<use xlink:href="/assets/icons/24/icons.svg#image-doc-24" />
			</svg>
			Bifoga fil
		</label>
		<p class="text-sm text-muted">
			Tillåtna filformat är: .exe, .sh, .msi, .js, .doc, .xls
		</p>
	</div>
</div>

<hr />

<div class="exits">
	<a href="#">Avbryt</a>
	<a href="#" type="button" class="btn btn-primary btn-sm-block">Skicka</a>
</div>

<style lang="scss">
	header {
		padding-bottom: 0.5rem;
		margin-bottom: 2rem;
		border-bottom: 2px solid var(--shadow);
	}
	.upload {
		margin-top: 1rem;
	}
	.exits {
		width: 100%;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: flex-end;
	}
</style>
