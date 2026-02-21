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


exports.AddIssuer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newIssuer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newIssuer: damlTypes.Party.encode(__typed__.newIssuer),
  };
}
,
};



exports.IssuerRegistry = damlTypes.assembleTemplate(
{
  templateId: '#fixed-income-daml:Templates.IssuerRegistry:IssuerRegistry',
  templateIdWithPackageId: '6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7:Templates.IssuerRegistry:IssuerRegistry',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, approvedIssuers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    approvedIssuers: damlTypes.List(damlTypes.Party).encode(__typed__.approvedIssuers),
  };
}
,
  Archive: {
    template: function () { return exports.IssuerRegistry; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AddIssuer: {
    template: function () { return exports.IssuerRegistry; },
    choiceName: 'AddIssuer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddIssuer.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddIssuer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.IssuerRegistry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.IssuerRegistry).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.IssuerRegistry, ['6d35d32533d1f30436f536433986058608a6456bab99644ea901bbcba2d93fa7', '#fixed-income-daml']);

