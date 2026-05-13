import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  productlist: product[] = [
    {
      productId: '1',
      productName: "Asus Tuf Gaming",
      productDescripition: "Gaming Laptop",
      productprice: "45000",
      productImg: "https://dlcdnwebimgs.asus.com/gain/f93bdd99-47d7-4f97-8800-5a83d0bd46a6/"
    },
    {
      productId: '2',
      productName: "Acer Predator",
      productDescripition: "Gaming Laptop",
      productprice: "95000",
      productImg: "https://m.media-amazon.com/images/I/81g7AiqWrtL.jpg"
    },
    {
      productId: '3',
      productName: "HP OMEN ",
      productDescripition: "Gaming Laptop",
      productprice: "95000",
      productImg: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/312485_0_yeg1sf.png"
    },
    {
      productId: '4',
      productName: "Alienware",
      productDescripition: "Gaming Laptop",
      productprice: "135000",
      productImg: "https://shwetacomputers.com/cdn/shop/files/laptop-alienware-m18-r2-intel-bk-copilot-gallery-3_30443876-7e32-4b6c-a1be-b89379e0d31e.png?v=1740757403"
    }


  ]

  getLaptops() {
    return of(this.productlist);
  }

  getLaptopById(pid: any) {
    return this.productlist.find(i => i.productId == pid);
  }

  addLaptops(laptop: any) {
    this.productlist.push(laptop);
    return "product added successfully"
  }
  deletelaptop(pid: any) {
    const index = this.productlist.findIndex(i => i.productId == pid);
    if (index == -1) {
      return "product not found"
    }
    else {
      this.productlist.splice(index, 1);
      return "product delete"
    }

  }
  updateLaptop(updated: any) {
    const index = this.productlist.findIndex(i => i.productId == updated.productId);
    this.productlist.splice(index, 1, updated);
    return "product updated"
  }
}


