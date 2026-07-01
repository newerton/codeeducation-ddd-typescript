import type EventInterface from "./event.interface";
import type EventHandlerInterface from "./event-handler.interface";

export default interface EventDispatcherInterface {
	notify(event: EventInterface): void;
	register(eventName: string, eventHandler: EventHandlerInterface): void;
	unregister(eventName: string, eventHandler: EventHandlerInterface): void;
	unregisterAll(): void;
}
