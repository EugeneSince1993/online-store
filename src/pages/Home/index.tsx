import { FC, useEffect, useMemo, useState } from "react";
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
  const dispatch = useAppDispatch();
  
  const { products, isLoading } = useAppSelector(selectProduct);
  const { sort, types } = useAppSelector(selectFilter);
  const { brands, memory, ramMemory, cpuCores, priceRange } = types;

  let finalProducts: any = products;

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log(priceRange);
  }, [priceRange]);

  // stopped here

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

  const getProducts = async () => {
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

  const checkedBrands = setCheckedItems(brands);
  const filteredBrands = setFilteredItems(checkedBrands, "brand");

  const checkedMemory = setCheckedItems(memory);
  const filteredMemory = setFilteredItems(checkedMemory, "memory");

  const checkedRam = setCheckedItems(ramMemory);
  const filteredRam = setFilteredItems(checkedRam, "ramMemory");

  const checkedCpuCores = setCheckedItems(cpuCores);
  const filteredCpuCores = setFilteredItems(checkedCpuCores, "cpuCores");

  // Filter logics

  const brandsExist = (Array.isArray(filteredBrands) && filteredBrands.length) ? true : false;
  const memoryExists = (Array.isArray(filteredMemory) && filteredMemory.length) ? true : false;
  const ramExists = (Array.isArray(filteredRam) && filteredRam.length) ? true : false;
  const cpuCoresExist = (Array.isArray(filteredCpuCores) && filteredCpuCores.length) ? true : false;
  
  const brandsChecked = (Array.isArray(checkedBrands) && checkedBrands.length) ? true : false;
  const memoryChecked = (Array.isArray(checkedMemory) && checkedMemory.length) ? true : false;
  const ramChecked = (Array.isArray(checkedRam) && checkedRam.length) ? true : false;
  const cpuCoresChecked = (Array.isArray(checkedCpuCores) && checkedCpuCores.length) ? true : false;
  
  const brandsNotFiltered = filteredBrands.length === 0;
  const memoryNotFiltered = filteredMemory.length === 0;
  const ramNotFiltered = filteredRam.length === 0;
  const cpuCoresNotFiltered = filteredCpuCores.length === 0;
  
  const brandsDontExist = (brandsChecked && brandsNotFiltered) ? true : false;
  const memoryDoesntExist = (memoryChecked && memoryNotFiltered) ? true : false;
  const ramDoesntExist = (ramChecked && ramNotFiltered) ? true : false;
  const cpuCoresDontExist = (cpuCoresChecked && cpuCoresNotFiltered) ? true : false;
  
  const showFinalProducts = (value: any[]) => {
    finalProducts = value;
  };
  
  const brandsDontExistOtherExists = (brandsDontExist && memoryExists) || (brandsDontExist && ramExists) || 
    (brandsDontExist && cpuCoresExist);
  const memoryDoesntExistOtherExists = (memoryDoesntExist && brandsExist) || (memoryDoesntExist && ramExists) || 
    (memoryDoesntExist && cpuCoresExist);
  const ramDoesntExistOtherExists = (ramDoesntExist && brandsExist) || (ramDoesntExist && memoryExists) || 
    (ramDoesntExist && cpuCoresExist);
  const cpuCoresDontExistOtherExists = (cpuCoresDontExist && brandsExist) || (cpuCoresDontExist && memoryExists) || 
    (cpuCoresDontExist && ramExists);
  
  const brandsDontExistOtherExist = (brandsDontExist && memoryExists && ramExists) || 
    (brandsDontExist && memoryExists && ramExists && cpuCoresExist);
  const memoryDoesntExistOtherExist = (memoryDoesntExist && brandsExist && ramExists) || 
    (memoryDoesntExist && brandsExist && ramExists && cpuCoresExist);
  const ramDoesntExistOtherExist = (ramDoesntExist && brandsExist && memoryExists) || 
    (ramDoesntExist && brandsExist && memoryExists && cpuCoresExist);
  const cpuCoresDontExistOtherExist = (cpuCoresDontExist && brandsExist && memoryExists) || 
    (cpuCoresDontExist && brandsExist && memoryExists && ramExists);
  
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
  
  if (brandsExist && memoryExists && ramExists && cpuCoresExist) {
    showFinalProducts(products
      .filter(filterBrands)
      .filter(filterMemory)
      .filter(filterRam)
      .filter(filterCpuCores));
  } else if (brandsNotFiltered && memoryExists && ramExists && cpuCoresExist) {
    showFinalProducts(products
      .filter(filterMemory)
      .filter(filterRam)
      .filter(filterCpuCores));
  } else if (brandsExist && memoryNotFiltered && ramExists && cpuCoresExist) {
    showFinalProducts(products
      .filter(filterBrands)
      .filter(filterRam)
      .filter(filterCpuCores));
  } else if (brandsExist && memoryExists && ramNotFiltered && cpuCoresExist) {
    showFinalProducts(products
      .filter(filterBrands)
      .filter(filterMemory)
      .filter(filterCpuCores));
  } else if (brandsExist && memoryExists && ramExists && cpuCoresNotFiltered) {
    showFinalProducts(products
      .filter(filterBrands)
      .filter(filterMemory)
      .filter(filterRam));
  } else if (brandsNotFiltered && memoryNotFiltered && ramExists && cpuCoresExist) {
    showFinalProducts(products
      .filter(filterRam)
      .filter(filterCpuCores));
  } else if (brandsExist && memoryNotFiltered && ramNotFiltered && cpuCoresExist) {
    showFinalProducts(products
      .filter(filterBrands)
      .filter(filterCpuCores));
  } else if (brandsExist && memoryExists && ramNotFiltered && cpuCoresNotFiltered) {
    showFinalProducts(products
      .filter(filterBrands)
      .filter(filterMemory));
  } else if (brandsNotFiltered && memoryExists && ramExists && cpuCoresNotFiltered) {
    showFinalProducts(products
      .filter(filterMemory)
      .filter(filterRam));
  } else if (brandsNotFiltered && memoryExists && ramNotFiltered && cpuCoresExist) {
    showFinalProducts(products
      .filter(filterMemory)
      .filter(filterCpuCores));
  } else if (brandsExist && memoryNotFiltered && ramExists && cpuCoresNotFiltered) {
    showFinalProducts(products
      .filter(filterBrands)
      .filter(filterRam));
  } else if (brandsNotFiltered && memoryNotFiltered && ramNotFiltered && cpuCoresExist) {
    showFinalProducts(filteredCpuCores);
  } else if (brandsExist && memoryNotFiltered && ramNotFiltered && cpuCoresNotFiltered) {
    showFinalProducts(filteredBrands);
  } else if (brandsNotFiltered && memoryExists && ramNotFiltered && cpuCoresNotFiltered) {
    showFinalProducts(filteredMemory);
  } else if (brandsNotFiltered && memoryNotFiltered && ramExists && cpuCoresNotFiltered) {
    showFinalProducts(filteredRam);
  }
  
  if (brandsDontExist || memoryDoesntExist || ramDoesntExist || cpuCoresDontExist || brandsDontExistOtherExists || memoryDoesntExistOtherExists || ramDoesntExistOtherExists || cpuCoresDontExistOtherExists || brandsDontExistOtherExist || memoryDoesntExistOtherExist || ramDoesntExistOtherExist || cpuCoresDontExistOtherExist) 
  {
    showFinalProducts([]);
  }

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return finalProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, finalProducts]);

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
        <div style={{marginTop: 20, marginBottom: 20}}>
          {priceRange.min} 
          {" , "} 
          {priceRange.max} 
        </div>
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
