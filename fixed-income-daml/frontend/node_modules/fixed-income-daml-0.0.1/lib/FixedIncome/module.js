"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');

var pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 = require('@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0');


exports.SettleRedemption = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RedemptionReceipt = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:FixedIncome:RedemptionReceipt',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:FixedIncome:RedemptionReceipt',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, holder: damlTypes.Party.decoder, productInfo: exports.ProductInfo.decoder, units: damlTypes.Numeric(10).decoder, redemptionAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    holder: damlTypes.Party.encode(__typed__.holder),
    productInfo: exports.ProductInfo.encode(__typed__.productInfo),
    units: damlTypes.Numeric(10).encode(__typed__.units),
    redemptionAmount: damlTypes.Numeric(10).encode(__typed__.redemptionAmount),
  };
}
,
  Archive: {
    template: function () { return exports.RedemptionReceipt; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  SettleRedemption: {
    template: function () { return exports.RedemptionReceipt; },
    choiceName: 'SettleRedemption',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SettleRedemption.decoder; }),
    argumentEncode: function (__typed__) { return exports.SettleRedemption.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RedemptionReceipt, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);



exports.CancelOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.InsurerOffer = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:FixedIncome:InsurerOffer',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:FixedIncome:InsurerOffer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, insurer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, productInfo: exports.ProductInfo.decoder, units: damlTypes.Numeric(10).decoder, askPrice: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    insurer: damlTypes.Party.encode(__typed__.insurer),
    seller: damlTypes.Party.encode(__typed__.seller),
    productInfo: exports.ProductInfo.encode(__typed__.productInfo),
    units: damlTypes.Numeric(10).encode(__typed__.units),
    askPrice: damlTypes.Numeric(10).encode(__typed__.askPrice),
  };
}
,
  AcceptOffer: {
    template: function () { return exports.InsurerOffer; },
    choiceName: 'AcceptOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Holding).encode(__typed__); },
  },
  RejectOffer: {
    template: function () { return exports.InsurerOffer; },
    choiceName: 'RejectOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Holding).encode(__typed__); },
  },
  CancelOffer: {
    template: function () { return exports.InsurerOffer; },
    choiceName: 'CancelOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Holding).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.InsurerOffer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.InsurerOffer, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);



exports.ProposeOfferToInsurer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({askPrice: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    askPrice: damlTypes.Numeric(10).encode(__typed__.askPrice),
  };
}
,
};



exports.Redeem = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Holding = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:FixedIncome:Holding',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:FixedIncome:Holding',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, insurer: damlTypes.Party.decoder, holder: damlTypes.Party.decoder, productInfo: exports.ProductInfo.decoder, units: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    insurer: damlTypes.Party.encode(__typed__.insurer),
    holder: damlTypes.Party.encode(__typed__.holder),
    productInfo: exports.ProductInfo.encode(__typed__.productInfo),
    units: damlTypes.Numeric(10).encode(__typed__.units),
  };
}
,
  Redeem: {
    template: function () { return exports.Holding; },
    choiceName: 'Redeem',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Redeem.decoder; }),
    argumentEncode: function (__typed__) { return exports.Redeem.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RedemptionReceipt).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RedemptionReceipt).encode(__typed__); },
  },
  ProposeOfferToInsurer: {
    template: function () { return exports.Holding; },
    choiceName: 'ProposeOfferToInsurer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProposeOfferToInsurer.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProposeOfferToInsurer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.InsurerOffer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.InsurerOffer).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Holding; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Holding, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);



exports.WithdrawOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptPurchase = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PurchaseOffer = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:FixedIncome:PurchaseOffer',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:FixedIncome:PurchaseOffer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, insurer: damlTypes.Party.decoder, buyer: damlTypes.Party.decoder, productInfo: exports.ProductInfo.decoder, units: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    insurer: damlTypes.Party.encode(__typed__.insurer),
    buyer: damlTypes.Party.encode(__typed__.buyer),
    productInfo: exports.ProductInfo.encode(__typed__.productInfo),
    units: damlTypes.Numeric(10).encode(__typed__.units),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
  };
}
,
  AcceptPurchase: {
    template: function () { return exports.PurchaseOffer; },
    choiceName: 'AcceptPurchase',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptPurchase.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptPurchase.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Holding).encode(__typed__); },
  },
  WithdrawOffer: {
    template: function () { return exports.PurchaseOffer; },
    choiceName: 'WithdrawOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PurchaseOffer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.PurchaseOffer, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);



exports.OfferToUser = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, units: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    units: damlTypes.Numeric(10).encode(__typed__.units),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
  };
}
,
};



exports.UpdateNav = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newNav: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newNav: damlTypes.Numeric(10).encode(__typed__.newNav),
  };
}
,
};



exports.FixedIncomeProduct = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:FixedIncome:FixedIncomeProduct',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:FixedIncome:FixedIncomeProduct',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, insurer: damlTypes.Party.decoder, productInfo: exports.ProductInfo.decoder, currentNav: damlTypes.Numeric(10).decoder, totalUnits: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    insurer: damlTypes.Party.encode(__typed__.insurer),
    productInfo: exports.ProductInfo.encode(__typed__.productInfo),
    currentNav: damlTypes.Numeric(10).encode(__typed__.currentNav),
    totalUnits: damlTypes.Numeric(10).encode(__typed__.totalUnits),
  };
}
,
  UpdateNav: {
    template: function () { return exports.FixedIncomeProduct; },
    choiceName: 'UpdateNav',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateNav.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateNav.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.FixedIncomeProduct).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.FixedIncomeProduct).encode(__typed__); },
  },
  OfferToUser: {
    template: function () { return exports.FixedIncomeProduct; },
    choiceName: 'OfferToUser',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.OfferToUser.decoder; }),
    argumentEncode: function (__typed__) { return exports.OfferToUser.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PurchaseOffer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PurchaseOffer).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.FixedIncomeProduct; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.FixedIncomeProduct, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);



exports.ProductInfo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({name: damlTypes.Text.decoder, faceValue: damlTypes.Numeric(10).decoder, couponRate: damlTypes.Numeric(10).decoder, maturityDate: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    name: damlTypes.Text.encode(__typed__.name),
    faceValue: damlTypes.Numeric(10).encode(__typed__.faceValue),
    couponRate: damlTypes.Numeric(10).encode(__typed__.couponRate),
    maturityDate: damlTypes.Date.encode(__typed__.maturityDate),
  };
}
,
};

