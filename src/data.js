export const ITEMS_DATA = [
  {
    catName: "Vegitables & Fruits",
    available: true,
    subCat: [
      {
        name: "Vegitables",
        available: true,
        items: [
          {
            name: "Cucumber",
            colors: "#00b121",
            options: "Large",
            skuId: "SKU02052",
            count: 24,
            unlimited: false
          },
          {
            name: "Green Chilly",
            colors: "#00B121",
            options: "Small",
            skuId: "SKUD2552",
            count: 0,
            unlimited: true
          },
          {
            name: "Carrot",
            colors: "#335333",
            options: "Medium",
            skuId: "SKU96054",
            count: 0,
            unlimited: false
          }
        ]
      },
      {
        name: "Fruits",
        available: false,
        items: [
          {
            name: "Banana",
            colors: "#FFDA00",
            options: "Medium",
            skuId: "SKU0249",
            count: 0,
            unlimited: true
          },
          {
            name: "Green Apple",
            colors: "#00B121",
            options: "Large",
            skuId: "S596050",
            count: 0,
            unlimited: true
          }
        ]
      }
    ]
  },
  {
    catName: "Bread & Dairy",
    available: false,
    subCat: [
      {
        name: "Bread",
        available: false,
        items: []
      },
      {
        name: "Dairy",
        available: true,
        items: []
      }
    ]
  },
  {
    catName: "Snacks",
    available: false,
    subCat: [
      {
        name: "Snacks",
        available: true,
        items: []
      }
    ]
  }
];
