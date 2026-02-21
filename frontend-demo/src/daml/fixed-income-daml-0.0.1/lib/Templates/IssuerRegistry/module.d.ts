// Generated from Templates/IssuerRegistry.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

import * as pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 from '@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0';

export declare type AddIssuer = {
  newIssuer: damlTypes.Party;
};

export declare const AddIssuer:
  damlTypes.Serializable<AddIssuer> & {
  }
;


export declare type IssuerRegistry = {
  operator: damlTypes.Party;
  approvedIssuers: damlTypes.Party[];
};

export declare interface IssuerRegistryInterface {
  Archive: damlTypes.Choice<IssuerRegistry, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<IssuerRegistry, undefined>>;
  AddIssuer: damlTypes.Choice<IssuerRegistry, AddIssuer, damlTypes.ContractId<IssuerRegistry>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<IssuerRegistry, undefined>>;
}
export declare const IssuerRegistry:
  damlTypes.Template<IssuerRegistry, undefined, '#fixed-income-daml:Templates.IssuerRegistry:IssuerRegistry'> &
  damlTypes.ToInterface<IssuerRegistry, never> &
  IssuerRegistryInterface;

export declare namespace IssuerRegistry {
}


