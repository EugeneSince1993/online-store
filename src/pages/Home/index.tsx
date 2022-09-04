import { FC, useEffect, useMemo, useState } from "react";
import { Filters, Sorting, Pagination } from "../../components";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/product/asyncActions";
import styles from "./Home.module.scss";
import spinner from '../../assets/img/Spinner-1s-200px.gif';
import { ProductItem } from "../../components/ProductItem";
import { selectProduct } from "../../redux/product/selectors";
import { setBrands, setMemory, setRamMemory } from "../../redux/filter/filterSlice";
import { IProduct } from "../../types/IProduct";

let pageSize = 8;

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  
  const { products, isLoading } = useAppSelector(selectProduct);
  const { sort, types } = useAppSelector(selectFilter);
  const { brands, memory, ramMemory } = types;

  let finalProducts: any = products;

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
  const filteredBrands = products.filter(({ brand }: IProduct) => {
    return checkedBrands.includes(brand);
  });
  const checkedMemory = Object.entries(memory)
    .filter(memory => memory[1])
    .map(memory => memory[0]);
  const filteredMemory = products.filter(({ memory }: IProduct) => {
    return checkedMemory.includes(memory.toString());
  });
  const checkedRamMemory = Object.entries(ramMemory)
    .filter(ramMemory => ramMemory[1])
    .map(ramMemory => ramMemory[0]);
  const filteredRamMemory = products.filter(({ ramMemory }: IProduct) => {
    return checkedRamMemory.includes(ramMemory.toString());
  });

  const [currentPage, setCurrentPage] = useState(1);

  // Conditionals
  // Brands
  if (filteredBrands.length) {
    finalProducts = filteredBrands;
  }
  if (checkedBrands.length && !filteredBrands.length) {
    finalProducts = [];
  }
  // Memory
  if (filteredMemory.length) {
    finalProducts = filteredMemory;
  }
  if (checkedMemory.length && !filteredMemory.length) {
    finalProducts = [];
  }
  // Ram memory
  if (filteredRamMemory.length) {
    finalProducts = filteredRamMemory;
  }
  if (checkedRamMemory.length && !filteredRamMemory.length) {
    finalProducts = [];
  }
  // Filter relations
  if (checkedBrands.length && 
    !filteredBrands.length && 
    filteredMemory.length) {
      finalProducts = [];
  }
  if (checkedBrands.length && 
    !filteredBrands.length && 
    checkedMemory.length &&
    !filteredMemory.length &&
    filteredRamMemory.length) {
      finalProducts = [];
  }
  if (checkedBrands.length && 
    !filteredBrands.length && 
    filteredRamMemory.length) {
      finalProducts = [];
  }
  if (filteredBrands.length && filteredMemory.length) {
    finalProducts = products
      .filter(({ brand }: IProduct) => {
        return checkedBrands.includes(brand);
      })
      .filter(({ memory }: IProduct) => {
        return checkedMemory.includes(memory.toString());
      });
  }
  if (filteredBrands.length && 
    filteredMemory.length &&
    filteredRamMemory.length) {
      finalProducts = products
        .filter(({ brand }: IProduct) => {
          return checkedBrands.includes(brand);
        })
        .filter(({ memory }: IProduct) => {
          return checkedMemory.includes(memory.toString());
        })
        .filter(({ ramMemory }: IProduct) => {
          return checkedRamMemory.includes(ramMemory.toString());
        });
  }
  if (filteredBrands.length &&
    !filteredMemory.length &&
    filteredRamMemory.length) {
      finalProducts = products
        .filter(({ brand }: IProduct) => {
          return checkedBrands.includes(brand);
        })
        .filter(({ ramMemory }: IProduct) => {
          return checkedRamMemory.includes(ramMemory.toString());
        });
  }
  if (!filteredBrands.length &&
    filteredMemory.length &&
    filteredRamMemory.length) {
      finalProducts = products
        .filter(({ memory }: IProduct) => {
          return checkedMemory.includes(memory.toString());
        })
        .filter(({ ramMemory }: IProduct) => {
          return checkedRamMemory.includes(ramMemory.toString());
        });
  }

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return finalProducts.slice(firstPageIndex, lastPageIndex);
  }, 
  [currentPage, products, finalProducts, filteredBrands, filteredMemory, filteredRamMemory]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filtersColumn}>
        <Filters 
          handleChange={handleChange}
          brandsArr={[setBrands, brands]}
          memoryArr={[setMemory, memory]}
          ramMemoryArr={[setRamMemory, ramMemory]}
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
                {finalProducts && (
                  <Pagination 
                    className={styles.paginationBar}
                    currentPage={currentPage}
                    totalCount={finalProducts!.length}
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
