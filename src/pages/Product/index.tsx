import { useEffect, useState } from 'react';
import axios from '../../axios';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './Product.module.scss';

export const Product = () => {
  const [data, setData] = useState({});
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const rating = 4.8;
  const testimonials = 10;
  const productCode = 2465730;
  const priceValue = 60000;

  useEffect( () => {
    axios
      .get(`/devices/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const images = [
    'https://c.dns-shop.ru/thumb/st4/fit/0/0/55397a81830541f4eb540f683257f747/12092f9b71a507a98b8dccea0ad509ad042718c88cbbebc1efa76393bf4b5e2d.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/0/0/af1fc14437cd51b02ff51639960aafb6/15592be6e1d2e99f0d576feb215b6f06f2a99fa3812a099602922d3611f206b5.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/0/0/78f3b31cc33931f58f71262610ad4213/61a932ae834913c10b87a0da54232da7e84e302c06bf20fe6441b808d90f646d.jpg.webp'
  ];

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <div>
            <Carousel showIndicators={false} showStatus={false}>
              <div onClick={() => setIsOpen(true)}>
                <img 
                  src="https://c.dns-shop.ru/thumb/st4/fit/0/0/55397a81830541f4eb540f683257f747/12092f9b71a507a98b8dccea0ad509ad042718c88cbbebc1efa76393bf4b5e2d.jpg.webp" 
                />
              </div>
              <div onClick={() => setIsOpen(true)}>
                <img 
                  src="https://c.dns-shop.ru/thumb/st4/fit/0/0/af1fc14437cd51b02ff51639960aafb6/15592be6e1d2e99f0d576feb215b6f06f2a99fa3812a099602922d3611f206b5.jpg.webp" 
                />
              </div>
              <div onClick={() => setIsOpen(true)}>
                <img 
                  src="https://c.dns-shop.ru/thumb/st4/fit/0/0/78f3b31cc33931f58f71262610ad4213/61a932ae834913c10b87a0da54232da7e84e302c06bf20fe6441b808d90f646d.jpg.webp" 
                />
              </div>
            </Carousel>
          </div>
          <div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={
                  () => setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={
                  () => setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}
          </div>
        </div>
        <div className={styles.mainData}>
          <h1>Apple iPhone</h1>
          <div className={styles.shortSpecs}>
            8x(2.4 ГГц), 6 Гб, 2 SIM, IPS, 2400x1080, камера 50+8 Мп, NFC, 5G, GPS, FM, 5000 мА*ч
          </div>
          <div className={styles.productCode}>
            Код товара: {productCode}
          </div>
          <div className={styles.icons}>
            <div className={classNames(styles.rating, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-star"></i>
              <span>{rating}</span>
              <div className={classNames(styles.tooltipText, "tooltipText")}>
                Рейтинг {rating} из 5
              </div>
            </div>
            <div className={classNames(styles.testimonials, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-comment"></i>
              <span>{testimonials}</span>
              <div className={classNames("tooltipText", styles.tooltipText)}>
                {testimonials} отзывов
              </div>
            </div>
          </div>
          <div className={styles.priceAndBuy}>
            <div className={styles.price}>
              <div className={styles.priceValue}>
                <NumberFormat 
                  value={priceValue} 
                  displayType='text' 
                  thousandSeparator=' '
                />
              </div>
              <div className={styles.currency}>₽</div>
            </div>
            <div className={styles.addToCartAndFavorites}>
              <div className={styles.addToCart}>
                <button>
                  <div>
                    <span className={
                      classNames("material-symbols-outlined", styles.cartIcon)
                    }>
                      shopping_cart
                    </span>
                    <span className={styles.toCart}>В корзину</span>
                  </div>
                </button>
              </div>
              <div className={classNames(styles.favorites, "tooltip")}>
                <i className="fa-solid fa-heart"></i>
                <div className="tooltipText">Добавить в избранное</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <Tabs>
          <TabList>
            <Tab id="specs-title">Характеристики</Tab>
            <Tab>Описание</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.specs}>
              <div className={styles.spec}>
                <div className={styles.specName}>Диагональ экрана, дюйм</div>
                <div className={styles.specValue}>6.1</div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specName}>Объем встроенной памяти</div>
                <div className={styles.specValue}>64 Гб</div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specName}>Объем оперативной памяти</div>
                <div className={styles.specValue}>4 Гб</div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <p className={styles.productDescription}>
              POCO M4 Pro оснащён 6,6-дюймовым IPS-дисплеем DotDisplay с разрешением FHD+ (2400 × 1080 точек), частотой обновления 90 Гц и частотой отклика сенсорного слоя в пределах 240 Гц. Частота обновления экрана автоматически регулируется в зависимости от воспроизводимого контента. Дисплей поддерживает цветовое пространство DCI-P3 и обеспечивает яркость в 450 кд/м2. Для его защиты от царапин используется прочное стекло Gorilla Glass 3.
              Основная камера смартфона базируется на 50-Мп сенсоре, дополненном ультраширокоугольным 8-Мп датчиком с углом обзора 119°. Разрешение фронтальной камеры, размещённой в отверстии в центр у верхнего торца экрана, составляет 16 Мп.
              Смартфон основан на 6-нм восьмиядерном процессоре MediaTek Dimensity 810 с максимальной тактовой частотой 2,4 ГГц, графической системой Arm Mali-G57 MC2 и модемом 5G. Объём оперативной памяти составляет 4 Гбайт, ёмкость флеш-накопителя UFS 2.2 — 64 Гбайт. Есть слот для карт памяти microSD ёмкостью до 1 Тбайт.
              Спецификации смартфона также включают поддержку технологии NFC, адаптеры беспроводной связи Wi-Fi, Bluetooth, FM-радио, инфракрасный приёмопередатчик, порт USB Type-C, 3,5-мм аудиоразъём и два динамика. Для разблокировки используется боковой сканер отпечатков пальцев.
              Аккумуляторная батарея ёмкостью 5000 мА·ч обладает поддержкой быстрой 33-ваттной подзарядки. На полную зарядку батареи с нуля потребуется 59 минут, а всего 10 минут зарядки обеспечат просмотр видео в течение 2,5 часа. Смартфон работает под управлением операционной системы Android 11 с фирменным интерфейсом MIUI 12.5.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
