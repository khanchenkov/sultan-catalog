import { FC, useState } from "react";
import { Product } from "../../types/Interfaces";
import "./AdminProduct.scss";

interface IAdminProduct {
  item: Product;
  removeProduct: (id: number) => void;
  editProductItem: (product: Product) => void;
}

const AdminProduct: FC<IAdminProduct> = ({
  item,
  removeProduct,
  editProductItem,
}) => {
  const careTypes = [
    "Уход за телом",
    "Уход за руками",
    "Уход за ногами",
    "Уход за лицом",
    "Уход за волосами",
  ];
  const {
    image_url,
    name,
    brand_name,
    price,
    id,
    manufacturer,
    barcode,
    measurement_type,
    size,
    description,
    care_type,
  }: Product = item;

  const [imageUrl, setImageUrl] = useState<string>(image_url);
  const [productName, setProductName] = useState<string>(name);
  const [brandName, setBrandName] = useState<string>(brand_name);
  const [productPrice, setProductPrice] = useState<string>(String(price));
  const [productManufacturer, setProductManufacturer] =
    useState<string>(manufacturer);
  const [productBarcode, setProductBarcode] = useState<string>(barcode);
  const [measurementType, setMeasurementType] =
    useState<string>(measurement_type);
  const [productSize, setProductSize] = useState<string>(size);
  const [productDescription, setProductDescription] =
    useState<string>(description);
  const [productCareTypes, setProductCareTypes] = useState<string[]>(care_type);

  const [validationError, setValidationError] = useState<boolean>(false);

  const addCareTypeToList = (e: any, careType: string) => {
    if (e.target.checked) {
      setProductCareTypes((state) => [...state, careType]);
    } else {
      setProductCareTypes((state) => state.filter((el) => el !== careType));
    }
  };

  const validated =
    imageUrl &&
    productName &&
    brandName &&
    productPrice &&
    productManufacturer &&
    productBarcode &&
    measurementType &&
    productSize &&
    productDescription &&
    productCareTypes.length > 0;

  const saveChanges = (id: number) => {
    if (!validated) {
      setValidationError(true);
      return;
    }
    setValidationError(false);

    const editedProduct: Product = {
      image_url: imageUrl,
      name: productName,
      brand_name: brandName,
      price: Number(productPrice),
      id,
      manufacturer: productManufacturer,
      barcode: productBarcode,
      measurement_type: measurementType,
      size: productSize,
      description: productDescription,
      care_type: productCareTypes,
    };

    editProductItem(editedProduct);
  };

  return (
    <li className="admin-page__product admin-product">
      <div className="admin-product__position">
        <span>id:</span> {id}
        {validationError && (
          <p className="admin-product__validation">
            Не все поля заполнены корректно
          </p>
        )}
      </div>

      <div className="admin-product__image">
        <img src={imageUrl} alt={productName} />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div className="admin-product__about">
        <div className="admin-product__brand">
          <span>Бренд:</span>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>

        <div className="admin-product__name">
          <span>Название:</span>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="admin-product__price">
          <span>Цена:</span>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>

        <div className="admin-product__manufacturer">
          <span>Производитель:</span>
          <input
            type="text"
            value={productManufacturer}
            onChange={(e) => setProductManufacturer(e.target.value)}
          />
        </div>

        <div className="admin-product__barcode">
          <span>Штрихкод:</span>
          <input
            type="text"
            value={productBarcode}
            onChange={(e) => setProductBarcode(e.target.value)}
          />
        </div>

        <div className="admin-product__measurement">
          <span>Измерение:</span>
          <select
            value={measurementType}
            onChange={(e) => setMeasurementType(e.target.value)}
          >
            <option value="volume">В миллилитрах</option>
            <option value="weight">в граммах</option>
          </select>
        </div>

        <div className="admin-product__size">
          <span>Размер:</span>
          <input
            type="text"
            value={productSize}
            onChange={(e) => setProductSize(e.target.value)}
          />
        </div>
        <div className="admin-product__description">
          <span>Описание: </span>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <div className="admin-product__care-type">
          <span>Тип ухода:</span>
          {careTypes.map((el: string, i: number) => (
            <p key={i}>
              <input
                type="checkbox"
                checked={productCareTypes.includes(el)}
                onChange={(e) => addCareTypeToList(e, el)}
              />
              {el}
            </p>
          ))}
        </div>
      </div>

      <div className="admin-product__buttons">
        <button onClick={() => saveChanges(id)}>Сохранить изменения</button>
        <button onClick={() => removeProduct(id)}>x</button>
      </div>
    </li>
  );
};

export default AdminProduct;
