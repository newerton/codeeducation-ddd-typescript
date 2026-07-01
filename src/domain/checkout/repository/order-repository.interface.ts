import type RepositoryInterface from "../../@shared/repository/repository-interface";
import type Order from "../entity/order";

export default interface OrderRepositoryInterface
	extends RepositoryInterface<Order> {}
