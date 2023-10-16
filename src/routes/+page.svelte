<script>
	import Section from '$lib/Section.svelte'
	import MoneyIcon from '$lib/icons/MoneyIcon.svelte'

	import { isSmallWindow } from './globals'
	import Row from '../lib/Row.svelte'

	export const prerender = true
	let innerWidth

	let isOpen = false

	$: $isSmallWindow = innerWidth < 800
</script>

<div class="wrapper">
	<div class="hero" />
	<Section>
		<Row>
			<MoneyIcon slot="icon" />
			<h5 style:grid-column="span 6">Semester 2024</h5>
			<p style:grid-column="span 2">
				<label>Tillgängligt</label>
				0 kr
			</p>
			<p style:grid-column="span 2">
				<label>Värde</label>
				67 819 kr
			</p>
			<p style:grid-column="span 2">
				<label>Utveckling</label>
				<span class="plus">+2.4 %</span>
			</p>
			<span slot="details">Här har vi detaljer</span>
		</Row>
		<Row>
			<MoneyIcon slot="icon" />
			<h5 style:grid-column="span 6">Framtiden</h5>
			<p style:grid-column="span 2">
				<label>Tillgängligt</label>
				4 300 kr
			</p>
			<p style:grid-column="span 2">
				<label>Värde</label>
				819 452 kr
			</p>
			<p style:grid-column="span 2">
				<label>Utveckling</label>
				<span class="plus">+6.4 %</span>
			</p>
		</Row>
	</Section>

	<Section header="Investeringssparkonton">
		<Row>
			<MoneyIcon slot="icon" />
			<h5 style:grid-column="span 6">Semester 2024</h5>
			<p style:grid-column="span 2">
				<label>Tillgängligt</label>
				0 kr
			</p>
			<p style:grid-column="span 2">
				<label>Värde</label>
				67 819 kr
			</p>
			<p style:grid-column="span 2">
				<label>Utveckling</label>
				<span class="plus">+2.4 %</span>
			</p>
		</Row>
		<Row>
			<MoneyIcon slot="icon" />
			<h5 style:grid-column="span 4">Framtiden</h5>
			<p style:grid-column="span 2">
				<label>En grej till</label>
				66 300 kr
			</p>
			<p style:grid-column="span 2">
				<label>Tillgängligt</label>
				4 300 kr
			</p>
			<p style:grid-column="span 2">
				<label>Värde</label>
				819 452 kr
			</p>
			<p style:grid-column="span 2">
				<label>Utveckling</label>
				<span class="plus">+6.4 %</span>
			</p>
		</Row>
	</Section>

	<Section header="">
		<Row>
			<svg
				slot="icon"
				width="70"
				height="71"
				viewBox="0 0 70 71"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M45.9444 62.5V64.5H32.9444V62.5H45.9444ZM26.4444 25.2065L43.8641 39.499L43.9444 39.5L43.9441 39.565L46.5787 41.7269L45.3101 43.2731L43.9441 42.153L43.9444 62.5H41.9444L41.9441 40.512L26.4444 27.7935L10.9441 40.511V62.5H13.9444V48.5H25.9444V62.5H27.9444V64.5H6.94438V62.5H8.94406V42.152L7.57869 43.2731L6.31006 41.7269L8.94406 39.565L8.94438 39.5L9.02406 39.499L26.4444 25.2065ZM23.9444 62.5V50.5H15.9444V62.5H23.9444ZM38.9444 48.5V58.5H28.9444V48.5H38.9444ZM36.9444 50.5H30.9444V56.5H36.9444V50.5ZM26.4444 33.2384L33.5541 38.7074L32.3347 40.2926L26.4444 35.7616L20.5541 40.2926L19.3347 38.7074L26.4444 33.2384ZM63.9954 25.5V34.5H61.9954V25.5H63.9954ZM56.0499 23.4733L57.8409 24.3633L55.5423 28.9887L53.7513 28.0987L56.0499 23.4733ZM50.2373 18.7929L51.6515 20.2071L44.6515 27.2071L43.2373 25.7929L50.2373 18.7929ZM50.9444 6.5C50.9444 13.6797 56.7647 19.5 63.9444 19.5V21.5C55.6601 21.5 48.9444 14.7843 48.9444 6.5H50.9444ZM45.491 13.4401L46.5083 15.1621L42.0613 17.7893L41.044 16.0674L45.491 13.4401ZM43.9444 6.5V8.5H34.9444V6.5H43.9444Z"
					fill="#005AA0"
				/>
			</svg>
			<div style:grid-column="span 6">
				<h3>Villa-Hem</h3>
				<p>
					<span class="marginbottom">
						Skadenummer: 28-808329-21
					</span>
					<label>Självrisk: 2 000 kr</label>
				</p>
			</div>
			<div class="r" style:grid-column="span 6">
				<h5 class="black">1 250 kr/år</h5>
				<span class="tagsy text-sm">Aktiv</span>
			</div>
		</Row>
		<Row>
			<svg
				slot="icon"
				width="70"
				height="70"
				viewBox="0 0 70 70"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.7291 58.924L17.454 60.7881C14.6631 61.8734 11.5831 61.962 8.73439 61.0388L9.35098 59.1362C11.7614 59.9174 14.3676 59.8424 16.7291 58.924ZM53.4876 58.924C55.8491 59.8424 58.4553 59.9174 60.8657 59.1362L61.4823 61.0388C58.6336 61.962 55.5536 61.8734 52.7627 60.7881L53.4876 58.924ZM27.4823 57.8825L31.7171 59.2549L31.1006 61.1575L26.8657 59.7851C24.4553 59.0039 21.8491 59.0788 19.4876 59.9972L18.7627 58.1332C21.5536 57.0479 24.6336 56.9593 27.4823 57.8825ZM51.454 58.1332L50.7291 59.9972C48.3676 59.0788 45.7614 59.0039 43.351 59.7851L39.1161 61.1575L38.4995 59.2549L42.7344 57.8825C45.5831 56.9593 48.6631 57.0479 51.454 58.1332ZM27.4823 53.8825L31.7171 55.2549C33.9215 55.9693 36.2952 55.9693 38.4995 55.2549L42.7344 53.8825C45.5831 52.9593 48.6631 53.0479 51.454 54.1332L53.4876 54.924C55.8491 55.8424 58.4553 55.9174 60.8657 55.1362L62.8 54.5093L63.4166 56.4119L61.4823 57.0388C58.6336 57.962 55.5536 57.8734 52.7627 56.7881L50.7291 55.9972C48.3676 55.0788 45.7614 55.0039 43.351 55.7851L39.1161 57.1575C36.511 58.0017 33.7057 58.0017 31.1006 57.1575L26.8657 55.7851C24.4553 55.0039 21.8491 55.0788 19.4876 55.9972L17.454 56.7881C14.6631 57.8734 11.5831 57.962 8.73439 57.0388L6.80005 56.4119L7.41663 54.5093L9.35098 55.1362C11.7614 55.9174 14.3676 55.8424 16.7291 54.924L18.7627 54.1332C21.5536 53.0479 24.6336 52.9593 27.4823 53.8825ZM35.2135 28.0055L55.7024 30.1689C56.8009 30.2849 57.5973 31.2694 57.4813 32.3679C57.4631 32.5407 57.4224 32.7103 57.3603 32.8726L49.9043 52.3574L48.0364 51.6426L55.4924 32.1578L35.1085 30.0056L14.7246 32.1578L22.1806 51.6426L20.3127 52.3574L12.8567 32.8726C12.462 31.841 12.9782 30.6847 14.0099 30.2899C14.1721 30.2278 14.3418 30.1871 14.5146 30.1689L35.0035 28.0055H35.2135ZM35.1083 39C35.6606 39 36.1083 39.4477 36.1083 40V50C36.1083 50.5523 35.6606 51 35.1083 51C34.5561 51 34.1083 50.5523 34.1083 50V40C34.1083 39.4477 34.5561 39 35.1083 39ZM35.1083 31C35.6606 31 36.1083 31.4477 36.1083 32V36C36.1083 36.5523 35.6606 37 35.1083 37C34.5561 37 34.1083 36.5523 34.1083 36V32C34.1083 31.4477 34.5561 31 35.1083 31ZM37.1083 8C38.2129 8 39.1083 8.89543 39.1083 10L39.1081 13.999L45.6312 14C46.9482 14 48.1112 14.859 48.4985 16.1177L52.0641 27.7059L50.1526 28.2941L46.587 16.7059C46.4579 16.2863 46.0702 16 45.6312 16L39.1081 15.999L39.1083 16H31.1083L31.108 15.999L24.5855 16C24.1465 16 23.7588 16.2863 23.6297 16.7059L20.0641 28.2941L18.1526 27.7059L21.7182 16.1177C22.1055 14.859 23.2685 14 24.5855 14L31.108 13.999L31.1083 10C31.1083 8.89543 32.0038 8 33.1083 8H37.1083ZM33.1086 18C33.6609 18 34.1086 18.4477 34.1086 19C34.1086 19.5523 33.6609 20 33.1086 20H27.5501C27.1197 20 26.7376 20.2754 26.6014 20.6838L25.0573 25.3162C24.8826 25.8402 24.3163 26.1233 23.7924 25.9487C23.2684 25.774 22.9853 25.2077 23.1599 24.6838L24.7041 20.0513C25.1124 18.8263 26.2588 18 27.5501 18H33.1086ZM37.1083 10H33.1083V14H37.1083V10Z"
					fill="#005AA0"
				/>
			</svg>
			<div style:grid-column="span 6">
				<h3>Buster X 60hp - 70hp 2008</h3>
				<p>
					<span class="marginbottom">
						Skadenummer: 28-808329-21
					</span>
					<label>Självrisk: 2 500 kr</label>
				</p>
			</div>
			<div class="r" style:grid-column="span 6">
				<h5 class="black">2 150 kr/år</h5>
				<span class="tagsy text-sm">Aktiv</span>
			</div>
		</Row>
	</Section>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		.hero {
			height: 300px;
			width: 100%;
			background: url(/src/lib/images/hero_2x.jpg);
			background-size: cover;
		}
		h4,
		h5,
		h6 {
			margin: 0;
		}
		h4,
		h6 {
			padding: 1rem 1.25rem;
			border-bottom: 2px solid var(--tint);
		}

		.details {
			margin-top: 1rem;
			margin: 1rem -0.75rem 0;
			background: var(--white);
			border-radius: 0.25rem;
			padding: 1.25rem 0.75rem;
		}

		.tagsy {
			padding: 0.25rem 1rem 0.25rem 1rem;
			background: var(--cloud);
			border-radius: 5rem;
			font-size: 0.875rem;
			margin-top: 0.25rem;
			display: inline-block;
			align-items: center;
			gap: 0.25rem;
			font-weight: normal;
		}

		.r {
			text-align: right;
		}

		.h {
			height: 100%;
		}

		.black {
			color: var(--black);
		}

		.marginbottom {
			display: inline-block;
			margin-bottom: 0.25rem;
		}
		.plus {
			color: var(--green);
		}
		.minus {
			color: var(--red);
		}

		p {
			font-family: var(--font-family-sans-serif);
			font-weight: 600;
			margin-bottom: 0;
			font-size: 1.125rem;
		}
		label {
			display: block;
			font-weight: 300;
			margin-bottom: 0;
			font-size: 1rem;
		}
	}
</style>
