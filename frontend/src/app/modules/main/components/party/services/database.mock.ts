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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque sit amet turpis et luctus. Praesent sollicitudin ornare dui, in sollicitudin augue facilisis ac. Morbi ultricies libero sed tempor rutrum. Donec lobortis in tellus ac eleifend. Cras ut felis eu ante gravida pulvinar ut a lectus. Quisque faucibus pellentesque tortor, a fringilla dolor. Cras a lacus et lorem rutrum aliquet sit amet et felis. Aliquam erat volutpat. Etiam sagittis aliquet ullamcorper. Pellentesque a iaculis purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vulputate elementum turpis et viverra. Cras a est suscipit sapien facilisis posuere ac a mi. Morbi non sapien et velit fringilla rhoncus.

      Fusce purus nisl, cursus quis cursus sed, egestas sed libero. Nam dapibus orci feugiat nisi auctor molestie vel at dolor. Suspendisse molestie, leo at porttitor laoreet, sem nunc hendrerit arcu, ac eleifend nisl leo quis felis. In a urna tincidunt, porta eros id, auctor risus. Nunc in odio sit amet tortor semper bibendum sed ut turpis. Maecenas ante lectus, sollicitudin ac aliquam eu, ornare id libero. Aliquam diam mauris, vehicula non suscipit sit amet, placerat sed neque. Cras sit amet pretium nunc, a tempor est. Ut tincidunt justo elit, eget aliquet eros eleifend at. Integer id ultricies nunc. Etiam ultrices sollicitudin lacus, nec iaculis risus sodales at. Nam volutpat egestas venenatis. Sed porta hendrerit diam, id scelerisque nibh eleifend ut.
      
      Curabitur eu mauris eu turpis iaculis rhoncus eget nec urna. Mauris pretium odio massa, non hendrerit leo semper vel. Nam eleifend ultrices egestas. Pellentesque id arcu eu turpis pretium porta in luctus ligula. Phasellus sodales dolor eget odio venenatis, nec viverra urna consectetur. Quisque blandit scelerisque convallis. Pellentesque ut sapien sit amet nisi auctor molestie. Curabitur laoreet libero finibus finibus sollicitudin. Mauris a diam quis dolor sollicitudin pulvinar vitae sed neque. Morbi euismod, tortor a tempor feugiat, elit velit semper lectus, quis porta ex nunc quis ipsum.
      
      Sed sagittis ipsum ut urna mattis, a laoreet est elementum. Aliquam erat volutpat. Cras consequat diam sit amet leo elementum laoreet. Phasellus molestie feugiat urna, a tincidunt tortor tristique sed. Mauris molestie lectus at erat viverra, ac fringilla justo pellentesque. Duis scelerisque vehicula arcu, nec faucibus lacus. Vivamus quis varius nisi, eu imperdiet odio. Phasellus eu consectetur nulla, eget rhoncus orci.
      
      Aenean sit amet auctor nisi, id viverra ante. Integer laoreet nisi sed diam aliquam luctus. Mauris a porttitor enim, id tincidunt enim. Phasellus eu posuere odio, at placerat tellus. Donec accumsan ac arcu sed tincidunt. Donec maximus ac libero et fermentum. Nam sit amet metus sit amet nulla lobortis ultrices. Praesent ac faucibus diam.
    `
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