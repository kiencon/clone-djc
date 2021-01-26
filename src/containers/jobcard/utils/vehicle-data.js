let w = {
  "Diagram 1": [
    { type: "steer", wheelIds: [1, 6], tyreQuantity: 2 },
    { type: "drive", wheelIds: [2, 3, 4, 5], tyreQuantity: 4 }
  ],
  "Diagram 2": [
    { type: "steer", wheelIds: [10, 1], tyreQuantity: 2 },
    { type: "drive", wheelIds: [8, 9, 3, 2], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [6, 7, 5, 4], tyreQuantity: 4 }
  ],
  "Diagram 3": [
    { type: "steer", wheelIds: [10, 1], tyreQuantity: 2 },
    { type: "drive", wheelIds: [8, 9, 3, 2], tyreQuantity: 4 },
    { type: "drive", wheelIds: [6, 7, 5, 4], tyreQuantity: 4 }
  ],
  "Diagram 4": [
    { type: "steer", wheelIds: [12, 1], tyreQuantity: 2 },
    { type: "trailer", wheelIds: [11, 2], tyreQuantity: 2 },
    { type: "drive", wheelIds: [9, 10, 4, 3], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [7, 8, 6, 5], tyreQuantity: 4 }
  ],
  "Diagram 5": [
    { type: "steer", wheelIds: [12, 1], tyreQuantity: 2 },
    { type: "steer", wheelIds: [11, 2], tyreQuantity: 2 },
    { type: "drive", wheelIds: [9, 10, 4, 3], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [7, 8, 6, 5], tyreQuantity: 4 }
  ],
  "Diagram 6": [
    { type: "steer", wheelIds: [12, 1], tyreQuantity: 2 },
    { type: "steer", wheelIds: [11, 2], tyreQuantity: 2 },
    { type: "drive", wheelIds: [9, 10, 4, 3], tyreQuantity: 4 },
    { type: "drive", wheelIds: [7, 8, 6, 5], tyreQuantity: 4 }
  ],
  "Diagram 7": [
    { type: "steer", wheelIds: [14, 1], tyreQuantity: 2 },
    { type: "steer", wheelIds: [13, 2], tyreQuantity: 2 },
    { type: "trailer", wheelIds: [12, 3], tyreQuantity: 2 },
    { type: "drive", wheelIds: [10, 11, 5, 4], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [8, 9, 7, 6], tyreQuantity: 4 }
  ],
  "Diagram 8": [
    { type: "steer", wheelIds: [14, 1], tyreQuantity: 2 },
    { type: "steer", wheelIds: [13, 2], tyreQuantity: 2 },
    { type: "drive", wheelIds: [11, 12, 4, 3], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [9, 10, 6, 5], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [8, 7], tyreQuantity: 2 }
  ],
  "Diagram 9": [
    { type: "steer", wheelIds: [14, 1], tyreQuantity: 2 },
    { type: "drive", wheelIds: [12, 13, 3, 2], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [10, 11, 5, 4], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [8, 9, 7, 6], tyreQuantity: 4 }
  ],
  "Diagram 10": [
    { type: "steer", wheelIds: [18, 1], tyreQuantity: 2 },
    { type: "drive", wheelIds: [16, 17, 3, 2], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [14, 15, 5, 4], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [12, 13, 7, 6], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [10, 11, 9, 8], tyreQuantity: 4 }
  ],
  "Diagram 11": [
    { type: "steer", wheelIds: [22, 1], tyreQuantity: 2 },
    { type: "drive", wheelIds: [20, 21, 3, 2], tyreQuantity: 4 },
    { type: "drive", wheelIds: [18, 19, 5, 4], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [16, 17, 7, 6], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [14, 15, 9, 8], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [12, 13, 11, 10], tyreQuantity: 4 }
  ],
  "Diagram 12": [
    { type: "steer", wheelIds: [4, 1], tyreQuantity: 2 },
    { type: "drive", wheelIds: [3, 2], tyreQuantity: 2 }
  ],
  "Diagram 13": [
    { type: "steer", wheelIds: [8, 1], tyreQuantity: 2 },
    { type: "drive", wheelIds: [6, 7, 3, 2], tyreQuantity: 4 },
    { type: "steer", wheelIds: [5, 4], tyreQuantity: 2 }
  ],
  "Diagram 14": [
    { type: "steer", wheelIds: [28, 1], tyreQuantity: 2 },
    { type: "steer", wheelIds: [27, 2], tyreQuantity: 2 },
    { type: "trailer", wheelIds: [26, 3], tyreQuantity: 2 },
    { type: "drive", wheelIds: [24, 25, 5, 4], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [22, 23, 7, 6], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [21, 8], tyreQuantity: 2 },
    { type: "trailer", wheelIds: [19, 20, 10, 9], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [17, 18, 12, 11], tyreQuantity: 4 },
    { type: "trailer", wheelIds: [15, 16, 14, 13], tyreQuantity: 4 }
  ]
};

let d = [
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 1616,
    configuration: "4x2 (6 Wheeler)",
    diagram: "Diagram 1"
  },
  {
    type: "Truck",
    brand: "Bharat Benz",
    model: 1617,
    configuration: "4x2 (6 Wheeler)",
    diagram: "Diagram 1"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 1616,
    configuration: "4x2 (6 Wheeler)",
    diagram: "Diagram 1"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 4018,
    configuration: "4x2 Horse only",
    diagram: "Diagram 1"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 3518,
    configuration: "4x2 Horse only",
    diagram: "Diagram 1"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 3518,
    configuration: "4x2 Horse only",
    diagram: "Diagram 1"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 4018,
    configuration: "4x2 Horse only",
    diagram: "Diagram 1"
  },
  {
    type: "Truck",
    brand: "Bharat Benz",
    model: 4023,
    configuration: "4x2 Horse only",
    diagram: "Diagram 1"
  },
  {
    type: "ICV",
    brand: "",
    model: "",
    configuration: "4x2 (6 Wheeler)",
    diagram: "Diagram 1"
  },
  {
    Priority: 10,
    type: "LCV",
    brand: "",
    model: "",
    configuration: "4x2 (6 Wheeler)",
    diagram: "Diagram 1"
  },
  {
    Priority: 12,
    type: "Truck",
    brand: "Ashok Leyland",
    model: 4018,
    configuration: "4x2 Horse with Trailer",
    diagram: "Diagram 10"
  },
  {
    Priority: 13,
    type: "Truck",
    brand: "TATA",
    model: 4018,
    configuration: "4x2 Horse with Trailer",
    diagram: "Diagram 10"
  },
  {
    Priority: 14,
    type: "Truck",
    brand: "Bharat Benz",
    model: 4023,
    configuration: "4x2 Horse with Trailer",
    diagram: "Diagram 10"
  },
  {
    Priority: 15,
    type: "Truck",
    brand: "Ashok Leyland",
    model: 4923,
    configuration: "6x4 Horse only",
    diagram: "Diagram 3"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 4923,
    configuration: "6x4 Horse only",
    diagram: "Diagram 3"
  },
  {
    Priority: 16,
    type: "Truck",
    brand: "Bharat Benz",
    model: 4923,
    configuration: "6x4 Horse only",
    diagram: "Diagram 3"
  },
  {
    Priority: 17,
    type: "Truck",
    brand: "Ashok Leyland",
    model: 4923,
    configuration: "6x4 Horse with Trailer",
    diagram: "Diagram 11"
  },
  {
    Priority: 18,
    type: "Truck",
    brand: "TATA",
    model: 4923,
    configuration: "6x4 Horse with Trailer",
    diagram: "Diagram 11"
  },
  {
    type: "Truck",
    brand: "Bharat Benz",
    model: 4923,
    configuration: "6x4 Horse with Trailer",
    diagram: "Diagram 11"
  },
  {
    type: "LCV",
    brand: "",
    model: "",
    configuration: "4x2 (4 Wheeler)",
    diagram: "Diagram 12"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 2516,
    configuration: "6x2 (10 Wheeler)",
    diagram: "Diagram 2"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 2515,
    configuration: "6x2 (10 Wheeler)",
    diagram: "Diagram 2"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 2516,
    configuration: "6x2 (10 Wheeler)",
    diagram: "Diagram 2"
  },
  {
    type: "Truck",
    brand: "Bharat Benz",
    model: 2523,
    configuration: "6x2 (10 Wheeler)",
    diagram: "Diagram 2"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 2518,
    configuration: "6x4 (10 Wheeler)",
    diagram: "Diagram 3"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 2518,
    configuration: "6x4 (10 Wheeler)",
    diagram: "Diagram 3"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 3118,
    configuration: "8x2x2 (12 Wheeler)",
    diagram: "Diagram 4"
  },
  {
    type: "Truck",
    brand: "Bharat Benz",
    model: 3123,
    configuration: "8x2x2 (12 Wheeler)",
    diagram: "Diagram 4"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 3118,
    configuration: "8x2x4 (Twin steer 12 W)",
    diagram: "Diagram 5"
  },
  {
    type: "Truck",
    brand: "Eicher",
    model: 3531,
    configuration: "8x2x4 (Twin steer 12 W)",
    diagram: "Diagram 5"
  },
  {
    type: "Truck",
    brand: "Eicher",
    model: "Pro 5025",
    configuration: "6x2 (10 Wheeler)",
    diagram: "Diagram 2"
  },
  {
    type: "Truck",
    brand: "Eicher",
    model: "Pro 6031",
    configuration: "8x2x4 (Twin steer 12 W)",
    diagram: "Diagram 5"
  },
  {
    type: "Truck",
    brand: "Eicher",
    model: "Pro 6037",
    configuration: "10x2x4 (14 Wheeler)",
    diagram: "Diagram 7"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 3123,
    configuration: "8x4 (12 Wheeler)",
    diagram: "Diagram 6"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 3123,
    configuration: "8x4 (12 Wheeler)",
    diagram: "Diagram 6"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 3718,
    configuration: "10x2x4 (14 Wheeler)",
    diagram: "Diagram 7"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 3723,
    configuration: "10x2x4 (14 Wheeler)",
    diagram: "Diagram 8"
  },
  {
    type: "Truck",
    brand: "Bharat Benz",
    model: 3723,
    configuration: "10x2x4 (14 Wheeler)",
    diagram: "Diagram 7"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 3718,
    configuration: "10x2x4 (14 Wheeler)",
    diagram: "Diagram 8"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: 3518,
    configuration: "4x2 Horse with Trailer",
    diagram: "Diagram 9"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: 3518,
    configuration: "4x2 Horse with Trailer",
    diagram: "Diagram 9"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 1616,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 1617,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 2516,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 2518,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 2523,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 3118,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 3123,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 3518,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 3531,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 3718,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 3723,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 4018,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 4023,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: 4923,
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: "Others",
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Ashok Leyland",
    model: "Others",
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Bharat Benz",
    model: "Others",
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Eicher",
    model: "Others",
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: "Others",
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "TATA",
    model: "Others",
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Others",
    model: "Others",
    configuration: "Open Configuration",
    diagram: "Diagram 14"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "Blazo 49",
    configuration: "6x4 Horse with Trailer",
    diagram: "Diagram 11"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "Blazo 37",
    configuration: "10x2x4 (14 Wheeler)",
    diagram: "Diagram 7"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "Truxo 31",
    configuration: "8x2x4 (Twin steer 12 W)",
    diagram: "Diagram 5"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "Truxo 25",
    configuration: "6x2 (10 Wheeler)",
    diagram: "Diagram 2"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "Truxo 37",
    configuration: "10x2x4 (14 Wheeler)",
    diagram: "Diagram 7"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "MN 31",
    configuration: "8x2x4 (Twin steer 12 W)",
    diagram: "Diagram 5"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "MN 25",
    configuration: "6x4 (10 Wheeler)",
    diagram: "Diagram 3"
  },
  {
    type: "Truck",
    brand: "Mahindra",
    model: "MN 49",
    configuration: "6x4 Horse with Trailer",
    diagram: "Diagram 11"
  },
  {
    type: "Bus and Coach",
    brand: "Volvo",
    model: "",
    configuration: "4x2 (6 Wheeler) City Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "Volvo",
    model: "",
    configuration: "6x2 (8 Wheeler) Coach",
    diagram: "Diagram 13"
  },
  {
    type: "Bus and Coach",
    brand: "Scania",
    model: "",
    configuration: "4x2 (6 Wheeler) City Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "Scania",
    model: "",
    configuration: "6x2 (8 Wheeler) Coach",
    diagram: "Diagram 13"
  },
  {
    type: "Bus and Coach",
    brand: "Mercedes",
    model: "",
    configuration: "4x2 (6 Wheeler) City Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "Mercedes",
    model: "",
    configuration: "6x2 (8 Wheeler) Coach",
    diagram: "Diagram 13"
  },
  {
    type: "Bus and Coach",
    brand: "Ashok Leyland",
    model: "",
    configuration: "4x2 (6 Wheeler) City Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "Ashok Leyland",
    model: "",
    configuration: "6x2 (8 Wheeler) Coach",
    diagram: "Diagram 13"
  },
  {
    type: "Bus and Coach",
    brand: "MAN",
    model: "",
    configuration: "4x2 (6 Wheeler) City Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "MAN",
    model: "",
    configuration: "6x2 (8 Wheeler) Coach",
    diagram: "Diagram 13"
  },
  {
    type: "Bus and Coach",
    brand: "IML Isuzu",
    model: "",
    configuration: "4x2 (6 Wheeler) City Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "IML Isuzu",
    model: "",
    configuration: "6x2 (8 Wheeler) Coach",
    diagram: "Diagram 13"
  },
  {
    type: "Bus and Coach",
    brand: "Others",
    model: "",
    configuration: "4x2 (6 Wheeler) City Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "Others",
    model: "",
    configuration: "6x2 (8 Wheeler) Coach",
    diagram: "Diagram 13"
  },
  {
    type: "Bus and Coach",
    brand: "TATA",
    model: "",
    configuration: "4x2 (6 Wheeler) Bus",
    diagram: "Diagram 1"
  },
  {
    type: "Bus and Coach",
    brand: "Eicher",
    model: "",
    configuration: "4x2 (6 Wheeler) Bus",
    diagram: "Diagram 1"
  }
];

export default function getAxel(type, brand, model, configuration) {
  for (let i = 0; i < d.length; i++) {
    if (
      d[i].type === type &&
      d[i].brand === brand &&
      d[i].model === model &&
      d[i].configuration === configuration
    ) {
      return w[d[i].diagram];
    }
  }

  return null;
}

// function string_to_slug(str) {
//   str = str.toString();
//   str = str.replace(/^\s+|\s+$/g, ""); // trim
//   str = str.toLowerCase();

//   // remove accents, swap ñ for n, etc
//   var from = "àáäâèéëêìíïîòóöôùúüûñç·_,:;";
//   var to = "aaaaeeeeiiiioooouuuunc-----";
//   for (var i = 0, l = from.length; i < l; i++) {
//     str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
//   }

//   str = str
//     .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
//     .replace(/\s+/g, "") // collapse whitespace and replace by -
//     .replace(/-+/g, "-"); // collapse dashes

//   return str;
// }