// Generated from Templates/Tranche.daml
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


export declare type GetPriority = {
};

export declare const GetPriority:
  damlTypes.Serializable<GetPriority> & {
  }
;


export declare type Tranche = {
  issuer: damlTypes.Party;
  investor: damlTypes.Party;
  principal: damlTypes.Numeric;
  rate: damlTypes.Numeric;
  level: TrancheLevel;
};

export declare interface TrancheInterface {
  GetPriority: damlTypes.Choice<Tranche, GetPriority, damlTypes.Int, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Tranche, undefined>>;
  Archive: damlTypes.Choice<Tranche, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Tranche, undefined>>;
  Redeem: damlTypes.Choice<Tranche, Redeem, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Tranche, undefined>>;
}
export declare const Tranche:
  damlTypes.Template<Tranche, undefined, '#fixed-income-daml:Templates.Tranche:Tranche'> &
  damlTypes.ToInterface<Tranche, never> &
  TrancheInterface;

export declare namespace Tranche {
}



export declare type TrancheLevel =
  | 'Senior'
  | 'Mezz'
  | 'Junior'
;

export declare const TrancheLevel:
  damlTypes.Serializable<TrancheLevel> & {
  }
& { readonly keys: TrancheLevel[] } & { readonly [e in TrancheLevel]: e }
;

