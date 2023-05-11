import { SvelteComponentTyped } from 'svelte'
import type { EdgesProperties } from '../../types/components'
declare const __propDef: {
	props: {
		color?: EdgesProperties['color']
		material?: EdgesProperties['material']
		threshold?: EdgesProperties['threshold']
		position?: EdgesProperties['position']
		scale?: EdgesProperties['scale']
		rotation?: EdgesProperties['rotation']
		viewportAware?: boolean | undefined
		inViewport?: boolean | undefined
		castShadow?: EdgesProperties['castShadow']
		receiveShadow?: EdgesProperties['receiveShadow']
		frustumCulled?: EdgesProperties['frustumCulled']
		renderOrder?: EdgesProperties['renderOrder']
		visible?: EdgesProperties['visible']
		userData?: EdgesProperties['userData']
		dispose?: EdgesProperties['dispose']
		interactive?: boolean | undefined
		ignorePointer?: boolean | undefined
		lookAt?: EdgesProperties['lookAt']
	}
	events: {
		click: CustomEvent<
			import('$lib/@threlte_hacked/core').ThreltePointerEvent
		>
		contextmenu: CustomEvent<
			import('$lib/@threlte_hacked/core').ThreltePointerEvent
		>
		pointerup: CustomEvent<
			import('$lib/@threlte_hacked/core').ThreltePointerEvent
		>
		pointerdown: CustomEvent<
			import('$lib/@threlte_hacked/core').ThreltePointerEvent
		>
		pointerenter: CustomEvent<
			import('$lib/@threlte_hacked/core').ThreltePointerEvent
		>
		pointerleave: CustomEvent<
			import('$lib/@threlte_hacked/core').ThreltePointerEvent
		>
		pointermove: CustomEvent<
			import('$lib/@threlte_hacked/core').ThreltePointerEvent
		>
		viewportenter: CustomEvent<
			import('three').Object3D<import('three').Event>
		>
		viewportleave: CustomEvent<
			import('three').Object3D<import('three').Event>
		>
	} & {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		default: {}
	}
}
export declare type EdgesProps = typeof __propDef.props
export declare type EdgesEvents = typeof __propDef.events
export declare type EdgesSlots = typeof __propDef.slots
export default class Edges extends SvelteComponentTyped<
	EdgesProps,
	EdgesEvents,
	EdgesSlots
> {}
export {}
