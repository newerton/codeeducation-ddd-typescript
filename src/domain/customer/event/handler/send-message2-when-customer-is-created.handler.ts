import type EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import type CustomerCreatedEvent from "../customer-created.event";

export default class SendMessage2WhenCustomerIsCreatedHandler
	implements EventHandlerInterface<CustomerCreatedEvent>
{
	handle(_event: CustomerCreatedEvent): void {
		console.log(`Esse é o segundo console.log do evento: CustomerCreated`);
	}
}
