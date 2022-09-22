import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Filters, Sorting, Pagination } from "../../components";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/product/asyncActions";
import styles from "./Home.module.scss";
import spinner from '../../assets/img/Spinner-1s-200px.gif';
import { ProductItem } from "../../components/ProductItem";
import { selectProduct } from "../../redux/product/selectors";
import { setBrands, setColors, setCpuCores, setMemory, setRamMemory } from "../../redux/filter/filterSlice";
import { IProduct } from "../../types/IProduct";

type filterFunc = (object: IProduct) => boolean;
type filterFuncArr = filterFunc[];
type sourceArr = boolean[] | filterFuncArr;
interface rangeObj {
  min: number;
  max: number;
};

let pageSize = 8;

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  
  const { products, isLoading } = useAppSelector(selectProduct);
  const { sort, types, searchValue } = useAppSelector(selectFilter);
  const { brands, memory, ramMemory, cpuCores, colors, 
    priceRange, screenSizeRange, batteryCapacityRange } = types;

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

    dispatch(fetchProducts({_sort, _order}));
  };

  useEffect(() => {
    getProducts();
  }, [sort.sortProperty]);

  const setCheckedItems = (itemList: any) => {
    return Object.entries(itemList).filter(item => item[1]).map(item => item[0]);
  };

  const setFilteredItems = (checkedItemList: any[], item: string) => {
    return products.filter(({ [item]: itemName }: any) => {
      if (itemName === "brand" || itemName === "color") {
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

  const checkedColors: any[] = setCheckedItems(colors);
  const filteredColors: IProduct[] = setFilteredItems(checkedColors, "color");

  const setFilteredRange = (rangeType: rangeObj, item: string) => {
    return products.filter(({[item]: itemName}: any) => {
      return itemName >= rangeType.min && itemName <= rangeType.max;
    });
  };
  const filteredPrice: IProduct[] = setFilteredRange(priceRange, "price");
  const filteredScreenSize: IProduct[] = setFilteredRange(screenSizeRange, "screenSize");
  const filteredbatteryCapacity: IProduct[] = setFilteredRange(batteryCapacityRange, "batteryCapacity");

  const filteredSearchItems = products.filter(({name}: IProduct) => {
    return name.toLocaleLowerCase().includes(searchValue);
  });

  const brandsExist = filteredBrands.length ? true : false;
  const memoryExists = filteredMemory.length ? true : false;
  const ramExists = filteredRam.length ? true : false;
  const cpuCoresExist = filteredCpuCores.length ? true : false;
  const priceExists = filteredPrice.length ? true : false;
  const screenSizeExists = filteredScreenSize.length ? true : false;
  const batteryCapacityExists = filteredbatteryCapacity.length ? true : false;
  const colorsExist = filteredColors.length ? true : false;
  const searchItemsExist = filteredSearchItems.length ? true : false;
  
  const brandsChecked = checkedBrands.length ? true : false;
  const memoryChecked = checkedMemory.length ? true : false;
  const ramChecked = checkedRam.length ? true : false;
  const cpuCoresChecked = checkedCpuCores.length ? true : false;
  const colorsChecked = checkedColors.length ? true : false;
  
  const brandsNotFiltered = filteredBrands.length === 0;
  const memoryNotFiltered = filteredMemory.length === 0;
  const ramNotFiltered = filteredRam.length === 0;
  const cpuCoresNotFiltered = filteredCpuCores.length === 0;
  const colorsNotFiltered = filteredColors.length === 0;
  
  const brandsDontExist = (brandsChecked && brandsNotFiltered) ? true : false;
  const memoryDoesntExist = (memoryChecked && memoryNotFiltered) ? true : false;
  const ramDoesntExist = (ramChecked && ramNotFiltered) ? true : false;
  const cpuCoresDontExist = (cpuCoresChecked && cpuCoresNotFiltered) ? true : false;
  const colorsDontExist = (colorsChecked && colorsNotFiltered) ? true : false;

  const filterBrands = ({ brand }: IProduct) => {
    return checkedBrands.includes(brand);
  };
  const filterColors = ({ color }: IProduct) => {
    return checkedColors.includes(color);
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
  const filterScreenSize = ({ screenSize }: IProduct) => {
    return screenSize >= screenSizeRange.min && screenSize <= screenSizeRange.max;
  };
  const filterBatteryCapacity = ({ batteryCapacity }: IProduct) => {
    return batteryCapacity >= batteryCapacityRange.min && batteryCapacity <= batteryCapacityRange.max;
  };
  const filterSearchItems = ({ name }: IProduct) => {
    return name.toLocaleLowerCase().includes(searchValue);
  };

  const existingItems: boolean[] = [brandsExist, memoryExists, ramExists, cpuCoresExist, priceExists, screenSizeExists, batteryCapacityExists, colorsExist, searchItemsExist];
  const filterFunctions: filterFuncArr = [filterBrands, filterMemory, filterRam, filterCpuCores, filterPrice, filterScreenSize, filterBatteryCapacity, filterColors, filterSearchItems];

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
  
  if (brandsDontExist || memoryDoesntExist || ramDoesntExist || cpuCoresDontExist || colorsDontExist || 
    !priceExists || !screenSizeExists || !batteryCapacityExists || !searchItemsExist ) {
    showFinalProducts([]);
  }

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return finalProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, finalProducts]);

  const brandsArr = [setBrands, brands];
  const memoryArr = [setMemory, memory];
  const ramMemoryArr = [setRamMemory, ramMemory];
  const cpuCoresArr = [setCpuCores, cpuCores];
  const colorsArr = [setColors, colors];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filtersColumn}>
        <Filters 
          handleChange={handleChange}
          brandsArr={brandsArr}
          memoryArr={memoryArr}
          ramMemoryArr={ramMemoryArr}
          cpuCoresArr={cpuCoresArr}
          colorsArr={colorsArr}
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
