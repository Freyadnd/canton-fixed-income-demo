// Generated from FixedIncome.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

import * as pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 from '@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0';

export declare type SettleRedemption = {
};

export declare const SettleRedemption:
  damlTypes.Serializable<SettleRedemption> & {
  }
;


export declare type RedemptionReceipt = {
  issuer: damlTypes.Party;
  holder: damlTypes.Party;
  productInfo: ProductInfo;
  units: damlTypes.Numeric;
  redemptionAmount: damlTypes.Numeric;
};

export declare interface RedemptionReceiptInterface {
  Archive: damlTypes.Choice<RedemptionReceipt, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionReceipt, undefined>>;
  SettleRedemption: damlTypes.Choice<RedemptionReceipt, SettleRedemption, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionReceipt, undefined>>;
}
export declare const RedemptionReceipt:
  damlTypes.Template<RedemptionReceipt, undefined, '#fixed-income-daml:FixedIncome:RedemptionReceipt'> &
  damlTypes.ToInterface<RedemptionReceipt, never> &
  RedemptionReceiptInterface;

export declare namespace RedemptionReceipt {
}



export declare type CancelOffer = {
};

export declare const CancelOffer:
  damlTypes.Serializable<CancelOffer> & {
  }
;


export declare type RejectOffer = {
};

export declare const RejectOffer:
  damlTypes.Serializable<RejectOffer> & {
  }
;


export declare type AcceptOffer = {
};

export declare const AcceptOffer:
  damlTypes.Serializable<AcceptOffer> & {
  }
;


export declare type InsurerOffer = {
  issuer: damlTypes.Party;
  insurer: damlTypes.Party;
  seller: damlTypes.Party;
  productInfo: ProductInfo;
  units: damlTypes.Numeric;
  askPrice: damlTypes.Numeric;
};

export declare interface InsurerOfferInterface {
  AcceptOffer: damlTypes.Choice<InsurerOffer, AcceptOffer, damlTypes.ContractId<Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InsurerOffer, undefined>>;
  RejectOffer: damlTypes.Choice<InsurerOffer, RejectOffer, damlTypes.ContractId<Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InsurerOffer, undefined>>;
  CancelOffer: damlTypes.Choice<InsurerOffer, CancelOffer, damlTypes.ContractId<Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InsurerOffer, undefined>>;
  Archive: damlTypes.Choice<InsurerOffer, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InsurerOffer, undefined>>;
}
export declare const InsurerOffer:
  damlTypes.Template<InsurerOffer, undefined, '#fixed-income-daml:FixedIncome:InsurerOffer'> &
  damlTypes.ToInterface<InsurerOffer, never> &
  InsurerOfferInterface;

export declare namespace InsurerOffer {
}



export declare type ProposeOfferToInsurer = {
  askPrice: damlTypes.Numeric;
};

export declare const ProposeOfferToInsurer:
  damlTypes.Serializable<ProposeOfferToInsurer> & {
  }
;


export declare type Redeem = {
};

export declare const Redeem:
  damlTypes.Serializable<Redeem> & {
  }
;


export declare type Holding = {
  issuer: damlTypes.Party;
  insurer: damlTypes.Party;
  holder: damlTypes.Party;
  productInfo: ProductInfo;
  units: damlTypes.Numeric;
};

export declare interface HoldingInterface {
  Redeem: damlTypes.Choice<Holding, Redeem, damlTypes.ContractId<RedemptionReceipt>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Holding, undefined>>;
  ProposeOfferToInsurer: damlTypes.Choice<Holding, ProposeOfferToInsurer, damlTypes.ContractId<InsurerOffer>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Holding, undefined>>;
  Archive: damlTypes.Choice<Holding, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Holding, undefined>>;
}
export declare const Holding:
  damlTypes.Template<Holding, undefined, '#fixed-income-daml:FixedIncome:Holding'> &
  damlTypes.ToInterface<Holding, never> &
  HoldingInterface;

export declare namespace Holding {
}



export declare type WithdrawOffer = {
};

export declare const WithdrawOffer:
  damlTypes.Serializable<WithdrawOffer> & {
  }
;


export declare type AcceptPurchase = {
};

export declare const AcceptPurchase:
  damlTypes.Serializable<AcceptPurchase> & {
  }
;


export declare type PurchaseOffer = {
  issuer: damlTypes.Party;
  insurer: damlTypes.Party;
  buyer: damlTypes.Party;
  productInfo: ProductInfo;
  units: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
};

export declare interface PurchaseOfferInterface {
  AcceptPurchase: damlTypes.Choice<PurchaseOffer, AcceptPurchase, damlTypes.ContractId<Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PurchaseOffer, undefined>>;
  WithdrawOffer: damlTypes.Choice<PurchaseOffer, WithdrawOffer, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PurchaseOffer, undefined>>;
  Archive: damlTypes.Choice<PurchaseOffer, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PurchaseOffer, undefined>>;
}
export declare const PurchaseOffer:
  damlTypes.Template<PurchaseOffer, undefined, '#fixed-income-daml:FixedIncome:PurchaseOffer'> &
  damlTypes.ToInterface<PurchaseOffer, never> &
  PurchaseOfferInterface;

export declare namespace PurchaseOffer {
}



export declare type OfferToUser = {
  buyer: damlTypes.Party;
  units: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
};

export declare const OfferToUser:
  damlTypes.Serializable<OfferToUser> & {
  }
;


export declare type UpdateNav = {
  newNav: damlTypes.Numeric;
};

export declare const UpdateNav:
  damlTypes.Serializable<UpdateNav> & {
  }
;


export declare type FixedIncomeProduct = {
  issuer: damlTypes.Party;
  insurer: damlTypes.Party;
  productInfo: ProductInfo;
  currentNav: damlTypes.Numeric;
  totalUnits: damlTypes.Numeric;
};

export declare interface FixedIncomeProductInterface {
  UpdateNav: damlTypes.Choice<FixedIncomeProduct, UpdateNav, damlTypes.ContractId<FixedIncomeProduct>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FixedIncomeProduct, undefined>>;
  OfferToUser: damlTypes.Choice<FixedIncomeProduct, OfferToUser, damlTypes.ContractId<PurchaseOffer>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FixedIncomeProduct, undefined>>;
  Archive: damlTypes.Choice<FixedIncomeProduct, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FixedIncomeProduct, undefined>>;
}
export declare const FixedIncomeProduct:
  damlTypes.Template<FixedIncomeProduct, undefined, '#fixed-income-daml:FixedIncome:FixedIncomeProduct'> &
  damlTypes.ToInterface<FixedIncomeProduct, never> &
  FixedIncomeProductInterface;

export declare namespace FixedIncomeProduct {
}



export declare type ProductInfo = {
  name: string;
  faceValue: damlTypes.Numeric;
  couponRate: damlTypes.Numeric;
  maturityDate: damlTypes.Date;
};

export declare const ProductInfo:
  damlTypes.Serializable<ProductInfo> & {
  }
;

