import type EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import type CustomerCreatedEvent from "../customer-created.event";

export default class SendMessage1WhenCustomerIsCreatedHandler
	implements EventHandlerInterface<CustomerCreatedEvent>
{
	handle(_event: CustomerCreatedEvent): void {
		console.log(`Esse é o primeiro console.log do evento: CustomerCreated`);
	}
}
