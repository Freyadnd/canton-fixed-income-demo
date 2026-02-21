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


exports.Trigger = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Insurance = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:Templates.Insurance:Insurance',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:Templates.Insurance:Insurance',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider: damlTypes.Party.decoder, insured: damlTypes.Party.decoder, coverageAmount: damlTypes.Numeric(10).decoder, triggered: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    provider: damlTypes.Party.encode(__typed__.provider),
    insured: damlTypes.Party.encode(__typed__.insured),
    coverageAmount: damlTypes.Numeric(10).encode(__typed__.coverageAmount),
    triggered: damlTypes.Bool.encode(__typed__.triggered),
  };
}
,
  Archive: {
    template: function () { return exports.Insurance; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Trigger: {
    template: function () { return exports.Insurance; },
    choiceName: 'Trigger',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Trigger.decoder; }),
    argumentEncode: function (__typed__) { return exports.Trigger.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Insurance, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);

