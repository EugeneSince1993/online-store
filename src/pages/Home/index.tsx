import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Filters, Sorting, Pagination } from "../../components";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/product/asyncActions";
import styles from "./Home.module.scss";
import spinner from '../../assets/img/Spinner-1s-200px.gif';
import { ProductItem } from "../../components/ProductItem";
import { selectProduct } from "../../redux/product/selectors";
import { setBrands, setCpuCores, setMemory, setRamMemory } from "../../redux/filter/filterSlice";
import { IProduct } from "../../types/IProduct";

let pageSize = 8;

export const Home: FC = () => {
  type filterFunc = (object: IProduct) => boolean;
  type filterFuncArr = filterFunc[];
  type sourceArr = boolean[] | filterFuncArr;

  const dispatch = useAppDispatch();
  
  const { products, isLoading } = useAppSelector(selectProduct);
  const { sort, types } = useAppSelector(selectFilter);
  const { brands, memory, ramMemory, cpuCores, priceRange } = types;

  let finalProducts: IProduct[] = products;
  const showFinalProducts = (value: any[]) => {
    finalProducts = value;
  };

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    actionCreator: Function,
    entityName: any) => {
      const { name } = e.target;
      dispatch(actionCreator({
        ...entityName,
        [name]: !entityName[name]
      }));
      setCurrentPage(1);
  };

  const getProducts = () => {
    const _sort = sort.sortProperty.replace('-', '');
    const _order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const brand: any = null;

    dispatch(fetchProducts({_sort, _order, brand}));
  };

  useEffect(() => {
    getProducts();
  }, [sort.sortProperty]);

  const setCheckedItems = (itemList: any) => {
    return Object.entries(itemList).filter(item => item[1]).map(item => item[0]);
  };

  const setFilteredItems = (checkedItemList: any[], item: any) => {
    return products.filter(({ [item]: itemName }: any) => {
      if (itemName === "brand") {
        return checkedItemList.includes(itemName);
      } else {
        return checkedItemList.includes(itemName.toString());
      }
    });
  };

  const checkedBrands: any[] = setCheckedItems(brands);
  const filteredBrands: IProduct[] = setFilteredItems(checkedBrands, "brand");

  const checkedMemory: any[] = setCheckedItems(memory);
  const filteredMemory: IProduct[] = setFilteredItems(checkedMemory, "memory");

  const checkedRam: any[] = setCheckedItems(ramMemory);
  const filteredRam: IProduct[] = setFilteredItems(checkedRam, "ramMemory");

  const checkedCpuCores: any[] = setCheckedItems(cpuCores);
  const filteredCpuCores: IProduct[] = setFilteredItems(checkedCpuCores, "cpuCores");

  const filteredPrice: IProduct[] = products.filter(({price}: IProduct) => {
    return price >= priceRange.min && price <= priceRange.max;
  });

  const brandsExist = filteredBrands.length ? true : false;
  const memoryExists = filteredMemory.length ? true : false;
  const ramExists = filteredRam.length ? true : false;
  const cpuCoresExist = filteredCpuCores.length ? true : false;
  const priceExists = filteredPrice.length ? true : false;
  
  const brandsChecked = checkedBrands.length ? true : false;
  const memoryChecked = checkedMemory.length ? true : false;
  const ramChecked = checkedRam.length ? true : false;
  const cpuCoresChecked = checkedCpuCores.length ? true : false;
  
  const brandsNotFiltered = filteredBrands.length === 0;
  const memoryNotFiltered = filteredMemory.length === 0;
  const ramNotFiltered = filteredRam.length === 0;
  const cpuCoresNotFiltered = filteredCpuCores.length === 0;
  const priceNotFiltered = filteredPrice.length === 0;
  
  const brandsDontExist = (brandsChecked && brandsNotFiltered) ? true : false;
  const memoryDoesntExist = (memoryChecked && memoryNotFiltered) ? true : false;
  const ramDoesntExist = (ramChecked && ramNotFiltered) ? true : false;
  const cpuCoresDontExist = (cpuCoresChecked && cpuCoresNotFiltered) ? true : false;
  
  const filterBrands = ({ brand }: IProduct) => {
    return checkedBrands.includes(brand);
  };
  const filterMemory = ({ memory }: IProduct) => {
    return checkedMemory.includes(memory.toString());
  };
  const filterRam = ({ ramMemory }: IProduct) => {
    return checkedRam.includes(ramMemory.toString());
  };
  const filterCpuCores = ({ cpuCores }: IProduct) => {
    return checkedCpuCores.includes(cpuCores.toString());
  };

  const filterPrice = ({ price }: IProduct) => {
    return price >= priceRange.min && price <= priceRange.max;
  };

  const existingItems: boolean[] = [brandsExist, memoryExists, ramExists, cpuCoresExist];
  const filterFunctions: filterFuncArr = [filterBrands, filterMemory, filterRam, filterCpuCores];

  const filterProducts = (filterFuncArr: filterFuncArr) => {
    return filterFuncArr.reduce((totalArr: any[], filterFunc) => {
      return totalArr.filter(filterFunc);
    }, products);
  };
  let setFilteredFinalProducts = (filterFuncArr: filterFuncArr) => {
    showFinalProducts(filterProducts(filterFuncArr));
  };  
  let filterArrItemsByIdx = (srcArr: any[], indexes: number[]) => {
    return srcArr.filter((el, i) => indexes.some(j => i === j));
  };

  let makeFinalProducts = (srcArr: sourceArr, indexes: number[]) => {
    setFilteredFinalProducts(filterArrItemsByIdx(srcArr, indexes));
  };

  let indexes: number[] = [];
  const setIndexes = useCallback(() => {
    indexes = existingItems.map((el, i) => {
      if (el === true) {
        return i;
      }
    }).filter(item => {
      return item || item === 0;
    }).map(item => {
      return Number(item);
    });
    if (indexes.length) {
      makeFinalProducts(filterFunctions, indexes);
    }
  }, [existingItems]);

  setIndexes();
  
  if (brandsDontExist || memoryDoesntExist || ramDoesntExist || cpuCoresDontExist) {
    showFinalProducts([]);
  }

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return finalProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, finalProducts]);

  // debugger; 

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filtersColumn}>
        <Filters 
          handleChange={handleChange}
          brandsArr={[setBrands, brands]}
          memoryArr={[setMemory, memory]}
          ramMemoryArr={[setRamMemory, ramMemory]}
          cpuCoresArr={[setCpuCores, cpuCores]}
          priceRange={priceRange}
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
                    totalCount={finalProducts.length}
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
