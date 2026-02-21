// Generated from Templates/TermBond.daml
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


export declare type TermBond = {
  issuer: damlTypes.Party;
  investor: damlTypes.Party;
  principal: damlTypes.Numeric;
  rate: damlTypes.Numeric;
  issueDate: damlTypes.Time;
  maturity: damlTypes.Time;
};

export declare interface TermBondInterface {
  GetNAV: damlTypes.Choice<TermBond, GetNAV, damlTypes.Numeric, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TermBond, undefined>>;
  Archive: damlTypes.Choice<TermBond, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TermBond, undefined>>;
  Redeem: damlTypes.Choice<TermBond, Redeem, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TermBond, undefined>>;
}
export declare const TermBond:
  damlTypes.Template<TermBond, undefined, '#fixed-income-daml:Templates.TermBond:TermBond'> &
  damlTypes.ToInterface<TermBond, never> &
  TermBondInterface;

export declare namespace TermBond {
}


