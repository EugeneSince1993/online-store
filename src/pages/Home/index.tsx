import { FC, useEffect, useMemo, useState } from "react";
import { Filters, Sorting, Pagination } from "../../components";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/product/asyncActions";
import styles from "./Home.module.scss";
import spinner from '../../assets/img/Spinner-1s-200px.gif';
import { ProductItem } from "../../components/ProductItem";
import { selectProduct } from "../../redux/product/selectors";
import { setBrands, setMemory } from "../../redux/filter/filterSlice";

let pageSize = 8;

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  
  const { products, isLoading } = useAppSelector(selectProduct);
  const { sort, types } = useAppSelector(selectFilter);
  const { brands, memory } = types;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    actionCreator: Function,
    entityName: any) => {
      const { name } = e.target;
      dispatch(actionCreator({
        ...entityName,
        [name]: !entityName[name]
      }));
  };

  const getProducts = async () => {
    const _sort = sort.sortProperty.replace('-', '');
    const _order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const brand: any = null;

    dispatch(fetchProducts({_sort, _order, brand}));
  };

  useEffect(() => {
    getProducts();
  }, [sort.sortProperty, brands, memory]);

  const checkedBrands = Object.entries(brands)
    .filter(brand => brand[1])
    .map(brand => brand[0]);
  const filteredBrands = products.filter(({ brand }: any) => {
    return checkedBrands.includes(brand);
  });
  const checkedMemory = Object.entries(memory)
    .filter(memory => memory[1])
    .map(memory => memory[0]);
  const filteredMemory = products.filter(({ memory }: any) => {
    return checkedMemory.includes(memory);
  });

  const [currentPage, setCurrentPage] = useState(1);

  let theProducts: any[] = [];

  useEffect(() => {
    if (filteredBrands.length === 0 && filteredMemory.length === 0) {
      theProducts = products;
    } 
  }, [products, filteredBrands, filteredMemory]);
  useEffect(() => {
    if (filteredBrands.length) {
      theProducts = filteredBrands;
    } 
  }, [filteredBrands]);
  useEffect(() => {
    if (filteredMemory.length) {
      theProducts = filteredMemory;
    }
  }, [filteredMemory]);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return theProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products, filteredBrands, filteredMemory, theProducts]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filtersColumn}>
        <Filters 
          handleChange={handleChange}
          brandsArr={[setBrands, brands]}
          memoryArr={[setMemory, memory]}
        />
      </div>
      <div className={styles.productsColumn}>
        <Sorting />
        <div className={styles.productListContainer}>
          {isLoading ? (
            <div className={styles.loadingBlock}>
              <img src={spinner} />
            </div>
          ) : (
            <>
              <div className={styles.productList}>
                {currentData && (
                  currentData.map((item: any, index: number) => {
                    return (
                      <ProductItem
                        productId={item.id}
                        phoneImage={item.imageUrl}
                        rating={item.rating}
                        testimonials={item.testimonials}
                        productName={item.name}
                        priceValue={item.price}
                        key={index}
                      />
                    );
                }))}
              </div>
              <div className={styles.productsPagination}>
                {products && (
                  <Pagination 
                    className={styles.paginationBar}
                    currentPage={currentPage}
                    totalCount={products!.length}
                    pageSize={pageSize}
                    onPageChange={(page: any) => setCurrentPage(page)}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
