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

<style lang="scss">
	header {
		padding-bottom: 0.5rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid var(--shadow);
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
