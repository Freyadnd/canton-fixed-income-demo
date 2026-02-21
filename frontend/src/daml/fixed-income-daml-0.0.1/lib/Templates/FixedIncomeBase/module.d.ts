// Generated from Templates/FixedIncomeBase.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

import * as pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 from '@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0';

export declare type Redeem = {
};

export declare const Redeem:
  damlTypes.Serializable<Redeem> & {
  }
;


export declare type GetNAV = {
};

export declare const GetNAV:
  damlTypes.Serializable<GetNAV> & {
  }
;


export declare type FixedIncomeBase = {
  issuer: damlTypes.Party;
  investor: damlTypes.Party;
  principal: damlTypes.Numeric;
  rate: damlTypes.Numeric;
};

export declare interface FixedIncomeBaseInterface {
  GetNAV: damlTypes.Choice<FixedIncomeBase, GetNAV, damlTypes.Numeric, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FixedIncomeBase, undefined>>;
  Archive: damlTypes.Choice<FixedIncomeBase, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FixedIncomeBase, undefined>>;
  Redeem: damlTypes.Choice<FixedIncomeBase, Redeem, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FixedIncomeBase, undefined>>;
}
export declare const FixedIncomeBase:
  damlTypes.Template<FixedIncomeBase, undefined, '#fixed-income-daml:Templates.FixedIncomeBase:FixedIncomeBase'> &
  damlTypes.ToInterface<FixedIncomeBase, never> &
  FixedIncomeBaseInterface;

export declare namespace FixedIncomeBase {
}


