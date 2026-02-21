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


exports.Redeem = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GetPriority = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Tranche = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:Templates.Tranche:Tranche',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:Templates.Tranche:Tranche',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, investor: damlTypes.Party.decoder, principal: damlTypes.Numeric(10).decoder, rate: damlTypes.Numeric(10).decoder, level: exports.TrancheLevel.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    investor: damlTypes.Party.encode(__typed__.investor),
    principal: damlTypes.Numeric(10).encode(__typed__.principal),
    rate: damlTypes.Numeric(10).encode(__typed__.rate),
    level: exports.TrancheLevel.encode(__typed__.level),
  };
}
,
  GetPriority: {
    template: function () { return exports.Tranche; },
    choiceName: 'GetPriority',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetPriority.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetPriority.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Int.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Int.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Tranche; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Redeem: {
    template: function () { return exports.Tranche; },
    choiceName: 'Redeem',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Redeem.decoder; }),
    argumentEncode: function (__typed__) { return exports.Redeem.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Tranche, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);



exports.TrancheLevel = {
  Senior: 'Senior',
  Mezz: 'Mezz',
  Junior: 'Junior',
  keys: ['Senior','Mezz','Junior',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.TrancheLevel.Senior), jtv.constant(exports.TrancheLevel.Mezz), jtv.constant(exports.TrancheLevel.Junior)); }),
  encode: function (__typed__) { return __typed__; },
};

