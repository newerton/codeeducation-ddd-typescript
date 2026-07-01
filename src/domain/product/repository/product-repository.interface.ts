import type RepositoryInterface from "../../@shared/repository/repository-interface";
import type Product from "../entity/product";

export default interface ProductRepositoryInterface
	extends RepositoryInterface<Product> {}
