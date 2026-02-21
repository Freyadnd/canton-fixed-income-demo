// Generated from Templates/Insurance.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

import * as pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 from '@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0';

export declare type Trigger = {
};

export declare const Trigger:
  damlTypes.Serializable<Trigger> & {
  }
;


export declare type Insurance = {
  provider: damlTypes.Party;
  insured: damlTypes.Party;
  coverageAmount: damlTypes.Numeric;
  triggered: boolean;
};

export declare interface InsuranceInterface {
  Archive: damlTypes.Choice<Insurance, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Insurance, undefined>>;
  Trigger: damlTypes.Choice<Insurance, Trigger, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Insurance, undefined>>;
}
export declare const Insurance:
  damlTypes.Template<Insurance, undefined, '#fixed-income-daml:Templates.Insurance:Insurance'> &
  damlTypes.ToInterface<Insurance, never> &
  InsuranceInterface;

export declare namespace Insurance {
}


