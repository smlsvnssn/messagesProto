<script>
	import { isRedDotActive } from '../../routes/globals'
</script>

<svg
	class:redDotActive={$isRedDotActive}
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M22 20V4H2V20H22ZM20.25 18H3.75V6H20.25V18Z"
		fill="#005AA0"
	/>
	<path
		d="M12.0384 11.675L4.36942 5.05835L3.01514 6.53006L12.0427 14.3968L20.9839 6.53006L19.625 5.06256L12.0384 11.675Z"
		fill="#005AA0"
	/>
	<path
		d="M21.0658 17.444L16.7654 12.8736L15.3238 14.2599L19.6242 18.8302L21.0658 17.444Z"
		fill="#005AA0"
	/>
	<path
		d="M4.46533 18.779L8.79283 14.2605L7.35122 12.8742L3.02372 17.3927L4.46533 18.779Z"
		fill="#005AA0"
	/>
</svg>

<style>
	.redDotActive {
		animation: 0.8s 1 ease-out skako;
		transform-origin: 50% 50%;
	}
	@keyframes skako {
		0% {
			transform: rotate(0) scale(0.5);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(-5deg);
		}
		75% {
			transform: rotate(2.5deg);
		}
		100% {
			transform: translate(0);
		}
	}
</style>
