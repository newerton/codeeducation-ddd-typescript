import type RepositoryInterface from "../../@shared/repository/repository-interface";
import type Customer from "../entity/customer";

export default interface CustomerRepositoryInterface
	extends RepositoryInterface<Customer> {}
