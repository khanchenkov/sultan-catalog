import CartList from "../components/CartList/CartList";
import { render } from "@testing-library/react";
import * as reactRedux from "react-redux";
import data from "../data/data.json";

jest.mock("react-redux");

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

const mockCart = [
    {
        "product_id": 1,
        "amount": 1,
        "item": {
            "image_url": "https://ir.ozone.ru/s3/multimedia-2/wc250/6247507310.jpg",
            "name": "Средство для мытья посуды Crystal",
            "brand_name": "AOS",
            "price": 49.76,
            "id": 1,
            "manufacturer": "Grifon",
            "barcode": "4604049097540",
            "measurement_type": "volume",
            "size": "450",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
            "care_type": [
                "Уход за лицом",
                "Уход за руками"
            ]
        }
    },
    {
        "product_id": 2,
        "amount": 1,
        "item": {
            "id": 2,
            "name": "Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
            "brand_name": "ARIEL",
            "image_url": "https://static.beloris.ru/content/catalog_image/674589/original/280_320compress_1647260829_nnb_ariel_avt_gel_sms_gidk.jpg",
            "measurement_type": "weight",
            "size": "15x28",
            "barcode": "4604049097541",
            "manufacturer": "Нэфис",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
            "price": 50.32,
            "care_type": [
                "Уход за лицом",
                "Уход за телом",
                "Уход за волосами"
            ]
        }
    }
]

describe("CartList rendering", () => {
  it("Renders empty cart list", () => {
    useSelectorMock.mockReturnValue([]);
    const view = render(<CartList />);
    expect(view).toMatchSnapshot();
  });

  it("Renders cart list with items", () => {
    useSelectorMock.mockReturnValue(mockCart);
    const view = render(<CartList />);
    expect(view).toMatchSnapshot();
  })
});

