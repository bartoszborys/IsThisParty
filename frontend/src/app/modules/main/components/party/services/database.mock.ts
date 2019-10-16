import { Observable, of } from 'rxjs';
import { PartyDetails } from '../models/party-details.model';

export const parties: Observable<PartyDetails[]> = of([
  {
    id: 1,
    img: "/assets/hands2.jpg",
    title: "Zabawa na plaży",
    description: "Zapraszamy wszystkich znajomych na imprezkę ✌✌✌. 24-07-2020 na plaży koło łeby :D"
  },
  {
    id: 2,
    img: "/assets/hands.jpg",
    title: "Girll na działce",
    description: `
      Chcemy zrobić grilla na dziłce we wtorek(28-09-2019). Grill, 
      podpałka jest ale jedzenie trzeba sobie skombinować samemu :D. 
      Chcemy zrobić grilla na dziłce we wtorek(28-09-2019). Grill, 
      podpałka jest ale jedzenie trzeba sobie skombinować samemu :D. 
      Chcemy zrobić grilla na dziłce we wtorek(28-09-2019). Grill, 
      podpałka jest ale jedzenie trzeba sobie skombinować samemu :D.`
  },
  {
    id: 3,
    img: "/assets/hands.jpg",
    title: "Super 18-nacha 🎂",
    description: "Flaszka może jest, ale więcej alkoholu też się przyda :D"
  },
  {
    id: 4,
    img: "/assets/hands2.jpg",
    title: "Zabawa na plaży",
    description: "Zapraszamy wszystkich znajomych na imprezkę ✌✌✌. 24-07-2020 na plaży koło łeby :D"
  },
  {
    id: 5,
    img: "/assets/hands.jpg",
    title: "Girll na działce",
    description: "Chcemy zrobić grilla na dziłce we wtorek(28-09-2019). Grill, podpałka jest ale jedzenie trzeba sobie skombinować samemu :D"
  },
  {
    id: 6,
    img: "/assets/hands.jpg",
    title: "Super 18-nacha 🎂",
    description: "Flaszka może jest, ale więcej alkoholu też się przyda :D"
  },
  {
    id: 7,
    img: "/assets/hands2.jpg",
    title: "Zabawa na plaży",
    description: "Zapraszamy wszystkich znajomych na imprezkę ✌✌✌. 24-07-2020 na plaży koło łeby :D"
  },
  {
    id: 8,
    img: "/assets/hands.jpg",
    title: "Girll na działce",
    description: "Chcemy zrobić grilla na dziłce we wtorek(28-09-2019). Grill, podpałka jest ale jedzenie trzeba sobie skombinować samemu :D"
  },
  {
    id: 9,
    img: "/assets/hands.jpg",
    title: "Super 18-nacha 🎂" + "a".repeat(64),
    description: "Flaszka może jest, ale więcej alkoholu też się przyda :D"
  },
  {
    id: 10,
    img: "/assets/hands2.jpg",
    title: "Zabawa na plaży",
    description: "Zapraszamy wszystkich znajomych na imprezkę ✌✌✌. 24-07-2020 na plaży koło łeby :D"
  },
  {
    id: 11,
    img: "/assets/hands.jpg",
    title: "Girll na działce",
    description: "Chcemy zrobić grilla na dziłce we wtorek(28-09-2019). Grill, podpałka jest ale jedzenie trzeba sobie skombinować samemu :D"
  },
  {
    id: 12,
    img: "/assets/hands.jpg",
    title: "Super 18-nacha 🎂",
    description: "Flaszka może jest, ale więcej alkoholu też się przyda :D"
  }
]);