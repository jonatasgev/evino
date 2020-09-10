import { ICampaign } from './campaign.interface';
import { ICountry } from './country.interface';
import { IDatasheet } from './datasheet.interface';
import { IDiscounts } from './discounts.interface';
import { IImages } from './images.interface';
import { IMainCampaign } from './main-campaign.interface';
import { IPrices } from './prices.interface';
import { IProducer } from './producer.interface';
import { ISeo } from './seo.interface';
import { ISommelier } from './sommelier.interface';
<<<<<<< HEAD
=======
import { IGrape } from './grape.interface';
>>>>>>> parent of b00eff0... Auto-generated commit

export interface IProduct {
  aboutThisWine?: string;
  alcoholContent?: null;
  attributeSet?: string;
  bundleProducts?: IProduct[];
  campaigns?: ICampaign[];
  classification?: null;
  closureType?: null;
  countries?: ICountry[];
  datasheet?: IDatasheet;
  discounts?: IDiscounts;
  exclusiveStore?: [];
  expiration?: string;
  grapeList?: null;
<<<<<<< HEAD
  grapes?: [];
=======
  grapes?: IGrape[];
>>>>>>> parent of b00eff0... Auto-generated commit
  harmonization?: null;
  images?: IImages;
  intensity?: string;
  isBundle?: boolean;
  isExpired?: boolean;
  isInAllProductsCategory?: boolean;
  mainCampaign?: IMainCampaign;
  maxQuantityInCart?: null;
  name?: string;
  pairing?: null;
  parentBundles?: [];
  price?: number;
  prices?: IPrices;
<<<<<<< HEAD
  prizesAndMedals?: null;
=======
  prizesAndMedals?: string[];
>>>>>>> parent of b00eff0... Auto-generated commit
  prizesMedals?: null;
  producer?: IProducer;
  quantity?: number;
  scarcityQuantity?: null;
  seo?: ISeo;
  servingTemperature?: null;
  sku?: string;
  sommelier?: ISommelier;
  tagline?: null;
  type?: string;
  uri?: string;
  url?: string;
  validForSale?: boolean;
  video?: null;
  vintage?: null;
  volume?: null;
  whyThisWine?: string;
}
