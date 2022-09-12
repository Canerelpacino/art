const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Loggerheads";
const description = "Just a lost guy who needs to be saved!";
const baseUri = "ipfs://QmdEYBoYeEBhMaXU41agVT6QEAziTm4AHqVG7LAMexyqmH";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    //Without Gold Eye
    growEditionSizeTo: 4839,
    layersOrder: [
      { name: "Background"},
      { name: "Skin"},
      { name: "Without Gold Eye",
       options: {
        displayName: "Eyes",
       } }, 
      { name: "Mouth" },
      { name: "Accesoires" },
      { name: "Headwear" },
    ],
  },
    //Without Jellyfish
    {
      growEditionSizeTo: 9678,
      layersOrder: [
        { name: "Background"},
        { name: "Skin"},
        { name: "Eyes" }, 
        { name: "Mouth" },
        { name: "Accesoires" },
        { name: "Without Jellyfish Headwear",
         options: {
          displayName: "Headwear",
         } },
      ],
    },
  //Gold and Rot
  {
    growEditionSizeTo: 9940,
    layersOrder: [
      { name: "Background"},
      { name: "Gold and Rot Skin",
        options: {
          displayName: "Skin",
        }},

      { name: "Gold and Rot Eyes",
       options: {
        displayName: "Eyes",
       } },
      { name: "Mouth" },
      { name: "Gold Rot Accesoires",
      options: {
       displayName: "Accesoires",
      } },
      { name: "Gold Rot Headwear",
        options: {
          displayName: "Headwear",
        } },
    ],
  },

  {
    //Plastic Skin
    growEditionSizeTo: 9999,
    layersOrder: [
      { name: "Background"},
      { name: "Plastic Skin",
       options: {
        displayName: "Skin",
       }},
      { name: "Eyes"}, 
      { name: "Mouth" },
      { name: "Accesoires PLastic Skin",
      options: {
        displayName: "Accesoires",
      } },
      { name: "Plastic Skin Headwear",
      options: {
        displayName: "Headwear",
      } },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
