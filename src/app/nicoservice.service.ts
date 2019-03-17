import { Injectable} from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { getClosureSafeProperty } from '@angular/core/src/util/property';

@Injectable({
  providedIn: 'root'
})
export class NicoserviceService {



constructor() {}

productsCollection = [
  {
    id: 1,
    name: 'Pink kurta',
    price: 499.99,
    currency: 'INR',
    image: 'assets/images/z1.jpg',
    image1: 'assets/images/z2.jpg'
  },
  {
    id: 2,
    name: 'Long Dress',
    price: 249.99,
    currency: 'INR',
    image: 'assets/images/z3.jpg',
    image1: 'assets/images/z4.jpg'
  },
  {
    id: 3,
    name: 'Plazzo',
    price: 239.99,
    currency: 'INR',
    image: 'assets/images/z5.jpg',
    image1: 'assets/images/z6.jpg'
  },
  {
    id: 4,
    name: 'Kurta ',
    price: 119.99,
    currency: 'INR',
    image: 'assets/images/z7.jpg',
    image1: 'assets/images/z8.jpg'
  },
  {
    id: 5,
    name: 'Long Full Dress',
    price: 599.99,
    currency: 'INR',
    image: 'assets/images/z9.jpg',
    image1: 'assets/images/z10.jpg'
  },
  {
    id: 6,
    name: 'Kurta',
    price: 149.99,
    currency: 'INR',
    image: 'assets/images/z11.jpg',
    image1: 'assets/images/z12.jpg'
  },
  {
    id: 6,
    name: 'Pants',
    price: 149.99,
    currency: 'INR',
    image: 'assets/images/z13.jpg',
    image1: 'assets/images/z14.jpg'
  },
  {
    id: 6,
    name: 'Pants',
    price: 149.99,
    currency: 'INR',
    image: 'assets/images/z15.jpg',
    image1: 'assets/images/z16.jpg'
  },
  {
    id: 6,
    name: 'Top',
    price: 149.99,
    currency: 'INR',
    image: 'assets/images/z17.jpg',
    image1: 'assets/images/z18.jpg'
  },
];

  setData(params) {
    params = this.productsCollection;
  }
  getData() {
    return this.productsCollection;
  }

}

