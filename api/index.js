const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static("public"));

const image = () =>
  `http://localhost:4444/0${Math.round(Math.random() * 3) + 1}.jpg`;

console.log(image());

const randomPrice = () => {
  return Math.random() * 100000;
};

app.get(
  "/api/v1/nl_NL/configurator/filtercategory",
  function (req, res) {
    res.json({
      max_distance: {
        id: 194,
        locale: "nl_NL",
        name: "max_distance",
        title: "Maximale schietafstand",
        info: "Hoe ver kan de pijl schieten",
        type: "range",
        multiple: false,
        values: [
            {
                value: "500",
                label: "50 M",
              },
              {
                value: "600",
                label: "60 M",
              },
              {
                value: "700",
                label: "70 M",
              },
              {
                value: "800",
                label: "80 M",
              },
              {
                value: "900",
                label: "90 M",
              },
        ],
      },
      filter_series: {
        id: 191,
        locale: "nl_NL",
        name: "filter_series",
        title: "productserie",
        info: "Bent u bekend met onze producten? Kies dan hier uw productserie.",
        type: "multi_select",
        multiple: false,
        values: [
          {
            value: "a2cce82e-f341-11ed-a9f9-ea24dc3ac1e4",
            label: "Easton",
          },
          {
            value: "a2ccfea4-f341-11ed-bb8e-ea24dc3ac1e4",
            label: "Hoyt",
          },
          {
            value: "a2cd0f84-f341-11ed-92c0-ea24dc3ac1e4",
            label: "Avalance",
          },
        ],
      },
      filter_type: {
        id: 190,
        locale: "nl_NL",
        name: "filter_type",
        title: "Producttype",
        info: "",
        type: "multi_select",
        multiple: false,
        values: [
          {
            value: "e5fbcd96-f340-11ed-beb6-ea24dc3ac1e4",
            label: "Hout",
          },
          {
            value: "e5fc1698-f340-11ed-8c7f-ea24dc3ac1e4",
            label: "Carbon",
          },
          {
            value: "e5fc270a-f340-11ed-b38c-ea24dc3ac1e4",
            label: "Aluminium",
          },
        ],
      },
      filter_arrow_width: {
        id: 193,
        locale: "nl_NL",
        name: "filter_s_width",
        title: "Breedte product",
        info: "",
        type: "multi_select",
        multiple: false,
        values: [
          {
            value: "b7d43e18-f344-11ed-a0a1-ea24dc3ac1e4",
            label: "smal",
          },
          {
            value: "b7d455c4-f344-11ed-beda-ea24dc3ac1e4",
            label: "breed",
          },
        ],
      },
      filter_point: {
        id: 192,
        locale: "nl_NL",
        name: "filter_point",
        title: "Pijlpunt",
        info: "",
        type: "multi_select",
        multiple: true,
        values: [
          {
            value: "a4790bac-f342-11ed-89b8-ea24dc3ac1e4",
            label: "Hout.",
          },
          {
            value: "a4792290-f342-11ed-bce5-ea24dc3ac1e4",
            label: "Aluminium",
          },
        ],
      },
    });
  }
);

app.get("/api/v1/nl_NL/configurator/products", function (req, res) {
  setTimeout(() => {
  res.json({
    arrows: [
      {
        id: 336,
        locale: "nl_NL",
        name: "Easton One",
        articleNumber: "con_product",
        subtitle: "Carbon pijl",
        shortDescription: null,
        description:
          "Meest betaalbare pijl van Easton, en toch betrouwbaar",
        series: "AG",
        productImage:
          "https://www.lasports.com.my/webshaper/pcm/gallery/lg/1ffaaf7fd2f52b2917523c069667a9351520926851-lg.jpg",
        arrowingConfigurator: true,
        attributeDescription:
          "Betrouwbaar, in prijs en kwaliteit",
        attributeBullets:
          "Ideaal voor beginner\r\nIn 10 minuten in de roos\r\nLangdurig betrouwbaar",
        attributes: {
          max_distance: {
            attributeId: 15074,
            type: "select",
            name: "max_distance",
            code: "filter_type",
            value: ["600"],
            label: "60 M",
          },
          filter_type: {
            attributeId: 15074,
            type: "select",
            name: "producttype",
            code: "filter_type",
            value: ["e5fbcd96-f340-11ed-beb6-ea24dc3ac1e4"],
            label: "carbon",
          },
          filter_series: {
            attributeId: 15082,
            type: "select",
            name: "productserie",
            code: "filter_series",
            value: ["a2cd1fa6-f341-11ed-99fa-ea24dc3ac1e4"],
            label: "AG",
          },
          filter_point: {
            attributeId: 15090,
            type: "select",
            name: "Point",
            code: "filter_point",
            value: [
              "a4790bac-f342-11ed-89b8-ea24dc3ac1e4",
            ],
            label: "Hout",
          },
          filter_arrow_width: {
            attributeId: 15098,
            type: "select",
            name: "Breedte product",
            code: "filter_arrow_width",
            value: ["b7d43e18-f344-11ed-a0a1-ea24dc3ac1e4"],
            label: "smal",
          },
        },
        variants: [
            {
                productId: 121
            }
        ]
      },
      {
        id: 337,
        locale: "nl_NL",
        name: "Hoyt Carbonpijl",
        articleNumber: "carbon_one",
        subtitle: null,
        shortDescription: null,
        description:
          "Meest betaalbare pijl van Hoyt, en toch betrouwbaar",
        series: "AG",
        productImage:
          "https://www.dutchbowstore.com/media/76/fc/20/1648816918/Skylon-Savage-complete-arrow.jpg",
        arrowingConfigurator: true,
        attributeDescription:
          "Betrouwbaar, in prijs en kwaliteit",
        attributeBullets:
          "Ideaal voor beginner\r\nIn 10 minuten in de roos\r\nLangdurig betrouwbaar",
        attributes: {
            max_distance: {
              attributeId: 15074,
              type: "select",
              name: "max_distance",
              code: "filter_type",
              value: ["600"],
              label: "60 M",
            },
            filter_type: {
              attributeId: 15074,
              type: "select",
              name: "producttype",
              code: "filter_type",
              value: ["e5fbcd96-f340-11ed-beb6-ea24dc3ac1e4"],
              label: "carbon",
            },
            filter_series: {
              attributeId: 15082,
              type: "select",
              name: "productserie",
              code: "filter_series",
              value: ["a2cd1fa6-f341-11ed-99fa-ea24dc3ac1e4"],
              label: "AG",
            },
            filter_point: {
              attributeId: 15090,
              type: "select",
              name: "Point",
              code: "filter_point",
              value: [
                "a4790bac-f342-11ed-89b8-ea24dc3ac1e4",
              ],
              label: "Hout",
            },
            filter_arrow_width: {
              attributeId: 15098,
              type: "select",
              name: "Breedte product",
              code: "filter_arrow_width",
              value: ["b7d43e18-f344-11ed-a0a1-ea24dc3ac1e4"],
              label: "smal",
            },
          },
        variants: [
            {
                productId: 121
            }
        ]
      },
      {
        id: 339,
        locale: "nl_NL",
        name: "Retro",
        articleNumber: "con_product_qwood",
        subtitle: "Houten pijl",
        shortDescription: null,
        description:
          "Lekker licht en luchtig",
        series: "AG",
        productImage:
          "https://sarmatarchery.com/wp-content/uploads/2019/11/IMG_2529.jpg",
        arrowingConfigurator: true,
        attributeDescription:
          "Betrouwbaar, in prijs en kwaliteit",
        attributeBullets:
          "Ideaal voor professional\r\nIn 1 minuten in de roos\r\nLangdurig betrouwbaar",
        attributes: {
            max_distance: {
              attributeId: 15074,
              type: "select",
              name: "max_distance",
              code: "filter_type",
              value: ["600"],
              label: "60 M",
            },
            filter_type: {
              attributeId: 15074,
              type: "select",
              name: "producttype",
              code: "filter_type",
              value: ["e5fbcd96-f340-11ed-beb6-ea24dc3ac1e4"],
              label: "carbon",
            },
            filter_series: {
              attributeId: 15082,
              type: "select",
              name: "productserie",
              code: "filter_series",
              value: ["a2cd1fa6-f341-11ed-99fa-ea24dc3ac1e4"],
              label: "AG",
            },
            filter_point: {
              attributeId: 15090,
              type: "select",
              name: "Point",
              code: "filter_point",
              value: [
                "a4790bac-f342-11ed-89b8-ea24dc3ac1e4",
              ],
              label: "Hout",
            },
            filter_arrow_width: {
              attributeId: 15098,
              type: "select",
              name: "Breedte product",
              code: "filter_arrow_width",
              value: ["b7d43e18-f344-11ed-a0a1-ea24dc3ac1e4"],
              label: "smal",
            },
          },
        variants: [
            {
                productId: 121
            }
        ]
      },
    ],
  });
  }, 1000);
});

app.get(
  "/api/v1/nl_NL/configurator/product/:productId",
  function (req, res) {
    res.json({
      product: {
        name: "Productname",
        series: "Series",
        subtitle: "Product Subtitle",
        productImage: image(),
        price: {
          amount: 1000,
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: 1000,
          currency: "EUR",
        },
        productId: 500,
        variantOptions: {
          workingHeight: 1000,
          platform_size: 1.85,
          option_3: [10, 6],
        },
      },
      filters: [
        {
          name: "shootingDistance",
          title: "Schietafstand",
          info: "Schietafstand is hoe ver je kunt schieten",
          text: "Dit is tekst!",
          type: "range",
          multiple: true,
          values: [
            {
              label: "60 m",
              value: 600,
            },
            {
              label: "80 m",
              value: 800,
            },
            {
              label: "90 m",
              value: 900,
            },
            {
              label: "100 m",
              value: 1000,
            },
            {
              label: "110 m",
              value: 1100,
            },
          ],
        },
        {
          name: "product_type",
          type: "option",
          title: "Producttype",
          text: "Kies het materiaal van uw product: ",
          multiple: false,
          values: [
            {
              label: "Hout",
              value: "ea5be1d0-285e-11ed-af13-02426c422ccd",

            },
            {
              label: "Carbon",
              value: "ea5bf670-285e-11ed-9d2e-02426c422ccd",
            },
            {
                label: "Carbon",
                value: "ea5bf670-285e-11ed-9d2e-02426c422ccd",
            },
          ],
        },
        {
          name: "build_method",
          type: "option",
          title: "Opbouwmethode",
          text: "Selecteer de gewenste opbouwmethode. Voor het veiliger en sneller opbouwen van een product is er de Safe-Quick\u00ae GuardRail.",
          multiple: false,
          values: [
            {
              label: "Safe-Quick\u00ae",
              value: "18297b38-285f-11ed-9cbf-02426c422ccd",
            },
            {
              label: "Test-Quick\u00ae",
              value: "19177b38-285f-11ed-9cbf-02426c422ccd",
            },
          ],
        },
        {
          name: "platform_width",
          title: "Platform breedte",
          info: "Kies de platformlengte. De 2,45 m uitvoering is de meest gangbare lengte, neemt niet teveel ruimte in beslag én geeft u voldoende werkruimte.",
          text: "Dit is tekst!",
          type: "option",
          multiple: true,
          values: [
            {
              label: "0.75m",
              value: 0.75,
            },
            {
              label: "0.9m",
              value: 0.9,
            },
          ],
        },
        {
          name: "platform_size",
          title: "Platform lengte",
          info: "Lorem Ipsum Dolor Sit AMat Neo Consectetur",
          text: "Kies de platformlengte. De 2,45 m uitvoering is de meest gangbare lengte, neemt niet teveel ruimte in beslag én geeft u voldoende werkruimte.",
          type: "option",
          multiple: false,
          values: [
            {
              label: "1,85 m",
              value: 1.85,
            },
            {
              label: "2,45 m",
              value: 2.45,
            },
            {
              label: "3,05 m",
              value: 3.05,
            },
          ],
        },
      ],
      totalPrice: {
        price: {
          amount: randomPrice(),
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: randomPrice(),
          currency: "EUR",
        },
      },
    });
  }
);

app.post("/api/v1/nl_NL/configurator/search", function (req, res) {
  setTimeout(() => {
    res.json({
      product: {
        name: "Product",
        series: "Product Series",
        productImage: image(),
        price: {
          amount: randomPrice(),
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: randomPrice(),
          currency: "EUR",
        },
        productId: 500,
      },
      totalPrice: {
        price: {
          amount: randomPrice(),
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: randomPrice(),
          currency: "EUR",
        },
      },
    });
  }, 1000);
});

app.get(
  "/api/v1/nl_NL/configurator/product/:productId/additions",
  function (req, res) {
    setTimeout(() => {
      res.json({
        additions: [
          {
            name: "Veren",
            productImage: image(),
            articleNumber: "EAN-12345678",
            productId: 1,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus feugiat quam posuere tempor ut vitae nisi. Curabitur suscipit ultricies efficitur. Nullam suscipit pretium congue. Aliquam eu tristique nibh, et scelerisque diam. ",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "USD",
            },
          },
          {
            name: "Wrappings",
            productImage: image(),
            articleNumber: "EAN-12312",
            productId: 2,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus feugiat quam posuere tempor ut vitae nisi. Curabitur suscipit ultricies efficitur. Nullam suscipit pretium congue. Aliquam eu tristique nibh, et scelerisque diam. ",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "USD",
            },
          },
          {
            name: "Nokje",
            productImage: image(),
            articleNumber: "EAN-12312",
            productId: 3,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus feugiat quam posuere tempor ut vitae nisi. Curabitur suscipit ultricies efficitur. Nullam suscipit pretium congue. Aliquam eu tristique nibh, et scelerisque diam. ",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "USD",
            },
          },
        ],
      });
    }, 1000);
  }
);

app.get(
  "/api/v1/nl_NL/configurator/product/:productId/accessories",
  function (req, res) {
    setTimeout(() => {
      res.json({
        accessories: [
          {
            name: "Pijlentas",
            productImage: image(),
            articleNumber: "EAN-12312",
            productId: 1,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus feugiat quam posuere tempor ut vitae nisi. Curabitur suscipit ultricies efficitur. Nullam suscipit pretium congue. Aliquam eu tristique nibh, et scelerisque diam. ",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "USD",
            },
          },
          {
            name: "Pijlentrekker",
            productImage: image(),
            articleNumber: "EAN-12312",
            productId: 2,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus feugiat quam posuere tempor ut vitae nisi. Curabitur suscipit ultricies efficitur. Nullam suscipit pretium congue. Aliquam eu tristique nibh, et scelerisque diam. ",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "USD",
            },
          },
          {
            name: "Pijlenwas",
            productImage: image(),
            articleNumber: "EAN-12312",
            productId: 3,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus feugiat quam posuere tempor ut vitae nisi. Curabitur suscipit ultricies efficitur. Nullam suscipit pretium congue. Aliquam eu tristique nibh, et scelerisque diam. ",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "USD",
            },
          },
        ],
      });
    }, 1000);
  }
);

app.post("/api/v1/nl_NL/configurator/inquiry", function (req, res) {
  setTimeout(() => {
    res.json({
      product: {
        name: "Configured Product",
        series: "Configured Product Series",
        subtitle: "Configured product subtitle",
        productImage: image(),
        price: {
          amount: randomPrice(),
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: randomPrice(),
          currency: "USD",
        },
        productId: "EU-58448",
      },
      totalPrice: {
        price: {
          amount: randomPrice(),
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: randomPrice(),
          currency: "EUR",
        },
      },
      productSpecs: [
        {
          label: "Schietafstand",
          value: "50 m",
        },
        {
          label: "pijl lengte",
          value: "0,75m",
        },
      ],
      productParts: {
        items2: [],
        items: [
          {
            productId: 2,
            name: "Nokje",
            amount: 10,
          },
          {
            productId: 1,
            name: "Punten",
            amount: 10,
          },
          {
            productId: 5,
            name: "Wrappings",
            amount: 10,
          },
        ],
      },
      accessories: {
        price: {
          amount: randomPrice(),
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: randomPrice(),
          currency: "EUR",
        },
        items: [
          {
            productId: 1,
            amount: 10,
            name: "Pijlentas",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "EUR",
            },
          },
          {
            productId: 2,
            amount: 10,
            name: "Pijlentrekker",
            price: {
              amount: randomPrice(),
              currency: "EUR",
            },
            priceWithoutVAT: {
              amount: randomPrice(),
              currency: "EUR",
            },
          },
        ],
      },
      additions: {
        price: {
          amount: randomPrice(),
          currency: "EUR",
        },
        priceWithoutVAT: {
          amount: randomPrice(),
          currency: "EUR",
        },
        items: [
            {
              productId: 1,
              amount: 10,
              name: "Pijlentas",
              price: {
                amount: randomPrice(),
                currency: "EUR",
              },
              priceWithoutVAT: {
                amount: randomPrice(),
                currency: "EUR",
              },
            },
            {
              productId: 2,
              amount: 10,
              name: "Pijlentrekker",
              price: {
                amount: randomPrice(),
                currency: "EUR",
              },
              priceWithoutVAT: {
                amount: randomPrice(),
                currency: "EUR",
              },
            },
          ],
      },
    });
  }, 1000);
});

app.listen(4444);
