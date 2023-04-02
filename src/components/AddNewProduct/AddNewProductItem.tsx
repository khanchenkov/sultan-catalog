import { useState, FC } from "react";
import { Product } from "../../types/Interfaces";
import "./AddNewProduct.scss";

interface IAddNewProduct {
  addNewProduct: (product: Product) => void;
  lastId: number;
}

const AddNewProductItem: FC<IAddNewProduct> = ({ addNewProduct, lastId }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productManufacturer, setProductManufacturer] = useState<string>("");
  const [productBarcode, setProductBarcode] = useState<string>("");
  const [measurementType, setMeasurementType] = useState<string>("");
  const [productSize, setProductSize] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productCareTypes, setProductCareTypes] = useState<string[]>([]);

  const [validationError, setValidationError] = useState<boolean>(false);

  const careTypes = [
    "Уход за телом",
    "Уход за руками",
    "Уход за ногами",
    "Уход за лицом",
    "Уход за волосами",
  ];

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

  const saveChanges = () => {
    if (!validated) {
      setValidationError(true);
      return;
    }
    setValidationError(false);

    const newProduct: Product = {
      id: lastId + 1,
      image_url: imageUrl,
      name: productName,
      brand_name: brandName,
      price: Number(productPrice),
      manufacturer: productManufacturer,
      barcode: productBarcode,
      measurement_type: measurementType,
      size: productSize,
      description: productDescription,
      care_type: productCareTypes,
    };

    addNewProduct(newProduct);
    clearFields();
  };

  const clearFields = () => {
    setImageUrl("");
    setProductName("");
    setBrandName("");
    setMeasurementType("");
    setProductBarcode("");
    setProductCareTypes([]);
    setProductPrice("");
    setProductManufacturer("");
    setProductDescription("");
    setProductSize("");
  };

  return (
    <div>
      {validationError && (
        <p className="add-new-product__validation">Не все поля заполнены</p>
      )}

      <div className="add-new-product">
        <div className="add-new-product__image">
          <img src={imageUrl} alt="Превью картинки" />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="URL картинки"
          />
        </div>

        <div className="add-new-product__about">
          <div className="add-new-product__brand">
            <span>Бренд:</span>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>

          <div className="add-new-product__name">
            <span>Название:</span>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="add-new-product__price">
            <span>Цена:</span>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>

          <div className="add-new-product__manufacturer">
            <span>Производитель:</span>
            <input
              type="text"
              value={productManufacturer}
              onChange={(e) => setProductManufacturer(e.target.value)}
            />
          </div>

          <div className="add-new-product__barcode">
            <span>Штрихкод:</span>
            <input
              type="text"
              value={productBarcode}
              onChange={(e) => setProductBarcode(e.target.value)}
            />
          </div>

          <div className="add-new-product__measurement">
            <span>Измерение:</span>
            <select
              value={measurementType}
              onChange={(e) => setMeasurementType(e.target.value)}
            >
              <option value="">Не выбрано</option>
              <option value="volume">В миллилитрах</option>
              <option value="weight">в граммах</option>
            </select>
          </div>

          <div className="add-new-product__size">
            <span>Размер:</span>
            <input
              type="text"
              value={productSize}
              onChange={(e) => setProductSize(e.target.value)}
            />
          </div>
          <div className="add-new-product__description">
            <span>Описание: </span>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>

          <div className="add-new-product__care-type">
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

        <div className="add-new-product__buttons">
          <button onClick={saveChanges}>Добавить</button>
          <button onClick={clearFields}>Сбросить</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProductItem;
