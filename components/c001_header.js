class C001Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        let title_prefix = this.getAttribute("data-title_prefix");
let title = JSON.parse(this.getAttribute("data-title"));
let title_suffix = this.getAttribute("data-title_suffix");
let subTitle = this.getAttribute("data-sub-title");
let button = this.getAttribute("data-button");
let backgroundVideo = this.getAttribute("data-background-video");
let backgroundImage = this.getAttribute("data-background-image");
let image = this.getAttribute("data-image");
let imageAlt = this.getAttribute("data-image-alt");
        this.shadowRoot.innerHTML = ` 
      <style>
        
/**
 * @file c001_header.scss
 * @brief Header component styles
 * @version 1.0
 * @author Intralinks
 * @date 2021-09-01
 */
/* =============================================================================
   Default Variables - Bootstrap 5.3 (_variables-default.scss)
   ========================================================================== */
/* stylelint-disable */
:root {
  --font-family-barlow: "Barlow";
  --font-family-inter: "Inter";
  --typography-subheading-font-family: "Inter";
  --typography-subheading-font-size: 18px;
  --typography-subheading-font-weight: 700;
  --typography-subheading-line-height: 1.6;
  --typography-subheading-letter-spacing: -0.36px;
  --typography-subheading-paragraph-spacing: 20px;
  --typography-blockquote-font-family: "Inter";
  --typography-blockquote-font-size: 24px;
  --typography-blockquote-font-weight: 400;
  --typography-blockquote-line-height: 1.3;
  --typography-blockquote-letter-spacing: -0.48px;
  --typography-blockquote-paragraph-spacing: 20px;
  --typography-button-text-large-font-family: "Inter";
  --typography-button-text-large-font-size: 16px;
  --typography-button-text-large-font-weight: 600;
  --typography-button-text-large-line-height: 1.3;
  --typography-button-text-large-letter-spacing: -0.32px;
  --typography-button-text-large-paragraph-spacing: 20px;
  --typography-button-text-medium-font-family: "Barlow";
  --typography-button-text-medium-font-size: 16px;
  --typography-button-text-medium-font-weight: 600;
  --typography-button-text-medium-line-height: 1.2;
  --typography-button-text-medium-letter-spacing: -0.32px;
  --typography-button-text-medium-paragraph-spacing: 20px;
  --typography-button-text-small-font-family: "Inter";
  --typography-button-text-small-font-size: 12px;
  --typography-button-text-small-font-weight: 600;
  --typography-button-text-small-line-height: 1.3;
  --typography-button-text-small-letter-spacing: -0.24px;
  --typography-button-text-small-paragraph-spacing: 20px;
  --typography-form-placeholder-large-font-family: "Inter";
  --typography-form-placeholder-large-font-size: 18px;
  --typography-form-placeholder-large-font-weight: 400;
  --typography-form-placeholder-large-line-height: 1.1;
  --typography-form-placeholder-large-letter-spacing: 0px;
  --typography-form-placeholder-large-paragraph-spacing: 20px;
  --typography-form-placeholder-medium-font-family: "Inter";
  --typography-form-placeholder-medium-font-size: 16px;
  --typography-form-placeholder-medium-font-weight: 400;
  --typography-form-placeholder-medium-line-height: 1.0;
  --typography-form-placeholder-medium-letter-spacing: 0px;
  --typography-form-placeholder-medium-paragraph-spacing: 20px;
  --typography-form-placeholder-small-font-family: "Inter";
  --typography-form-placeholder-small-font-size: 12px;
  --typography-form-placeholder-small-font-weight: 400;
  --typography-form-placeholder-small-line-height: 1.7;
  --typography-form-placeholder-small-letter-spacing: 0px;
  --typography-form-placeholder-small-paragraph-spacing: 20px;
  --typography-xxl-base-font-family: "Inter";
  --typography-xxl-base-font-size: 22px;
  --typography-xxl-base-font-weight: 400;
  --typography-xxl-base-line-height: 1.6;
  --typography-xxl-base-letter-spacing: -0.44px;
  --typography-xxl-base-paragraph-spacing: 20px;
  --typography-xl-base-font-family: "Inter";
  --typography-xl-base-font-size: 20px;
  --typography-xl-base-font-weight: 400;
  --typography-xl-base-line-height: 1.6;
  --typography-xl-base-letter-spacing: -0.4px;
  --typography-xl-base-paragraph-spacing: 20px;
  --typography-lg-base-font-family: "Inter";
  --typography-lg-base-font-size: 18px;
  --typography-lg-base-font-weight: 400;
  --typography-lg-base-line-height: 1.6;
  --typography-lg-base-letter-spacing: -0.36px;
  --typography-lg-base-paragraph-spacing: 20px;
  --typography-md-base-font-family: "Inter";
  --typography-md-base-font-size: 16px;
  --typography-md-base-font-weight: 400;
  --typography-md-base-line-height: 1.6;
  --typography-md-base-letter-spacing: -0.32px;
  --typography-md-base-paragraph-spacing: 20px;
  --typography-sm-base-font-family: "Inter";
  --typography-sm-base-font-size: 14px;
  --typography-sm-base-font-weight: 400;
  --typography-sm-base-line-height: 1.6;
  --typography-sm-base-letter-spacing: -0.28px;
  --typography-sm-base-paragraph-spacing: 20px;
  --typography-xs-base-font-family: "Inter";
  --typography-xs-base-font-size: 12px;
  --typography-xs-base-font-weight: 400;
  --typography-xs-base-line-height: 1.6;
  --typography-xs-base-letter-spacing: -0.24px;
  --typography-xs-base-paragraph-spacing: 20px;
  --typography-xxs-base-font-family: "Inter";
  --typography-xxs-base-font-size: 10px;
  --typography-xxs-base-font-weight: 400;
  --typography-xxs-base-line-height: 1.6;
  --typography-xxs-base-letter-spacing: -0.2px;
  --typography-xxs-base-paragraph-spacing: 20px;
  --typography-xxl-strong-font-family: "Inter";
  --typography-xxl-strong-font-size: 22px;
  --typography-xxl-strong-font-weight: 700;
  --typography-xxl-strong-line-height: 1.6;
  --typography-xxl-strong-letter-spacing: -0.44px;
  --typography-xxl-strong-paragraph-spacing: 20px;
  --typography-xl-strong-font-family: "Inter";
  --typography-xl-strong-font-size: 20px;
  --typography-xl-strong-font-weight: 700;
  --typography-xl-strong-line-height: 1.6;
  --typography-xl-strong-letter-spacing: -0.4px;
  --typography-xl-strong-paragraph-spacing: 20px;
  --typography-lg-strong-font-family: "Inter";
  --typography-lg-strong-font-size: 18px;
  --typography-lg-strong-font-weight: 700;
  --typography-lg-strong-line-height: 1.6;
  --typography-lg-strong-letter-spacing: -0.36px;
  --typography-lg-strong-paragraph-spacing: 20px;
  --typography-md-strong-font-family: "Inter";
  --typography-md-strong-font-size: 16px;
  --typography-md-strong-font-weight: 700;
  --typography-md-strong-line-height: 1.6;
  --typography-md-strong-letter-spacing: -0.32px;
  --typography-md-strong-paragraph-spacing: 20px;
  --typography-sm-strong-font-family: "Inter";
  --typography-sm-strong-font-size: 14px;
  --typography-sm-strong-font-weight: 700;
  --typography-sm-strong-line-height: 1.6;
  --typography-sm-strong-letter-spacing: -0.28px;
  --typography-sm-strong-paragraph-spacing: 20px;
  --typography-xs-strong-font-family: "Inter";
  --typography-xs-strong-font-size: 12px;
  --typography-xs-strong-font-weight: 600;
  --typography-xs-strong-line-height: 1.6;
  --typography-xs-strong-letter-spacing: -0.24px;
  --typography-xs-strong-paragraph-spacing: 20px;
  --typography-xxs-strong-font-family: "Inter";
  --typography-xxs-strong-font-size: 10px;
  --typography-xxs-strong-font-weight: 700;
  --typography-xxs-strong-line-height: 1.6;
  --typography-xxs-strong-letter-spacing: -0.2px;
  --typography-xxs-strong-paragraph-spacing: 20px;
  --typography-form-label-font-family: "Inter";
  --typography-form-label-font-size: 12px;
  --typography-form-label-font-weight: 400;
  --typography-form-label-line-height: 1.6;
  --typography-form-label-letter-spacing: -0.24px;
  --typography-form-label-paragraph-spacing: 20px;
  --typography-form-help-font-family: "Inter";
  --typography-form-help-font-size: 12px;
  --typography-form-help-font-weight: 400;
  --typography-form-help-line-height: 1.6;
  --typography-form-help-letter-spacing: -0.24px;
  --typography-form-help-paragraph-spacing: 20px;
  --typography-title-1-font-family: "Barlow";
  --typography-title-1-font-size: 76px;
  --typography-title-1-font-weight: 400;
  --typography-title-1-line-height: 1.0;
  --typography-title-1-letter-spacing: -3.8000000000000003px;
  --typography-title-1-paragraph-spacing: 20px;
  --typography-title-2-font-family: "Barlow";
  --typography-title-2-font-size: 60px;
  --typography-title-2-font-weight: 500;
  --typography-title-2-line-height: 1.1;
  --typography-title-2-letter-spacing: -1.7999999999999998px;
  --typography-title-2-paragraph-spacing: 20px;
  --typography-title-3-font-family: "Barlow";
  --typography-title-3-font-size: 50px;
  --typography-title-3-font-weight: 500;
  --typography-title-3-line-height: 1.1;
  --typography-title-3-letter-spacing: -2.5px;
  --typography-title-3-paragraph-spacing: 20px;
  --typography-title-4-font-family: "Barlow";
  --typography-title-4-font-size: 42px;
  --typography-title-4-font-weight: 500;
  --typography-title-4-line-height: 1.1;
  --typography-title-4-letter-spacing: -1.26px;
  --typography-title-4-paragraph-spacing: 20px;
  --typography-title-5-font-family: "Barlow";
  --typography-title-5-font-size: 36px;
  --typography-title-5-font-weight: 500;
  --typography-title-5-line-height: 1.1;
  --typography-title-5-letter-spacing: -1.08px;
  --typography-title-5-paragraph-spacing: 20px;
  --typography-title-6-font-family: "Barlow";
  --typography-title-6-font-size: 30px;
  --typography-title-6-font-weight: 400;
  --typography-title-6-line-height: 1.2;
  --typography-title-6-letter-spacing: -0.6px;
  --typography-title-6-paragraph-spacing: 20px;
  --typography-subtitle-font-family: "Inter";
  --typography-subtitle-font-size: 20px;
  --typography-subtitle-font-weight: 400;
  --typography-subtitle-line-height: 1.6;
  --typography-subtitle-letter-spacing: 0px;
  --typography-subtitle-paragraph-spacing: 20px;
  --typography-body-big-font-family: "Inter";
  --typography-body-big-font-size: 18px;
  --typography-body-big-font-weight: 400;
  --typography-body-big-line-height: 1.6;
  --typography-body-big-letter-spacing: 0px;
  --typography-body-big-paragraph-spacing: 20px;
  --typography-body-font-family: "Inter";
  --typography-body-font-size: 16px;
  --typography-body-font-weight: 400;
  --typography-body-line-height: 1.6;
  --typography-body-letter-spacing: 0px;
  --typography-body-paragraph-spacing: 20px;
  --typography-body-small-font-family: "Inter";
  --typography-body-small-font-size: 14px;
  --typography-body-small-font-weight: 400;
  --typography-body-small-line-height: 1.6;
  --typography-body-small-letter-spacing: 0px;
  --typography-body-small-paragraph-spacing: 20px;
  --typography-primative-primary-font-family: "Barlow";
  --typography-primative-primary-font-size: 12px;
  --typography-primative-primary-font-weight: 400;
  --typography-primative-primary-line-height: 1.2;
  --typography-primative-primary-letter-spacing: 0px;
  --typography-primative-primary-paragraph-spacing: 20px;
  --typography-primative-secondary-font-family: "Inter";
  --typography-primative-secondary-font-size: 12px;
  --typography-primative-secondary-font-weight: 400;
  --typography-primative-secondary-line-height: 1.2;
  --typography-primative-secondary-letter-spacing: 0px;
  --typography-primative-secondary-paragraph-spacing: 20px;
}

:root {
  --effect-shadow-base-1: 0px 5px 20px rgba(100, 111, 121, .22);
  --effect-shadow-base-3: 0px 20px 60px rgba(0, 0, 0, .1);
  --effect-shadow-base-3-mobile: 0px 6px 23px rgba(0, 0, 0, .1);
  --effect-shadow-base-100: 0px 2px 4px rgba(0, 0, 0, .08);
  --effect-shadow-base-300: 0px 3px 6px rgba(0, 0, 0, .08);
  --effect-shadow-base-500: 0px 6px 12px rgba(0, 0, 0, .08);
  --effect-shadow-base-700: 0px 12px 24px rgba(0, 0, 0, .08);
  --effect-shadow-base-900: 0px 24px 42px rgba(0, 0, 0, .08);
  --effect-test-category-style: 0px 4px 4px rgba(0, 0, 0, .25);
  --effect-effects-new-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
  --effect-shadow-multilayer: 0px 20px 24px rgba(0, 0, 0, .1), 0px 4px 4px rgba(0, 0, 0, .25), 0px 3px 2px rgba(0, 0, 0, .25) inset;
  --effect-shadow-box-1: 0px 20px 60px rgba(0, 0, 0, .25);
  --effect-shadow-box-2: 0px 0px 15px rgba(0, 0, 0, .25);
}

:root {
  --color-primary-ssc-blue: #0077c8;
  --color-secondary-midnight: #0f0a30;
  --color-extra-info: #307abf;
  --color-extra-success: #198754;
  --color-extra-info-darker: #286aa7;
  --color-extra-info-lighter: #4a98e0;
  --color-extra-success-darker: #167b4c;
  --color-extra-success-lighter: #2fa870;
  --color-extra-warning: #ffc107;
  --color-extra-warning-darker: #e0aa09;
  --color-extra-warning-lighter: #ffce39;
  --color-extra-danger: #dc3545;
  --color-extra-danger-darker: #c32b3a;
  --color-extra-danger-lighter: #f35d6c;
  --color-text-hard: #000000;
  --color-text-base: rgba(0, 0, 0, .8);
  --color-text-soft: #555555;
  --color-text-muted: #777777;
  --color-text-hard-invert: #ffffff;
  --color-text-base-invert: rgba(255, 255, 255, .85);
  --color-text-soft-invert: rgba(255, 255, 255, .65);
  --color-text-muted-invert: rgba(255, 255, 255, .45);
  --color-neutral-argent: rgba(191, 191, 191, .5);
  --color-neutral-argent-1: rgba(15, 10, 48, .8);
  --color-neutral-argent-2: rgba(231, 237, 245, 0);
  --color-neutral-argent-4: rgba(229, 241, 249, .5);
  --color-neutral-grey-body: #262626;
  --color-neutral-white: #ffffff;
  --color-neutral-gray-100: #f8f8f8;
  --color-border-base: #e8e8e8;
  --color-border-dark: #b3b3b3;
  --color-border-darker: #929292;
  --color-border-darkest: rgba(0, 0, 0, .6);
  --color-border-invert: rgba(200, 200, 200, .2);
  --color-border-light: rgba(191, 191, 191, .5);
  --color-border-lighter: rgba(255, 255, 255, .4);
  --color-border-lightest: rgba(255, 255, 255, .75);
  --color-neutral-gray-200: #e5e5e5;
  --color-neutral-gray-25: #bfbfbf;
  --color-neutral-gray-26: #f5f5f5;
  --color-neutral-gray-27: #e3e9f1;
  --color-neutral-gray-300: #cccccc;
  --color-neutral-gray-400: #aaaaaa;
  --color-neutral-gray-45: #8c8c8c;
  --color-neutral-gray-500: #888888;
  --color-neutral-gray-600: #6e6e6e;
  --color-neutral-gray-65: #595959;
  --color-neutral-gray-700: #555555;
  --color-neutral-gray-800: #333333;
  --color-neutral-gray-85: #262626;
  --color-neutral-gray-900: #191919;
  --color-neutral-black: #000000;
  --color-neutral-pure-black-1: rgba(0, 0, 0, .15);
  --color-neutral-pure-black-2: rgba(0, 0, 0, .2);
  --color-neutral-pure-black-3: rgba(0, 0, 0, .35);
  --color-neutral-pure-black-4: rgba(0, 0, 0, .1);
  --color-neutral-pure-black-5: rgba(0, 0, 0, .1);
  --color-neutral-pure-black-8: rgba(0, 0, 0, .08);
  --color-neutral-transparent: rgba(0, 0, 0, 0);
  --color-primary-tangerine: #f5b407;
  --color-secondary-navy: #111e65;
  --color-secondary-blue: #0b4d99;
  --color-secondary-teal: #00677f;
  --color-secondary-linear: linear-gradient(85.72deg, rgba(22, 191, 202) 0%, rgba(0, 115, 230) 100%);
  --color-secondary-link: #0077c8;
  --color-secondary-hover: #0b4d99;
  --color-secondary-background-blue: #e7edf5;
  --color-secondary-casper: #a9b3b6;
  --color-neutral-mid-gray: #646f79;
  --color-neutral-mid-gray-1: #4f5358;
  --color-neutral-pure-white-0: rgba(255, 255, 255, 0);
  --color-neutral-pure-white-8: rgba(255, 255, 255, .8);
  --color-neutral-pure-white-7: rgba(255, 255, 255, .7);
  --color-neutral-pure-white-9: rgba(255, 255, 255, .65);
  --color-neutral-pure-white-10: rgba(255, 255, 255, .6);
  --color-neutral-argent-3: rgba(231, 237, 245, .3);
  --color-neutral-argent-5: rgba(191, 191, 191, .2);
  --color-neutral-argent-6: rgba(100, 111, 121, .2);
  --color-neutral-argent-7: rgba(191, 191, 191, .8);
  --color-secondary-dark-purple: #301934;
  --color-neutral-background-2: #e9eff6;
  --color-neutral-border: #d9d9d9;
  --color-neutral-gray-45-2: rgba(140, 140, 140, .2);
}

.alert {
  /* Alert, type: primary */
  --alert-primary-background: #d3e7fa;
  --alert-primary-border-width: 1px;
  --alert-primary-border-radius: 6px;
  --alert-primary-border-color: #0077c8;
  --alert-primary-border-style: solid;
  --alert-primary-padding-y: 18px;
  --alert-primary-padding-x: 16px;
  --alert-primary-padding-top: 18px;
  --alert-primary-padding-right: 16px;
  --alert-primary-padding-bottom: 18px;
  --alert-primary-padding-left: 16px;
  --alert-primary-padding-start: 16px;
  --alert-primary-padding-end: 16px;
  --alert-primary-spacing: 12px;
  --alert-primary-box-shadow: none;
  --alert-primary-body-padding-y: 0px;
  --alert-primary-body-padding-x: 0px;
  --alert-primary-body-padding-top: 0px;
  --alert-primary-body-padding-right: 0px;
  --alert-primary-body-padding-bottom: 0px;
  --alert-primary-body-padding-left: 0px;
  --alert-primary-body-padding-start: 0px;
  --alert-primary-body-padding-end: 0px;
  --alert-primary-body-spacing: 12px;
  --alert-primary-title-padding-y: 0px;
  --alert-primary-title-padding-x: 0px;
  --alert-primary-title-padding-top: 0px;
  --alert-primary-title-padding-right: 0px;
  --alert-primary-title-padding-bottom: 0px;
  --alert-primary-title-padding-left: 0px;
  --alert-primary-title-padding-start: 0px;
  --alert-primary-title-padding-end: 0px;
  --alert-primary-title-spacing: 0px;
  --alert-primary-title-font-family: "Inter";
  --alert-primary-title-font-size: 14px;
  --alert-primary-title-font-weight: 700;
  --alert-primary-title-line-height: 1.6;
  --alert-primary-title-letter-spacing: -.28px;
  --alert-primary-title-text-align: left;
  --alert-primary-title-text-decoration: none;
  --alert-primary-title-text-transform: none;
  --alert-primary-title-color: #ffffff;
  --alert-primary-text-padding-y: 0px;
  --alert-primary-text-padding-x: 0px;
  --alert-primary-text-padding-top: 0px;
  --alert-primary-text-padding-right: 0px;
  --alert-primary-text-padding-bottom: 0px;
  --alert-primary-text-padding-left: 0px;
  --alert-primary-text-padding-start: 0px;
  --alert-primary-text-padding-end: 0px;
  --alert-primary-text-spacing: 0px;
  --alert-primary-text-font-family: "Inter";
  --alert-primary-text-font-size: 14px;
  --alert-primary-text-font-weight: 400;
  --alert-primary-text-line-height: 1.6;
  --alert-primary-text-letter-spacing: -.28px;
  --alert-primary-text-text-align: left;
  --alert-primary-text-text-decoration: none;
  --alert-primary-text-text-transform: none;
  --alert-primary-text-color: #0f69c1;
  --alert-primary-actions-padding-y: 0px;
  --alert-primary-actions-padding-x: 0px;
  --alert-primary-actions-padding-top: 0px;
  --alert-primary-actions-padding-right: 0px;
  --alert-primary-actions-padding-bottom: 0px;
  --alert-primary-actions-padding-left: 0px;
  --alert-primary-actions-padding-start: 0px;
  --alert-primary-actions-padding-end: 0px;
  --alert-primary-actions-spacing: 10px;
  --alert-primary-actions-font-family: "Inter";
  --alert-primary-actions-font-size: 12px;
  --alert-primary-actions-font-weight: 600;
  --alert-primary-actions-line-height: 1.333;
  --alert-primary-actions-letter-spacing: -.24px;
  --alert-primary-actions-text-align: left;
  --alert-primary-actions-text-decoration: none;
  --alert-primary-actions-text-transform: none;
  --alert-primary-actions-color: #ffffff;
  /* Alert, type: secondary */
  --alert-secondary-background: #ded7ff;
  --alert-secondary-border-width: 1px;
  --alert-secondary-border-radius: 6px;
  --alert-secondary-border-color: #7158dd;
  --alert-secondary-border-style: solid;
  --alert-secondary-padding-y: 18px;
  --alert-secondary-padding-x: 16px;
  --alert-secondary-padding-top: 18px;
  --alert-secondary-padding-right: 16px;
  --alert-secondary-padding-bottom: 18px;
  --alert-secondary-padding-left: 16px;
  --alert-secondary-padding-start: 16px;
  --alert-secondary-padding-end: 16px;
  --alert-secondary-spacing: 12px;
  --alert-secondary-box-shadow: none;
  --alert-secondary-body-padding-y: 0px;
  --alert-secondary-body-padding-x: 0px;
  --alert-secondary-body-padding-top: 0px;
  --alert-secondary-body-padding-right: 0px;
  --alert-secondary-body-padding-bottom: 0px;
  --alert-secondary-body-padding-left: 0px;
  --alert-secondary-body-padding-start: 0px;
  --alert-secondary-body-padding-end: 0px;
  --alert-secondary-body-spacing: 12px;
  --alert-secondary-title-padding-y: 0px;
  --alert-secondary-title-padding-x: 0px;
  --alert-secondary-title-padding-top: 0px;
  --alert-secondary-title-padding-right: 0px;
  --alert-secondary-title-padding-bottom: 0px;
  --alert-secondary-title-padding-left: 0px;
  --alert-secondary-title-padding-start: 0px;
  --alert-secondary-title-padding-end: 0px;
  --alert-secondary-title-spacing: 0px;
  --alert-secondary-title-font-family: "Inter";
  --alert-secondary-title-font-size: 14px;
  --alert-secondary-title-font-weight: 700;
  --alert-secondary-title-line-height: 1.6;
  --alert-secondary-title-letter-spacing: -.28px;
  --alert-secondary-title-text-align: left;
  --alert-secondary-title-text-decoration: none;
  --alert-secondary-title-text-transform: none;
  --alert-secondary-title-color: #ffffff;
  --alert-secondary-text-padding-y: 0px;
  --alert-secondary-text-padding-x: 0px;
  --alert-secondary-text-padding-top: 0px;
  --alert-secondary-text-padding-right: 0px;
  --alert-secondary-text-padding-bottom: 0px;
  --alert-secondary-text-padding-left: 0px;
  --alert-secondary-text-padding-start: 0px;
  --alert-secondary-text-padding-end: 0px;
  --alert-secondary-text-spacing: 0px;
  --alert-secondary-text-font-family: "Inter";
  --alert-secondary-text-font-size: 14px;
  --alert-secondary-text-font-weight: 400;
  --alert-secondary-text-line-height: 1.6;
  --alert-secondary-text-letter-spacing: -.28px;
  --alert-secondary-text-text-align: left;
  --alert-secondary-text-text-decoration: none;
  --alert-secondary-text-text-transform: none;
  --alert-secondary-text-color: #3b2794;
  --alert-secondary-actions-padding-y: 0px;
  --alert-secondary-actions-padding-x: 0px;
  --alert-secondary-actions-padding-top: 0px;
  --alert-secondary-actions-padding-right: 0px;
  --alert-secondary-actions-padding-bottom: 0px;
  --alert-secondary-actions-padding-left: 0px;
  --alert-secondary-actions-padding-start: 0px;
  --alert-secondary-actions-padding-end: 0px;
  --alert-secondary-actions-spacing: 10px;
  --alert-secondary-actions-font-family: "Inter";
  --alert-secondary-actions-font-size: 12px;
  --alert-secondary-actions-font-weight: 600;
  --alert-secondary-actions-line-height: 1.333;
  --alert-secondary-actions-letter-spacing: -.24px;
  --alert-secondary-actions-text-align: left;
  --alert-secondary-actions-text-decoration: none;
  --alert-secondary-actions-text-transform: none;
  --alert-secondary-actions-color: #ffffff;
  /* Alert, type: dark */
  --alert-dark-background: #191919;
  --alert-dark-border-width: 1px;
  --alert-dark-border-radius: 6px;
  --alert-dark-border-color: transparent;
  --alert-dark-border-style: solid;
  --alert-dark-padding-y: 18px;
  --alert-dark-padding-x: 16px;
  --alert-dark-padding-top: 18px;
  --alert-dark-padding-right: 16px;
  --alert-dark-padding-bottom: 18px;
  --alert-dark-padding-left: 16px;
  --alert-dark-padding-start: 16px;
  --alert-dark-padding-end: 16px;
  --alert-dark-spacing: 12px;
  --alert-dark-box-shadow: none;
  --alert-dark-body-padding-y: 0px;
  --alert-dark-body-padding-x: 0px;
  --alert-dark-body-padding-top: 0px;
  --alert-dark-body-padding-right: 0px;
  --alert-dark-body-padding-bottom: 0px;
  --alert-dark-body-padding-left: 0px;
  --alert-dark-body-padding-start: 0px;
  --alert-dark-body-padding-end: 0px;
  --alert-dark-body-spacing: 12px;
  --alert-dark-title-padding-y: 0px;
  --alert-dark-title-padding-x: 0px;
  --alert-dark-title-padding-top: 0px;
  --alert-dark-title-padding-right: 0px;
  --alert-dark-title-padding-bottom: 0px;
  --alert-dark-title-padding-left: 0px;
  --alert-dark-title-padding-start: 0px;
  --alert-dark-title-padding-end: 0px;
  --alert-dark-title-spacing: 0px;
  --alert-dark-title-font-family: "Inter";
  --alert-dark-title-font-size: 14px;
  --alert-dark-title-font-weight: 700;
  --alert-dark-title-line-height: 1.6;
  --alert-dark-title-letter-spacing: -.28px;
  --alert-dark-title-text-align: left;
  --alert-dark-title-text-decoration: none;
  --alert-dark-title-text-transform: none;
  --alert-dark-title-color: #ffffff;
  --alert-dark-text-padding-y: 0px;
  --alert-dark-text-padding-x: 0px;
  --alert-dark-text-padding-top: 0px;
  --alert-dark-text-padding-right: 0px;
  --alert-dark-text-padding-bottom: 0px;
  --alert-dark-text-padding-left: 0px;
  --alert-dark-text-padding-start: 0px;
  --alert-dark-text-padding-end: 0px;
  --alert-dark-text-spacing: 0px;
  --alert-dark-text-font-family: "Inter";
  --alert-dark-text-font-size: 14px;
  --alert-dark-text-font-weight: 400;
  --alert-dark-text-line-height: 1.6;
  --alert-dark-text-letter-spacing: -.28px;
  --alert-dark-text-text-align: left;
  --alert-dark-text-text-decoration: none;
  --alert-dark-text-text-transform: none;
  --alert-dark-text-color: rgba(255, 255, 255, .85);
  --alert-dark-actions-padding-y: 0px;
  --alert-dark-actions-padding-x: 0px;
  --alert-dark-actions-padding-top: 0px;
  --alert-dark-actions-padding-right: 0px;
  --alert-dark-actions-padding-bottom: 0px;
  --alert-dark-actions-padding-left: 0px;
  --alert-dark-actions-padding-start: 0px;
  --alert-dark-actions-padding-end: 0px;
  --alert-dark-actions-spacing: 10px;
  --alert-dark-actions-font-family: "Inter";
  --alert-dark-actions-font-size: 12px;
  --alert-dark-actions-font-weight: 600;
  --alert-dark-actions-line-height: 1.333;
  --alert-dark-actions-letter-spacing: -.24px;
  --alert-dark-actions-text-align: left;
  --alert-dark-actions-text-decoration: none;
  --alert-dark-actions-text-transform: none;
  --alert-dark-actions-color: #ffffff;
  /* Alert, type: light */
  --alert-light-background: #f8f8f8;
  --alert-light-border-width: 1px;
  --alert-light-border-radius: 6px;
  --alert-light-border-color: transparent;
  --alert-light-border-style: solid;
  --alert-light-padding-y: 18px;
  --alert-light-padding-x: 16px;
  --alert-light-padding-top: 18px;
  --alert-light-padding-right: 16px;
  --alert-light-padding-bottom: 18px;
  --alert-light-padding-left: 16px;
  --alert-light-padding-start: 16px;
  --alert-light-padding-end: 16px;
  --alert-light-spacing: 12px;
  --alert-light-box-shadow: none;
  --alert-light-body-padding-y: 0px;
  --alert-light-body-padding-x: 0px;
  --alert-light-body-padding-top: 0px;
  --alert-light-body-padding-right: 0px;
  --alert-light-body-padding-bottom: 0px;
  --alert-light-body-padding-left: 0px;
  --alert-light-body-padding-start: 0px;
  --alert-light-body-padding-end: 0px;
  --alert-light-body-spacing: 12px;
  --alert-light-title-padding-y: 0px;
  --alert-light-title-padding-x: 0px;
  --alert-light-title-padding-top: 0px;
  --alert-light-title-padding-right: 0px;
  --alert-light-title-padding-bottom: 0px;
  --alert-light-title-padding-left: 0px;
  --alert-light-title-padding-start: 0px;
  --alert-light-title-padding-end: 0px;
  --alert-light-title-spacing: 0px;
  --alert-light-title-font-family: "Inter";
  --alert-light-title-font-size: 14px;
  --alert-light-title-font-weight: 700;
  --alert-light-title-line-height: 1.6;
  --alert-light-title-letter-spacing: -.28px;
  --alert-light-title-text-align: left;
  --alert-light-title-text-decoration: none;
  --alert-light-title-text-transform: none;
  --alert-light-title-color: #000000;
  --alert-light-text-padding-y: 0px;
  --alert-light-text-padding-x: 0px;
  --alert-light-text-padding-top: 0px;
  --alert-light-text-padding-right: 0px;
  --alert-light-text-padding-bottom: 0px;
  --alert-light-text-padding-left: 0px;
  --alert-light-text-padding-start: 0px;
  --alert-light-text-padding-end: 0px;
  --alert-light-text-spacing: 0px;
  --alert-light-text-font-family: "Inter";
  --alert-light-text-font-size: 14px;
  --alert-light-text-font-weight: 400;
  --alert-light-text-line-height: 1.6;
  --alert-light-text-letter-spacing: -.28px;
  --alert-light-text-text-align: left;
  --alert-light-text-text-decoration: none;
  --alert-light-text-text-transform: none;
  --alert-light-text-color: rgba(0, 0, 0, .8);
  --alert-light-actions-padding-y: 0px;
  --alert-light-actions-padding-x: 0px;
  --alert-light-actions-padding-top: 0px;
  --alert-light-actions-padding-right: 0px;
  --alert-light-actions-padding-bottom: 0px;
  --alert-light-actions-padding-left: 0px;
  --alert-light-actions-padding-start: 0px;
  --alert-light-actions-padding-end: 0px;
  --alert-light-actions-spacing: 10px;
  --alert-light-actions-font-family: "Inter";
  --alert-light-actions-font-size: 12px;
  --alert-light-actions-font-weight: 600;
  --alert-light-actions-line-height: 1.333;
  --alert-light-actions-letter-spacing: -.24px;
  --alert-light-actions-text-align: left;
  --alert-light-actions-text-decoration: none;
  --alert-light-actions-text-transform: none;
  --alert-light-actions-color: #000000;
  /* Alert, type: info */
  --alert-info-background: #307abf;
  --alert-info-border-width: 1px;
  --alert-info-border-radius: 6px;
  --alert-info-border-color: transparent;
  --alert-info-border-style: solid;
  --alert-info-padding-y: 18px;
  --alert-info-padding-x: 16px;
  --alert-info-padding-top: 18px;
  --alert-info-padding-right: 16px;
  --alert-info-padding-bottom: 18px;
  --alert-info-padding-left: 16px;
  --alert-info-padding-start: 16px;
  --alert-info-padding-end: 16px;
  --alert-info-spacing: 12px;
  --alert-info-box-shadow: none;
  --alert-info-body-padding-y: 0px;
  --alert-info-body-padding-x: 0px;
  --alert-info-body-padding-top: 0px;
  --alert-info-body-padding-right: 0px;
  --alert-info-body-padding-bottom: 0px;
  --alert-info-body-padding-left: 0px;
  --alert-info-body-padding-start: 0px;
  --alert-info-body-padding-end: 0px;
  --alert-info-body-spacing: 12px;
  --alert-info-title-padding-y: 0px;
  --alert-info-title-padding-x: 0px;
  --alert-info-title-padding-top: 0px;
  --alert-info-title-padding-right: 0px;
  --alert-info-title-padding-bottom: 0px;
  --alert-info-title-padding-left: 0px;
  --alert-info-title-padding-start: 0px;
  --alert-info-title-padding-end: 0px;
  --alert-info-title-spacing: 0px;
  --alert-info-title-font-family: "Inter";
  --alert-info-title-font-size: 14px;
  --alert-info-title-font-weight: 700;
  --alert-info-title-line-height: 1.6;
  --alert-info-title-letter-spacing: -.28px;
  --alert-info-title-text-align: left;
  --alert-info-title-text-decoration: none;
  --alert-info-title-text-transform: none;
  --alert-info-title-color: #ffffff;
  --alert-info-text-padding-y: 0px;
  --alert-info-text-padding-x: 0px;
  --alert-info-text-padding-top: 0px;
  --alert-info-text-padding-right: 0px;
  --alert-info-text-padding-bottom: 0px;
  --alert-info-text-padding-left: 0px;
  --alert-info-text-padding-start: 0px;
  --alert-info-text-padding-end: 0px;
  --alert-info-text-spacing: 0px;
  --alert-info-text-font-family: "Inter";
  --alert-info-text-font-size: 14px;
  --alert-info-text-font-weight: 400;
  --alert-info-text-line-height: 1.6;
  --alert-info-text-letter-spacing: -.28px;
  --alert-info-text-text-align: left;
  --alert-info-text-text-decoration: none;
  --alert-info-text-text-transform: none;
  --alert-info-text-color: rgba(255, 255, 255, .85);
  --alert-info-actions-padding-y: 0px;
  --alert-info-actions-padding-x: 0px;
  --alert-info-actions-padding-top: 0px;
  --alert-info-actions-padding-right: 0px;
  --alert-info-actions-padding-bottom: 0px;
  --alert-info-actions-padding-left: 0px;
  --alert-info-actions-padding-start: 0px;
  --alert-info-actions-padding-end: 0px;
  --alert-info-actions-spacing: 10px;
  --alert-info-actions-font-family: "Inter";
  --alert-info-actions-font-size: 12px;
  --alert-info-actions-font-weight: 600;
  --alert-info-actions-line-height: 1.333;
  --alert-info-actions-letter-spacing: -.24px;
  --alert-info-actions-text-align: left;
  --alert-info-actions-text-decoration: none;
  --alert-info-actions-text-transform: none;
  --alert-info-actions-color: #ffffff;
  /* Alert, type: success */
  --alert-success-background: #198754;
  --alert-success-border-width: 1px;
  --alert-success-border-radius: 6px;
  --alert-success-border-color: transparent;
  --alert-success-border-style: solid;
  --alert-success-padding-y: 18px;
  --alert-success-padding-x: 16px;
  --alert-success-padding-top: 18px;
  --alert-success-padding-right: 16px;
  --alert-success-padding-bottom: 18px;
  --alert-success-padding-left: 16px;
  --alert-success-padding-start: 16px;
  --alert-success-padding-end: 16px;
  --alert-success-spacing: 12px;
  --alert-success-box-shadow: none;
  --alert-success-body-padding-y: 0px;
  --alert-success-body-padding-x: 0px;
  --alert-success-body-padding-top: 0px;
  --alert-success-body-padding-right: 0px;
  --alert-success-body-padding-bottom: 0px;
  --alert-success-body-padding-left: 0px;
  --alert-success-body-padding-start: 0px;
  --alert-success-body-padding-end: 0px;
  --alert-success-body-spacing: 12px;
  --alert-success-title-padding-y: 0px;
  --alert-success-title-padding-x: 0px;
  --alert-success-title-padding-top: 0px;
  --alert-success-title-padding-right: 0px;
  --alert-success-title-padding-bottom: 0px;
  --alert-success-title-padding-left: 0px;
  --alert-success-title-padding-start: 0px;
  --alert-success-title-padding-end: 0px;
  --alert-success-title-spacing: 0px;
  --alert-success-title-font-family: "Inter";
  --alert-success-title-font-size: 14px;
  --alert-success-title-font-weight: 700;
  --alert-success-title-line-height: 1.6;
  --alert-success-title-letter-spacing: -.28px;
  --alert-success-title-text-align: left;
  --alert-success-title-text-decoration: none;
  --alert-success-title-text-transform: none;
  --alert-success-title-color: #ffffff;
  --alert-success-text-padding-y: 0px;
  --alert-success-text-padding-x: 0px;
  --alert-success-text-padding-top: 0px;
  --alert-success-text-padding-right: 0px;
  --alert-success-text-padding-bottom: 0px;
  --alert-success-text-padding-left: 0px;
  --alert-success-text-padding-start: 0px;
  --alert-success-text-padding-end: 0px;
  --alert-success-text-spacing: 0px;
  --alert-success-text-font-family: "Inter";
  --alert-success-text-font-size: 14px;
  --alert-success-text-font-weight: 400;
  --alert-success-text-line-height: 1.6;
  --alert-success-text-letter-spacing: -.28px;
  --alert-success-text-text-align: left;
  --alert-success-text-text-decoration: none;
  --alert-success-text-text-transform: none;
  --alert-success-text-color: rgba(255, 255, 255, .85);
  --alert-success-actions-padding-y: 0px;
  --alert-success-actions-padding-x: 0px;
  --alert-success-actions-padding-top: 0px;
  --alert-success-actions-padding-right: 0px;
  --alert-success-actions-padding-bottom: 0px;
  --alert-success-actions-padding-left: 0px;
  --alert-success-actions-padding-start: 0px;
  --alert-success-actions-padding-end: 0px;
  --alert-success-actions-spacing: 10px;
  --alert-success-actions-font-family: "Inter";
  --alert-success-actions-font-size: 12px;
  --alert-success-actions-font-weight: 600;
  --alert-success-actions-line-height: 1.333;
  --alert-success-actions-letter-spacing: -.24px;
  --alert-success-actions-text-align: left;
  --alert-success-actions-text-decoration: none;
  --alert-success-actions-text-transform: none;
  --alert-success-actions-color: #ffffff;
  /* Alert, type: warning */
  --alert-warning-background: #ffc107;
  --alert-warning-border-width: 1px;
  --alert-warning-border-radius: 6px;
  --alert-warning-border-color: transparent;
  --alert-warning-border-style: solid;
  --alert-warning-padding-y: 18px;
  --alert-warning-padding-x: 16px;
  --alert-warning-padding-top: 18px;
  --alert-warning-padding-right: 16px;
  --alert-warning-padding-bottom: 18px;
  --alert-warning-padding-left: 16px;
  --alert-warning-padding-start: 16px;
  --alert-warning-padding-end: 16px;
  --alert-warning-spacing: 12px;
  --alert-warning-box-shadow: none;
  --alert-warning-body-padding-y: 0px;
  --alert-warning-body-padding-x: 0px;
  --alert-warning-body-padding-top: 0px;
  --alert-warning-body-padding-right: 0px;
  --alert-warning-body-padding-bottom: 0px;
  --alert-warning-body-padding-left: 0px;
  --alert-warning-body-padding-start: 0px;
  --alert-warning-body-padding-end: 0px;
  --alert-warning-body-spacing: 12px;
  --alert-warning-title-padding-y: 0px;
  --alert-warning-title-padding-x: 0px;
  --alert-warning-title-padding-top: 0px;
  --alert-warning-title-padding-right: 0px;
  --alert-warning-title-padding-bottom: 0px;
  --alert-warning-title-padding-left: 0px;
  --alert-warning-title-padding-start: 0px;
  --alert-warning-title-padding-end: 0px;
  --alert-warning-title-spacing: 0px;
  --alert-warning-title-font-family: "Inter";
  --alert-warning-title-font-size: 14px;
  --alert-warning-title-font-weight: 700;
  --alert-warning-title-line-height: 1.6;
  --alert-warning-title-letter-spacing: -.28px;
  --alert-warning-title-text-align: left;
  --alert-warning-title-text-decoration: none;
  --alert-warning-title-text-transform: none;
  --alert-warning-title-color: #000000;
  --alert-warning-text-padding-y: 0px;
  --alert-warning-text-padding-x: 0px;
  --alert-warning-text-padding-top: 0px;
  --alert-warning-text-padding-right: 0px;
  --alert-warning-text-padding-bottom: 0px;
  --alert-warning-text-padding-left: 0px;
  --alert-warning-text-padding-start: 0px;
  --alert-warning-text-padding-end: 0px;
  --alert-warning-text-spacing: 0px;
  --alert-warning-text-font-family: "Inter";
  --alert-warning-text-font-size: 14px;
  --alert-warning-text-font-weight: 400;
  --alert-warning-text-line-height: 1.6;
  --alert-warning-text-letter-spacing: -.28px;
  --alert-warning-text-text-align: left;
  --alert-warning-text-text-decoration: none;
  --alert-warning-text-text-transform: none;
  --alert-warning-text-color: rgba(0, 0, 0, .8);
  --alert-warning-actions-padding-y: 0px;
  --alert-warning-actions-padding-x: 0px;
  --alert-warning-actions-padding-top: 0px;
  --alert-warning-actions-padding-right: 0px;
  --alert-warning-actions-padding-bottom: 0px;
  --alert-warning-actions-padding-left: 0px;
  --alert-warning-actions-padding-start: 0px;
  --alert-warning-actions-padding-end: 0px;
  --alert-warning-actions-spacing: 10px;
  --alert-warning-actions-font-family: "Inter";
  --alert-warning-actions-font-size: 12px;
  --alert-warning-actions-font-weight: 600;
  --alert-warning-actions-line-height: 1.333;
  --alert-warning-actions-letter-spacing: -.24px;
  --alert-warning-actions-text-align: left;
  --alert-warning-actions-text-decoration: none;
  --alert-warning-actions-text-transform: none;
  --alert-warning-actions-color: #000000;
  /* Alert, type: danger */
  --alert-danger-background: #dc3545;
  --alert-danger-border-width: 1px;
  --alert-danger-border-radius: 6px;
  --alert-danger-border-color: transparent;
  --alert-danger-border-style: solid;
  --alert-danger-padding-y: 18px;
  --alert-danger-padding-x: 16px;
  --alert-danger-padding-top: 18px;
  --alert-danger-padding-right: 16px;
  --alert-danger-padding-bottom: 18px;
  --alert-danger-padding-left: 16px;
  --alert-danger-padding-start: 16px;
  --alert-danger-padding-end: 16px;
  --alert-danger-spacing: 12px;
  --alert-danger-box-shadow: none;
  --alert-danger-body-padding-y: 0px;
  --alert-danger-body-padding-x: 0px;
  --alert-danger-body-padding-top: 0px;
  --alert-danger-body-padding-right: 0px;
  --alert-danger-body-padding-bottom: 0px;
  --alert-danger-body-padding-left: 0px;
  --alert-danger-body-padding-start: 0px;
  --alert-danger-body-padding-end: 0px;
  --alert-danger-body-spacing: 12px;
  --alert-danger-title-padding-y: 0px;
  --alert-danger-title-padding-x: 0px;
  --alert-danger-title-padding-top: 0px;
  --alert-danger-title-padding-right: 0px;
  --alert-danger-title-padding-bottom: 0px;
  --alert-danger-title-padding-left: 0px;
  --alert-danger-title-padding-start: 0px;
  --alert-danger-title-padding-end: 0px;
  --alert-danger-title-spacing: 0px;
  --alert-danger-title-font-family: "Inter";
  --alert-danger-title-font-size: 14px;
  --alert-danger-title-font-weight: 700;
  --alert-danger-title-line-height: 1.6;
  --alert-danger-title-letter-spacing: -.28px;
  --alert-danger-title-text-align: left;
  --alert-danger-title-text-decoration: none;
  --alert-danger-title-text-transform: none;
  --alert-danger-title-color: #ffffff;
  --alert-danger-text-padding-y: 0px;
  --alert-danger-text-padding-x: 0px;
  --alert-danger-text-padding-top: 0px;
  --alert-danger-text-padding-right: 0px;
  --alert-danger-text-padding-bottom: 0px;
  --alert-danger-text-padding-left: 0px;
  --alert-danger-text-padding-start: 0px;
  --alert-danger-text-padding-end: 0px;
  --alert-danger-text-spacing: 0px;
  --alert-danger-text-font-family: "Inter";
  --alert-danger-text-font-size: 14px;
  --alert-danger-text-font-weight: 400;
  --alert-danger-text-line-height: 1.6;
  --alert-danger-text-letter-spacing: -.28px;
  --alert-danger-text-text-align: left;
  --alert-danger-text-text-decoration: none;
  --alert-danger-text-text-transform: none;
  --alert-danger-text-color: rgba(255, 255, 255, .85);
  --alert-danger-actions-padding-y: 0px;
  --alert-danger-actions-padding-x: 0px;
  --alert-danger-actions-padding-top: 0px;
  --alert-danger-actions-padding-right: 0px;
  --alert-danger-actions-padding-bottom: 0px;
  --alert-danger-actions-padding-left: 0px;
  --alert-danger-actions-padding-start: 0px;
  --alert-danger-actions-padding-end: 0px;
  --alert-danger-actions-spacing: 10px;
  --alert-danger-actions-font-family: "Inter";
  --alert-danger-actions-font-size: 12px;
  --alert-danger-actions-font-weight: 600;
  --alert-danger-actions-line-height: 1.333;
  --alert-danger-actions-letter-spacing: -.24px;
  --alert-danger-actions-text-align: left;
  --alert-danger-actions-text-decoration: none;
  --alert-danger-actions-text-transform: none;
  --alert-danger-actions-color: #ffffff;
  /* Alert, type: type9 */
  --alert-type9-background: #0f0a30;
  --alert-type9-border-width: 1px;
  --alert-type9-border-radius: 6px;
  --alert-type9-border-color: transparent;
  --alert-type9-border-style: solid;
  --alert-type9-padding-y: 18px;
  --alert-type9-padding-x: 16px;
  --alert-type9-padding-top: 18px;
  --alert-type9-padding-right: 16px;
  --alert-type9-padding-bottom: 18px;
  --alert-type9-padding-left: 16px;
  --alert-type9-padding-start: 16px;
  --alert-type9-padding-end: 16px;
  --alert-type9-spacing: 12px;
  --alert-type9-box-shadow: none;
  --alert-type9-body-padding-y: 0px;
  --alert-type9-body-padding-x: 0px;
  --alert-type9-body-padding-top: 0px;
  --alert-type9-body-padding-right: 0px;
  --alert-type9-body-padding-bottom: 0px;
  --alert-type9-body-padding-left: 0px;
  --alert-type9-body-padding-start: 0px;
  --alert-type9-body-padding-end: 0px;
  --alert-type9-body-spacing: 12px;
  --alert-type9-title-padding-y: 0px;
  --alert-type9-title-padding-x: 0px;
  --alert-type9-title-padding-top: 0px;
  --alert-type9-title-padding-right: 0px;
  --alert-type9-title-padding-bottom: 0px;
  --alert-type9-title-padding-left: 0px;
  --alert-type9-title-padding-start: 0px;
  --alert-type9-title-padding-end: 0px;
  --alert-type9-title-spacing: 0px;
  --alert-type9-title-font-family: "Inter";
  --alert-type9-title-font-size: 14px;
  --alert-type9-title-font-weight: 700;
  --alert-type9-title-line-height: 1.6;
  --alert-type9-title-letter-spacing: -.28px;
  --alert-type9-title-text-align: left;
  --alert-type9-title-text-decoration: none;
  --alert-type9-title-text-transform: none;
  --alert-type9-title-color: #ffffff;
  --alert-type9-text-padding-y: 0px;
  --alert-type9-text-padding-x: 0px;
  --alert-type9-text-padding-top: 0px;
  --alert-type9-text-padding-right: 0px;
  --alert-type9-text-padding-bottom: 0px;
  --alert-type9-text-padding-left: 0px;
  --alert-type9-text-padding-start: 0px;
  --alert-type9-text-padding-end: 0px;
  --alert-type9-text-spacing: 0px;
  --alert-type9-text-font-family: "Inter";
  --alert-type9-text-font-size: 14px;
  --alert-type9-text-font-weight: 400;
  --alert-type9-text-line-height: 1.6;
  --alert-type9-text-letter-spacing: -.28px;
  --alert-type9-text-text-align: left;
  --alert-type9-text-text-decoration: none;
  --alert-type9-text-text-transform: none;
  --alert-type9-text-color: rgba(255, 255, 255, .85);
  --alert-type9-actions-padding-y: 0px;
  --alert-type9-actions-padding-x: 0px;
  --alert-type9-actions-padding-top: 0px;
  --alert-type9-actions-padding-right: 0px;
  --alert-type9-actions-padding-bottom: 0px;
  --alert-type9-actions-padding-left: 0px;
  --alert-type9-actions-padding-start: 0px;
  --alert-type9-actions-padding-end: 0px;
  --alert-type9-actions-spacing: 10px;
  --alert-type9-actions-font-family: "Inter";
  --alert-type9-actions-font-size: 12px;
  --alert-type9-actions-font-weight: 600;
  --alert-type9-actions-line-height: 1.333;
  --alert-type9-actions-letter-spacing: -.24px;
  --alert-type9-actions-text-align: left;
  --alert-type9-actions-text-decoration: none;
  --alert-type9-actions-text-transform: none;
  --alert-type9-actions-color: #ffffff;
  /* Alert, layout: horizontal */
  --alert-horizontal-background: #000000;
  --alert-horizontal-border-width: 1px;
  --alert-horizontal-border-radius: 6px;
  --alert-horizontal-border-color: transparent;
  --alert-horizontal-border-style: solid;
  --alert-horizontal-padding-y: 18px;
  --alert-horizontal-padding-x: 16px;
  --alert-horizontal-padding-top: 18px;
  --alert-horizontal-padding-right: 16px;
  --alert-horizontal-padding-bottom: 18px;
  --alert-horizontal-padding-left: 16px;
  --alert-horizontal-padding-start: 16px;
  --alert-horizontal-padding-end: 16px;
  --alert-horizontal-spacing: 12px;
  --alert-horizontal-box-shadow: none;
  --alert-horizontal-body-padding-y: 0px;
  --alert-horizontal-body-padding-x: 0px;
  --alert-horizontal-body-padding-top: 0px;
  --alert-horizontal-body-padding-right: 0px;
  --alert-horizontal-body-padding-bottom: 0px;
  --alert-horizontal-body-padding-left: 0px;
  --alert-horizontal-body-padding-start: 0px;
  --alert-horizontal-body-padding-end: 0px;
  --alert-horizontal-body-spacing: 12px;
  --alert-horizontal-title-padding-y: 0px;
  --alert-horizontal-title-padding-x: 0px;
  --alert-horizontal-title-padding-top: 0px;
  --alert-horizontal-title-padding-right: 0px;
  --alert-horizontal-title-padding-bottom: 0px;
  --alert-horizontal-title-padding-left: 0px;
  --alert-horizontal-title-padding-start: 0px;
  --alert-horizontal-title-padding-end: 0px;
  --alert-horizontal-title-spacing: 0px;
  --alert-horizontal-title-font-family: "Inter";
  --alert-horizontal-title-font-size: 14px;
  --alert-horizontal-title-font-weight: 700;
  --alert-horizontal-title-line-height: 1.6;
  --alert-horizontal-title-letter-spacing: -.28px;
  --alert-horizontal-title-text-align: left;
  --alert-horizontal-title-text-decoration: none;
  --alert-horizontal-title-text-transform: none;
  --alert-horizontal-title-color: #ffffff;
  --alert-horizontal-text-padding-y: 0px;
  --alert-horizontal-text-padding-x: 0px;
  --alert-horizontal-text-padding-top: 0px;
  --alert-horizontal-text-padding-right: 0px;
  --alert-horizontal-text-padding-bottom: 0px;
  --alert-horizontal-text-padding-left: 0px;
  --alert-horizontal-text-padding-start: 0px;
  --alert-horizontal-text-padding-end: 0px;
  --alert-horizontal-text-spacing: 0px;
  --alert-horizontal-text-font-family: "Inter";
  --alert-horizontal-text-font-size: 14px;
  --alert-horizontal-text-font-weight: 400;
  --alert-horizontal-text-line-height: 1.6;
  --alert-horizontal-text-letter-spacing: -.28px;
  --alert-horizontal-text-text-align: left;
  --alert-horizontal-text-text-decoration: none;
  --alert-horizontal-text-text-transform: none;
  --alert-horizontal-text-color: rgba(255, 255, 255, .85);
  --alert-horizontal-actions-padding-y: 0px;
  --alert-horizontal-actions-padding-x: 0px;
  --alert-horizontal-actions-padding-top: 0px;
  --alert-horizontal-actions-padding-right: 0px;
  --alert-horizontal-actions-padding-bottom: 0px;
  --alert-horizontal-actions-padding-left: 0px;
  --alert-horizontal-actions-padding-start: 0px;
  --alert-horizontal-actions-padding-end: 0px;
  --alert-horizontal-actions-spacing: 10px;
  --alert-horizontal-actions-font-family: "Inter";
  --alert-horizontal-actions-font-size: 12px;
  --alert-horizontal-actions-font-weight: 600;
  --alert-horizontal-actions-line-height: 1.333;
  --alert-horizontal-actions-letter-spacing: -.24px;
  --alert-horizontal-actions-text-align: left;
  --alert-horizontal-actions-text-decoration: none;
  --alert-horizontal-actions-text-transform: none;
  --alert-horizontal-actions-color: #ffffff;
  /* Alert, layout: vertical */
  --alert-vertical-background: #000000;
  --alert-vertical-border-width: 1px;
  --alert-vertical-border-radius: 6px;
  --alert-vertical-border-color: transparent;
  --alert-vertical-border-style: solid;
  --alert-vertical-padding-y: 13px;
  --alert-vertical-padding-x: 16px;
  --alert-vertical-padding-top: 13px;
  --alert-vertical-padding-right: 16px;
  --alert-vertical-padding-bottom: 13px;
  --alert-vertical-padding-left: 16px;
  --alert-vertical-padding-start: 16px;
  --alert-vertical-padding-end: 16px;
  --alert-vertical-spacing: 12px;
  --alert-vertical-box-shadow: none;
  --alert-vertical-body-padding-y: 0px;
  --alert-vertical-body-padding-x: 0px;
  --alert-vertical-body-padding-top: 0px;
  --alert-vertical-body-padding-right: 0px;
  --alert-vertical-body-padding-bottom: 0px;
  --alert-vertical-body-padding-left: 0px;
  --alert-vertical-body-padding-start: 0px;
  --alert-vertical-body-padding-end: 0px;
  --alert-vertical-body-spacing: 10px;
  --alert-vertical-title-padding-y: 0px;
  --alert-vertical-title-padding-x: 0px;
  --alert-vertical-title-padding-top: 0px;
  --alert-vertical-title-padding-right: 0px;
  --alert-vertical-title-padding-bottom: 0px;
  --alert-vertical-title-padding-left: 0px;
  --alert-vertical-title-padding-start: 0px;
  --alert-vertical-title-padding-end: 0px;
  --alert-vertical-title-spacing: 0px;
  --alert-vertical-title-font-family: "Inter";
  --alert-vertical-title-font-size: 14px;
  --alert-vertical-title-font-weight: 700;
  --alert-vertical-title-line-height: 1.6;
  --alert-vertical-title-letter-spacing: -.28px;
  --alert-vertical-title-text-align: left;
  --alert-vertical-title-text-decoration: none;
  --alert-vertical-title-text-transform: none;
  --alert-vertical-title-color: #ffffff;
  --alert-vertical-text-padding-y: 0px;
  --alert-vertical-text-padding-x: 0px;
  --alert-vertical-text-padding-top: 0px;
  --alert-vertical-text-padding-right: 0px;
  --alert-vertical-text-padding-bottom: 0px;
  --alert-vertical-text-padding-left: 0px;
  --alert-vertical-text-padding-start: 0px;
  --alert-vertical-text-padding-end: 0px;
  --alert-vertical-text-spacing: 0px;
  --alert-vertical-text-font-family: "Inter";
  --alert-vertical-text-font-size: 14px;
  --alert-vertical-text-font-weight: 400;
  --alert-vertical-text-line-height: 1.6;
  --alert-vertical-text-letter-spacing: -.28px;
  --alert-vertical-text-text-align: left;
  --alert-vertical-text-text-decoration: none;
  --alert-vertical-text-text-transform: none;
  --alert-vertical-text-color: rgba(255, 255, 255, .85);
  --alert-vertical-actions-padding-y: 5px;
  --alert-vertical-actions-padding-x: 0px;
  --alert-vertical-actions-padding-top: 5px;
  --alert-vertical-actions-padding-right: 0px;
  --alert-vertical-actions-padding-bottom: 5px;
  --alert-vertical-actions-padding-left: 0px;
  --alert-vertical-actions-padding-start: 0px;
  --alert-vertical-actions-padding-end: 0px;
  --alert-vertical-actions-spacing: 10px;
  --alert-vertical-actions-font-family: "Inter";
  --alert-vertical-actions-font-size: 12px;
  --alert-vertical-actions-font-weight: 600;
  --alert-vertical-actions-line-height: 1.333;
  --alert-vertical-actions-letter-spacing: -.24px;
  --alert-vertical-actions-text-align: left;
  --alert-vertical-actions-text-decoration: none;
  --alert-vertical-actions-text-transform: none;
  --alert-vertical-actions-color: #ffffff;
}

.btn {
  /* Button, type: secondary, theme: light, state: hover */
  --button-secondary-hover-background: #f5b407;
  --button-secondary-hover-border-width: 1px;
  --button-secondary-hover-border-radius: 3px;
  --button-secondary-hover-border-color: rgba(0, 0, 0, 0);
  --button-secondary-hover-border-style: solid;
  --button-secondary-hover-padding-y: 18px;
  --button-secondary-hover-padding-x: 20px;
  --button-secondary-hover-padding-top: 18px;
  --button-secondary-hover-padding-right: 20px;
  --button-secondary-hover-padding-bottom: 18px;
  --button-secondary-hover-padding-left: 20px;
  --button-secondary-hover-padding-start: 20px;
  --button-secondary-hover-padding-end: 20px;
  --button-secondary-hover-spacing: 10px;
  --button-secondary-hover-box-shadow: none;
  --button-secondary-hover-font-family: "Barlow";
  --button-secondary-hover-font-size: 16px;
  --button-secondary-hover-font-weight: 600;
  --button-secondary-hover-line-height: 1;
  --button-secondary-hover-letter-spacing: -.32px;
  --button-secondary-hover-text-align: center;
  --button-secondary-hover-text-decoration: none;
  --button-secondary-hover-text-transform: capitalize;
  --button-secondary-hover-color: #000000;
  /* Button, type: secondary, theme: light, state: default */
  --button-secondary-background: #f5b407;
  --button-secondary-border-width: 1px;
  --button-secondary-border-radius: 3px;
  --button-secondary-border-color: rgba(0, 0, 0, 0);
  --button-secondary-border-style: solid;
  --button-secondary-padding-y: 18px;
  --button-secondary-padding-x: 20px;
  --button-secondary-padding-top: 18px;
  --button-secondary-padding-right: 20px;
  --button-secondary-padding-bottom: 18px;
  --button-secondary-padding-left: 20px;
  --button-secondary-padding-start: 20px;
  --button-secondary-padding-end: 20px;
  --button-secondary-spacing: 10px;
  --button-secondary-box-shadow: none;
  --button-secondary-font-family: "Barlow";
  --button-secondary-font-size: 16px;
  --button-secondary-font-weight: 600;
  --button-secondary-line-height: 1;
  --button-secondary-letter-spacing: -.32px;
  --button-secondary-text-align: center;
  --button-secondary-text-decoration: none;
  --button-secondary-text-transform: capitalize;
  --button-secondary-color: #000000;
  /* Button, type: secondary, theme: light, state: disabled */
  --button-secondary-disabled-background: #e5e5e5;
  --button-secondary-disabled-border-width: 1px;
  --button-secondary-disabled-border-radius: 3px;
  --button-secondary-disabled-border-color: rgba(0, 0, 0, 0);
  --button-secondary-disabled-border-style: solid;
  --button-secondary-disabled-padding-y: 15px;
  --button-secondary-disabled-padding-x: 20px;
  --button-secondary-disabled-padding-top: 15px;
  --button-secondary-disabled-padding-right: 20px;
  --button-secondary-disabled-padding-bottom: 15px;
  --button-secondary-disabled-padding-left: 20px;
  --button-secondary-disabled-padding-start: 20px;
  --button-secondary-disabled-padding-end: 20px;
  --button-secondary-disabled-spacing: 10px;
  --button-secondary-disabled-box-shadow: none;
  --button-secondary-disabled-font-family: "Barlow";
  --button-secondary-disabled-font-size: 16px;
  --button-secondary-disabled-font-weight: 600;
  --button-secondary-disabled-line-height: 1;
  --button-secondary-disabled-letter-spacing: -.32px;
  --button-secondary-disabled-text-align: center;
  --button-secondary-disabled-text-decoration: none;
  --button-secondary-disabled-text-transform: capitalize;
  --button-secondary-disabled-color: #777777;
  /* Button, type: primary, theme: light, state: hover */
  --button-primary-hover-background: linear-gradient(180deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), #111e65;
  --button-primary-hover-border-width: 1px;
  --button-primary-hover-border-radius: 3px;
  --button-primary-hover-border-color: rgba(0, 0, 0, 0);
  --button-primary-hover-border-style: solid;
  --button-primary-hover-padding-y: 15px;
  --button-primary-hover-padding-x: 20px;
  --button-primary-hover-padding-top: 15px;
  --button-primary-hover-padding-right: 20px;
  --button-primary-hover-padding-bottom: 15px;
  --button-primary-hover-padding-left: 20px;
  --button-primary-hover-padding-start: 20px;
  --button-primary-hover-padding-end: 20px;
  --button-primary-hover-spacing: 10px;
  --button-primary-hover-box-shadow: none;
  --button-primary-hover-font-family: "Barlow";
  --button-primary-hover-font-size: 16px;
  --button-primary-hover-font-weight: 600;
  --button-primary-hover-line-height: 1;
  --button-primary-hover-letter-spacing: -.32px;
  --button-primary-hover-text-align: center;
  --button-primary-hover-text-decoration: none;
  --button-primary-hover-text-transform: capitalize;
  --button-primary-hover-color: #ffffff;
  /* Button, type: primary, theme: light, state: default */
  --button-primary-background: #111e65;
  --button-primary-border-width: 1px;
  --button-primary-border-radius: 3px;
  --button-primary-border-color: rgba(0, 0, 0, 0);
  --button-primary-border-style: solid;
  --button-primary-padding-y: 15px;
  --button-primary-padding-x: 20px;
  --button-primary-padding-top: 15px;
  --button-primary-padding-right: 20px;
  --button-primary-padding-bottom: 15px;
  --button-primary-padding-left: 20px;
  --button-primary-padding-start: 20px;
  --button-primary-padding-end: 20px;
  --button-primary-spacing: 10px;
  --button-primary-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --button-primary-font-family: "Barlow";
  --button-primary-font-size: 16px;
  --button-primary-font-weight: 600;
  --button-primary-line-height: 1;
  --button-primary-letter-spacing: -.32px;
  --button-primary-text-align: center;
  --button-primary-text-decoration: none;
  --button-primary-text-transform: capitalize;
  --button-primary-color: #ffffff;
  /* Button, type: primary, theme: light, state: disabled */
  --button-primary-disabled-background: #e5e5e5;
  --button-primary-disabled-border-width: 1px;
  --button-primary-disabled-border-radius: 3px;
  --button-primary-disabled-border-color: rgba(0, 0, 0, 0);
  --button-primary-disabled-border-style: solid;
  --button-primary-disabled-padding-y: 15px;
  --button-primary-disabled-padding-x: 20px;
  --button-primary-disabled-padding-top: 15px;
  --button-primary-disabled-padding-right: 20px;
  --button-primary-disabled-padding-bottom: 15px;
  --button-primary-disabled-padding-left: 20px;
  --button-primary-disabled-padding-start: 20px;
  --button-primary-disabled-padding-end: 20px;
  --button-primary-disabled-spacing: 10px;
  --button-primary-disabled-box-shadow: none;
  --button-primary-disabled-font-family: "Barlow";
  --button-primary-disabled-font-size: 16px;
  --button-primary-disabled-font-weight: 600;
  --button-primary-disabled-line-height: 1;
  --button-primary-disabled-letter-spacing: -.32px;
  --button-primary-disabled-text-align: center;
  --button-primary-disabled-text-decoration: none;
  --button-primary-disabled-text-transform: capitalize;
  --button-primary-disabled-color: #777777;
  /* Button, size: small */
  --button-sm-background: #000000;
  --button-sm-border-width: 1px;
  --button-sm-border-radius: 4px;
  --button-sm-border-color: rgba(0, 0, 0, 0);
  --button-sm-border-style: solid;
  --button-sm-padding-y: 12px;
  --button-sm-padding-x: 16px;
  --button-sm-padding-top: 12px;
  --button-sm-padding-right: 16px;
  --button-sm-padding-bottom: 12px;
  --button-sm-padding-left: 16px;
  --button-sm-padding-start: 16px;
  --button-sm-padding-end: 16px;
  --button-sm-spacing: 12px;
  --button-sm-box-shadow: none;
  --button-sm-font-family: "Inter";
  --button-sm-font-size: 12px;
  --button-sm-font-weight: 600;
  --button-sm-line-height: 1.333;
  --button-sm-letter-spacing: -.24px;
  --button-sm-text-align: center;
  --button-sm-text-decoration: none;
  --button-sm-text-transform: none;
  --button-sm-color: #ffffff;
  /* Button, size: medium */
  --button-md-background: #000000;
  --button-md-border-width: 1px;
  --button-md-border-radius: 3px;
  --button-md-border-color: rgba(0, 0, 0, 0);
  --button-md-border-style: solid;
  --button-md-padding-y: 15px;
  --button-md-padding-x: 20px;
  --button-md-padding-top: 15px;
  --button-md-padding-right: 20px;
  --button-md-padding-bottom: 15px;
  --button-md-padding-left: 20px;
  --button-md-padding-start: 20px;
  --button-md-padding-end: 20px;
  --button-md-spacing: 10px;
  --button-md-box-shadow: none;
  --button-md-font-family: "Barlow";
  --button-md-font-size: 16px;
  --button-md-font-weight: 600;
  --button-md-line-height: 1;
  --button-md-letter-spacing: -.32px;
  --button-md-text-align: center;
  --button-md-text-decoration: none;
  --button-md-text-transform: capitalize;
  --button-md-color: #ffffff;
  /* Button, size: large */
  --button-lg-background: #000000;
  --button-lg-border-width: 1px;
  --button-lg-border-radius: 4px;
  --button-lg-border-color: rgba(0, 0, 0, 0);
  --button-lg-border-style: solid;
  --button-lg-padding-y: 14px;
  --button-lg-padding-x: 20px;
  --button-lg-padding-top: 14px;
  --button-lg-padding-right: 20px;
  --button-lg-padding-bottom: 14px;
  --button-lg-padding-left: 20px;
  --button-lg-padding-start: 20px;
  --button-lg-padding-end: 20px;
  --button-lg-spacing: 20px;
  --button-lg-box-shadow: none;
  --button-lg-font-family: "Inter";
  --button-lg-font-size: 16px;
  --button-lg-font-weight: 600;
  --button-lg-line-height: 1.25;
  --button-lg-letter-spacing: -.32px;
  --button-lg-text-align: center;
  --button-lg-text-decoration: none;
  --button-lg-text-transform: none;
  --button-lg-color: #ffffff;
}

.checkbox {
  /* Checkbox, state: disabled, activity: on, theme: dark */
  --checkbox-disabled-dark-on-padding-y: 0px;
  --checkbox-disabled-dark-on-padding-x: 0px;
  --checkbox-disabled-dark-on-padding-top: 0px;
  --checkbox-disabled-dark-on-padding-right: 0px;
  --checkbox-disabled-dark-on-padding-bottom: 0px;
  --checkbox-disabled-dark-on-padding-left: 0px;
  --checkbox-disabled-dark-on-padding-start: 0px;
  --checkbox-disabled-dark-on-padding-end: 0px;
  --checkbox-disabled-dark-on-spacing: 12px;
  --checkbox-disabled-dark-on-opacity: .4;
  --checkbox-disabled-dark-on-color: #258cf2;
  --checkbox-disabled-dark-on-border-width: 1px;
  --checkbox-disabled-dark-on-border-radius: 3px;
  --checkbox-disabled-dark-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-dark-on-border-style: solid;
  --checkbox-disabled-dark-on-width: 18px;
  --checkbox-disabled-dark-on-width-raw: 18;
  --checkbox-disabled-dark-on-height: 18px;
  --checkbox-disabled-dark-on-height-raw: 18;
  --checkbox-disabled-label-dark-on-font-family: "Inter";
  --checkbox-disabled-label-dark-on-font-size: 16px;
  --checkbox-disabled-label-dark-on-font-weight: 400;
  --checkbox-disabled-label-dark-on-line-height: 1;
  --checkbox-disabled-label-dark-on-letter-spacing: 0px;
  --checkbox-disabled-label-dark-on-text-align: left;
  --checkbox-disabled-label-dark-on-text-decoration: none;
  --checkbox-disabled-label-dark-on-text-transform: none;
  --checkbox-disabled-label-dark-on-color: rgba(255, 255, 255, .45);
  --checkbox-disabled-label-dark-on-opacity: 1;
  --checkbox-disabled-check-dark-on-border-width: 1px;
  --checkbox-disabled-check-dark-on-border-radius: 3px;
  --checkbox-disabled-check-dark-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-check-dark-on-border-style: solid;
  --checkbox-disabled-check-dark-on-width: 18px;
  --checkbox-disabled-check-dark-on-width-raw: 18;
  --checkbox-disabled-check-dark-on-height: 18px;
  --checkbox-disabled-check-dark-on-height-raw: 18;
  --checkbox-disabled-check-dark-on-box-shadow: none;
  --checkbox-disabled-check-dark-on-color: #ffffff;
  --checkbox-disabled-icon-dark-on-width: 12.6px;
  --checkbox-disabled-icon-dark-on-width-raw: 12.6;
  --checkbox-disabled-icon-dark-on-height: 12.6px;
  --checkbox-disabled-icon-dark-on-height-raw: 12.6;
  --checkbox-disabled-icon-dark-on-color: #ffffff;
  /* Checkbox, state: hover, activity: on, theme: dark */
  --checkbox-hover-dark-on-padding-y: 0px;
  --checkbox-hover-dark-on-padding-x: 0px;
  --checkbox-hover-dark-on-padding-top: 0px;
  --checkbox-hover-dark-on-padding-right: 0px;
  --checkbox-hover-dark-on-padding-bottom: 0px;
  --checkbox-hover-dark-on-padding-left: 0px;
  --checkbox-hover-dark-on-padding-start: 0px;
  --checkbox-hover-dark-on-padding-end: 0px;
  --checkbox-hover-dark-on-spacing: 12px;
  --checkbox-hover-dark-on-opacity: 1;
  --checkbox-hover-dark-on-color: #0077c8;
  --checkbox-hover-dark-on-border-width: 1px;
  --checkbox-hover-dark-on-border-radius: 3px;
  --checkbox-hover-dark-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-hover-dark-on-border-style: solid;
  --checkbox-hover-dark-on-width: 18px;
  --checkbox-hover-dark-on-width-raw: 18;
  --checkbox-hover-dark-on-height: 18px;
  --checkbox-hover-dark-on-height-raw: 18;
  --checkbox-hover-label-dark-on-font-family: "Inter";
  --checkbox-hover-label-dark-on-font-size: 16px;
  --checkbox-hover-label-dark-on-font-weight: 400;
  --checkbox-hover-label-dark-on-line-height: 1;
  --checkbox-hover-label-dark-on-letter-spacing: 0px;
  --checkbox-hover-label-dark-on-text-align: left;
  --checkbox-hover-label-dark-on-text-decoration: none;
  --checkbox-hover-label-dark-on-text-transform: none;
  --checkbox-hover-label-dark-on-color: rgba(255, 255, 255, .85);
  --checkbox-hover-label-dark-on-opacity: 1;
  --checkbox-hover-check-dark-on-border-width: 1px;
  --checkbox-hover-check-dark-on-border-radius: 3px;
  --checkbox-hover-check-dark-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-hover-check-dark-on-border-style: solid;
  --checkbox-hover-check-dark-on-width: 18px;
  --checkbox-hover-check-dark-on-width-raw: 18;
  --checkbox-hover-check-dark-on-height: 18px;
  --checkbox-hover-check-dark-on-height-raw: 18;
  --checkbox-hover-check-dark-on-box-shadow: none;
  --checkbox-hover-check-dark-on-color: #ffffff;
  --checkbox-hover-icon-dark-on-width: 12.6px;
  --checkbox-hover-icon-dark-on-width-raw: 12.6;
  --checkbox-hover-icon-dark-on-height: 12.6px;
  --checkbox-hover-icon-dark-on-height-raw: 12.6;
  --checkbox-hover-icon-dark-on-color: #ffffff;
  /* Checkbox, state: default, activity: on, theme: dark */
  --checkbox-dark-on-padding-y: 0px;
  --checkbox-dark-on-padding-x: 0px;
  --checkbox-dark-on-padding-top: 0px;
  --checkbox-dark-on-padding-right: 0px;
  --checkbox-dark-on-padding-bottom: 0px;
  --checkbox-dark-on-padding-left: 0px;
  --checkbox-dark-on-padding-start: 0px;
  --checkbox-dark-on-padding-end: 0px;
  --checkbox-dark-on-spacing: 12px;
  --checkbox-dark-on-opacity: 1;
  --checkbox-dark-on-color: #258cf2;
  --checkbox-dark-on-border-width: 1px;
  --checkbox-dark-on-border-radius: 3px;
  --checkbox-dark-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-dark-on-border-style: solid;
  --checkbox-dark-on-width: 18px;
  --checkbox-dark-on-width-raw: 18;
  --checkbox-dark-on-height: 18px;
  --checkbox-dark-on-height-raw: 18;
  --checkbox-label-dark-on-font-family: "Inter";
  --checkbox-label-dark-on-font-size: 16px;
  --checkbox-label-dark-on-font-weight: 400;
  --checkbox-label-dark-on-line-height: 1;
  --checkbox-label-dark-on-letter-spacing: 0px;
  --checkbox-label-dark-on-text-align: left;
  --checkbox-label-dark-on-text-decoration: none;
  --checkbox-label-dark-on-text-transform: none;
  --checkbox-label-dark-on-color: rgba(255, 255, 255, .85);
  --checkbox-label-dark-on-opacity: 1;
  --checkbox-check-dark-on-border-width: 1px;
  --checkbox-check-dark-on-border-radius: 3px;
  --checkbox-check-dark-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-check-dark-on-border-style: solid;
  --checkbox-check-dark-on-width: 18px;
  --checkbox-check-dark-on-width-raw: 18;
  --checkbox-check-dark-on-height: 18px;
  --checkbox-check-dark-on-height-raw: 18;
  --checkbox-check-dark-on-box-shadow: none;
  --checkbox-check-dark-on-color: #ffffff;
  --checkbox-icon-dark-on-width: 12.6px;
  --checkbox-icon-dark-on-width-raw: 12.6;
  --checkbox-icon-dark-on-height: 12.6px;
  --checkbox-icon-dark-on-height-raw: 12.6;
  --checkbox-icon-dark-on-color: #ffffff;
  /* Checkbox, state: disabled, activity: off, theme: dark */
  --checkbox-disabled-dark-off-padding-y: 0px;
  --checkbox-disabled-dark-off-padding-x: 0px;
  --checkbox-disabled-dark-off-padding-top: 0px;
  --checkbox-disabled-dark-off-padding-right: 0px;
  --checkbox-disabled-dark-off-padding-bottom: 0px;
  --checkbox-disabled-dark-off-padding-left: 0px;
  --checkbox-disabled-dark-off-padding-start: 0px;
  --checkbox-disabled-dark-off-padding-end: 0px;
  --checkbox-disabled-dark-off-spacing: 12px;
  --checkbox-disabled-dark-off-opacity: .4;
  --checkbox-disabled-dark-off-color: #6e6e6e;
  --checkbox-disabled-dark-off-border-width: 1px;
  --checkbox-disabled-dark-off-border-radius: 3px;
  --checkbox-disabled-dark-off-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-dark-off-border-style: solid;
  --checkbox-disabled-dark-off-width: 18px;
  --checkbox-disabled-dark-off-width-raw: 18;
  --checkbox-disabled-dark-off-height: 18px;
  --checkbox-disabled-dark-off-height-raw: 18;
  --checkbox-disabled-label-dark-off-font-family: "Inter";
  --checkbox-disabled-label-dark-off-font-size: 16px;
  --checkbox-disabled-label-dark-off-font-weight: 400;
  --checkbox-disabled-label-dark-off-line-height: 1;
  --checkbox-disabled-label-dark-off-letter-spacing: 0px;
  --checkbox-disabled-label-dark-off-text-align: left;
  --checkbox-disabled-label-dark-off-text-decoration: none;
  --checkbox-disabled-label-dark-off-text-transform: none;
  --checkbox-disabled-label-dark-off-color: rgba(255, 255, 255, .45);
  --checkbox-disabled-label-dark-off-opacity: 1;
  --checkbox-disabled-check-dark-off-border-width: 1px;
  --checkbox-disabled-check-dark-off-border-radius: 3px;
  --checkbox-disabled-check-dark-off-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-check-dark-off-border-style: solid;
  --checkbox-disabled-check-dark-off-width: 18px;
  --checkbox-disabled-check-dark-off-width-raw: 18;
  --checkbox-disabled-check-dark-off-height: 18px;
  --checkbox-disabled-check-dark-off-height-raw: 18;
  --checkbox-disabled-check-dark-off-box-shadow: none;
  --checkbox-disabled-check-dark-off-color: #ffffff;
  --checkbox-disabled-icon-dark-off-width: 12.6px;
  --checkbox-disabled-icon-dark-off-width-raw: 12.6;
  --checkbox-disabled-icon-dark-off-height: 12.6px;
  --checkbox-disabled-icon-dark-off-height-raw: 12.6;
  --checkbox-disabled-icon-dark-off-color: #ffffff;
  /* Checkbox, state: hover, activity: off, theme: dark */
  --checkbox-hover-dark-off-padding-y: 0px;
  --checkbox-hover-dark-off-padding-x: 0px;
  --checkbox-hover-dark-off-padding-top: 0px;
  --checkbox-hover-dark-off-padding-right: 0px;
  --checkbox-hover-dark-off-padding-bottom: 0px;
  --checkbox-hover-dark-off-padding-left: 0px;
  --checkbox-hover-dark-off-padding-start: 0px;
  --checkbox-hover-dark-off-padding-end: 0px;
  --checkbox-hover-dark-off-spacing: 12px;
  --checkbox-hover-dark-off-opacity: 1;
  --checkbox-hover-dark-off-color: rgba(0, 0, 0, 0);
  --checkbox-hover-dark-off-border-width: 1px;
  --checkbox-hover-dark-off-border-radius: 3px;
  --checkbox-hover-dark-off-border-color: rgba(255, 255, 255, .75);
  --checkbox-hover-dark-off-border-style: solid;
  --checkbox-hover-dark-off-width: 18px;
  --checkbox-hover-dark-off-width-raw: 18;
  --checkbox-hover-dark-off-height: 18px;
  --checkbox-hover-dark-off-height-raw: 18;
  --checkbox-hover-label-dark-off-font-family: "Inter";
  --checkbox-hover-label-dark-off-font-size: 16px;
  --checkbox-hover-label-dark-off-font-weight: 400;
  --checkbox-hover-label-dark-off-line-height: 1;
  --checkbox-hover-label-dark-off-letter-spacing: 0px;
  --checkbox-hover-label-dark-off-text-align: left;
  --checkbox-hover-label-dark-off-text-decoration: none;
  --checkbox-hover-label-dark-off-text-transform: none;
  --checkbox-hover-label-dark-off-color: rgba(255, 255, 255, .85);
  --checkbox-hover-label-dark-off-opacity: 1;
  --checkbox-hover-check-dark-off-border-width: 1px;
  --checkbox-hover-check-dark-off-border-radius: 3px;
  --checkbox-hover-check-dark-off-border-color: rgba(255, 255, 255, .75);
  --checkbox-hover-check-dark-off-border-style: solid;
  --checkbox-hover-check-dark-off-width: 18px;
  --checkbox-hover-check-dark-off-width-raw: 18;
  --checkbox-hover-check-dark-off-height: 18px;
  --checkbox-hover-check-dark-off-height-raw: 18;
  --checkbox-hover-check-dark-off-box-shadow: none;
  --checkbox-hover-check-dark-off-color: #ffffff;
  --checkbox-hover-icon-dark-off-width: 12.6px;
  --checkbox-hover-icon-dark-off-width-raw: 12.6;
  --checkbox-hover-icon-dark-off-height: 12.6px;
  --checkbox-hover-icon-dark-off-height-raw: 12.6;
  --checkbox-hover-icon-dark-off-color: #ffffff;
  /* Checkbox, state: default, activity: off, theme: dark */
  --checkbox-dark-off-padding-y: 0px;
  --checkbox-dark-off-padding-x: 0px;
  --checkbox-dark-off-padding-top: 0px;
  --checkbox-dark-off-padding-right: 0px;
  --checkbox-dark-off-padding-bottom: 0px;
  --checkbox-dark-off-padding-left: 0px;
  --checkbox-dark-off-padding-start: 0px;
  --checkbox-dark-off-padding-end: 0px;
  --checkbox-dark-off-spacing: 12px;
  --checkbox-dark-off-opacity: 1;
  --checkbox-dark-off-color: rgba(0, 0, 0, 0);
  --checkbox-dark-off-border-width: 1px;
  --checkbox-dark-off-border-radius: 3px;
  --checkbox-dark-off-border-color: rgba(255, 255, 255, .4);
  --checkbox-dark-off-border-style: solid;
  --checkbox-dark-off-width: 18px;
  --checkbox-dark-off-width-raw: 18;
  --checkbox-dark-off-height: 18px;
  --checkbox-dark-off-height-raw: 18;
  --checkbox-label-dark-off-font-family: "Inter";
  --checkbox-label-dark-off-font-size: 16px;
  --checkbox-label-dark-off-font-weight: 400;
  --checkbox-label-dark-off-line-height: 1;
  --checkbox-label-dark-off-letter-spacing: 0px;
  --checkbox-label-dark-off-text-align: left;
  --checkbox-label-dark-off-text-decoration: none;
  --checkbox-label-dark-off-text-transform: none;
  --checkbox-label-dark-off-color: rgba(255, 255, 255, .65);
  --checkbox-label-dark-off-opacity: 1;
  --checkbox-check-dark-off-border-width: 1px;
  --checkbox-check-dark-off-border-radius: 3px;
  --checkbox-check-dark-off-border-color: rgba(255, 255, 255, .4);
  --checkbox-check-dark-off-border-style: solid;
  --checkbox-check-dark-off-width: 18px;
  --checkbox-check-dark-off-width-raw: 18;
  --checkbox-check-dark-off-height: 18px;
  --checkbox-check-dark-off-height-raw: 18;
  --checkbox-check-dark-off-box-shadow: none;
  --checkbox-check-dark-off-color: #ffffff;
  --checkbox-icon-dark-off-width: 12.6px;
  --checkbox-icon-dark-off-width-raw: 12.6;
  --checkbox-icon-dark-off-height: 12.6px;
  --checkbox-icon-dark-off-height-raw: 12.6;
  --checkbox-icon-dark-off-color: #ffffff;
  /* Checkbox, state: disabled, activity: on, theme: light */
  --checkbox-disabled-on-padding-y: 0px;
  --checkbox-disabled-on-padding-x: 0px;
  --checkbox-disabled-on-padding-top: 0px;
  --checkbox-disabled-on-padding-right: 0px;
  --checkbox-disabled-on-padding-bottom: 0px;
  --checkbox-disabled-on-padding-left: 0px;
  --checkbox-disabled-on-padding-start: 0px;
  --checkbox-disabled-on-padding-end: 0px;
  --checkbox-disabled-on-spacing: 12px;
  --checkbox-disabled-on-opacity: .3;
  --checkbox-disabled-on-color: #7158dd;
  --checkbox-disabled-on-border-width: 1px;
  --checkbox-disabled-on-border-radius: 3px;
  --checkbox-disabled-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-on-border-style: solid;
  --checkbox-disabled-on-width: 18px;
  --checkbox-disabled-on-width-raw: 18;
  --checkbox-disabled-on-height: 18px;
  --checkbox-disabled-on-height-raw: 18;
  --checkbox-disabled-label-on-font-family: "Inter";
  --checkbox-disabled-label-on-font-size: 16px;
  --checkbox-disabled-label-on-font-weight: 400;
  --checkbox-disabled-label-on-line-height: 1;
  --checkbox-disabled-label-on-letter-spacing: 0px;
  --checkbox-disabled-label-on-text-align: left;
  --checkbox-disabled-label-on-text-decoration: none;
  --checkbox-disabled-label-on-text-transform: none;
  --checkbox-disabled-label-on-color: #777777;
  --checkbox-disabled-label-on-opacity: 1;
  --checkbox-disabled-check-on-border-width: 1px;
  --checkbox-disabled-check-on-border-radius: 3px;
  --checkbox-disabled-check-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-check-on-border-style: solid;
  --checkbox-disabled-check-on-width: 18px;
  --checkbox-disabled-check-on-width-raw: 18;
  --checkbox-disabled-check-on-height: 18px;
  --checkbox-disabled-check-on-height-raw: 18;
  --checkbox-disabled-check-on-box-shadow: none;
  --checkbox-disabled-check-on-color: #ffffff;
  --checkbox-disabled-icon-on-width: 12.6px;
  --checkbox-disabled-icon-on-width-raw: 12.6;
  --checkbox-disabled-icon-on-height: 12.6px;
  --checkbox-disabled-icon-on-height-raw: 12.6;
  --checkbox-disabled-icon-on-color: #ffffff;
  /* Checkbox, state: hover, activity: on, theme: light */
  --checkbox-hover-on-padding-y: 0px;
  --checkbox-hover-on-padding-x: 0px;
  --checkbox-hover-on-padding-top: 0px;
  --checkbox-hover-on-padding-right: 0px;
  --checkbox-hover-on-padding-bottom: 0px;
  --checkbox-hover-on-padding-left: 0px;
  --checkbox-hover-on-padding-start: 0px;
  --checkbox-hover-on-padding-end: 0px;
  --checkbox-hover-on-spacing: 12px;
  --checkbox-hover-on-opacity: 1;
  --checkbox-hover-on-color: #258cf2;
  --checkbox-hover-on-border-width: 1px;
  --checkbox-hover-on-border-radius: 3px;
  --checkbox-hover-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-hover-on-border-style: solid;
  --checkbox-hover-on-width: 18px;
  --checkbox-hover-on-width-raw: 18;
  --checkbox-hover-on-height: 18px;
  --checkbox-hover-on-height-raw: 18;
  --checkbox-hover-label-on-font-family: "Inter";
  --checkbox-hover-label-on-font-size: 16px;
  --checkbox-hover-label-on-font-weight: 400;
  --checkbox-hover-label-on-line-height: 1;
  --checkbox-hover-label-on-letter-spacing: 0px;
  --checkbox-hover-label-on-text-align: left;
  --checkbox-hover-label-on-text-decoration: none;
  --checkbox-hover-label-on-text-transform: none;
  --checkbox-hover-label-on-color: rgba(0, 0, 0, .8);
  --checkbox-hover-label-on-opacity: 1;
  --checkbox-hover-check-on-border-width: 1px;
  --checkbox-hover-check-on-border-radius: 3px;
  --checkbox-hover-check-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-hover-check-on-border-style: solid;
  --checkbox-hover-check-on-width: 18px;
  --checkbox-hover-check-on-width-raw: 18;
  --checkbox-hover-check-on-height: 18px;
  --checkbox-hover-check-on-height-raw: 18;
  --checkbox-hover-check-on-box-shadow: none;
  --checkbox-hover-check-on-color: #ffffff;
  --checkbox-hover-icon-on-width: 12.6px;
  --checkbox-hover-icon-on-width-raw: 12.6;
  --checkbox-hover-icon-on-height: 12.6px;
  --checkbox-hover-icon-on-height-raw: 12.6;
  --checkbox-hover-icon-on-color: #ffffff;
  /* Checkbox, state: default, activity: on, theme: light */
  --checkbox-on-padding-y: 0px;
  --checkbox-on-padding-x: 0px;
  --checkbox-on-padding-top: 0px;
  --checkbox-on-padding-right: 0px;
  --checkbox-on-padding-bottom: 0px;
  --checkbox-on-padding-left: 0px;
  --checkbox-on-padding-start: 0px;
  --checkbox-on-padding-end: 0px;
  --checkbox-on-spacing: 12px;
  --checkbox-on-opacity: 1;
  --checkbox-on-color: #0f0a30;
  --checkbox-on-border-width: 1px;
  --checkbox-on-border-radius: 3px;
  --checkbox-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-on-border-style: solid;
  --checkbox-on-width: 18px;
  --checkbox-on-width-raw: 18;
  --checkbox-on-height: 18px;
  --checkbox-on-height-raw: 18;
  --checkbox-label-on-font-family: "Inter";
  --checkbox-label-on-font-size: 16px;
  --checkbox-label-on-font-weight: 400;
  --checkbox-label-on-line-height: 1;
  --checkbox-label-on-letter-spacing: 0px;
  --checkbox-label-on-text-align: left;
  --checkbox-label-on-text-decoration: none;
  --checkbox-label-on-text-transform: none;
  --checkbox-label-on-color: rgba(0, 0, 0, .8);
  --checkbox-label-on-opacity: 1;
  --checkbox-check-on-border-width: 1px;
  --checkbox-check-on-border-radius: 3px;
  --checkbox-check-on-border-color: rgba(0, 0, 0, 0);
  --checkbox-check-on-border-style: solid;
  --checkbox-check-on-width: 18px;
  --checkbox-check-on-width-raw: 18;
  --checkbox-check-on-height: 18px;
  --checkbox-check-on-height-raw: 18;
  --checkbox-check-on-box-shadow: none;
  --checkbox-check-on-color: #ffffff;
  --checkbox-icon-on-width: 12.6px;
  --checkbox-icon-on-width-raw: 12.6;
  --checkbox-icon-on-height: 12.6px;
  --checkbox-icon-on-height-raw: 12.6;
  --checkbox-icon-on-color: #ffffff;
  /* Checkbox, state: disabled, activity: off, theme: light */
  --checkbox-disabled-off-padding-y: 0px;
  --checkbox-disabled-off-padding-x: 0px;
  --checkbox-disabled-off-padding-top: 0px;
  --checkbox-disabled-off-padding-right: 0px;
  --checkbox-disabled-off-padding-bottom: 0px;
  --checkbox-disabled-off-padding-left: 0px;
  --checkbox-disabled-off-padding-start: 0px;
  --checkbox-disabled-off-padding-end: 0px;
  --checkbox-disabled-off-spacing: 12px;
  --checkbox-disabled-off-opacity: .3;
  --checkbox-disabled-off-color: #cccccc;
  --checkbox-disabled-off-border-width: 1px;
  --checkbox-disabled-off-border-radius: 3px;
  --checkbox-disabled-off-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-off-border-style: solid;
  --checkbox-disabled-off-width: 18px;
  --checkbox-disabled-off-width-raw: 18;
  --checkbox-disabled-off-height: 18px;
  --checkbox-disabled-off-height-raw: 18;
  --checkbox-disabled-label-off-font-family: "Inter";
  --checkbox-disabled-label-off-font-size: 16px;
  --checkbox-disabled-label-off-font-weight: 400;
  --checkbox-disabled-label-off-line-height: 1;
  --checkbox-disabled-label-off-letter-spacing: 0px;
  --checkbox-disabled-label-off-text-align: left;
  --checkbox-disabled-label-off-text-decoration: none;
  --checkbox-disabled-label-off-text-transform: none;
  --checkbox-disabled-label-off-color: #777777;
  --checkbox-disabled-label-off-opacity: 1;
  --checkbox-disabled-check-off-border-width: 1px;
  --checkbox-disabled-check-off-border-radius: 3px;
  --checkbox-disabled-check-off-border-color: rgba(0, 0, 0, 0);
  --checkbox-disabled-check-off-border-style: solid;
  --checkbox-disabled-check-off-width: 18px;
  --checkbox-disabled-check-off-width-raw: 18;
  --checkbox-disabled-check-off-height: 18px;
  --checkbox-disabled-check-off-height-raw: 18;
  --checkbox-disabled-check-off-box-shadow: none;
  --checkbox-disabled-check-off-color: #ffffff;
  --checkbox-disabled-icon-off-width: 12.6px;
  --checkbox-disabled-icon-off-width-raw: 12.6;
  --checkbox-disabled-icon-off-height: 12.6px;
  --checkbox-disabled-icon-off-height-raw: 12.6;
  --checkbox-disabled-icon-off-color: #ffffff;
  /* Checkbox, state: hover, activity: off, theme: light */
  --checkbox-hover-off-padding-y: 0px;
  --checkbox-hover-off-padding-x: 0px;
  --checkbox-hover-off-padding-top: 0px;
  --checkbox-hover-off-padding-right: 0px;
  --checkbox-hover-off-padding-bottom: 0px;
  --checkbox-hover-off-padding-left: 0px;
  --checkbox-hover-off-padding-start: 0px;
  --checkbox-hover-off-padding-end: 0px;
  --checkbox-hover-off-spacing: 12px;
  --checkbox-hover-off-opacity: 1;
  --checkbox-hover-off-color: rgba(0, 0, 0, 0);
  --checkbox-hover-off-border-width: 1px;
  --checkbox-hover-off-border-radius: 3px;
  --checkbox-hover-off-border-color: #929292;
  --checkbox-hover-off-border-style: solid;
  --checkbox-hover-off-width: 18px;
  --checkbox-hover-off-width-raw: 18;
  --checkbox-hover-off-height: 18px;
  --checkbox-hover-off-height-raw: 18;
  --checkbox-hover-label-off-font-family: "Inter";
  --checkbox-hover-label-off-font-size: 16px;
  --checkbox-hover-label-off-font-weight: 400;
  --checkbox-hover-label-off-line-height: 1;
  --checkbox-hover-label-off-letter-spacing: 0px;
  --checkbox-hover-label-off-text-align: left;
  --checkbox-hover-label-off-text-decoration: none;
  --checkbox-hover-label-off-text-transform: none;
  --checkbox-hover-label-off-color: rgba(0, 0, 0, .8);
  --checkbox-hover-label-off-opacity: 1;
  --checkbox-hover-check-off-border-width: 1px;
  --checkbox-hover-check-off-border-radius: 3px;
  --checkbox-hover-check-off-border-color: #929292;
  --checkbox-hover-check-off-border-style: solid;
  --checkbox-hover-check-off-width: 18px;
  --checkbox-hover-check-off-width-raw: 18;
  --checkbox-hover-check-off-height: 18px;
  --checkbox-hover-check-off-height-raw: 18;
  --checkbox-hover-check-off-box-shadow: none;
  --checkbox-hover-check-off-color: #ffffff;
  --checkbox-hover-icon-off-width: 12.6px;
  --checkbox-hover-icon-off-width-raw: 12.6;
  --checkbox-hover-icon-off-height: 12.6px;
  --checkbox-hover-icon-off-height-raw: 12.6;
  --checkbox-hover-icon-off-color: #ffffff;
  /* Checkbox, state: default, activity: off, theme: light */
  --checkbox-off-padding-y: 0px;
  --checkbox-off-padding-x: 0px;
  --checkbox-off-padding-top: 0px;
  --checkbox-off-padding-right: 0px;
  --checkbox-off-padding-bottom: 0px;
  --checkbox-off-padding-left: 0px;
  --checkbox-off-padding-start: 0px;
  --checkbox-off-padding-end: 0px;
  --checkbox-off-spacing: 12px;
  --checkbox-off-opacity: 1;
  --checkbox-off-color: rgba(0, 0, 0, 0);
  --checkbox-off-border-width: 1px;
  --checkbox-off-border-radius: 3px;
  --checkbox-off-border-color: #b3b3b3;
  --checkbox-off-border-style: solid;
  --checkbox-off-width: 18px;
  --checkbox-off-width-raw: 18;
  --checkbox-off-height: 18px;
  --checkbox-off-height-raw: 18;
  --checkbox-label-off-font-family: "Inter";
  --checkbox-label-off-font-size: 16px;
  --checkbox-label-off-font-weight: 400;
  --checkbox-label-off-line-height: 1;
  --checkbox-label-off-letter-spacing: 0px;
  --checkbox-label-off-text-align: left;
  --checkbox-label-off-text-decoration: none;
  --checkbox-label-off-text-transform: none;
  --checkbox-label-off-color: #555555;
  --checkbox-label-off-opacity: 1;
  --checkbox-check-off-border-width: 1px;
  --checkbox-check-off-border-radius: 3px;
  --checkbox-check-off-border-color: #b3b3b3;
  --checkbox-check-off-border-style: solid;
  --checkbox-check-off-width: 18px;
  --checkbox-check-off-width-raw: 18;
  --checkbox-check-off-height: 18px;
  --checkbox-check-off-height-raw: 18;
  --checkbox-check-off-box-shadow: none;
  --checkbox-check-off-color: #ffffff;
  --checkbox-icon-off-width: 12.6px;
  --checkbox-icon-off-width-raw: 12.6;
  --checkbox-icon-off-height: 12.6px;
  --checkbox-icon-off-height-raw: 12.6;
  --checkbox-icon-off-color: #ffffff;
  /* Checkbox, size: small */
  --checkbox-sm-padding-y: 0px;
  --checkbox-sm-padding-x: 0px;
  --checkbox-sm-padding-top: 0px;
  --checkbox-sm-padding-right: 0px;
  --checkbox-sm-padding-bottom: 0px;
  --checkbox-sm-padding-left: 0px;
  --checkbox-sm-padding-start: 0px;
  --checkbox-sm-padding-end: 0px;
  --checkbox-sm-spacing: 10px;
  --checkbox-sm-opacity: 1;
  --checkbox-sm-color: rgba(0, 0, 0, 0);
  --checkbox-sm-border-width: 1px;
  --checkbox-sm-border-radius: 3px;
  --checkbox-sm-border-color: #000000;
  --checkbox-sm-border-style: solid;
  --checkbox-sm-width: 16px;
  --checkbox-sm-width-raw: 16;
  --checkbox-sm-height: 16px;
  --checkbox-sm-height-raw: 16;
  --checkbox-sm-label-font-family: "Inter";
  --checkbox-sm-label-font-size: 12px;
  --checkbox-sm-label-font-weight: 400;
  --checkbox-sm-label-line-height: 1.667;
  --checkbox-sm-label-letter-spacing: 0px;
  --checkbox-sm-label-text-align: left;
  --checkbox-sm-label-text-decoration: none;
  --checkbox-sm-label-text-transform: none;
  --checkbox-sm-label-color: #555555;
  --checkbox-sm-label-opacity: 1;
  --checkbox-sm-check-border-width: 1px;
  --checkbox-sm-check-border-radius: 3px;
  --checkbox-sm-check-border-color: #000000;
  --checkbox-sm-check-border-style: solid;
  --checkbox-sm-check-width: 16px;
  --checkbox-sm-check-width-raw: 16;
  --checkbox-sm-check-height: 16px;
  --checkbox-sm-check-height-raw: 16;
  --checkbox-sm-check-box-shadow: none;
  --checkbox-sm-check-color: #000000;
  --checkbox-sm-icon-width: 11.2px;
  --checkbox-sm-icon-width-raw: 11.2;
  --checkbox-sm-icon-height: 11.2px;
  --checkbox-sm-icon-height-raw: 11.2;
  --checkbox-sm-icon-color: #ffffff;
  /* Checkbox, size: medium */
  --checkbox-md-padding-y: 0px;
  --checkbox-md-padding-x: 0px;
  --checkbox-md-padding-top: 0px;
  --checkbox-md-padding-right: 0px;
  --checkbox-md-padding-bottom: 0px;
  --checkbox-md-padding-left: 0px;
  --checkbox-md-padding-start: 0px;
  --checkbox-md-padding-end: 0px;
  --checkbox-md-spacing: 12px;
  --checkbox-md-opacity: 1;
  --checkbox-md-color: rgba(0, 0, 0, 0);
  --checkbox-md-border-width: 1px;
  --checkbox-md-border-radius: 3px;
  --checkbox-md-border-color: #000000;
  --checkbox-md-border-style: solid;
  --checkbox-md-width: 18px;
  --checkbox-md-width-raw: 18;
  --checkbox-md-height: 18px;
  --checkbox-md-height-raw: 18;
  --checkbox-md-label-font-family: "Inter";
  --checkbox-md-label-font-size: 16px;
  --checkbox-md-label-font-weight: 400;
  --checkbox-md-label-line-height: 1;
  --checkbox-md-label-letter-spacing: 0px;
  --checkbox-md-label-text-align: left;
  --checkbox-md-label-text-decoration: none;
  --checkbox-md-label-text-transform: none;
  --checkbox-md-label-color: #555555;
  --checkbox-md-label-opacity: 1;
  --checkbox-md-check-border-width: 1px;
  --checkbox-md-check-border-radius: 3px;
  --checkbox-md-check-border-color: #000000;
  --checkbox-md-check-border-style: solid;
  --checkbox-md-check-width: 18px;
  --checkbox-md-check-width-raw: 18;
  --checkbox-md-check-height: 18px;
  --checkbox-md-check-height-raw: 18;
  --checkbox-md-check-box-shadow: none;
  --checkbox-md-check-color: #000000;
  --checkbox-md-icon-width: 12.6px;
  --checkbox-md-icon-width-raw: 12.6;
  --checkbox-md-icon-height: 12.6px;
  --checkbox-md-icon-height-raw: 12.6;
  --checkbox-md-icon-color: #ffffff;
  /* Checkbox, size: large */
  --checkbox-lg-padding-y: 0px;
  --checkbox-lg-padding-x: 0px;
  --checkbox-lg-padding-top: 0px;
  --checkbox-lg-padding-right: 0px;
  --checkbox-lg-padding-bottom: 0px;
  --checkbox-lg-padding-left: 0px;
  --checkbox-lg-padding-start: 0px;
  --checkbox-lg-padding-end: 0px;
  --checkbox-lg-spacing: 14px;
  --checkbox-lg-opacity: 1;
  --checkbox-lg-color: rgba(0, 0, 0, 0);
  --checkbox-lg-border-width: 1px;
  --checkbox-lg-border-radius: 3px;
  --checkbox-lg-border-color: #000000;
  --checkbox-lg-border-style: solid;
  --checkbox-lg-width: 20px;
  --checkbox-lg-width-raw: 20;
  --checkbox-lg-height: 20px;
  --checkbox-lg-height-raw: 20;
  --checkbox-lg-label-font-family: "Inter";
  --checkbox-lg-label-font-size: 18px;
  --checkbox-lg-label-font-weight: 400;
  --checkbox-lg-label-line-height: 1.111;
  --checkbox-lg-label-letter-spacing: 0px;
  --checkbox-lg-label-text-align: left;
  --checkbox-lg-label-text-decoration: none;
  --checkbox-lg-label-text-transform: none;
  --checkbox-lg-label-color: #555555;
  --checkbox-lg-label-opacity: 1;
  --checkbox-lg-check-border-width: 1px;
  --checkbox-lg-check-border-radius: 3px;
  --checkbox-lg-check-border-color: #000000;
  --checkbox-lg-check-border-style: solid;
  --checkbox-lg-check-width: 20px;
  --checkbox-lg-check-width-raw: 20;
  --checkbox-lg-check-height: 20px;
  --checkbox-lg-check-height-raw: 20;
  --checkbox-lg-check-box-shadow: none;
  --checkbox-lg-check-color: #000000;
  --checkbox-lg-icon-width: 14px;
  --checkbox-lg-icon-width-raw: 14;
  --checkbox-lg-icon-height: 14px;
  --checkbox-lg-icon-height-raw: 14;
  --checkbox-lg-icon-color: #ffffff;
}

.input {
  /* Input, state: disabled, theme: dark */
  --input-dark-disabled-background: #cccccc;
  --input-dark-disabled-border-width: 1px;
  --input-dark-disabled-border-radius: 0px;
  --input-dark-disabled-border-color: transparent;
  --input-dark-disabled-border-style: solid;
  --input-dark-disabled-padding-y: 15px;
  --input-dark-disabled-padding-x: 20px;
  --input-dark-disabled-padding-top: 15px;
  --input-dark-disabled-padding-right: 20px;
  --input-dark-disabled-padding-bottom: 15px;
  --input-dark-disabled-padding-left: 20px;
  --input-dark-disabled-padding-start: 20px;
  --input-dark-disabled-padding-end: 20px;
  --input-dark-disabled-spacing: 12px;
  --input-dark-disabled-box-shadow: none;
  --input-dark-disabled-font-family: "Inter";
  --input-dark-disabled-font-size: 16px;
  --input-dark-disabled-font-weight: 400;
  --input-dark-disabled-line-height: 1;
  --input-dark-disabled-letter-spacing: 0px;
  --input-dark-disabled-text-align: left;
  --input-dark-disabled-text-decoration: none;
  --input-dark-disabled-text-transform: none;
  --input-dark-disabled-color: #555555;
  --input-label-dark-disabled-padding-y: 0px;
  --input-label-dark-disabled-padding-x: 0px;
  --input-label-dark-disabled-padding-top: 0px;
  --input-label-dark-disabled-padding-right: 0px;
  --input-label-dark-disabled-padding-bottom: 0px;
  --input-label-dark-disabled-padding-left: 0px;
  --input-label-dark-disabled-padding-start: 0px;
  --input-label-dark-disabled-padding-end: 0px;
  --input-label-dark-disabled-spacing: 0px;
  --input-label-dark-disabled-font-family: "Inter";
  --input-label-dark-disabled-font-size: 12px;
  --input-label-dark-disabled-font-weight: 400;
  --input-label-dark-disabled-line-height: 1.6;
  --input-label-dark-disabled-letter-spacing: -.24px;
  --input-label-dark-disabled-text-align: left;
  --input-label-dark-disabled-text-decoration: none;
  --input-label-dark-disabled-text-transform: none;
  --input-label-dark-disabled-color: rgba(255, 255, 255, .45);
  --input-text-dark-disabled-font-family: "Inter";
  --input-text-dark-disabled-font-size: 16px;
  --input-text-dark-disabled-font-weight: 400;
  --input-text-dark-disabled-line-height: 1;
  --input-text-dark-disabled-letter-spacing: 0px;
  --input-text-dark-disabled-text-align: left;
  --input-text-dark-disabled-text-decoration: none;
  --input-text-dark-disabled-text-transform: none;
  --input-text-dark-disabled-color: #555555;
  --input-icon-dark-disabled-border-width: 2px;
  --input-icon-dark-disabled-border-radius: 0px;
  --input-icon-dark-disabled-border-color: #000000;
  --input-icon-dark-disabled-border-style: solid;
  --input-additional-info-dark-disabled-padding-y: 0px;
  --input-additional-info-dark-disabled-padding-x: 0px;
  --input-additional-info-dark-disabled-padding-top: 0px;
  --input-additional-info-dark-disabled-padding-right: 0px;
  --input-additional-info-dark-disabled-padding-bottom: 0px;
  --input-additional-info-dark-disabled-padding-left: 0px;
  --input-additional-info-dark-disabled-padding-start: 0px;
  --input-additional-info-dark-disabled-padding-end: 0px;
  --input-additional-info-dark-disabled-spacing: 0px;
  --input-additional-info-dark-disabled-font-family: "Inter";
  --input-additional-info-dark-disabled-font-size: 12px;
  --input-additional-info-dark-disabled-font-weight: 400;
  --input-additional-info-dark-disabled-line-height: 1.6;
  --input-additional-info-dark-disabled-letter-spacing: -.24px;
  --input-additional-info-dark-disabled-text-align: left;
  --input-additional-info-dark-disabled-text-decoration: none;
  --input-additional-info-dark-disabled-text-transform: none;
  --input-additional-info-dark-disabled-color: rgba(255, 255, 255, .45);
  /* Input, state: error, theme: dark */
  --input-dark-error-background: #f8f8f8;
  --input-dark-error-border-width: 1px;
  --input-dark-error-border-radius: 0px;
  --input-dark-error-border-color: #f35d6c;
  --input-dark-error-border-style: solid;
  --input-dark-error-padding-y: 15px;
  --input-dark-error-padding-x: 20px;
  --input-dark-error-padding-top: 15px;
  --input-dark-error-padding-right: 20px;
  --input-dark-error-padding-bottom: 15px;
  --input-dark-error-padding-left: 20px;
  --input-dark-error-padding-start: 20px;
  --input-dark-error-padding-end: 20px;
  --input-dark-error-spacing: 12px;
  --input-dark-error-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --input-dark-error-font-family: "Inter";
  --input-dark-error-font-size: 16px;
  --input-dark-error-font-weight: 400;
  --input-dark-error-line-height: 1;
  --input-dark-error-letter-spacing: 0px;
  --input-dark-error-text-align: left;
  --input-dark-error-text-decoration: none;
  --input-dark-error-text-transform: none;
  --input-dark-error-color: #555555;
  --input-label-dark-error-padding-y: 0px;
  --input-label-dark-error-padding-x: 0px;
  --input-label-dark-error-padding-top: 0px;
  --input-label-dark-error-padding-right: 0px;
  --input-label-dark-error-padding-bottom: 0px;
  --input-label-dark-error-padding-left: 0px;
  --input-label-dark-error-padding-start: 0px;
  --input-label-dark-error-padding-end: 0px;
  --input-label-dark-error-spacing: 0px;
  --input-label-dark-error-font-family: "Inter";
  --input-label-dark-error-font-size: 12px;
  --input-label-dark-error-font-weight: 400;
  --input-label-dark-error-line-height: 1.6;
  --input-label-dark-error-letter-spacing: -.24px;
  --input-label-dark-error-text-align: left;
  --input-label-dark-error-text-decoration: none;
  --input-label-dark-error-text-transform: none;
  --input-label-dark-error-color: rgba(255, 255, 255, .65);
  --input-text-dark-error-font-family: "Inter";
  --input-text-dark-error-font-size: 16px;
  --input-text-dark-error-font-weight: 400;
  --input-text-dark-error-line-height: 1;
  --input-text-dark-error-letter-spacing: 0px;
  --input-text-dark-error-text-align: left;
  --input-text-dark-error-text-decoration: none;
  --input-text-dark-error-text-transform: none;
  --input-text-dark-error-color: #555555;
  --input-icon-dark-error-border-width: 2px;
  --input-icon-dark-error-border-radius: 0px;
  --input-icon-dark-error-border-color: #000000;
  --input-icon-dark-error-border-style: solid;
  --input-additional-info-dark-error-padding-y: 0px;
  --input-additional-info-dark-error-padding-x: 0px;
  --input-additional-info-dark-error-padding-top: 0px;
  --input-additional-info-dark-error-padding-right: 0px;
  --input-additional-info-dark-error-padding-bottom: 0px;
  --input-additional-info-dark-error-padding-left: 0px;
  --input-additional-info-dark-error-padding-start: 0px;
  --input-additional-info-dark-error-padding-end: 0px;
  --input-additional-info-dark-error-spacing: 0px;
  --input-additional-info-dark-error-font-family: "Inter";
  --input-additional-info-dark-error-font-size: 12px;
  --input-additional-info-dark-error-font-weight: 400;
  --input-additional-info-dark-error-line-height: 1.6;
  --input-additional-info-dark-error-letter-spacing: -.24px;
  --input-additional-info-dark-error-text-align: left;
  --input-additional-info-dark-error-text-decoration: none;
  --input-additional-info-dark-error-text-transform: none;
  --input-additional-info-dark-error-color: #f35d6c;
  /* Input, state: complete, theme: dark */
  --input-dark-complete-background: #f8f8f8;
  --input-dark-complete-border-width: 1px;
  --input-dark-complete-border-radius: 0px;
  --input-dark-complete-border-color: rgba(0, 0, 0, 0);
  --input-dark-complete-border-style: solid;
  --input-dark-complete-padding-y: 15px;
  --input-dark-complete-padding-x: 20px;
  --input-dark-complete-padding-top: 15px;
  --input-dark-complete-padding-right: 20px;
  --input-dark-complete-padding-bottom: 15px;
  --input-dark-complete-padding-left: 20px;
  --input-dark-complete-padding-start: 20px;
  --input-dark-complete-padding-end: 20px;
  --input-dark-complete-spacing: 12px;
  --input-dark-complete-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --input-dark-complete-font-family: "Inter";
  --input-dark-complete-font-size: 16px;
  --input-dark-complete-font-weight: 400;
  --input-dark-complete-line-height: 1;
  --input-dark-complete-letter-spacing: 0px;
  --input-dark-complete-text-align: left;
  --input-dark-complete-text-decoration: none;
  --input-dark-complete-text-transform: none;
  --input-dark-complete-color: #000000;
  --input-label-dark-complete-padding-y: 0px;
  --input-label-dark-complete-padding-x: 0px;
  --input-label-dark-complete-padding-top: 0px;
  --input-label-dark-complete-padding-right: 0px;
  --input-label-dark-complete-padding-bottom: 0px;
  --input-label-dark-complete-padding-left: 0px;
  --input-label-dark-complete-padding-start: 0px;
  --input-label-dark-complete-padding-end: 0px;
  --input-label-dark-complete-spacing: 0px;
  --input-label-dark-complete-font-family: "Inter";
  --input-label-dark-complete-font-size: 12px;
  --input-label-dark-complete-font-weight: 400;
  --input-label-dark-complete-line-height: 1.6;
  --input-label-dark-complete-letter-spacing: -.24px;
  --input-label-dark-complete-text-align: left;
  --input-label-dark-complete-text-decoration: none;
  --input-label-dark-complete-text-transform: none;
  --input-label-dark-complete-color: rgba(255, 255, 255, .65);
  --input-text-dark-complete-font-family: "Inter";
  --input-text-dark-complete-font-size: 16px;
  --input-text-dark-complete-font-weight: 400;
  --input-text-dark-complete-line-height: 1;
  --input-text-dark-complete-letter-spacing: 0px;
  --input-text-dark-complete-text-align: left;
  --input-text-dark-complete-text-decoration: none;
  --input-text-dark-complete-text-transform: none;
  --input-text-dark-complete-color: #000000;
  --input-icon-dark-complete-border-width: 2px;
  --input-icon-dark-complete-border-radius: 0px;
  --input-icon-dark-complete-border-color: #000000;
  --input-icon-dark-complete-border-style: solid;
  --input-additional-info-dark-complete-padding-y: 0px;
  --input-additional-info-dark-complete-padding-x: 0px;
  --input-additional-info-dark-complete-padding-top: 0px;
  --input-additional-info-dark-complete-padding-right: 0px;
  --input-additional-info-dark-complete-padding-bottom: 0px;
  --input-additional-info-dark-complete-padding-left: 0px;
  --input-additional-info-dark-complete-padding-start: 0px;
  --input-additional-info-dark-complete-padding-end: 0px;
  --input-additional-info-dark-complete-spacing: 0px;
  --input-additional-info-dark-complete-font-family: "Inter";
  --input-additional-info-dark-complete-font-size: 12px;
  --input-additional-info-dark-complete-font-weight: 400;
  --input-additional-info-dark-complete-line-height: 1.6;
  --input-additional-info-dark-complete-letter-spacing: -.24px;
  --input-additional-info-dark-complete-text-align: left;
  --input-additional-info-dark-complete-text-decoration: none;
  --input-additional-info-dark-complete-text-transform: none;
  --input-additional-info-dark-complete-color: rgba(255, 255, 255, .65);
  /* Input, state: active, theme: dark */
  --input-dark-active-background: #ffffff;
  --input-dark-active-border-width: 1px;
  --input-dark-active-border-radius: 0px;
  --input-dark-active-border-color: rgba(0, 0, 0, 0);
  --input-dark-active-border-style: solid;
  --input-dark-active-padding-y: 15px;
  --input-dark-active-padding-x: 20px;
  --input-dark-active-padding-top: 15px;
  --input-dark-active-padding-right: 20px;
  --input-dark-active-padding-bottom: 15px;
  --input-dark-active-padding-left: 20px;
  --input-dark-active-padding-start: 20px;
  --input-dark-active-padding-end: 20px;
  --input-dark-active-spacing: 12px;
  --input-dark-active-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --input-dark-active-font-family: "Inter";
  --input-dark-active-font-size: 16px;
  --input-dark-active-font-weight: 400;
  --input-dark-active-line-height: 1;
  --input-dark-active-letter-spacing: 0px;
  --input-dark-active-text-align: left;
  --input-dark-active-text-decoration: none;
  --input-dark-active-text-transform: none;
  --input-dark-active-color: #000000;
  --input-label-dark-active-padding-y: 0px;
  --input-label-dark-active-padding-x: 0px;
  --input-label-dark-active-padding-top: 0px;
  --input-label-dark-active-padding-right: 0px;
  --input-label-dark-active-padding-bottom: 0px;
  --input-label-dark-active-padding-left: 0px;
  --input-label-dark-active-padding-start: 0px;
  --input-label-dark-active-padding-end: 0px;
  --input-label-dark-active-spacing: 0px;
  --input-label-dark-active-font-family: "Inter";
  --input-label-dark-active-font-size: 12px;
  --input-label-dark-active-font-weight: 400;
  --input-label-dark-active-line-height: 1.6;
  --input-label-dark-active-letter-spacing: -.24px;
  --input-label-dark-active-text-align: left;
  --input-label-dark-active-text-decoration: none;
  --input-label-dark-active-text-transform: none;
  --input-label-dark-active-color: rgba(255, 255, 255, .85);
  --input-text-dark-active-font-family: "Inter";
  --input-text-dark-active-font-size: 16px;
  --input-text-dark-active-font-weight: 400;
  --input-text-dark-active-line-height: 1;
  --input-text-dark-active-letter-spacing: 0px;
  --input-text-dark-active-text-align: left;
  --input-text-dark-active-text-decoration: none;
  --input-text-dark-active-text-transform: none;
  --input-text-dark-active-color: #000000;
  --input-icon-dark-active-border-width: 2px;
  --input-icon-dark-active-border-radius: 0px;
  --input-icon-dark-active-border-color: #000000;
  --input-icon-dark-active-border-style: solid;
  --input-additional-info-dark-active-padding-y: 0px;
  --input-additional-info-dark-active-padding-x: 0px;
  --input-additional-info-dark-active-padding-top: 0px;
  --input-additional-info-dark-active-padding-right: 0px;
  --input-additional-info-dark-active-padding-bottom: 0px;
  --input-additional-info-dark-active-padding-left: 0px;
  --input-additional-info-dark-active-padding-start: 0px;
  --input-additional-info-dark-active-padding-end: 0px;
  --input-additional-info-dark-active-spacing: 0px;
  --input-additional-info-dark-active-font-family: "Inter";
  --input-additional-info-dark-active-font-size: 12px;
  --input-additional-info-dark-active-font-weight: 400;
  --input-additional-info-dark-active-line-height: 1.6;
  --input-additional-info-dark-active-letter-spacing: -.24px;
  --input-additional-info-dark-active-text-align: left;
  --input-additional-info-dark-active-text-decoration: none;
  --input-additional-info-dark-active-text-transform: none;
  --input-additional-info-dark-active-color: rgba(255, 255, 255, .65);
  /* Input, state: hover, theme: dark */
  --input-dark-hover-background: #ffffff;
  --input-dark-hover-border-width: 1px;
  --input-dark-hover-border-radius: 0px;
  --input-dark-hover-border-color: rgba(0, 0, 0, 0);
  --input-dark-hover-border-style: solid;
  --input-dark-hover-padding-y: 15px;
  --input-dark-hover-padding-x: 20px;
  --input-dark-hover-padding-top: 15px;
  --input-dark-hover-padding-right: 20px;
  --input-dark-hover-padding-bottom: 15px;
  --input-dark-hover-padding-left: 20px;
  --input-dark-hover-padding-start: 20px;
  --input-dark-hover-padding-end: 20px;
  --input-dark-hover-spacing: 12px;
  --input-dark-hover-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --input-dark-hover-font-family: "Inter";
  --input-dark-hover-font-size: 16px;
  --input-dark-hover-font-weight: 400;
  --input-dark-hover-line-height: 1;
  --input-dark-hover-letter-spacing: 0px;
  --input-dark-hover-text-align: left;
  --input-dark-hover-text-decoration: none;
  --input-dark-hover-text-transform: none;
  --input-dark-hover-color: #555555;
  --input-label-dark-hover-padding-y: 0px;
  --input-label-dark-hover-padding-x: 0px;
  --input-label-dark-hover-padding-top: 0px;
  --input-label-dark-hover-padding-right: 0px;
  --input-label-dark-hover-padding-bottom: 0px;
  --input-label-dark-hover-padding-left: 0px;
  --input-label-dark-hover-padding-start: 0px;
  --input-label-dark-hover-padding-end: 0px;
  --input-label-dark-hover-spacing: 0px;
  --input-label-dark-hover-font-family: "Inter";
  --input-label-dark-hover-font-size: 12px;
  --input-label-dark-hover-font-weight: 400;
  --input-label-dark-hover-line-height: 1.6;
  --input-label-dark-hover-letter-spacing: -.24px;
  --input-label-dark-hover-text-align: left;
  --input-label-dark-hover-text-decoration: none;
  --input-label-dark-hover-text-transform: none;
  --input-label-dark-hover-color: rgba(255, 255, 255, .65);
  --input-text-dark-hover-font-family: "Inter";
  --input-text-dark-hover-font-size: 16px;
  --input-text-dark-hover-font-weight: 400;
  --input-text-dark-hover-line-height: 1;
  --input-text-dark-hover-letter-spacing: 0px;
  --input-text-dark-hover-text-align: left;
  --input-text-dark-hover-text-decoration: none;
  --input-text-dark-hover-text-transform: none;
  --input-text-dark-hover-color: #555555;
  --input-icon-dark-hover-border-width: 2px;
  --input-icon-dark-hover-border-radius: 0px;
  --input-icon-dark-hover-border-color: #000000;
  --input-icon-dark-hover-border-style: solid;
  --input-additional-info-dark-hover-padding-y: 0px;
  --input-additional-info-dark-hover-padding-x: 0px;
  --input-additional-info-dark-hover-padding-top: 0px;
  --input-additional-info-dark-hover-padding-right: 0px;
  --input-additional-info-dark-hover-padding-bottom: 0px;
  --input-additional-info-dark-hover-padding-left: 0px;
  --input-additional-info-dark-hover-padding-start: 0px;
  --input-additional-info-dark-hover-padding-end: 0px;
  --input-additional-info-dark-hover-spacing: 0px;
  --input-additional-info-dark-hover-font-family: "Inter";
  --input-additional-info-dark-hover-font-size: 12px;
  --input-additional-info-dark-hover-font-weight: 400;
  --input-additional-info-dark-hover-line-height: 1.6;
  --input-additional-info-dark-hover-letter-spacing: -.24px;
  --input-additional-info-dark-hover-text-align: left;
  --input-additional-info-dark-hover-text-decoration: none;
  --input-additional-info-dark-hover-text-transform: none;
  --input-additional-info-dark-hover-color: rgba(255, 255, 255, .65);
  /* Input, state: default, theme: dark */
  --input-dark-background: #f8f8f8;
  --input-dark-border-width: 1px;
  --input-dark-border-radius: 0px;
  --input-dark-border-color: rgba(0, 0, 0, 0);
  --input-dark-border-style: solid;
  --input-dark-padding-y: 15px;
  --input-dark-padding-x: 20px;
  --input-dark-padding-top: 15px;
  --input-dark-padding-right: 20px;
  --input-dark-padding-bottom: 15px;
  --input-dark-padding-left: 20px;
  --input-dark-padding-start: 20px;
  --input-dark-padding-end: 20px;
  --input-dark-spacing: 12px;
  --input-dark-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --input-dark-font-family: "Inter";
  --input-dark-font-size: 16px;
  --input-dark-font-weight: 400;
  --input-dark-line-height: 1;
  --input-dark-letter-spacing: 0px;
  --input-dark-text-align: left;
  --input-dark-text-decoration: none;
  --input-dark-text-transform: none;
  --input-dark-color: #555555;
  --input-label-dark-padding-y: 0px;
  --input-label-dark-padding-x: 0px;
  --input-label-dark-padding-top: 0px;
  --input-label-dark-padding-right: 0px;
  --input-label-dark-padding-bottom: 0px;
  --input-label-dark-padding-left: 0px;
  --input-label-dark-padding-start: 0px;
  --input-label-dark-padding-end: 0px;
  --input-label-dark-spacing: 0px;
  --input-label-dark-font-family: "Inter";
  --input-label-dark-font-size: 12px;
  --input-label-dark-font-weight: 400;
  --input-label-dark-line-height: 1.6;
  --input-label-dark-letter-spacing: -.24px;
  --input-label-dark-text-align: left;
  --input-label-dark-text-decoration: none;
  --input-label-dark-text-transform: none;
  --input-label-dark-color: rgba(255, 255, 255, .65);
  --input-text-dark-font-family: "Inter";
  --input-text-dark-font-size: 16px;
  --input-text-dark-font-weight: 400;
  --input-text-dark-line-height: 1;
  --input-text-dark-letter-spacing: 0px;
  --input-text-dark-text-align: left;
  --input-text-dark-text-decoration: none;
  --input-text-dark-text-transform: none;
  --input-text-dark-color: #555555;
  --input-icon-dark-border-width: 2px;
  --input-icon-dark-border-radius: 0px;
  --input-icon-dark-border-color: #000000;
  --input-icon-dark-border-style: solid;
  --input-additional-info-dark-padding-y: 0px;
  --input-additional-info-dark-padding-x: 0px;
  --input-additional-info-dark-padding-top: 0px;
  --input-additional-info-dark-padding-right: 0px;
  --input-additional-info-dark-padding-bottom: 0px;
  --input-additional-info-dark-padding-left: 0px;
  --input-additional-info-dark-padding-start: 0px;
  --input-additional-info-dark-padding-end: 0px;
  --input-additional-info-dark-spacing: 0px;
  --input-additional-info-dark-font-family: "Inter";
  --input-additional-info-dark-font-size: 12px;
  --input-additional-info-dark-font-weight: 400;
  --input-additional-info-dark-line-height: 1.6;
  --input-additional-info-dark-letter-spacing: -.24px;
  --input-additional-info-dark-text-align: left;
  --input-additional-info-dark-text-decoration: none;
  --input-additional-info-dark-text-transform: none;
  --input-additional-info-dark-color: rgba(255, 255, 255, .65);
  /* Input, state: disabled, theme: light */
  --input-disabled-background: #f8f8f8;
  --input-disabled-border-width: 1px;
  --input-disabled-border-radius: 0px;
  --input-disabled-border-color: transparent;
  --input-disabled-border-style: solid;
  --input-disabled-padding-y: 15px;
  --input-disabled-padding-x: 20px;
  --input-disabled-padding-top: 15px;
  --input-disabled-padding-right: 20px;
  --input-disabled-padding-bottom: 15px;
  --input-disabled-padding-left: 20px;
  --input-disabled-padding-start: 20px;
  --input-disabled-padding-end: 20px;
  --input-disabled-spacing: 12px;
  --input-disabled-box-shadow: none;
  --input-disabled-font-family: "Inter";
  --input-disabled-font-size: 16px;
  --input-disabled-font-weight: 400;
  --input-disabled-line-height: 1;
  --input-disabled-letter-spacing: 0px;
  --input-disabled-text-align: left;
  --input-disabled-text-decoration: none;
  --input-disabled-text-transform: none;
  --input-disabled-color: #777777;
  --input-label-disabled-padding-y: 0px;
  --input-label-disabled-padding-x: 0px;
  --input-label-disabled-padding-top: 0px;
  --input-label-disabled-padding-right: 0px;
  --input-label-disabled-padding-bottom: 0px;
  --input-label-disabled-padding-left: 0px;
  --input-label-disabled-padding-start: 0px;
  --input-label-disabled-padding-end: 0px;
  --input-label-disabled-spacing: 0px;
  --input-label-disabled-font-family: "Inter";
  --input-label-disabled-font-size: 12px;
  --input-label-disabled-font-weight: 400;
  --input-label-disabled-line-height: 1.6;
  --input-label-disabled-letter-spacing: -.24px;
  --input-label-disabled-text-align: left;
  --input-label-disabled-text-decoration: none;
  --input-label-disabled-text-transform: none;
  --input-label-disabled-color: #777777;
  --input-text-disabled-font-family: "Inter";
  --input-text-disabled-font-size: 16px;
  --input-text-disabled-font-weight: 400;
  --input-text-disabled-line-height: 1;
  --input-text-disabled-letter-spacing: 0px;
  --input-text-disabled-text-align: left;
  --input-text-disabled-text-decoration: none;
  --input-text-disabled-text-transform: none;
  --input-text-disabled-color: #777777;
  --input-icon-disabled-border-width: 2px;
  --input-icon-disabled-border-radius: 0px;
  --input-icon-disabled-border-color: #000000;
  --input-icon-disabled-border-style: solid;
  --input-additional-info-disabled-padding-y: 0px;
  --input-additional-info-disabled-padding-x: 0px;
  --input-additional-info-disabled-padding-top: 0px;
  --input-additional-info-disabled-padding-right: 0px;
  --input-additional-info-disabled-padding-bottom: 0px;
  --input-additional-info-disabled-padding-left: 0px;
  --input-additional-info-disabled-padding-start: 0px;
  --input-additional-info-disabled-padding-end: 0px;
  --input-additional-info-disabled-spacing: 0px;
  --input-additional-info-disabled-font-family: "Inter";
  --input-additional-info-disabled-font-size: 12px;
  --input-additional-info-disabled-font-weight: 400;
  --input-additional-info-disabled-line-height: 1.6;
  --input-additional-info-disabled-letter-spacing: -.24px;
  --input-additional-info-disabled-text-align: left;
  --input-additional-info-disabled-text-decoration: none;
  --input-additional-info-disabled-text-transform: none;
  --input-additional-info-disabled-color: #777777;
  /* Input, state: error, theme: light */
  --input-error-background: #ffffff;
  --input-error-border-width: 1px;
  --input-error-border-radius: 0px;
  --input-error-border-color: #dc3545;
  --input-error-border-style: solid;
  --input-error-padding-y: 15px;
  --input-error-padding-x: 20px;
  --input-error-padding-top: 15px;
  --input-error-padding-right: 20px;
  --input-error-padding-bottom: 15px;
  --input-error-padding-left: 20px;
  --input-error-padding-start: 20px;
  --input-error-padding-end: 20px;
  --input-error-spacing: 12px;
  --input-error-box-shadow: none;
  --input-error-font-family: "Inter";
  --input-error-font-size: 16px;
  --input-error-font-weight: 400;
  --input-error-line-height: 1;
  --input-error-letter-spacing: 0px;
  --input-error-text-align: left;
  --input-error-text-decoration: none;
  --input-error-text-transform: none;
  --input-error-color: #777777;
  --input-label-error-padding-y: 0px;
  --input-label-error-padding-x: 0px;
  --input-label-error-padding-top: 0px;
  --input-label-error-padding-right: 0px;
  --input-label-error-padding-bottom: 0px;
  --input-label-error-padding-left: 0px;
  --input-label-error-padding-start: 0px;
  --input-label-error-padding-end: 0px;
  --input-label-error-spacing: 0px;
  --input-label-error-font-family: "Inter";
  --input-label-error-font-size: 12px;
  --input-label-error-font-weight: 400;
  --input-label-error-line-height: 1.6;
  --input-label-error-letter-spacing: -.24px;
  --input-label-error-text-align: left;
  --input-label-error-text-decoration: none;
  --input-label-error-text-transform: none;
  --input-label-error-color: #555555;
  --input-text-error-font-family: "Inter";
  --input-text-error-font-size: 16px;
  --input-text-error-font-weight: 400;
  --input-text-error-line-height: 1;
  --input-text-error-letter-spacing: 0px;
  --input-text-error-text-align: left;
  --input-text-error-text-decoration: none;
  --input-text-error-text-transform: none;
  --input-text-error-color: #777777;
  --input-icon-error-border-width: 2px;
  --input-icon-error-border-radius: 0px;
  --input-icon-error-border-color: #000000;
  --input-icon-error-border-style: solid;
  --input-additional-info-error-padding-y: 0px;
  --input-additional-info-error-padding-x: 0px;
  --input-additional-info-error-padding-top: 0px;
  --input-additional-info-error-padding-right: 0px;
  --input-additional-info-error-padding-bottom: 0px;
  --input-additional-info-error-padding-left: 0px;
  --input-additional-info-error-padding-start: 0px;
  --input-additional-info-error-padding-end: 0px;
  --input-additional-info-error-spacing: 0px;
  --input-additional-info-error-font-family: "Inter";
  --input-additional-info-error-font-size: 12px;
  --input-additional-info-error-font-weight: 400;
  --input-additional-info-error-line-height: 1.6;
  --input-additional-info-error-letter-spacing: -.24px;
  --input-additional-info-error-text-align: left;
  --input-additional-info-error-text-decoration: none;
  --input-additional-info-error-text-transform: none;
  --input-additional-info-error-color: #dc3545;
  /* Input, state: complete, theme: light */
  --input-complete-background: #ffffff;
  --input-complete-border-width: 1px;
  --input-complete-border-radius: 0px;
  --input-complete-border-color: #e8e8e8;
  --input-complete-border-style: solid;
  --input-complete-padding-y: 15px;
  --input-complete-padding-x: 20px;
  --input-complete-padding-top: 15px;
  --input-complete-padding-right: 20px;
  --input-complete-padding-bottom: 15px;
  --input-complete-padding-left: 20px;
  --input-complete-padding-start: 20px;
  --input-complete-padding-end: 20px;
  --input-complete-spacing: 12px;
  --input-complete-box-shadow: none;
  --input-complete-font-family: "Inter";
  --input-complete-font-size: 16px;
  --input-complete-font-weight: 400;
  --input-complete-line-height: 1;
  --input-complete-letter-spacing: 0px;
  --input-complete-text-align: left;
  --input-complete-text-decoration: none;
  --input-complete-text-transform: none;
  --input-complete-color: #000000;
  --input-label-complete-padding-y: 0px;
  --input-label-complete-padding-x: 0px;
  --input-label-complete-padding-top: 0px;
  --input-label-complete-padding-right: 0px;
  --input-label-complete-padding-bottom: 0px;
  --input-label-complete-padding-left: 0px;
  --input-label-complete-padding-start: 0px;
  --input-label-complete-padding-end: 0px;
  --input-label-complete-spacing: 0px;
  --input-label-complete-font-family: "Inter";
  --input-label-complete-font-size: 12px;
  --input-label-complete-font-weight: 400;
  --input-label-complete-line-height: 1.6;
  --input-label-complete-letter-spacing: -.24px;
  --input-label-complete-text-align: left;
  --input-label-complete-text-decoration: none;
  --input-label-complete-text-transform: none;
  --input-label-complete-color: #555555;
  --input-text-complete-font-family: "Inter";
  --input-text-complete-font-size: 16px;
  --input-text-complete-font-weight: 400;
  --input-text-complete-line-height: 1;
  --input-text-complete-letter-spacing: 0px;
  --input-text-complete-text-align: left;
  --input-text-complete-text-decoration: none;
  --input-text-complete-text-transform: none;
  --input-text-complete-color: #000000;
  --input-icon-complete-border-width: 2px;
  --input-icon-complete-border-radius: 0px;
  --input-icon-complete-border-color: #000000;
  --input-icon-complete-border-style: solid;
  --input-additional-info-complete-padding-y: 0px;
  --input-additional-info-complete-padding-x: 0px;
  --input-additional-info-complete-padding-top: 0px;
  --input-additional-info-complete-padding-right: 0px;
  --input-additional-info-complete-padding-bottom: 0px;
  --input-additional-info-complete-padding-left: 0px;
  --input-additional-info-complete-padding-start: 0px;
  --input-additional-info-complete-padding-end: 0px;
  --input-additional-info-complete-spacing: 0px;
  --input-additional-info-complete-font-family: "Inter";
  --input-additional-info-complete-font-size: 12px;
  --input-additional-info-complete-font-weight: 400;
  --input-additional-info-complete-line-height: 1.6;
  --input-additional-info-complete-letter-spacing: -.24px;
  --input-additional-info-complete-text-align: left;
  --input-additional-info-complete-text-decoration: none;
  --input-additional-info-complete-text-transform: none;
  --input-additional-info-complete-color: #777777;
  /* Input, state: active, theme: light */
  --input-active-background: #ffffff;
  --input-active-border-width: 1px;
  --input-active-border-radius: 0px;
  --input-active-border-color: #929292;
  --input-active-border-style: solid;
  --input-active-padding-y: 15px;
  --input-active-padding-x: 20px;
  --input-active-padding-top: 15px;
  --input-active-padding-right: 20px;
  --input-active-padding-bottom: 15px;
  --input-active-padding-left: 20px;
  --input-active-padding-start: 20px;
  --input-active-padding-end: 20px;
  --input-active-spacing: 12px;
  --input-active-box-shadow: none;
  --input-active-font-family: "Inter";
  --input-active-font-size: 16px;
  --input-active-font-weight: 400;
  --input-active-line-height: 1;
  --input-active-letter-spacing: 0px;
  --input-active-text-align: left;
  --input-active-text-decoration: none;
  --input-active-text-transform: none;
  --input-active-color: #000000;
  --input-label-active-padding-y: 0px;
  --input-label-active-padding-x: 0px;
  --input-label-active-padding-top: 0px;
  --input-label-active-padding-right: 0px;
  --input-label-active-padding-bottom: 0px;
  --input-label-active-padding-left: 0px;
  --input-label-active-padding-start: 0px;
  --input-label-active-padding-end: 0px;
  --input-label-active-spacing: 0px;
  --input-label-active-font-family: "Inter";
  --input-label-active-font-size: 12px;
  --input-label-active-font-weight: 400;
  --input-label-active-line-height: 1.6;
  --input-label-active-letter-spacing: -.24px;
  --input-label-active-text-align: left;
  --input-label-active-text-decoration: none;
  --input-label-active-text-transform: none;
  --input-label-active-color: rgba(0, 0, 0, .8);
  --input-text-active-font-family: "Inter";
  --input-text-active-font-size: 16px;
  --input-text-active-font-weight: 400;
  --input-text-active-line-height: 1;
  --input-text-active-letter-spacing: 0px;
  --input-text-active-text-align: left;
  --input-text-active-text-decoration: none;
  --input-text-active-text-transform: none;
  --input-text-active-color: #000000;
  --input-icon-active-border-width: 2px;
  --input-icon-active-border-radius: 0px;
  --input-icon-active-border-color: #000000;
  --input-icon-active-border-style: solid;
  --input-additional-info-active-padding-y: 0px;
  --input-additional-info-active-padding-x: 0px;
  --input-additional-info-active-padding-top: 0px;
  --input-additional-info-active-padding-right: 0px;
  --input-additional-info-active-padding-bottom: 0px;
  --input-additional-info-active-padding-left: 0px;
  --input-additional-info-active-padding-start: 0px;
  --input-additional-info-active-padding-end: 0px;
  --input-additional-info-active-spacing: 0px;
  --input-additional-info-active-font-family: "Inter";
  --input-additional-info-active-font-size: 12px;
  --input-additional-info-active-font-weight: 400;
  --input-additional-info-active-line-height: 1.6;
  --input-additional-info-active-letter-spacing: -.24px;
  --input-additional-info-active-text-align: left;
  --input-additional-info-active-text-decoration: none;
  --input-additional-info-active-text-transform: none;
  --input-additional-info-active-color: #777777;
  /* Input, state: hover, theme: light */
  --input-hover-background: #ffffff;
  --input-hover-border-width: 1px;
  --input-hover-border-radius: 0px;
  --input-hover-border-color: #b3b3b3;
  --input-hover-border-style: solid;
  --input-hover-padding-y: 15px;
  --input-hover-padding-x: 20px;
  --input-hover-padding-top: 15px;
  --input-hover-padding-right: 20px;
  --input-hover-padding-bottom: 15px;
  --input-hover-padding-left: 20px;
  --input-hover-padding-start: 20px;
  --input-hover-padding-end: 20px;
  --input-hover-spacing: 12px;
  --input-hover-box-shadow: none;
  --input-hover-font-family: "Inter";
  --input-hover-font-size: 16px;
  --input-hover-font-weight: 400;
  --input-hover-line-height: 1;
  --input-hover-letter-spacing: 0px;
  --input-hover-text-align: left;
  --input-hover-text-decoration: none;
  --input-hover-text-transform: none;
  --input-hover-color: #777777;
  --input-label-hover-padding-y: 0px;
  --input-label-hover-padding-x: 0px;
  --input-label-hover-padding-top: 0px;
  --input-label-hover-padding-right: 0px;
  --input-label-hover-padding-bottom: 0px;
  --input-label-hover-padding-left: 0px;
  --input-label-hover-padding-start: 0px;
  --input-label-hover-padding-end: 0px;
  --input-label-hover-spacing: 0px;
  --input-label-hover-font-family: "Inter";
  --input-label-hover-font-size: 12px;
  --input-label-hover-font-weight: 400;
  --input-label-hover-line-height: 1.6;
  --input-label-hover-letter-spacing: -.24px;
  --input-label-hover-text-align: left;
  --input-label-hover-text-decoration: none;
  --input-label-hover-text-transform: none;
  --input-label-hover-color: #555555;
  --input-text-hover-font-family: "Inter";
  --input-text-hover-font-size: 16px;
  --input-text-hover-font-weight: 400;
  --input-text-hover-line-height: 1;
  --input-text-hover-letter-spacing: 0px;
  --input-text-hover-text-align: left;
  --input-text-hover-text-decoration: none;
  --input-text-hover-text-transform: none;
  --input-text-hover-color: #777777;
  --input-icon-hover-border-width: 2px;
  --input-icon-hover-border-radius: 0px;
  --input-icon-hover-border-color: #000000;
  --input-icon-hover-border-style: solid;
  --input-additional-info-hover-padding-y: 0px;
  --input-additional-info-hover-padding-x: 0px;
  --input-additional-info-hover-padding-top: 0px;
  --input-additional-info-hover-padding-right: 0px;
  --input-additional-info-hover-padding-bottom: 0px;
  --input-additional-info-hover-padding-left: 0px;
  --input-additional-info-hover-padding-start: 0px;
  --input-additional-info-hover-padding-end: 0px;
  --input-additional-info-hover-spacing: 0px;
  --input-additional-info-hover-font-family: "Inter";
  --input-additional-info-hover-font-size: 12px;
  --input-additional-info-hover-font-weight: 400;
  --input-additional-info-hover-line-height: 1.6;
  --input-additional-info-hover-letter-spacing: -.24px;
  --input-additional-info-hover-text-align: left;
  --input-additional-info-hover-text-decoration: none;
  --input-additional-info-hover-text-transform: none;
  --input-additional-info-hover-color: #777777;
  /* Input, state: default, theme: light */
  --input-background: #ffffff;
  --input-border-width: 1px;
  --input-border-radius: 0px;
  --input-border-color: rgba(191, 191, 191, .5);
  --input-border-style: solid;
  --input-padding-y: 15px;
  --input-padding-x: 20px;
  --input-padding-top: 15px;
  --input-padding-right: 20px;
  --input-padding-bottom: 15px;
  --input-padding-left: 20px;
  --input-padding-start: 20px;
  --input-padding-end: 20px;
  --input-spacing: 12px;
  --input-box-shadow: none;
  --input-font-family: "Inter";
  --input-font-size: 16px;
  --input-font-weight: 400;
  --input-line-height: 1;
  --input-letter-spacing: 0px;
  --input-text-align: left;
  --input-text-decoration: none;
  --input-text-transform: none;
  --input-color: #000000;
  --input-label-padding-y: 0px;
  --input-label-padding-x: 0px;
  --input-label-padding-top: 0px;
  --input-label-padding-right: 0px;
  --input-label-padding-bottom: 0px;
  --input-label-padding-left: 0px;
  --input-label-padding-start: 0px;
  --input-label-padding-end: 0px;
  --input-label-spacing: 0px;
  --input-label-font-family: "Inter";
  --input-label-font-size: 12px;
  --input-label-font-weight: 400;
  --input-label-line-height: 1.6;
  --input-label-letter-spacing: -.24px;
  --input-label-text-align: left;
  --input-label-text-decoration: none;
  --input-label-text-transform: none;
  --input-label-color: #555555;
  --input-text-font-family: "Inter";
  --input-text-font-size: 16px;
  --input-text-font-weight: 400;
  --input-text-line-height: 1;
  --input-text-letter-spacing: 0px;
  --input-text-text-align: left;
  --input-text-text-decoration: none;
  --input-text-text-transform: none;
  --input-text-color: #000000;
  --input-icon-border-width: 2px;
  --input-icon-border-radius: 0px;
  --input-icon-border-color: #000000;
  --input-icon-border-style: solid;
  --input-additional-info-padding-y: 0px;
  --input-additional-info-padding-x: 0px;
  --input-additional-info-padding-top: 0px;
  --input-additional-info-padding-right: 0px;
  --input-additional-info-padding-bottom: 0px;
  --input-additional-info-padding-left: 0px;
  --input-additional-info-padding-start: 0px;
  --input-additional-info-padding-end: 0px;
  --input-additional-info-spacing: 0px;
  --input-additional-info-font-family: "Inter";
  --input-additional-info-font-size: 12px;
  --input-additional-info-font-weight: 400;
  --input-additional-info-line-height: 1.6;
  --input-additional-info-letter-spacing: -.24px;
  --input-additional-info-text-align: left;
  --input-additional-info-text-decoration: none;
  --input-additional-info-text-transform: none;
  --input-additional-info-color: #777777;
  /* Input, size: small */
  --input-sm-background: rgba(0, 0, 0, 0);
  --input-sm-border-width: 1px;
  --input-sm-border-radius: 0px;
  --input-sm-border-color: #000000;
  --input-sm-border-style: solid;
  --input-sm-padding-y: 10px;
  --input-sm-padding-x: 16px;
  --input-sm-padding-top: 10px;
  --input-sm-padding-right: 16px;
  --input-sm-padding-bottom: 10px;
  --input-sm-padding-left: 16px;
  --input-sm-padding-start: 16px;
  --input-sm-padding-end: 16px;
  --input-sm-spacing: 12px;
  --input-sm-box-shadow: none;
  --input-sm-font-family: "Inter";
  --input-sm-font-size: 12px;
  --input-sm-font-weight: 400;
  --input-sm-line-height: 1.667;
  --input-sm-letter-spacing: 0px;
  --input-sm-text-align: left;
  --input-sm-text-decoration: none;
  --input-sm-text-transform: none;
  --input-sm-color: #555555;
  --input-sm-label-padding-y: 0px;
  --input-sm-label-padding-x: 0px;
  --input-sm-label-padding-top: 0px;
  --input-sm-label-padding-right: 0px;
  --input-sm-label-padding-bottom: 0px;
  --input-sm-label-padding-left: 0px;
  --input-sm-label-padding-start: 0px;
  --input-sm-label-padding-end: 0px;
  --input-sm-label-spacing: 0px;
  --input-sm-label-font-family: "Inter";
  --input-sm-label-font-size: 12px;
  --input-sm-label-font-weight: 400;
  --input-sm-label-line-height: 1.6;
  --input-sm-label-letter-spacing: -.24px;
  --input-sm-label-text-align: left;
  --input-sm-label-text-decoration: none;
  --input-sm-label-text-transform: none;
  --input-sm-label-color: #555555;
  --input-sm-text-font-family: "Inter";
  --input-sm-text-font-size: 12px;
  --input-sm-text-font-weight: 400;
  --input-sm-text-line-height: 1.667;
  --input-sm-text-letter-spacing: 0px;
  --input-sm-text-text-align: left;
  --input-sm-text-text-decoration: none;
  --input-sm-text-text-transform: none;
  --input-sm-text-color: #555555;
  --input-sm-icon-border-width: 2px;
  --input-sm-icon-border-radius: 0px;
  --input-sm-icon-border-color: #000000;
  --input-sm-icon-border-style: solid;
  --input-sm-additional-info-padding-y: 0px;
  --input-sm-additional-info-padding-x: 0px;
  --input-sm-additional-info-padding-top: 0px;
  --input-sm-additional-info-padding-right: 0px;
  --input-sm-additional-info-padding-bottom: 0px;
  --input-sm-additional-info-padding-left: 0px;
  --input-sm-additional-info-padding-start: 0px;
  --input-sm-additional-info-padding-end: 0px;
  --input-sm-additional-info-spacing: 0px;
  --input-sm-additional-info-font-family: "Inter";
  --input-sm-additional-info-font-size: 12px;
  --input-sm-additional-info-font-weight: 400;
  --input-sm-additional-info-line-height: 1.6;
  --input-sm-additional-info-letter-spacing: -.24px;
  --input-sm-additional-info-text-align: left;
  --input-sm-additional-info-text-decoration: none;
  --input-sm-additional-info-text-transform: none;
  --input-sm-additional-info-color: #555555;
  /* Input, size: medium */
  --input-md-background: rgba(0, 0, 0, 0);
  --input-md-border-width: 1px;
  --input-md-border-radius: 0px;
  --input-md-border-color: #000000;
  --input-md-border-style: solid;
  --input-md-padding-y: 15px;
  --input-md-padding-x: 20px;
  --input-md-padding-top: 15px;
  --input-md-padding-right: 20px;
  --input-md-padding-bottom: 15px;
  --input-md-padding-left: 20px;
  --input-md-padding-start: 20px;
  --input-md-padding-end: 20px;
  --input-md-spacing: 12px;
  --input-md-box-shadow: none;
  --input-md-font-family: "Inter";
  --input-md-font-size: 16px;
  --input-md-font-weight: 400;
  --input-md-line-height: 1;
  --input-md-letter-spacing: 0px;
  --input-md-text-align: left;
  --input-md-text-decoration: none;
  --input-md-text-transform: none;
  --input-md-color: #555555;
  --input-md-label-padding-y: 0px;
  --input-md-label-padding-x: 0px;
  --input-md-label-padding-top: 0px;
  --input-md-label-padding-right: 0px;
  --input-md-label-padding-bottom: 0px;
  --input-md-label-padding-left: 0px;
  --input-md-label-padding-start: 0px;
  --input-md-label-padding-end: 0px;
  --input-md-label-spacing: 0px;
  --input-md-label-font-family: "Inter";
  --input-md-label-font-size: 12px;
  --input-md-label-font-weight: 400;
  --input-md-label-line-height: 1.6;
  --input-md-label-letter-spacing: -.24px;
  --input-md-label-text-align: left;
  --input-md-label-text-decoration: none;
  --input-md-label-text-transform: none;
  --input-md-label-color: #555555;
  --input-md-text-font-family: "Inter";
  --input-md-text-font-size: 16px;
  --input-md-text-font-weight: 400;
  --input-md-text-line-height: 1;
  --input-md-text-letter-spacing: 0px;
  --input-md-text-text-align: left;
  --input-md-text-text-decoration: none;
  --input-md-text-text-transform: none;
  --input-md-text-color: #555555;
  --input-md-icon-border-width: 2px;
  --input-md-icon-border-radius: 0px;
  --input-md-icon-border-color: #000000;
  --input-md-icon-border-style: solid;
  --input-md-additional-info-padding-y: 0px;
  --input-md-additional-info-padding-x: 0px;
  --input-md-additional-info-padding-top: 0px;
  --input-md-additional-info-padding-right: 0px;
  --input-md-additional-info-padding-bottom: 0px;
  --input-md-additional-info-padding-left: 0px;
  --input-md-additional-info-padding-start: 0px;
  --input-md-additional-info-padding-end: 0px;
  --input-md-additional-info-spacing: 0px;
  --input-md-additional-info-font-family: "Inter";
  --input-md-additional-info-font-size: 12px;
  --input-md-additional-info-font-weight: 400;
  --input-md-additional-info-line-height: 1.6;
  --input-md-additional-info-letter-spacing: -.24px;
  --input-md-additional-info-text-align: left;
  --input-md-additional-info-text-decoration: none;
  --input-md-additional-info-text-transform: none;
  --input-md-additional-info-color: #555555;
  /* Input, size: large */
  --input-lg-background: rgba(0, 0, 0, 0);
  --input-lg-border-width: 1px;
  --input-lg-border-radius: 0px;
  --input-lg-border-color: #000000;
  --input-lg-border-style: solid;
  --input-lg-padding-y: 20px;
  --input-lg-padding-x: 20px;
  --input-lg-padding-top: 20px;
  --input-lg-padding-right: 20px;
  --input-lg-padding-bottom: 20px;
  --input-lg-padding-left: 20px;
  --input-lg-padding-start: 20px;
  --input-lg-padding-end: 20px;
  --input-lg-spacing: 12px;
  --input-lg-box-shadow: none;
  --input-lg-font-family: "Inter";
  --input-lg-font-size: 18px;
  --input-lg-font-weight: 400;
  --input-lg-line-height: 1.111;
  --input-lg-letter-spacing: 0px;
  --input-lg-text-align: left;
  --input-lg-text-decoration: none;
  --input-lg-text-transform: none;
  --input-lg-color: #555555;
  --input-lg-label-padding-y: 0px;
  --input-lg-label-padding-x: 0px;
  --input-lg-label-padding-top: 0px;
  --input-lg-label-padding-right: 0px;
  --input-lg-label-padding-bottom: 0px;
  --input-lg-label-padding-left: 0px;
  --input-lg-label-padding-start: 0px;
  --input-lg-label-padding-end: 0px;
  --input-lg-label-spacing: 0px;
  --input-lg-label-font-family: "Inter";
  --input-lg-label-font-size: 12px;
  --input-lg-label-font-weight: 400;
  --input-lg-label-line-height: 1.6;
  --input-lg-label-letter-spacing: -.24px;
  --input-lg-label-text-align: left;
  --input-lg-label-text-decoration: none;
  --input-lg-label-text-transform: none;
  --input-lg-label-color: #555555;
  --input-lg-text-font-family: "Inter";
  --input-lg-text-font-size: 18px;
  --input-lg-text-font-weight: 400;
  --input-lg-text-line-height: 1.111;
  --input-lg-text-letter-spacing: 0px;
  --input-lg-text-text-align: left;
  --input-lg-text-text-decoration: none;
  --input-lg-text-text-transform: none;
  --input-lg-text-color: #555555;
  --input-lg-icon-border-width: 2px;
  --input-lg-icon-border-radius: 0px;
  --input-lg-icon-border-color: #000000;
  --input-lg-icon-border-style: solid;
  --input-lg-additional-info-padding-y: 0px;
  --input-lg-additional-info-padding-x: 0px;
  --input-lg-additional-info-padding-top: 0px;
  --input-lg-additional-info-padding-right: 0px;
  --input-lg-additional-info-padding-bottom: 0px;
  --input-lg-additional-info-padding-left: 0px;
  --input-lg-additional-info-padding-start: 0px;
  --input-lg-additional-info-padding-end: 0px;
  --input-lg-additional-info-spacing: 0px;
  --input-lg-additional-info-font-family: "Inter";
  --input-lg-additional-info-font-size: 12px;
  --input-lg-additional-info-font-weight: 400;
  --input-lg-additional-info-line-height: 1.6;
  --input-lg-additional-info-letter-spacing: -.24px;
  --input-lg-additional-info-text-align: left;
  --input-lg-additional-info-text-decoration: none;
  --input-lg-additional-info-text-transform: none;
  --input-lg-additional-info-color: #555555;
}

.modal {
  /* Modal, type: default */
  --modal-background: #ffffff;
  --modal-border-width: 1px;
  --modal-border-radius: 6px;
  --modal-border-color: transparent;
  --modal-border-style: solid;
  --modal-padding-y: 0px;
  --modal-padding-x: 0px;
  --modal-padding-top: 0px;
  --modal-padding-right: 0px;
  --modal-padding-bottom: 0px;
  --modal-padding-left: 0px;
  --modal-padding-start: 0px;
  --modal-padding-end: 0px;
  --modal-spacing: 0px;
  --modal-box-shadow: 0px 3px 12px rgba(0, 0, 0, .05), 0px 4px 20px rgba(0, 0, 0, .1);
  --modal-header-background: transparent;
  --modal-header-padding-y: 10px;
  --modal-header-padding-x: 24px;
  --modal-header-padding-top: 20px;
  --modal-header-padding-right: 24px;
  --modal-header-padding-bottom: 0px;
  --modal-header-padding-left: 24px;
  --modal-header-padding-start: 24px;
  --modal-header-padding-end: 24px;
  --modal-header-spacing: 0px;
  --modal-header-border-width: 1px;
  --modal-header-border-radius: 6px;
  --modal-header-border-color: transparent;
  --modal-header-border-style: solid;
  --modal-header-box-shadow: none;
  --modal-title-font-family: "Inter";
  --modal-title-font-size: 18px;
  --modal-title-font-weight: 700;
  --modal-title-line-height: 1.6;
  --modal-title-letter-spacing: -.36px;
  --modal-title-text-align: center;
  --modal-title-text-decoration: none;
  --modal-title-text-transform: none;
  --modal-title-color: rgba(0, 0, 0, .8);
  --modal-body-background: transparent;
  --modal-body-padding-y: 19px;
  --modal-body-padding-x: 24px;
  --modal-body-padding-top: 10px;
  --modal-body-padding-right: 24px;
  --modal-body-padding-bottom: 28px;
  --modal-body-padding-left: 24px;
  --modal-body-padding-start: 24px;
  --modal-body-padding-end: 24px;
  --modal-body-spacing: 0px;
  --modal-body-border-width: 1px;
  --modal-body-border-radius: 0px;
  --modal-body-border-color: transparent;
  --modal-body-border-style: solid;
  --modal-body-box-shadow: none;
  --modal-footer-background: transparent;
  --modal-footer-padding-y: 12px;
  --modal-footer-padding-x: 24px;
  --modal-footer-padding-top: 12px;
  --modal-footer-padding-right: 24px;
  --modal-footer-padding-bottom: 12px;
  --modal-footer-padding-left: 24px;
  --modal-footer-padding-start: 24px;
  --modal-footer-padding-end: 24px;
  --modal-footer-spacing: 0px;
  --modal-footer-border-width: 1px;
  --modal-footer-border-radius: 0px;
  --modal-footer-border-color: #e8e8e8;
  --modal-footer-border-style: solid;
  --modal-footer-box-shadow: none;
}

.radio {
  /* Radio, state: disabled, activity: on, theme: dark */
  --radio-disabled-check-dark-on-width: 18px;
  --radio-disabled-check-dark-on-width-raw: 18;
  --radio-disabled-check-dark-on-height: 18px;
  --radio-disabled-check-dark-on-height-raw: 18;
  --radio-disabled-check-dark-on-padding-y: 0px;
  --radio-disabled-check-dark-on-padding-x: 0px;
  --radio-disabled-check-dark-on-padding-top: 0px;
  --radio-disabled-check-dark-on-padding-right: 0px;
  --radio-disabled-check-dark-on-padding-bottom: 0px;
  --radio-disabled-check-dark-on-padding-left: 0px;
  --radio-disabled-check-dark-on-padding-start: 0px;
  --radio-disabled-check-dark-on-padding-end: 0px;
  --radio-disabled-check-dark-on-spacing: 0px;
  --radio-disabled-thumb-dark-on-width: 8px;
  --radio-disabled-thumb-dark-on-width-raw: 8;
  --radio-disabled-thumb-dark-on-height: 8px;
  --radio-disabled-thumb-dark-on-height-raw: 8;
  --radio-disabled-thumb-dark-on-color: #ffffff;
  --radio-disabled-thumb-dark-on-border-width: 1px;
  --radio-disabled-thumb-dark-on-border-radius: 0px;
  --radio-disabled-thumb-dark-on-border-color: transparent;
  --radio-disabled-thumb-dark-on-border-style: solid;
  --radio-disabled-label-dark-on-font-family: "Inter";
  --radio-disabled-label-dark-on-font-size: 16px;
  --radio-disabled-label-dark-on-font-weight: 400;
  --radio-disabled-label-dark-on-line-height: 1;
  --radio-disabled-label-dark-on-letter-spacing: 0px;
  --radio-disabled-label-dark-on-text-align: left;
  --radio-disabled-label-dark-on-text-decoration: none;
  --radio-disabled-label-dark-on-text-transform: none;
  --radio-disabled-label-dark-on-color: rgba(255, 255, 255, .45);
  --radio-disabled-label-dark-on-opacity: 1;
  /* Radio, state: hover, activity: on, theme: dark */
  --radio-hover-check-dark-on-width: 18px;
  --radio-hover-check-dark-on-width-raw: 18;
  --radio-hover-check-dark-on-height: 18px;
  --radio-hover-check-dark-on-height-raw: 18;
  --radio-hover-check-dark-on-padding-y: 0px;
  --radio-hover-check-dark-on-padding-x: 0px;
  --radio-hover-check-dark-on-padding-top: 0px;
  --radio-hover-check-dark-on-padding-right: 0px;
  --radio-hover-check-dark-on-padding-bottom: 0px;
  --radio-hover-check-dark-on-padding-left: 0px;
  --radio-hover-check-dark-on-padding-start: 0px;
  --radio-hover-check-dark-on-padding-end: 0px;
  --radio-hover-check-dark-on-spacing: 0px;
  --radio-hover-thumb-dark-on-width: 8px;
  --radio-hover-thumb-dark-on-width-raw: 8;
  --radio-hover-thumb-dark-on-height: 8px;
  --radio-hover-thumb-dark-on-height-raw: 8;
  --radio-hover-thumb-dark-on-color: #ffffff;
  --radio-hover-thumb-dark-on-border-width: 1px;
  --radio-hover-thumb-dark-on-border-radius: 0px;
  --radio-hover-thumb-dark-on-border-color: transparent;
  --radio-hover-thumb-dark-on-border-style: solid;
  --radio-hover-label-dark-on-font-family: "Inter";
  --radio-hover-label-dark-on-font-size: 16px;
  --radio-hover-label-dark-on-font-weight: 400;
  --radio-hover-label-dark-on-line-height: 1;
  --radio-hover-label-dark-on-letter-spacing: 0px;
  --radio-hover-label-dark-on-text-align: left;
  --radio-hover-label-dark-on-text-decoration: none;
  --radio-hover-label-dark-on-text-transform: none;
  --radio-hover-label-dark-on-color: rgba(255, 255, 255, .85);
  --radio-hover-label-dark-on-opacity: 1;
  /* Radio, state: default, activity: on, theme: dark */
  --radio-check-dark-on-width: 18px;
  --radio-check-dark-on-width-raw: 18;
  --radio-check-dark-on-height: 18px;
  --radio-check-dark-on-height-raw: 18;
  --radio-check-dark-on-padding-y: 0px;
  --radio-check-dark-on-padding-x: 0px;
  --radio-check-dark-on-padding-top: 0px;
  --radio-check-dark-on-padding-right: 0px;
  --radio-check-dark-on-padding-bottom: 0px;
  --radio-check-dark-on-padding-left: 0px;
  --radio-check-dark-on-padding-start: 0px;
  --radio-check-dark-on-padding-end: 0px;
  --radio-check-dark-on-spacing: 0px;
  --radio-thumb-dark-on-width: 8px;
  --radio-thumb-dark-on-width-raw: 8;
  --radio-thumb-dark-on-height: 8px;
  --radio-thumb-dark-on-height-raw: 8;
  --radio-thumb-dark-on-color: #ffffff;
  --radio-thumb-dark-on-border-width: 1px;
  --radio-thumb-dark-on-border-radius: 0px;
  --radio-thumb-dark-on-border-color: transparent;
  --radio-thumb-dark-on-border-style: solid;
  --radio-label-dark-on-font-family: "Inter";
  --radio-label-dark-on-font-size: 16px;
  --radio-label-dark-on-font-weight: 400;
  --radio-label-dark-on-line-height: 1;
  --radio-label-dark-on-letter-spacing: 0px;
  --radio-label-dark-on-text-align: left;
  --radio-label-dark-on-text-decoration: none;
  --radio-label-dark-on-text-transform: none;
  --radio-label-dark-on-color: rgba(255, 255, 255, .85);
  --radio-label-dark-on-opacity: 1;
  /* Radio, state: disabled, activity: off, theme: dark */
  --radio-disabled-check-dark-off-width: 18px;
  --radio-disabled-check-dark-off-width-raw: 18;
  --radio-disabled-check-dark-off-height: 18px;
  --radio-disabled-check-dark-off-height-raw: 18;
  --radio-disabled-check-dark-off-padding-y: 0px;
  --radio-disabled-check-dark-off-padding-x: 0px;
  --radio-disabled-check-dark-off-padding-top: 0px;
  --radio-disabled-check-dark-off-padding-right: 0px;
  --radio-disabled-check-dark-off-padding-bottom: 0px;
  --radio-disabled-check-dark-off-padding-left: 0px;
  --radio-disabled-check-dark-off-padding-start: 0px;
  --radio-disabled-check-dark-off-padding-end: 0px;
  --radio-disabled-check-dark-off-spacing: 0px;
  --radio-disabled-thumb-dark-off-width: 8px;
  --radio-disabled-thumb-dark-off-width-raw: 8;
  --radio-disabled-thumb-dark-off-height: 8px;
  --radio-disabled-thumb-dark-off-height-raw: 8;
  --radio-disabled-thumb-dark-off-color: #ffffff;
  --radio-disabled-thumb-dark-off-border-width: 1px;
  --radio-disabled-thumb-dark-off-border-radius: 0px;
  --radio-disabled-thumb-dark-off-border-color: transparent;
  --radio-disabled-thumb-dark-off-border-style: solid;
  --radio-disabled-label-dark-off-font-family: "Inter";
  --radio-disabled-label-dark-off-font-size: 16px;
  --radio-disabled-label-dark-off-font-weight: 400;
  --radio-disabled-label-dark-off-line-height: 1;
  --radio-disabled-label-dark-off-letter-spacing: 0px;
  --radio-disabled-label-dark-off-text-align: left;
  --radio-disabled-label-dark-off-text-decoration: none;
  --radio-disabled-label-dark-off-text-transform: none;
  --radio-disabled-label-dark-off-color: rgba(255, 255, 255, .45);
  --radio-disabled-label-dark-off-opacity: 1;
  /* Radio, state: hover, activity: off, theme: dark */
  --radio-hover-check-dark-off-width: 18px;
  --radio-hover-check-dark-off-width-raw: 18;
  --radio-hover-check-dark-off-height: 18px;
  --radio-hover-check-dark-off-height-raw: 18;
  --radio-hover-check-dark-off-padding-y: 0px;
  --radio-hover-check-dark-off-padding-x: 0px;
  --radio-hover-check-dark-off-padding-top: 0px;
  --radio-hover-check-dark-off-padding-right: 0px;
  --radio-hover-check-dark-off-padding-bottom: 0px;
  --radio-hover-check-dark-off-padding-left: 0px;
  --radio-hover-check-dark-off-padding-start: 0px;
  --radio-hover-check-dark-off-padding-end: 0px;
  --radio-hover-check-dark-off-spacing: 0px;
  --radio-hover-thumb-dark-off-width: 8px;
  --radio-hover-thumb-dark-off-width-raw: 8;
  --radio-hover-thumb-dark-off-height: 8px;
  --radio-hover-thumb-dark-off-height-raw: 8;
  --radio-hover-thumb-dark-off-color: #ffffff;
  --radio-hover-thumb-dark-off-border-width: 1px;
  --radio-hover-thumb-dark-off-border-radius: 0px;
  --radio-hover-thumb-dark-off-border-color: transparent;
  --radio-hover-thumb-dark-off-border-style: solid;
  --radio-hover-label-dark-off-font-family: "Inter";
  --radio-hover-label-dark-off-font-size: 16px;
  --radio-hover-label-dark-off-font-weight: 400;
  --radio-hover-label-dark-off-line-height: 1;
  --radio-hover-label-dark-off-letter-spacing: 0px;
  --radio-hover-label-dark-off-text-align: left;
  --radio-hover-label-dark-off-text-decoration: none;
  --radio-hover-label-dark-off-text-transform: none;
  --radio-hover-label-dark-off-color: rgba(255, 255, 255, .85);
  --radio-hover-label-dark-off-opacity: 1;
  /* Radio, state: default, activity: off, theme: dark */
  --radio-check-dark-off-width: 18px;
  --radio-check-dark-off-width-raw: 18;
  --radio-check-dark-off-height: 18px;
  --radio-check-dark-off-height-raw: 18;
  --radio-check-dark-off-padding-y: 0px;
  --radio-check-dark-off-padding-x: 0px;
  --radio-check-dark-off-padding-top: 0px;
  --radio-check-dark-off-padding-right: 0px;
  --radio-check-dark-off-padding-bottom: 0px;
  --radio-check-dark-off-padding-left: 0px;
  --radio-check-dark-off-padding-start: 0px;
  --radio-check-dark-off-padding-end: 0px;
  --radio-check-dark-off-spacing: 0px;
  --radio-thumb-dark-off-width: 8px;
  --radio-thumb-dark-off-width-raw: 8;
  --radio-thumb-dark-off-height: 8px;
  --radio-thumb-dark-off-height-raw: 8;
  --radio-thumb-dark-off-color: #ffffff;
  --radio-thumb-dark-off-border-width: 1px;
  --radio-thumb-dark-off-border-radius: 0px;
  --radio-thumb-dark-off-border-color: transparent;
  --radio-thumb-dark-off-border-style: solid;
  --radio-label-dark-off-font-family: "Inter";
  --radio-label-dark-off-font-size: 16px;
  --radio-label-dark-off-font-weight: 400;
  --radio-label-dark-off-line-height: 1;
  --radio-label-dark-off-letter-spacing: 0px;
  --radio-label-dark-off-text-align: left;
  --radio-label-dark-off-text-decoration: none;
  --radio-label-dark-off-text-transform: none;
  --radio-label-dark-off-color: rgba(255, 255, 255, .65);
  --radio-label-dark-off-opacity: 1;
  /* Radio, state: disabled, activity: on, theme: light */
  --radio-disabled-check-on-width: 18px;
  --radio-disabled-check-on-width-raw: 18;
  --radio-disabled-check-on-height: 18px;
  --radio-disabled-check-on-height-raw: 18;
  --radio-disabled-check-on-padding-y: 0px;
  --radio-disabled-check-on-padding-x: 0px;
  --radio-disabled-check-on-padding-top: 0px;
  --radio-disabled-check-on-padding-right: 0px;
  --radio-disabled-check-on-padding-bottom: 0px;
  --radio-disabled-check-on-padding-left: 0px;
  --radio-disabled-check-on-padding-start: 0px;
  --radio-disabled-check-on-padding-end: 0px;
  --radio-disabled-check-on-spacing: 0px;
  --radio-disabled-thumb-on-width: 8px;
  --radio-disabled-thumb-on-width-raw: 8;
  --radio-disabled-thumb-on-height: 8px;
  --radio-disabled-thumb-on-height-raw: 8;
  --radio-disabled-thumb-on-color: #ffffff;
  --radio-disabled-thumb-on-border-width: 1px;
  --radio-disabled-thumb-on-border-radius: 0px;
  --radio-disabled-thumb-on-border-color: transparent;
  --radio-disabled-thumb-on-border-style: solid;
  --radio-disabled-label-on-font-family: "Inter";
  --radio-disabled-label-on-font-size: 16px;
  --radio-disabled-label-on-font-weight: 400;
  --radio-disabled-label-on-line-height: 1;
  --radio-disabled-label-on-letter-spacing: 0px;
  --radio-disabled-label-on-text-align: left;
  --radio-disabled-label-on-text-decoration: none;
  --radio-disabled-label-on-text-transform: none;
  --radio-disabled-label-on-color: #777777;
  --radio-disabled-label-on-opacity: 1;
  /* Radio, state: hover, activity: on, theme: light */
  --radio-hover-check-on-width: 18px;
  --radio-hover-check-on-width-raw: 18;
  --radio-hover-check-on-height: 18px;
  --radio-hover-check-on-height-raw: 18;
  --radio-hover-check-on-padding-y: 0px;
  --radio-hover-check-on-padding-x: 0px;
  --radio-hover-check-on-padding-top: 0px;
  --radio-hover-check-on-padding-right: 0px;
  --radio-hover-check-on-padding-bottom: 0px;
  --radio-hover-check-on-padding-left: 0px;
  --radio-hover-check-on-padding-start: 0px;
  --radio-hover-check-on-padding-end: 0px;
  --radio-hover-check-on-spacing: 0px;
  --radio-hover-thumb-on-width: 8px;
  --radio-hover-thumb-on-width-raw: 8;
  --radio-hover-thumb-on-height: 8px;
  --radio-hover-thumb-on-height-raw: 8;
  --radio-hover-thumb-on-color: #ffffff;
  --radio-hover-thumb-on-border-width: 1px;
  --radio-hover-thumb-on-border-radius: 0px;
  --radio-hover-thumb-on-border-color: transparent;
  --radio-hover-thumb-on-border-style: solid;
  --radio-hover-label-on-font-family: "Inter";
  --radio-hover-label-on-font-size: 16px;
  --radio-hover-label-on-font-weight: 400;
  --radio-hover-label-on-line-height: 1;
  --radio-hover-label-on-letter-spacing: 0px;
  --radio-hover-label-on-text-align: left;
  --radio-hover-label-on-text-decoration: none;
  --radio-hover-label-on-text-transform: none;
  --radio-hover-label-on-color: rgba(0, 0, 0, .8);
  --radio-hover-label-on-opacity: 1;
  /* Radio, state: default, activity: on, theme: light */
  --radio-check-on-width: 18px;
  --radio-check-on-width-raw: 18;
  --radio-check-on-height: 18px;
  --radio-check-on-height-raw: 18;
  --radio-check-on-padding-y: 0px;
  --radio-check-on-padding-x: 0px;
  --radio-check-on-padding-top: 0px;
  --radio-check-on-padding-right: 0px;
  --radio-check-on-padding-bottom: 0px;
  --radio-check-on-padding-left: 0px;
  --radio-check-on-padding-start: 0px;
  --radio-check-on-padding-end: 0px;
  --radio-check-on-spacing: 0px;
  --radio-thumb-on-width: 8px;
  --radio-thumb-on-width-raw: 8;
  --radio-thumb-on-height: 8px;
  --radio-thumb-on-height-raw: 8;
  --radio-thumb-on-color: #ffffff;
  --radio-thumb-on-border-width: 1px;
  --radio-thumb-on-border-radius: 0px;
  --radio-thumb-on-border-color: transparent;
  --radio-thumb-on-border-style: solid;
  --radio-label-on-font-family: "Inter";
  --radio-label-on-font-size: 16px;
  --radio-label-on-font-weight: 400;
  --radio-label-on-line-height: 1;
  --radio-label-on-letter-spacing: 0px;
  --radio-label-on-text-align: left;
  --radio-label-on-text-decoration: none;
  --radio-label-on-text-transform: none;
  --radio-label-on-color: rgba(0, 0, 0, .8);
  --radio-label-on-opacity: 1;
  /* Radio, state: disabled, activity: off, theme: light */
  --radio-disabled-check-off-width: 18px;
  --radio-disabled-check-off-width-raw: 18;
  --radio-disabled-check-off-height: 18px;
  --radio-disabled-check-off-height-raw: 18;
  --radio-disabled-check-off-padding-y: 0px;
  --radio-disabled-check-off-padding-x: 0px;
  --radio-disabled-check-off-padding-top: 0px;
  --radio-disabled-check-off-padding-right: 0px;
  --radio-disabled-check-off-padding-bottom: 0px;
  --radio-disabled-check-off-padding-left: 0px;
  --radio-disabled-check-off-padding-start: 0px;
  --radio-disabled-check-off-padding-end: 0px;
  --radio-disabled-check-off-spacing: 0px;
  --radio-disabled-thumb-off-width: 8px;
  --radio-disabled-thumb-off-width-raw: 8;
  --radio-disabled-thumb-off-height: 8px;
  --radio-disabled-thumb-off-height-raw: 8;
  --radio-disabled-thumb-off-color: #ffffff;
  --radio-disabled-thumb-off-border-width: 1px;
  --radio-disabled-thumb-off-border-radius: 0px;
  --radio-disabled-thumb-off-border-color: transparent;
  --radio-disabled-thumb-off-border-style: solid;
  --radio-disabled-label-off-font-family: "Inter";
  --radio-disabled-label-off-font-size: 16px;
  --radio-disabled-label-off-font-weight: 400;
  --radio-disabled-label-off-line-height: 1;
  --radio-disabled-label-off-letter-spacing: 0px;
  --radio-disabled-label-off-text-align: left;
  --radio-disabled-label-off-text-decoration: none;
  --radio-disabled-label-off-text-transform: none;
  --radio-disabled-label-off-color: #777777;
  --radio-disabled-label-off-opacity: 1;
  /* Radio, state: hover, activity: off, theme: light */
  --radio-hover-check-off-width: 18px;
  --radio-hover-check-off-width-raw: 18;
  --radio-hover-check-off-height: 18px;
  --radio-hover-check-off-height-raw: 18;
  --radio-hover-check-off-padding-y: 0px;
  --radio-hover-check-off-padding-x: 0px;
  --radio-hover-check-off-padding-top: 0px;
  --radio-hover-check-off-padding-right: 0px;
  --radio-hover-check-off-padding-bottom: 0px;
  --radio-hover-check-off-padding-left: 0px;
  --radio-hover-check-off-padding-start: 0px;
  --radio-hover-check-off-padding-end: 0px;
  --radio-hover-check-off-spacing: 0px;
  --radio-hover-thumb-off-width: 8px;
  --radio-hover-thumb-off-width-raw: 8;
  --radio-hover-thumb-off-height: 8px;
  --radio-hover-thumb-off-height-raw: 8;
  --radio-hover-thumb-off-color: #ffffff;
  --radio-hover-thumb-off-border-width: 1px;
  --radio-hover-thumb-off-border-radius: 0px;
  --radio-hover-thumb-off-border-color: transparent;
  --radio-hover-thumb-off-border-style: solid;
  --radio-hover-label-off-font-family: "Inter";
  --radio-hover-label-off-font-size: 16px;
  --radio-hover-label-off-font-weight: 400;
  --radio-hover-label-off-line-height: 1;
  --radio-hover-label-off-letter-spacing: 0px;
  --radio-hover-label-off-text-align: left;
  --radio-hover-label-off-text-decoration: none;
  --radio-hover-label-off-text-transform: none;
  --radio-hover-label-off-color: rgba(0, 0, 0, .8);
  --radio-hover-label-off-opacity: 1;
  /* Radio, state: default, activity: off, theme: light */
  --radio-check-off-width: 18px;
  --radio-check-off-width-raw: 18;
  --radio-check-off-height: 18px;
  --radio-check-off-height-raw: 18;
  --radio-check-off-padding-y: 0px;
  --radio-check-off-padding-x: 0px;
  --radio-check-off-padding-top: 0px;
  --radio-check-off-padding-right: 0px;
  --radio-check-off-padding-bottom: 0px;
  --radio-check-off-padding-left: 0px;
  --radio-check-off-padding-start: 0px;
  --radio-check-off-padding-end: 0px;
  --radio-check-off-spacing: 0px;
  --radio-thumb-off-width: 8px;
  --radio-thumb-off-width-raw: 8;
  --radio-thumb-off-height: 8px;
  --radio-thumb-off-height-raw: 8;
  --radio-thumb-off-color: #ffffff;
  --radio-thumb-off-border-width: 1px;
  --radio-thumb-off-border-radius: 0px;
  --radio-thumb-off-border-color: transparent;
  --radio-thumb-off-border-style: solid;
  --radio-label-off-font-family: "Inter";
  --radio-label-off-font-size: 16px;
  --radio-label-off-font-weight: 400;
  --radio-label-off-line-height: 1;
  --radio-label-off-letter-spacing: 0px;
  --radio-label-off-text-align: left;
  --radio-label-off-text-decoration: none;
  --radio-label-off-text-transform: none;
  --radio-label-off-color: #555555;
  --radio-label-off-opacity: 1;
  /* Radio, size: small */
  --radio-sm-check-width: 16px;
  --radio-sm-check-width-raw: 16;
  --radio-sm-check-height: 16px;
  --radio-sm-check-height-raw: 16;
  --radio-sm-check-padding-y: 0px;
  --radio-sm-check-padding-x: 0px;
  --radio-sm-check-padding-top: 0px;
  --radio-sm-check-padding-right: 0px;
  --radio-sm-check-padding-bottom: 0px;
  --radio-sm-check-padding-left: 0px;
  --radio-sm-check-padding-start: 0px;
  --radio-sm-check-padding-end: 0px;
  --radio-sm-check-spacing: 0px;
  --radio-sm-thumb-width: 7.111px;
  --radio-sm-thumb-width-raw: 7.111;
  --radio-sm-thumb-height: 7.111px;
  --radio-sm-thumb-height-raw: 7.111;
  --radio-sm-thumb-color: #000000;
  --radio-sm-thumb-border-width: 1px;
  --radio-sm-thumb-border-radius: 0px;
  --radio-sm-thumb-border-color: transparent;
  --radio-sm-thumb-border-style: solid;
  --radio-sm-label-font-family: "Inter";
  --radio-sm-label-font-size: 12px;
  --radio-sm-label-font-weight: 400;
  --radio-sm-label-line-height: 1.667;
  --radio-sm-label-letter-spacing: 0px;
  --radio-sm-label-text-align: left;
  --radio-sm-label-text-decoration: none;
  --radio-sm-label-text-transform: none;
  --radio-sm-label-color: #555555;
  --radio-sm-label-opacity: 1;
  /* Radio, size: medium */
  --radio-md-check-width: 18px;
  --radio-md-check-width-raw: 18;
  --radio-md-check-height: 18px;
  --radio-md-check-height-raw: 18;
  --radio-md-check-padding-y: 0px;
  --radio-md-check-padding-x: 0px;
  --radio-md-check-padding-top: 0px;
  --radio-md-check-padding-right: 0px;
  --radio-md-check-padding-bottom: 0px;
  --radio-md-check-padding-left: 0px;
  --radio-md-check-padding-start: 0px;
  --radio-md-check-padding-end: 0px;
  --radio-md-check-spacing: 0px;
  --radio-md-thumb-width: 8px;
  --radio-md-thumb-width-raw: 8;
  --radio-md-thumb-height: 8px;
  --radio-md-thumb-height-raw: 8;
  --radio-md-thumb-color: #000000;
  --radio-md-thumb-border-width: 1px;
  --radio-md-thumb-border-radius: 0px;
  --radio-md-thumb-border-color: transparent;
  --radio-md-thumb-border-style: solid;
  --radio-md-label-font-family: "Inter";
  --radio-md-label-font-size: 16px;
  --radio-md-label-font-weight: 400;
  --radio-md-label-line-height: 1;
  --radio-md-label-letter-spacing: 0px;
  --radio-md-label-text-align: left;
  --radio-md-label-text-decoration: none;
  --radio-md-label-text-transform: none;
  --radio-md-label-color: #555555;
  --radio-md-label-opacity: 1;
  /* Radio, size: large */
  --radio-lg-check-width: 20px;
  --radio-lg-check-width-raw: 20;
  --radio-lg-check-height: 20px;
  --radio-lg-check-height-raw: 20;
  --radio-lg-check-padding-y: 0px;
  --radio-lg-check-padding-x: 0px;
  --radio-lg-check-padding-top: 0px;
  --radio-lg-check-padding-right: 0px;
  --radio-lg-check-padding-bottom: 0px;
  --radio-lg-check-padding-left: 0px;
  --radio-lg-check-padding-start: 0px;
  --radio-lg-check-padding-end: 0px;
  --radio-lg-check-spacing: 0px;
  --radio-lg-thumb-width: 8.889px;
  --radio-lg-thumb-width-raw: 8.889;
  --radio-lg-thumb-height: 8.889px;
  --radio-lg-thumb-height-raw: 8.889;
  --radio-lg-thumb-color: #000000;
  --radio-lg-thumb-border-width: 1px;
  --radio-lg-thumb-border-radius: 0px;
  --radio-lg-thumb-border-color: transparent;
  --radio-lg-thumb-border-style: solid;
  --radio-lg-label-font-family: "Inter";
  --radio-lg-label-font-size: 18px;
  --radio-lg-label-font-weight: 400;
  --radio-lg-label-line-height: 1.111;
  --radio-lg-label-letter-spacing: 0px;
  --radio-lg-label-text-align: left;
  --radio-lg-label-text-decoration: none;
  --radio-lg-label-text-transform: none;
  --radio-lg-label-color: #555555;
  --radio-lg-label-opacity: 1;
}

.select {
  /* Select, state: disabled, theme: dark */
  --select-dark-disabled-background: #cccccc;
  --select-dark-disabled-padding-y: 15px;
  --select-dark-disabled-padding-x: 18px;
  --select-dark-disabled-padding-top: 15px;
  --select-dark-disabled-padding-right: 16px;
  --select-dark-disabled-padding-bottom: 15px;
  --select-dark-disabled-padding-left: 20px;
  --select-dark-disabled-padding-start: 20px;
  --select-dark-disabled-padding-end: 16px;
  --select-dark-disabled-spacing: 12px;
  --select-dark-disabled-border-width: 1px;
  --select-dark-disabled-border-radius: 0px;
  --select-dark-disabled-border-color: rgba(0, 0, 0, 0);
  --select-dark-disabled-border-style: solid;
  --select-dark-disabled-box-shadow: none;
  --select-label-dark-disabled-padding-y: 0px;
  --select-label-dark-disabled-padding-x: 0px;
  --select-label-dark-disabled-padding-top: 0px;
  --select-label-dark-disabled-padding-right: 0px;
  --select-label-dark-disabled-padding-bottom: 0px;
  --select-label-dark-disabled-padding-left: 0px;
  --select-label-dark-disabled-padding-start: 0px;
  --select-label-dark-disabled-padding-end: 0px;
  --select-label-dark-disabled-spacing: 5px;
  --select-label-dark-disabled-font-family: "Inter";
  --select-label-dark-disabled-font-size: 12px;
  --select-label-dark-disabled-font-weight: 400;
  --select-label-dark-disabled-line-height: 1.6;
  --select-label-dark-disabled-letter-spacing: -.24px;
  --select-label-dark-disabled-text-align: left;
  --select-label-dark-disabled-text-decoration: none;
  --select-label-dark-disabled-text-transform: none;
  --select-label-dark-disabled-color: rgba(255, 255, 255, .45);
  --select-option-dark-disabled-font-family: "Inter";
  --select-option-dark-disabled-font-size: 16px;
  --select-option-dark-disabled-font-weight: 400;
  --select-option-dark-disabled-line-height: 1;
  --select-option-dark-disabled-letter-spacing: 0px;
  --select-option-dark-disabled-text-align: left;
  --select-option-dark-disabled-text-decoration: none;
  --select-option-dark-disabled-text-transform: none;
  --select-option-dark-disabled-color: #555555;
  --select-icon-dark-disabled-width: 16px;
  --select-icon-dark-disabled-width-raw: 16;
  --select-icon-dark-disabled-height: 16px;
  --select-icon-dark-disabled-height-raw: 16;
  --select-icon-dark-disabled-color: #aaaaaa;
  --select-additional-info-dark-disabled-padding-y: 0px;
  --select-additional-info-dark-disabled-padding-x: 0px;
  --select-additional-info-dark-disabled-padding-top: 0px;
  --select-additional-info-dark-disabled-padding-right: 0px;
  --select-additional-info-dark-disabled-padding-bottom: 0px;
  --select-additional-info-dark-disabled-padding-left: 0px;
  --select-additional-info-dark-disabled-padding-start: 0px;
  --select-additional-info-dark-disabled-padding-end: 0px;
  --select-additional-info-dark-disabled-spacing: 5px;
  --select-additional-info-dark-disabled-font-family: "Inter";
  --select-additional-info-dark-disabled-font-size: 12px;
  --select-additional-info-dark-disabled-font-weight: 400;
  --select-additional-info-dark-disabled-line-height: 1.6;
  --select-additional-info-dark-disabled-letter-spacing: -.24px;
  --select-additional-info-dark-disabled-text-align: left;
  --select-additional-info-dark-disabled-text-decoration: none;
  --select-additional-info-dark-disabled-text-transform: none;
  --select-additional-info-dark-disabled-color: rgba(255, 255, 255, .45);
  /* Select, state: error, theme: dark */
  --select-dark-error-background: #f8f8f8;
  --select-dark-error-padding-y: 15px;
  --select-dark-error-padding-x: 18px;
  --select-dark-error-padding-top: 15px;
  --select-dark-error-padding-right: 16px;
  --select-dark-error-padding-bottom: 15px;
  --select-dark-error-padding-left: 20px;
  --select-dark-error-padding-start: 20px;
  --select-dark-error-padding-end: 16px;
  --select-dark-error-spacing: 12px;
  --select-dark-error-border-width: 1px;
  --select-dark-error-border-radius: 0px;
  --select-dark-error-border-color: #f35d6c;
  --select-dark-error-border-style: solid;
  --select-dark-error-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --select-label-dark-error-padding-y: 0px;
  --select-label-dark-error-padding-x: 0px;
  --select-label-dark-error-padding-top: 0px;
  --select-label-dark-error-padding-right: 0px;
  --select-label-dark-error-padding-bottom: 0px;
  --select-label-dark-error-padding-left: 0px;
  --select-label-dark-error-padding-start: 0px;
  --select-label-dark-error-padding-end: 0px;
  --select-label-dark-error-spacing: 5px;
  --select-label-dark-error-font-family: "Inter";
  --select-label-dark-error-font-size: 12px;
  --select-label-dark-error-font-weight: 400;
  --select-label-dark-error-line-height: 1.6;
  --select-label-dark-error-letter-spacing: -.24px;
  --select-label-dark-error-text-align: left;
  --select-label-dark-error-text-decoration: none;
  --select-label-dark-error-text-transform: none;
  --select-label-dark-error-color: rgba(255, 255, 255, .65);
  --select-option-dark-error-font-family: "Inter";
  --select-option-dark-error-font-size: 16px;
  --select-option-dark-error-font-weight: 400;
  --select-option-dark-error-line-height: 1;
  --select-option-dark-error-letter-spacing: 0px;
  --select-option-dark-error-text-align: left;
  --select-option-dark-error-text-decoration: none;
  --select-option-dark-error-text-transform: none;
  --select-option-dark-error-color: #555555;
  --select-icon-dark-error-width: 16px;
  --select-icon-dark-error-width-raw: 16;
  --select-icon-dark-error-height: 16px;
  --select-icon-dark-error-height-raw: 16;
  --select-icon-dark-error-color: #888888;
  --select-additional-info-dark-error-padding-y: 0px;
  --select-additional-info-dark-error-padding-x: 0px;
  --select-additional-info-dark-error-padding-top: 0px;
  --select-additional-info-dark-error-padding-right: 0px;
  --select-additional-info-dark-error-padding-bottom: 0px;
  --select-additional-info-dark-error-padding-left: 0px;
  --select-additional-info-dark-error-padding-start: 0px;
  --select-additional-info-dark-error-padding-end: 0px;
  --select-additional-info-dark-error-spacing: 5px;
  --select-additional-info-dark-error-font-family: "Inter";
  --select-additional-info-dark-error-font-size: 12px;
  --select-additional-info-dark-error-font-weight: 400;
  --select-additional-info-dark-error-line-height: 1.6;
  --select-additional-info-dark-error-letter-spacing: -.24px;
  --select-additional-info-dark-error-text-align: left;
  --select-additional-info-dark-error-text-decoration: none;
  --select-additional-info-dark-error-text-transform: none;
  --select-additional-info-dark-error-color: #f35d6c;
  /* Select, state: active, theme: dark */
  --select-dark-active-background: #ffffff;
  --select-dark-active-padding-y: 15px;
  --select-dark-active-padding-x: 18px;
  --select-dark-active-padding-top: 15px;
  --select-dark-active-padding-right: 16px;
  --select-dark-active-padding-bottom: 15px;
  --select-dark-active-padding-left: 20px;
  --select-dark-active-padding-start: 20px;
  --select-dark-active-padding-end: 16px;
  --select-dark-active-spacing: 12px;
  --select-dark-active-border-width: 1px;
  --select-dark-active-border-radius: 0px;
  --select-dark-active-border-color: rgba(0, 0, 0, 0);
  --select-dark-active-border-style: solid;
  --select-dark-active-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --select-label-dark-active-padding-y: 0px;
  --select-label-dark-active-padding-x: 0px;
  --select-label-dark-active-padding-top: 0px;
  --select-label-dark-active-padding-right: 0px;
  --select-label-dark-active-padding-bottom: 0px;
  --select-label-dark-active-padding-left: 0px;
  --select-label-dark-active-padding-start: 0px;
  --select-label-dark-active-padding-end: 0px;
  --select-label-dark-active-spacing: 5px;
  --select-label-dark-active-font-family: "Inter";
  --select-label-dark-active-font-size: 12px;
  --select-label-dark-active-font-weight: 400;
  --select-label-dark-active-line-height: 1.6;
  --select-label-dark-active-letter-spacing: -.24px;
  --select-label-dark-active-text-align: left;
  --select-label-dark-active-text-decoration: none;
  --select-label-dark-active-text-transform: none;
  --select-label-dark-active-color: rgba(255, 255, 255, .85);
  --select-option-dark-active-font-family: "Inter";
  --select-option-dark-active-font-size: 16px;
  --select-option-dark-active-font-weight: 400;
  --select-option-dark-active-line-height: 1;
  --select-option-dark-active-letter-spacing: 0px;
  --select-option-dark-active-text-align: left;
  --select-option-dark-active-text-decoration: none;
  --select-option-dark-active-text-transform: none;
  --select-option-dark-active-color: #000000;
  --select-icon-dark-active-width: 16px;
  --select-icon-dark-active-width-raw: 16;
  --select-icon-dark-active-height: 16px;
  --select-icon-dark-active-height-raw: 16;
  --select-icon-dark-active-color: #888888;
  --select-additional-info-dark-active-padding-y: 0px;
  --select-additional-info-dark-active-padding-x: 0px;
  --select-additional-info-dark-active-padding-top: 0px;
  --select-additional-info-dark-active-padding-right: 0px;
  --select-additional-info-dark-active-padding-bottom: 0px;
  --select-additional-info-dark-active-padding-left: 0px;
  --select-additional-info-dark-active-padding-start: 0px;
  --select-additional-info-dark-active-padding-end: 0px;
  --select-additional-info-dark-active-spacing: 5px;
  --select-additional-info-dark-active-font-family: "Inter";
  --select-additional-info-dark-active-font-size: 12px;
  --select-additional-info-dark-active-font-weight: 400;
  --select-additional-info-dark-active-line-height: 1.6;
  --select-additional-info-dark-active-letter-spacing: -.24px;
  --select-additional-info-dark-active-text-align: left;
  --select-additional-info-dark-active-text-decoration: none;
  --select-additional-info-dark-active-text-transform: none;
  --select-additional-info-dark-active-color: rgba(255, 255, 255, .65);
  /* Select, state: hover, theme: dark */
  --select-dark-hover-background: #ffffff;
  --select-dark-hover-padding-y: 15px;
  --select-dark-hover-padding-x: 18px;
  --select-dark-hover-padding-top: 15px;
  --select-dark-hover-padding-right: 16px;
  --select-dark-hover-padding-bottom: 15px;
  --select-dark-hover-padding-left: 20px;
  --select-dark-hover-padding-start: 20px;
  --select-dark-hover-padding-end: 16px;
  --select-dark-hover-spacing: 12px;
  --select-dark-hover-border-width: 1px;
  --select-dark-hover-border-radius: 0px;
  --select-dark-hover-border-color: rgba(0, 0, 0, 0);
  --select-dark-hover-border-style: solid;
  --select-dark-hover-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --select-label-dark-hover-padding-y: 0px;
  --select-label-dark-hover-padding-x: 0px;
  --select-label-dark-hover-padding-top: 0px;
  --select-label-dark-hover-padding-right: 0px;
  --select-label-dark-hover-padding-bottom: 0px;
  --select-label-dark-hover-padding-left: 0px;
  --select-label-dark-hover-padding-start: 0px;
  --select-label-dark-hover-padding-end: 0px;
  --select-label-dark-hover-spacing: 5px;
  --select-label-dark-hover-font-family: "Inter";
  --select-label-dark-hover-font-size: 12px;
  --select-label-dark-hover-font-weight: 400;
  --select-label-dark-hover-line-height: 1.6;
  --select-label-dark-hover-letter-spacing: -.24px;
  --select-label-dark-hover-text-align: left;
  --select-label-dark-hover-text-decoration: none;
  --select-label-dark-hover-text-transform: none;
  --select-label-dark-hover-color: rgba(255, 255, 255, .65);
  --select-option-dark-hover-font-family: "Inter";
  --select-option-dark-hover-font-size: 16px;
  --select-option-dark-hover-font-weight: 400;
  --select-option-dark-hover-line-height: 1;
  --select-option-dark-hover-letter-spacing: 0px;
  --select-option-dark-hover-text-align: left;
  --select-option-dark-hover-text-decoration: none;
  --select-option-dark-hover-text-transform: none;
  --select-option-dark-hover-color: #555555;
  --select-icon-dark-hover-width: 16px;
  --select-icon-dark-hover-width-raw: 16;
  --select-icon-dark-hover-height: 16px;
  --select-icon-dark-hover-height-raw: 16;
  --select-icon-dark-hover-color: #888888;
  --select-additional-info-dark-hover-padding-y: 0px;
  --select-additional-info-dark-hover-padding-x: 0px;
  --select-additional-info-dark-hover-padding-top: 0px;
  --select-additional-info-dark-hover-padding-right: 0px;
  --select-additional-info-dark-hover-padding-bottom: 0px;
  --select-additional-info-dark-hover-padding-left: 0px;
  --select-additional-info-dark-hover-padding-start: 0px;
  --select-additional-info-dark-hover-padding-end: 0px;
  --select-additional-info-dark-hover-spacing: 5px;
  --select-additional-info-dark-hover-font-family: "Inter";
  --select-additional-info-dark-hover-font-size: 12px;
  --select-additional-info-dark-hover-font-weight: 400;
  --select-additional-info-dark-hover-line-height: 1.6;
  --select-additional-info-dark-hover-letter-spacing: -.24px;
  --select-additional-info-dark-hover-text-align: left;
  --select-additional-info-dark-hover-text-decoration: none;
  --select-additional-info-dark-hover-text-transform: none;
  --select-additional-info-dark-hover-color: rgba(255, 255, 255, .65);
  /* Select, state: default, theme: dark */
  --select-dark-background: #f8f8f8;
  --select-dark-padding-y: 15px;
  --select-dark-padding-x: 18px;
  --select-dark-padding-top: 15px;
  --select-dark-padding-right: 16px;
  --select-dark-padding-bottom: 15px;
  --select-dark-padding-left: 20px;
  --select-dark-padding-start: 20px;
  --select-dark-padding-end: 16px;
  --select-dark-spacing: 12px;
  --select-dark-border-width: 1px;
  --select-dark-border-radius: 0px;
  --select-dark-border-color: rgba(0, 0, 0, 0);
  --select-dark-border-style: solid;
  --select-dark-box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  --select-label-dark-padding-y: 0px;
  --select-label-dark-padding-x: 0px;
  --select-label-dark-padding-top: 0px;
  --select-label-dark-padding-right: 0px;
  --select-label-dark-padding-bottom: 0px;
  --select-label-dark-padding-left: 0px;
  --select-label-dark-padding-start: 0px;
  --select-label-dark-padding-end: 0px;
  --select-label-dark-spacing: 5px;
  --select-label-dark-font-family: "Inter";
  --select-label-dark-font-size: 12px;
  --select-label-dark-font-weight: 400;
  --select-label-dark-line-height: 1.6;
  --select-label-dark-letter-spacing: -.24px;
  --select-label-dark-text-align: left;
  --select-label-dark-text-decoration: none;
  --select-label-dark-text-transform: none;
  --select-label-dark-color: rgba(255, 255, 255, .65);
  --select-option-dark-font-family: "Inter";
  --select-option-dark-font-size: 16px;
  --select-option-dark-font-weight: 400;
  --select-option-dark-line-height: 1;
  --select-option-dark-letter-spacing: 0px;
  --select-option-dark-text-align: left;
  --select-option-dark-text-decoration: none;
  --select-option-dark-text-transform: none;
  --select-option-dark-color: #555555;
  --select-icon-dark-width: 16px;
  --select-icon-dark-width-raw: 16;
  --select-icon-dark-height: 16px;
  --select-icon-dark-height-raw: 16;
  --select-icon-dark-color: #888888;
  --select-additional-info-dark-padding-y: 0px;
  --select-additional-info-dark-padding-x: 0px;
  --select-additional-info-dark-padding-top: 0px;
  --select-additional-info-dark-padding-right: 0px;
  --select-additional-info-dark-padding-bottom: 0px;
  --select-additional-info-dark-padding-left: 0px;
  --select-additional-info-dark-padding-start: 0px;
  --select-additional-info-dark-padding-end: 0px;
  --select-additional-info-dark-spacing: 5px;
  --select-additional-info-dark-font-family: "Inter";
  --select-additional-info-dark-font-size: 12px;
  --select-additional-info-dark-font-weight: 400;
  --select-additional-info-dark-line-height: 1.6;
  --select-additional-info-dark-letter-spacing: -.24px;
  --select-additional-info-dark-text-align: left;
  --select-additional-info-dark-text-decoration: none;
  --select-additional-info-dark-text-transform: none;
  --select-additional-info-dark-color: rgba(255, 255, 255, .65);
  /* Select, state: disabled, theme: light */
  --select-disabled-background: #f8f8f8;
  --select-disabled-padding-y: 15px;
  --select-disabled-padding-x: 18px;
  --select-disabled-padding-top: 15px;
  --select-disabled-padding-right: 16px;
  --select-disabled-padding-bottom: 15px;
  --select-disabled-padding-left: 20px;
  --select-disabled-padding-start: 20px;
  --select-disabled-padding-end: 16px;
  --select-disabled-spacing: 12px;
  --select-disabled-border-width: 1px;
  --select-disabled-border-radius: 0px;
  --select-disabled-border-color: rgba(0, 0, 0, 0);
  --select-disabled-border-style: solid;
  --select-disabled-box-shadow: none;
  --select-label-disabled-padding-y: 0px;
  --select-label-disabled-padding-x: 0px;
  --select-label-disabled-padding-top: 0px;
  --select-label-disabled-padding-right: 0px;
  --select-label-disabled-padding-bottom: 0px;
  --select-label-disabled-padding-left: 0px;
  --select-label-disabled-padding-start: 0px;
  --select-label-disabled-padding-end: 0px;
  --select-label-disabled-spacing: 5px;
  --select-label-disabled-font-family: "Inter";
  --select-label-disabled-font-size: 12px;
  --select-label-disabled-font-weight: 400;
  --select-label-disabled-line-height: 1.6;
  --select-label-disabled-letter-spacing: -.24px;
  --select-label-disabled-text-align: left;
  --select-label-disabled-text-decoration: none;
  --select-label-disabled-text-transform: none;
  --select-label-disabled-color: #777777;
  --select-option-disabled-font-family: "Inter";
  --select-option-disabled-font-size: 16px;
  --select-option-disabled-font-weight: 400;
  --select-option-disabled-line-height: 1;
  --select-option-disabled-letter-spacing: 0px;
  --select-option-disabled-text-align: left;
  --select-option-disabled-text-decoration: none;
  --select-option-disabled-text-transform: none;
  --select-option-disabled-color: #777777;
  --select-icon-disabled-width: 16px;
  --select-icon-disabled-width-raw: 16;
  --select-icon-disabled-height: 16px;
  --select-icon-disabled-height-raw: 16;
  --select-icon-disabled-color: #cccccc;
  --select-additional-info-disabled-padding-y: 0px;
  --select-additional-info-disabled-padding-x: 0px;
  --select-additional-info-disabled-padding-top: 0px;
  --select-additional-info-disabled-padding-right: 0px;
  --select-additional-info-disabled-padding-bottom: 0px;
  --select-additional-info-disabled-padding-left: 0px;
  --select-additional-info-disabled-padding-start: 0px;
  --select-additional-info-disabled-padding-end: 0px;
  --select-additional-info-disabled-spacing: 5px;
  --select-additional-info-disabled-font-family: "Inter";
  --select-additional-info-disabled-font-size: 12px;
  --select-additional-info-disabled-font-weight: 400;
  --select-additional-info-disabled-line-height: 1.6;
  --select-additional-info-disabled-letter-spacing: -.24px;
  --select-additional-info-disabled-text-align: left;
  --select-additional-info-disabled-text-decoration: none;
  --select-additional-info-disabled-text-transform: none;
  --select-additional-info-disabled-color: #777777;
  /* Select, state: error, theme: light */
  --select-error-background: #ffffff;
  --select-error-padding-y: 15px;
  --select-error-padding-x: 18px;
  --select-error-padding-top: 15px;
  --select-error-padding-right: 16px;
  --select-error-padding-bottom: 15px;
  --select-error-padding-left: 20px;
  --select-error-padding-start: 20px;
  --select-error-padding-end: 16px;
  --select-error-spacing: 12px;
  --select-error-border-width: 1px;
  --select-error-border-radius: 0px;
  --select-error-border-color: #dc3545;
  --select-error-border-style: solid;
  --select-error-box-shadow: none;
  --select-label-error-padding-y: 0px;
  --select-label-error-padding-x: 0px;
  --select-label-error-padding-top: 0px;
  --select-label-error-padding-right: 0px;
  --select-label-error-padding-bottom: 0px;
  --select-label-error-padding-left: 0px;
  --select-label-error-padding-start: 0px;
  --select-label-error-padding-end: 0px;
  --select-label-error-spacing: 5px;
  --select-label-error-font-family: "Inter";
  --select-label-error-font-size: 12px;
  --select-label-error-font-weight: 400;
  --select-label-error-line-height: 1.6;
  --select-label-error-letter-spacing: -.24px;
  --select-label-error-text-align: left;
  --select-label-error-text-decoration: none;
  --select-label-error-text-transform: none;
  --select-label-error-color: #555555;
  --select-option-error-font-family: "Inter";
  --select-option-error-font-size: 16px;
  --select-option-error-font-weight: 400;
  --select-option-error-line-height: 1;
  --select-option-error-letter-spacing: 0px;
  --select-option-error-text-align: left;
  --select-option-error-text-decoration: none;
  --select-option-error-text-transform: none;
  --select-option-error-color: #777777;
  --select-icon-error-width: 16px;
  --select-icon-error-width-raw: 16;
  --select-icon-error-height: 16px;
  --select-icon-error-height-raw: 16;
  --select-icon-error-color: #888888;
  --select-additional-info-error-padding-y: 0px;
  --select-additional-info-error-padding-x: 0px;
  --select-additional-info-error-padding-top: 0px;
  --select-additional-info-error-padding-right: 0px;
  --select-additional-info-error-padding-bottom: 0px;
  --select-additional-info-error-padding-left: 0px;
  --select-additional-info-error-padding-start: 0px;
  --select-additional-info-error-padding-end: 0px;
  --select-additional-info-error-spacing: 5px;
  --select-additional-info-error-font-family: "Inter";
  --select-additional-info-error-font-size: 12px;
  --select-additional-info-error-font-weight: 400;
  --select-additional-info-error-line-height: 1.6;
  --select-additional-info-error-letter-spacing: -.24px;
  --select-additional-info-error-text-align: left;
  --select-additional-info-error-text-decoration: none;
  --select-additional-info-error-text-transform: none;
  --select-additional-info-error-color: #dc3545;
  /* Select, state: active, theme: light */
  --select-active-background: #ffffff;
  --select-active-padding-y: 15px;
  --select-active-padding-x: 18px;
  --select-active-padding-top: 15px;
  --select-active-padding-right: 16px;
  --select-active-padding-bottom: 15px;
  --select-active-padding-left: 20px;
  --select-active-padding-start: 20px;
  --select-active-padding-end: 16px;
  --select-active-spacing: 12px;
  --select-active-border-width: 1px;
  --select-active-border-radius: 0px;
  --select-active-border-color: #929292;
  --select-active-border-style: solid;
  --select-active-box-shadow: none;
  --select-label-active-padding-y: 0px;
  --select-label-active-padding-x: 0px;
  --select-label-active-padding-top: 0px;
  --select-label-active-padding-right: 0px;
  --select-label-active-padding-bottom: 0px;
  --select-label-active-padding-left: 0px;
  --select-label-active-padding-start: 0px;
  --select-label-active-padding-end: 0px;
  --select-label-active-spacing: 5px;
  --select-label-active-font-family: "Inter";
  --select-label-active-font-size: 12px;
  --select-label-active-font-weight: 400;
  --select-label-active-line-height: 1.6;
  --select-label-active-letter-spacing: -.24px;
  --select-label-active-text-align: left;
  --select-label-active-text-decoration: none;
  --select-label-active-text-transform: none;
  --select-label-active-color: rgba(0, 0, 0, .8);
  --select-option-active-font-family: "Inter";
  --select-option-active-font-size: 16px;
  --select-option-active-font-weight: 400;
  --select-option-active-line-height: 1;
  --select-option-active-letter-spacing: 0px;
  --select-option-active-text-align: left;
  --select-option-active-text-decoration: none;
  --select-option-active-text-transform: none;
  --select-option-active-color: #000000;
  --select-icon-active-width: 16px;
  --select-icon-active-width-raw: 16;
  --select-icon-active-height: 16px;
  --select-icon-active-height-raw: 16;
  --select-icon-active-color: #888888;
  --select-additional-info-active-padding-y: 0px;
  --select-additional-info-active-padding-x: 0px;
  --select-additional-info-active-padding-top: 0px;
  --select-additional-info-active-padding-right: 0px;
  --select-additional-info-active-padding-bottom: 0px;
  --select-additional-info-active-padding-left: 0px;
  --select-additional-info-active-padding-start: 0px;
  --select-additional-info-active-padding-end: 0px;
  --select-additional-info-active-spacing: 5px;
  --select-additional-info-active-font-family: "Inter";
  --select-additional-info-active-font-size: 12px;
  --select-additional-info-active-font-weight: 400;
  --select-additional-info-active-line-height: 1.6;
  --select-additional-info-active-letter-spacing: -.24px;
  --select-additional-info-active-text-align: left;
  --select-additional-info-active-text-decoration: none;
  --select-additional-info-active-text-transform: none;
  --select-additional-info-active-color: #777777;
  /* Select, state: hover, theme: light */
  --select-hover-background: #ffffff;
  --select-hover-padding-y: 15px;
  --select-hover-padding-x: 18px;
  --select-hover-padding-top: 15px;
  --select-hover-padding-right: 16px;
  --select-hover-padding-bottom: 15px;
  --select-hover-padding-left: 20px;
  --select-hover-padding-start: 20px;
  --select-hover-padding-end: 16px;
  --select-hover-spacing: 12px;
  --select-hover-border-width: 1px;
  --select-hover-border-radius: 0px;
  --select-hover-border-color: #b3b3b3;
  --select-hover-border-style: solid;
  --select-hover-box-shadow: none;
  --select-label-hover-padding-y: 0px;
  --select-label-hover-padding-x: 0px;
  --select-label-hover-padding-top: 0px;
  --select-label-hover-padding-right: 0px;
  --select-label-hover-padding-bottom: 0px;
  --select-label-hover-padding-left: 0px;
  --select-label-hover-padding-start: 0px;
  --select-label-hover-padding-end: 0px;
  --select-label-hover-spacing: 5px;
  --select-label-hover-font-family: "Inter";
  --select-label-hover-font-size: 12px;
  --select-label-hover-font-weight: 400;
  --select-label-hover-line-height: 1.6;
  --select-label-hover-letter-spacing: -.24px;
  --select-label-hover-text-align: left;
  --select-label-hover-text-decoration: none;
  --select-label-hover-text-transform: none;
  --select-label-hover-color: #555555;
  --select-option-hover-font-family: "Inter";
  --select-option-hover-font-size: 16px;
  --select-option-hover-font-weight: 400;
  --select-option-hover-line-height: 1;
  --select-option-hover-letter-spacing: 0px;
  --select-option-hover-text-align: left;
  --select-option-hover-text-decoration: none;
  --select-option-hover-text-transform: none;
  --select-option-hover-color: #777777;
  --select-icon-hover-width: 16px;
  --select-icon-hover-width-raw: 16;
  --select-icon-hover-height: 16px;
  --select-icon-hover-height-raw: 16;
  --select-icon-hover-color: #888888;
  --select-additional-info-hover-padding-y: 0px;
  --select-additional-info-hover-padding-x: 0px;
  --select-additional-info-hover-padding-top: 0px;
  --select-additional-info-hover-padding-right: 0px;
  --select-additional-info-hover-padding-bottom: 0px;
  --select-additional-info-hover-padding-left: 0px;
  --select-additional-info-hover-padding-start: 0px;
  --select-additional-info-hover-padding-end: 0px;
  --select-additional-info-hover-spacing: 5px;
  --select-additional-info-hover-font-family: "Inter";
  --select-additional-info-hover-font-size: 12px;
  --select-additional-info-hover-font-weight: 400;
  --select-additional-info-hover-line-height: 1.6;
  --select-additional-info-hover-letter-spacing: -.24px;
  --select-additional-info-hover-text-align: left;
  --select-additional-info-hover-text-decoration: none;
  --select-additional-info-hover-text-transform: none;
  --select-additional-info-hover-color: #777777;
  /* Select, state: default, theme: light */
  --select-background: #ffffff;
  --select-padding-y: 15px;
  --select-padding-x: 18px;
  --select-padding-top: 15px;
  --select-padding-right: 16px;
  --select-padding-bottom: 15px;
  --select-padding-left: 20px;
  --select-padding-start: 20px;
  --select-padding-end: 16px;
  --select-spacing: 12px;
  --select-border-width: 1px;
  --select-border-radius: 0px;
  --select-border-color: #e8e8e8;
  --select-border-style: solid;
  --select-box-shadow: none;
  --select-label-padding-y: 0px;
  --select-label-padding-x: 0px;
  --select-label-padding-top: 0px;
  --select-label-padding-right: 0px;
  --select-label-padding-bottom: 0px;
  --select-label-padding-left: 0px;
  --select-label-padding-start: 0px;
  --select-label-padding-end: 0px;
  --select-label-spacing: 5px;
  --select-label-font-family: "Inter";
  --select-label-font-size: 12px;
  --select-label-font-weight: 400;
  --select-label-line-height: 1.6;
  --select-label-letter-spacing: -.24px;
  --select-label-text-align: left;
  --select-label-text-decoration: none;
  --select-label-text-transform: none;
  --select-label-color: #555555;
  --select-option-font-family: "Inter";
  --select-option-font-size: 16px;
  --select-option-font-weight: 400;
  --select-option-line-height: 1;
  --select-option-letter-spacing: 0px;
  --select-option-text-align: left;
  --select-option-text-decoration: none;
  --select-option-text-transform: none;
  --select-option-color: #000000;
  --select-icon-width: 16px;
  --select-icon-width-raw: 16;
  --select-icon-height: 16px;
  --select-icon-height-raw: 16;
  --select-icon-color: #888888;
  --select-additional-info-padding-y: 0px;
  --select-additional-info-padding-x: 0px;
  --select-additional-info-padding-top: 0px;
  --select-additional-info-padding-right: 0px;
  --select-additional-info-padding-bottom: 0px;
  --select-additional-info-padding-left: 0px;
  --select-additional-info-padding-start: 0px;
  --select-additional-info-padding-end: 0px;
  --select-additional-info-spacing: 5px;
  --select-additional-info-font-family: "Inter";
  --select-additional-info-font-size: 12px;
  --select-additional-info-font-weight: 400;
  --select-additional-info-line-height: 1.6;
  --select-additional-info-letter-spacing: -.24px;
  --select-additional-info-text-align: left;
  --select-additional-info-text-decoration: none;
  --select-additional-info-text-transform: none;
  --select-additional-info-color: #777777;
  /* Select, size: small */
  --select-sm-background: rgba(0, 0, 0, 0);
  --select-sm-padding-y: 10px;
  --select-sm-padding-x: 14px;
  --select-sm-padding-top: 10px;
  --select-sm-padding-right: 12px;
  --select-sm-padding-bottom: 10px;
  --select-sm-padding-left: 16px;
  --select-sm-padding-start: 16px;
  --select-sm-padding-end: 12px;
  --select-sm-spacing: 12px;
  --select-sm-border-width: 1px;
  --select-sm-border-radius: 0px;
  --select-sm-border-color: #000000;
  --select-sm-border-style: solid;
  --select-sm-box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
  --select-sm-label-padding-y: 0px;
  --select-sm-label-padding-x: 0px;
  --select-sm-label-padding-top: 0px;
  --select-sm-label-padding-right: 0px;
  --select-sm-label-padding-bottom: 0px;
  --select-sm-label-padding-left: 0px;
  --select-sm-label-padding-start: 0px;
  --select-sm-label-padding-end: 0px;
  --select-sm-label-spacing: 2px;
  --select-sm-label-font-family: "Inter";
  --select-sm-label-font-size: 12px;
  --select-sm-label-font-weight: 400;
  --select-sm-label-line-height: 1.6;
  --select-sm-label-letter-spacing: -.24px;
  --select-sm-label-text-align: left;
  --select-sm-label-text-decoration: none;
  --select-sm-label-text-transform: none;
  --select-sm-label-color: #555555;
  --select-sm-option-font-family: "Inter";
  --select-sm-option-font-size: 12px;
  --select-sm-option-font-weight: 400;
  --select-sm-option-line-height: 1.667;
  --select-sm-option-letter-spacing: 0px;
  --select-sm-option-text-align: left;
  --select-sm-option-text-decoration: none;
  --select-sm-option-text-transform: none;
  --select-sm-option-color: #555555;
  --select-sm-icon-width: 16px;
  --select-sm-icon-width-raw: 16;
  --select-sm-icon-height: 16px;
  --select-sm-icon-height-raw: 16;
  --select-sm-icon-color: #888888;
  --select-sm-additional-info-padding-y: 0px;
  --select-sm-additional-info-padding-x: 0px;
  --select-sm-additional-info-padding-top: 0px;
  --select-sm-additional-info-padding-right: 0px;
  --select-sm-additional-info-padding-bottom: 0px;
  --select-sm-additional-info-padding-left: 0px;
  --select-sm-additional-info-padding-start: 0px;
  --select-sm-additional-info-padding-end: 0px;
  --select-sm-additional-info-spacing: 2px;
  --select-sm-additional-info-font-family: "Inter";
  --select-sm-additional-info-font-size: 12px;
  --select-sm-additional-info-font-weight: 400;
  --select-sm-additional-info-line-height: 1.6;
  --select-sm-additional-info-letter-spacing: -.24px;
  --select-sm-additional-info-text-align: left;
  --select-sm-additional-info-text-decoration: none;
  --select-sm-additional-info-text-transform: none;
  --select-sm-additional-info-color: #555555;
  /* Select, size: medium */
  --select-md-background: rgba(0, 0, 0, 0);
  --select-md-padding-y: 15px;
  --select-md-padding-x: 18px;
  --select-md-padding-top: 15px;
  --select-md-padding-right: 16px;
  --select-md-padding-bottom: 15px;
  --select-md-padding-left: 20px;
  --select-md-padding-start: 20px;
  --select-md-padding-end: 16px;
  --select-md-spacing: 12px;
  --select-md-border-width: 1px;
  --select-md-border-radius: 0px;
  --select-md-border-color: #000000;
  --select-md-border-style: solid;
  --select-md-box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
  --select-md-label-padding-y: 0px;
  --select-md-label-padding-x: 0px;
  --select-md-label-padding-top: 0px;
  --select-md-label-padding-right: 0px;
  --select-md-label-padding-bottom: 0px;
  --select-md-label-padding-left: 0px;
  --select-md-label-padding-start: 0px;
  --select-md-label-padding-end: 0px;
  --select-md-label-spacing: 5px;
  --select-md-label-font-family: "Inter";
  --select-md-label-font-size: 12px;
  --select-md-label-font-weight: 400;
  --select-md-label-line-height: 1.6;
  --select-md-label-letter-spacing: -.24px;
  --select-md-label-text-align: left;
  --select-md-label-text-decoration: none;
  --select-md-label-text-transform: none;
  --select-md-label-color: #555555;
  --select-md-option-font-family: "Inter";
  --select-md-option-font-size: 16px;
  --select-md-option-font-weight: 400;
  --select-md-option-line-height: 1;
  --select-md-option-letter-spacing: 0px;
  --select-md-option-text-align: left;
  --select-md-option-text-decoration: none;
  --select-md-option-text-transform: none;
  --select-md-option-color: #555555;
  --select-md-icon-width: 16px;
  --select-md-icon-width-raw: 16;
  --select-md-icon-height: 16px;
  --select-md-icon-height-raw: 16;
  --select-md-icon-color: #888888;
  --select-md-additional-info-padding-y: 0px;
  --select-md-additional-info-padding-x: 0px;
  --select-md-additional-info-padding-top: 0px;
  --select-md-additional-info-padding-right: 0px;
  --select-md-additional-info-padding-bottom: 0px;
  --select-md-additional-info-padding-left: 0px;
  --select-md-additional-info-padding-start: 0px;
  --select-md-additional-info-padding-end: 0px;
  --select-md-additional-info-spacing: 5px;
  --select-md-additional-info-font-family: "Inter";
  --select-md-additional-info-font-size: 12px;
  --select-md-additional-info-font-weight: 400;
  --select-md-additional-info-line-height: 1.6;
  --select-md-additional-info-letter-spacing: -.24px;
  --select-md-additional-info-text-align: left;
  --select-md-additional-info-text-decoration: none;
  --select-md-additional-info-text-transform: none;
  --select-md-additional-info-color: #555555;
  /* Select, size: large */
  --select-lg-background: rgba(0, 0, 0, 0);
  --select-lg-padding-y: 14px;
  --select-lg-padding-x: 18px;
  --select-lg-padding-top: 14px;
  --select-lg-padding-right: 16px;
  --select-lg-padding-bottom: 14px;
  --select-lg-padding-left: 20px;
  --select-lg-padding-start: 20px;
  --select-lg-padding-end: 16px;
  --select-lg-spacing: 12px;
  --select-lg-border-width: 1px;
  --select-lg-border-radius: 0px;
  --select-lg-border-color: #000000;
  --select-lg-border-style: solid;
  --select-lg-box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
  --select-lg-label-padding-y: 0px;
  --select-lg-label-padding-x: 0px;
  --select-lg-label-padding-top: 0px;
  --select-lg-label-padding-right: 0px;
  --select-lg-label-padding-bottom: 0px;
  --select-lg-label-padding-left: 0px;
  --select-lg-label-padding-start: 0px;
  --select-lg-label-padding-end: 0px;
  --select-lg-label-spacing: 5px;
  --select-lg-label-font-family: "Inter";
  --select-lg-label-font-size: 12px;
  --select-lg-label-font-weight: 400;
  --select-lg-label-line-height: 1.6;
  --select-lg-label-letter-spacing: -.24px;
  --select-lg-label-text-align: left;
  --select-lg-label-text-decoration: none;
  --select-lg-label-text-transform: none;
  --select-lg-label-color: #555555;
  --select-lg-option-font-family: "Inter";
  --select-lg-option-font-size: 18px;
  --select-lg-option-font-weight: 400;
  --select-lg-option-line-height: 1.111;
  --select-lg-option-letter-spacing: 0px;
  --select-lg-option-text-align: left;
  --select-lg-option-text-decoration: none;
  --select-lg-option-text-transform: none;
  --select-lg-option-color: #555555;
  --select-lg-icon-width: 16px;
  --select-lg-icon-width-raw: 16;
  --select-lg-icon-height: 16px;
  --select-lg-icon-height-raw: 16;
  --select-lg-icon-color: #888888;
  --select-lg-additional-info-padding-y: 0px;
  --select-lg-additional-info-padding-x: 0px;
  --select-lg-additional-info-padding-top: 0px;
  --select-lg-additional-info-padding-right: 0px;
  --select-lg-additional-info-padding-bottom: 0px;
  --select-lg-additional-info-padding-left: 0px;
  --select-lg-additional-info-padding-start: 0px;
  --select-lg-additional-info-padding-end: 0px;
  --select-lg-additional-info-spacing: 5px;
  --select-lg-additional-info-font-family: "Inter";
  --select-lg-additional-info-font-size: 12px;
  --select-lg-additional-info-font-weight: 400;
  --select-lg-additional-info-line-height: 1.6;
  --select-lg-additional-info-letter-spacing: -.24px;
  --select-lg-additional-info-text-align: left;
  --select-lg-additional-info-text-decoration: none;
  --select-lg-additional-info-text-transform: none;
  --select-lg-additional-info-color: #555555;
}

.switch {
  /* Switch, state: disabled, activity: on, theme: dark */
  --switch-disabled-dark-on-padding-y: 0px;
  --switch-disabled-dark-on-padding-x: 0px;
  --switch-disabled-dark-on-padding-top: 0px;
  --switch-disabled-dark-on-padding-right: 0px;
  --switch-disabled-dark-on-padding-bottom: 0px;
  --switch-disabled-dark-on-padding-left: 0px;
  --switch-disabled-dark-on-padding-start: 0px;
  --switch-disabled-dark-on-padding-end: 0px;
  --switch-disabled-dark-on-spacing: 12px;
  --switch-disabled-dark-on-opacity: .4;
  --switch-disabled-dark-on-background: transparent;
  --switch-disabled-dark-on-width: 36px;
  --switch-disabled-dark-on-width-raw: 36;
  --switch-disabled-dark-on-height: 20px;
  --switch-disabled-dark-on-height-raw: 20;
  --switch-disabled-dark-on-border-width: 1px;
  --switch-disabled-dark-on-border-radius: 174px;
  --switch-disabled-dark-on-border-color: rgba(0, 0, 0, 0);
  --switch-disabled-dark-on-border-style: solid;
  --switch-disabled-dark-on-box-shadow: none;
  --switch-disabled-thumb-dark-on-color: #ffffff;
  --switch-disabled-thumb-dark-on-border-width: 1px;
  --switch-disabled-thumb-dark-on-border-radius: 0px;
  --switch-disabled-thumb-dark-on-border-color: transparent;
  --switch-disabled-thumb-dark-on-border-style: solid;
  --switch-disabled-thumb-dark-on-width: 12px;
  --switch-disabled-thumb-dark-on-width-raw: 12;
  --switch-disabled-thumb-dark-on-height: 12px;
  --switch-disabled-thumb-dark-on-height-raw: 12;
  --switch-disabled-label-dark-on-font-family: "Inter";
  --switch-disabled-label-dark-on-font-size: 16px;
  --switch-disabled-label-dark-on-font-weight: 400;
  --switch-disabled-label-dark-on-line-height: 1;
  --switch-disabled-label-dark-on-letter-spacing: 0px;
  --switch-disabled-label-dark-on-text-align: left;
  --switch-disabled-label-dark-on-text-decoration: none;
  --switch-disabled-label-dark-on-text-transform: none;
  --switch-disabled-label-dark-on-opacity: 1;
  /* Switch, state: hover, activity: on, theme: dark */
  --switch-hover-dark-on-padding-y: 0px;
  --switch-hover-dark-on-padding-x: 0px;
  --switch-hover-dark-on-padding-top: 0px;
  --switch-hover-dark-on-padding-right: 0px;
  --switch-hover-dark-on-padding-bottom: 0px;
  --switch-hover-dark-on-padding-left: 0px;
  --switch-hover-dark-on-padding-start: 0px;
  --switch-hover-dark-on-padding-end: 0px;
  --switch-hover-dark-on-spacing: 12px;
  --switch-hover-dark-on-opacity: 1;
  --switch-hover-dark-on-background: transparent;
  --switch-hover-dark-on-width: 36px;
  --switch-hover-dark-on-width-raw: 36;
  --switch-hover-dark-on-height: 20px;
  --switch-hover-dark-on-height-raw: 20;
  --switch-hover-dark-on-border-width: 1px;
  --switch-hover-dark-on-border-radius: 174px;
  --switch-hover-dark-on-border-color: rgba(0, 0, 0, 0);
  --switch-hover-dark-on-border-style: solid;
  --switch-hover-dark-on-box-shadow: none;
  --switch-hover-thumb-dark-on-color: #ffffff;
  --switch-hover-thumb-dark-on-border-width: 1px;
  --switch-hover-thumb-dark-on-border-radius: 0px;
  --switch-hover-thumb-dark-on-border-color: transparent;
  --switch-hover-thumb-dark-on-border-style: solid;
  --switch-hover-thumb-dark-on-width: 12px;
  --switch-hover-thumb-dark-on-width-raw: 12;
  --switch-hover-thumb-dark-on-height: 12px;
  --switch-hover-thumb-dark-on-height-raw: 12;
  --switch-hover-label-dark-on-font-family: "Inter";
  --switch-hover-label-dark-on-font-size: 16px;
  --switch-hover-label-dark-on-font-weight: 400;
  --switch-hover-label-dark-on-line-height: 1;
  --switch-hover-label-dark-on-letter-spacing: 0px;
  --switch-hover-label-dark-on-text-align: left;
  --switch-hover-label-dark-on-text-decoration: none;
  --switch-hover-label-dark-on-text-transform: none;
  --switch-hover-label-dark-on-opacity: 1;
  /* Switch, state: default, activity: on, theme: dark */
  --switch-dark-on-padding-y: 0px;
  --switch-dark-on-padding-x: 0px;
  --switch-dark-on-padding-top: 0px;
  --switch-dark-on-padding-right: 0px;
  --switch-dark-on-padding-bottom: 0px;
  --switch-dark-on-padding-left: 0px;
  --switch-dark-on-padding-start: 0px;
  --switch-dark-on-padding-end: 0px;
  --switch-dark-on-spacing: 12px;
  --switch-dark-on-opacity: 1;
  --switch-dark-on-background: transparent;
  --switch-dark-on-width: 36px;
  --switch-dark-on-width-raw: 36;
  --switch-dark-on-height: 20px;
  --switch-dark-on-height-raw: 20;
  --switch-dark-on-border-width: 1px;
  --switch-dark-on-border-radius: 174px;
  --switch-dark-on-border-color: rgba(0, 0, 0, 0);
  --switch-dark-on-border-style: solid;
  --switch-dark-on-box-shadow: none;
  --switch-thumb-dark-on-color: #ffffff;
  --switch-thumb-dark-on-border-width: 1px;
  --switch-thumb-dark-on-border-radius: 0px;
  --switch-thumb-dark-on-border-color: transparent;
  --switch-thumb-dark-on-border-style: solid;
  --switch-thumb-dark-on-width: 12px;
  --switch-thumb-dark-on-width-raw: 12;
  --switch-thumb-dark-on-height: 12px;
  --switch-thumb-dark-on-height-raw: 12;
  --switch-label-dark-on-font-family: "Inter";
  --switch-label-dark-on-font-size: 16px;
  --switch-label-dark-on-font-weight: 400;
  --switch-label-dark-on-line-height: 1;
  --switch-label-dark-on-letter-spacing: 0px;
  --switch-label-dark-on-text-align: left;
  --switch-label-dark-on-text-decoration: none;
  --switch-label-dark-on-text-transform: none;
  --switch-label-dark-on-opacity: 1;
  /* Switch, state: disabled, activity: off, theme: dark */
  --switch-disabled-dark-off-padding-y: 0px;
  --switch-disabled-dark-off-padding-x: 0px;
  --switch-disabled-dark-off-padding-top: 0px;
  --switch-disabled-dark-off-padding-right: 0px;
  --switch-disabled-dark-off-padding-bottom: 0px;
  --switch-disabled-dark-off-padding-left: 0px;
  --switch-disabled-dark-off-padding-start: 0px;
  --switch-disabled-dark-off-padding-end: 0px;
  --switch-disabled-dark-off-spacing: 12px;
  --switch-disabled-dark-off-opacity: .4;
  --switch-disabled-dark-off-background: transparent;
  --switch-disabled-dark-off-width: 36px;
  --switch-disabled-dark-off-width-raw: 36;
  --switch-disabled-dark-off-height: 20px;
  --switch-disabled-dark-off-height-raw: 20;
  --switch-disabled-dark-off-border-width: 1px;
  --switch-disabled-dark-off-border-radius: 174px;
  --switch-disabled-dark-off-border-color: rgba(0, 0, 0, 0);
  --switch-disabled-dark-off-border-style: solid;
  --switch-disabled-dark-off-box-shadow: none;
  --switch-disabled-thumb-dark-off-color: #000000;
  --switch-disabled-thumb-dark-off-border-width: 1px;
  --switch-disabled-thumb-dark-off-border-radius: 0px;
  --switch-disabled-thumb-dark-off-border-color: transparent;
  --switch-disabled-thumb-dark-off-border-style: solid;
  --switch-disabled-thumb-dark-off-width: 12px;
  --switch-disabled-thumb-dark-off-width-raw: 12;
  --switch-disabled-thumb-dark-off-height: 12px;
  --switch-disabled-thumb-dark-off-height-raw: 12;
  --switch-disabled-label-dark-off-font-family: "Inter";
  --switch-disabled-label-dark-off-font-size: 16px;
  --switch-disabled-label-dark-off-font-weight: 400;
  --switch-disabled-label-dark-off-line-height: 1;
  --switch-disabled-label-dark-off-letter-spacing: 0px;
  --switch-disabled-label-dark-off-text-align: left;
  --switch-disabled-label-dark-off-text-decoration: none;
  --switch-disabled-label-dark-off-text-transform: none;
  --switch-disabled-label-dark-off-opacity: 1;
  /* Switch, state: hover, activity: off, theme: dark */
  --switch-hover-dark-off-padding-y: 0px;
  --switch-hover-dark-off-padding-x: 0px;
  --switch-hover-dark-off-padding-top: 0px;
  --switch-hover-dark-off-padding-right: 0px;
  --switch-hover-dark-off-padding-bottom: 0px;
  --switch-hover-dark-off-padding-left: 0px;
  --switch-hover-dark-off-padding-start: 0px;
  --switch-hover-dark-off-padding-end: 0px;
  --switch-hover-dark-off-spacing: 12px;
  --switch-hover-dark-off-opacity: 1;
  --switch-hover-dark-off-background: transparent;
  --switch-hover-dark-off-width: 36px;
  --switch-hover-dark-off-width-raw: 36;
  --switch-hover-dark-off-height: 20px;
  --switch-hover-dark-off-height-raw: 20;
  --switch-hover-dark-off-border-width: 1px;
  --switch-hover-dark-off-border-radius: 174px;
  --switch-hover-dark-off-border-color: rgba(255, 255, 255, .75);
  --switch-hover-dark-off-border-style: solid;
  --switch-hover-dark-off-box-shadow: none;
  --switch-hover-thumb-dark-off-color: #000000;
  --switch-hover-thumb-dark-off-border-width: 1px;
  --switch-hover-thumb-dark-off-border-radius: 0px;
  --switch-hover-thumb-dark-off-border-color: transparent;
  --switch-hover-thumb-dark-off-border-style: solid;
  --switch-hover-thumb-dark-off-width: 12px;
  --switch-hover-thumb-dark-off-width-raw: 12;
  --switch-hover-thumb-dark-off-height: 12px;
  --switch-hover-thumb-dark-off-height-raw: 12;
  --switch-hover-label-dark-off-font-family: "Inter";
  --switch-hover-label-dark-off-font-size: 16px;
  --switch-hover-label-dark-off-font-weight: 400;
  --switch-hover-label-dark-off-line-height: 1;
  --switch-hover-label-dark-off-letter-spacing: 0px;
  --switch-hover-label-dark-off-text-align: left;
  --switch-hover-label-dark-off-text-decoration: none;
  --switch-hover-label-dark-off-text-transform: none;
  --switch-hover-label-dark-off-opacity: 1;
  /* Switch, state: default, activity: off, theme: dark */
  --switch-dark-off-padding-y: 0px;
  --switch-dark-off-padding-x: 0px;
  --switch-dark-off-padding-top: 0px;
  --switch-dark-off-padding-right: 0px;
  --switch-dark-off-padding-bottom: 0px;
  --switch-dark-off-padding-left: 0px;
  --switch-dark-off-padding-start: 0px;
  --switch-dark-off-padding-end: 0px;
  --switch-dark-off-spacing: 12px;
  --switch-dark-off-opacity: 1;
  --switch-dark-off-background: transparent;
  --switch-dark-off-width: 36px;
  --switch-dark-off-width-raw: 36;
  --switch-dark-off-height: 20px;
  --switch-dark-off-height-raw: 20;
  --switch-dark-off-border-width: 1px;
  --switch-dark-off-border-radius: 174px;
  --switch-dark-off-border-color: rgba(255, 255, 255, .4);
  --switch-dark-off-border-style: solid;
  --switch-dark-off-box-shadow: none;
  --switch-thumb-dark-off-color: #000000;
  --switch-thumb-dark-off-border-width: 1px;
  --switch-thumb-dark-off-border-radius: 0px;
  --switch-thumb-dark-off-border-color: transparent;
  --switch-thumb-dark-off-border-style: solid;
  --switch-thumb-dark-off-width: 12px;
  --switch-thumb-dark-off-width-raw: 12;
  --switch-thumb-dark-off-height: 12px;
  --switch-thumb-dark-off-height-raw: 12;
  --switch-label-dark-off-font-family: "Inter";
  --switch-label-dark-off-font-size: 16px;
  --switch-label-dark-off-font-weight: 400;
  --switch-label-dark-off-line-height: 1;
  --switch-label-dark-off-letter-spacing: 0px;
  --switch-label-dark-off-text-align: left;
  --switch-label-dark-off-text-decoration: none;
  --switch-label-dark-off-text-transform: none;
  --switch-label-dark-off-opacity: 1;
  /* Switch, state: disabled, activity: on, theme: light */
  --switch-disabled-on-padding-y: 0px;
  --switch-disabled-on-padding-x: 0px;
  --switch-disabled-on-padding-top: 0px;
  --switch-disabled-on-padding-right: 0px;
  --switch-disabled-on-padding-bottom: 0px;
  --switch-disabled-on-padding-left: 0px;
  --switch-disabled-on-padding-start: 0px;
  --switch-disabled-on-padding-end: 0px;
  --switch-disabled-on-spacing: 12px;
  --switch-disabled-on-opacity: .3;
  --switch-disabled-on-background: transparent;
  --switch-disabled-on-width: 36px;
  --switch-disabled-on-width-raw: 36;
  --switch-disabled-on-height: 20px;
  --switch-disabled-on-height-raw: 20;
  --switch-disabled-on-border-width: 1px;
  --switch-disabled-on-border-radius: 174px;
  --switch-disabled-on-border-color: rgba(0, 0, 0, 0);
  --switch-disabled-on-border-style: solid;
  --switch-disabled-on-box-shadow: none;
  --switch-disabled-thumb-on-color: #ffffff;
  --switch-disabled-thumb-on-border-width: 1px;
  --switch-disabled-thumb-on-border-radius: 0px;
  --switch-disabled-thumb-on-border-color: transparent;
  --switch-disabled-thumb-on-border-style: solid;
  --switch-disabled-thumb-on-width: 12px;
  --switch-disabled-thumb-on-width-raw: 12;
  --switch-disabled-thumb-on-height: 12px;
  --switch-disabled-thumb-on-height-raw: 12;
  --switch-disabled-label-on-font-family: "Inter";
  --switch-disabled-label-on-font-size: 16px;
  --switch-disabled-label-on-font-weight: 400;
  --switch-disabled-label-on-line-height: 1;
  --switch-disabled-label-on-letter-spacing: 0px;
  --switch-disabled-label-on-text-align: left;
  --switch-disabled-label-on-text-decoration: none;
  --switch-disabled-label-on-text-transform: none;
  --switch-disabled-label-on-opacity: 1;
  /* Switch, state: hover, activity: on, theme: light */
  --switch-hover-on-padding-y: 0px;
  --switch-hover-on-padding-x: 0px;
  --switch-hover-on-padding-top: 0px;
  --switch-hover-on-padding-right: 0px;
  --switch-hover-on-padding-bottom: 0px;
  --switch-hover-on-padding-left: 0px;
  --switch-hover-on-padding-start: 0px;
  --switch-hover-on-padding-end: 0px;
  --switch-hover-on-spacing: 12px;
  --switch-hover-on-opacity: 1;
  --switch-hover-on-background: transparent;
  --switch-hover-on-width: 36px;
  --switch-hover-on-width-raw: 36;
  --switch-hover-on-height: 20px;
  --switch-hover-on-height-raw: 20;
  --switch-hover-on-border-width: 2px;
  --switch-hover-on-border-radius: 174px;
  --switch-hover-on-border-color: rgba(0, 0, 0, 0);
  --switch-hover-on-border-style: solid;
  --switch-hover-on-box-shadow: none;
  --switch-hover-thumb-on-color: #ffffff;
  --switch-hover-thumb-on-border-width: 1px;
  --switch-hover-thumb-on-border-radius: 0px;
  --switch-hover-thumb-on-border-color: transparent;
  --switch-hover-thumb-on-border-style: solid;
  --switch-hover-thumb-on-width: 12px;
  --switch-hover-thumb-on-width-raw: 12;
  --switch-hover-thumb-on-height: 12px;
  --switch-hover-thumb-on-height-raw: 12;
  --switch-hover-label-on-font-family: "Inter";
  --switch-hover-label-on-font-size: 16px;
  --switch-hover-label-on-font-weight: 400;
  --switch-hover-label-on-line-height: 1;
  --switch-hover-label-on-letter-spacing: 0px;
  --switch-hover-label-on-text-align: left;
  --switch-hover-label-on-text-decoration: none;
  --switch-hover-label-on-text-transform: none;
  --switch-hover-label-on-opacity: 1;
  /* Switch, state: default, activity: on, theme: light */
  --switch-on-padding-y: 0px;
  --switch-on-padding-x: 0px;
  --switch-on-padding-top: 0px;
  --switch-on-padding-right: 0px;
  --switch-on-padding-bottom: 0px;
  --switch-on-padding-left: 0px;
  --switch-on-padding-start: 0px;
  --switch-on-padding-end: 0px;
  --switch-on-spacing: 12px;
  --switch-on-opacity: 1;
  --switch-on-background: transparent;
  --switch-on-width: 36px;
  --switch-on-width-raw: 36;
  --switch-on-height: 20px;
  --switch-on-height-raw: 20;
  --switch-on-border-width: 1px;
  --switch-on-border-radius: 174px;
  --switch-on-border-color: rgba(0, 0, 0, 0);
  --switch-on-border-style: solid;
  --switch-on-box-shadow: none;
  --switch-thumb-on-color: #ffffff;
  --switch-thumb-on-border-width: 1px;
  --switch-thumb-on-border-radius: 0px;
  --switch-thumb-on-border-color: transparent;
  --switch-thumb-on-border-style: solid;
  --switch-thumb-on-width: 12px;
  --switch-thumb-on-width-raw: 12;
  --switch-thumb-on-height: 12px;
  --switch-thumb-on-height-raw: 12;
  --switch-label-on-font-family: "Inter";
  --switch-label-on-font-size: 16px;
  --switch-label-on-font-weight: 400;
  --switch-label-on-line-height: 1;
  --switch-label-on-letter-spacing: 0px;
  --switch-label-on-text-align: left;
  --switch-label-on-text-decoration: none;
  --switch-label-on-text-transform: none;
  --switch-label-on-opacity: 1;
  /* Switch, state: disabled, activity: off, theme: light */
  --switch-disabled-off-padding-y: 0px;
  --switch-disabled-off-padding-x: 0px;
  --switch-disabled-off-padding-top: 0px;
  --switch-disabled-off-padding-right: 0px;
  --switch-disabled-off-padding-bottom: 0px;
  --switch-disabled-off-padding-left: 0px;
  --switch-disabled-off-padding-start: 0px;
  --switch-disabled-off-padding-end: 0px;
  --switch-disabled-off-spacing: 12px;
  --switch-disabled-off-opacity: .3;
  --switch-disabled-off-background: transparent;
  --switch-disabled-off-width: 36px;
  --switch-disabled-off-width-raw: 36;
  --switch-disabled-off-height: 20px;
  --switch-disabled-off-height-raw: 20;
  --switch-disabled-off-border-width: 1px;
  --switch-disabled-off-border-radius: 174px;
  --switch-disabled-off-border-color: rgba(0, 0, 0, 0);
  --switch-disabled-off-border-style: solid;
  --switch-disabled-off-box-shadow: none;
  --switch-disabled-thumb-off-color: #000000;
  --switch-disabled-thumb-off-border-width: 1px;
  --switch-disabled-thumb-off-border-radius: 0px;
  --switch-disabled-thumb-off-border-color: transparent;
  --switch-disabled-thumb-off-border-style: solid;
  --switch-disabled-thumb-off-width: 12px;
  --switch-disabled-thumb-off-width-raw: 12;
  --switch-disabled-thumb-off-height: 12px;
  --switch-disabled-thumb-off-height-raw: 12;
  --switch-disabled-label-off-font-family: "Inter";
  --switch-disabled-label-off-font-size: 16px;
  --switch-disabled-label-off-font-weight: 400;
  --switch-disabled-label-off-line-height: 1;
  --switch-disabled-label-off-letter-spacing: 0px;
  --switch-disabled-label-off-text-align: left;
  --switch-disabled-label-off-text-decoration: none;
  --switch-disabled-label-off-text-transform: none;
  --switch-disabled-label-off-opacity: 1;
  /* Switch, state: hover, activity: off, theme: light */
  --switch-hover-off-padding-y: 0px;
  --switch-hover-off-padding-x: 0px;
  --switch-hover-off-padding-top: 0px;
  --switch-hover-off-padding-right: 0px;
  --switch-hover-off-padding-bottom: 0px;
  --switch-hover-off-padding-left: 0px;
  --switch-hover-off-padding-start: 0px;
  --switch-hover-off-padding-end: 0px;
  --switch-hover-off-spacing: 12px;
  --switch-hover-off-opacity: 1;
  --switch-hover-off-background: transparent;
  --switch-hover-off-width: 36px;
  --switch-hover-off-width-raw: 36;
  --switch-hover-off-height: 20px;
  --switch-hover-off-height-raw: 20;
  --switch-hover-off-border-width: 1px;
  --switch-hover-off-border-radius: 174px;
  --switch-hover-off-border-color: #929292;
  --switch-hover-off-border-style: solid;
  --switch-hover-off-box-shadow: none;
  --switch-hover-thumb-off-color: #000000;
  --switch-hover-thumb-off-border-width: 1px;
  --switch-hover-thumb-off-border-radius: 0px;
  --switch-hover-thumb-off-border-color: transparent;
  --switch-hover-thumb-off-border-style: solid;
  --switch-hover-thumb-off-width: 12px;
  --switch-hover-thumb-off-width-raw: 12;
  --switch-hover-thumb-off-height: 12px;
  --switch-hover-thumb-off-height-raw: 12;
  --switch-hover-label-off-font-family: "Inter";
  --switch-hover-label-off-font-size: 16px;
  --switch-hover-label-off-font-weight: 400;
  --switch-hover-label-off-line-height: 1;
  --switch-hover-label-off-letter-spacing: 0px;
  --switch-hover-label-off-text-align: left;
  --switch-hover-label-off-text-decoration: none;
  --switch-hover-label-off-text-transform: none;
  --switch-hover-label-off-opacity: 1;
  /* Switch, state: default, activity: off, theme: light */
  --switch-off-padding-y: 0px;
  --switch-off-padding-x: 0px;
  --switch-off-padding-top: 0px;
  --switch-off-padding-right: 0px;
  --switch-off-padding-bottom: 0px;
  --switch-off-padding-left: 0px;
  --switch-off-padding-start: 0px;
  --switch-off-padding-end: 0px;
  --switch-off-spacing: 12px;
  --switch-off-opacity: 1;
  --switch-off-background: transparent;
  --switch-off-width: 36px;
  --switch-off-width-raw: 36;
  --switch-off-height: 20px;
  --switch-off-height-raw: 20;
  --switch-off-border-width: 1px;
  --switch-off-border-radius: 174px;
  --switch-off-border-color: #b3b3b3;
  --switch-off-border-style: solid;
  --switch-off-box-shadow: none;
  --switch-thumb-off-color: #000000;
  --switch-thumb-off-border-width: 1px;
  --switch-thumb-off-border-radius: 0px;
  --switch-thumb-off-border-color: transparent;
  --switch-thumb-off-border-style: solid;
  --switch-thumb-off-width: 12px;
  --switch-thumb-off-width-raw: 12;
  --switch-thumb-off-height: 12px;
  --switch-thumb-off-height-raw: 12;
  --switch-label-off-font-family: "Inter";
  --switch-label-off-font-size: 16px;
  --switch-label-off-font-weight: 400;
  --switch-label-off-line-height: 1;
  --switch-label-off-letter-spacing: 0px;
  --switch-label-off-text-align: left;
  --switch-label-off-text-decoration: none;
  --switch-label-off-text-transform: none;
  --switch-label-off-opacity: 1;
  /* Switch, size: small */
  --switch-sm-padding-y: 0px;
  --switch-sm-padding-x: 0px;
  --switch-sm-padding-top: 0px;
  --switch-sm-padding-right: 0px;
  --switch-sm-padding-bottom: 0px;
  --switch-sm-padding-left: 0px;
  --switch-sm-padding-start: 0px;
  --switch-sm-padding-end: 0px;
  --switch-sm-spacing: 10px;
  --switch-sm-opacity: 1;
  --switch-sm-background: transparent;
  --switch-sm-width: 30px;
  --switch-sm-width-raw: 30;
  --switch-sm-height: 16px;
  --switch-sm-height-raw: 16;
  --switch-sm-border-width: 1px;
  --switch-sm-border-radius: 174px;
  --switch-sm-border-color: #000000;
  --switch-sm-border-style: solid;
  --switch-sm-box-shadow: none;
  --switch-sm-thumb-color: #000000;
  --switch-sm-thumb-border-width: 1px;
  --switch-sm-thumb-border-radius: 0px;
  --switch-sm-thumb-border-color: transparent;
  --switch-sm-thumb-border-style: solid;
  --switch-sm-thumb-width: 10px;
  --switch-sm-thumb-width-raw: 10;
  --switch-sm-thumb-height: 10px;
  --switch-sm-thumb-height-raw: 10;
  --switch-sm-label-font-family: "Inter";
  --switch-sm-label-font-size: 12px;
  --switch-sm-label-font-weight: 400;
  --switch-sm-label-line-height: 1.667;
  --switch-sm-label-letter-spacing: 0px;
  --switch-sm-label-text-align: left;
  --switch-sm-label-text-decoration: none;
  --switch-sm-label-text-transform: none;
  --switch-sm-label-opacity: 1;
  /* Switch, size: medium */
  --switch-md-padding-y: 0px;
  --switch-md-padding-x: 0px;
  --switch-md-padding-top: 0px;
  --switch-md-padding-right: 0px;
  --switch-md-padding-bottom: 0px;
  --switch-md-padding-left: 0px;
  --switch-md-padding-start: 0px;
  --switch-md-padding-end: 0px;
  --switch-md-spacing: 12px;
  --switch-md-opacity: 1;
  --switch-md-background: transparent;
  --switch-md-width: 36px;
  --switch-md-width-raw: 36;
  --switch-md-height: 20px;
  --switch-md-height-raw: 20;
  --switch-md-border-width: 1px;
  --switch-md-border-radius: 174px;
  --switch-md-border-color: #000000;
  --switch-md-border-style: solid;
  --switch-md-box-shadow: none;
  --switch-md-thumb-color: #000000;
  --switch-md-thumb-border-width: 1px;
  --switch-md-thumb-border-radius: 0px;
  --switch-md-thumb-border-color: transparent;
  --switch-md-thumb-border-style: solid;
  --switch-md-thumb-width: 12px;
  --switch-md-thumb-width-raw: 12;
  --switch-md-thumb-height: 12px;
  --switch-md-thumb-height-raw: 12;
  --switch-md-label-font-family: "Inter";
  --switch-md-label-font-size: 16px;
  --switch-md-label-font-weight: 400;
  --switch-md-label-line-height: 1;
  --switch-md-label-letter-spacing: 0px;
  --switch-md-label-text-align: left;
  --switch-md-label-text-decoration: none;
  --switch-md-label-text-transform: none;
  --switch-md-label-opacity: 1;
  /* Switch, size: large */
  --switch-lg-padding-y: 0px;
  --switch-lg-padding-x: 0px;
  --switch-lg-padding-top: 0px;
  --switch-lg-padding-right: 0px;
  --switch-lg-padding-bottom: 0px;
  --switch-lg-padding-left: 0px;
  --switch-lg-padding-start: 0px;
  --switch-lg-padding-end: 0px;
  --switch-lg-spacing: 14px;
  --switch-lg-opacity: 1;
  --switch-lg-background: transparent;
  --switch-lg-width: 44px;
  --switch-lg-width-raw: 44;
  --switch-lg-height: 24px;
  --switch-lg-height-raw: 24;
  --switch-lg-border-width: 1px;
  --switch-lg-border-radius: 174px;
  --switch-lg-border-color: #000000;
  --switch-lg-border-style: solid;
  --switch-lg-box-shadow: none;
  --switch-lg-thumb-color: #000000;
  --switch-lg-thumb-border-width: 1px;
  --switch-lg-thumb-border-radius: 0px;
  --switch-lg-thumb-border-color: transparent;
  --switch-lg-thumb-border-style: solid;
  --switch-lg-thumb-width: 14px;
  --switch-lg-thumb-width-raw: 14;
  --switch-lg-thumb-height: 14px;
  --switch-lg-thumb-height-raw: 14;
  --switch-lg-label-font-family: "Inter";
  --switch-lg-label-font-size: 18px;
  --switch-lg-label-font-weight: 400;
  --switch-lg-label-line-height: 1.111;
  --switch-lg-label-letter-spacing: 0px;
  --switch-lg-label-text-align: left;
  --switch-lg-label-text-decoration: none;
  --switch-lg-label-text-transform: none;
  --switch-lg-label-opacity: 1;
}

.tooltip {
  /* Tooltip */
  --tooltip-background: #0077c8;
  --tooltip-border-width: 1px;
  --tooltip-border-radius: 2px;
  --tooltip-border-color: transparent;
  --tooltip-border-style: solid;
  --tooltip-padding-y: 8px;
  --tooltip-padding-x: 16px;
  --tooltip-padding-top: 8px;
  --tooltip-padding-right: 16px;
  --tooltip-padding-bottom: 8px;
  --tooltip-padding-left: 16px;
  --tooltip-padding-start: 16px;
  --tooltip-padding-end: 16px;
  --tooltip-spacing: 8px;
  --tooltip-font-family: "Inter";
  --tooltip-font-size: 14px;
  --tooltip-font-weight: 400;
  --tooltip-line-height: 1.6;
  --tooltip-letter-spacing: -.28px;
  --tooltip-text-align: right;
  --tooltip-text-decoration: none;
  --tooltip-text-transform: none;
  --tooltip-color: #ffffff;
}

/* =============================================================================
   Variables - Bootstrap 5.3 (_variables.scss)
   ========================================================================== */
/* stylelint-disable */
/**
 * This is a copy of the Bootstrap variables file.
 *
 *  This file overwrites default Bootstrap variables.
 */
/* =============================================================================
   UTILITIES (extended/_utilities.scss)
   ========================================================================== */
/* stylelint-disable */
:root,
[data-bs-theme=light] {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0077c8;
  --bs-secondary: #0f0a30;
  --bs-success: #198754;
  --bs-info: #307abf;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 0, 119, 200;
  --bs-secondary-rgb: 15, 10, 48;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 48, 122, 191;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-primary-text-emphasis: #003050;
  --bs-secondary-text-emphasis: #060413;
  --bs-success-text-emphasis: #0a3622;
  --bs-info-text-emphasis: #13314c;
  --bs-warning-text-emphasis: #664d03;
  --bs-danger-text-emphasis: #58151c;
  --bs-light-text-emphasis: #495057;
  --bs-dark-text-emphasis: #495057;
  --bs-primary-bg-subtle: #cce4f4;
  --bs-secondary-bg-subtle: #cfced6;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-info-bg-subtle: #d6e4f2;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-dark-bg-subtle: #ced4da;
  --bs-primary-border-subtle: #99c9e9;
  --bs-secondary-border-subtle: #9f9dac;
  --bs-success-border-subtle: #a3cfbb;
  --bs-info-border-subtle: #accae5;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger-border-subtle: #f1aeb5;
  --bs-light-border-subtle: #e9ecef;
  --bs-dark-border-subtle: #adb5bd;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-font-sans-serif: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #262626;
  --bs-body-color-rgb: 38, 38, 38;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-secondary-color: rgba(38, 38, 38, 0.75);
  --bs-secondary-color-rgb: 38, 38, 38;
  --bs-secondary-bg: #e9ecef;
  --bs-secondary-bg-rgb: 233, 236, 239;
  --bs-tertiary-color: rgba(38, 38, 38, 0.5);
  --bs-tertiary-color-rgb: 38, 38, 38;
  --bs-tertiary-bg: #f8f9fa;
  --bs-tertiary-bg-rgb: 248, 249, 250;
  --bs-heading-color: #000;
  --bs-link-color: #0077c8;
  --bs-link-color-rgb: 0, 119, 200;
  --bs-link-decoration: none;
  --bs-link-hover-color: #005fa0;
  --bs-link-hover-color-rgb: 0, 95, 160;
  --bs-code-color: #d63384;
  --bs-highlight-color: #262626;
  --bs-highlight-bg: #fff3cd;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 50rem;
  --bs-box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.08);
  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08);
  --bs-box-shadow-lg: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.08);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.08);
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(0, 119, 200, 0.25);
  --bs-form-valid-color: #198754;
  --bs-form-valid-border-color: #198754;
  --bs-form-invalid-color: #dc3545;
  --bs-form-invalid-border-color: #dc3545;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1.25rem 0;
  color: #dee2e6;
  border: 0;
  border-top: 1px solid;
  opacity: 1;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  margin-top: 0;
  margin-bottom: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-heading-color);
}

h1, .h1 {
  font-size: calc(1.6rem + 4.2vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 4.75rem;
  }
}

h2, .h2 {
  font-size: calc(1.5rem + 3vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 3.75rem;
  }
}

h3, .h3 {
  font-size: calc(1.4375rem + 2.25vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 3.125rem;
  }
}

h4, .h4 {
  font-size: calc(1.3875rem + 1.65vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 2.625rem;
  }
}

h5, .h5 {
  font-size: calc(1.35rem + 1.2vw);
}
@media (min-width: 1200px) {
  h5, .h5 {
    font-size: 2.25rem;
  }
}

h6, .h6 {
  font-size: calc(1.3125rem + 0.75vw);
}
@media (min-width: 1200px) {
  h6, .h6 {
    font-size: 1.875rem;
  }
}

p {
  margin-top: 0;
  margin-bottom: 1.25rem;
}

abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: var(--font-weight-bold);
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.75em;
}

mark, .mark {
  padding: 0.1875em;
  color: var(--bs-highlight-color);
  background-color: var(--bs-highlight-bg);
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
  text-decoration: none;
}
a:hover {
  --bs-link-color-rgb: var(--bs-link-hover-color-rgb);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.75em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.75em;
  color: var(--bs-code-color);
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.1875rem 0.375rem;
  font-size: 0.75em;
  color: var(--bs-body-bg);
  background-color: var(--bs-body-color);
  border-radius: 0.25rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #777777;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: calc(1.2625rem + 0.15vw);
  font-weight: 300;
}
@media (min-width: 1200px) {
  .lead {
    font-size: 1.375rem;
  }
}

.display-1 {
  font-size: calc(1.75rem + 6vw);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 6.25rem;
  }
}

.display-2 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 5rem;
  }
}

.display-3 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4.5rem;
  }
}

.display-4 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 4rem;
  }
}

.display-5 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3.5rem;
  }
}

.display-6 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 3rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.75em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1.25rem;
  margin-bottom: 1.25rem;
  font-size: 0.75em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: var(--bs-body-bg);
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  box-shadow: var(--bs-box-shadow-sm);
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.625rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.75em;
  color: var(--bs-secondary-color);
}

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  --bs-gutter-x: 1.875rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container, .container-sm {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container, .container-sm, .container-md {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container, .container-sm, .container-md, .container-lg {
    max-width: 960px;
  }
}
@media (min-width: 1260px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1200px;
  }
}
:root {
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1260px;
}

.row {
  --bs-gutter-x: 1.875rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 0.3125rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 0.3125rem;
}

.g-10,
.gx-10 {
  --bs-gutter-x: 0.625rem;
}

.g-10,
.gy-10 {
  --bs-gutter-y: 0.625rem;
}

.g-15,
.gx-15 {
  --bs-gutter-x: 0.9375rem;
}

.g-15,
.gy-15 {
  --bs-gutter-y: 0.9375rem;
}

.g-20,
.gx-20 {
  --bs-gutter-x: 1.25rem;
}

.g-20,
.gy-20 {
  --bs-gutter-y: 1.25rem;
}

.g-25,
.gx-25 {
  --bs-gutter-x: 1.5625rem;
}

.g-25,
.gy-25 {
  --bs-gutter-y: 1.5625rem;
}

.g-30,
.gx-30 {
  --bs-gutter-x: 1.875rem;
}

.g-30,
.gy-30 {
  --bs-gutter-y: 1.875rem;
}

.g-35,
.gx-35 {
  --bs-gutter-x: 2.1875rem;
}

.g-35,
.gy-35 {
  --bs-gutter-y: 2.1875rem;
}

.g-40,
.gx-40 {
  --bs-gutter-x: 2.5rem;
}

.g-40,
.gy-40 {
  --bs-gutter-y: 2.5rem;
}

.g-45,
.gx-45 {
  --bs-gutter-x: 2.8125rem;
}

.g-45,
.gy-45 {
  --bs-gutter-y: 2.8125rem;
}

.g-50,
.gx-50 {
  --bs-gutter-x: 3.125rem;
}

.g-50,
.gy-50 {
  --bs-gutter-y: 3.125rem;
}

.g-60,
.gx-60 {
  --bs-gutter-x: 3.75rem;
}

.g-60,
.gy-60 {
  --bs-gutter-y: 3.75rem;
}

.g-70,
.gx-70 {
  --bs-gutter-x: 4.375rem;
}

.g-70,
.gy-70 {
  --bs-gutter-y: 4.375rem;
}

.g-80,
.gx-80 {
  --bs-gutter-x: 5rem;
}

.g-80,
.gy-80 {
  --bs-gutter-y: 5rem;
}

.g-90,
.gx-90 {
  --bs-gutter-x: 5.625rem;
}

.g-90,
.gy-90 {
  --bs-gutter-y: 5.625rem;
}

.g-100,
.gx-100 {
  --bs-gutter-x: 6.25rem;
}

.g-100,
.gy-100 {
  --bs-gutter-y: 6.25rem;
}

.g-120,
.gx-120 {
  --bs-gutter-x: 7.5rem;
}

.g-120,
.gy-120 {
  --bs-gutter-y: 7.5rem;
}

.g-140,
.gx-140 {
  --bs-gutter-x: 8.75rem;
}

.g-140,
.gy-140 {
  --bs-gutter-y: 8.75rem;
}

.g-160,
.gx-160 {
  --bs-gutter-x: 10rem;
}

.g-160,
.gy-160 {
  --bs-gutter-y: 10rem;
}

.g-180,
.gx-180 {
  --bs-gutter-x: 11.5rem;
}

.g-180,
.gy-180 {
  --bs-gutter-y: 11.5rem;
}

.g-200,
.gx-200 {
  --bs-gutter-x: 12.5rem;
}

.g-200,
.gy-200 {
  --bs-gutter-y: 12.5rem;
}

.g-300,
.gx-300 {
  --bs-gutter-x: 18.75rem;
}

.g-300,
.gy-300 {
  --bs-gutter-y: 18.75rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 0.3125rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 0.3125rem;
  }
  .g-sm-10,
  .gx-sm-10 {
    --bs-gutter-x: 0.625rem;
  }
  .g-sm-10,
  .gy-sm-10 {
    --bs-gutter-y: 0.625rem;
  }
  .g-sm-15,
  .gx-sm-15 {
    --bs-gutter-x: 0.9375rem;
  }
  .g-sm-15,
  .gy-sm-15 {
    --bs-gutter-y: 0.9375rem;
  }
  .g-sm-20,
  .gx-sm-20 {
    --bs-gutter-x: 1.25rem;
  }
  .g-sm-20,
  .gy-sm-20 {
    --bs-gutter-y: 1.25rem;
  }
  .g-sm-25,
  .gx-sm-25 {
    --bs-gutter-x: 1.5625rem;
  }
  .g-sm-25,
  .gy-sm-25 {
    --bs-gutter-y: 1.5625rem;
  }
  .g-sm-30,
  .gx-sm-30 {
    --bs-gutter-x: 1.875rem;
  }
  .g-sm-30,
  .gy-sm-30 {
    --bs-gutter-y: 1.875rem;
  }
  .g-sm-35,
  .gx-sm-35 {
    --bs-gutter-x: 2.1875rem;
  }
  .g-sm-35,
  .gy-sm-35 {
    --bs-gutter-y: 2.1875rem;
  }
  .g-sm-40,
  .gx-sm-40 {
    --bs-gutter-x: 2.5rem;
  }
  .g-sm-40,
  .gy-sm-40 {
    --bs-gutter-y: 2.5rem;
  }
  .g-sm-45,
  .gx-sm-45 {
    --bs-gutter-x: 2.8125rem;
  }
  .g-sm-45,
  .gy-sm-45 {
    --bs-gutter-y: 2.8125rem;
  }
  .g-sm-50,
  .gx-sm-50 {
    --bs-gutter-x: 3.125rem;
  }
  .g-sm-50,
  .gy-sm-50 {
    --bs-gutter-y: 3.125rem;
  }
  .g-sm-60,
  .gx-sm-60 {
    --bs-gutter-x: 3.75rem;
  }
  .g-sm-60,
  .gy-sm-60 {
    --bs-gutter-y: 3.75rem;
  }
  .g-sm-70,
  .gx-sm-70 {
    --bs-gutter-x: 4.375rem;
  }
  .g-sm-70,
  .gy-sm-70 {
    --bs-gutter-y: 4.375rem;
  }
  .g-sm-80,
  .gx-sm-80 {
    --bs-gutter-x: 5rem;
  }
  .g-sm-80,
  .gy-sm-80 {
    --bs-gutter-y: 5rem;
  }
  .g-sm-90,
  .gx-sm-90 {
    --bs-gutter-x: 5.625rem;
  }
  .g-sm-90,
  .gy-sm-90 {
    --bs-gutter-y: 5.625rem;
  }
  .g-sm-100,
  .gx-sm-100 {
    --bs-gutter-x: 6.25rem;
  }
  .g-sm-100,
  .gy-sm-100 {
    --bs-gutter-y: 6.25rem;
  }
  .g-sm-120,
  .gx-sm-120 {
    --bs-gutter-x: 7.5rem;
  }
  .g-sm-120,
  .gy-sm-120 {
    --bs-gutter-y: 7.5rem;
  }
  .g-sm-140,
  .gx-sm-140 {
    --bs-gutter-x: 8.75rem;
  }
  .g-sm-140,
  .gy-sm-140 {
    --bs-gutter-y: 8.75rem;
  }
  .g-sm-160,
  .gx-sm-160 {
    --bs-gutter-x: 10rem;
  }
  .g-sm-160,
  .gy-sm-160 {
    --bs-gutter-y: 10rem;
  }
  .g-sm-180,
  .gx-sm-180 {
    --bs-gutter-x: 11.5rem;
  }
  .g-sm-180,
  .gy-sm-180 {
    --bs-gutter-y: 11.5rem;
  }
  .g-sm-200,
  .gx-sm-200 {
    --bs-gutter-x: 12.5rem;
  }
  .g-sm-200,
  .gy-sm-200 {
    --bs-gutter-y: 12.5rem;
  }
  .g-sm-300,
  .gx-sm-300 {
    --bs-gutter-x: 18.75rem;
  }
  .g-sm-300,
  .gy-sm-300 {
    --bs-gutter-y: 18.75rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 0.3125rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 0.3125rem;
  }
  .g-md-10,
  .gx-md-10 {
    --bs-gutter-x: 0.625rem;
  }
  .g-md-10,
  .gy-md-10 {
    --bs-gutter-y: 0.625rem;
  }
  .g-md-15,
  .gx-md-15 {
    --bs-gutter-x: 0.9375rem;
  }
  .g-md-15,
  .gy-md-15 {
    --bs-gutter-y: 0.9375rem;
  }
  .g-md-20,
  .gx-md-20 {
    --bs-gutter-x: 1.25rem;
  }
  .g-md-20,
  .gy-md-20 {
    --bs-gutter-y: 1.25rem;
  }
  .g-md-25,
  .gx-md-25 {
    --bs-gutter-x: 1.5625rem;
  }
  .g-md-25,
  .gy-md-25 {
    --bs-gutter-y: 1.5625rem;
  }
  .g-md-30,
  .gx-md-30 {
    --bs-gutter-x: 1.875rem;
  }
  .g-md-30,
  .gy-md-30 {
    --bs-gutter-y: 1.875rem;
  }
  .g-md-35,
  .gx-md-35 {
    --bs-gutter-x: 2.1875rem;
  }
  .g-md-35,
  .gy-md-35 {
    --bs-gutter-y: 2.1875rem;
  }
  .g-md-40,
  .gx-md-40 {
    --bs-gutter-x: 2.5rem;
  }
  .g-md-40,
  .gy-md-40 {
    --bs-gutter-y: 2.5rem;
  }
  .g-md-45,
  .gx-md-45 {
    --bs-gutter-x: 2.8125rem;
  }
  .g-md-45,
  .gy-md-45 {
    --bs-gutter-y: 2.8125rem;
  }
  .g-md-50,
  .gx-md-50 {
    --bs-gutter-x: 3.125rem;
  }
  .g-md-50,
  .gy-md-50 {
    --bs-gutter-y: 3.125rem;
  }
  .g-md-60,
  .gx-md-60 {
    --bs-gutter-x: 3.75rem;
  }
  .g-md-60,
  .gy-md-60 {
    --bs-gutter-y: 3.75rem;
  }
  .g-md-70,
  .gx-md-70 {
    --bs-gutter-x: 4.375rem;
  }
  .g-md-70,
  .gy-md-70 {
    --bs-gutter-y: 4.375rem;
  }
  .g-md-80,
  .gx-md-80 {
    --bs-gutter-x: 5rem;
  }
  .g-md-80,
  .gy-md-80 {
    --bs-gutter-y: 5rem;
  }
  .g-md-90,
  .gx-md-90 {
    --bs-gutter-x: 5.625rem;
  }
  .g-md-90,
  .gy-md-90 {
    --bs-gutter-y: 5.625rem;
  }
  .g-md-100,
  .gx-md-100 {
    --bs-gutter-x: 6.25rem;
  }
  .g-md-100,
  .gy-md-100 {
    --bs-gutter-y: 6.25rem;
  }
  .g-md-120,
  .gx-md-120 {
    --bs-gutter-x: 7.5rem;
  }
  .g-md-120,
  .gy-md-120 {
    --bs-gutter-y: 7.5rem;
  }
  .g-md-140,
  .gx-md-140 {
    --bs-gutter-x: 8.75rem;
  }
  .g-md-140,
  .gy-md-140 {
    --bs-gutter-y: 8.75rem;
  }
  .g-md-160,
  .gx-md-160 {
    --bs-gutter-x: 10rem;
  }
  .g-md-160,
  .gy-md-160 {
    --bs-gutter-y: 10rem;
  }
  .g-md-180,
  .gx-md-180 {
    --bs-gutter-x: 11.5rem;
  }
  .g-md-180,
  .gy-md-180 {
    --bs-gutter-y: 11.5rem;
  }
  .g-md-200,
  .gx-md-200 {
    --bs-gutter-x: 12.5rem;
  }
  .g-md-200,
  .gy-md-200 {
    --bs-gutter-y: 12.5rem;
  }
  .g-md-300,
  .gx-md-300 {
    --bs-gutter-x: 18.75rem;
  }
  .g-md-300,
  .gy-md-300 {
    --bs-gutter-y: 18.75rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 0.3125rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 0.3125rem;
  }
  .g-lg-10,
  .gx-lg-10 {
    --bs-gutter-x: 0.625rem;
  }
  .g-lg-10,
  .gy-lg-10 {
    --bs-gutter-y: 0.625rem;
  }
  .g-lg-15,
  .gx-lg-15 {
    --bs-gutter-x: 0.9375rem;
  }
  .g-lg-15,
  .gy-lg-15 {
    --bs-gutter-y: 0.9375rem;
  }
  .g-lg-20,
  .gx-lg-20 {
    --bs-gutter-x: 1.25rem;
  }
  .g-lg-20,
  .gy-lg-20 {
    --bs-gutter-y: 1.25rem;
  }
  .g-lg-25,
  .gx-lg-25 {
    --bs-gutter-x: 1.5625rem;
  }
  .g-lg-25,
  .gy-lg-25 {
    --bs-gutter-y: 1.5625rem;
  }
  .g-lg-30,
  .gx-lg-30 {
    --bs-gutter-x: 1.875rem;
  }
  .g-lg-30,
  .gy-lg-30 {
    --bs-gutter-y: 1.875rem;
  }
  .g-lg-35,
  .gx-lg-35 {
    --bs-gutter-x: 2.1875rem;
  }
  .g-lg-35,
  .gy-lg-35 {
    --bs-gutter-y: 2.1875rem;
  }
  .g-lg-40,
  .gx-lg-40 {
    --bs-gutter-x: 2.5rem;
  }
  .g-lg-40,
  .gy-lg-40 {
    --bs-gutter-y: 2.5rem;
  }
  .g-lg-45,
  .gx-lg-45 {
    --bs-gutter-x: 2.8125rem;
  }
  .g-lg-45,
  .gy-lg-45 {
    --bs-gutter-y: 2.8125rem;
  }
  .g-lg-50,
  .gx-lg-50 {
    --bs-gutter-x: 3.125rem;
  }
  .g-lg-50,
  .gy-lg-50 {
    --bs-gutter-y: 3.125rem;
  }
  .g-lg-60,
  .gx-lg-60 {
    --bs-gutter-x: 3.75rem;
  }
  .g-lg-60,
  .gy-lg-60 {
    --bs-gutter-y: 3.75rem;
  }
  .g-lg-70,
  .gx-lg-70 {
    --bs-gutter-x: 4.375rem;
  }
  .g-lg-70,
  .gy-lg-70 {
    --bs-gutter-y: 4.375rem;
  }
  .g-lg-80,
  .gx-lg-80 {
    --bs-gutter-x: 5rem;
  }
  .g-lg-80,
  .gy-lg-80 {
    --bs-gutter-y: 5rem;
  }
  .g-lg-90,
  .gx-lg-90 {
    --bs-gutter-x: 5.625rem;
  }
  .g-lg-90,
  .gy-lg-90 {
    --bs-gutter-y: 5.625rem;
  }
  .g-lg-100,
  .gx-lg-100 {
    --bs-gutter-x: 6.25rem;
  }
  .g-lg-100,
  .gy-lg-100 {
    --bs-gutter-y: 6.25rem;
  }
  .g-lg-120,
  .gx-lg-120 {
    --bs-gutter-x: 7.5rem;
  }
  .g-lg-120,
  .gy-lg-120 {
    --bs-gutter-y: 7.5rem;
  }
  .g-lg-140,
  .gx-lg-140 {
    --bs-gutter-x: 8.75rem;
  }
  .g-lg-140,
  .gy-lg-140 {
    --bs-gutter-y: 8.75rem;
  }
  .g-lg-160,
  .gx-lg-160 {
    --bs-gutter-x: 10rem;
  }
  .g-lg-160,
  .gy-lg-160 {
    --bs-gutter-y: 10rem;
  }
  .g-lg-180,
  .gx-lg-180 {
    --bs-gutter-x: 11.5rem;
  }
  .g-lg-180,
  .gy-lg-180 {
    --bs-gutter-y: 11.5rem;
  }
  .g-lg-200,
  .gx-lg-200 {
    --bs-gutter-x: 12.5rem;
  }
  .g-lg-200,
  .gy-lg-200 {
    --bs-gutter-y: 12.5rem;
  }
  .g-lg-300,
  .gx-lg-300 {
    --bs-gutter-x: 18.75rem;
  }
  .g-lg-300,
  .gy-lg-300 {
    --bs-gutter-y: 18.75rem;
  }
}
@media (min-width: 1260px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 0.3125rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 0.3125rem;
  }
  .g-xl-10,
  .gx-xl-10 {
    --bs-gutter-x: 0.625rem;
  }
  .g-xl-10,
  .gy-xl-10 {
    --bs-gutter-y: 0.625rem;
  }
  .g-xl-15,
  .gx-xl-15 {
    --bs-gutter-x: 0.9375rem;
  }
  .g-xl-15,
  .gy-xl-15 {
    --bs-gutter-y: 0.9375rem;
  }
  .g-xl-20,
  .gx-xl-20 {
    --bs-gutter-x: 1.25rem;
  }
  .g-xl-20,
  .gy-xl-20 {
    --bs-gutter-y: 1.25rem;
  }
  .g-xl-25,
  .gx-xl-25 {
    --bs-gutter-x: 1.5625rem;
  }
  .g-xl-25,
  .gy-xl-25 {
    --bs-gutter-y: 1.5625rem;
  }
  .g-xl-30,
  .gx-xl-30 {
    --bs-gutter-x: 1.875rem;
  }
  .g-xl-30,
  .gy-xl-30 {
    --bs-gutter-y: 1.875rem;
  }
  .g-xl-35,
  .gx-xl-35 {
    --bs-gutter-x: 2.1875rem;
  }
  .g-xl-35,
  .gy-xl-35 {
    --bs-gutter-y: 2.1875rem;
  }
  .g-xl-40,
  .gx-xl-40 {
    --bs-gutter-x: 2.5rem;
  }
  .g-xl-40,
  .gy-xl-40 {
    --bs-gutter-y: 2.5rem;
  }
  .g-xl-45,
  .gx-xl-45 {
    --bs-gutter-x: 2.8125rem;
  }
  .g-xl-45,
  .gy-xl-45 {
    --bs-gutter-y: 2.8125rem;
  }
  .g-xl-50,
  .gx-xl-50 {
    --bs-gutter-x: 3.125rem;
  }
  .g-xl-50,
  .gy-xl-50 {
    --bs-gutter-y: 3.125rem;
  }
  .g-xl-60,
  .gx-xl-60 {
    --bs-gutter-x: 3.75rem;
  }
  .g-xl-60,
  .gy-xl-60 {
    --bs-gutter-y: 3.75rem;
  }
  .g-xl-70,
  .gx-xl-70 {
    --bs-gutter-x: 4.375rem;
  }
  .g-xl-70,
  .gy-xl-70 {
    --bs-gutter-y: 4.375rem;
  }
  .g-xl-80,
  .gx-xl-80 {
    --bs-gutter-x: 5rem;
  }
  .g-xl-80,
  .gy-xl-80 {
    --bs-gutter-y: 5rem;
  }
  .g-xl-90,
  .gx-xl-90 {
    --bs-gutter-x: 5.625rem;
  }
  .g-xl-90,
  .gy-xl-90 {
    --bs-gutter-y: 5.625rem;
  }
  .g-xl-100,
  .gx-xl-100 {
    --bs-gutter-x: 6.25rem;
  }
  .g-xl-100,
  .gy-xl-100 {
    --bs-gutter-y: 6.25rem;
  }
  .g-xl-120,
  .gx-xl-120 {
    --bs-gutter-x: 7.5rem;
  }
  .g-xl-120,
  .gy-xl-120 {
    --bs-gutter-y: 7.5rem;
  }
  .g-xl-140,
  .gx-xl-140 {
    --bs-gutter-x: 8.75rem;
  }
  .g-xl-140,
  .gy-xl-140 {
    --bs-gutter-y: 8.75rem;
  }
  .g-xl-160,
  .gx-xl-160 {
    --bs-gutter-x: 10rem;
  }
  .g-xl-160,
  .gy-xl-160 {
    --bs-gutter-y: 10rem;
  }
  .g-xl-180,
  .gx-xl-180 {
    --bs-gutter-x: 11.5rem;
  }
  .g-xl-180,
  .gy-xl-180 {
    --bs-gutter-y: 11.5rem;
  }
  .g-xl-200,
  .gx-xl-200 {
    --bs-gutter-x: 12.5rem;
  }
  .g-xl-200,
  .gy-xl-200 {
    --bs-gutter-y: 12.5rem;
  }
  .g-xl-300,
  .gx-xl-300 {
    --bs-gutter-x: 18.75rem;
  }
  .g-xl-300,
  .gy-xl-300 {
    --bs-gutter-y: 18.75rem;
  }
}
.table {
  --bs-table-color-type: initial;
  --bs-table-bg-type: initial;
  --bs-table-color-state: initial;
  --bs-table-bg-state: initial;
  --bs-table-color: var(--bs-body-color);
  --bs-table-bg: transparent;
  --bs-table-border-color: var(--bs-border-color);
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-body-color);
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: var(--bs-body-color);
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: var(--bs-body-color);
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1.25rem;
  vertical-align: top;
  border-color: var(--bs-table-border-color);
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)));
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}

.table-group-divider {
  border-top: calc(1px * 2) solid currentcolor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table-borderless > :not(:first-child) {
  border-top-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-color-type: var(--bs-table-striped-color);
  --bs-table-bg-type: var(--bs-table-striped-bg);
}

.table-striped-columns > :not(caption) > tr > :nth-child(even) {
  --bs-table-color-type: var(--bs-table-striped-color);
  --bs-table-bg-type: var(--bs-table-striped-bg);
}

.table-active {
  --bs-table-color-state: var(--bs-table-active-color);
  --bs-table-bg-state: var(--bs-table-active-bg);
}

.table-hover > tbody > tr:hover > * {
  --bs-table-color-state: var(--bs-table-hover-color);
  --bs-table-bg-state: var(--bs-table-hover-bg);
}

.table-primary {
  --bs-table-color: #000;
  --bs-table-bg: #cce4f4;
  --bs-table-border-color: #b8cddc;
  --bs-table-striped-bg: #c2d9e8;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #b8cddc;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bdd3e2;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-secondary {
  --bs-table-color: #000;
  --bs-table-bg: #cfced6;
  --bs-table-border-color: #bab9c1;
  --bs-table-striped-bg: #c5c4cb;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bab9c1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfbfc6;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-success {
  --bs-table-color: #000;
  --bs-table-bg: #d1e7dd;
  --bs-table-border-color: #bcd0c7;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-info {
  --bs-table-color: #000;
  --bs-table-bg: #d6e4f2;
  --bs-table-border-color: #c1cdda;
  --bs-table-striped-bg: #cbd9e6;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #c1cdda;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c6d3e0;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-warning {
  --bs-table-color: #000;
  --bs-table-bg: #fff3cd;
  --bs-table-border-color: #e6dbb9;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-danger {
  --bs-table-color: #000;
  --bs-table-bg: #f8d7da;
  --bs-table-border-color: #dfc2c4;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-light {
  --bs-table-color: #000;
  --bs-table-bg: #f8f9fa;
  --bs-table-border-color: #dfe0e1;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #212529;
  --bs-table-border-color: #373b3e;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1259.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0px;
  font-size: 0.75rem;
  font-weight: 400;
  color: #555555;
}

.col-form-label {
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 0;
  font-size: inherit;
  font-weight: 400;
  line-height: 1;
  color: #555555;
}

.col-form-label-lg {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 1.125rem;
}

.col-form-label-sm {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 0.75rem;
}

.form-text {
  margin-top: 0px;
  font-size: 0.75rem;
  font-weight: 400;
  color: #777777;
}

.form-control {
  display: block;
  width: 100%;
  padding: 14px 20px;
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  color: #000000;
  appearance: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(191, 191, 191, 0.5);
  border-radius: 0px;
  box-shadow: none;
  transition: all 0.25s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: #000000;
  background-color: #ffffff;
  border-color: #929292;
  outline: 0;
  box-shadow: none, none;
}
.form-control::-webkit-date-and-time-value {
  min-width: 85px;
  height: 1em;
  margin: 0;
}
.form-control::-webkit-datetime-edit {
  display: block;
  padding: 0;
}
.form-control::placeholder {
  color: #000000;
  opacity: 1;
}
.form-control:disabled {
  color: #777777;
  background-color: #f8f8f8;
  border-color: transparent;
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 14px 20px;
  margin: -14px -20px;
  margin-inline-end: 20px;
  color: #000000;
  background-color: var(--bs-tertiary-bg);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--bs-secondary-bg);
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 14px 0;
  margin-bottom: 0;
  line-height: 1;
  color: #262626;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext:focus {
  outline: 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1em + 20px);
  padding: 9px 16px;
  font-size: 0.75rem;
  border-radius: 0px;
}
.form-control-sm::file-selector-button {
  padding: 9px 16px;
  margin: -9px -16px;
  margin-inline-end: 16px;
}

.form-control-lg {
  min-height: calc(1em + 40px);
  padding: 19px 20px;
  font-size: 1.125rem;
  border-radius: 0px;
}
.form-control-lg::file-selector-button {
  padding: 19px 20px;
  margin: -19px -20px;
  margin-inline-end: 20px;
}

textarea.form-control {
  min-height: 74px;
}
textarea.form-control-sm {
  min-height: calc(1em + 20px);
}
textarea.form-control-lg {
  min-height: calc(1em + 40px);
}

.form-control-color {
  width: 3rem;
  height: 74px;
  padding: 14px;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: 0px;
}
.form-control-color::-webkit-color-swatch {
  border: 0 !important;
  border-radius: 0px;
}
.form-control-color.form-control-sm {
  height: calc(1em + 20px);
}
.form-control-color.form-control-lg {
  height: calc(1em + 40px);
}

.form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23888888' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m4 6 4 4 4-4'/%3e%3c/svg%3e");
  display: block;
  width: 100%;
  padding: 14px 56px 14px 20px;
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  color: #000000;
  appearance: none;
  background-color: #ffffff;
  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 16px;
  border: 1px solid #e8e8e8;
  border-radius: 0px;
  box-shadow: none;
  transition: all 0.25s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #929292;
  outline: 0;
  box-shadow: none, none;
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 20px;
  background-image: none;
}
.form-select:disabled {
  color: #777777;
  background-color: #f8f8f8;
  border-color: rgba(0, 0, 0, 0);
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000000;
}

.form-select-sm {
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 16px;
  font-size: 0.75rem;
  border-radius: 0px;
}

.form-select-lg {
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 20px;
  font-size: 1.125rem;
  border-radius: 0px;
}

.form-check {
  display: block;
  min-height: 16px;
  padding-left: 30px;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -30px;
}

.form-check-reverse {
  padding-right: 30px;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -30px;
  margin-left: 0;
}

.form-check-input {
  --bs-form-check-bg: #ffffff;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: -8.25px;
  vertical-align: top;
  appearance: none;
  background-color: var(--bs-form-check-bg);
  background-image: var(--bs-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  print-color-adjust: exact;
  transition: all 0.25s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-check-input {
    transition: none;
  }
}
.form-check-input[type=checkbox] {
  border-radius: 3px;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #b3b3b3;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 119, 200, 0.25);
}
.form-check-input:checked {
  background-color: #0077c8;
  border-color: rgba(0, 0, 0, 0);
}
.form-check-input:checked[type=checkbox] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1.5 6 3 3 6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 10 10'%3e%3ccircle r='2' fill='%23ffffff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0077c8;
  border-color: #0077c8;
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 6h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.3;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 1;
}

.form-check-label {
  color: #555555;
  cursor: pointer;
}

.form-switch {
  padding-left: 48px;
}
.form-switch .form-check-input {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  width: 36px;
  margin-left: -48px;
  background-image: var(--bs-form-switch-bg);
  background-position: left center;
  border-radius: 36px;
  transition: all 0.25s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23000000'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ffffff'/%3e%3c/svg%3e");
}
.form-switch.form-check-reverse {
  padding-right: 48px;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -48px;
  margin-left: 0;
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: calc(1rem + 2px);
  padding: 0;
  appearance: none;
  background-color: transparent;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, none;
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, none;
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  appearance: none;
  background-color: #0077c8;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b3d6ef;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: var(--bs-box-shadow-inset);
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  appearance: none;
  background-color: #0077c8;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b3d6ef;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: var(--bs-box-shadow-inset);
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: var(--bs-secondary-color);
}
.form-range:disabled::-moz-range-thumb {
  background-color: var(--bs-secondary-color);
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  min-height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  padding: 1rem 20px;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext {
  padding: 1rem 20px;
}
.form-floating > .form-control::placeholder,
.form-floating > .form-control-plaintext::placeholder {
  color: transparent;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-control-plaintext:focus,
.form-floating > .form-control-plaintext:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill,
.form-floating > .form-control-plaintext:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label::after,
.form-floating > .form-control:not(:placeholder-shown) ~ label::after,
.form-floating > .form-control-plaintext ~ label::after,
.form-floating > .form-select ~ label::after {
  position: absolute;
  inset: 1rem 10px;
  z-index: -1;
  height: 1.5em;
  content: "";
  background-color: #ffffff;
  border-radius: 0px;
}
.form-floating > .form-control:-webkit-autofill ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control-plaintext ~ label {
  border-width: 1px 0;
}
.form-floating > :disabled ~ label,
.form-floating > .form-control:disabled ~ label {
  color: #6c757d;
}
.form-floating > :disabled ~ label::after,
.form-floating > .form-control:disabled ~ label::after {
  background-color: #f8f8f8;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  color: #000000;
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-tertiary-bg);
  border: 1px solid rgba(191, 191, 191, 0.5);
  border-radius: 0px;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 19px 20px;
  font-size: 1.125rem;
  border-radius: 0px;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 9px 16px;
  font-size: 0.75rem;
  border-radius: 0px;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 76px;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: calc(1px * -1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0px;
  font-size: 0.75rem;
  color: var(--bs-form-valid-color);
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 8px 16px;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-success);
  border-radius: 2px;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: var(--bs-form-valid-border-color);
  padding-right: 44px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.25em + 7px) center;
  background-size: calc(0.5em + 14px) calc(0.5em + 14px);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: none, 0 0 0 1px rgba(var(--bs-success-rgb), 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: 44px;
  background-position: top calc(0.25em + 7px) right calc(0.25em + 7px);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e");
  padding-right: 106px;
  background-position: right 20px center, center right 56px;
  background-size: 16px, calc(0.5em + 14px) calc(0.5em + 14px);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: none, 0 0 0 1px rgba(var(--bs-success-rgb), 0.25);
}

.was-validated .form-control-color:valid, .form-control-color.is-valid {
  width: calc(3rem + 44px);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: var(--bs-form-valid-color);
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 1px rgba(var(--bs-success-rgb), 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: var(--bs-form-valid-color);
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid,
.was-validated .input-group > .form-select:not(:focus):valid,
.input-group > .form-select:not(:focus).is-valid,
.was-validated .input-group > .form-floating:not(:focus-within):valid,
.input-group > .form-floating:not(:focus-within).is-valid {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0px;
  font-size: 0.75rem;
  color: var(--bs-form-invalid-color);
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 8px 16px;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-danger);
  border-radius: 2px;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
  padding-right: 44px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.25em + 7px) center;
  background-size: calc(0.5em + 14px) calc(0.5em + 14px);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: none, 0 0 0 1px rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: 44px;
  background-position: top calc(0.25em + 7px) right calc(0.25em + 7px);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  padding-right: 106px;
  background-position: right 20px center, center right 56px;
  background-size: 16px, calc(0.5em + 14px) calc(0.5em + 14px);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: none, 0 0 0 1px rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated .form-control-color:invalid, .form-control-color.is-invalid {
  width: calc(3rem + 44px);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: var(--bs-form-invalid-color);
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 1px rgba(var(--bs-danger-rgb), 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: var(--bs-form-invalid-color);
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid,
.was-validated .input-group > .form-select:not(:focus):invalid,
.input-group > .form-select:not(:focus).is-invalid,
.was-validated .input-group > .form-floating:not(:focus-within):invalid,
.input-group > .form-floating:not(:focus-within).is-invalid {
  z-index: 4;
}

.btn {
  --bs-btn-padding-x: 20px;
  --bs-btn-padding-y: 14px;
  --bs-btn-font-family: Barlow;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 600;
  --bs-btn-line-height: 1;
  --bs-btn-color: var(--bs-body-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-width: 1px;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: 3px;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  box-shadow: var(--bs-btn-box-shadow);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}
.btn-check + .btn:hover {
  color: var(--bs-btn-color);
  background-color: var(--bs-btn-bg);
  border-color: var(--bs-btn-border-color);
}
.btn:focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-box-shadow), var(--bs-btn-focus-box-shadow);
}
.btn-check:focus-visible + .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-box-shadow), var(--bs-btn-focus-box-shadow);
}
.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: var(--bs-btn-active-border-color);
  box-shadow: var(--bs-btn-active-shadow);
}
.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
  box-shadow: var(--bs-btn-active-shadow), var(--bs-btn-focus-box-shadow);
}
.btn-check:checked:focus-visible + .btn {
  box-shadow: var(--bs-btn-active-shadow), var(--bs-btn-focus-box-shadow);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
  box-shadow: none;
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0077c8;
  --bs-btn-border-color: #0077c8;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0065aa;
  --bs-btn-hover-border-color: #005fa0;
  --bs-btn-focus-shadow-rgb: 38, 139, 208;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #005fa0;
  --bs-btn-active-border-color: #005996;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0077c8;
  --bs-btn-disabled-border-color: #0077c8;
}

.btn-secondary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0f0a30;
  --bs-btn-border-color: #0f0a30;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0d0929;
  --bs-btn-hover-border-color: #0c0826;
  --bs-btn-focus-shadow-rgb: 51, 47, 79;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0c0826;
  --bs-btn-active-border-color: #0b0824;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0f0a30;
  --bs-btn-disabled-border-color: #0f0a30;
}

.btn-success {
  --bs-btn-color: #fff;
  --bs-btn-bg: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #157347;
  --bs-btn-hover-border-color: #146c43;
  --bs-btn-focus-shadow-rgb: 60, 153, 110;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #146c43;
  --bs-btn-active-border-color: #13653f;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #198754;
  --bs-btn-disabled-border-color: #198754;
}

.btn-info {
  --bs-btn-color: #fff;
  --bs-btn-bg: #307abf;
  --bs-btn-border-color: #307abf;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #2968a2;
  --bs-btn-hover-border-color: #266299;
  --bs-btn-focus-shadow-rgb: 79, 142, 201;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #266299;
  --bs-btn-active-border-color: #245c8f;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #307abf;
  --bs-btn-disabled-border-color: #307abf;
}

.btn-warning {
  --bs-btn-color: #000;
  --bs-btn-bg: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffca2c;
  --bs-btn-hover-border-color: #ffc720;
  --bs-btn-focus-shadow-rgb: 217, 164, 6;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffcd39;
  --bs-btn-active-border-color: #ffc720;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #ffc107;
  --bs-btn-disabled-border-color: #ffc107;
}

.btn-danger {
  --bs-btn-color: #fff;
  --bs-btn-bg: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #bb2d3b;
  --bs-btn-hover-border-color: #b02a37;
  --bs-btn-focus-shadow-rgb: 225, 83, 97;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b02a37;
  --bs-btn-active-border-color: #a52834;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #dc3545;
  --bs-btn-disabled-border-color: #dc3545;
}

.btn-light {
  --bs-btn-color: #000;
  --bs-btn-bg: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #d3d4d5;
  --bs-btn-hover-border-color: #c6c7c8;
  --bs-btn-focus-shadow-rgb: 211, 212, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #c6c7c8;
  --bs-btn-active-border-color: #babbbc;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #f8f9fa;
  --bs-btn-disabled-border-color: #f8f9fa;
}

.btn-dark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #424649;
  --bs-btn-hover-border-color: #373b3e;
  --bs-btn-focus-shadow-rgb: 66, 70, 73;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #4d5154;
  --bs-btn-active-border-color: #373b3e;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #212529;
  --bs-btn-disabled-border-color: #212529;
}

.btn-outline-primary {
  --bs-btn-color: #0077c8;
  --bs-btn-border-color: #0077c8;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0077c8;
  --bs-btn-hover-border-color: #0077c8;
  --bs-btn-focus-shadow-rgb: 0, 119, 200;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0077c8;
  --bs-btn-active-border-color: #0077c8;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #0077c8;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0077c8;
  --bs-gradient: none;
}

.btn-outline-secondary {
  --bs-btn-color: #0f0a30;
  --bs-btn-border-color: #0f0a30;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0f0a30;
  --bs-btn-hover-border-color: #0f0a30;
  --bs-btn-focus-shadow-rgb: 15, 10, 48;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0f0a30;
  --bs-btn-active-border-color: #0f0a30;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #0f0a30;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0f0a30;
  --bs-gradient: none;
}

.btn-outline-success {
  --bs-btn-color: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #198754;
  --bs-btn-hover-border-color: #198754;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #198754;
  --bs-btn-active-border-color: #198754;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #198754;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #198754;
  --bs-gradient: none;
}

.btn-outline-info {
  --bs-btn-color: #307abf;
  --bs-btn-border-color: #307abf;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #307abf;
  --bs-btn-hover-border-color: #307abf;
  --bs-btn-focus-shadow-rgb: 48, 122, 191;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #307abf;
  --bs-btn-active-border-color: #307abf;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #307abf;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #307abf;
  --bs-gradient: none;
}

.btn-outline-warning {
  --bs-btn-color: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffc107;
  --bs-btn-hover-border-color: #ffc107;
  --bs-btn-focus-shadow-rgb: 255, 193, 7;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffc107;
  --bs-btn-active-border-color: #ffc107;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #ffc107;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #ffc107;
  --bs-gradient: none;
}

.btn-outline-danger {
  --bs-btn-color: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #dc3545;
  --bs-btn-hover-border-color: #dc3545;
  --bs-btn-focus-shadow-rgb: 220, 53, 69;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #dc3545;
  --bs-btn-active-border-color: #dc3545;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #dc3545;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #dc3545;
  --bs-gradient: none;
}

.btn-outline-light {
  --bs-btn-color: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f8f9fa;
  --bs-btn-hover-border-color: #f8f9fa;
  --bs-btn-focus-shadow-rgb: 248, 249, 250;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f8f9fa;
  --bs-btn-active-border-color: #f8f9fa;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #f8f9fa;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #f8f9fa;
  --bs-gradient: none;
}

.btn-outline-dark {
  --bs-btn-color: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #212529;
  --bs-btn-hover-border-color: #212529;
  --bs-btn-focus-shadow-rgb: 33, 37, 41;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #212529;
  --bs-btn-active-border-color: #212529;
  --bs-btn-active-shadow: none;
  --bs-btn-disabled-color: #212529;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #212529;
  --bs-gradient: none;
}

.btn-link {
  --bs-btn-font-weight: 400;
  --bs-btn-color: var(--bs-link-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: var(--bs-link-hover-color);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-active-color: var(--bs-link-hover-color);
  --bs-btn-active-border-color: transparent;
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-border-color: transparent;
  --bs-btn-box-shadow: 0 0 0 #000;
  --bs-btn-focus-shadow-rgb: 38, 139, 208;
  text-decoration: none;
}
.btn-link:focus-visible {
  color: var(--bs-btn-color);
}
.btn-link:hover {
  color: var(--bs-btn-hover-color);
}

.btn-lg, .btn-group-lg > .btn {
  --bs-btn-padding-y: 13px;
  --bs-btn-padding-x: 20px;
  --bs-btn-font-size: 1rem;
  --bs-btn-border-radius: 4px;
}

.btn-sm, .btn-group-sm > .btn {
  --bs-btn-padding-y: 11px;
  --bs-btn-padding-x: 16px;
  --bs-btn-font-size: 0.75rem;
  --bs-btn-border-radius: 4px;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing.collapse-horizontal {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  --bs-dropdown-zindex: 1000;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 1rem;
  --bs-dropdown-color: var(--bs-body-color);
  --bs-dropdown-bg: var(--bs-body-bg);
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: var(--bs-border-radius);
  --bs-dropdown-border-width: var(--bs-border-width);
  --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 0.625rem;
  --bs-dropdown-box-shadow: var(--bs-box-shadow);
  --bs-dropdown-link-color: var(--bs-body-color);
  --bs-dropdown-link-hover-color: var(--bs-body-color);
  --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0077c8;
  --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
  --bs-dropdown-item-padding-x: 1.25rem;
  --bs-dropdown-item-padding-y: 0.3125rem;
  --bs-dropdown-header-color: #6c757d;
  --bs-dropdown-header-padding-x: 1.25rem;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  margin: 0;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: var(--bs-dropdown-border-radius);
  box-shadow: var(--bs-dropdown-box-shadow);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1260px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  clear: both;
  font-weight: 400;
  color: var(--bs-dropdown-link-color);
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-radius: var(--bs-dropdown-item-border-radius, 0);
}
.dropdown-item:hover, .dropdown-item:focus {
  color: var(--bs-dropdown-link-hover-color);
  background-color: var(--bs-dropdown-link-hover-bg);
}
.dropdown-item.active, .dropdown-item:active {
  color: var(--bs-dropdown-link-active-color);
  text-decoration: none;
  background-color: var(--bs-dropdown-link-active-bg);
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: var(--bs-dropdown-link-disabled-color);
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  margin-bottom: 0;
  font-size: 0.875rem;
  color: var(--bs-dropdown-header-color);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}

.dropdown-menu-dark {
  --bs-dropdown-color: #dee2e6;
  --bs-dropdown-bg: #343a40;
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-box-shadow: ;
  --bs-dropdown-link-color: #dee2e6;
  --bs-dropdown-link-hover-color: #fff;
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0077c8;
  --bs-dropdown-link-disabled-color: #adb5bd;
  --bs-dropdown-header-color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group {
  border-radius: 3px;
}
.btn-group > :not(.btn-check:first-child) + .btn,
.btn-group > .btn-group:not(:first-child) {
  margin-left: calc(1px * -1);
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn.dropdown-toggle-split:first-child,
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 15px;
  padding-left: 15px;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 12px;
  padding-left: 12px;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 15px;
  padding-left: 15px;
}

.btn-group.show .dropdown-toggle {
  box-shadow: none;
}
.btn-group.show .dropdown-toggle.btn-link {
  box-shadow: none;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: calc(1px * -1);
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: var(--bs-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: var(--bs-nav-link-hover-color);
}
.nav-link:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 119, 200, 0.25);
}
.nav-link.disabled, .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  --bs-nav-tabs-border-width: var(--bs-border-width);
  --bs-nav-tabs-border-color: var(--bs-border-color);
  --bs-nav-tabs-border-radius: var(--bs-border-radius);
  --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
  --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
  --bs-nav-tabs-link-active-bg: var(--bs-body-bg);
  --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
}
.nav-tabs .nav-link {
  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--bs-nav-tabs-border-radius);
  border-top-right-radius: var(--bs-nav-tabs-border-radius);
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  isolation: isolate;
  border-color: var(--bs-nav-tabs-link-hover-border-color);
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: var(--bs-nav-tabs-link-active-color);
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: var(--bs-nav-tabs-link-active-border-color);
}
.nav-tabs .dropdown-menu {
  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills {
  --bs-nav-pills-border-radius: var(--bs-border-radius);
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: #0077c8;
}
.nav-pills .nav-link {
  border-radius: var(--bs-nav-pills-border-radius);
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}

.nav-underline {
  --bs-nav-underline-gap: 1rem;
  --bs-nav-underline-border-width: 0.125rem;
  --bs-nav-underline-link-active-color: var(--bs-emphasis-color);
  gap: var(--bs-nav-underline-gap);
}
.nav-underline .nav-link {
  padding-right: 0;
  padding-left: 0;
  border-bottom: var(--bs-nav-underline-border-width) solid transparent;
}
.nav-underline .nav-link:hover, .nav-underline .nav-link:focus {
  border-bottom-color: currentcolor;
}
.nav-underline .nav-link.active,
.nav-underline .show > .nav-link {
  font-weight: 700;
  color: var(--bs-nav-underline-link-active-color);
  border-bottom-color: currentcolor;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.625rem;
  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
  --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
  --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
  --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-padding-y: 0.3125rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.25rem;
  --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.25rem;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2838, 38, 38, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
  --bs-navbar-toggler-border-radius: 3px;
  --bs-navbar-toggler-focus-width: 0.25rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: var(--bs-navbar-brand-padding-y);
  padding-bottom: var(--bs-navbar-brand-padding-y);
  margin-right: var(--bs-navbar-brand-margin-end);
  font-size: var(--bs-navbar-brand-font-size);
  color: var(--bs-navbar-brand-color);
  white-space: nowrap;
}
.navbar-brand:hover, .navbar-brand:focus {
  color: var(--bs-navbar-brand-hover-color);
}

.navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-navbar-color);
  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: var(--bs-navbar-active-color);
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-navbar-color);
}
.navbar-text a,
.navbar-text a:hover,
.navbar-text a:focus {
  color: var(--bs-navbar-active-color);
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--bs-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    box-shadow: none;
    transition: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    box-shadow: none;
    transition: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    box-shadow: none;
    transition: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1260px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    box-shadow: none;
    transition: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  box-shadow: none;
  transition: none;
}
.navbar-expand .offcanvas .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.navbar-dark,
.navbar[data-bs-theme=dark] {
  --bs-navbar-color: rgba(255, 255, 255, 0.55);
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --bs-navbar-active-color: #fff;
  --bs-navbar-brand-color: #fff;
  --bs-navbar-brand-hover-color: #fff;
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.card {
  --bs-card-spacer-y: 2.5rem;
  --bs-card-spacer-x: 2.5rem;
  --bs-card-title-spacer-y: 0.625rem;
  --bs-card-title-color: ;
  --bs-card-subtitle-color: ;
  --bs-card-border-width: 0;
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: 0;
  --bs-card-box-shadow: var(--bs-box-shadow-lg);
  --bs-card-inner-border-radius: 0;
  --bs-card-cap-padding-y: 1.25rem;
  --bs-card-cap-padding-x: 2.5rem;
  --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: var(--bs-body-bg);
  --bs-card-img-overlay-padding: 1.25rem;
  --bs-card-group-margin: 0.9375rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  color: var(--bs-body-color);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
  box-shadow: var(--bs-card-box-shadow);
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.card-title {
  margin-bottom: var(--bs-card-title-spacer-y);
  color: var(--bs-card-title-color);
}

.card-subtitle {
  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
  margin-bottom: 0;
  color: var(--bs-card-subtitle-color);
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link + .card-link {
  margin-left: var(--bs-card-spacer-x);
}

.card-header {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  margin-bottom: 0;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.card-header:first-child {
  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
}

.card-footer {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.card-footer:last-child {
  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
}

.card-header-tabs {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
  border-bottom: 0;
}
.card-header-tabs .nav-link.active {
  background-color: var(--bs-card-bg);
  border-bottom-color: var(--bs-card-bg);
}

.card-header-pills {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--bs-card-img-overlay-padding);
  border-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}

.card-group > .card {
  margin-bottom: var(--bs-card-group-margin);
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
  .card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
  .card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
  .card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
  .card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion {
  --bs-accordion-color: var(--bs-body-color);
  --bs-accordion-bg: var(--bs-body-bg);
  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --bs-accordion-border-color: var(--color-neutral-gray-25);
  --bs-accordion-border-width: var(--bs-border-width);
  --bs-accordion-border-radius: 0;
  --bs-accordion-inner-border-radius: calc(0 - (var(--bs-border-width)));
  --bs-accordion-btn-padding-x: 1.875rem;
  --bs-accordion-btn-padding-y: 1.875rem;
  --bs-accordion-btn-color: #000;
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
  --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23262626' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23003050' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  --bs-accordion-btn-focus-box-shadow: none;
  --bs-accordion-body-padding-x: 1.875rem;
  --bs-accordion-body-padding-y: 1.875rem;
  --bs-accordion-active-color: #000;
  --bs-accordion-active-bg: #e7edf5;
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  font-size: 1rem;
  color: var(--bs-accordion-btn-color);
  text-align: left;
  background-color: var(--bs-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: var(--bs-accordion-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background-color: var(--bs-accordion-active-bg);
  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
}
.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}
.accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  color: var(--bs-accordion-color);
  background-color: var(--bs-accordion-bg);
  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}
.accordion-item:first-of-type {
  border-top-left-radius: var(--bs-accordion-border-radius);
  border-top-right-radius: var(--bs-accordion-border-radius);
}
.accordion-item:first-of-type > .accordion-header .accordion-button {
  border-top-left-radius: var(--bs-accordion-inner-border-radius);
  border-top-right-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}
.accordion-item:last-of-type > .accordion-header .accordion-button.collapsed {
  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:last-of-type > .accordion-collapse {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}

.accordion-body {
  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);
}

.accordion-flush > .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush > .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush > .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush > .accordion-item > .accordion-header .accordion-button, .accordion-flush > .accordion-item > .accordion-header .accordion-button.collapsed {
  border-radius: 0;
}
.accordion-flush > .accordion-item > .accordion-collapse {
  border-radius: 0;
}

.breadcrumb {
  --bs-breadcrumb-padding-x: 0;
  --bs-breadcrumb-padding-y: 0;
  --bs-breadcrumb-margin-bottom: 0;
  --bs-breadcrumb-bg: ;
  --bs-breadcrumb-border-radius: ;
  --bs-breadcrumb-divider-color: #262626;
  --bs-breadcrumb-item-padding-x: 0.5rem;
  --bs-breadcrumb-item-active-color: #0077c8;
  display: flex;
  flex-wrap: wrap;
  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
  margin-bottom: var(--bs-breadcrumb-margin-bottom);
  font-size: var(--bs-breadcrumb-font-size);
  list-style: none;
  background-color: var(--bs-breadcrumb-bg);
  border-radius: var(--bs-breadcrumb-border-radius);
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: var(--bs-breadcrumb-item-padding-x);
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: var(--bs-breadcrumb-item-padding-x);
  color: var(--bs-breadcrumb-divider-color);
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: var(--bs-breadcrumb-item-active-color);
}

.pagination {
  --bs-pagination-padding-x: 0.75rem;
  --bs-pagination-padding-y: 0.375rem;
  --bs-pagination-font-size: 1rem;
  --bs-pagination-color: var(--bs-link-color);
  --bs-pagination-bg: var(--bs-body-bg);
  --bs-pagination-border-width: var(--bs-border-width);
  --bs-pagination-border-color: var(--bs-border-color);
  --bs-pagination-border-radius: var(--bs-border-radius);
  --bs-pagination-hover-color: var(--bs-link-hover-color);
  --bs-pagination-hover-bg: var(--bs-tertiary-bg);
  --bs-pagination-hover-border-color: var(--bs-border-color);
  --bs-pagination-focus-color: var(--bs-link-hover-color);
  --bs-pagination-focus-bg: var(--bs-secondary-bg);
  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(0, 119, 200, 0.25);
  --bs-pagination-active-color: #fff;
  --bs-pagination-active-bg: #0077c8;
  --bs-pagination-active-border-color: #0077c8;
  --bs-pagination-disabled-color: var(--bs-secondary-color);
  --bs-pagination-disabled-bg: var(--bs-secondary-bg);
  --bs-pagination-disabled-border-color: var(--bs-border-color);
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
  font-size: var(--bs-pagination-font-size);
  color: var(--bs-pagination-color);
  background-color: var(--bs-pagination-bg);
  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: var(--bs-pagination-hover-color);
  background-color: var(--bs-pagination-hover-bg);
  border-color: var(--bs-pagination-hover-border-color);
}
.page-link:focus {
  z-index: 3;
  color: var(--bs-pagination-focus-color);
  background-color: var(--bs-pagination-focus-bg);
  outline: 0;
  box-shadow: var(--bs-pagination-focus-box-shadow);
}
.page-link.active, .active > .page-link {
  z-index: 3;
  color: var(--bs-pagination-active-color);
  background-color: var(--bs-pagination-active-bg);
  border-color: var(--bs-pagination-active-border-color);
}
.page-link.disabled, .disabled > .page-link {
  color: var(--bs-pagination-disabled-color);
  pointer-events: none;
  background-color: var(--bs-pagination-disabled-bg);
  border-color: var(--bs-pagination-disabled-border-color);
}

.page-item:not(:first-child) .page-link {
  margin-left: calc(var(--bs-border-width) * -1);
}
.page-item:first-child .page-link {
  border-top-left-radius: var(--bs-pagination-border-radius);
  border-bottom-left-radius: var(--bs-pagination-border-radius);
}
.page-item:last-child .page-link {
  border-top-right-radius: var(--bs-pagination-border-radius);
  border-bottom-right-radius: var(--bs-pagination-border-radius);
}

.pagination-lg {
  --bs-pagination-padding-x: 1.5rem;
  --bs-pagination-padding-y: 0.75rem;
  --bs-pagination-font-size: 1.25rem;
  --bs-pagination-border-radius: var(--bs-border-radius-lg);
}

.pagination-sm {
  --bs-pagination-padding-x: 0.5rem;
  --bs-pagination-padding-y: 0.25rem;
  --bs-pagination-font-size: 0.875rem;
  --bs-pagination-border-radius: var(--bs-border-radius-sm);
}

.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-padding-y: 0.35em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: var(--bs-border-radius);
  display: inline-block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 16px;
  --bs-alert-padding-y: 18px;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: 1px solid var(--bs-alert-border-color);
  --bs-alert-border-radius: 6px;
  --bs-alert-link-color: inherit;
  position: relative;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: var(--font-weight-bold);
  color: var(--bs-alert-link-color);
}

.alert-dismissible {
  padding-right: 3.75rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 22.5px 16px;
}

.alert-primary {
  --bs-alert-color: var(--bs-primary-text-emphasis);
  --bs-alert-bg: var(--bs-primary-bg-subtle);
  --bs-alert-border-color: var(--bs-primary-border-subtle);
  --bs-alert-link-color: var(--bs-primary-text-emphasis);
}

.alert-secondary {
  --bs-alert-color: var(--bs-secondary-text-emphasis);
  --bs-alert-bg: var(--bs-secondary-bg-subtle);
  --bs-alert-border-color: var(--bs-secondary-border-subtle);
  --bs-alert-link-color: var(--bs-secondary-text-emphasis);
}

.alert-success {
  --bs-alert-color: var(--bs-success-text-emphasis);
  --bs-alert-bg: var(--bs-success-bg-subtle);
  --bs-alert-border-color: var(--bs-success-border-subtle);
  --bs-alert-link-color: var(--bs-success-text-emphasis);
}

.alert-info {
  --bs-alert-color: var(--bs-info-text-emphasis);
  --bs-alert-bg: var(--bs-info-bg-subtle);
  --bs-alert-border-color: var(--bs-info-border-subtle);
  --bs-alert-link-color: var(--bs-info-text-emphasis);
}

.alert-warning {
  --bs-alert-color: var(--bs-warning-text-emphasis);
  --bs-alert-bg: var(--bs-warning-bg-subtle);
  --bs-alert-border-color: var(--bs-warning-border-subtle);
  --bs-alert-link-color: var(--bs-warning-text-emphasis);
}

.alert-danger {
  --bs-alert-color: var(--bs-danger-text-emphasis);
  --bs-alert-bg: var(--bs-danger-bg-subtle);
  --bs-alert-border-color: var(--bs-danger-border-subtle);
  --bs-alert-link-color: var(--bs-danger-text-emphasis);
}

.alert-light {
  --bs-alert-color: var(--bs-light-text-emphasis);
  --bs-alert-bg: var(--bs-light-bg-subtle);
  --bs-alert-border-color: var(--bs-light-border-subtle);
  --bs-alert-link-color: var(--bs-light-text-emphasis);
}

.alert-dark {
  --bs-alert-color: var(--bs-dark-text-emphasis);
  --bs-alert-bg: var(--bs-dark-bg-subtle);
  --bs-alert-border-color: var(--bs-dark-border-subtle);
  --bs-alert-link-color: var(--bs-dark-text-emphasis);
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress,
.progress-stacked {
  --bs-progress-height: 1rem;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: var(--bs-secondary-bg);
  --bs-progress-border-radius: var(--bs-border-radius);
  --bs-progress-box-shadow: var(--bs-box-shadow-inset);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #0077c8;
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--bs-progress-height);
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
  box-shadow: var(--bs-progress-box-shadow);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-progress-bar-bg);
  transition: var(--bs-progress-bar-transition);
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--bs-progress-height) var(--bs-progress-height);
}

.progress-stacked > .progress {
  overflow: visible;
}

.progress-stacked > .progress > .progress-bar {
  width: 100%;
}

.progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}

.list-group {
  --bs-list-group-color: var(--bs-body-color);
  --bs-list-group-bg: var(--bs-body-bg);
  --bs-list-group-border-color: var(--bs-border-color);
  --bs-list-group-border-width: var(--bs-border-width);
  --bs-list-group-border-radius: var(--bs-border-radius);
  --bs-list-group-item-padding-x: 1.25rem;
  --bs-list-group-item-padding-y: 0.625rem;
  --bs-list-group-action-color: var(--bs-secondary-color);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);
  --bs-list-group-action-active-color: var(--bs-body-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-bg);
  --bs-list-group-disabled-color: var(--bs-secondary-color);
  --bs-list-group-disabled-bg: var(--bs-body-bg);
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: #0077c8;
  --bs-list-group-active-border-color: #0077c8;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > .list-group-item::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}
.list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}

.list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1260px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 var(--bs-list-group-border-width);
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  --bs-list-group-color: var(--bs-primary-text-emphasis);
  --bs-list-group-bg: var(--bs-primary-bg-subtle);
  --bs-list-group-border-color: var(--bs-primary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);
  --bs-list-group-active-color: var(--bs-primary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-primary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-primary-text-emphasis);
}

.list-group-item-secondary {
  --bs-list-group-color: var(--bs-secondary-text-emphasis);
  --bs-list-group-bg: var(--bs-secondary-bg-subtle);
  --bs-list-group-border-color: var(--bs-secondary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-active-color: var(--bs-secondary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-secondary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis);
}

.list-group-item-success {
  --bs-list-group-color: var(--bs-success-text-emphasis);
  --bs-list-group-bg: var(--bs-success-bg-subtle);
  --bs-list-group-border-color: var(--bs-success-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-success-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-success-border-subtle);
  --bs-list-group-active-color: var(--bs-success-bg-subtle);
  --bs-list-group-active-bg: var(--bs-success-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-success-text-emphasis);
}

.list-group-item-info {
  --bs-list-group-color: var(--bs-info-text-emphasis);
  --bs-list-group-bg: var(--bs-info-bg-subtle);
  --bs-list-group-border-color: var(--bs-info-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-info-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-info-border-subtle);
  --bs-list-group-active-color: var(--bs-info-bg-subtle);
  --bs-list-group-active-bg: var(--bs-info-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-info-text-emphasis);
}

.list-group-item-warning {
  --bs-list-group-color: var(--bs-warning-text-emphasis);
  --bs-list-group-bg: var(--bs-warning-bg-subtle);
  --bs-list-group-border-color: var(--bs-warning-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-warning-border-subtle);
  --bs-list-group-active-color: var(--bs-warning-bg-subtle);
  --bs-list-group-active-bg: var(--bs-warning-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-warning-text-emphasis);
}

.list-group-item-danger {
  --bs-list-group-color: var(--bs-danger-text-emphasis);
  --bs-list-group-bg: var(--bs-danger-bg-subtle);
  --bs-list-group-border-color: var(--bs-danger-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-danger-border-subtle);
  --bs-list-group-active-color: var(--bs-danger-bg-subtle);
  --bs-list-group-active-bg: var(--bs-danger-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-danger-text-emphasis);
}

.list-group-item-light {
  --bs-list-group-color: var(--bs-light-text-emphasis);
  --bs-list-group-bg: var(--bs-light-bg-subtle);
  --bs-list-group-border-color: var(--bs-light-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-light-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-light-border-subtle);
  --bs-list-group-active-color: var(--bs-light-bg-subtle);
  --bs-list-group-active-bg: var(--bs-light-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-light-text-emphasis);
}

.list-group-item-dark {
  --bs-list-group-color: var(--bs-dark-text-emphasis);
  --bs-list-group-bg: var(--bs-dark-bg-subtle);
  --bs-list-group-border-color: var(--bs-dark-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-dark-border-subtle);
  --bs-list-group-active-color: var(--bs-dark-bg-subtle);
  --bs-list-group-active-bg: var(--bs-dark-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-dark-text-emphasis);
}

.btn-close {
  --bs-btn-close-color: #000;
  --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e");
  --bs-btn-close-opacity: 0.5;
  --bs-btn-close-hover-opacity: 0.75;
  --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(0, 119, 200, 0.25);
  --bs-btn-close-focus-opacity: 1;
  --bs-btn-close-disabled-opacity: 0.25;
  --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: var(--bs-btn-close-color);
  background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: var(--bs-btn-close-opacity);
}
.btn-close:hover {
  color: var(--bs-btn-close-color);
  text-decoration: none;
  opacity: var(--bs-btn-close-hover-opacity);
}
.btn-close:focus {
  outline: 0;
  box-shadow: var(--bs-btn-close-focus-shadow);
  opacity: var(--bs-btn-close-focus-opacity);
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  user-select: none;
  opacity: var(--bs-btn-close-disabled-opacity);
}

.btn-close-white {
  filter: var(--bs-btn-close-white-filter);
}

.toast {
  --bs-toast-zindex: 1090;
  --bs-toast-padding-x: 0.75rem;
  --bs-toast-padding-y: 0.5rem;
  --bs-toast-spacing: 1.875rem;
  --bs-toast-max-width: 350px;
  --bs-toast-font-size: 0.875rem;
  --bs-toast-color: ;
  --bs-toast-bg: rgba(var(--bs-body-bg-rgb), 0.85);
  --bs-toast-border-width: var(--bs-border-width);
  --bs-toast-border-color: var(--bs-border-color-translucent);
  --bs-toast-border-radius: var(--bs-border-radius);
  --bs-toast-box-shadow: var(--bs-box-shadow);
  --bs-toast-header-color: var(--bs-secondary-color);
  --bs-toast-header-bg: rgba(var(--bs-body-bg-rgb), 0.85);
  --bs-toast-header-border-color: var(--bs-border-color-translucent);
  width: var(--bs-toast-max-width);
  max-width: 100%;
  font-size: var(--bs-toast-font-size);
  color: var(--bs-toast-color);
  pointer-events: auto;
  background-color: var(--bs-toast-bg);
  background-clip: padding-box;
  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
  box-shadow: var(--bs-toast-box-shadow);
  border-radius: var(--bs-toast-border-radius);
}
.toast.showing {
  opacity: 0;
}
.toast:not(.show) {
  display: none;
}

.toast-container {
  --bs-toast-zindex: 1090;
  position: absolute;
  z-index: var(--bs-toast-zindex);
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: var(--bs-toast-spacing);
}

.toast-header {
  display: flex;
  align-items: center;
  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);
  color: var(--bs-toast-header-color);
  background-color: var(--bs-toast-header-bg);
  background-clip: padding-box;
  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
  border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
  border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
}
.toast-header .btn-close {
  margin-right: calc(-0.5 * var(--bs-toast-padding-x));
  margin-left: var(--bs-toast-padding-x);
}

.toast-body {
  padding: var(--bs-toast-padding-x);
  word-wrap: break-word;
}

.modal {
  --bs-modal-zindex: 1055;
  --bs-modal-width: 500px;
  --bs-modal-padding: 1.25rem;
  --bs-modal-margin: 0.5rem;
  --bs-modal-color: ;
  --bs-modal-bg: #ffffff;
  --bs-modal-border-color: transparent;
  --bs-modal-border-width: 1px;
  --bs-modal-border-radius: 6px;
  --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08);
  --bs-modal-inner-border-radius: 5px;
  --bs-modal-header-padding-x: 24px;
  --bs-modal-header-padding-y: 10px;
  --bs-modal-header-padding: 10px 24px;
  --bs-modal-header-border-color: var(--bs-border-color);
  --bs-modal-header-border-width: 1px;
  --bs-modal-title-line-height: 1.5;
  --bs-modal-footer-gap: 0.5rem;
  --bs-modal-footer-bg: transparent;
  --bs-modal-footer-border-color: #e8e8e8;
  --bs-modal-footer-border-width: 1px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: var(--bs-modal-margin);
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - var(--bs-modal-margin) * 2);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - var(--bs-modal-margin) * 2);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  box-shadow: var(--bs-modal-box-shadow);
  outline: 0;
}

.modal-backdrop {
  --bs-backdrop-zindex: 1050;
  --bs-backdrop-bg: #000;
  --bs-backdrop-opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-backdrop-zindex);
  width: 100vw;
  height: 100vh;
  background-color: var(--bs-backdrop-bg);
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: var(--bs-backdrop-opacity);
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: var(--bs-modal-header-padding);
  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
  border-top-left-radius: var(--bs-modal-inner-border-radius);
  border-top-right-radius: var(--bs-modal-inner-border-radius);
}
.modal-header .btn-close {
  padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);
  margin: calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: var(--bs-modal-title-line-height);
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: var(--bs-modal-padding);
}

.modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
  background-color: var(--bs-modal-footer-bg);
  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
  border-bottom-right-radius: var(--bs-modal-inner-border-radius);
  border-bottom-left-radius: var(--bs-modal-inner-border-radius);
}
.modal-footer > * {
  margin: calc(var(--bs-modal-footer-gap) * 0.5);
}

@media (min-width: 576px) {
  .modal {
    --bs-modal-margin: 1.75rem;
    --bs-modal-box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.05), 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  .modal-dialog {
    max-width: var(--bs-modal-width);
    margin-right: auto;
    margin-left: auto;
  }
  .modal-sm {
    --bs-modal-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    --bs-modal-width: 800px;
  }
}
@media (min-width: 1260px) {
  .modal-xl {
    --bs-modal-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header,
.modal-fullscreen .modal-footer {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header,
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header,
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header,
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1259.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header,
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
}
.tooltip {
  --bs-tooltip-zindex: 1080;
  --bs-tooltip-max-width: 200px;
  --bs-tooltip-padding-x: 16px;
  --bs-tooltip-padding-y: 8px;
  --bs-tooltip-margin: ;
  --bs-tooltip-font-size: 0.875rem;
  --bs-tooltip-color: #fff;
  --bs-tooltip-bg: #0077c8;
  --bs-tooltip-border-radius: 2px;
  --bs-tooltip-opacity: 1;
  --bs-tooltip-arrow-width: 0.8rem;
  --bs-tooltip-arrow-height: 0.4rem;
  z-index: var(--bs-tooltip-zindex);
  display: block;
  margin: var(--bs-tooltip-margin);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-tooltip-font-size);
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: var(--bs-tooltip-opacity);
}
.tooltip .tooltip-arrow {
  display: block;
  width: var(--bs-tooltip-arrow-width);
  height: var(--bs-tooltip-arrow-height);
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: calc(-1 * var(--bs-tooltip-arrow-height));
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-top-color: var(--bs-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: calc(-1 * var(--bs-tooltip-arrow-height));
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-right-color: var(--bs-tooltip-bg);
}

/* rtl:end:ignore */
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: calc(-1 * var(--bs-tooltip-arrow-height));
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-bottom-color: var(--bs-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: calc(-1 * var(--bs-tooltip-arrow-height));
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-left-color: var(--bs-tooltip-bg);
}

/* rtl:end:ignore */
.tooltip-inner {
  max-width: var(--bs-tooltip-max-width);
  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);
  color: var(--bs-tooltip-color);
  text-align: center;
  background-color: var(--bs-tooltip-bg);
  border-radius: var(--bs-tooltip-border-radius);
}

.popover {
  --bs-popover-zindex: 1070;
  --bs-popover-max-width: 276px;
  --bs-popover-font-size: 0.875rem;
  --bs-popover-bg: var(--bs-body-bg);
  --bs-popover-border-width: var(--bs-border-width);
  --bs-popover-border-color: var(--bs-border-color-translucent);
  --bs-popover-border-radius: var(--bs-border-radius-lg);
  --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width));
  --bs-popover-box-shadow: var(--bs-box-shadow);
  --bs-popover-header-padding-x: 1.25rem;
  --bs-popover-header-padding-y: 0.5rem;
  --bs-popover-header-font-size: 1rem;
  --bs-popover-header-color: #000;
  --bs-popover-header-bg: var(--bs-secondary-bg);
  --bs-popover-body-padding-x: 1.25rem;
  --bs-popover-body-padding-y: 1.25rem;
  --bs-popover-body-color: var(--bs-body-color);
  --bs-popover-arrow-width: 1rem;
  --bs-popover-arrow-height: 0.5rem;
  --bs-popover-arrow-border: var(--bs-popover-border-color);
  z-index: var(--bs-popover-zindex);
  display: block;
  max-width: var(--bs-popover-max-width);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-popover-font-size);
  word-wrap: break-word;
  background-color: var(--bs-popover-bg);
  background-clip: padding-box;
  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-radius: var(--bs-popover-border-radius);
  box-shadow: var(--bs-popover-box-shadow);
}
.popover .popover-arrow {
  display: block;
  width: var(--bs-popover-arrow-width);
  height: var(--bs-popover-arrow-height);
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
  border-width: 0;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-top-color: var(--bs-popover-arrow-border);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: var(--bs-popover-border-width);
  border-top-color: var(--bs-popover-bg);
}

/* rtl:begin:ignore */
.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-right-color: var(--bs-popover-arrow-border);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: var(--bs-popover-border-width);
  border-right-color: var(--bs-popover-bg);
}

/* rtl:end:ignore */
.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-bottom-color: var(--bs-popover-arrow-border);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: var(--bs-popover-border-width);
  border-bottom-color: var(--bs-popover-bg);
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: var(--bs-popover-arrow-width);
  margin-left: calc(-0.5 * var(--bs-popover-arrow-width));
  content: "";
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);
}

/* rtl:begin:ignore */
.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-left-color: var(--bs-popover-arrow-border);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: var(--bs-popover-border-width);
  border-left-color: var(--bs-popover-bg);
}

/* rtl:end:ignore */
.popover-header {
  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);
  margin-bottom: 0;
  font-size: var(--bs-popover-header-font-size);
  color: var(--bs-popover-header-color);
  background-color: var(--bs-popover-header-bg);
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-top-left-radius: var(--bs-popover-inner-border-radius);
  border-top-right-radius: var(--bs-popover-inner-border-radius);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);
  color: var(--bs-popover-body-color);
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
  .carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e")*/;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e")*/;
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

.spinner-grow,
.spinner-border {
  display: inline-block;
  width: var(--bs-spinner-width);
  height: var(--bs-spinner-height);
  vertical-align: var(--bs-spinner-vertical-align);
  border-radius: 50%;
  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-border-width: 0.25em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-border;
  border: var(--bs-spinner-border-width) solid currentcolor;
  border-right-color: transparent;
}

.spinner-border-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
  --bs-spinner-border-width: 0.2em;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-grow;
  background-color: currentcolor;
  opacity: 0;
}

.spinner-grow-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
  .spinner-grow {
    --bs-spinner-animation-speed: 1.5s;
  }
}
.offcanvas-sm, .offcanvas-md, .offcanvas-lg, .offcanvas-xl, .offcanvas {
  --bs-offcanvas-zindex: 1045;
  --bs-offcanvas-width: 400px;
  --bs-offcanvas-height: 30vh;
  --bs-offcanvas-padding-x: 1.25rem;
  --bs-offcanvas-padding-y: 1.25rem;
  --bs-offcanvas-color: var(--bs-body-color);
  --bs-offcanvas-bg: var(--bs-body-bg);
  --bs-offcanvas-border-width: 1px;
  --bs-offcanvas-border-color: transparent;
  --bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08);
  --bs-offcanvas-transition: transform 0.3s ease-in-out;
  --bs-offcanvas-title-line-height: 1.5;
}

@media (max-width: 575.98px) {
  .offcanvas-sm {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    box-shadow: var(--bs-offcanvas-box-shadow);
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-sm {
    transition: none;
  }
}
@media (max-width: 575.98px) {
  .offcanvas-sm.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-sm.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-sm.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-sm.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-sm.showing, .offcanvas-sm.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-sm.showing, .offcanvas-sm.hiding, .offcanvas-sm.show {
    visibility: visible;
  }
}
@media (min-width: 576px) {
  .offcanvas-sm {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-sm .offcanvas-header {
    display: none;
  }
  .offcanvas-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 767.98px) {
  .offcanvas-md {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    box-shadow: var(--bs-offcanvas-box-shadow);
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-md {
    transition: none;
  }
}
@media (max-width: 767.98px) {
  .offcanvas-md.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-md.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-md.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-md.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-md.showing, .offcanvas-md.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-md.showing, .offcanvas-md.hiding, .offcanvas-md.show {
    visibility: visible;
  }
}
@media (min-width: 768px) {
  .offcanvas-md {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-md .offcanvas-header {
    display: none;
  }
  .offcanvas-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 991.98px) {
  .offcanvas-lg {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    box-shadow: var(--bs-offcanvas-box-shadow);
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-lg {
    transition: none;
  }
}
@media (max-width: 991.98px) {
  .offcanvas-lg.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-lg.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-lg.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-lg.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-lg.showing, .offcanvas-lg.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-lg.showing, .offcanvas-lg.hiding, .offcanvas-lg.show {
    visibility: visible;
  }
}
@media (min-width: 992px) {
  .offcanvas-lg {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-lg .offcanvas-header {
    display: none;
  }
  .offcanvas-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 1259.98px) {
  .offcanvas-xl {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    box-shadow: var(--bs-offcanvas-box-shadow);
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 1259.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-xl {
    transition: none;
  }
}
@media (max-width: 1259.98px) {
  .offcanvas-xl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-xl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-xl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-xl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-xl.showing, .offcanvas-xl.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-xl.showing, .offcanvas-xl.hiding, .offcanvas-xl.show {
    visibility: visible;
  }
}
@media (min-width: 1260px) {
  .offcanvas-xl {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-xl .offcanvas-header {
    display: none;
  }
  .offcanvas-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  box-shadow: var(--bs-offcanvas-box-shadow);
  transition: var(--bs-offcanvas-transition);
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}
.offcanvas.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
.offcanvas.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
.offcanvas.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
.offcanvas.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
.offcanvas.showing, .offcanvas.show:not(.hiding) {
  transform: none;
}
.offcanvas.showing, .offcanvas.hiding, .offcanvas.show {
  visibility: visible;
}

.offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.offcanvas-backdrop.fade {
  opacity: 0;
}
.offcanvas-backdrop.show {
  opacity: 0.5;
}

.offcanvas-header {
  display: flex;
  align-items: center;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
}
.offcanvas-header .btn-close {
  padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);
  margin: calc(-0.5 * var(--bs-offcanvas-padding-y)) calc(-0.5 * var(--bs-offcanvas-padding-x)) calc(-0.5 * var(--bs-offcanvas-padding-y)) auto;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: var(--bs-offcanvas-title-line-height);
}

.offcanvas-body {
  flex-grow: 1;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
  overflow-y: auto;
}

.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: 0.5;
}
.placeholder.btn::before {
  display: inline-block;
  content: "";
}

.placeholder-xs {
  min-height: 0.6em;
}

.placeholder-sm {
  min-height: 0.8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

.placeholder-glow .placeholder {
  animation: placeholder-glow 2s ease-in-out infinite;
}

@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.placeholder-wave {
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  mask-size: 200% 100%;
  animation: placeholder-wave 2s linear infinite;
}

@keyframes placeholder-wave {
  100% {
    mask-position: -200% 0%;
  }
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.text-bg-primary {
  color: #fff !important;
  background-color: RGBA(var(--bs-primary-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-secondary {
  color: #fff !important;
  background-color: RGBA(var(--bs-secondary-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-success {
  color: #fff !important;
  background-color: RGBA(var(--bs-success-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-info {
  color: #fff !important;
  background-color: RGBA(var(--bs-info-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-warning {
  color: #000 !important;
  background-color: RGBA(var(--bs-warning-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-danger {
  color: #fff !important;
  background-color: RGBA(var(--bs-danger-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-light {
  color: #000 !important;
  background-color: RGBA(var(--bs-light-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-dark {
  color: #fff !important;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important;
}

.link-primary {
  color: RGBA(var(--bs-primary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-primary:hover, .link-primary:focus {
  color: RGBA(0, 95, 160, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(0, 95, 160, var(--bs-link-underline-opacity, 1)) !important;
}

.link-secondary {
  color: RGBA(var(--bs-secondary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-secondary:hover, .link-secondary:focus {
  color: RGBA(12, 8, 38, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(12, 8, 38, var(--bs-link-underline-opacity, 1)) !important;
}

.link-success {
  color: RGBA(var(--bs-success-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-success:hover, .link-success:focus {
  color: RGBA(20, 108, 67, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(20, 108, 67, var(--bs-link-underline-opacity, 1)) !important;
}

.link-info {
  color: RGBA(var(--bs-info-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-info:hover, .link-info:focus {
  color: RGBA(38, 98, 153, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(38, 98, 153, var(--bs-link-underline-opacity, 1)) !important;
}

.link-warning {
  color: RGBA(var(--bs-warning-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-warning:hover, .link-warning:focus {
  color: RGBA(255, 205, 57, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(255, 205, 57, var(--bs-link-underline-opacity, 1)) !important;
}

.link-danger {
  color: RGBA(var(--bs-danger-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-danger:hover, .link-danger:focus {
  color: RGBA(176, 42, 55, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(176, 42, 55, var(--bs-link-underline-opacity, 1)) !important;
}

.link-light {
  color: RGBA(var(--bs-light-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-light:hover, .link-light:focus {
  color: RGBA(249, 250, 251, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(249, 250, 251, var(--bs-link-underline-opacity, 1)) !important;
}

.link-dark {
  color: RGBA(var(--bs-dark-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-dark:hover, .link-dark:focus {
  color: RGBA(26, 30, 33, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(26, 30, 33, var(--bs-link-underline-opacity, 1)) !important;
}

.link-body-emphasis {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-body-emphasis:hover, .link-body-emphasis:focus {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 0.75)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 0.75)) !important;
}

.focus-ring:focus {
  outline: 0;
  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);
}

.icon-link {
  display: inline-flex;
  gap: 0.375rem;
  align-items: center;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 0.5));
  text-underline-offset: 0.25em;
  backface-visibility: hidden;
}
.icon-link > .bi {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  transition: 0.2s ease-in-out transform;
}
@media (prefers-reduced-motion: reduce) {
  .icon-link > .bi {
    transition: none;
  }
}

.icon-link-hover:hover > .bi, .icon-link-hover:focus-visible > .bi {
  transform: var(--bs-icon-link-transform, translate3d(0.25em, 0, 0));
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: 75%;
}

.ratio-16x9 {
  --bs-aspect-ratio: 56.25%;
}

.ratio-21x9 {
  --bs-aspect-ratio: 42.8571428571%;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}

.sticky-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-sm-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-md-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-lg-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1260px) {
  .sticky-xl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.visually-hidden:not(caption),
.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) {
  position: absolute !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vr {
  display: inline-block;
  align-self: stretch;
  width: var(--bs-border-width);
  min-height: 1em;
  background-color: currentcolor;
  opacity: 1;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.object-fit-contain {
  object-fit: contain !important;
}

.object-fit-cover {
  object-fit: cover !important;
}

.object-fit-fill {
  object-fit: fill !important;
}

.object-fit-scale {
  object-fit: scale-down !important;
}

.object-fit-none {
  object-fit: none !important;
}

.opacity-0 {
  opacity: 0 !important;
}

.opacity-25 {
  opacity: 0.25 !important;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.opacity-75 {
  opacity: 0.75 !important;
}

.opacity-100 {
  opacity: 1 !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.overflow-x-auto {
  overflow-x: auto !important;
}

.overflow-x-hidden {
  overflow-x: hidden !important;
}

.overflow-x-visible {
  overflow-x: visible !important;
}

.overflow-x-scroll {
  overflow-x: scroll !important;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.overflow-y-hidden {
  overflow-y: hidden !important;
}

.overflow-y-visible {
  overflow-y: visible !important;
}

.overflow-y-scroll {
  overflow-y: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-inline-grid {
  display: inline-grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: var(--bs-box-shadow) !important;
}

.shadow-sm {
  box-shadow: var(--bs-box-shadow-sm) !important;
}

.shadow-lg {
  box-shadow: var(--bs-box-shadow-lg) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.focus-ring-primary {
  --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-secondary {
  --bs-focus-ring-color: rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-success {
  --bs-focus-ring-color: rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-info {
  --bs-focus-ring-color: rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-warning {
  --bs-focus-ring-color: rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-danger {
  --bs-focus-ring-color: rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-light {
  --bs-focus-ring-color: rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-dark {
  --bs-focus-ring-color: rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity));
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
}

.border-secondary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
}

.border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}

.border-info {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
}

.border-warning {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
}

.border-danger {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
}

.border-light {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
}

.border-dark {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
}

.border-black {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;
}

.border-white {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
}

.border-primary-subtle {
  border-color: var(--bs-primary-border-subtle) !important;
}

.border-secondary-subtle {
  border-color: var(--bs-secondary-border-subtle) !important;
}

.border-success-subtle {
  border-color: var(--bs-success-border-subtle) !important;
}

.border-info-subtle {
  border-color: var(--bs-info-border-subtle) !important;
}

.border-warning-subtle {
  border-color: var(--bs-warning-border-subtle) !important;
}

.border-danger-subtle {
  border-color: var(--bs-danger-border-subtle) !important;
}

.border-light-subtle {
  border-color: var(--bs-light-border-subtle) !important;
}

.border-dark-subtle {
  border-color: var(--bs-dark-border-subtle) !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.border-opacity-10 {
  --bs-border-opacity: 0.1;
}

.border-opacity-25 {
  --bs-border-opacity: 0.25;
}

.border-opacity-50 {
  --bs-border-opacity: 0.5;
}

.border-opacity-75 {
  --bs-border-opacity: 0.75;
}

.border-opacity-100 {
  --bs-border-opacity: 1;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.w-10 {
  width: 10% !important;
}

.w-20 {
  width: 20% !important;
}

.w-30 {
  width: 30% !important;
}

.w-40 {
  width: 40% !important;
}

.w-60 {
  width: 60% !important;
}

.w-70 {
  width: 70% !important;
}

.w-80 {
  width: 80% !important;
}

.w-90 {
  width: 90% !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-5 {
  margin: 0.3125rem !important;
}

.m-10 {
  margin: 0.625rem !important;
}

.m-15 {
  margin: 0.9375rem !important;
}

.m-20 {
  margin: 1.25rem !important;
}

.m-25 {
  margin: 1.5625rem !important;
}

.m-30 {
  margin: 1.875rem !important;
}

.m-35 {
  margin: 2.1875rem !important;
}

.m-40 {
  margin: 2.5rem !important;
}

.m-45 {
  margin: 2.8125rem !important;
}

.m-50 {
  margin: 3.125rem !important;
}

.m-60 {
  margin: 3.75rem !important;
}

.m-70 {
  margin: 4.375rem !important;
}

.m-80 {
  margin: 5rem !important;
}

.m-90 {
  margin: 5.625rem !important;
}

.m-100 {
  margin: 6.25rem !important;
}

.m-120 {
  margin: 7.5rem !important;
}

.m-140 {
  margin: 8.75rem !important;
}

.m-160 {
  margin: 10rem !important;
}

.m-180 {
  margin: 11.5rem !important;
}

.m-200 {
  margin: 12.5rem !important;
}

.m-300 {
  margin: 18.75rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-5 {
  margin-right: 0.3125rem !important;
  margin-left: 0.3125rem !important;
}

.mx-10 {
  margin-right: 0.625rem !important;
  margin-left: 0.625rem !important;
}

.mx-15 {
  margin-right: 0.9375rem !important;
  margin-left: 0.9375rem !important;
}

.mx-20 {
  margin-right: 1.25rem !important;
  margin-left: 1.25rem !important;
}

.mx-25 {
  margin-right: 1.5625rem !important;
  margin-left: 1.5625rem !important;
}

.mx-30 {
  margin-right: 1.875rem !important;
  margin-left: 1.875rem !important;
}

.mx-35 {
  margin-right: 2.1875rem !important;
  margin-left: 2.1875rem !important;
}

.mx-40 {
  margin-right: 2.5rem !important;
  margin-left: 2.5rem !important;
}

.mx-45 {
  margin-right: 2.8125rem !important;
  margin-left: 2.8125rem !important;
}

.mx-50 {
  margin-right: 3.125rem !important;
  margin-left: 3.125rem !important;
}

.mx-60 {
  margin-right: 3.75rem !important;
  margin-left: 3.75rem !important;
}

.mx-70 {
  margin-right: 4.375rem !important;
  margin-left: 4.375rem !important;
}

.mx-80 {
  margin-right: 5rem !important;
  margin-left: 5rem !important;
}

.mx-90 {
  margin-right: 5.625rem !important;
  margin-left: 5.625rem !important;
}

.mx-100 {
  margin-right: 6.25rem !important;
  margin-left: 6.25rem !important;
}

.mx-120 {
  margin-right: 7.5rem !important;
  margin-left: 7.5rem !important;
}

.mx-140 {
  margin-right: 8.75rem !important;
  margin-left: 8.75rem !important;
}

.mx-160 {
  margin-right: 10rem !important;
  margin-left: 10rem !important;
}

.mx-180 {
  margin-right: 11.5rem !important;
  margin-left: 11.5rem !important;
}

.mx-200 {
  margin-right: 12.5rem !important;
  margin-left: 12.5rem !important;
}

.mx-300 {
  margin-right: 18.75rem !important;
  margin-left: 18.75rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-5 {
  margin-top: 0.3125rem !important;
  margin-bottom: 0.3125rem !important;
}

.my-10 {
  margin-top: 0.625rem !important;
  margin-bottom: 0.625rem !important;
}

.my-15 {
  margin-top: 0.9375rem !important;
  margin-bottom: 0.9375rem !important;
}

.my-20 {
  margin-top: 1.25rem !important;
  margin-bottom: 1.25rem !important;
}

.my-25 {
  margin-top: 1.5625rem !important;
  margin-bottom: 1.5625rem !important;
}

.my-30 {
  margin-top: 1.875rem !important;
  margin-bottom: 1.875rem !important;
}

.my-35 {
  margin-top: 2.1875rem !important;
  margin-bottom: 2.1875rem !important;
}

.my-40 {
  margin-top: 2.5rem !important;
  margin-bottom: 2.5rem !important;
}

.my-45 {
  margin-top: 2.8125rem !important;
  margin-bottom: 2.8125rem !important;
}

.my-50 {
  margin-top: 3.125rem !important;
  margin-bottom: 3.125rem !important;
}

.my-60 {
  margin-top: 3.75rem !important;
  margin-bottom: 3.75rem !important;
}

.my-70 {
  margin-top: 4.375rem !important;
  margin-bottom: 4.375rem !important;
}

.my-80 {
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;
}

.my-90 {
  margin-top: 5.625rem !important;
  margin-bottom: 5.625rem !important;
}

.my-100 {
  margin-top: 6.25rem !important;
  margin-bottom: 6.25rem !important;
}

.my-120 {
  margin-top: 7.5rem !important;
  margin-bottom: 7.5rem !important;
}

.my-140 {
  margin-top: 8.75rem !important;
  margin-bottom: 8.75rem !important;
}

.my-160 {
  margin-top: 10rem !important;
  margin-bottom: 10rem !important;
}

.my-180 {
  margin-top: 11.5rem !important;
  margin-bottom: 11.5rem !important;
}

.my-200 {
  margin-top: 12.5rem !important;
  margin-bottom: 12.5rem !important;
}

.my-300 {
  margin-top: 18.75rem !important;
  margin-bottom: 18.75rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-5 {
  margin-top: 0.3125rem !important;
}

.mt-10 {
  margin-top: 0.625rem !important;
}

.mt-15 {
  margin-top: 0.9375rem !important;
}

.mt-20 {
  margin-top: 1.25rem !important;
}

.mt-25 {
  margin-top: 1.5625rem !important;
}

.mt-30 {
  margin-top: 1.875rem !important;
}

.mt-35 {
  margin-top: 2.1875rem !important;
}

.mt-40 {
  margin-top: 2.5rem !important;
}

.mt-45 {
  margin-top: 2.8125rem !important;
}

.mt-50 {
  margin-top: 3.125rem !important;
}

.mt-60 {
  margin-top: 3.75rem !important;
}

.mt-70 {
  margin-top: 4.375rem !important;
}

.mt-80 {
  margin-top: 5rem !important;
}

.mt-90 {
  margin-top: 5.625rem !important;
}

.mt-100 {
  margin-top: 6.25rem !important;
}

.mt-120 {
  margin-top: 7.5rem !important;
}

.mt-140 {
  margin-top: 8.75rem !important;
}

.mt-160 {
  margin-top: 10rem !important;
}

.mt-180 {
  margin-top: 11.5rem !important;
}

.mt-200 {
  margin-top: 12.5rem !important;
}

.mt-300 {
  margin-top: 18.75rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-5 {
  margin-right: 0.3125rem !important;
}

.me-10 {
  margin-right: 0.625rem !important;
}

.me-15 {
  margin-right: 0.9375rem !important;
}

.me-20 {
  margin-right: 1.25rem !important;
}

.me-25 {
  margin-right: 1.5625rem !important;
}

.me-30 {
  margin-right: 1.875rem !important;
}

.me-35 {
  margin-right: 2.1875rem !important;
}

.me-40 {
  margin-right: 2.5rem !important;
}

.me-45 {
  margin-right: 2.8125rem !important;
}

.me-50 {
  margin-right: 3.125rem !important;
}

.me-60 {
  margin-right: 3.75rem !important;
}

.me-70 {
  margin-right: 4.375rem !important;
}

.me-80 {
  margin-right: 5rem !important;
}

.me-90 {
  margin-right: 5.625rem !important;
}

.me-100 {
  margin-right: 6.25rem !important;
}

.me-120 {
  margin-right: 7.5rem !important;
}

.me-140 {
  margin-right: 8.75rem !important;
}

.me-160 {
  margin-right: 10rem !important;
}

.me-180 {
  margin-right: 11.5rem !important;
}

.me-200 {
  margin-right: 12.5rem !important;
}

.me-300 {
  margin-right: 18.75rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-5 {
  margin-bottom: 0.3125rem !important;
}

.mb-10 {
  margin-bottom: 0.625rem !important;
}

.mb-15 {
  margin-bottom: 0.9375rem !important;
}

.mb-20 {
  margin-bottom: 1.25rem !important;
}

.mb-25 {
  margin-bottom: 1.5625rem !important;
}

.mb-30 {
  margin-bottom: 1.875rem !important;
}

.mb-35 {
  margin-bottom: 2.1875rem !important;
}

.mb-40 {
  margin-bottom: 2.5rem !important;
}

.mb-45 {
  margin-bottom: 2.8125rem !important;
}

.mb-50 {
  margin-bottom: 3.125rem !important;
}

.mb-60 {
  margin-bottom: 3.75rem !important;
}

.mb-70 {
  margin-bottom: 4.375rem !important;
}

.mb-80 {
  margin-bottom: 5rem !important;
}

.mb-90 {
  margin-bottom: 5.625rem !important;
}

.mb-100 {
  margin-bottom: 6.25rem !important;
}

.mb-120 {
  margin-bottom: 7.5rem !important;
}

.mb-140 {
  margin-bottom: 8.75rem !important;
}

.mb-160 {
  margin-bottom: 10rem !important;
}

.mb-180 {
  margin-bottom: 11.5rem !important;
}

.mb-200 {
  margin-bottom: 12.5rem !important;
}

.mb-300 {
  margin-bottom: 18.75rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-5 {
  margin-left: 0.3125rem !important;
}

.ms-10 {
  margin-left: 0.625rem !important;
}

.ms-15 {
  margin-left: 0.9375rem !important;
}

.ms-20 {
  margin-left: 1.25rem !important;
}

.ms-25 {
  margin-left: 1.5625rem !important;
}

.ms-30 {
  margin-left: 1.875rem !important;
}

.ms-35 {
  margin-left: 2.1875rem !important;
}

.ms-40 {
  margin-left: 2.5rem !important;
}

.ms-45 {
  margin-left: 2.8125rem !important;
}

.ms-50 {
  margin-left: 3.125rem !important;
}

.ms-60 {
  margin-left: 3.75rem !important;
}

.ms-70 {
  margin-left: 4.375rem !important;
}

.ms-80 {
  margin-left: 5rem !important;
}

.ms-90 {
  margin-left: 5.625rem !important;
}

.ms-100 {
  margin-left: 6.25rem !important;
}

.ms-120 {
  margin-left: 7.5rem !important;
}

.ms-140 {
  margin-left: 8.75rem !important;
}

.ms-160 {
  margin-left: 10rem !important;
}

.ms-180 {
  margin-left: 11.5rem !important;
}

.ms-200 {
  margin-left: 12.5rem !important;
}

.ms-300 {
  margin-left: 18.75rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.m-n5 {
  margin: -0.3125rem !important;
}

.m-n10 {
  margin: -0.625rem !important;
}

.m-n15 {
  margin: -0.9375rem !important;
}

.m-n20 {
  margin: -1.25rem !important;
}

.m-n25 {
  margin: -1.5625rem !important;
}

.m-n30 {
  margin: -1.875rem !important;
}

.m-n35 {
  margin: -2.1875rem !important;
}

.m-n40 {
  margin: -2.5rem !important;
}

.m-n45 {
  margin: -2.8125rem !important;
}

.m-n50 {
  margin: -3.125rem !important;
}

.m-n60 {
  margin: -3.75rem !important;
}

.m-n70 {
  margin: -4.375rem !important;
}

.m-n80 {
  margin: -5rem !important;
}

.m-n90 {
  margin: -5.625rem !important;
}

.m-n100 {
  margin: -6.25rem !important;
}

.m-n120 {
  margin: -7.5rem !important;
}

.m-n140 {
  margin: -8.75rem !important;
}

.m-n160 {
  margin: -10rem !important;
}

.m-n180 {
  margin: -11.5rem !important;
}

.m-n200 {
  margin: -12.5rem !important;
}

.m-n300 {
  margin: -18.75rem !important;
}

.mx-n5 {
  margin-right: -0.3125rem !important;
  margin-left: -0.3125rem !important;
}

.mx-n10 {
  margin-right: -0.625rem !important;
  margin-left: -0.625rem !important;
}

.mx-n15 {
  margin-right: -0.9375rem !important;
  margin-left: -0.9375rem !important;
}

.mx-n20 {
  margin-right: -1.25rem !important;
  margin-left: -1.25rem !important;
}

.mx-n25 {
  margin-right: -1.5625rem !important;
  margin-left: -1.5625rem !important;
}

.mx-n30 {
  margin-right: -1.875rem !important;
  margin-left: -1.875rem !important;
}

.mx-n35 {
  margin-right: -2.1875rem !important;
  margin-left: -2.1875rem !important;
}

.mx-n40 {
  margin-right: -2.5rem !important;
  margin-left: -2.5rem !important;
}

.mx-n45 {
  margin-right: -2.8125rem !important;
  margin-left: -2.8125rem !important;
}

.mx-n50 {
  margin-right: -3.125rem !important;
  margin-left: -3.125rem !important;
}

.mx-n60 {
  margin-right: -3.75rem !important;
  margin-left: -3.75rem !important;
}

.mx-n70 {
  margin-right: -4.375rem !important;
  margin-left: -4.375rem !important;
}

.mx-n80 {
  margin-right: -5rem !important;
  margin-left: -5rem !important;
}

.mx-n90 {
  margin-right: -5.625rem !important;
  margin-left: -5.625rem !important;
}

.mx-n100 {
  margin-right: -6.25rem !important;
  margin-left: -6.25rem !important;
}

.mx-n120 {
  margin-right: -7.5rem !important;
  margin-left: -7.5rem !important;
}

.mx-n140 {
  margin-right: -8.75rem !important;
  margin-left: -8.75rem !important;
}

.mx-n160 {
  margin-right: -10rem !important;
  margin-left: -10rem !important;
}

.mx-n180 {
  margin-right: -11.5rem !important;
  margin-left: -11.5rem !important;
}

.mx-n200 {
  margin-right: -12.5rem !important;
  margin-left: -12.5rem !important;
}

.mx-n300 {
  margin-right: -18.75rem !important;
  margin-left: -18.75rem !important;
}

.my-n5 {
  margin-top: -0.3125rem !important;
  margin-bottom: -0.3125rem !important;
}

.my-n10 {
  margin-top: -0.625rem !important;
  margin-bottom: -0.625rem !important;
}

.my-n15 {
  margin-top: -0.9375rem !important;
  margin-bottom: -0.9375rem !important;
}

.my-n20 {
  margin-top: -1.25rem !important;
  margin-bottom: -1.25rem !important;
}

.my-n25 {
  margin-top: -1.5625rem !important;
  margin-bottom: -1.5625rem !important;
}

.my-n30 {
  margin-top: -1.875rem !important;
  margin-bottom: -1.875rem !important;
}

.my-n35 {
  margin-top: -2.1875rem !important;
  margin-bottom: -2.1875rem !important;
}

.my-n40 {
  margin-top: -2.5rem !important;
  margin-bottom: -2.5rem !important;
}

.my-n45 {
  margin-top: -2.8125rem !important;
  margin-bottom: -2.8125rem !important;
}

.my-n50 {
  margin-top: -3.125rem !important;
  margin-bottom: -3.125rem !important;
}

.my-n60 {
  margin-top: -3.75rem !important;
  margin-bottom: -3.75rem !important;
}

.my-n70 {
  margin-top: -4.375rem !important;
  margin-bottom: -4.375rem !important;
}

.my-n80 {
  margin-top: -5rem !important;
  margin-bottom: -5rem !important;
}

.my-n90 {
  margin-top: -5.625rem !important;
  margin-bottom: -5.625rem !important;
}

.my-n100 {
  margin-top: -6.25rem !important;
  margin-bottom: -6.25rem !important;
}

.my-n120 {
  margin-top: -7.5rem !important;
  margin-bottom: -7.5rem !important;
}

.my-n140 {
  margin-top: -8.75rem !important;
  margin-bottom: -8.75rem !important;
}

.my-n160 {
  margin-top: -10rem !important;
  margin-bottom: -10rem !important;
}

.my-n180 {
  margin-top: -11.5rem !important;
  margin-bottom: -11.5rem !important;
}

.my-n200 {
  margin-top: -12.5rem !important;
  margin-bottom: -12.5rem !important;
}

.my-n300 {
  margin-top: -18.75rem !important;
  margin-bottom: -18.75rem !important;
}

.mt-n5 {
  margin-top: -0.3125rem !important;
}

.mt-n10 {
  margin-top: -0.625rem !important;
}

.mt-n15 {
  margin-top: -0.9375rem !important;
}

.mt-n20 {
  margin-top: -1.25rem !important;
}

.mt-n25 {
  margin-top: -1.5625rem !important;
}

.mt-n30 {
  margin-top: -1.875rem !important;
}

.mt-n35 {
  margin-top: -2.1875rem !important;
}

.mt-n40 {
  margin-top: -2.5rem !important;
}

.mt-n45 {
  margin-top: -2.8125rem !important;
}

.mt-n50 {
  margin-top: -3.125rem !important;
}

.mt-n60 {
  margin-top: -3.75rem !important;
}

.mt-n70 {
  margin-top: -4.375rem !important;
}

.mt-n80 {
  margin-top: -5rem !important;
}

.mt-n90 {
  margin-top: -5.625rem !important;
}

.mt-n100 {
  margin-top: -6.25rem !important;
}

.mt-n120 {
  margin-top: -7.5rem !important;
}

.mt-n140 {
  margin-top: -8.75rem !important;
}

.mt-n160 {
  margin-top: -10rem !important;
}

.mt-n180 {
  margin-top: -11.5rem !important;
}

.mt-n200 {
  margin-top: -12.5rem !important;
}

.mt-n300 {
  margin-top: -18.75rem !important;
}

.me-n5 {
  margin-right: -0.3125rem !important;
}

.me-n10 {
  margin-right: -0.625rem !important;
}

.me-n15 {
  margin-right: -0.9375rem !important;
}

.me-n20 {
  margin-right: -1.25rem !important;
}

.me-n25 {
  margin-right: -1.5625rem !important;
}

.me-n30 {
  margin-right: -1.875rem !important;
}

.me-n35 {
  margin-right: -2.1875rem !important;
}

.me-n40 {
  margin-right: -2.5rem !important;
}

.me-n45 {
  margin-right: -2.8125rem !important;
}

.me-n50 {
  margin-right: -3.125rem !important;
}

.me-n60 {
  margin-right: -3.75rem !important;
}

.me-n70 {
  margin-right: -4.375rem !important;
}

.me-n80 {
  margin-right: -5rem !important;
}

.me-n90 {
  margin-right: -5.625rem !important;
}

.me-n100 {
  margin-right: -6.25rem !important;
}

.me-n120 {
  margin-right: -7.5rem !important;
}

.me-n140 {
  margin-right: -8.75rem !important;
}

.me-n160 {
  margin-right: -10rem !important;
}

.me-n180 {
  margin-right: -11.5rem !important;
}

.me-n200 {
  margin-right: -12.5rem !important;
}

.me-n300 {
  margin-right: -18.75rem !important;
}

.mb-n5 {
  margin-bottom: -0.3125rem !important;
}

.mb-n10 {
  margin-bottom: -0.625rem !important;
}

.mb-n15 {
  margin-bottom: -0.9375rem !important;
}

.mb-n20 {
  margin-bottom: -1.25rem !important;
}

.mb-n25 {
  margin-bottom: -1.5625rem !important;
}

.mb-n30 {
  margin-bottom: -1.875rem !important;
}

.mb-n35 {
  margin-bottom: -2.1875rem !important;
}

.mb-n40 {
  margin-bottom: -2.5rem !important;
}

.mb-n45 {
  margin-bottom: -2.8125rem !important;
}

.mb-n50 {
  margin-bottom: -3.125rem !important;
}

.mb-n60 {
  margin-bottom: -3.75rem !important;
}

.mb-n70 {
  margin-bottom: -4.375rem !important;
}

.mb-n80 {
  margin-bottom: -5rem !important;
}

.mb-n90 {
  margin-bottom: -5.625rem !important;
}

.mb-n100 {
  margin-bottom: -6.25rem !important;
}

.mb-n120 {
  margin-bottom: -7.5rem !important;
}

.mb-n140 {
  margin-bottom: -8.75rem !important;
}

.mb-n160 {
  margin-bottom: -10rem !important;
}

.mb-n180 {
  margin-bottom: -11.5rem !important;
}

.mb-n200 {
  margin-bottom: -12.5rem !important;
}

.mb-n300 {
  margin-bottom: -18.75rem !important;
}

.ms-n5 {
  margin-left: -0.3125rem !important;
}

.ms-n10 {
  margin-left: -0.625rem !important;
}

.ms-n15 {
  margin-left: -0.9375rem !important;
}

.ms-n20 {
  margin-left: -1.25rem !important;
}

.ms-n25 {
  margin-left: -1.5625rem !important;
}

.ms-n30 {
  margin-left: -1.875rem !important;
}

.ms-n35 {
  margin-left: -2.1875rem !important;
}

.ms-n40 {
  margin-left: -2.5rem !important;
}

.ms-n45 {
  margin-left: -2.8125rem !important;
}

.ms-n50 {
  margin-left: -3.125rem !important;
}

.ms-n60 {
  margin-left: -3.75rem !important;
}

.ms-n70 {
  margin-left: -4.375rem !important;
}

.ms-n80 {
  margin-left: -5rem !important;
}

.ms-n90 {
  margin-left: -5.625rem !important;
}

.ms-n100 {
  margin-left: -6.25rem !important;
}

.ms-n120 {
  margin-left: -7.5rem !important;
}

.ms-n140 {
  margin-left: -8.75rem !important;
}

.ms-n160 {
  margin-left: -10rem !important;
}

.ms-n180 {
  margin-left: -11.5rem !important;
}

.ms-n200 {
  margin-left: -12.5rem !important;
}

.ms-n300 {
  margin-left: -18.75rem !important;
}

.p-0 {
  padding: 0 !important;
}

.p-5 {
  padding: 0.3125rem !important;
}

.p-10 {
  padding: 0.625rem !important;
}

.p-15 {
  padding: 0.9375rem !important;
}

.p-20 {
  padding: 1.25rem !important;
}

.p-25 {
  padding: 1.5625rem !important;
}

.p-30 {
  padding: 1.875rem !important;
}

.p-35 {
  padding: 2.1875rem !important;
}

.p-40 {
  padding: 2.5rem !important;
}

.p-45 {
  padding: 2.8125rem !important;
}

.p-50 {
  padding: 3.125rem !important;
}

.p-60 {
  padding: 3.75rem !important;
}

.p-70 {
  padding: 4.375rem !important;
}

.p-80 {
  padding: 5rem !important;
}

.p-90 {
  padding: 5.625rem !important;
}

.p-100 {
  padding: 6.25rem !important;
}

.p-120 {
  padding: 7.5rem !important;
}

.p-140 {
  padding: 8.75rem !important;
}

.p-160 {
  padding: 10rem !important;
}

.p-180 {
  padding: 11.5rem !important;
}

.p-200 {
  padding: 12.5rem !important;
}

.p-300 {
  padding: 18.75rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-5 {
  padding-right: 0.3125rem !important;
  padding-left: 0.3125rem !important;
}

.px-10 {
  padding-right: 0.625rem !important;
  padding-left: 0.625rem !important;
}

.px-15 {
  padding-right: 0.9375rem !important;
  padding-left: 0.9375rem !important;
}

.px-20 {
  padding-right: 1.25rem !important;
  padding-left: 1.25rem !important;
}

.px-25 {
  padding-right: 1.5625rem !important;
  padding-left: 1.5625rem !important;
}

.px-30 {
  padding-right: 1.875rem !important;
  padding-left: 1.875rem !important;
}

.px-35 {
  padding-right: 2.1875rem !important;
  padding-left: 2.1875rem !important;
}

.px-40 {
  padding-right: 2.5rem !important;
  padding-left: 2.5rem !important;
}

.px-45 {
  padding-right: 2.8125rem !important;
  padding-left: 2.8125rem !important;
}

.px-50 {
  padding-right: 3.125rem !important;
  padding-left: 3.125rem !important;
}

.px-60 {
  padding-right: 3.75rem !important;
  padding-left: 3.75rem !important;
}

.px-70 {
  padding-right: 4.375rem !important;
  padding-left: 4.375rem !important;
}

.px-80 {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}

.px-90 {
  padding-right: 5.625rem !important;
  padding-left: 5.625rem !important;
}

.px-100 {
  padding-right: 6.25rem !important;
  padding-left: 6.25rem !important;
}

.px-120 {
  padding-right: 7.5rem !important;
  padding-left: 7.5rem !important;
}

.px-140 {
  padding-right: 8.75rem !important;
  padding-left: 8.75rem !important;
}

.px-160 {
  padding-right: 10rem !important;
  padding-left: 10rem !important;
}

.px-180 {
  padding-right: 11.5rem !important;
  padding-left: 11.5rem !important;
}

.px-200 {
  padding-right: 12.5rem !important;
  padding-left: 12.5rem !important;
}

.px-300 {
  padding-right: 18.75rem !important;
  padding-left: 18.75rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-5 {
  padding-top: 0.3125rem !important;
  padding-bottom: 0.3125rem !important;
}

.py-10 {
  padding-top: 0.625rem !important;
  padding-bottom: 0.625rem !important;
}

.py-15 {
  padding-top: 0.9375rem !important;
  padding-bottom: 0.9375rem !important;
}

.py-20 {
  padding-top: 1.25rem !important;
  padding-bottom: 1.25rem !important;
}

.py-25 {
  padding-top: 1.5625rem !important;
  padding-bottom: 1.5625rem !important;
}

.py-30 {
  padding-top: 1.875rem !important;
  padding-bottom: 1.875rem !important;
}

.py-35 {
  padding-top: 2.1875rem !important;
  padding-bottom: 2.1875rem !important;
}

.py-40 {
  padding-top: 2.5rem !important;
  padding-bottom: 2.5rem !important;
}

.py-45 {
  padding-top: 2.8125rem !important;
  padding-bottom: 2.8125rem !important;
}

.py-50 {
  padding-top: 3.125rem !important;
  padding-bottom: 3.125rem !important;
}

.py-60 {
  padding-top: 3.75rem !important;
  padding-bottom: 3.75rem !important;
}

.py-70 {
  padding-top: 4.375rem !important;
  padding-bottom: 4.375rem !important;
}

.py-80 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

.py-90 {
  padding-top: 5.625rem !important;
  padding-bottom: 5.625rem !important;
}

.py-100 {
  padding-top: 6.25rem !important;
  padding-bottom: 6.25rem !important;
}

.py-120 {
  padding-top: 7.5rem !important;
  padding-bottom: 7.5rem !important;
}

.py-140 {
  padding-top: 8.75rem !important;
  padding-bottom: 8.75rem !important;
}

.py-160 {
  padding-top: 10rem !important;
  padding-bottom: 10rem !important;
}

.py-180 {
  padding-top: 11.5rem !important;
  padding-bottom: 11.5rem !important;
}

.py-200 {
  padding-top: 12.5rem !important;
  padding-bottom: 12.5rem !important;
}

.py-300 {
  padding-top: 18.75rem !important;
  padding-bottom: 18.75rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-5 {
  padding-top: 0.3125rem !important;
}

.pt-10 {
  padding-top: 0.625rem !important;
}

.pt-15 {
  padding-top: 0.9375rem !important;
}

.pt-20 {
  padding-top: 1.25rem !important;
}

.pt-25 {
  padding-top: 1.5625rem !important;
}

.pt-30 {
  padding-top: 1.875rem !important;
}

.pt-35 {
  padding-top: 2.1875rem !important;
}

.pt-40 {
  padding-top: 2.5rem !important;
}

.pt-45 {
  padding-top: 2.8125rem !important;
}

.pt-50 {
  padding-top: 3.125rem !important;
}

.pt-60 {
  padding-top: 3.75rem !important;
}

.pt-70 {
  padding-top: 4.375rem !important;
}

.pt-80 {
  padding-top: 5rem !important;
}

.pt-90 {
  padding-top: 5.625rem !important;
}

.pt-100 {
  padding-top: 6.25rem !important;
}

.pt-120 {
  padding-top: 7.5rem !important;
}

.pt-140 {
  padding-top: 8.75rem !important;
}

.pt-160 {
  padding-top: 10rem !important;
}

.pt-180 {
  padding-top: 11.5rem !important;
}

.pt-200 {
  padding-top: 12.5rem !important;
}

.pt-300 {
  padding-top: 18.75rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-5 {
  padding-right: 0.3125rem !important;
}

.pe-10 {
  padding-right: 0.625rem !important;
}

.pe-15 {
  padding-right: 0.9375rem !important;
}

.pe-20 {
  padding-right: 1.25rem !important;
}

.pe-25 {
  padding-right: 1.5625rem !important;
}

.pe-30 {
  padding-right: 1.875rem !important;
}

.pe-35 {
  padding-right: 2.1875rem !important;
}

.pe-40 {
  padding-right: 2.5rem !important;
}

.pe-45 {
  padding-right: 2.8125rem !important;
}

.pe-50 {
  padding-right: 3.125rem !important;
}

.pe-60 {
  padding-right: 3.75rem !important;
}

.pe-70 {
  padding-right: 4.375rem !important;
}

.pe-80 {
  padding-right: 5rem !important;
}

.pe-90 {
  padding-right: 5.625rem !important;
}

.pe-100 {
  padding-right: 6.25rem !important;
}

.pe-120 {
  padding-right: 7.5rem !important;
}

.pe-140 {
  padding-right: 8.75rem !important;
}

.pe-160 {
  padding-right: 10rem !important;
}

.pe-180 {
  padding-right: 11.5rem !important;
}

.pe-200 {
  padding-right: 12.5rem !important;
}

.pe-300 {
  padding-right: 18.75rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-5 {
  padding-bottom: 0.3125rem !important;
}

.pb-10 {
  padding-bottom: 0.625rem !important;
}

.pb-15 {
  padding-bottom: 0.9375rem !important;
}

.pb-20 {
  padding-bottom: 1.25rem !important;
}

.pb-25 {
  padding-bottom: 1.5625rem !important;
}

.pb-30 {
  padding-bottom: 1.875rem !important;
}

.pb-35 {
  padding-bottom: 2.1875rem !important;
}

.pb-40 {
  padding-bottom: 2.5rem !important;
}

.pb-45 {
  padding-bottom: 2.8125rem !important;
}

.pb-50 {
  padding-bottom: 3.125rem !important;
}

.pb-60 {
  padding-bottom: 3.75rem !important;
}

.pb-70 {
  padding-bottom: 4.375rem !important;
}

.pb-80 {
  padding-bottom: 5rem !important;
}

.pb-90 {
  padding-bottom: 5.625rem !important;
}

.pb-100 {
  padding-bottom: 6.25rem !important;
}

.pb-120 {
  padding-bottom: 7.5rem !important;
}

.pb-140 {
  padding-bottom: 8.75rem !important;
}

.pb-160 {
  padding-bottom: 10rem !important;
}

.pb-180 {
  padding-bottom: 11.5rem !important;
}

.pb-200 {
  padding-bottom: 12.5rem !important;
}

.pb-300 {
  padding-bottom: 18.75rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-5 {
  padding-left: 0.3125rem !important;
}

.ps-10 {
  padding-left: 0.625rem !important;
}

.ps-15 {
  padding-left: 0.9375rem !important;
}

.ps-20 {
  padding-left: 1.25rem !important;
}

.ps-25 {
  padding-left: 1.5625rem !important;
}

.ps-30 {
  padding-left: 1.875rem !important;
}

.ps-35 {
  padding-left: 2.1875rem !important;
}

.ps-40 {
  padding-left: 2.5rem !important;
}

.ps-45 {
  padding-left: 2.8125rem !important;
}

.ps-50 {
  padding-left: 3.125rem !important;
}

.ps-60 {
  padding-left: 3.75rem !important;
}

.ps-70 {
  padding-left: 4.375rem !important;
}

.ps-80 {
  padding-left: 5rem !important;
}

.ps-90 {
  padding-left: 5.625rem !important;
}

.ps-100 {
  padding-left: 6.25rem !important;
}

.ps-120 {
  padding-left: 7.5rem !important;
}

.ps-140 {
  padding-left: 8.75rem !important;
}

.ps-160 {
  padding-left: 10rem !important;
}

.ps-180 {
  padding-left: 11.5rem !important;
}

.ps-200 {
  padding-left: 12.5rem !important;
}

.ps-300 {
  padding-left: 18.75rem !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-5 {
  gap: 0.3125rem !important;
}

.gap-10 {
  gap: 0.625rem !important;
}

.gap-15 {
  gap: 0.9375rem !important;
}

.gap-20 {
  gap: 1.25rem !important;
}

.gap-25 {
  gap: 1.5625rem !important;
}

.gap-30 {
  gap: 1.875rem !important;
}

.gap-35 {
  gap: 2.1875rem !important;
}

.gap-40 {
  gap: 2.5rem !important;
}

.gap-45 {
  gap: 2.8125rem !important;
}

.gap-50 {
  gap: 3.125rem !important;
}

.gap-60 {
  gap: 3.75rem !important;
}

.gap-70 {
  gap: 4.375rem !important;
}

.gap-80 {
  gap: 5rem !important;
}

.gap-90 {
  gap: 5.625rem !important;
}

.gap-100 {
  gap: 6.25rem !important;
}

.gap-120 {
  gap: 7.5rem !important;
}

.gap-140 {
  gap: 8.75rem !important;
}

.gap-160 {
  gap: 10rem !important;
}

.gap-180 {
  gap: 11.5rem !important;
}

.gap-200 {
  gap: 12.5rem !important;
}

.gap-300 {
  gap: 18.75rem !important;
}

.row-gap-0 {
  row-gap: 0 !important;
}

.row-gap-5 {
  row-gap: 0.3125rem !important;
}

.row-gap-10 {
  row-gap: 0.625rem !important;
}

.row-gap-15 {
  row-gap: 0.9375rem !important;
}

.row-gap-20 {
  row-gap: 1.25rem !important;
}

.row-gap-25 {
  row-gap: 1.5625rem !important;
}

.row-gap-30 {
  row-gap: 1.875rem !important;
}

.row-gap-35 {
  row-gap: 2.1875rem !important;
}

.row-gap-40 {
  row-gap: 2.5rem !important;
}

.row-gap-45 {
  row-gap: 2.8125rem !important;
}

.row-gap-50 {
  row-gap: 3.125rem !important;
}

.row-gap-60 {
  row-gap: 3.75rem !important;
}

.row-gap-70 {
  row-gap: 4.375rem !important;
}

.row-gap-80 {
  row-gap: 5rem !important;
}

.row-gap-90 {
  row-gap: 5.625rem !important;
}

.row-gap-100 {
  row-gap: 6.25rem !important;
}

.row-gap-120 {
  row-gap: 7.5rem !important;
}

.row-gap-140 {
  row-gap: 8.75rem !important;
}

.row-gap-160 {
  row-gap: 10rem !important;
}

.row-gap-180 {
  row-gap: 11.5rem !important;
}

.row-gap-200 {
  row-gap: 12.5rem !important;
}

.row-gap-300 {
  row-gap: 18.75rem !important;
}

.column-gap-0 {
  column-gap: 0 !important;
}

.column-gap-5 {
  column-gap: 0.3125rem !important;
}

.column-gap-10 {
  column-gap: 0.625rem !important;
}

.column-gap-15 {
  column-gap: 0.9375rem !important;
}

.column-gap-20 {
  column-gap: 1.25rem !important;
}

.column-gap-25 {
  column-gap: 1.5625rem !important;
}

.column-gap-30 {
  column-gap: 1.875rem !important;
}

.column-gap-35 {
  column-gap: 2.1875rem !important;
}

.column-gap-40 {
  column-gap: 2.5rem !important;
}

.column-gap-45 {
  column-gap: 2.8125rem !important;
}

.column-gap-50 {
  column-gap: 3.125rem !important;
}

.column-gap-60 {
  column-gap: 3.75rem !important;
}

.column-gap-70 {
  column-gap: 4.375rem !important;
}

.column-gap-80 {
  column-gap: 5rem !important;
}

.column-gap-90 {
  column-gap: 5.625rem !important;
}

.column-gap-100 {
  column-gap: 6.25rem !important;
}

.column-gap-120 {
  column-gap: 7.5rem !important;
}

.column-gap-140 {
  column-gap: 8.75rem !important;
}

.column-gap-160 {
  column-gap: 10rem !important;
}

.column-gap-180 {
  column-gap: 11.5rem !important;
}

.column-gap-200 {
  column-gap: 12.5rem !important;
}

.column-gap-300 {
  column-gap: 18.75rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.6rem + 4.2vw) !important;
}

.fs-2 {
  font-size: calc(1.5rem + 3vw) !important;
}

.fs-3 {
  font-size: calc(1.4375rem + 2.25vw) !important;
}

.fs-4 {
  font-size: calc(1.3875rem + 1.65vw) !important;
}

.fs-5 {
  font-size: calc(1.35rem + 1.2vw) !important;
}

.fs-6 {
  font-size: calc(1.3125rem + 0.75vw) !important;
}

.fs-base {
  font-size: 1rem !important;
}

.fs-xxs {
  font-size: 0.625rem !important;
}

.fs-xs {
  font-size: 0.75rem !important;
}

.fs-sm {
  font-size: 0.875rem !important;
}

.fs-md {
  font-size: 1.125rem !important;
}

.fs-lg {
  font-size: 1.25rem !important;
}

.fs-xl {
  font-size: calc(1.2625rem + 0.15vw) !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-medium {
  font-weight: 500 !important;
}

.fw-semibold {
  font-weight: 600 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-secondary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}

.text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}

.text-info {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}

.text-warning {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}

.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-black {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}

.text-black-50 {
  --bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-body-secondary {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}

.text-body-tertiary {
  --bs-text-opacity: 1;
  color: var(--bs-tertiary-color) !important;
}

.text-body-emphasis {
  --bs-text-opacity: 1;
  color: var(--bs-emphasis-color) !important;
}

.text-reset {
  --bs-text-opacity: 1;
  color: inherit !important;
}

.text-opacity-25 {
  --bs-text-opacity: 0.25;
}

.text-opacity-50 {
  --bs-text-opacity: 0.5;
}

.text-opacity-75 {
  --bs-text-opacity: 0.75;
}

.text-opacity-100 {
  --bs-text-opacity: 1;
}

.text-primary-emphasis {
  color: var(--bs-primary-text-emphasis) !important;
}

.text-secondary-emphasis {
  color: var(--bs-secondary-text-emphasis) !important;
}

.text-success-emphasis {
  color: var(--bs-success-text-emphasis) !important;
}

.text-info-emphasis {
  color: var(--bs-info-text-emphasis) !important;
}

.text-warning-emphasis {
  color: var(--bs-warning-text-emphasis) !important;
}

.text-danger-emphasis {
  color: var(--bs-danger-text-emphasis) !important;
}

.text-light-emphasis {
  color: var(--bs-light-text-emphasis) !important;
}

.text-dark-emphasis {
  color: var(--bs-dark-text-emphasis) !important;
}

.link-opacity-10 {
  --bs-link-opacity: 0.1;
}

.link-opacity-10-hover:hover {
  --bs-link-opacity: 0.1;
}

.link-opacity-25 {
  --bs-link-opacity: 0.25;
}

.link-opacity-25-hover:hover {
  --bs-link-opacity: 0.25;
}

.link-opacity-50 {
  --bs-link-opacity: 0.5;
}

.link-opacity-50-hover:hover {
  --bs-link-opacity: 0.5;
}

.link-opacity-75 {
  --bs-link-opacity: 0.75;
}

.link-opacity-75-hover:hover {
  --bs-link-opacity: 0.75;
}

.link-opacity-100 {
  --bs-link-opacity: 1;
}

.link-opacity-100-hover:hover {
  --bs-link-opacity: 1;
}

.link-offset-1 {
  text-underline-offset: 0.125em !important;
}

.link-offset-1-hover:hover {
  text-underline-offset: 0.125em !important;
}

.link-offset-2 {
  text-underline-offset: 0.25em !important;
}

.link-offset-2-hover:hover {
  text-underline-offset: 0.25em !important;
}

.link-offset-3 {
  text-underline-offset: 0.375em !important;
}

.link-offset-3-hover:hover {
  text-underline-offset: 0.375em !important;
}

.link-underline-primary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-secondary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-success {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-info {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-warning {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-danger {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-light {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-dark {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}

.link-underline-opacity-0 {
  --bs-link-underline-opacity: 0;
}

.link-underline-opacity-0-hover:hover {
  --bs-link-underline-opacity: 0;
}

.link-underline-opacity-10 {
  --bs-link-underline-opacity: 0.1;
}

.link-underline-opacity-10-hover:hover {
  --bs-link-underline-opacity: 0.1;
}

.link-underline-opacity-25 {
  --bs-link-underline-opacity: 0.25;
}

.link-underline-opacity-25-hover:hover {
  --bs-link-underline-opacity: 0.25;
}

.link-underline-opacity-50 {
  --bs-link-underline-opacity: 0.5;
}

.link-underline-opacity-50-hover:hover {
  --bs-link-underline-opacity: 0.5;
}

.link-underline-opacity-75 {
  --bs-link-underline-opacity: 0.75;
}

.link-underline-opacity-75-hover:hover {
  --bs-link-underline-opacity: 0.75;
}

.link-underline-opacity-100 {
  --bs-link-underline-opacity: 1;
}

.link-underline-opacity-100-hover:hover {
  --bs-link-underline-opacity: 1;
}

.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-black {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}

.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}

.bg-body-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body-tertiary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}

.bg-opacity-25 {
  --bs-bg-opacity: 0.25;
}

.bg-opacity-50 {
  --bs-bg-opacity: 0.5;
}

.bg-opacity-75 {
  --bs-bg-opacity: 0.75;
}

.bg-opacity-100 {
  --bs-bg-opacity: 1;
}

.bg-primary-subtle {
  background-color: var(--bs-primary-bg-subtle) !important;
}

.bg-secondary-subtle {
  background-color: var(--bs-secondary-bg-subtle) !important;
}

.bg-success-subtle {
  background-color: var(--bs-success-bg-subtle) !important;
}

.bg-info-subtle {
  background-color: var(--bs-info-bg-subtle) !important;
}

.bg-warning-subtle {
  background-color: var(--bs-warning-bg-subtle) !important;
}

.bg-danger-subtle {
  background-color: var(--bs-danger-bg-subtle) !important;
}

.bg-light-subtle {
  background-color: var(--bs-light-bg-subtle) !important;
}

.bg-dark-subtle {
  background-color: var(--bs-dark-bg-subtle) !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  user-select: all !important;
}

.user-select-auto {
  user-select: auto !important;
}

.user-select-none {
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: var(--bs-border-radius) !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: var(--bs-border-radius-sm) !important;
}

.rounded-2 {
  border-radius: var(--bs-border-radius) !important;
}

.rounded-3 {
  border-radius: var(--bs-border-radius-lg) !important;
}

.rounded-4 {
  border-radius: var(--bs-border-radius-xl) !important;
}

.rounded-5 {
  border-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: var(--bs-border-radius-pill) !important;
}

.rounded-top {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

.rounded-top-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.rounded-top-1 {
  border-top-left-radius: var(--bs-border-radius-sm) !important;
  border-top-right-radius: var(--bs-border-radius-sm) !important;
}

.rounded-top-2 {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

.rounded-top-3 {
  border-top-left-radius: var(--bs-border-radius-lg) !important;
  border-top-right-radius: var(--bs-border-radius-lg) !important;
}

.rounded-top-4 {
  border-top-left-radius: var(--bs-border-radius-xl) !important;
  border-top-right-radius: var(--bs-border-radius-xl) !important;
}

.rounded-top-5 {
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-top-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}

.rounded-top-pill {
  border-top-left-radius: var(--bs-border-radius-pill) !important;
  border-top-right-radius: var(--bs-border-radius-pill) !important;
}

.rounded-end {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}

.rounded-end-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-end-1 {
  border-top-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
}

.rounded-end-2 {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}

.rounded-end-3 {
  border-top-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
}

.rounded-end-4 {
  border-top-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
}

.rounded-end-5 {
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-end-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.rounded-end-pill {
  border-top-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
}

.rounded-bottom {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}

.rounded-bottom-0 {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.rounded-bottom-1 {
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
}

.rounded-bottom-2 {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}

.rounded-bottom-3 {
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
}

.rounded-bottom-4 {
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
}

.rounded-bottom-5 {
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-bottom-circle {
  border-bottom-right-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

.rounded-bottom-pill {
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
}

.rounded-start {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}

.rounded-start-0 {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}

.rounded-start-1 {
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
  border-top-left-radius: var(--bs-border-radius-sm) !important;
}

.rounded-start-2 {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}

.rounded-start-3 {
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
  border-top-left-radius: var(--bs-border-radius-lg) !important;
}

.rounded-start-4 {
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
  border-top-left-radius: var(--bs-border-radius-xl) !important;
}

.rounded-start-5 {
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-start-circle {
  border-bottom-left-radius: 50% !important;
  border-top-left-radius: 50% !important;
}

.rounded-start-pill {
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
  border-top-left-radius: var(--bs-border-radius-pill) !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

.z-n1 {
  z-index: -1 !important;
}

.z-0 {
  z-index: 0 !important;
}

.z-1 {
  z-index: 1 !important;
}

.z-2 {
  z-index: 2 !important;
}

.z-3 {
  z-index: 3 !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }
  .float-sm-end {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .object-fit-sm-contain {
    object-fit: contain !important;
  }
  .object-fit-sm-cover {
    object-fit: cover !important;
  }
  .object-fit-sm-fill {
    object-fit: fill !important;
  }
  .object-fit-sm-scale {
    object-fit: scale-down !important;
  }
  .object-fit-sm-none {
    object-fit: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-grid {
    display: grid !important;
  }
  .d-sm-inline-grid {
    display: inline-grid !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .w-sm-25 {
    width: 25% !important;
  }
  .w-sm-50 {
    width: 50% !important;
  }
  .w-sm-75 {
    width: 75% !important;
  }
  .w-sm-100 {
    width: 100% !important;
  }
  .w-sm-auto {
    width: auto !important;
  }
  .w-sm-10 {
    width: 10% !important;
  }
  .w-sm-20 {
    width: 20% !important;
  }
  .w-sm-30 {
    width: 30% !important;
  }
  .w-sm-40 {
    width: 40% !important;
  }
  .w-sm-60 {
    width: 60% !important;
  }
  .w-sm-70 {
    width: 70% !important;
  }
  .w-sm-80 {
    width: 80% !important;
  }
  .w-sm-90 {
    width: 90% !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-last {
    order: 6 !important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .m-sm-5 {
    margin: 0.3125rem !important;
  }
  .m-sm-10 {
    margin: 0.625rem !important;
  }
  .m-sm-15 {
    margin: 0.9375rem !important;
  }
  .m-sm-20 {
    margin: 1.25rem !important;
  }
  .m-sm-25 {
    margin: 1.5625rem !important;
  }
  .m-sm-30 {
    margin: 1.875rem !important;
  }
  .m-sm-35 {
    margin: 2.1875rem !important;
  }
  .m-sm-40 {
    margin: 2.5rem !important;
  }
  .m-sm-45 {
    margin: 2.8125rem !important;
  }
  .m-sm-50 {
    margin: 3.125rem !important;
  }
  .m-sm-60 {
    margin: 3.75rem !important;
  }
  .m-sm-70 {
    margin: 4.375rem !important;
  }
  .m-sm-80 {
    margin: 5rem !important;
  }
  .m-sm-90 {
    margin: 5.625rem !important;
  }
  .m-sm-100 {
    margin: 6.25rem !important;
  }
  .m-sm-120 {
    margin: 7.5rem !important;
  }
  .m-sm-140 {
    margin: 8.75rem !important;
  }
  .m-sm-160 {
    margin: 10rem !important;
  }
  .m-sm-180 {
    margin: 11.5rem !important;
  }
  .m-sm-200 {
    margin: 12.5rem !important;
  }
  .m-sm-300 {
    margin: 18.75rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-sm-5 {
    margin-right: 0.3125rem !important;
    margin-left: 0.3125rem !important;
  }
  .mx-sm-10 {
    margin-right: 0.625rem !important;
    margin-left: 0.625rem !important;
  }
  .mx-sm-15 {
    margin-right: 0.9375rem !important;
    margin-left: 0.9375rem !important;
  }
  .mx-sm-20 {
    margin-right: 1.25rem !important;
    margin-left: 1.25rem !important;
  }
  .mx-sm-25 {
    margin-right: 1.5625rem !important;
    margin-left: 1.5625rem !important;
  }
  .mx-sm-30 {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }
  .mx-sm-35 {
    margin-right: 2.1875rem !important;
    margin-left: 2.1875rem !important;
  }
  .mx-sm-40 {
    margin-right: 2.5rem !important;
    margin-left: 2.5rem !important;
  }
  .mx-sm-45 {
    margin-right: 2.8125rem !important;
    margin-left: 2.8125rem !important;
  }
  .mx-sm-50 {
    margin-right: 3.125rem !important;
    margin-left: 3.125rem !important;
  }
  .mx-sm-60 {
    margin-right: 3.75rem !important;
    margin-left: 3.75rem !important;
  }
  .mx-sm-70 {
    margin-right: 4.375rem !important;
    margin-left: 4.375rem !important;
  }
  .mx-sm-80 {
    margin-right: 5rem !important;
    margin-left: 5rem !important;
  }
  .mx-sm-90 {
    margin-right: 5.625rem !important;
    margin-left: 5.625rem !important;
  }
  .mx-sm-100 {
    margin-right: 6.25rem !important;
    margin-left: 6.25rem !important;
  }
  .mx-sm-120 {
    margin-right: 7.5rem !important;
    margin-left: 7.5rem !important;
  }
  .mx-sm-140 {
    margin-right: 8.75rem !important;
    margin-left: 8.75rem !important;
  }
  .mx-sm-160 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }
  .mx-sm-180 {
    margin-right: 11.5rem !important;
    margin-left: 11.5rem !important;
  }
  .mx-sm-200 {
    margin-right: 12.5rem !important;
    margin-left: 12.5rem !important;
  }
  .mx-sm-300 {
    margin-right: 18.75rem !important;
    margin-left: 18.75rem !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-sm-5 {
    margin-top: 0.3125rem !important;
    margin-bottom: 0.3125rem !important;
  }
  .my-sm-10 {
    margin-top: 0.625rem !important;
    margin-bottom: 0.625rem !important;
  }
  .my-sm-15 {
    margin-top: 0.9375rem !important;
    margin-bottom: 0.9375rem !important;
  }
  .my-sm-20 {
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
  }
  .my-sm-25 {
    margin-top: 1.5625rem !important;
    margin-bottom: 1.5625rem !important;
  }
  .my-sm-30 {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }
  .my-sm-35 {
    margin-top: 2.1875rem !important;
    margin-bottom: 2.1875rem !important;
  }
  .my-sm-40 {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }
  .my-sm-45 {
    margin-top: 2.8125rem !important;
    margin-bottom: 2.8125rem !important;
  }
  .my-sm-50 {
    margin-top: 3.125rem !important;
    margin-bottom: 3.125rem !important;
  }
  .my-sm-60 {
    margin-top: 3.75rem !important;
    margin-bottom: 3.75rem !important;
  }
  .my-sm-70 {
    margin-top: 4.375rem !important;
    margin-bottom: 4.375rem !important;
  }
  .my-sm-80 {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
  }
  .my-sm-90 {
    margin-top: 5.625rem !important;
    margin-bottom: 5.625rem !important;
  }
  .my-sm-100 {
    margin-top: 6.25rem !important;
    margin-bottom: 6.25rem !important;
  }
  .my-sm-120 {
    margin-top: 7.5rem !important;
    margin-bottom: 7.5rem !important;
  }
  .my-sm-140 {
    margin-top: 8.75rem !important;
    margin-bottom: 8.75rem !important;
  }
  .my-sm-160 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }
  .my-sm-180 {
    margin-top: 11.5rem !important;
    margin-bottom: 11.5rem !important;
  }
  .my-sm-200 {
    margin-top: 12.5rem !important;
    margin-bottom: 12.5rem !important;
  }
  .my-sm-300 {
    margin-top: 18.75rem !important;
    margin-bottom: 18.75rem !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mt-sm-5 {
    margin-top: 0.3125rem !important;
  }
  .mt-sm-10 {
    margin-top: 0.625rem !important;
  }
  .mt-sm-15 {
    margin-top: 0.9375rem !important;
  }
  .mt-sm-20 {
    margin-top: 1.25rem !important;
  }
  .mt-sm-25 {
    margin-top: 1.5625rem !important;
  }
  .mt-sm-30 {
    margin-top: 1.875rem !important;
  }
  .mt-sm-35 {
    margin-top: 2.1875rem !important;
  }
  .mt-sm-40 {
    margin-top: 2.5rem !important;
  }
  .mt-sm-45 {
    margin-top: 2.8125rem !important;
  }
  .mt-sm-50 {
    margin-top: 3.125rem !important;
  }
  .mt-sm-60 {
    margin-top: 3.75rem !important;
  }
  .mt-sm-70 {
    margin-top: 4.375rem !important;
  }
  .mt-sm-80 {
    margin-top: 5rem !important;
  }
  .mt-sm-90 {
    margin-top: 5.625rem !important;
  }
  .mt-sm-100 {
    margin-top: 6.25rem !important;
  }
  .mt-sm-120 {
    margin-top: 7.5rem !important;
  }
  .mt-sm-140 {
    margin-top: 8.75rem !important;
  }
  .mt-sm-160 {
    margin-top: 10rem !important;
  }
  .mt-sm-180 {
    margin-top: 11.5rem !important;
  }
  .mt-sm-200 {
    margin-top: 12.5rem !important;
  }
  .mt-sm-300 {
    margin-top: 18.75rem !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .me-sm-0 {
    margin-right: 0 !important;
  }
  .me-sm-5 {
    margin-right: 0.3125rem !important;
  }
  .me-sm-10 {
    margin-right: 0.625rem !important;
  }
  .me-sm-15 {
    margin-right: 0.9375rem !important;
  }
  .me-sm-20 {
    margin-right: 1.25rem !important;
  }
  .me-sm-25 {
    margin-right: 1.5625rem !important;
  }
  .me-sm-30 {
    margin-right: 1.875rem !important;
  }
  .me-sm-35 {
    margin-right: 2.1875rem !important;
  }
  .me-sm-40 {
    margin-right: 2.5rem !important;
  }
  .me-sm-45 {
    margin-right: 2.8125rem !important;
  }
  .me-sm-50 {
    margin-right: 3.125rem !important;
  }
  .me-sm-60 {
    margin-right: 3.75rem !important;
  }
  .me-sm-70 {
    margin-right: 4.375rem !important;
  }
  .me-sm-80 {
    margin-right: 5rem !important;
  }
  .me-sm-90 {
    margin-right: 5.625rem !important;
  }
  .me-sm-100 {
    margin-right: 6.25rem !important;
  }
  .me-sm-120 {
    margin-right: 7.5rem !important;
  }
  .me-sm-140 {
    margin-right: 8.75rem !important;
  }
  .me-sm-160 {
    margin-right: 10rem !important;
  }
  .me-sm-180 {
    margin-right: 11.5rem !important;
  }
  .me-sm-200 {
    margin-right: 12.5rem !important;
  }
  .me-sm-300 {
    margin-right: 18.75rem !important;
  }
  .me-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .mb-sm-5 {
    margin-bottom: 0.3125rem !important;
  }
  .mb-sm-10 {
    margin-bottom: 0.625rem !important;
  }
  .mb-sm-15 {
    margin-bottom: 0.9375rem !important;
  }
  .mb-sm-20 {
    margin-bottom: 1.25rem !important;
  }
  .mb-sm-25 {
    margin-bottom: 1.5625rem !important;
  }
  .mb-sm-30 {
    margin-bottom: 1.875rem !important;
  }
  .mb-sm-35 {
    margin-bottom: 2.1875rem !important;
  }
  .mb-sm-40 {
    margin-bottom: 2.5rem !important;
  }
  .mb-sm-45 {
    margin-bottom: 2.8125rem !important;
  }
  .mb-sm-50 {
    margin-bottom: 3.125rem !important;
  }
  .mb-sm-60 {
    margin-bottom: 3.75rem !important;
  }
  .mb-sm-70 {
    margin-bottom: 4.375rem !important;
  }
  .mb-sm-80 {
    margin-bottom: 5rem !important;
  }
  .mb-sm-90 {
    margin-bottom: 5.625rem !important;
  }
  .mb-sm-100 {
    margin-bottom: 6.25rem !important;
  }
  .mb-sm-120 {
    margin-bottom: 7.5rem !important;
  }
  .mb-sm-140 {
    margin-bottom: 8.75rem !important;
  }
  .mb-sm-160 {
    margin-bottom: 10rem !important;
  }
  .mb-sm-180 {
    margin-bottom: 11.5rem !important;
  }
  .mb-sm-200 {
    margin-bottom: 12.5rem !important;
  }
  .mb-sm-300 {
    margin-bottom: 18.75rem !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ms-sm-0 {
    margin-left: 0 !important;
  }
  .ms-sm-5 {
    margin-left: 0.3125rem !important;
  }
  .ms-sm-10 {
    margin-left: 0.625rem !important;
  }
  .ms-sm-15 {
    margin-left: 0.9375rem !important;
  }
  .ms-sm-20 {
    margin-left: 1.25rem !important;
  }
  .ms-sm-25 {
    margin-left: 1.5625rem !important;
  }
  .ms-sm-30 {
    margin-left: 1.875rem !important;
  }
  .ms-sm-35 {
    margin-left: 2.1875rem !important;
  }
  .ms-sm-40 {
    margin-left: 2.5rem !important;
  }
  .ms-sm-45 {
    margin-left: 2.8125rem !important;
  }
  .ms-sm-50 {
    margin-left: 3.125rem !important;
  }
  .ms-sm-60 {
    margin-left: 3.75rem !important;
  }
  .ms-sm-70 {
    margin-left: 4.375rem !important;
  }
  .ms-sm-80 {
    margin-left: 5rem !important;
  }
  .ms-sm-90 {
    margin-left: 5.625rem !important;
  }
  .ms-sm-100 {
    margin-left: 6.25rem !important;
  }
  .ms-sm-120 {
    margin-left: 7.5rem !important;
  }
  .ms-sm-140 {
    margin-left: 8.75rem !important;
  }
  .ms-sm-160 {
    margin-left: 10rem !important;
  }
  .ms-sm-180 {
    margin-left: 11.5rem !important;
  }
  .ms-sm-200 {
    margin-left: 12.5rem !important;
  }
  .ms-sm-300 {
    margin-left: 18.75rem !important;
  }
  .ms-sm-auto {
    margin-left: auto !important;
  }
  .m-sm-n5 {
    margin: -0.3125rem !important;
  }
  .m-sm-n10 {
    margin: -0.625rem !important;
  }
  .m-sm-n15 {
    margin: -0.9375rem !important;
  }
  .m-sm-n20 {
    margin: -1.25rem !important;
  }
  .m-sm-n25 {
    margin: -1.5625rem !important;
  }
  .m-sm-n30 {
    margin: -1.875rem !important;
  }
  .m-sm-n35 {
    margin: -2.1875rem !important;
  }
  .m-sm-n40 {
    margin: -2.5rem !important;
  }
  .m-sm-n45 {
    margin: -2.8125rem !important;
  }
  .m-sm-n50 {
    margin: -3.125rem !important;
  }
  .m-sm-n60 {
    margin: -3.75rem !important;
  }
  .m-sm-n70 {
    margin: -4.375rem !important;
  }
  .m-sm-n80 {
    margin: -5rem !important;
  }
  .m-sm-n90 {
    margin: -5.625rem !important;
  }
  .m-sm-n100 {
    margin: -6.25rem !important;
  }
  .m-sm-n120 {
    margin: -7.5rem !important;
  }
  .m-sm-n140 {
    margin: -8.75rem !important;
  }
  .m-sm-n160 {
    margin: -10rem !important;
  }
  .m-sm-n180 {
    margin: -11.5rem !important;
  }
  .m-sm-n200 {
    margin: -12.5rem !important;
  }
  .m-sm-n300 {
    margin: -18.75rem !important;
  }
  .mx-sm-n5 {
    margin-right: -0.3125rem !important;
    margin-left: -0.3125rem !important;
  }
  .mx-sm-n10 {
    margin-right: -0.625rem !important;
    margin-left: -0.625rem !important;
  }
  .mx-sm-n15 {
    margin-right: -0.9375rem !important;
    margin-left: -0.9375rem !important;
  }
  .mx-sm-n20 {
    margin-right: -1.25rem !important;
    margin-left: -1.25rem !important;
  }
  .mx-sm-n25 {
    margin-right: -1.5625rem !important;
    margin-left: -1.5625rem !important;
  }
  .mx-sm-n30 {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }
  .mx-sm-n35 {
    margin-right: -2.1875rem !important;
    margin-left: -2.1875rem !important;
  }
  .mx-sm-n40 {
    margin-right: -2.5rem !important;
    margin-left: -2.5rem !important;
  }
  .mx-sm-n45 {
    margin-right: -2.8125rem !important;
    margin-left: -2.8125rem !important;
  }
  .mx-sm-n50 {
    margin-right: -3.125rem !important;
    margin-left: -3.125rem !important;
  }
  .mx-sm-n60 {
    margin-right: -3.75rem !important;
    margin-left: -3.75rem !important;
  }
  .mx-sm-n70 {
    margin-right: -4.375rem !important;
    margin-left: -4.375rem !important;
  }
  .mx-sm-n80 {
    margin-right: -5rem !important;
    margin-left: -5rem !important;
  }
  .mx-sm-n90 {
    margin-right: -5.625rem !important;
    margin-left: -5.625rem !important;
  }
  .mx-sm-n100 {
    margin-right: -6.25rem !important;
    margin-left: -6.25rem !important;
  }
  .mx-sm-n120 {
    margin-right: -7.5rem !important;
    margin-left: -7.5rem !important;
  }
  .mx-sm-n140 {
    margin-right: -8.75rem !important;
    margin-left: -8.75rem !important;
  }
  .mx-sm-n160 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }
  .mx-sm-n180 {
    margin-right: -11.5rem !important;
    margin-left: -11.5rem !important;
  }
  .mx-sm-n200 {
    margin-right: -12.5rem !important;
    margin-left: -12.5rem !important;
  }
  .mx-sm-n300 {
    margin-right: -18.75rem !important;
    margin-left: -18.75rem !important;
  }
  .my-sm-n5 {
    margin-top: -0.3125rem !important;
    margin-bottom: -0.3125rem !important;
  }
  .my-sm-n10 {
    margin-top: -0.625rem !important;
    margin-bottom: -0.625rem !important;
  }
  .my-sm-n15 {
    margin-top: -0.9375rem !important;
    margin-bottom: -0.9375rem !important;
  }
  .my-sm-n20 {
    margin-top: -1.25rem !important;
    margin-bottom: -1.25rem !important;
  }
  .my-sm-n25 {
    margin-top: -1.5625rem !important;
    margin-bottom: -1.5625rem !important;
  }
  .my-sm-n30 {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }
  .my-sm-n35 {
    margin-top: -2.1875rem !important;
    margin-bottom: -2.1875rem !important;
  }
  .my-sm-n40 {
    margin-top: -2.5rem !important;
    margin-bottom: -2.5rem !important;
  }
  .my-sm-n45 {
    margin-top: -2.8125rem !important;
    margin-bottom: -2.8125rem !important;
  }
  .my-sm-n50 {
    margin-top: -3.125rem !important;
    margin-bottom: -3.125rem !important;
  }
  .my-sm-n60 {
    margin-top: -3.75rem !important;
    margin-bottom: -3.75rem !important;
  }
  .my-sm-n70 {
    margin-top: -4.375rem !important;
    margin-bottom: -4.375rem !important;
  }
  .my-sm-n80 {
    margin-top: -5rem !important;
    margin-bottom: -5rem !important;
  }
  .my-sm-n90 {
    margin-top: -5.625rem !important;
    margin-bottom: -5.625rem !important;
  }
  .my-sm-n100 {
    margin-top: -6.25rem !important;
    margin-bottom: -6.25rem !important;
  }
  .my-sm-n120 {
    margin-top: -7.5rem !important;
    margin-bottom: -7.5rem !important;
  }
  .my-sm-n140 {
    margin-top: -8.75rem !important;
    margin-bottom: -8.75rem !important;
  }
  .my-sm-n160 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }
  .my-sm-n180 {
    margin-top: -11.5rem !important;
    margin-bottom: -11.5rem !important;
  }
  .my-sm-n200 {
    margin-top: -12.5rem !important;
    margin-bottom: -12.5rem !important;
  }
  .my-sm-n300 {
    margin-top: -18.75rem !important;
    margin-bottom: -18.75rem !important;
  }
  .mt-sm-n5 {
    margin-top: -0.3125rem !important;
  }
  .mt-sm-n10 {
    margin-top: -0.625rem !important;
  }
  .mt-sm-n15 {
    margin-top: -0.9375rem !important;
  }
  .mt-sm-n20 {
    margin-top: -1.25rem !important;
  }
  .mt-sm-n25 {
    margin-top: -1.5625rem !important;
  }
  .mt-sm-n30 {
    margin-top: -1.875rem !important;
  }
  .mt-sm-n35 {
    margin-top: -2.1875rem !important;
  }
  .mt-sm-n40 {
    margin-top: -2.5rem !important;
  }
  .mt-sm-n45 {
    margin-top: -2.8125rem !important;
  }
  .mt-sm-n50 {
    margin-top: -3.125rem !important;
  }
  .mt-sm-n60 {
    margin-top: -3.75rem !important;
  }
  .mt-sm-n70 {
    margin-top: -4.375rem !important;
  }
  .mt-sm-n80 {
    margin-top: -5rem !important;
  }
  .mt-sm-n90 {
    margin-top: -5.625rem !important;
  }
  .mt-sm-n100 {
    margin-top: -6.25rem !important;
  }
  .mt-sm-n120 {
    margin-top: -7.5rem !important;
  }
  .mt-sm-n140 {
    margin-top: -8.75rem !important;
  }
  .mt-sm-n160 {
    margin-top: -10rem !important;
  }
  .mt-sm-n180 {
    margin-top: -11.5rem !important;
  }
  .mt-sm-n200 {
    margin-top: -12.5rem !important;
  }
  .mt-sm-n300 {
    margin-top: -18.75rem !important;
  }
  .me-sm-n5 {
    margin-right: -0.3125rem !important;
  }
  .me-sm-n10 {
    margin-right: -0.625rem !important;
  }
  .me-sm-n15 {
    margin-right: -0.9375rem !important;
  }
  .me-sm-n20 {
    margin-right: -1.25rem !important;
  }
  .me-sm-n25 {
    margin-right: -1.5625rem !important;
  }
  .me-sm-n30 {
    margin-right: -1.875rem !important;
  }
  .me-sm-n35 {
    margin-right: -2.1875rem !important;
  }
  .me-sm-n40 {
    margin-right: -2.5rem !important;
  }
  .me-sm-n45 {
    margin-right: -2.8125rem !important;
  }
  .me-sm-n50 {
    margin-right: -3.125rem !important;
  }
  .me-sm-n60 {
    margin-right: -3.75rem !important;
  }
  .me-sm-n70 {
    margin-right: -4.375rem !important;
  }
  .me-sm-n80 {
    margin-right: -5rem !important;
  }
  .me-sm-n90 {
    margin-right: -5.625rem !important;
  }
  .me-sm-n100 {
    margin-right: -6.25rem !important;
  }
  .me-sm-n120 {
    margin-right: -7.5rem !important;
  }
  .me-sm-n140 {
    margin-right: -8.75rem !important;
  }
  .me-sm-n160 {
    margin-right: -10rem !important;
  }
  .me-sm-n180 {
    margin-right: -11.5rem !important;
  }
  .me-sm-n200 {
    margin-right: -12.5rem !important;
  }
  .me-sm-n300 {
    margin-right: -18.75rem !important;
  }
  .mb-sm-n5 {
    margin-bottom: -0.3125rem !important;
  }
  .mb-sm-n10 {
    margin-bottom: -0.625rem !important;
  }
  .mb-sm-n15 {
    margin-bottom: -0.9375rem !important;
  }
  .mb-sm-n20 {
    margin-bottom: -1.25rem !important;
  }
  .mb-sm-n25 {
    margin-bottom: -1.5625rem !important;
  }
  .mb-sm-n30 {
    margin-bottom: -1.875rem !important;
  }
  .mb-sm-n35 {
    margin-bottom: -2.1875rem !important;
  }
  .mb-sm-n40 {
    margin-bottom: -2.5rem !important;
  }
  .mb-sm-n45 {
    margin-bottom: -2.8125rem !important;
  }
  .mb-sm-n50 {
    margin-bottom: -3.125rem !important;
  }
  .mb-sm-n60 {
    margin-bottom: -3.75rem !important;
  }
  .mb-sm-n70 {
    margin-bottom: -4.375rem !important;
  }
  .mb-sm-n80 {
    margin-bottom: -5rem !important;
  }
  .mb-sm-n90 {
    margin-bottom: -5.625rem !important;
  }
  .mb-sm-n100 {
    margin-bottom: -6.25rem !important;
  }
  .mb-sm-n120 {
    margin-bottom: -7.5rem !important;
  }
  .mb-sm-n140 {
    margin-bottom: -8.75rem !important;
  }
  .mb-sm-n160 {
    margin-bottom: -10rem !important;
  }
  .mb-sm-n180 {
    margin-bottom: -11.5rem !important;
  }
  .mb-sm-n200 {
    margin-bottom: -12.5rem !important;
  }
  .mb-sm-n300 {
    margin-bottom: -18.75rem !important;
  }
  .ms-sm-n5 {
    margin-left: -0.3125rem !important;
  }
  .ms-sm-n10 {
    margin-left: -0.625rem !important;
  }
  .ms-sm-n15 {
    margin-left: -0.9375rem !important;
  }
  .ms-sm-n20 {
    margin-left: -1.25rem !important;
  }
  .ms-sm-n25 {
    margin-left: -1.5625rem !important;
  }
  .ms-sm-n30 {
    margin-left: -1.875rem !important;
  }
  .ms-sm-n35 {
    margin-left: -2.1875rem !important;
  }
  .ms-sm-n40 {
    margin-left: -2.5rem !important;
  }
  .ms-sm-n45 {
    margin-left: -2.8125rem !important;
  }
  .ms-sm-n50 {
    margin-left: -3.125rem !important;
  }
  .ms-sm-n60 {
    margin-left: -3.75rem !important;
  }
  .ms-sm-n70 {
    margin-left: -4.375rem !important;
  }
  .ms-sm-n80 {
    margin-left: -5rem !important;
  }
  .ms-sm-n90 {
    margin-left: -5.625rem !important;
  }
  .ms-sm-n100 {
    margin-left: -6.25rem !important;
  }
  .ms-sm-n120 {
    margin-left: -7.5rem !important;
  }
  .ms-sm-n140 {
    margin-left: -8.75rem !important;
  }
  .ms-sm-n160 {
    margin-left: -10rem !important;
  }
  .ms-sm-n180 {
    margin-left: -11.5rem !important;
  }
  .ms-sm-n200 {
    margin-left: -12.5rem !important;
  }
  .ms-sm-n300 {
    margin-left: -18.75rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .p-sm-5 {
    padding: 0.3125rem !important;
  }
  .p-sm-10 {
    padding: 0.625rem !important;
  }
  .p-sm-15 {
    padding: 0.9375rem !important;
  }
  .p-sm-20 {
    padding: 1.25rem !important;
  }
  .p-sm-25 {
    padding: 1.5625rem !important;
  }
  .p-sm-30 {
    padding: 1.875rem !important;
  }
  .p-sm-35 {
    padding: 2.1875rem !important;
  }
  .p-sm-40 {
    padding: 2.5rem !important;
  }
  .p-sm-45 {
    padding: 2.8125rem !important;
  }
  .p-sm-50 {
    padding: 3.125rem !important;
  }
  .p-sm-60 {
    padding: 3.75rem !important;
  }
  .p-sm-70 {
    padding: 4.375rem !important;
  }
  .p-sm-80 {
    padding: 5rem !important;
  }
  .p-sm-90 {
    padding: 5.625rem !important;
  }
  .p-sm-100 {
    padding: 6.25rem !important;
  }
  .p-sm-120 {
    padding: 7.5rem !important;
  }
  .p-sm-140 {
    padding: 8.75rem !important;
  }
  .p-sm-160 {
    padding: 10rem !important;
  }
  .p-sm-180 {
    padding: 11.5rem !important;
  }
  .p-sm-200 {
    padding: 12.5rem !important;
  }
  .p-sm-300 {
    padding: 18.75rem !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-sm-5 {
    padding-right: 0.3125rem !important;
    padding-left: 0.3125rem !important;
  }
  .px-sm-10 {
    padding-right: 0.625rem !important;
    padding-left: 0.625rem !important;
  }
  .px-sm-15 {
    padding-right: 0.9375rem !important;
    padding-left: 0.9375rem !important;
  }
  .px-sm-20 {
    padding-right: 1.25rem !important;
    padding-left: 1.25rem !important;
  }
  .px-sm-25 {
    padding-right: 1.5625rem !important;
    padding-left: 1.5625rem !important;
  }
  .px-sm-30 {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }
  .px-sm-35 {
    padding-right: 2.1875rem !important;
    padding-left: 2.1875rem !important;
  }
  .px-sm-40 {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
  }
  .px-sm-45 {
    padding-right: 2.8125rem !important;
    padding-left: 2.8125rem !important;
  }
  .px-sm-50 {
    padding-right: 3.125rem !important;
    padding-left: 3.125rem !important;
  }
  .px-sm-60 {
    padding-right: 3.75rem !important;
    padding-left: 3.75rem !important;
  }
  .px-sm-70 {
    padding-right: 4.375rem !important;
    padding-left: 4.375rem !important;
  }
  .px-sm-80 {
    padding-right: 5rem !important;
    padding-left: 5rem !important;
  }
  .px-sm-90 {
    padding-right: 5.625rem !important;
    padding-left: 5.625rem !important;
  }
  .px-sm-100 {
    padding-right: 6.25rem !important;
    padding-left: 6.25rem !important;
  }
  .px-sm-120 {
    padding-right: 7.5rem !important;
    padding-left: 7.5rem !important;
  }
  .px-sm-140 {
    padding-right: 8.75rem !important;
    padding-left: 8.75rem !important;
  }
  .px-sm-160 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }
  .px-sm-180 {
    padding-right: 11.5rem !important;
    padding-left: 11.5rem !important;
  }
  .px-sm-200 {
    padding-right: 12.5rem !important;
    padding-left: 12.5rem !important;
  }
  .px-sm-300 {
    padding-right: 18.75rem !important;
    padding-left: 18.75rem !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-sm-5 {
    padding-top: 0.3125rem !important;
    padding-bottom: 0.3125rem !important;
  }
  .py-sm-10 {
    padding-top: 0.625rem !important;
    padding-bottom: 0.625rem !important;
  }
  .py-sm-15 {
    padding-top: 0.9375rem !important;
    padding-bottom: 0.9375rem !important;
  }
  .py-sm-20 {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
  .py-sm-25 {
    padding-top: 1.5625rem !important;
    padding-bottom: 1.5625rem !important;
  }
  .py-sm-30 {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }
  .py-sm-35 {
    padding-top: 2.1875rem !important;
    padding-bottom: 2.1875rem !important;
  }
  .py-sm-40 {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }
  .py-sm-45 {
    padding-top: 2.8125rem !important;
    padding-bottom: 2.8125rem !important;
  }
  .py-sm-50 {
    padding-top: 3.125rem !important;
    padding-bottom: 3.125rem !important;
  }
  .py-sm-60 {
    padding-top: 3.75rem !important;
    padding-bottom: 3.75rem !important;
  }
  .py-sm-70 {
    padding-top: 4.375rem !important;
    padding-bottom: 4.375rem !important;
  }
  .py-sm-80 {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }
  .py-sm-90 {
    padding-top: 5.625rem !important;
    padding-bottom: 5.625rem !important;
  }
  .py-sm-100 {
    padding-top: 6.25rem !important;
    padding-bottom: 6.25rem !important;
  }
  .py-sm-120 {
    padding-top: 7.5rem !important;
    padding-bottom: 7.5rem !important;
  }
  .py-sm-140 {
    padding-top: 8.75rem !important;
    padding-bottom: 8.75rem !important;
  }
  .py-sm-160 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }
  .py-sm-180 {
    padding-top: 11.5rem !important;
    padding-bottom: 11.5rem !important;
  }
  .py-sm-200 {
    padding-top: 12.5rem !important;
    padding-bottom: 12.5rem !important;
  }
  .py-sm-300 {
    padding-top: 18.75rem !important;
    padding-bottom: 18.75rem !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pt-sm-5 {
    padding-top: 0.3125rem !important;
  }
  .pt-sm-10 {
    padding-top: 0.625rem !important;
  }
  .pt-sm-15 {
    padding-top: 0.9375rem !important;
  }
  .pt-sm-20 {
    padding-top: 1.25rem !important;
  }
  .pt-sm-25 {
    padding-top: 1.5625rem !important;
  }
  .pt-sm-30 {
    padding-top: 1.875rem !important;
  }
  .pt-sm-35 {
    padding-top: 2.1875rem !important;
  }
  .pt-sm-40 {
    padding-top: 2.5rem !important;
  }
  .pt-sm-45 {
    padding-top: 2.8125rem !important;
  }
  .pt-sm-50 {
    padding-top: 3.125rem !important;
  }
  .pt-sm-60 {
    padding-top: 3.75rem !important;
  }
  .pt-sm-70 {
    padding-top: 4.375rem !important;
  }
  .pt-sm-80 {
    padding-top: 5rem !important;
  }
  .pt-sm-90 {
    padding-top: 5.625rem !important;
  }
  .pt-sm-100 {
    padding-top: 6.25rem !important;
  }
  .pt-sm-120 {
    padding-top: 7.5rem !important;
  }
  .pt-sm-140 {
    padding-top: 8.75rem !important;
  }
  .pt-sm-160 {
    padding-top: 10rem !important;
  }
  .pt-sm-180 {
    padding-top: 11.5rem !important;
  }
  .pt-sm-200 {
    padding-top: 12.5rem !important;
  }
  .pt-sm-300 {
    padding-top: 18.75rem !important;
  }
  .pe-sm-0 {
    padding-right: 0 !important;
  }
  .pe-sm-5 {
    padding-right: 0.3125rem !important;
  }
  .pe-sm-10 {
    padding-right: 0.625rem !important;
  }
  .pe-sm-15 {
    padding-right: 0.9375rem !important;
  }
  .pe-sm-20 {
    padding-right: 1.25rem !important;
  }
  .pe-sm-25 {
    padding-right: 1.5625rem !important;
  }
  .pe-sm-30 {
    padding-right: 1.875rem !important;
  }
  .pe-sm-35 {
    padding-right: 2.1875rem !important;
  }
  .pe-sm-40 {
    padding-right: 2.5rem !important;
  }
  .pe-sm-45 {
    padding-right: 2.8125rem !important;
  }
  .pe-sm-50 {
    padding-right: 3.125rem !important;
  }
  .pe-sm-60 {
    padding-right: 3.75rem !important;
  }
  .pe-sm-70 {
    padding-right: 4.375rem !important;
  }
  .pe-sm-80 {
    padding-right: 5rem !important;
  }
  .pe-sm-90 {
    padding-right: 5.625rem !important;
  }
  .pe-sm-100 {
    padding-right: 6.25rem !important;
  }
  .pe-sm-120 {
    padding-right: 7.5rem !important;
  }
  .pe-sm-140 {
    padding-right: 8.75rem !important;
  }
  .pe-sm-160 {
    padding-right: 10rem !important;
  }
  .pe-sm-180 {
    padding-right: 11.5rem !important;
  }
  .pe-sm-200 {
    padding-right: 12.5rem !important;
  }
  .pe-sm-300 {
    padding-right: 18.75rem !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pb-sm-5 {
    padding-bottom: 0.3125rem !important;
  }
  .pb-sm-10 {
    padding-bottom: 0.625rem !important;
  }
  .pb-sm-15 {
    padding-bottom: 0.9375rem !important;
  }
  .pb-sm-20 {
    padding-bottom: 1.25rem !important;
  }
  .pb-sm-25 {
    padding-bottom: 1.5625rem !important;
  }
  .pb-sm-30 {
    padding-bottom: 1.875rem !important;
  }
  .pb-sm-35 {
    padding-bottom: 2.1875rem !important;
  }
  .pb-sm-40 {
    padding-bottom: 2.5rem !important;
  }
  .pb-sm-45 {
    padding-bottom: 2.8125rem !important;
  }
  .pb-sm-50 {
    padding-bottom: 3.125rem !important;
  }
  .pb-sm-60 {
    padding-bottom: 3.75rem !important;
  }
  .pb-sm-70 {
    padding-bottom: 4.375rem !important;
  }
  .pb-sm-80 {
    padding-bottom: 5rem !important;
  }
  .pb-sm-90 {
    padding-bottom: 5.625rem !important;
  }
  .pb-sm-100 {
    padding-bottom: 6.25rem !important;
  }
  .pb-sm-120 {
    padding-bottom: 7.5rem !important;
  }
  .pb-sm-140 {
    padding-bottom: 8.75rem !important;
  }
  .pb-sm-160 {
    padding-bottom: 10rem !important;
  }
  .pb-sm-180 {
    padding-bottom: 11.5rem !important;
  }
  .pb-sm-200 {
    padding-bottom: 12.5rem !important;
  }
  .pb-sm-300 {
    padding-bottom: 18.75rem !important;
  }
  .ps-sm-0 {
    padding-left: 0 !important;
  }
  .ps-sm-5 {
    padding-left: 0.3125rem !important;
  }
  .ps-sm-10 {
    padding-left: 0.625rem !important;
  }
  .ps-sm-15 {
    padding-left: 0.9375rem !important;
  }
  .ps-sm-20 {
    padding-left: 1.25rem !important;
  }
  .ps-sm-25 {
    padding-left: 1.5625rem !important;
  }
  .ps-sm-30 {
    padding-left: 1.875rem !important;
  }
  .ps-sm-35 {
    padding-left: 2.1875rem !important;
  }
  .ps-sm-40 {
    padding-left: 2.5rem !important;
  }
  .ps-sm-45 {
    padding-left: 2.8125rem !important;
  }
  .ps-sm-50 {
    padding-left: 3.125rem !important;
  }
  .ps-sm-60 {
    padding-left: 3.75rem !important;
  }
  .ps-sm-70 {
    padding-left: 4.375rem !important;
  }
  .ps-sm-80 {
    padding-left: 5rem !important;
  }
  .ps-sm-90 {
    padding-left: 5.625rem !important;
  }
  .ps-sm-100 {
    padding-left: 6.25rem !important;
  }
  .ps-sm-120 {
    padding-left: 7.5rem !important;
  }
  .ps-sm-140 {
    padding-left: 8.75rem !important;
  }
  .ps-sm-160 {
    padding-left: 10rem !important;
  }
  .ps-sm-180 {
    padding-left: 11.5rem !important;
  }
  .ps-sm-200 {
    padding-left: 12.5rem !important;
  }
  .ps-sm-300 {
    padding-left: 18.75rem !important;
  }
  .gap-sm-0 {
    gap: 0 !important;
  }
  .gap-sm-5 {
    gap: 0.3125rem !important;
  }
  .gap-sm-10 {
    gap: 0.625rem !important;
  }
  .gap-sm-15 {
    gap: 0.9375rem !important;
  }
  .gap-sm-20 {
    gap: 1.25rem !important;
  }
  .gap-sm-25 {
    gap: 1.5625rem !important;
  }
  .gap-sm-30 {
    gap: 1.875rem !important;
  }
  .gap-sm-35 {
    gap: 2.1875rem !important;
  }
  .gap-sm-40 {
    gap: 2.5rem !important;
  }
  .gap-sm-45 {
    gap: 2.8125rem !important;
  }
  .gap-sm-50 {
    gap: 3.125rem !important;
  }
  .gap-sm-60 {
    gap: 3.75rem !important;
  }
  .gap-sm-70 {
    gap: 4.375rem !important;
  }
  .gap-sm-80 {
    gap: 5rem !important;
  }
  .gap-sm-90 {
    gap: 5.625rem !important;
  }
  .gap-sm-100 {
    gap: 6.25rem !important;
  }
  .gap-sm-120 {
    gap: 7.5rem !important;
  }
  .gap-sm-140 {
    gap: 8.75rem !important;
  }
  .gap-sm-160 {
    gap: 10rem !important;
  }
  .gap-sm-180 {
    gap: 11.5rem !important;
  }
  .gap-sm-200 {
    gap: 12.5rem !important;
  }
  .gap-sm-300 {
    gap: 18.75rem !important;
  }
  .row-gap-sm-0 {
    row-gap: 0 !important;
  }
  .row-gap-sm-5 {
    row-gap: 0.3125rem !important;
  }
  .row-gap-sm-10 {
    row-gap: 0.625rem !important;
  }
  .row-gap-sm-15 {
    row-gap: 0.9375rem !important;
  }
  .row-gap-sm-20 {
    row-gap: 1.25rem !important;
  }
  .row-gap-sm-25 {
    row-gap: 1.5625rem !important;
  }
  .row-gap-sm-30 {
    row-gap: 1.875rem !important;
  }
  .row-gap-sm-35 {
    row-gap: 2.1875rem !important;
  }
  .row-gap-sm-40 {
    row-gap: 2.5rem !important;
  }
  .row-gap-sm-45 {
    row-gap: 2.8125rem !important;
  }
  .row-gap-sm-50 {
    row-gap: 3.125rem !important;
  }
  .row-gap-sm-60 {
    row-gap: 3.75rem !important;
  }
  .row-gap-sm-70 {
    row-gap: 4.375rem !important;
  }
  .row-gap-sm-80 {
    row-gap: 5rem !important;
  }
  .row-gap-sm-90 {
    row-gap: 5.625rem !important;
  }
  .row-gap-sm-100 {
    row-gap: 6.25rem !important;
  }
  .row-gap-sm-120 {
    row-gap: 7.5rem !important;
  }
  .row-gap-sm-140 {
    row-gap: 8.75rem !important;
  }
  .row-gap-sm-160 {
    row-gap: 10rem !important;
  }
  .row-gap-sm-180 {
    row-gap: 11.5rem !important;
  }
  .row-gap-sm-200 {
    row-gap: 12.5rem !important;
  }
  .row-gap-sm-300 {
    row-gap: 18.75rem !important;
  }
  .column-gap-sm-0 {
    column-gap: 0 !important;
  }
  .column-gap-sm-5 {
    column-gap: 0.3125rem !important;
  }
  .column-gap-sm-10 {
    column-gap: 0.625rem !important;
  }
  .column-gap-sm-15 {
    column-gap: 0.9375rem !important;
  }
  .column-gap-sm-20 {
    column-gap: 1.25rem !important;
  }
  .column-gap-sm-25 {
    column-gap: 1.5625rem !important;
  }
  .column-gap-sm-30 {
    column-gap: 1.875rem !important;
  }
  .column-gap-sm-35 {
    column-gap: 2.1875rem !important;
  }
  .column-gap-sm-40 {
    column-gap: 2.5rem !important;
  }
  .column-gap-sm-45 {
    column-gap: 2.8125rem !important;
  }
  .column-gap-sm-50 {
    column-gap: 3.125rem !important;
  }
  .column-gap-sm-60 {
    column-gap: 3.75rem !important;
  }
  .column-gap-sm-70 {
    column-gap: 4.375rem !important;
  }
  .column-gap-sm-80 {
    column-gap: 5rem !important;
  }
  .column-gap-sm-90 {
    column-gap: 5.625rem !important;
  }
  .column-gap-sm-100 {
    column-gap: 6.25rem !important;
  }
  .column-gap-sm-120 {
    column-gap: 7.5rem !important;
  }
  .column-gap-sm-140 {
    column-gap: 8.75rem !important;
  }
  .column-gap-sm-160 {
    column-gap: 10rem !important;
  }
  .column-gap-sm-180 {
    column-gap: 11.5rem !important;
  }
  .column-gap-sm-200 {
    column-gap: 12.5rem !important;
  }
  .column-gap-sm-300 {
    column-gap: 18.75rem !important;
  }
  .fs-sm-1 {
    font-size: calc(1.6rem + 4.2vw) !important;
  }
  .fs-sm-2 {
    font-size: calc(1.5rem + 3vw) !important;
  }
  .fs-sm-3 {
    font-size: calc(1.4375rem + 2.25vw) !important;
  }
  .fs-sm-4 {
    font-size: calc(1.3875rem + 1.65vw) !important;
  }
  .fs-sm-5 {
    font-size: calc(1.35rem + 1.2vw) !important;
  }
  .fs-sm-6 {
    font-size: calc(1.3125rem + 0.75vw) !important;
  }
  .fs-sm-base {
    font-size: 1rem !important;
  }
  .fs-sm-xxs {
    font-size: 0.625rem !important;
  }
  .fs-sm-xs {
    font-size: 0.75rem !important;
  }
  .fs-sm-sm {
    font-size: 0.875rem !important;
  }
  .fs-sm-md {
    font-size: 1.125rem !important;
  }
  .fs-sm-lg {
    font-size: 1.25rem !important;
  }
  .fs-sm-xl {
    font-size: calc(1.2625rem + 0.15vw) !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
  .text-sm-end {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }
  .float-md-end {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
  .object-fit-md-contain {
    object-fit: contain !important;
  }
  .object-fit-md-cover {
    object-fit: cover !important;
  }
  .object-fit-md-fill {
    object-fit: fill !important;
  }
  .object-fit-md-scale {
    object-fit: scale-down !important;
  }
  .object-fit-md-none {
    object-fit: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-grid {
    display: grid !important;
  }
  .d-md-inline-grid {
    display: inline-grid !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .d-md-none {
    display: none !important;
  }
  .w-md-25 {
    width: 25% !important;
  }
  .w-md-50 {
    width: 50% !important;
  }
  .w-md-75 {
    width: 75% !important;
  }
  .w-md-100 {
    width: 100% !important;
  }
  .w-md-auto {
    width: auto !important;
  }
  .w-md-10 {
    width: 10% !important;
  }
  .w-md-20 {
    width: 20% !important;
  }
  .w-md-30 {
    width: 30% !important;
  }
  .w-md-40 {
    width: 40% !important;
  }
  .w-md-60 {
    width: 60% !important;
  }
  .w-md-70 {
    width: 70% !important;
  }
  .w-md-80 {
    width: 80% !important;
  }
  .w-md-90 {
    width: 90% !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-last {
    order: 6 !important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .m-md-5 {
    margin: 0.3125rem !important;
  }
  .m-md-10 {
    margin: 0.625rem !important;
  }
  .m-md-15 {
    margin: 0.9375rem !important;
  }
  .m-md-20 {
    margin: 1.25rem !important;
  }
  .m-md-25 {
    margin: 1.5625rem !important;
  }
  .m-md-30 {
    margin: 1.875rem !important;
  }
  .m-md-35 {
    margin: 2.1875rem !important;
  }
  .m-md-40 {
    margin: 2.5rem !important;
  }
  .m-md-45 {
    margin: 2.8125rem !important;
  }
  .m-md-50 {
    margin: 3.125rem !important;
  }
  .m-md-60 {
    margin: 3.75rem !important;
  }
  .m-md-70 {
    margin: 4.375rem !important;
  }
  .m-md-80 {
    margin: 5rem !important;
  }
  .m-md-90 {
    margin: 5.625rem !important;
  }
  .m-md-100 {
    margin: 6.25rem !important;
  }
  .m-md-120 {
    margin: 7.5rem !important;
  }
  .m-md-140 {
    margin: 8.75rem !important;
  }
  .m-md-160 {
    margin: 10rem !important;
  }
  .m-md-180 {
    margin: 11.5rem !important;
  }
  .m-md-200 {
    margin: 12.5rem !important;
  }
  .m-md-300 {
    margin: 18.75rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-md-5 {
    margin-right: 0.3125rem !important;
    margin-left: 0.3125rem !important;
  }
  .mx-md-10 {
    margin-right: 0.625rem !important;
    margin-left: 0.625rem !important;
  }
  .mx-md-15 {
    margin-right: 0.9375rem !important;
    margin-left: 0.9375rem !important;
  }
  .mx-md-20 {
    margin-right: 1.25rem !important;
    margin-left: 1.25rem !important;
  }
  .mx-md-25 {
    margin-right: 1.5625rem !important;
    margin-left: 1.5625rem !important;
  }
  .mx-md-30 {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }
  .mx-md-35 {
    margin-right: 2.1875rem !important;
    margin-left: 2.1875rem !important;
  }
  .mx-md-40 {
    margin-right: 2.5rem !important;
    margin-left: 2.5rem !important;
  }
  .mx-md-45 {
    margin-right: 2.8125rem !important;
    margin-left: 2.8125rem !important;
  }
  .mx-md-50 {
    margin-right: 3.125rem !important;
    margin-left: 3.125rem !important;
  }
  .mx-md-60 {
    margin-right: 3.75rem !important;
    margin-left: 3.75rem !important;
  }
  .mx-md-70 {
    margin-right: 4.375rem !important;
    margin-left: 4.375rem !important;
  }
  .mx-md-80 {
    margin-right: 5rem !important;
    margin-left: 5rem !important;
  }
  .mx-md-90 {
    margin-right: 5.625rem !important;
    margin-left: 5.625rem !important;
  }
  .mx-md-100 {
    margin-right: 6.25rem !important;
    margin-left: 6.25rem !important;
  }
  .mx-md-120 {
    margin-right: 7.5rem !important;
    margin-left: 7.5rem !important;
  }
  .mx-md-140 {
    margin-right: 8.75rem !important;
    margin-left: 8.75rem !important;
  }
  .mx-md-160 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }
  .mx-md-180 {
    margin-right: 11.5rem !important;
    margin-left: 11.5rem !important;
  }
  .mx-md-200 {
    margin-right: 12.5rem !important;
    margin-left: 12.5rem !important;
  }
  .mx-md-300 {
    margin-right: 18.75rem !important;
    margin-left: 18.75rem !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-md-5 {
    margin-top: 0.3125rem !important;
    margin-bottom: 0.3125rem !important;
  }
  .my-md-10 {
    margin-top: 0.625rem !important;
    margin-bottom: 0.625rem !important;
  }
  .my-md-15 {
    margin-top: 0.9375rem !important;
    margin-bottom: 0.9375rem !important;
  }
  .my-md-20 {
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
  }
  .my-md-25 {
    margin-top: 1.5625rem !important;
    margin-bottom: 1.5625rem !important;
  }
  .my-md-30 {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }
  .my-md-35 {
    margin-top: 2.1875rem !important;
    margin-bottom: 2.1875rem !important;
  }
  .my-md-40 {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }
  .my-md-45 {
    margin-top: 2.8125rem !important;
    margin-bottom: 2.8125rem !important;
  }
  .my-md-50 {
    margin-top: 3.125rem !important;
    margin-bottom: 3.125rem !important;
  }
  .my-md-60 {
    margin-top: 3.75rem !important;
    margin-bottom: 3.75rem !important;
  }
  .my-md-70 {
    margin-top: 4.375rem !important;
    margin-bottom: 4.375rem !important;
  }
  .my-md-80 {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
  }
  .my-md-90 {
    margin-top: 5.625rem !important;
    margin-bottom: 5.625rem !important;
  }
  .my-md-100 {
    margin-top: 6.25rem !important;
    margin-bottom: 6.25rem !important;
  }
  .my-md-120 {
    margin-top: 7.5rem !important;
    margin-bottom: 7.5rem !important;
  }
  .my-md-140 {
    margin-top: 8.75rem !important;
    margin-bottom: 8.75rem !important;
  }
  .my-md-160 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }
  .my-md-180 {
    margin-top: 11.5rem !important;
    margin-bottom: 11.5rem !important;
  }
  .my-md-200 {
    margin-top: 12.5rem !important;
    margin-bottom: 12.5rem !important;
  }
  .my-md-300 {
    margin-top: 18.75rem !important;
    margin-bottom: 18.75rem !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mt-md-5 {
    margin-top: 0.3125rem !important;
  }
  .mt-md-10 {
    margin-top: 0.625rem !important;
  }
  .mt-md-15 {
    margin-top: 0.9375rem !important;
  }
  .mt-md-20 {
    margin-top: 1.25rem !important;
  }
  .mt-md-25 {
    margin-top: 1.5625rem !important;
  }
  .mt-md-30 {
    margin-top: 1.875rem !important;
  }
  .mt-md-35 {
    margin-top: 2.1875rem !important;
  }
  .mt-md-40 {
    margin-top: 2.5rem !important;
  }
  .mt-md-45 {
    margin-top: 2.8125rem !important;
  }
  .mt-md-50 {
    margin-top: 3.125rem !important;
  }
  .mt-md-60 {
    margin-top: 3.75rem !important;
  }
  .mt-md-70 {
    margin-top: 4.375rem !important;
  }
  .mt-md-80 {
    margin-top: 5rem !important;
  }
  .mt-md-90 {
    margin-top: 5.625rem !important;
  }
  .mt-md-100 {
    margin-top: 6.25rem !important;
  }
  .mt-md-120 {
    margin-top: 7.5rem !important;
  }
  .mt-md-140 {
    margin-top: 8.75rem !important;
  }
  .mt-md-160 {
    margin-top: 10rem !important;
  }
  .mt-md-180 {
    margin-top: 11.5rem !important;
  }
  .mt-md-200 {
    margin-top: 12.5rem !important;
  }
  .mt-md-300 {
    margin-top: 18.75rem !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .me-md-0 {
    margin-right: 0 !important;
  }
  .me-md-5 {
    margin-right: 0.3125rem !important;
  }
  .me-md-10 {
    margin-right: 0.625rem !important;
  }
  .me-md-15 {
    margin-right: 0.9375rem !important;
  }
  .me-md-20 {
    margin-right: 1.25rem !important;
  }
  .me-md-25 {
    margin-right: 1.5625rem !important;
  }
  .me-md-30 {
    margin-right: 1.875rem !important;
  }
  .me-md-35 {
    margin-right: 2.1875rem !important;
  }
  .me-md-40 {
    margin-right: 2.5rem !important;
  }
  .me-md-45 {
    margin-right: 2.8125rem !important;
  }
  .me-md-50 {
    margin-right: 3.125rem !important;
  }
  .me-md-60 {
    margin-right: 3.75rem !important;
  }
  .me-md-70 {
    margin-right: 4.375rem !important;
  }
  .me-md-80 {
    margin-right: 5rem !important;
  }
  .me-md-90 {
    margin-right: 5.625rem !important;
  }
  .me-md-100 {
    margin-right: 6.25rem !important;
  }
  .me-md-120 {
    margin-right: 7.5rem !important;
  }
  .me-md-140 {
    margin-right: 8.75rem !important;
  }
  .me-md-160 {
    margin-right: 10rem !important;
  }
  .me-md-180 {
    margin-right: 11.5rem !important;
  }
  .me-md-200 {
    margin-right: 12.5rem !important;
  }
  .me-md-300 {
    margin-right: 18.75rem !important;
  }
  .me-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .mb-md-5 {
    margin-bottom: 0.3125rem !important;
  }
  .mb-md-10 {
    margin-bottom: 0.625rem !important;
  }
  .mb-md-15 {
    margin-bottom: 0.9375rem !important;
  }
  .mb-md-20 {
    margin-bottom: 1.25rem !important;
  }
  .mb-md-25 {
    margin-bottom: 1.5625rem !important;
  }
  .mb-md-30 {
    margin-bottom: 1.875rem !important;
  }
  .mb-md-35 {
    margin-bottom: 2.1875rem !important;
  }
  .mb-md-40 {
    margin-bottom: 2.5rem !important;
  }
  .mb-md-45 {
    margin-bottom: 2.8125rem !important;
  }
  .mb-md-50 {
    margin-bottom: 3.125rem !important;
  }
  .mb-md-60 {
    margin-bottom: 3.75rem !important;
  }
  .mb-md-70 {
    margin-bottom: 4.375rem !important;
  }
  .mb-md-80 {
    margin-bottom: 5rem !important;
  }
  .mb-md-90 {
    margin-bottom: 5.625rem !important;
  }
  .mb-md-100 {
    margin-bottom: 6.25rem !important;
  }
  .mb-md-120 {
    margin-bottom: 7.5rem !important;
  }
  .mb-md-140 {
    margin-bottom: 8.75rem !important;
  }
  .mb-md-160 {
    margin-bottom: 10rem !important;
  }
  .mb-md-180 {
    margin-bottom: 11.5rem !important;
  }
  .mb-md-200 {
    margin-bottom: 12.5rem !important;
  }
  .mb-md-300 {
    margin-bottom: 18.75rem !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ms-md-0 {
    margin-left: 0 !important;
  }
  .ms-md-5 {
    margin-left: 0.3125rem !important;
  }
  .ms-md-10 {
    margin-left: 0.625rem !important;
  }
  .ms-md-15 {
    margin-left: 0.9375rem !important;
  }
  .ms-md-20 {
    margin-left: 1.25rem !important;
  }
  .ms-md-25 {
    margin-left: 1.5625rem !important;
  }
  .ms-md-30 {
    margin-left: 1.875rem !important;
  }
  .ms-md-35 {
    margin-left: 2.1875rem !important;
  }
  .ms-md-40 {
    margin-left: 2.5rem !important;
  }
  .ms-md-45 {
    margin-left: 2.8125rem !important;
  }
  .ms-md-50 {
    margin-left: 3.125rem !important;
  }
  .ms-md-60 {
    margin-left: 3.75rem !important;
  }
  .ms-md-70 {
    margin-left: 4.375rem !important;
  }
  .ms-md-80 {
    margin-left: 5rem !important;
  }
  .ms-md-90 {
    margin-left: 5.625rem !important;
  }
  .ms-md-100 {
    margin-left: 6.25rem !important;
  }
  .ms-md-120 {
    margin-left: 7.5rem !important;
  }
  .ms-md-140 {
    margin-left: 8.75rem !important;
  }
  .ms-md-160 {
    margin-left: 10rem !important;
  }
  .ms-md-180 {
    margin-left: 11.5rem !important;
  }
  .ms-md-200 {
    margin-left: 12.5rem !important;
  }
  .ms-md-300 {
    margin-left: 18.75rem !important;
  }
  .ms-md-auto {
    margin-left: auto !important;
  }
  .m-md-n5 {
    margin: -0.3125rem !important;
  }
  .m-md-n10 {
    margin: -0.625rem !important;
  }
  .m-md-n15 {
    margin: -0.9375rem !important;
  }
  .m-md-n20 {
    margin: -1.25rem !important;
  }
  .m-md-n25 {
    margin: -1.5625rem !important;
  }
  .m-md-n30 {
    margin: -1.875rem !important;
  }
  .m-md-n35 {
    margin: -2.1875rem !important;
  }
  .m-md-n40 {
    margin: -2.5rem !important;
  }
  .m-md-n45 {
    margin: -2.8125rem !important;
  }
  .m-md-n50 {
    margin: -3.125rem !important;
  }
  .m-md-n60 {
    margin: -3.75rem !important;
  }
  .m-md-n70 {
    margin: -4.375rem !important;
  }
  .m-md-n80 {
    margin: -5rem !important;
  }
  .m-md-n90 {
    margin: -5.625rem !important;
  }
  .m-md-n100 {
    margin: -6.25rem !important;
  }
  .m-md-n120 {
    margin: -7.5rem !important;
  }
  .m-md-n140 {
    margin: -8.75rem !important;
  }
  .m-md-n160 {
    margin: -10rem !important;
  }
  .m-md-n180 {
    margin: -11.5rem !important;
  }
  .m-md-n200 {
    margin: -12.5rem !important;
  }
  .m-md-n300 {
    margin: -18.75rem !important;
  }
  .mx-md-n5 {
    margin-right: -0.3125rem !important;
    margin-left: -0.3125rem !important;
  }
  .mx-md-n10 {
    margin-right: -0.625rem !important;
    margin-left: -0.625rem !important;
  }
  .mx-md-n15 {
    margin-right: -0.9375rem !important;
    margin-left: -0.9375rem !important;
  }
  .mx-md-n20 {
    margin-right: -1.25rem !important;
    margin-left: -1.25rem !important;
  }
  .mx-md-n25 {
    margin-right: -1.5625rem !important;
    margin-left: -1.5625rem !important;
  }
  .mx-md-n30 {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }
  .mx-md-n35 {
    margin-right: -2.1875rem !important;
    margin-left: -2.1875rem !important;
  }
  .mx-md-n40 {
    margin-right: -2.5rem !important;
    margin-left: -2.5rem !important;
  }
  .mx-md-n45 {
    margin-right: -2.8125rem !important;
    margin-left: -2.8125rem !important;
  }
  .mx-md-n50 {
    margin-right: -3.125rem !important;
    margin-left: -3.125rem !important;
  }
  .mx-md-n60 {
    margin-right: -3.75rem !important;
    margin-left: -3.75rem !important;
  }
  .mx-md-n70 {
    margin-right: -4.375rem !important;
    margin-left: -4.375rem !important;
  }
  .mx-md-n80 {
    margin-right: -5rem !important;
    margin-left: -5rem !important;
  }
  .mx-md-n90 {
    margin-right: -5.625rem !important;
    margin-left: -5.625rem !important;
  }
  .mx-md-n100 {
    margin-right: -6.25rem !important;
    margin-left: -6.25rem !important;
  }
  .mx-md-n120 {
    margin-right: -7.5rem !important;
    margin-left: -7.5rem !important;
  }
  .mx-md-n140 {
    margin-right: -8.75rem !important;
    margin-left: -8.75rem !important;
  }
  .mx-md-n160 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }
  .mx-md-n180 {
    margin-right: -11.5rem !important;
    margin-left: -11.5rem !important;
  }
  .mx-md-n200 {
    margin-right: -12.5rem !important;
    margin-left: -12.5rem !important;
  }
  .mx-md-n300 {
    margin-right: -18.75rem !important;
    margin-left: -18.75rem !important;
  }
  .my-md-n5 {
    margin-top: -0.3125rem !important;
    margin-bottom: -0.3125rem !important;
  }
  .my-md-n10 {
    margin-top: -0.625rem !important;
    margin-bottom: -0.625rem !important;
  }
  .my-md-n15 {
    margin-top: -0.9375rem !important;
    margin-bottom: -0.9375rem !important;
  }
  .my-md-n20 {
    margin-top: -1.25rem !important;
    margin-bottom: -1.25rem !important;
  }
  .my-md-n25 {
    margin-top: -1.5625rem !important;
    margin-bottom: -1.5625rem !important;
  }
  .my-md-n30 {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }
  .my-md-n35 {
    margin-top: -2.1875rem !important;
    margin-bottom: -2.1875rem !important;
  }
  .my-md-n40 {
    margin-top: -2.5rem !important;
    margin-bottom: -2.5rem !important;
  }
  .my-md-n45 {
    margin-top: -2.8125rem !important;
    margin-bottom: -2.8125rem !important;
  }
  .my-md-n50 {
    margin-top: -3.125rem !important;
    margin-bottom: -3.125rem !important;
  }
  .my-md-n60 {
    margin-top: -3.75rem !important;
    margin-bottom: -3.75rem !important;
  }
  .my-md-n70 {
    margin-top: -4.375rem !important;
    margin-bottom: -4.375rem !important;
  }
  .my-md-n80 {
    margin-top: -5rem !important;
    margin-bottom: -5rem !important;
  }
  .my-md-n90 {
    margin-top: -5.625rem !important;
    margin-bottom: -5.625rem !important;
  }
  .my-md-n100 {
    margin-top: -6.25rem !important;
    margin-bottom: -6.25rem !important;
  }
  .my-md-n120 {
    margin-top: -7.5rem !important;
    margin-bottom: -7.5rem !important;
  }
  .my-md-n140 {
    margin-top: -8.75rem !important;
    margin-bottom: -8.75rem !important;
  }
  .my-md-n160 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }
  .my-md-n180 {
    margin-top: -11.5rem !important;
    margin-bottom: -11.5rem !important;
  }
  .my-md-n200 {
    margin-top: -12.5rem !important;
    margin-bottom: -12.5rem !important;
  }
  .my-md-n300 {
    margin-top: -18.75rem !important;
    margin-bottom: -18.75rem !important;
  }
  .mt-md-n5 {
    margin-top: -0.3125rem !important;
  }
  .mt-md-n10 {
    margin-top: -0.625rem !important;
  }
  .mt-md-n15 {
    margin-top: -0.9375rem !important;
  }
  .mt-md-n20 {
    margin-top: -1.25rem !important;
  }
  .mt-md-n25 {
    margin-top: -1.5625rem !important;
  }
  .mt-md-n30 {
    margin-top: -1.875rem !important;
  }
  .mt-md-n35 {
    margin-top: -2.1875rem !important;
  }
  .mt-md-n40 {
    margin-top: -2.5rem !important;
  }
  .mt-md-n45 {
    margin-top: -2.8125rem !important;
  }
  .mt-md-n50 {
    margin-top: -3.125rem !important;
  }
  .mt-md-n60 {
    margin-top: -3.75rem !important;
  }
  .mt-md-n70 {
    margin-top: -4.375rem !important;
  }
  .mt-md-n80 {
    margin-top: -5rem !important;
  }
  .mt-md-n90 {
    margin-top: -5.625rem !important;
  }
  .mt-md-n100 {
    margin-top: -6.25rem !important;
  }
  .mt-md-n120 {
    margin-top: -7.5rem !important;
  }
  .mt-md-n140 {
    margin-top: -8.75rem !important;
  }
  .mt-md-n160 {
    margin-top: -10rem !important;
  }
  .mt-md-n180 {
    margin-top: -11.5rem !important;
  }
  .mt-md-n200 {
    margin-top: -12.5rem !important;
  }
  .mt-md-n300 {
    margin-top: -18.75rem !important;
  }
  .me-md-n5 {
    margin-right: -0.3125rem !important;
  }
  .me-md-n10 {
    margin-right: -0.625rem !important;
  }
  .me-md-n15 {
    margin-right: -0.9375rem !important;
  }
  .me-md-n20 {
    margin-right: -1.25rem !important;
  }
  .me-md-n25 {
    margin-right: -1.5625rem !important;
  }
  .me-md-n30 {
    margin-right: -1.875rem !important;
  }
  .me-md-n35 {
    margin-right: -2.1875rem !important;
  }
  .me-md-n40 {
    margin-right: -2.5rem !important;
  }
  .me-md-n45 {
    margin-right: -2.8125rem !important;
  }
  .me-md-n50 {
    margin-right: -3.125rem !important;
  }
  .me-md-n60 {
    margin-right: -3.75rem !important;
  }
  .me-md-n70 {
    margin-right: -4.375rem !important;
  }
  .me-md-n80 {
    margin-right: -5rem !important;
  }
  .me-md-n90 {
    margin-right: -5.625rem !important;
  }
  .me-md-n100 {
    margin-right: -6.25rem !important;
  }
  .me-md-n120 {
    margin-right: -7.5rem !important;
  }
  .me-md-n140 {
    margin-right: -8.75rem !important;
  }
  .me-md-n160 {
    margin-right: -10rem !important;
  }
  .me-md-n180 {
    margin-right: -11.5rem !important;
  }
  .me-md-n200 {
    margin-right: -12.5rem !important;
  }
  .me-md-n300 {
    margin-right: -18.75rem !important;
  }
  .mb-md-n5 {
    margin-bottom: -0.3125rem !important;
  }
  .mb-md-n10 {
    margin-bottom: -0.625rem !important;
  }
  .mb-md-n15 {
    margin-bottom: -0.9375rem !important;
  }
  .mb-md-n20 {
    margin-bottom: -1.25rem !important;
  }
  .mb-md-n25 {
    margin-bottom: -1.5625rem !important;
  }
  .mb-md-n30 {
    margin-bottom: -1.875rem !important;
  }
  .mb-md-n35 {
    margin-bottom: -2.1875rem !important;
  }
  .mb-md-n40 {
    margin-bottom: -2.5rem !important;
  }
  .mb-md-n45 {
    margin-bottom: -2.8125rem !important;
  }
  .mb-md-n50 {
    margin-bottom: -3.125rem !important;
  }
  .mb-md-n60 {
    margin-bottom: -3.75rem !important;
  }
  .mb-md-n70 {
    margin-bottom: -4.375rem !important;
  }
  .mb-md-n80 {
    margin-bottom: -5rem !important;
  }
  .mb-md-n90 {
    margin-bottom: -5.625rem !important;
  }
  .mb-md-n100 {
    margin-bottom: -6.25rem !important;
  }
  .mb-md-n120 {
    margin-bottom: -7.5rem !important;
  }
  .mb-md-n140 {
    margin-bottom: -8.75rem !important;
  }
  .mb-md-n160 {
    margin-bottom: -10rem !important;
  }
  .mb-md-n180 {
    margin-bottom: -11.5rem !important;
  }
  .mb-md-n200 {
    margin-bottom: -12.5rem !important;
  }
  .mb-md-n300 {
    margin-bottom: -18.75rem !important;
  }
  .ms-md-n5 {
    margin-left: -0.3125rem !important;
  }
  .ms-md-n10 {
    margin-left: -0.625rem !important;
  }
  .ms-md-n15 {
    margin-left: -0.9375rem !important;
  }
  .ms-md-n20 {
    margin-left: -1.25rem !important;
  }
  .ms-md-n25 {
    margin-left: -1.5625rem !important;
  }
  .ms-md-n30 {
    margin-left: -1.875rem !important;
  }
  .ms-md-n35 {
    margin-left: -2.1875rem !important;
  }
  .ms-md-n40 {
    margin-left: -2.5rem !important;
  }
  .ms-md-n45 {
    margin-left: -2.8125rem !important;
  }
  .ms-md-n50 {
    margin-left: -3.125rem !important;
  }
  .ms-md-n60 {
    margin-left: -3.75rem !important;
  }
  .ms-md-n70 {
    margin-left: -4.375rem !important;
  }
  .ms-md-n80 {
    margin-left: -5rem !important;
  }
  .ms-md-n90 {
    margin-left: -5.625rem !important;
  }
  .ms-md-n100 {
    margin-left: -6.25rem !important;
  }
  .ms-md-n120 {
    margin-left: -7.5rem !important;
  }
  .ms-md-n140 {
    margin-left: -8.75rem !important;
  }
  .ms-md-n160 {
    margin-left: -10rem !important;
  }
  .ms-md-n180 {
    margin-left: -11.5rem !important;
  }
  .ms-md-n200 {
    margin-left: -12.5rem !important;
  }
  .ms-md-n300 {
    margin-left: -18.75rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .p-md-5 {
    padding: 0.3125rem !important;
  }
  .p-md-10 {
    padding: 0.625rem !important;
  }
  .p-md-15 {
    padding: 0.9375rem !important;
  }
  .p-md-20 {
    padding: 1.25rem !important;
  }
  .p-md-25 {
    padding: 1.5625rem !important;
  }
  .p-md-30 {
    padding: 1.875rem !important;
  }
  .p-md-35 {
    padding: 2.1875rem !important;
  }
  .p-md-40 {
    padding: 2.5rem !important;
  }
  .p-md-45 {
    padding: 2.8125rem !important;
  }
  .p-md-50 {
    padding: 3.125rem !important;
  }
  .p-md-60 {
    padding: 3.75rem !important;
  }
  .p-md-70 {
    padding: 4.375rem !important;
  }
  .p-md-80 {
    padding: 5rem !important;
  }
  .p-md-90 {
    padding: 5.625rem !important;
  }
  .p-md-100 {
    padding: 6.25rem !important;
  }
  .p-md-120 {
    padding: 7.5rem !important;
  }
  .p-md-140 {
    padding: 8.75rem !important;
  }
  .p-md-160 {
    padding: 10rem !important;
  }
  .p-md-180 {
    padding: 11.5rem !important;
  }
  .p-md-200 {
    padding: 12.5rem !important;
  }
  .p-md-300 {
    padding: 18.75rem !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-md-5 {
    padding-right: 0.3125rem !important;
    padding-left: 0.3125rem !important;
  }
  .px-md-10 {
    padding-right: 0.625rem !important;
    padding-left: 0.625rem !important;
  }
  .px-md-15 {
    padding-right: 0.9375rem !important;
    padding-left: 0.9375rem !important;
  }
  .px-md-20 {
    padding-right: 1.25rem !important;
    padding-left: 1.25rem !important;
  }
  .px-md-25 {
    padding-right: 1.5625rem !important;
    padding-left: 1.5625rem !important;
  }
  .px-md-30 {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }
  .px-md-35 {
    padding-right: 2.1875rem !important;
    padding-left: 2.1875rem !important;
  }
  .px-md-40 {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
  }
  .px-md-45 {
    padding-right: 2.8125rem !important;
    padding-left: 2.8125rem !important;
  }
  .px-md-50 {
    padding-right: 3.125rem !important;
    padding-left: 3.125rem !important;
  }
  .px-md-60 {
    padding-right: 3.75rem !important;
    padding-left: 3.75rem !important;
  }
  .px-md-70 {
    padding-right: 4.375rem !important;
    padding-left: 4.375rem !important;
  }
  .px-md-80 {
    padding-right: 5rem !important;
    padding-left: 5rem !important;
  }
  .px-md-90 {
    padding-right: 5.625rem !important;
    padding-left: 5.625rem !important;
  }
  .px-md-100 {
    padding-right: 6.25rem !important;
    padding-left: 6.25rem !important;
  }
  .px-md-120 {
    padding-right: 7.5rem !important;
    padding-left: 7.5rem !important;
  }
  .px-md-140 {
    padding-right: 8.75rem !important;
    padding-left: 8.75rem !important;
  }
  .px-md-160 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }
  .px-md-180 {
    padding-right: 11.5rem !important;
    padding-left: 11.5rem !important;
  }
  .px-md-200 {
    padding-right: 12.5rem !important;
    padding-left: 12.5rem !important;
  }
  .px-md-300 {
    padding-right: 18.75rem !important;
    padding-left: 18.75rem !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-md-5 {
    padding-top: 0.3125rem !important;
    padding-bottom: 0.3125rem !important;
  }
  .py-md-10 {
    padding-top: 0.625rem !important;
    padding-bottom: 0.625rem !important;
  }
  .py-md-15 {
    padding-top: 0.9375rem !important;
    padding-bottom: 0.9375rem !important;
  }
  .py-md-20 {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
  .py-md-25 {
    padding-top: 1.5625rem !important;
    padding-bottom: 1.5625rem !important;
  }
  .py-md-30 {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }
  .py-md-35 {
    padding-top: 2.1875rem !important;
    padding-bottom: 2.1875rem !important;
  }
  .py-md-40 {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }
  .py-md-45 {
    padding-top: 2.8125rem !important;
    padding-bottom: 2.8125rem !important;
  }
  .py-md-50 {
    padding-top: 3.125rem !important;
    padding-bottom: 3.125rem !important;
  }
  .py-md-60 {
    padding-top: 3.75rem !important;
    padding-bottom: 3.75rem !important;
  }
  .py-md-70 {
    padding-top: 4.375rem !important;
    padding-bottom: 4.375rem !important;
  }
  .py-md-80 {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }
  .py-md-90 {
    padding-top: 5.625rem !important;
    padding-bottom: 5.625rem !important;
  }
  .py-md-100 {
    padding-top: 6.25rem !important;
    padding-bottom: 6.25rem !important;
  }
  .py-md-120 {
    padding-top: 7.5rem !important;
    padding-bottom: 7.5rem !important;
  }
  .py-md-140 {
    padding-top: 8.75rem !important;
    padding-bottom: 8.75rem !important;
  }
  .py-md-160 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }
  .py-md-180 {
    padding-top: 11.5rem !important;
    padding-bottom: 11.5rem !important;
  }
  .py-md-200 {
    padding-top: 12.5rem !important;
    padding-bottom: 12.5rem !important;
  }
  .py-md-300 {
    padding-top: 18.75rem !important;
    padding-bottom: 18.75rem !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-5 {
    padding-top: 0.3125rem !important;
  }
  .pt-md-10 {
    padding-top: 0.625rem !important;
  }
  .pt-md-15 {
    padding-top: 0.9375rem !important;
  }
  .pt-md-20 {
    padding-top: 1.25rem !important;
  }
  .pt-md-25 {
    padding-top: 1.5625rem !important;
  }
  .pt-md-30 {
    padding-top: 1.875rem !important;
  }
  .pt-md-35 {
    padding-top: 2.1875rem !important;
  }
  .pt-md-40 {
    padding-top: 2.5rem !important;
  }
  .pt-md-45 {
    padding-top: 2.8125rem !important;
  }
  .pt-md-50 {
    padding-top: 3.125rem !important;
  }
  .pt-md-60 {
    padding-top: 3.75rem !important;
  }
  .pt-md-70 {
    padding-top: 4.375rem !important;
  }
  .pt-md-80 {
    padding-top: 5rem !important;
  }
  .pt-md-90 {
    padding-top: 5.625rem !important;
  }
  .pt-md-100 {
    padding-top: 6.25rem !important;
  }
  .pt-md-120 {
    padding-top: 7.5rem !important;
  }
  .pt-md-140 {
    padding-top: 8.75rem !important;
  }
  .pt-md-160 {
    padding-top: 10rem !important;
  }
  .pt-md-180 {
    padding-top: 11.5rem !important;
  }
  .pt-md-200 {
    padding-top: 12.5rem !important;
  }
  .pt-md-300 {
    padding-top: 18.75rem !important;
  }
  .pe-md-0 {
    padding-right: 0 !important;
  }
  .pe-md-5 {
    padding-right: 0.3125rem !important;
  }
  .pe-md-10 {
    padding-right: 0.625rem !important;
  }
  .pe-md-15 {
    padding-right: 0.9375rem !important;
  }
  .pe-md-20 {
    padding-right: 1.25rem !important;
  }
  .pe-md-25 {
    padding-right: 1.5625rem !important;
  }
  .pe-md-30 {
    padding-right: 1.875rem !important;
  }
  .pe-md-35 {
    padding-right: 2.1875rem !important;
  }
  .pe-md-40 {
    padding-right: 2.5rem !important;
  }
  .pe-md-45 {
    padding-right: 2.8125rem !important;
  }
  .pe-md-50 {
    padding-right: 3.125rem !important;
  }
  .pe-md-60 {
    padding-right: 3.75rem !important;
  }
  .pe-md-70 {
    padding-right: 4.375rem !important;
  }
  .pe-md-80 {
    padding-right: 5rem !important;
  }
  .pe-md-90 {
    padding-right: 5.625rem !important;
  }
  .pe-md-100 {
    padding-right: 6.25rem !important;
  }
  .pe-md-120 {
    padding-right: 7.5rem !important;
  }
  .pe-md-140 {
    padding-right: 8.75rem !important;
  }
  .pe-md-160 {
    padding-right: 10rem !important;
  }
  .pe-md-180 {
    padding-right: 11.5rem !important;
  }
  .pe-md-200 {
    padding-right: 12.5rem !important;
  }
  .pe-md-300 {
    padding-right: 18.75rem !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pb-md-5 {
    padding-bottom: 0.3125rem !important;
  }
  .pb-md-10 {
    padding-bottom: 0.625rem !important;
  }
  .pb-md-15 {
    padding-bottom: 0.9375rem !important;
  }
  .pb-md-20 {
    padding-bottom: 1.25rem !important;
  }
  .pb-md-25 {
    padding-bottom: 1.5625rem !important;
  }
  .pb-md-30 {
    padding-bottom: 1.875rem !important;
  }
  .pb-md-35 {
    padding-bottom: 2.1875rem !important;
  }
  .pb-md-40 {
    padding-bottom: 2.5rem !important;
  }
  .pb-md-45 {
    padding-bottom: 2.8125rem !important;
  }
  .pb-md-50 {
    padding-bottom: 3.125rem !important;
  }
  .pb-md-60 {
    padding-bottom: 3.75rem !important;
  }
  .pb-md-70 {
    padding-bottom: 4.375rem !important;
  }
  .pb-md-80 {
    padding-bottom: 5rem !important;
  }
  .pb-md-90 {
    padding-bottom: 5.625rem !important;
  }
  .pb-md-100 {
    padding-bottom: 6.25rem !important;
  }
  .pb-md-120 {
    padding-bottom: 7.5rem !important;
  }
  .pb-md-140 {
    padding-bottom: 8.75rem !important;
  }
  .pb-md-160 {
    padding-bottom: 10rem !important;
  }
  .pb-md-180 {
    padding-bottom: 11.5rem !important;
  }
  .pb-md-200 {
    padding-bottom: 12.5rem !important;
  }
  .pb-md-300 {
    padding-bottom: 18.75rem !important;
  }
  .ps-md-0 {
    padding-left: 0 !important;
  }
  .ps-md-5 {
    padding-left: 0.3125rem !important;
  }
  .ps-md-10 {
    padding-left: 0.625rem !important;
  }
  .ps-md-15 {
    padding-left: 0.9375rem !important;
  }
  .ps-md-20 {
    padding-left: 1.25rem !important;
  }
  .ps-md-25 {
    padding-left: 1.5625rem !important;
  }
  .ps-md-30 {
    padding-left: 1.875rem !important;
  }
  .ps-md-35 {
    padding-left: 2.1875rem !important;
  }
  .ps-md-40 {
    padding-left: 2.5rem !important;
  }
  .ps-md-45 {
    padding-left: 2.8125rem !important;
  }
  .ps-md-50 {
    padding-left: 3.125rem !important;
  }
  .ps-md-60 {
    padding-left: 3.75rem !important;
  }
  .ps-md-70 {
    padding-left: 4.375rem !important;
  }
  .ps-md-80 {
    padding-left: 5rem !important;
  }
  .ps-md-90 {
    padding-left: 5.625rem !important;
  }
  .ps-md-100 {
    padding-left: 6.25rem !important;
  }
  .ps-md-120 {
    padding-left: 7.5rem !important;
  }
  .ps-md-140 {
    padding-left: 8.75rem !important;
  }
  .ps-md-160 {
    padding-left: 10rem !important;
  }
  .ps-md-180 {
    padding-left: 11.5rem !important;
  }
  .ps-md-200 {
    padding-left: 12.5rem !important;
  }
  .ps-md-300 {
    padding-left: 18.75rem !important;
  }
  .gap-md-0 {
    gap: 0 !important;
  }
  .gap-md-5 {
    gap: 0.3125rem !important;
  }
  .gap-md-10 {
    gap: 0.625rem !important;
  }
  .gap-md-15 {
    gap: 0.9375rem !important;
  }
  .gap-md-20 {
    gap: 1.25rem !important;
  }
  .gap-md-25 {
    gap: 1.5625rem !important;
  }
  .gap-md-30 {
    gap: 1.875rem !important;
  }
  .gap-md-35 {
    gap: 2.1875rem !important;
  }
  .gap-md-40 {
    gap: 2.5rem !important;
  }
  .gap-md-45 {
    gap: 2.8125rem !important;
  }
  .gap-md-50 {
    gap: 3.125rem !important;
  }
  .gap-md-60 {
    gap: 3.75rem !important;
  }
  .gap-md-70 {
    gap: 4.375rem !important;
  }
  .gap-md-80 {
    gap: 5rem !important;
  }
  .gap-md-90 {
    gap: 5.625rem !important;
  }
  .gap-md-100 {
    gap: 6.25rem !important;
  }
  .gap-md-120 {
    gap: 7.5rem !important;
  }
  .gap-md-140 {
    gap: 8.75rem !important;
  }
  .gap-md-160 {
    gap: 10rem !important;
  }
  .gap-md-180 {
    gap: 11.5rem !important;
  }
  .gap-md-200 {
    gap: 12.5rem !important;
  }
  .gap-md-300 {
    gap: 18.75rem !important;
  }
  .row-gap-md-0 {
    row-gap: 0 !important;
  }
  .row-gap-md-5 {
    row-gap: 0.3125rem !important;
  }
  .row-gap-md-10 {
    row-gap: 0.625rem !important;
  }
  .row-gap-md-15 {
    row-gap: 0.9375rem !important;
  }
  .row-gap-md-20 {
    row-gap: 1.25rem !important;
  }
  .row-gap-md-25 {
    row-gap: 1.5625rem !important;
  }
  .row-gap-md-30 {
    row-gap: 1.875rem !important;
  }
  .row-gap-md-35 {
    row-gap: 2.1875rem !important;
  }
  .row-gap-md-40 {
    row-gap: 2.5rem !important;
  }
  .row-gap-md-45 {
    row-gap: 2.8125rem !important;
  }
  .row-gap-md-50 {
    row-gap: 3.125rem !important;
  }
  .row-gap-md-60 {
    row-gap: 3.75rem !important;
  }
  .row-gap-md-70 {
    row-gap: 4.375rem !important;
  }
  .row-gap-md-80 {
    row-gap: 5rem !important;
  }
  .row-gap-md-90 {
    row-gap: 5.625rem !important;
  }
  .row-gap-md-100 {
    row-gap: 6.25rem !important;
  }
  .row-gap-md-120 {
    row-gap: 7.5rem !important;
  }
  .row-gap-md-140 {
    row-gap: 8.75rem !important;
  }
  .row-gap-md-160 {
    row-gap: 10rem !important;
  }
  .row-gap-md-180 {
    row-gap: 11.5rem !important;
  }
  .row-gap-md-200 {
    row-gap: 12.5rem !important;
  }
  .row-gap-md-300 {
    row-gap: 18.75rem !important;
  }
  .column-gap-md-0 {
    column-gap: 0 !important;
  }
  .column-gap-md-5 {
    column-gap: 0.3125rem !important;
  }
  .column-gap-md-10 {
    column-gap: 0.625rem !important;
  }
  .column-gap-md-15 {
    column-gap: 0.9375rem !important;
  }
  .column-gap-md-20 {
    column-gap: 1.25rem !important;
  }
  .column-gap-md-25 {
    column-gap: 1.5625rem !important;
  }
  .column-gap-md-30 {
    column-gap: 1.875rem !important;
  }
  .column-gap-md-35 {
    column-gap: 2.1875rem !important;
  }
  .column-gap-md-40 {
    column-gap: 2.5rem !important;
  }
  .column-gap-md-45 {
    column-gap: 2.8125rem !important;
  }
  .column-gap-md-50 {
    column-gap: 3.125rem !important;
  }
  .column-gap-md-60 {
    column-gap: 3.75rem !important;
  }
  .column-gap-md-70 {
    column-gap: 4.375rem !important;
  }
  .column-gap-md-80 {
    column-gap: 5rem !important;
  }
  .column-gap-md-90 {
    column-gap: 5.625rem !important;
  }
  .column-gap-md-100 {
    column-gap: 6.25rem !important;
  }
  .column-gap-md-120 {
    column-gap: 7.5rem !important;
  }
  .column-gap-md-140 {
    column-gap: 8.75rem !important;
  }
  .column-gap-md-160 {
    column-gap: 10rem !important;
  }
  .column-gap-md-180 {
    column-gap: 11.5rem !important;
  }
  .column-gap-md-200 {
    column-gap: 12.5rem !important;
  }
  .column-gap-md-300 {
    column-gap: 18.75rem !important;
  }
  .fs-md-1 {
    font-size: calc(1.6rem + 4.2vw) !important;
  }
  .fs-md-2 {
    font-size: calc(1.5rem + 3vw) !important;
  }
  .fs-md-3 {
    font-size: calc(1.4375rem + 2.25vw) !important;
  }
  .fs-md-4 {
    font-size: calc(1.3875rem + 1.65vw) !important;
  }
  .fs-md-5 {
    font-size: calc(1.35rem + 1.2vw) !important;
  }
  .fs-md-6 {
    font-size: calc(1.3125rem + 0.75vw) !important;
  }
  .fs-md-base {
    font-size: 1rem !important;
  }
  .fs-md-xxs {
    font-size: 0.625rem !important;
  }
  .fs-md-xs {
    font-size: 0.75rem !important;
  }
  .fs-md-sm {
    font-size: 0.875rem !important;
  }
  .fs-md-md {
    font-size: 1.125rem !important;
  }
  .fs-md-lg {
    font-size: 1.25rem !important;
  }
  .fs-md-xl {
    font-size: calc(1.2625rem + 0.15vw) !important;
  }
  .text-md-start {
    text-align: left !important;
  }
  .text-md-end {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }
  .float-lg-end {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .object-fit-lg-contain {
    object-fit: contain !important;
  }
  .object-fit-lg-cover {
    object-fit: cover !important;
  }
  .object-fit-lg-fill {
    object-fit: fill !important;
  }
  .object-fit-lg-scale {
    object-fit: scale-down !important;
  }
  .object-fit-lg-none {
    object-fit: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-grid {
    display: grid !important;
  }
  .d-lg-inline-grid {
    display: inline-grid !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .w-lg-25 {
    width: 25% !important;
  }
  .w-lg-50 {
    width: 50% !important;
  }
  .w-lg-75 {
    width: 75% !important;
  }
  .w-lg-100 {
    width: 100% !important;
  }
  .w-lg-auto {
    width: auto !important;
  }
  .w-lg-10 {
    width: 10% !important;
  }
  .w-lg-20 {
    width: 20% !important;
  }
  .w-lg-30 {
    width: 30% !important;
  }
  .w-lg-40 {
    width: 40% !important;
  }
  .w-lg-60 {
    width: 60% !important;
  }
  .w-lg-70 {
    width: 70% !important;
  }
  .w-lg-80 {
    width: 80% !important;
  }
  .w-lg-90 {
    width: 90% !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-last {
    order: 6 !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .m-lg-5 {
    margin: 0.3125rem !important;
  }
  .m-lg-10 {
    margin: 0.625rem !important;
  }
  .m-lg-15 {
    margin: 0.9375rem !important;
  }
  .m-lg-20 {
    margin: 1.25rem !important;
  }
  .m-lg-25 {
    margin: 1.5625rem !important;
  }
  .m-lg-30 {
    margin: 1.875rem !important;
  }
  .m-lg-35 {
    margin: 2.1875rem !important;
  }
  .m-lg-40 {
    margin: 2.5rem !important;
  }
  .m-lg-45 {
    margin: 2.8125rem !important;
  }
  .m-lg-50 {
    margin: 3.125rem !important;
  }
  .m-lg-60 {
    margin: 3.75rem !important;
  }
  .m-lg-70 {
    margin: 4.375rem !important;
  }
  .m-lg-80 {
    margin: 5rem !important;
  }
  .m-lg-90 {
    margin: 5.625rem !important;
  }
  .m-lg-100 {
    margin: 6.25rem !important;
  }
  .m-lg-120 {
    margin: 7.5rem !important;
  }
  .m-lg-140 {
    margin: 8.75rem !important;
  }
  .m-lg-160 {
    margin: 10rem !important;
  }
  .m-lg-180 {
    margin: 11.5rem !important;
  }
  .m-lg-200 {
    margin: 12.5rem !important;
  }
  .m-lg-300 {
    margin: 18.75rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-lg-5 {
    margin-right: 0.3125rem !important;
    margin-left: 0.3125rem !important;
  }
  .mx-lg-10 {
    margin-right: 0.625rem !important;
    margin-left: 0.625rem !important;
  }
  .mx-lg-15 {
    margin-right: 0.9375rem !important;
    margin-left: 0.9375rem !important;
  }
  .mx-lg-20 {
    margin-right: 1.25rem !important;
    margin-left: 1.25rem !important;
  }
  .mx-lg-25 {
    margin-right: 1.5625rem !important;
    margin-left: 1.5625rem !important;
  }
  .mx-lg-30 {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }
  .mx-lg-35 {
    margin-right: 2.1875rem !important;
    margin-left: 2.1875rem !important;
  }
  .mx-lg-40 {
    margin-right: 2.5rem !important;
    margin-left: 2.5rem !important;
  }
  .mx-lg-45 {
    margin-right: 2.8125rem !important;
    margin-left: 2.8125rem !important;
  }
  .mx-lg-50 {
    margin-right: 3.125rem !important;
    margin-left: 3.125rem !important;
  }
  .mx-lg-60 {
    margin-right: 3.75rem !important;
    margin-left: 3.75rem !important;
  }
  .mx-lg-70 {
    margin-right: 4.375rem !important;
    margin-left: 4.375rem !important;
  }
  .mx-lg-80 {
    margin-right: 5rem !important;
    margin-left: 5rem !important;
  }
  .mx-lg-90 {
    margin-right: 5.625rem !important;
    margin-left: 5.625rem !important;
  }
  .mx-lg-100 {
    margin-right: 6.25rem !important;
    margin-left: 6.25rem !important;
  }
  .mx-lg-120 {
    margin-right: 7.5rem !important;
    margin-left: 7.5rem !important;
  }
  .mx-lg-140 {
    margin-right: 8.75rem !important;
    margin-left: 8.75rem !important;
  }
  .mx-lg-160 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }
  .mx-lg-180 {
    margin-right: 11.5rem !important;
    margin-left: 11.5rem !important;
  }
  .mx-lg-200 {
    margin-right: 12.5rem !important;
    margin-left: 12.5rem !important;
  }
  .mx-lg-300 {
    margin-right: 18.75rem !important;
    margin-left: 18.75rem !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-lg-5 {
    margin-top: 0.3125rem !important;
    margin-bottom: 0.3125rem !important;
  }
  .my-lg-10 {
    margin-top: 0.625rem !important;
    margin-bottom: 0.625rem !important;
  }
  .my-lg-15 {
    margin-top: 0.9375rem !important;
    margin-bottom: 0.9375rem !important;
  }
  .my-lg-20 {
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
  }
  .my-lg-25 {
    margin-top: 1.5625rem !important;
    margin-bottom: 1.5625rem !important;
  }
  .my-lg-30 {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }
  .my-lg-35 {
    margin-top: 2.1875rem !important;
    margin-bottom: 2.1875rem !important;
  }
  .my-lg-40 {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }
  .my-lg-45 {
    margin-top: 2.8125rem !important;
    margin-bottom: 2.8125rem !important;
  }
  .my-lg-50 {
    margin-top: 3.125rem !important;
    margin-bottom: 3.125rem !important;
  }
  .my-lg-60 {
    margin-top: 3.75rem !important;
    margin-bottom: 3.75rem !important;
  }
  .my-lg-70 {
    margin-top: 4.375rem !important;
    margin-bottom: 4.375rem !important;
  }
  .my-lg-80 {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
  }
  .my-lg-90 {
    margin-top: 5.625rem !important;
    margin-bottom: 5.625rem !important;
  }
  .my-lg-100 {
    margin-top: 6.25rem !important;
    margin-bottom: 6.25rem !important;
  }
  .my-lg-120 {
    margin-top: 7.5rem !important;
    margin-bottom: 7.5rem !important;
  }
  .my-lg-140 {
    margin-top: 8.75rem !important;
    margin-bottom: 8.75rem !important;
  }
  .my-lg-160 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }
  .my-lg-180 {
    margin-top: 11.5rem !important;
    margin-bottom: 11.5rem !important;
  }
  .my-lg-200 {
    margin-top: 12.5rem !important;
    margin-bottom: 12.5rem !important;
  }
  .my-lg-300 {
    margin-top: 18.75rem !important;
    margin-bottom: 18.75rem !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mt-lg-5 {
    margin-top: 0.3125rem !important;
  }
  .mt-lg-10 {
    margin-top: 0.625rem !important;
  }
  .mt-lg-15 {
    margin-top: 0.9375rem !important;
  }
  .mt-lg-20 {
    margin-top: 1.25rem !important;
  }
  .mt-lg-25 {
    margin-top: 1.5625rem !important;
  }
  .mt-lg-30 {
    margin-top: 1.875rem !important;
  }
  .mt-lg-35 {
    margin-top: 2.1875rem !important;
  }
  .mt-lg-40 {
    margin-top: 2.5rem !important;
  }
  .mt-lg-45 {
    margin-top: 2.8125rem !important;
  }
  .mt-lg-50 {
    margin-top: 3.125rem !important;
  }
  .mt-lg-60 {
    margin-top: 3.75rem !important;
  }
  .mt-lg-70 {
    margin-top: 4.375rem !important;
  }
  .mt-lg-80 {
    margin-top: 5rem !important;
  }
  .mt-lg-90 {
    margin-top: 5.625rem !important;
  }
  .mt-lg-100 {
    margin-top: 6.25rem !important;
  }
  .mt-lg-120 {
    margin-top: 7.5rem !important;
  }
  .mt-lg-140 {
    margin-top: 8.75rem !important;
  }
  .mt-lg-160 {
    margin-top: 10rem !important;
  }
  .mt-lg-180 {
    margin-top: 11.5rem !important;
  }
  .mt-lg-200 {
    margin-top: 12.5rem !important;
  }
  .mt-lg-300 {
    margin-top: 18.75rem !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .me-lg-0 {
    margin-right: 0 !important;
  }
  .me-lg-5 {
    margin-right: 0.3125rem !important;
  }
  .me-lg-10 {
    margin-right: 0.625rem !important;
  }
  .me-lg-15 {
    margin-right: 0.9375rem !important;
  }
  .me-lg-20 {
    margin-right: 1.25rem !important;
  }
  .me-lg-25 {
    margin-right: 1.5625rem !important;
  }
  .me-lg-30 {
    margin-right: 1.875rem !important;
  }
  .me-lg-35 {
    margin-right: 2.1875rem !important;
  }
  .me-lg-40 {
    margin-right: 2.5rem !important;
  }
  .me-lg-45 {
    margin-right: 2.8125rem !important;
  }
  .me-lg-50 {
    margin-right: 3.125rem !important;
  }
  .me-lg-60 {
    margin-right: 3.75rem !important;
  }
  .me-lg-70 {
    margin-right: 4.375rem !important;
  }
  .me-lg-80 {
    margin-right: 5rem !important;
  }
  .me-lg-90 {
    margin-right: 5.625rem !important;
  }
  .me-lg-100 {
    margin-right: 6.25rem !important;
  }
  .me-lg-120 {
    margin-right: 7.5rem !important;
  }
  .me-lg-140 {
    margin-right: 8.75rem !important;
  }
  .me-lg-160 {
    margin-right: 10rem !important;
  }
  .me-lg-180 {
    margin-right: 11.5rem !important;
  }
  .me-lg-200 {
    margin-right: 12.5rem !important;
  }
  .me-lg-300 {
    margin-right: 18.75rem !important;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lg-5 {
    margin-bottom: 0.3125rem !important;
  }
  .mb-lg-10 {
    margin-bottom: 0.625rem !important;
  }
  .mb-lg-15 {
    margin-bottom: 0.9375rem !important;
  }
  .mb-lg-20 {
    margin-bottom: 1.25rem !important;
  }
  .mb-lg-25 {
    margin-bottom: 1.5625rem !important;
  }
  .mb-lg-30 {
    margin-bottom: 1.875rem !important;
  }
  .mb-lg-35 {
    margin-bottom: 2.1875rem !important;
  }
  .mb-lg-40 {
    margin-bottom: 2.5rem !important;
  }
  .mb-lg-45 {
    margin-bottom: 2.8125rem !important;
  }
  .mb-lg-50 {
    margin-bottom: 3.125rem !important;
  }
  .mb-lg-60 {
    margin-bottom: 3.75rem !important;
  }
  .mb-lg-70 {
    margin-bottom: 4.375rem !important;
  }
  .mb-lg-80 {
    margin-bottom: 5rem !important;
  }
  .mb-lg-90 {
    margin-bottom: 5.625rem !important;
  }
  .mb-lg-100 {
    margin-bottom: 6.25rem !important;
  }
  .mb-lg-120 {
    margin-bottom: 7.5rem !important;
  }
  .mb-lg-140 {
    margin-bottom: 8.75rem !important;
  }
  .mb-lg-160 {
    margin-bottom: 10rem !important;
  }
  .mb-lg-180 {
    margin-bottom: 11.5rem !important;
  }
  .mb-lg-200 {
    margin-bottom: 12.5rem !important;
  }
  .mb-lg-300 {
    margin-bottom: 18.75rem !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ms-lg-0 {
    margin-left: 0 !important;
  }
  .ms-lg-5 {
    margin-left: 0.3125rem !important;
  }
  .ms-lg-10 {
    margin-left: 0.625rem !important;
  }
  .ms-lg-15 {
    margin-left: 0.9375rem !important;
  }
  .ms-lg-20 {
    margin-left: 1.25rem !important;
  }
  .ms-lg-25 {
    margin-left: 1.5625rem !important;
  }
  .ms-lg-30 {
    margin-left: 1.875rem !important;
  }
  .ms-lg-35 {
    margin-left: 2.1875rem !important;
  }
  .ms-lg-40 {
    margin-left: 2.5rem !important;
  }
  .ms-lg-45 {
    margin-left: 2.8125rem !important;
  }
  .ms-lg-50 {
    margin-left: 3.125rem !important;
  }
  .ms-lg-60 {
    margin-left: 3.75rem !important;
  }
  .ms-lg-70 {
    margin-left: 4.375rem !important;
  }
  .ms-lg-80 {
    margin-left: 5rem !important;
  }
  .ms-lg-90 {
    margin-left: 5.625rem !important;
  }
  .ms-lg-100 {
    margin-left: 6.25rem !important;
  }
  .ms-lg-120 {
    margin-left: 7.5rem !important;
  }
  .ms-lg-140 {
    margin-left: 8.75rem !important;
  }
  .ms-lg-160 {
    margin-left: 10rem !important;
  }
  .ms-lg-180 {
    margin-left: 11.5rem !important;
  }
  .ms-lg-200 {
    margin-left: 12.5rem !important;
  }
  .ms-lg-300 {
    margin-left: 18.75rem !important;
  }
  .ms-lg-auto {
    margin-left: auto !important;
  }
  .m-lg-n5 {
    margin: -0.3125rem !important;
  }
  .m-lg-n10 {
    margin: -0.625rem !important;
  }
  .m-lg-n15 {
    margin: -0.9375rem !important;
  }
  .m-lg-n20 {
    margin: -1.25rem !important;
  }
  .m-lg-n25 {
    margin: -1.5625rem !important;
  }
  .m-lg-n30 {
    margin: -1.875rem !important;
  }
  .m-lg-n35 {
    margin: -2.1875rem !important;
  }
  .m-lg-n40 {
    margin: -2.5rem !important;
  }
  .m-lg-n45 {
    margin: -2.8125rem !important;
  }
  .m-lg-n50 {
    margin: -3.125rem !important;
  }
  .m-lg-n60 {
    margin: -3.75rem !important;
  }
  .m-lg-n70 {
    margin: -4.375rem !important;
  }
  .m-lg-n80 {
    margin: -5rem !important;
  }
  .m-lg-n90 {
    margin: -5.625rem !important;
  }
  .m-lg-n100 {
    margin: -6.25rem !important;
  }
  .m-lg-n120 {
    margin: -7.5rem !important;
  }
  .m-lg-n140 {
    margin: -8.75rem !important;
  }
  .m-lg-n160 {
    margin: -10rem !important;
  }
  .m-lg-n180 {
    margin: -11.5rem !important;
  }
  .m-lg-n200 {
    margin: -12.5rem !important;
  }
  .m-lg-n300 {
    margin: -18.75rem !important;
  }
  .mx-lg-n5 {
    margin-right: -0.3125rem !important;
    margin-left: -0.3125rem !important;
  }
  .mx-lg-n10 {
    margin-right: -0.625rem !important;
    margin-left: -0.625rem !important;
  }
  .mx-lg-n15 {
    margin-right: -0.9375rem !important;
    margin-left: -0.9375rem !important;
  }
  .mx-lg-n20 {
    margin-right: -1.25rem !important;
    margin-left: -1.25rem !important;
  }
  .mx-lg-n25 {
    margin-right: -1.5625rem !important;
    margin-left: -1.5625rem !important;
  }
  .mx-lg-n30 {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }
  .mx-lg-n35 {
    margin-right: -2.1875rem !important;
    margin-left: -2.1875rem !important;
  }
  .mx-lg-n40 {
    margin-right: -2.5rem !important;
    margin-left: -2.5rem !important;
  }
  .mx-lg-n45 {
    margin-right: -2.8125rem !important;
    margin-left: -2.8125rem !important;
  }
  .mx-lg-n50 {
    margin-right: -3.125rem !important;
    margin-left: -3.125rem !important;
  }
  .mx-lg-n60 {
    margin-right: -3.75rem !important;
    margin-left: -3.75rem !important;
  }
  .mx-lg-n70 {
    margin-right: -4.375rem !important;
    margin-left: -4.375rem !important;
  }
  .mx-lg-n80 {
    margin-right: -5rem !important;
    margin-left: -5rem !important;
  }
  .mx-lg-n90 {
    margin-right: -5.625rem !important;
    margin-left: -5.625rem !important;
  }
  .mx-lg-n100 {
    margin-right: -6.25rem !important;
    margin-left: -6.25rem !important;
  }
  .mx-lg-n120 {
    margin-right: -7.5rem !important;
    margin-left: -7.5rem !important;
  }
  .mx-lg-n140 {
    margin-right: -8.75rem !important;
    margin-left: -8.75rem !important;
  }
  .mx-lg-n160 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }
  .mx-lg-n180 {
    margin-right: -11.5rem !important;
    margin-left: -11.5rem !important;
  }
  .mx-lg-n200 {
    margin-right: -12.5rem !important;
    margin-left: -12.5rem !important;
  }
  .mx-lg-n300 {
    margin-right: -18.75rem !important;
    margin-left: -18.75rem !important;
  }
  .my-lg-n5 {
    margin-top: -0.3125rem !important;
    margin-bottom: -0.3125rem !important;
  }
  .my-lg-n10 {
    margin-top: -0.625rem !important;
    margin-bottom: -0.625rem !important;
  }
  .my-lg-n15 {
    margin-top: -0.9375rem !important;
    margin-bottom: -0.9375rem !important;
  }
  .my-lg-n20 {
    margin-top: -1.25rem !important;
    margin-bottom: -1.25rem !important;
  }
  .my-lg-n25 {
    margin-top: -1.5625rem !important;
    margin-bottom: -1.5625rem !important;
  }
  .my-lg-n30 {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }
  .my-lg-n35 {
    margin-top: -2.1875rem !important;
    margin-bottom: -2.1875rem !important;
  }
  .my-lg-n40 {
    margin-top: -2.5rem !important;
    margin-bottom: -2.5rem !important;
  }
  .my-lg-n45 {
    margin-top: -2.8125rem !important;
    margin-bottom: -2.8125rem !important;
  }
  .my-lg-n50 {
    margin-top: -3.125rem !important;
    margin-bottom: -3.125rem !important;
  }
  .my-lg-n60 {
    margin-top: -3.75rem !important;
    margin-bottom: -3.75rem !important;
  }
  .my-lg-n70 {
    margin-top: -4.375rem !important;
    margin-bottom: -4.375rem !important;
  }
  .my-lg-n80 {
    margin-top: -5rem !important;
    margin-bottom: -5rem !important;
  }
  .my-lg-n90 {
    margin-top: -5.625rem !important;
    margin-bottom: -5.625rem !important;
  }
  .my-lg-n100 {
    margin-top: -6.25rem !important;
    margin-bottom: -6.25rem !important;
  }
  .my-lg-n120 {
    margin-top: -7.5rem !important;
    margin-bottom: -7.5rem !important;
  }
  .my-lg-n140 {
    margin-top: -8.75rem !important;
    margin-bottom: -8.75rem !important;
  }
  .my-lg-n160 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }
  .my-lg-n180 {
    margin-top: -11.5rem !important;
    margin-bottom: -11.5rem !important;
  }
  .my-lg-n200 {
    margin-top: -12.5rem !important;
    margin-bottom: -12.5rem !important;
  }
  .my-lg-n300 {
    margin-top: -18.75rem !important;
    margin-bottom: -18.75rem !important;
  }
  .mt-lg-n5 {
    margin-top: -0.3125rem !important;
  }
  .mt-lg-n10 {
    margin-top: -0.625rem !important;
  }
  .mt-lg-n15 {
    margin-top: -0.9375rem !important;
  }
  .mt-lg-n20 {
    margin-top: -1.25rem !important;
  }
  .mt-lg-n25 {
    margin-top: -1.5625rem !important;
  }
  .mt-lg-n30 {
    margin-top: -1.875rem !important;
  }
  .mt-lg-n35 {
    margin-top: -2.1875rem !important;
  }
  .mt-lg-n40 {
    margin-top: -2.5rem !important;
  }
  .mt-lg-n45 {
    margin-top: -2.8125rem !important;
  }
  .mt-lg-n50 {
    margin-top: -3.125rem !important;
  }
  .mt-lg-n60 {
    margin-top: -3.75rem !important;
  }
  .mt-lg-n70 {
    margin-top: -4.375rem !important;
  }
  .mt-lg-n80 {
    margin-top: -5rem !important;
  }
  .mt-lg-n90 {
    margin-top: -5.625rem !important;
  }
  .mt-lg-n100 {
    margin-top: -6.25rem !important;
  }
  .mt-lg-n120 {
    margin-top: -7.5rem !important;
  }
  .mt-lg-n140 {
    margin-top: -8.75rem !important;
  }
  .mt-lg-n160 {
    margin-top: -10rem !important;
  }
  .mt-lg-n180 {
    margin-top: -11.5rem !important;
  }
  .mt-lg-n200 {
    margin-top: -12.5rem !important;
  }
  .mt-lg-n300 {
    margin-top: -18.75rem !important;
  }
  .me-lg-n5 {
    margin-right: -0.3125rem !important;
  }
  .me-lg-n10 {
    margin-right: -0.625rem !important;
  }
  .me-lg-n15 {
    margin-right: -0.9375rem !important;
  }
  .me-lg-n20 {
    margin-right: -1.25rem !important;
  }
  .me-lg-n25 {
    margin-right: -1.5625rem !important;
  }
  .me-lg-n30 {
    margin-right: -1.875rem !important;
  }
  .me-lg-n35 {
    margin-right: -2.1875rem !important;
  }
  .me-lg-n40 {
    margin-right: -2.5rem !important;
  }
  .me-lg-n45 {
    margin-right: -2.8125rem !important;
  }
  .me-lg-n50 {
    margin-right: -3.125rem !important;
  }
  .me-lg-n60 {
    margin-right: -3.75rem !important;
  }
  .me-lg-n70 {
    margin-right: -4.375rem !important;
  }
  .me-lg-n80 {
    margin-right: -5rem !important;
  }
  .me-lg-n90 {
    margin-right: -5.625rem !important;
  }
  .me-lg-n100 {
    margin-right: -6.25rem !important;
  }
  .me-lg-n120 {
    margin-right: -7.5rem !important;
  }
  .me-lg-n140 {
    margin-right: -8.75rem !important;
  }
  .me-lg-n160 {
    margin-right: -10rem !important;
  }
  .me-lg-n180 {
    margin-right: -11.5rem !important;
  }
  .me-lg-n200 {
    margin-right: -12.5rem !important;
  }
  .me-lg-n300 {
    margin-right: -18.75rem !important;
  }
  .mb-lg-n5 {
    margin-bottom: -0.3125rem !important;
  }
  .mb-lg-n10 {
    margin-bottom: -0.625rem !important;
  }
  .mb-lg-n15 {
    margin-bottom: -0.9375rem !important;
  }
  .mb-lg-n20 {
    margin-bottom: -1.25rem !important;
  }
  .mb-lg-n25 {
    margin-bottom: -1.5625rem !important;
  }
  .mb-lg-n30 {
    margin-bottom: -1.875rem !important;
  }
  .mb-lg-n35 {
    margin-bottom: -2.1875rem !important;
  }
  .mb-lg-n40 {
    margin-bottom: -2.5rem !important;
  }
  .mb-lg-n45 {
    margin-bottom: -2.8125rem !important;
  }
  .mb-lg-n50 {
    margin-bottom: -3.125rem !important;
  }
  .mb-lg-n60 {
    margin-bottom: -3.75rem !important;
  }
  .mb-lg-n70 {
    margin-bottom: -4.375rem !important;
  }
  .mb-lg-n80 {
    margin-bottom: -5rem !important;
  }
  .mb-lg-n90 {
    margin-bottom: -5.625rem !important;
  }
  .mb-lg-n100 {
    margin-bottom: -6.25rem !important;
  }
  .mb-lg-n120 {
    margin-bottom: -7.5rem !important;
  }
  .mb-lg-n140 {
    margin-bottom: -8.75rem !important;
  }
  .mb-lg-n160 {
    margin-bottom: -10rem !important;
  }
  .mb-lg-n180 {
    margin-bottom: -11.5rem !important;
  }
  .mb-lg-n200 {
    margin-bottom: -12.5rem !important;
  }
  .mb-lg-n300 {
    margin-bottom: -18.75rem !important;
  }
  .ms-lg-n5 {
    margin-left: -0.3125rem !important;
  }
  .ms-lg-n10 {
    margin-left: -0.625rem !important;
  }
  .ms-lg-n15 {
    margin-left: -0.9375rem !important;
  }
  .ms-lg-n20 {
    margin-left: -1.25rem !important;
  }
  .ms-lg-n25 {
    margin-left: -1.5625rem !important;
  }
  .ms-lg-n30 {
    margin-left: -1.875rem !important;
  }
  .ms-lg-n35 {
    margin-left: -2.1875rem !important;
  }
  .ms-lg-n40 {
    margin-left: -2.5rem !important;
  }
  .ms-lg-n45 {
    margin-left: -2.8125rem !important;
  }
  .ms-lg-n50 {
    margin-left: -3.125rem !important;
  }
  .ms-lg-n60 {
    margin-left: -3.75rem !important;
  }
  .ms-lg-n70 {
    margin-left: -4.375rem !important;
  }
  .ms-lg-n80 {
    margin-left: -5rem !important;
  }
  .ms-lg-n90 {
    margin-left: -5.625rem !important;
  }
  .ms-lg-n100 {
    margin-left: -6.25rem !important;
  }
  .ms-lg-n120 {
    margin-left: -7.5rem !important;
  }
  .ms-lg-n140 {
    margin-left: -8.75rem !important;
  }
  .ms-lg-n160 {
    margin-left: -10rem !important;
  }
  .ms-lg-n180 {
    margin-left: -11.5rem !important;
  }
  .ms-lg-n200 {
    margin-left: -12.5rem !important;
  }
  .ms-lg-n300 {
    margin-left: -18.75rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .p-lg-5 {
    padding: 0.3125rem !important;
  }
  .p-lg-10 {
    padding: 0.625rem !important;
  }
  .p-lg-15 {
    padding: 0.9375rem !important;
  }
  .p-lg-20 {
    padding: 1.25rem !important;
  }
  .p-lg-25 {
    padding: 1.5625rem !important;
  }
  .p-lg-30 {
    padding: 1.875rem !important;
  }
  .p-lg-35 {
    padding: 2.1875rem !important;
  }
  .p-lg-40 {
    padding: 2.5rem !important;
  }
  .p-lg-45 {
    padding: 2.8125rem !important;
  }
  .p-lg-50 {
    padding: 3.125rem !important;
  }
  .p-lg-60 {
    padding: 3.75rem !important;
  }
  .p-lg-70 {
    padding: 4.375rem !important;
  }
  .p-lg-80 {
    padding: 5rem !important;
  }
  .p-lg-90 {
    padding: 5.625rem !important;
  }
  .p-lg-100 {
    padding: 6.25rem !important;
  }
  .p-lg-120 {
    padding: 7.5rem !important;
  }
  .p-lg-140 {
    padding: 8.75rem !important;
  }
  .p-lg-160 {
    padding: 10rem !important;
  }
  .p-lg-180 {
    padding: 11.5rem !important;
  }
  .p-lg-200 {
    padding: 12.5rem !important;
  }
  .p-lg-300 {
    padding: 18.75rem !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-lg-5 {
    padding-right: 0.3125rem !important;
    padding-left: 0.3125rem !important;
  }
  .px-lg-10 {
    padding-right: 0.625rem !important;
    padding-left: 0.625rem !important;
  }
  .px-lg-15 {
    padding-right: 0.9375rem !important;
    padding-left: 0.9375rem !important;
  }
  .px-lg-20 {
    padding-right: 1.25rem !important;
    padding-left: 1.25rem !important;
  }
  .px-lg-25 {
    padding-right: 1.5625rem !important;
    padding-left: 1.5625rem !important;
  }
  .px-lg-30 {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }
  .px-lg-35 {
    padding-right: 2.1875rem !important;
    padding-left: 2.1875rem !important;
  }
  .px-lg-40 {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
  }
  .px-lg-45 {
    padding-right: 2.8125rem !important;
    padding-left: 2.8125rem !important;
  }
  .px-lg-50 {
    padding-right: 3.125rem !important;
    padding-left: 3.125rem !important;
  }
  .px-lg-60 {
    padding-right: 3.75rem !important;
    padding-left: 3.75rem !important;
  }
  .px-lg-70 {
    padding-right: 4.375rem !important;
    padding-left: 4.375rem !important;
  }
  .px-lg-80 {
    padding-right: 5rem !important;
    padding-left: 5rem !important;
  }
  .px-lg-90 {
    padding-right: 5.625rem !important;
    padding-left: 5.625rem !important;
  }
  .px-lg-100 {
    padding-right: 6.25rem !important;
    padding-left: 6.25rem !important;
  }
  .px-lg-120 {
    padding-right: 7.5rem !important;
    padding-left: 7.5rem !important;
  }
  .px-lg-140 {
    padding-right: 8.75rem !important;
    padding-left: 8.75rem !important;
  }
  .px-lg-160 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }
  .px-lg-180 {
    padding-right: 11.5rem !important;
    padding-left: 11.5rem !important;
  }
  .px-lg-200 {
    padding-right: 12.5rem !important;
    padding-left: 12.5rem !important;
  }
  .px-lg-300 {
    padding-right: 18.75rem !important;
    padding-left: 18.75rem !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-lg-5 {
    padding-top: 0.3125rem !important;
    padding-bottom: 0.3125rem !important;
  }
  .py-lg-10 {
    padding-top: 0.625rem !important;
    padding-bottom: 0.625rem !important;
  }
  .py-lg-15 {
    padding-top: 0.9375rem !important;
    padding-bottom: 0.9375rem !important;
  }
  .py-lg-20 {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
  .py-lg-25 {
    padding-top: 1.5625rem !important;
    padding-bottom: 1.5625rem !important;
  }
  .py-lg-30 {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }
  .py-lg-35 {
    padding-top: 2.1875rem !important;
    padding-bottom: 2.1875rem !important;
  }
  .py-lg-40 {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }
  .py-lg-45 {
    padding-top: 2.8125rem !important;
    padding-bottom: 2.8125rem !important;
  }
  .py-lg-50 {
    padding-top: 3.125rem !important;
    padding-bottom: 3.125rem !important;
  }
  .py-lg-60 {
    padding-top: 3.75rem !important;
    padding-bottom: 3.75rem !important;
  }
  .py-lg-70 {
    padding-top: 4.375rem !important;
    padding-bottom: 4.375rem !important;
  }
  .py-lg-80 {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }
  .py-lg-90 {
    padding-top: 5.625rem !important;
    padding-bottom: 5.625rem !important;
  }
  .py-lg-100 {
    padding-top: 6.25rem !important;
    padding-bottom: 6.25rem !important;
  }
  .py-lg-120 {
    padding-top: 7.5rem !important;
    padding-bottom: 7.5rem !important;
  }
  .py-lg-140 {
    padding-top: 8.75rem !important;
    padding-bottom: 8.75rem !important;
  }
  .py-lg-160 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }
  .py-lg-180 {
    padding-top: 11.5rem !important;
    padding-bottom: 11.5rem !important;
  }
  .py-lg-200 {
    padding-top: 12.5rem !important;
    padding-bottom: 12.5rem !important;
  }
  .py-lg-300 {
    padding-top: 18.75rem !important;
    padding-bottom: 18.75rem !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pt-lg-5 {
    padding-top: 0.3125rem !important;
  }
  .pt-lg-10 {
    padding-top: 0.625rem !important;
  }
  .pt-lg-15 {
    padding-top: 0.9375rem !important;
  }
  .pt-lg-20 {
    padding-top: 1.25rem !important;
  }
  .pt-lg-25 {
    padding-top: 1.5625rem !important;
  }
  .pt-lg-30 {
    padding-top: 1.875rem !important;
  }
  .pt-lg-35 {
    padding-top: 2.1875rem !important;
  }
  .pt-lg-40 {
    padding-top: 2.5rem !important;
  }
  .pt-lg-45 {
    padding-top: 2.8125rem !important;
  }
  .pt-lg-50 {
    padding-top: 3.125rem !important;
  }
  .pt-lg-60 {
    padding-top: 3.75rem !important;
  }
  .pt-lg-70 {
    padding-top: 4.375rem !important;
  }
  .pt-lg-80 {
    padding-top: 5rem !important;
  }
  .pt-lg-90 {
    padding-top: 5.625rem !important;
  }
  .pt-lg-100 {
    padding-top: 6.25rem !important;
  }
  .pt-lg-120 {
    padding-top: 7.5rem !important;
  }
  .pt-lg-140 {
    padding-top: 8.75rem !important;
  }
  .pt-lg-160 {
    padding-top: 10rem !important;
  }
  .pt-lg-180 {
    padding-top: 11.5rem !important;
  }
  .pt-lg-200 {
    padding-top: 12.5rem !important;
  }
  .pt-lg-300 {
    padding-top: 18.75rem !important;
  }
  .pe-lg-0 {
    padding-right: 0 !important;
  }
  .pe-lg-5 {
    padding-right: 0.3125rem !important;
  }
  .pe-lg-10 {
    padding-right: 0.625rem !important;
  }
  .pe-lg-15 {
    padding-right: 0.9375rem !important;
  }
  .pe-lg-20 {
    padding-right: 1.25rem !important;
  }
  .pe-lg-25 {
    padding-right: 1.5625rem !important;
  }
  .pe-lg-30 {
    padding-right: 1.875rem !important;
  }
  .pe-lg-35 {
    padding-right: 2.1875rem !important;
  }
  .pe-lg-40 {
    padding-right: 2.5rem !important;
  }
  .pe-lg-45 {
    padding-right: 2.8125rem !important;
  }
  .pe-lg-50 {
    padding-right: 3.125rem !important;
  }
  .pe-lg-60 {
    padding-right: 3.75rem !important;
  }
  .pe-lg-70 {
    padding-right: 4.375rem !important;
  }
  .pe-lg-80 {
    padding-right: 5rem !important;
  }
  .pe-lg-90 {
    padding-right: 5.625rem !important;
  }
  .pe-lg-100 {
    padding-right: 6.25rem !important;
  }
  .pe-lg-120 {
    padding-right: 7.5rem !important;
  }
  .pe-lg-140 {
    padding-right: 8.75rem !important;
  }
  .pe-lg-160 {
    padding-right: 10rem !important;
  }
  .pe-lg-180 {
    padding-right: 11.5rem !important;
  }
  .pe-lg-200 {
    padding-right: 12.5rem !important;
  }
  .pe-lg-300 {
    padding-right: 18.75rem !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-lg-5 {
    padding-bottom: 0.3125rem !important;
  }
  .pb-lg-10 {
    padding-bottom: 0.625rem !important;
  }
  .pb-lg-15 {
    padding-bottom: 0.9375rem !important;
  }
  .pb-lg-20 {
    padding-bottom: 1.25rem !important;
  }
  .pb-lg-25 {
    padding-bottom: 1.5625rem !important;
  }
  .pb-lg-30 {
    padding-bottom: 1.875rem !important;
  }
  .pb-lg-35 {
    padding-bottom: 2.1875rem !important;
  }
  .pb-lg-40 {
    padding-bottom: 2.5rem !important;
  }
  .pb-lg-45 {
    padding-bottom: 2.8125rem !important;
  }
  .pb-lg-50 {
    padding-bottom: 3.125rem !important;
  }
  .pb-lg-60 {
    padding-bottom: 3.75rem !important;
  }
  .pb-lg-70 {
    padding-bottom: 4.375rem !important;
  }
  .pb-lg-80 {
    padding-bottom: 5rem !important;
  }
  .pb-lg-90 {
    padding-bottom: 5.625rem !important;
  }
  .pb-lg-100 {
    padding-bottom: 6.25rem !important;
  }
  .pb-lg-120 {
    padding-bottom: 7.5rem !important;
  }
  .pb-lg-140 {
    padding-bottom: 8.75rem !important;
  }
  .pb-lg-160 {
    padding-bottom: 10rem !important;
  }
  .pb-lg-180 {
    padding-bottom: 11.5rem !important;
  }
  .pb-lg-200 {
    padding-bottom: 12.5rem !important;
  }
  .pb-lg-300 {
    padding-bottom: 18.75rem !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-5 {
    padding-left: 0.3125rem !important;
  }
  .ps-lg-10 {
    padding-left: 0.625rem !important;
  }
  .ps-lg-15 {
    padding-left: 0.9375rem !important;
  }
  .ps-lg-20 {
    padding-left: 1.25rem !important;
  }
  .ps-lg-25 {
    padding-left: 1.5625rem !important;
  }
  .ps-lg-30 {
    padding-left: 1.875rem !important;
  }
  .ps-lg-35 {
    padding-left: 2.1875rem !important;
  }
  .ps-lg-40 {
    padding-left: 2.5rem !important;
  }
  .ps-lg-45 {
    padding-left: 2.8125rem !important;
  }
  .ps-lg-50 {
    padding-left: 3.125rem !important;
  }
  .ps-lg-60 {
    padding-left: 3.75rem !important;
  }
  .ps-lg-70 {
    padding-left: 4.375rem !important;
  }
  .ps-lg-80 {
    padding-left: 5rem !important;
  }
  .ps-lg-90 {
    padding-left: 5.625rem !important;
  }
  .ps-lg-100 {
    padding-left: 6.25rem !important;
  }
  .ps-lg-120 {
    padding-left: 7.5rem !important;
  }
  .ps-lg-140 {
    padding-left: 8.75rem !important;
  }
  .ps-lg-160 {
    padding-left: 10rem !important;
  }
  .ps-lg-180 {
    padding-left: 11.5rem !important;
  }
  .ps-lg-200 {
    padding-left: 12.5rem !important;
  }
  .ps-lg-300 {
    padding-left: 18.75rem !important;
  }
  .gap-lg-0 {
    gap: 0 !important;
  }
  .gap-lg-5 {
    gap: 0.3125rem !important;
  }
  .gap-lg-10 {
    gap: 0.625rem !important;
  }
  .gap-lg-15 {
    gap: 0.9375rem !important;
  }
  .gap-lg-20 {
    gap: 1.25rem !important;
  }
  .gap-lg-25 {
    gap: 1.5625rem !important;
  }
  .gap-lg-30 {
    gap: 1.875rem !important;
  }
  .gap-lg-35 {
    gap: 2.1875rem !important;
  }
  .gap-lg-40 {
    gap: 2.5rem !important;
  }
  .gap-lg-45 {
    gap: 2.8125rem !important;
  }
  .gap-lg-50 {
    gap: 3.125rem !important;
  }
  .gap-lg-60 {
    gap: 3.75rem !important;
  }
  .gap-lg-70 {
    gap: 4.375rem !important;
  }
  .gap-lg-80 {
    gap: 5rem !important;
  }
  .gap-lg-90 {
    gap: 5.625rem !important;
  }
  .gap-lg-100 {
    gap: 6.25rem !important;
  }
  .gap-lg-120 {
    gap: 7.5rem !important;
  }
  .gap-lg-140 {
    gap: 8.75rem !important;
  }
  .gap-lg-160 {
    gap: 10rem !important;
  }
  .gap-lg-180 {
    gap: 11.5rem !important;
  }
  .gap-lg-200 {
    gap: 12.5rem !important;
  }
  .gap-lg-300 {
    gap: 18.75rem !important;
  }
  .row-gap-lg-0 {
    row-gap: 0 !important;
  }
  .row-gap-lg-5 {
    row-gap: 0.3125rem !important;
  }
  .row-gap-lg-10 {
    row-gap: 0.625rem !important;
  }
  .row-gap-lg-15 {
    row-gap: 0.9375rem !important;
  }
  .row-gap-lg-20 {
    row-gap: 1.25rem !important;
  }
  .row-gap-lg-25 {
    row-gap: 1.5625rem !important;
  }
  .row-gap-lg-30 {
    row-gap: 1.875rem !important;
  }
  .row-gap-lg-35 {
    row-gap: 2.1875rem !important;
  }
  .row-gap-lg-40 {
    row-gap: 2.5rem !important;
  }
  .row-gap-lg-45 {
    row-gap: 2.8125rem !important;
  }
  .row-gap-lg-50 {
    row-gap: 3.125rem !important;
  }
  .row-gap-lg-60 {
    row-gap: 3.75rem !important;
  }
  .row-gap-lg-70 {
    row-gap: 4.375rem !important;
  }
  .row-gap-lg-80 {
    row-gap: 5rem !important;
  }
  .row-gap-lg-90 {
    row-gap: 5.625rem !important;
  }
  .row-gap-lg-100 {
    row-gap: 6.25rem !important;
  }
  .row-gap-lg-120 {
    row-gap: 7.5rem !important;
  }
  .row-gap-lg-140 {
    row-gap: 8.75rem !important;
  }
  .row-gap-lg-160 {
    row-gap: 10rem !important;
  }
  .row-gap-lg-180 {
    row-gap: 11.5rem !important;
  }
  .row-gap-lg-200 {
    row-gap: 12.5rem !important;
  }
  .row-gap-lg-300 {
    row-gap: 18.75rem !important;
  }
  .column-gap-lg-0 {
    column-gap: 0 !important;
  }
  .column-gap-lg-5 {
    column-gap: 0.3125rem !important;
  }
  .column-gap-lg-10 {
    column-gap: 0.625rem !important;
  }
  .column-gap-lg-15 {
    column-gap: 0.9375rem !important;
  }
  .column-gap-lg-20 {
    column-gap: 1.25rem !important;
  }
  .column-gap-lg-25 {
    column-gap: 1.5625rem !important;
  }
  .column-gap-lg-30 {
    column-gap: 1.875rem !important;
  }
  .column-gap-lg-35 {
    column-gap: 2.1875rem !important;
  }
  .column-gap-lg-40 {
    column-gap: 2.5rem !important;
  }
  .column-gap-lg-45 {
    column-gap: 2.8125rem !important;
  }
  .column-gap-lg-50 {
    column-gap: 3.125rem !important;
  }
  .column-gap-lg-60 {
    column-gap: 3.75rem !important;
  }
  .column-gap-lg-70 {
    column-gap: 4.375rem !important;
  }
  .column-gap-lg-80 {
    column-gap: 5rem !important;
  }
  .column-gap-lg-90 {
    column-gap: 5.625rem !important;
  }
  .column-gap-lg-100 {
    column-gap: 6.25rem !important;
  }
  .column-gap-lg-120 {
    column-gap: 7.5rem !important;
  }
  .column-gap-lg-140 {
    column-gap: 8.75rem !important;
  }
  .column-gap-lg-160 {
    column-gap: 10rem !important;
  }
  .column-gap-lg-180 {
    column-gap: 11.5rem !important;
  }
  .column-gap-lg-200 {
    column-gap: 12.5rem !important;
  }
  .column-gap-lg-300 {
    column-gap: 18.75rem !important;
  }
  .fs-lg-1 {
    font-size: calc(1.6rem + 4.2vw) !important;
  }
  .fs-lg-2 {
    font-size: calc(1.5rem + 3vw) !important;
  }
  .fs-lg-3 {
    font-size: calc(1.4375rem + 2.25vw) !important;
  }
  .fs-lg-4 {
    font-size: calc(1.3875rem + 1.65vw) !important;
  }
  .fs-lg-5 {
    font-size: calc(1.35rem + 1.2vw) !important;
  }
  .fs-lg-6 {
    font-size: calc(1.3125rem + 0.75vw) !important;
  }
  .fs-lg-base {
    font-size: 1rem !important;
  }
  .fs-lg-xxs {
    font-size: 0.625rem !important;
  }
  .fs-lg-xs {
    font-size: 0.75rem !important;
  }
  .fs-lg-sm {
    font-size: 0.875rem !important;
  }
  .fs-lg-md {
    font-size: 1.125rem !important;
  }
  .fs-lg-lg {
    font-size: 1.25rem !important;
  }
  .fs-lg-xl {
    font-size: calc(1.2625rem + 0.15vw) !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
  .text-lg-end {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1260px) {
  .float-xl-start {
    float: left !important;
  }
  .float-xl-end {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .object-fit-xl-contain {
    object-fit: contain !important;
  }
  .object-fit-xl-cover {
    object-fit: cover !important;
  }
  .object-fit-xl-fill {
    object-fit: fill !important;
  }
  .object-fit-xl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xl-none {
    object-fit: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-inline-grid {
    display: inline-grid !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .w-xl-25 {
    width: 25% !important;
  }
  .w-xl-50 {
    width: 50% !important;
  }
  .w-xl-75 {
    width: 75% !important;
  }
  .w-xl-100 {
    width: 100% !important;
  }
  .w-xl-auto {
    width: auto !important;
  }
  .w-xl-10 {
    width: 10% !important;
  }
  .w-xl-20 {
    width: 20% !important;
  }
  .w-xl-30 {
    width: 30% !important;
  }
  .w-xl-40 {
    width: 40% !important;
  }
  .w-xl-60 {
    width: 60% !important;
  }
  .w-xl-70 {
    width: 70% !important;
  }
  .w-xl-80 {
    width: 80% !important;
  }
  .w-xl-90 {
    width: 90% !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-last {
    order: 6 !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .m-xl-5 {
    margin: 0.3125rem !important;
  }
  .m-xl-10 {
    margin: 0.625rem !important;
  }
  .m-xl-15 {
    margin: 0.9375rem !important;
  }
  .m-xl-20 {
    margin: 1.25rem !important;
  }
  .m-xl-25 {
    margin: 1.5625rem !important;
  }
  .m-xl-30 {
    margin: 1.875rem !important;
  }
  .m-xl-35 {
    margin: 2.1875rem !important;
  }
  .m-xl-40 {
    margin: 2.5rem !important;
  }
  .m-xl-45 {
    margin: 2.8125rem !important;
  }
  .m-xl-50 {
    margin: 3.125rem !important;
  }
  .m-xl-60 {
    margin: 3.75rem !important;
  }
  .m-xl-70 {
    margin: 4.375rem !important;
  }
  .m-xl-80 {
    margin: 5rem !important;
  }
  .m-xl-90 {
    margin: 5.625rem !important;
  }
  .m-xl-100 {
    margin: 6.25rem !important;
  }
  .m-xl-120 {
    margin: 7.5rem !important;
  }
  .m-xl-140 {
    margin: 8.75rem !important;
  }
  .m-xl-160 {
    margin: 10rem !important;
  }
  .m-xl-180 {
    margin: 11.5rem !important;
  }
  .m-xl-200 {
    margin: 12.5rem !important;
  }
  .m-xl-300 {
    margin: 18.75rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xl-5 {
    margin-right: 0.3125rem !important;
    margin-left: 0.3125rem !important;
  }
  .mx-xl-10 {
    margin-right: 0.625rem !important;
    margin-left: 0.625rem !important;
  }
  .mx-xl-15 {
    margin-right: 0.9375rem !important;
    margin-left: 0.9375rem !important;
  }
  .mx-xl-20 {
    margin-right: 1.25rem !important;
    margin-left: 1.25rem !important;
  }
  .mx-xl-25 {
    margin-right: 1.5625rem !important;
    margin-left: 1.5625rem !important;
  }
  .mx-xl-30 {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }
  .mx-xl-35 {
    margin-right: 2.1875rem !important;
    margin-left: 2.1875rem !important;
  }
  .mx-xl-40 {
    margin-right: 2.5rem !important;
    margin-left: 2.5rem !important;
  }
  .mx-xl-45 {
    margin-right: 2.8125rem !important;
    margin-left: 2.8125rem !important;
  }
  .mx-xl-50 {
    margin-right: 3.125rem !important;
    margin-left: 3.125rem !important;
  }
  .mx-xl-60 {
    margin-right: 3.75rem !important;
    margin-left: 3.75rem !important;
  }
  .mx-xl-70 {
    margin-right: 4.375rem !important;
    margin-left: 4.375rem !important;
  }
  .mx-xl-80 {
    margin-right: 5rem !important;
    margin-left: 5rem !important;
  }
  .mx-xl-90 {
    margin-right: 5.625rem !important;
    margin-left: 5.625rem !important;
  }
  .mx-xl-100 {
    margin-right: 6.25rem !important;
    margin-left: 6.25rem !important;
  }
  .mx-xl-120 {
    margin-right: 7.5rem !important;
    margin-left: 7.5rem !important;
  }
  .mx-xl-140 {
    margin-right: 8.75rem !important;
    margin-left: 8.75rem !important;
  }
  .mx-xl-160 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }
  .mx-xl-180 {
    margin-right: 11.5rem !important;
    margin-left: 11.5rem !important;
  }
  .mx-xl-200 {
    margin-right: 12.5rem !important;
    margin-left: 12.5rem !important;
  }
  .mx-xl-300 {
    margin-right: 18.75rem !important;
    margin-left: 18.75rem !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xl-5 {
    margin-top: 0.3125rem !important;
    margin-bottom: 0.3125rem !important;
  }
  .my-xl-10 {
    margin-top: 0.625rem !important;
    margin-bottom: 0.625rem !important;
  }
  .my-xl-15 {
    margin-top: 0.9375rem !important;
    margin-bottom: 0.9375rem !important;
  }
  .my-xl-20 {
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
  }
  .my-xl-25 {
    margin-top: 1.5625rem !important;
    margin-bottom: 1.5625rem !important;
  }
  .my-xl-30 {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }
  .my-xl-35 {
    margin-top: 2.1875rem !important;
    margin-bottom: 2.1875rem !important;
  }
  .my-xl-40 {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }
  .my-xl-45 {
    margin-top: 2.8125rem !important;
    margin-bottom: 2.8125rem !important;
  }
  .my-xl-50 {
    margin-top: 3.125rem !important;
    margin-bottom: 3.125rem !important;
  }
  .my-xl-60 {
    margin-top: 3.75rem !important;
    margin-bottom: 3.75rem !important;
  }
  .my-xl-70 {
    margin-top: 4.375rem !important;
    margin-bottom: 4.375rem !important;
  }
  .my-xl-80 {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
  }
  .my-xl-90 {
    margin-top: 5.625rem !important;
    margin-bottom: 5.625rem !important;
  }
  .my-xl-100 {
    margin-top: 6.25rem !important;
    margin-bottom: 6.25rem !important;
  }
  .my-xl-120 {
    margin-top: 7.5rem !important;
    margin-bottom: 7.5rem !important;
  }
  .my-xl-140 {
    margin-top: 8.75rem !important;
    margin-bottom: 8.75rem !important;
  }
  .my-xl-160 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }
  .my-xl-180 {
    margin-top: 11.5rem !important;
    margin-bottom: 11.5rem !important;
  }
  .my-xl-200 {
    margin-top: 12.5rem !important;
    margin-bottom: 12.5rem !important;
  }
  .my-xl-300 {
    margin-top: 18.75rem !important;
    margin-bottom: 18.75rem !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mt-xl-5 {
    margin-top: 0.3125rem !important;
  }
  .mt-xl-10 {
    margin-top: 0.625rem !important;
  }
  .mt-xl-15 {
    margin-top: 0.9375rem !important;
  }
  .mt-xl-20 {
    margin-top: 1.25rem !important;
  }
  .mt-xl-25 {
    margin-top: 1.5625rem !important;
  }
  .mt-xl-30 {
    margin-top: 1.875rem !important;
  }
  .mt-xl-35 {
    margin-top: 2.1875rem !important;
  }
  .mt-xl-40 {
    margin-top: 2.5rem !important;
  }
  .mt-xl-45 {
    margin-top: 2.8125rem !important;
  }
  .mt-xl-50 {
    margin-top: 3.125rem !important;
  }
  .mt-xl-60 {
    margin-top: 3.75rem !important;
  }
  .mt-xl-70 {
    margin-top: 4.375rem !important;
  }
  .mt-xl-80 {
    margin-top: 5rem !important;
  }
  .mt-xl-90 {
    margin-top: 5.625rem !important;
  }
  .mt-xl-100 {
    margin-top: 6.25rem !important;
  }
  .mt-xl-120 {
    margin-top: 7.5rem !important;
  }
  .mt-xl-140 {
    margin-top: 8.75rem !important;
  }
  .mt-xl-160 {
    margin-top: 10rem !important;
  }
  .mt-xl-180 {
    margin-top: 11.5rem !important;
  }
  .mt-xl-200 {
    margin-top: 12.5rem !important;
  }
  .mt-xl-300 {
    margin-top: 18.75rem !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .me-xl-0 {
    margin-right: 0 !important;
  }
  .me-xl-5 {
    margin-right: 0.3125rem !important;
  }
  .me-xl-10 {
    margin-right: 0.625rem !important;
  }
  .me-xl-15 {
    margin-right: 0.9375rem !important;
  }
  .me-xl-20 {
    margin-right: 1.25rem !important;
  }
  .me-xl-25 {
    margin-right: 1.5625rem !important;
  }
  .me-xl-30 {
    margin-right: 1.875rem !important;
  }
  .me-xl-35 {
    margin-right: 2.1875rem !important;
  }
  .me-xl-40 {
    margin-right: 2.5rem !important;
  }
  .me-xl-45 {
    margin-right: 2.8125rem !important;
  }
  .me-xl-50 {
    margin-right: 3.125rem !important;
  }
  .me-xl-60 {
    margin-right: 3.75rem !important;
  }
  .me-xl-70 {
    margin-right: 4.375rem !important;
  }
  .me-xl-80 {
    margin-right: 5rem !important;
  }
  .me-xl-90 {
    margin-right: 5.625rem !important;
  }
  .me-xl-100 {
    margin-right: 6.25rem !important;
  }
  .me-xl-120 {
    margin-right: 7.5rem !important;
  }
  .me-xl-140 {
    margin-right: 8.75rem !important;
  }
  .me-xl-160 {
    margin-right: 10rem !important;
  }
  .me-xl-180 {
    margin-right: 11.5rem !important;
  }
  .me-xl-200 {
    margin-right: 12.5rem !important;
  }
  .me-xl-300 {
    margin-right: 18.75rem !important;
  }
  .me-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xl-5 {
    margin-bottom: 0.3125rem !important;
  }
  .mb-xl-10 {
    margin-bottom: 0.625rem !important;
  }
  .mb-xl-15 {
    margin-bottom: 0.9375rem !important;
  }
  .mb-xl-20 {
    margin-bottom: 1.25rem !important;
  }
  .mb-xl-25 {
    margin-bottom: 1.5625rem !important;
  }
  .mb-xl-30 {
    margin-bottom: 1.875rem !important;
  }
  .mb-xl-35 {
    margin-bottom: 2.1875rem !important;
  }
  .mb-xl-40 {
    margin-bottom: 2.5rem !important;
  }
  .mb-xl-45 {
    margin-bottom: 2.8125rem !important;
  }
  .mb-xl-50 {
    margin-bottom: 3.125rem !important;
  }
  .mb-xl-60 {
    margin-bottom: 3.75rem !important;
  }
  .mb-xl-70 {
    margin-bottom: 4.375rem !important;
  }
  .mb-xl-80 {
    margin-bottom: 5rem !important;
  }
  .mb-xl-90 {
    margin-bottom: 5.625rem !important;
  }
  .mb-xl-100 {
    margin-bottom: 6.25rem !important;
  }
  .mb-xl-120 {
    margin-bottom: 7.5rem !important;
  }
  .mb-xl-140 {
    margin-bottom: 8.75rem !important;
  }
  .mb-xl-160 {
    margin-bottom: 10rem !important;
  }
  .mb-xl-180 {
    margin-bottom: 11.5rem !important;
  }
  .mb-xl-200 {
    margin-bottom: 12.5rem !important;
  }
  .mb-xl-300 {
    margin-bottom: 18.75rem !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ms-xl-0 {
    margin-left: 0 !important;
  }
  .ms-xl-5 {
    margin-left: 0.3125rem !important;
  }
  .ms-xl-10 {
    margin-left: 0.625rem !important;
  }
  .ms-xl-15 {
    margin-left: 0.9375rem !important;
  }
  .ms-xl-20 {
    margin-left: 1.25rem !important;
  }
  .ms-xl-25 {
    margin-left: 1.5625rem !important;
  }
  .ms-xl-30 {
    margin-left: 1.875rem !important;
  }
  .ms-xl-35 {
    margin-left: 2.1875rem !important;
  }
  .ms-xl-40 {
    margin-left: 2.5rem !important;
  }
  .ms-xl-45 {
    margin-left: 2.8125rem !important;
  }
  .ms-xl-50 {
    margin-left: 3.125rem !important;
  }
  .ms-xl-60 {
    margin-left: 3.75rem !important;
  }
  .ms-xl-70 {
    margin-left: 4.375rem !important;
  }
  .ms-xl-80 {
    margin-left: 5rem !important;
  }
  .ms-xl-90 {
    margin-left: 5.625rem !important;
  }
  .ms-xl-100 {
    margin-left: 6.25rem !important;
  }
  .ms-xl-120 {
    margin-left: 7.5rem !important;
  }
  .ms-xl-140 {
    margin-left: 8.75rem !important;
  }
  .ms-xl-160 {
    margin-left: 10rem !important;
  }
  .ms-xl-180 {
    margin-left: 11.5rem !important;
  }
  .ms-xl-200 {
    margin-left: 12.5rem !important;
  }
  .ms-xl-300 {
    margin-left: 18.75rem !important;
  }
  .ms-xl-auto {
    margin-left: auto !important;
  }
  .m-xl-n5 {
    margin: -0.3125rem !important;
  }
  .m-xl-n10 {
    margin: -0.625rem !important;
  }
  .m-xl-n15 {
    margin: -0.9375rem !important;
  }
  .m-xl-n20 {
    margin: -1.25rem !important;
  }
  .m-xl-n25 {
    margin: -1.5625rem !important;
  }
  .m-xl-n30 {
    margin: -1.875rem !important;
  }
  .m-xl-n35 {
    margin: -2.1875rem !important;
  }
  .m-xl-n40 {
    margin: -2.5rem !important;
  }
  .m-xl-n45 {
    margin: -2.8125rem !important;
  }
  .m-xl-n50 {
    margin: -3.125rem !important;
  }
  .m-xl-n60 {
    margin: -3.75rem !important;
  }
  .m-xl-n70 {
    margin: -4.375rem !important;
  }
  .m-xl-n80 {
    margin: -5rem !important;
  }
  .m-xl-n90 {
    margin: -5.625rem !important;
  }
  .m-xl-n100 {
    margin: -6.25rem !important;
  }
  .m-xl-n120 {
    margin: -7.5rem !important;
  }
  .m-xl-n140 {
    margin: -8.75rem !important;
  }
  .m-xl-n160 {
    margin: -10rem !important;
  }
  .m-xl-n180 {
    margin: -11.5rem !important;
  }
  .m-xl-n200 {
    margin: -12.5rem !important;
  }
  .m-xl-n300 {
    margin: -18.75rem !important;
  }
  .mx-xl-n5 {
    margin-right: -0.3125rem !important;
    margin-left: -0.3125rem !important;
  }
  .mx-xl-n10 {
    margin-right: -0.625rem !important;
    margin-left: -0.625rem !important;
  }
  .mx-xl-n15 {
    margin-right: -0.9375rem !important;
    margin-left: -0.9375rem !important;
  }
  .mx-xl-n20 {
    margin-right: -1.25rem !important;
    margin-left: -1.25rem !important;
  }
  .mx-xl-n25 {
    margin-right: -1.5625rem !important;
    margin-left: -1.5625rem !important;
  }
  .mx-xl-n30 {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }
  .mx-xl-n35 {
    margin-right: -2.1875rem !important;
    margin-left: -2.1875rem !important;
  }
  .mx-xl-n40 {
    margin-right: -2.5rem !important;
    margin-left: -2.5rem !important;
  }
  .mx-xl-n45 {
    margin-right: -2.8125rem !important;
    margin-left: -2.8125rem !important;
  }
  .mx-xl-n50 {
    margin-right: -3.125rem !important;
    margin-left: -3.125rem !important;
  }
  .mx-xl-n60 {
    margin-right: -3.75rem !important;
    margin-left: -3.75rem !important;
  }
  .mx-xl-n70 {
    margin-right: -4.375rem !important;
    margin-left: -4.375rem !important;
  }
  .mx-xl-n80 {
    margin-right: -5rem !important;
    margin-left: -5rem !important;
  }
  .mx-xl-n90 {
    margin-right: -5.625rem !important;
    margin-left: -5.625rem !important;
  }
  .mx-xl-n100 {
    margin-right: -6.25rem !important;
    margin-left: -6.25rem !important;
  }
  .mx-xl-n120 {
    margin-right: -7.5rem !important;
    margin-left: -7.5rem !important;
  }
  .mx-xl-n140 {
    margin-right: -8.75rem !important;
    margin-left: -8.75rem !important;
  }
  .mx-xl-n160 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }
  .mx-xl-n180 {
    margin-right: -11.5rem !important;
    margin-left: -11.5rem !important;
  }
  .mx-xl-n200 {
    margin-right: -12.5rem !important;
    margin-left: -12.5rem !important;
  }
  .mx-xl-n300 {
    margin-right: -18.75rem !important;
    margin-left: -18.75rem !important;
  }
  .my-xl-n5 {
    margin-top: -0.3125rem !important;
    margin-bottom: -0.3125rem !important;
  }
  .my-xl-n10 {
    margin-top: -0.625rem !important;
    margin-bottom: -0.625rem !important;
  }
  .my-xl-n15 {
    margin-top: -0.9375rem !important;
    margin-bottom: -0.9375rem !important;
  }
  .my-xl-n20 {
    margin-top: -1.25rem !important;
    margin-bottom: -1.25rem !important;
  }
  .my-xl-n25 {
    margin-top: -1.5625rem !important;
    margin-bottom: -1.5625rem !important;
  }
  .my-xl-n30 {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }
  .my-xl-n35 {
    margin-top: -2.1875rem !important;
    margin-bottom: -2.1875rem !important;
  }
  .my-xl-n40 {
    margin-top: -2.5rem !important;
    margin-bottom: -2.5rem !important;
  }
  .my-xl-n45 {
    margin-top: -2.8125rem !important;
    margin-bottom: -2.8125rem !important;
  }
  .my-xl-n50 {
    margin-top: -3.125rem !important;
    margin-bottom: -3.125rem !important;
  }
  .my-xl-n60 {
    margin-top: -3.75rem !important;
    margin-bottom: -3.75rem !important;
  }
  .my-xl-n70 {
    margin-top: -4.375rem !important;
    margin-bottom: -4.375rem !important;
  }
  .my-xl-n80 {
    margin-top: -5rem !important;
    margin-bottom: -5rem !important;
  }
  .my-xl-n90 {
    margin-top: -5.625rem !important;
    margin-bottom: -5.625rem !important;
  }
  .my-xl-n100 {
    margin-top: -6.25rem !important;
    margin-bottom: -6.25rem !important;
  }
  .my-xl-n120 {
    margin-top: -7.5rem !important;
    margin-bottom: -7.5rem !important;
  }
  .my-xl-n140 {
    margin-top: -8.75rem !important;
    margin-bottom: -8.75rem !important;
  }
  .my-xl-n160 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }
  .my-xl-n180 {
    margin-top: -11.5rem !important;
    margin-bottom: -11.5rem !important;
  }
  .my-xl-n200 {
    margin-top: -12.5rem !important;
    margin-bottom: -12.5rem !important;
  }
  .my-xl-n300 {
    margin-top: -18.75rem !important;
    margin-bottom: -18.75rem !important;
  }
  .mt-xl-n5 {
    margin-top: -0.3125rem !important;
  }
  .mt-xl-n10 {
    margin-top: -0.625rem !important;
  }
  .mt-xl-n15 {
    margin-top: -0.9375rem !important;
  }
  .mt-xl-n20 {
    margin-top: -1.25rem !important;
  }
  .mt-xl-n25 {
    margin-top: -1.5625rem !important;
  }
  .mt-xl-n30 {
    margin-top: -1.875rem !important;
  }
  .mt-xl-n35 {
    margin-top: -2.1875rem !important;
  }
  .mt-xl-n40 {
    margin-top: -2.5rem !important;
  }
  .mt-xl-n45 {
    margin-top: -2.8125rem !important;
  }
  .mt-xl-n50 {
    margin-top: -3.125rem !important;
  }
  .mt-xl-n60 {
    margin-top: -3.75rem !important;
  }
  .mt-xl-n70 {
    margin-top: -4.375rem !important;
  }
  .mt-xl-n80 {
    margin-top: -5rem !important;
  }
  .mt-xl-n90 {
    margin-top: -5.625rem !important;
  }
  .mt-xl-n100 {
    margin-top: -6.25rem !important;
  }
  .mt-xl-n120 {
    margin-top: -7.5rem !important;
  }
  .mt-xl-n140 {
    margin-top: -8.75rem !important;
  }
  .mt-xl-n160 {
    margin-top: -10rem !important;
  }
  .mt-xl-n180 {
    margin-top: -11.5rem !important;
  }
  .mt-xl-n200 {
    margin-top: -12.5rem !important;
  }
  .mt-xl-n300 {
    margin-top: -18.75rem !important;
  }
  .me-xl-n5 {
    margin-right: -0.3125rem !important;
  }
  .me-xl-n10 {
    margin-right: -0.625rem !important;
  }
  .me-xl-n15 {
    margin-right: -0.9375rem !important;
  }
  .me-xl-n20 {
    margin-right: -1.25rem !important;
  }
  .me-xl-n25 {
    margin-right: -1.5625rem !important;
  }
  .me-xl-n30 {
    margin-right: -1.875rem !important;
  }
  .me-xl-n35 {
    margin-right: -2.1875rem !important;
  }
  .me-xl-n40 {
    margin-right: -2.5rem !important;
  }
  .me-xl-n45 {
    margin-right: -2.8125rem !important;
  }
  .me-xl-n50 {
    margin-right: -3.125rem !important;
  }
  .me-xl-n60 {
    margin-right: -3.75rem !important;
  }
  .me-xl-n70 {
    margin-right: -4.375rem !important;
  }
  .me-xl-n80 {
    margin-right: -5rem !important;
  }
  .me-xl-n90 {
    margin-right: -5.625rem !important;
  }
  .me-xl-n100 {
    margin-right: -6.25rem !important;
  }
  .me-xl-n120 {
    margin-right: -7.5rem !important;
  }
  .me-xl-n140 {
    margin-right: -8.75rem !important;
  }
  .me-xl-n160 {
    margin-right: -10rem !important;
  }
  .me-xl-n180 {
    margin-right: -11.5rem !important;
  }
  .me-xl-n200 {
    margin-right: -12.5rem !important;
  }
  .me-xl-n300 {
    margin-right: -18.75rem !important;
  }
  .mb-xl-n5 {
    margin-bottom: -0.3125rem !important;
  }
  .mb-xl-n10 {
    margin-bottom: -0.625rem !important;
  }
  .mb-xl-n15 {
    margin-bottom: -0.9375rem !important;
  }
  .mb-xl-n20 {
    margin-bottom: -1.25rem !important;
  }
  .mb-xl-n25 {
    margin-bottom: -1.5625rem !important;
  }
  .mb-xl-n30 {
    margin-bottom: -1.875rem !important;
  }
  .mb-xl-n35 {
    margin-bottom: -2.1875rem !important;
  }
  .mb-xl-n40 {
    margin-bottom: -2.5rem !important;
  }
  .mb-xl-n45 {
    margin-bottom: -2.8125rem !important;
  }
  .mb-xl-n50 {
    margin-bottom: -3.125rem !important;
  }
  .mb-xl-n60 {
    margin-bottom: -3.75rem !important;
  }
  .mb-xl-n70 {
    margin-bottom: -4.375rem !important;
  }
  .mb-xl-n80 {
    margin-bottom: -5rem !important;
  }
  .mb-xl-n90 {
    margin-bottom: -5.625rem !important;
  }
  .mb-xl-n100 {
    margin-bottom: -6.25rem !important;
  }
  .mb-xl-n120 {
    margin-bottom: -7.5rem !important;
  }
  .mb-xl-n140 {
    margin-bottom: -8.75rem !important;
  }
  .mb-xl-n160 {
    margin-bottom: -10rem !important;
  }
  .mb-xl-n180 {
    margin-bottom: -11.5rem !important;
  }
  .mb-xl-n200 {
    margin-bottom: -12.5rem !important;
  }
  .mb-xl-n300 {
    margin-bottom: -18.75rem !important;
  }
  .ms-xl-n5 {
    margin-left: -0.3125rem !important;
  }
  .ms-xl-n10 {
    margin-left: -0.625rem !important;
  }
  .ms-xl-n15 {
    margin-left: -0.9375rem !important;
  }
  .ms-xl-n20 {
    margin-left: -1.25rem !important;
  }
  .ms-xl-n25 {
    margin-left: -1.5625rem !important;
  }
  .ms-xl-n30 {
    margin-left: -1.875rem !important;
  }
  .ms-xl-n35 {
    margin-left: -2.1875rem !important;
  }
  .ms-xl-n40 {
    margin-left: -2.5rem !important;
  }
  .ms-xl-n45 {
    margin-left: -2.8125rem !important;
  }
  .ms-xl-n50 {
    margin-left: -3.125rem !important;
  }
  .ms-xl-n60 {
    margin-left: -3.75rem !important;
  }
  .ms-xl-n70 {
    margin-left: -4.375rem !important;
  }
  .ms-xl-n80 {
    margin-left: -5rem !important;
  }
  .ms-xl-n90 {
    margin-left: -5.625rem !important;
  }
  .ms-xl-n100 {
    margin-left: -6.25rem !important;
  }
  .ms-xl-n120 {
    margin-left: -7.5rem !important;
  }
  .ms-xl-n140 {
    margin-left: -8.75rem !important;
  }
  .ms-xl-n160 {
    margin-left: -10rem !important;
  }
  .ms-xl-n180 {
    margin-left: -11.5rem !important;
  }
  .ms-xl-n200 {
    margin-left: -12.5rem !important;
  }
  .ms-xl-n300 {
    margin-left: -18.75rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .p-xl-5 {
    padding: 0.3125rem !important;
  }
  .p-xl-10 {
    padding: 0.625rem !important;
  }
  .p-xl-15 {
    padding: 0.9375rem !important;
  }
  .p-xl-20 {
    padding: 1.25rem !important;
  }
  .p-xl-25 {
    padding: 1.5625rem !important;
  }
  .p-xl-30 {
    padding: 1.875rem !important;
  }
  .p-xl-35 {
    padding: 2.1875rem !important;
  }
  .p-xl-40 {
    padding: 2.5rem !important;
  }
  .p-xl-45 {
    padding: 2.8125rem !important;
  }
  .p-xl-50 {
    padding: 3.125rem !important;
  }
  .p-xl-60 {
    padding: 3.75rem !important;
  }
  .p-xl-70 {
    padding: 4.375rem !important;
  }
  .p-xl-80 {
    padding: 5rem !important;
  }
  .p-xl-90 {
    padding: 5.625rem !important;
  }
  .p-xl-100 {
    padding: 6.25rem !important;
  }
  .p-xl-120 {
    padding: 7.5rem !important;
  }
  .p-xl-140 {
    padding: 8.75rem !important;
  }
  .p-xl-160 {
    padding: 10rem !important;
  }
  .p-xl-180 {
    padding: 11.5rem !important;
  }
  .p-xl-200 {
    padding: 12.5rem !important;
  }
  .p-xl-300 {
    padding: 18.75rem !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xl-5 {
    padding-right: 0.3125rem !important;
    padding-left: 0.3125rem !important;
  }
  .px-xl-10 {
    padding-right: 0.625rem !important;
    padding-left: 0.625rem !important;
  }
  .px-xl-15 {
    padding-right: 0.9375rem !important;
    padding-left: 0.9375rem !important;
  }
  .px-xl-20 {
    padding-right: 1.25rem !important;
    padding-left: 1.25rem !important;
  }
  .px-xl-25 {
    padding-right: 1.5625rem !important;
    padding-left: 1.5625rem !important;
  }
  .px-xl-30 {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }
  .px-xl-35 {
    padding-right: 2.1875rem !important;
    padding-left: 2.1875rem !important;
  }
  .px-xl-40 {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
  }
  .px-xl-45 {
    padding-right: 2.8125rem !important;
    padding-left: 2.8125rem !important;
  }
  .px-xl-50 {
    padding-right: 3.125rem !important;
    padding-left: 3.125rem !important;
  }
  .px-xl-60 {
    padding-right: 3.75rem !important;
    padding-left: 3.75rem !important;
  }
  .px-xl-70 {
    padding-right: 4.375rem !important;
    padding-left: 4.375rem !important;
  }
  .px-xl-80 {
    padding-right: 5rem !important;
    padding-left: 5rem !important;
  }
  .px-xl-90 {
    padding-right: 5.625rem !important;
    padding-left: 5.625rem !important;
  }
  .px-xl-100 {
    padding-right: 6.25rem !important;
    padding-left: 6.25rem !important;
  }
  .px-xl-120 {
    padding-right: 7.5rem !important;
    padding-left: 7.5rem !important;
  }
  .px-xl-140 {
    padding-right: 8.75rem !important;
    padding-left: 8.75rem !important;
  }
  .px-xl-160 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }
  .px-xl-180 {
    padding-right: 11.5rem !important;
    padding-left: 11.5rem !important;
  }
  .px-xl-200 {
    padding-right: 12.5rem !important;
    padding-left: 12.5rem !important;
  }
  .px-xl-300 {
    padding-right: 18.75rem !important;
    padding-left: 18.75rem !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xl-5 {
    padding-top: 0.3125rem !important;
    padding-bottom: 0.3125rem !important;
  }
  .py-xl-10 {
    padding-top: 0.625rem !important;
    padding-bottom: 0.625rem !important;
  }
  .py-xl-15 {
    padding-top: 0.9375rem !important;
    padding-bottom: 0.9375rem !important;
  }
  .py-xl-20 {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
  .py-xl-25 {
    padding-top: 1.5625rem !important;
    padding-bottom: 1.5625rem !important;
  }
  .py-xl-30 {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }
  .py-xl-35 {
    padding-top: 2.1875rem !important;
    padding-bottom: 2.1875rem !important;
  }
  .py-xl-40 {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }
  .py-xl-45 {
    padding-top: 2.8125rem !important;
    padding-bottom: 2.8125rem !important;
  }
  .py-xl-50 {
    padding-top: 3.125rem !important;
    padding-bottom: 3.125rem !important;
  }
  .py-xl-60 {
    padding-top: 3.75rem !important;
    padding-bottom: 3.75rem !important;
  }
  .py-xl-70 {
    padding-top: 4.375rem !important;
    padding-bottom: 4.375rem !important;
  }
  .py-xl-80 {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }
  .py-xl-90 {
    padding-top: 5.625rem !important;
    padding-bottom: 5.625rem !important;
  }
  .py-xl-100 {
    padding-top: 6.25rem !important;
    padding-bottom: 6.25rem !important;
  }
  .py-xl-120 {
    padding-top: 7.5rem !important;
    padding-bottom: 7.5rem !important;
  }
  .py-xl-140 {
    padding-top: 8.75rem !important;
    padding-bottom: 8.75rem !important;
  }
  .py-xl-160 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }
  .py-xl-180 {
    padding-top: 11.5rem !important;
    padding-bottom: 11.5rem !important;
  }
  .py-xl-200 {
    padding-top: 12.5rem !important;
    padding-bottom: 12.5rem !important;
  }
  .py-xl-300 {
    padding-top: 18.75rem !important;
    padding-bottom: 18.75rem !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pt-xl-5 {
    padding-top: 0.3125rem !important;
  }
  .pt-xl-10 {
    padding-top: 0.625rem !important;
  }
  .pt-xl-15 {
    padding-top: 0.9375rem !important;
  }
  .pt-xl-20 {
    padding-top: 1.25rem !important;
  }
  .pt-xl-25 {
    padding-top: 1.5625rem !important;
  }
  .pt-xl-30 {
    padding-top: 1.875rem !important;
  }
  .pt-xl-35 {
    padding-top: 2.1875rem !important;
  }
  .pt-xl-40 {
    padding-top: 2.5rem !important;
  }
  .pt-xl-45 {
    padding-top: 2.8125rem !important;
  }
  .pt-xl-50 {
    padding-top: 3.125rem !important;
  }
  .pt-xl-60 {
    padding-top: 3.75rem !important;
  }
  .pt-xl-70 {
    padding-top: 4.375rem !important;
  }
  .pt-xl-80 {
    padding-top: 5rem !important;
  }
  .pt-xl-90 {
    padding-top: 5.625rem !important;
  }
  .pt-xl-100 {
    padding-top: 6.25rem !important;
  }
  .pt-xl-120 {
    padding-top: 7.5rem !important;
  }
  .pt-xl-140 {
    padding-top: 8.75rem !important;
  }
  .pt-xl-160 {
    padding-top: 10rem !important;
  }
  .pt-xl-180 {
    padding-top: 11.5rem !important;
  }
  .pt-xl-200 {
    padding-top: 12.5rem !important;
  }
  .pt-xl-300 {
    padding-top: 18.75rem !important;
  }
  .pe-xl-0 {
    padding-right: 0 !important;
  }
  .pe-xl-5 {
    padding-right: 0.3125rem !important;
  }
  .pe-xl-10 {
    padding-right: 0.625rem !important;
  }
  .pe-xl-15 {
    padding-right: 0.9375rem !important;
  }
  .pe-xl-20 {
    padding-right: 1.25rem !important;
  }
  .pe-xl-25 {
    padding-right: 1.5625rem !important;
  }
  .pe-xl-30 {
    padding-right: 1.875rem !important;
  }
  .pe-xl-35 {
    padding-right: 2.1875rem !important;
  }
  .pe-xl-40 {
    padding-right: 2.5rem !important;
  }
  .pe-xl-45 {
    padding-right: 2.8125rem !important;
  }
  .pe-xl-50 {
    padding-right: 3.125rem !important;
  }
  .pe-xl-60 {
    padding-right: 3.75rem !important;
  }
  .pe-xl-70 {
    padding-right: 4.375rem !important;
  }
  .pe-xl-80 {
    padding-right: 5rem !important;
  }
  .pe-xl-90 {
    padding-right: 5.625rem !important;
  }
  .pe-xl-100 {
    padding-right: 6.25rem !important;
  }
  .pe-xl-120 {
    padding-right: 7.5rem !important;
  }
  .pe-xl-140 {
    padding-right: 8.75rem !important;
  }
  .pe-xl-160 {
    padding-right: 10rem !important;
  }
  .pe-xl-180 {
    padding-right: 11.5rem !important;
  }
  .pe-xl-200 {
    padding-right: 12.5rem !important;
  }
  .pe-xl-300 {
    padding-right: 18.75rem !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xl-5 {
    padding-bottom: 0.3125rem !important;
  }
  .pb-xl-10 {
    padding-bottom: 0.625rem !important;
  }
  .pb-xl-15 {
    padding-bottom: 0.9375rem !important;
  }
  .pb-xl-20 {
    padding-bottom: 1.25rem !important;
  }
  .pb-xl-25 {
    padding-bottom: 1.5625rem !important;
  }
  .pb-xl-30 {
    padding-bottom: 1.875rem !important;
  }
  .pb-xl-35 {
    padding-bottom: 2.1875rem !important;
  }
  .pb-xl-40 {
    padding-bottom: 2.5rem !important;
  }
  .pb-xl-45 {
    padding-bottom: 2.8125rem !important;
  }
  .pb-xl-50 {
    padding-bottom: 3.125rem !important;
  }
  .pb-xl-60 {
    padding-bottom: 3.75rem !important;
  }
  .pb-xl-70 {
    padding-bottom: 4.375rem !important;
  }
  .pb-xl-80 {
    padding-bottom: 5rem !important;
  }
  .pb-xl-90 {
    padding-bottom: 5.625rem !important;
  }
  .pb-xl-100 {
    padding-bottom: 6.25rem !important;
  }
  .pb-xl-120 {
    padding-bottom: 7.5rem !important;
  }
  .pb-xl-140 {
    padding-bottom: 8.75rem !important;
  }
  .pb-xl-160 {
    padding-bottom: 10rem !important;
  }
  .pb-xl-180 {
    padding-bottom: 11.5rem !important;
  }
  .pb-xl-200 {
    padding-bottom: 12.5rem !important;
  }
  .pb-xl-300 {
    padding-bottom: 18.75rem !important;
  }
  .ps-xl-0 {
    padding-left: 0 !important;
  }
  .ps-xl-5 {
    padding-left: 0.3125rem !important;
  }
  .ps-xl-10 {
    padding-left: 0.625rem !important;
  }
  .ps-xl-15 {
    padding-left: 0.9375rem !important;
  }
  .ps-xl-20 {
    padding-left: 1.25rem !important;
  }
  .ps-xl-25 {
    padding-left: 1.5625rem !important;
  }
  .ps-xl-30 {
    padding-left: 1.875rem !important;
  }
  .ps-xl-35 {
    padding-left: 2.1875rem !important;
  }
  .ps-xl-40 {
    padding-left: 2.5rem !important;
  }
  .ps-xl-45 {
    padding-left: 2.8125rem !important;
  }
  .ps-xl-50 {
    padding-left: 3.125rem !important;
  }
  .ps-xl-60 {
    padding-left: 3.75rem !important;
  }
  .ps-xl-70 {
    padding-left: 4.375rem !important;
  }
  .ps-xl-80 {
    padding-left: 5rem !important;
  }
  .ps-xl-90 {
    padding-left: 5.625rem !important;
  }
  .ps-xl-100 {
    padding-left: 6.25rem !important;
  }
  .ps-xl-120 {
    padding-left: 7.5rem !important;
  }
  .ps-xl-140 {
    padding-left: 8.75rem !important;
  }
  .ps-xl-160 {
    padding-left: 10rem !important;
  }
  .ps-xl-180 {
    padding-left: 11.5rem !important;
  }
  .ps-xl-200 {
    padding-left: 12.5rem !important;
  }
  .ps-xl-300 {
    padding-left: 18.75rem !important;
  }
  .gap-xl-0 {
    gap: 0 !important;
  }
  .gap-xl-5 {
    gap: 0.3125rem !important;
  }
  .gap-xl-10 {
    gap: 0.625rem !important;
  }
  .gap-xl-15 {
    gap: 0.9375rem !important;
  }
  .gap-xl-20 {
    gap: 1.25rem !important;
  }
  .gap-xl-25 {
    gap: 1.5625rem !important;
  }
  .gap-xl-30 {
    gap: 1.875rem !important;
  }
  .gap-xl-35 {
    gap: 2.1875rem !important;
  }
  .gap-xl-40 {
    gap: 2.5rem !important;
  }
  .gap-xl-45 {
    gap: 2.8125rem !important;
  }
  .gap-xl-50 {
    gap: 3.125rem !important;
  }
  .gap-xl-60 {
    gap: 3.75rem !important;
  }
  .gap-xl-70 {
    gap: 4.375rem !important;
  }
  .gap-xl-80 {
    gap: 5rem !important;
  }
  .gap-xl-90 {
    gap: 5.625rem !important;
  }
  .gap-xl-100 {
    gap: 6.25rem !important;
  }
  .gap-xl-120 {
    gap: 7.5rem !important;
  }
  .gap-xl-140 {
    gap: 8.75rem !important;
  }
  .gap-xl-160 {
    gap: 10rem !important;
  }
  .gap-xl-180 {
    gap: 11.5rem !important;
  }
  .gap-xl-200 {
    gap: 12.5rem !important;
  }
  .gap-xl-300 {
    gap: 18.75rem !important;
  }
  .row-gap-xl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xl-5 {
    row-gap: 0.3125rem !important;
  }
  .row-gap-xl-10 {
    row-gap: 0.625rem !important;
  }
  .row-gap-xl-15 {
    row-gap: 0.9375rem !important;
  }
  .row-gap-xl-20 {
    row-gap: 1.25rem !important;
  }
  .row-gap-xl-25 {
    row-gap: 1.5625rem !important;
  }
  .row-gap-xl-30 {
    row-gap: 1.875rem !important;
  }
  .row-gap-xl-35 {
    row-gap: 2.1875rem !important;
  }
  .row-gap-xl-40 {
    row-gap: 2.5rem !important;
  }
  .row-gap-xl-45 {
    row-gap: 2.8125rem !important;
  }
  .row-gap-xl-50 {
    row-gap: 3.125rem !important;
  }
  .row-gap-xl-60 {
    row-gap: 3.75rem !important;
  }
  .row-gap-xl-70 {
    row-gap: 4.375rem !important;
  }
  .row-gap-xl-80 {
    row-gap: 5rem !important;
  }
  .row-gap-xl-90 {
    row-gap: 5.625rem !important;
  }
  .row-gap-xl-100 {
    row-gap: 6.25rem !important;
  }
  .row-gap-xl-120 {
    row-gap: 7.5rem !important;
  }
  .row-gap-xl-140 {
    row-gap: 8.75rem !important;
  }
  .row-gap-xl-160 {
    row-gap: 10rem !important;
  }
  .row-gap-xl-180 {
    row-gap: 11.5rem !important;
  }
  .row-gap-xl-200 {
    row-gap: 12.5rem !important;
  }
  .row-gap-xl-300 {
    row-gap: 18.75rem !important;
  }
  .column-gap-xl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xl-5 {
    column-gap: 0.3125rem !important;
  }
  .column-gap-xl-10 {
    column-gap: 0.625rem !important;
  }
  .column-gap-xl-15 {
    column-gap: 0.9375rem !important;
  }
  .column-gap-xl-20 {
    column-gap: 1.25rem !important;
  }
  .column-gap-xl-25 {
    column-gap: 1.5625rem !important;
  }
  .column-gap-xl-30 {
    column-gap: 1.875rem !important;
  }
  .column-gap-xl-35 {
    column-gap: 2.1875rem !important;
  }
  .column-gap-xl-40 {
    column-gap: 2.5rem !important;
  }
  .column-gap-xl-45 {
    column-gap: 2.8125rem !important;
  }
  .column-gap-xl-50 {
    column-gap: 3.125rem !important;
  }
  .column-gap-xl-60 {
    column-gap: 3.75rem !important;
  }
  .column-gap-xl-70 {
    column-gap: 4.375rem !important;
  }
  .column-gap-xl-80 {
    column-gap: 5rem !important;
  }
  .column-gap-xl-90 {
    column-gap: 5.625rem !important;
  }
  .column-gap-xl-100 {
    column-gap: 6.25rem !important;
  }
  .column-gap-xl-120 {
    column-gap: 7.5rem !important;
  }
  .column-gap-xl-140 {
    column-gap: 8.75rem !important;
  }
  .column-gap-xl-160 {
    column-gap: 10rem !important;
  }
  .column-gap-xl-180 {
    column-gap: 11.5rem !important;
  }
  .column-gap-xl-200 {
    column-gap: 12.5rem !important;
  }
  .column-gap-xl-300 {
    column-gap: 18.75rem !important;
  }
  .fs-xl-1 {
    font-size: calc(1.6rem + 4.2vw) !important;
  }
  .fs-xl-2 {
    font-size: calc(1.5rem + 3vw) !important;
  }
  .fs-xl-3 {
    font-size: calc(1.4375rem + 2.25vw) !important;
  }
  .fs-xl-4 {
    font-size: calc(1.3875rem + 1.65vw) !important;
  }
  .fs-xl-5 {
    font-size: calc(1.35rem + 1.2vw) !important;
  }
  .fs-xl-6 {
    font-size: calc(1.3125rem + 0.75vw) !important;
  }
  .fs-xl-base {
    font-size: 1rem !important;
  }
  .fs-xl-xxs {
    font-size: 0.625rem !important;
  }
  .fs-xl-xs {
    font-size: 0.75rem !important;
  }
  .fs-xl-sm {
    font-size: 0.875rem !important;
  }
  .fs-xl-md {
    font-size: 1.125rem !important;
  }
  .fs-xl-lg {
    font-size: 1.25rem !important;
  }
  .fs-xl-xl {
    font-size: calc(1.2625rem + 0.15vw) !important;
  }
  .text-xl-start {
    text-align: left !important;
  }
  .text-xl-end {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 4.75rem !important;
  }
  .fs-2 {
    font-size: 3.75rem !important;
  }
  .fs-3 {
    font-size: 3.125rem !important;
  }
  .fs-4 {
    font-size: 2.625rem !important;
  }
  .fs-5 {
    font-size: 2.25rem !important;
  }
  .fs-6 {
    font-size: 1.875rem !important;
  }
  .fs-xl {
    font-size: 1.375rem !important;
  }
  .fs-sm-1 {
    font-size: 4.75rem !important;
  }
  .fs-sm-2 {
    font-size: 3.75rem !important;
  }
  .fs-sm-3 {
    font-size: 3.125rem !important;
  }
  .fs-sm-4 {
    font-size: 2.625rem !important;
  }
  .fs-sm-5 {
    font-size: 2.25rem !important;
  }
  .fs-sm-6 {
    font-size: 1.875rem !important;
  }
  .fs-sm-xl {
    font-size: 1.375rem !important;
  }
  .fs-md-1 {
    font-size: 4.75rem !important;
  }
  .fs-md-2 {
    font-size: 3.75rem !important;
  }
  .fs-md-3 {
    font-size: 3.125rem !important;
  }
  .fs-md-4 {
    font-size: 2.625rem !important;
  }
  .fs-md-5 {
    font-size: 2.25rem !important;
  }
  .fs-md-6 {
    font-size: 1.875rem !important;
  }
  .fs-md-xl {
    font-size: 1.375rem !important;
  }
  .fs-lg-1 {
    font-size: 4.75rem !important;
  }
  .fs-lg-2 {
    font-size: 3.75rem !important;
  }
  .fs-lg-3 {
    font-size: 3.125rem !important;
  }
  .fs-lg-4 {
    font-size: 2.625rem !important;
  }
  .fs-lg-5 {
    font-size: 2.25rem !important;
  }
  .fs-lg-6 {
    font-size: 1.875rem !important;
  }
  .fs-lg-xl {
    font-size: 1.375rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-grid {
    display: grid !important;
  }
  .d-print-inline-grid {
    display: inline-grid !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .d-print-none {
    display: none !important;
  }
}
/* =============================================================================
   ALERTS (extended/_alerts.scss)
   ========================================================================== */
.alert-primary {
  --bs-alert-color: var( --alert-primary-text-color );
  --bs-alert-bg: var( --alert-primary-background );
  --bs-alert-border-color: var( --alert-primary-border-color );
  --bs-alert-padding-x: var( --alert-primary-padding-top );
  --bs-alert-border: var( --alert-primary-border-width ) solid var( --alert-primary-border-color );
  background: var(--alert-primary-background);
  border-radius: var(--alert-primary-border-radius);
  border-style: var(--alert-primary-border-style);
  font-family: var(--alert-primary-text-font-family);
  font-size: var(--alert-primary-text-font-size);
  font-weight: var(--alert-primary-text-font-weight);
  padding: var(--alert-primary-padding-right) var(--alert-primary-padding-top);
}

.alert-secondary {
  --bs-alert-color: var( --alert-secondary-text-color );
  --bs-alert-bg: var( --alert-secondary-background );
  --bs-alert-border-color: var( --alert-secondary-border-color );
  --bs-alert-padding-x: var( --alert-secondary-padding-top );
  --bs-alert-border: var( --alert-secondary-border-width ) solid var( --alert-secondary-border-color );
  background: var(--alert-secondary-background);
  border-radius: var(--alert-secondary-border-radius);
  border-style: var(--alert-secondary-border-style);
  font-family: var(--alert-secondary-text-font-family);
  font-size: var(--alert-secondary-text-font-size);
  font-weight: var(--alert-secondary-text-font-weight);
  padding: var(--alert-secondary-padding-right) var(--alert-secondary-padding-top);
}

.alert-dark {
  --bs-alert-color: var( --alert-dark-text-color );
  --bs-alert-bg: var( --alert-dark-background );
  --bs-alert-border-color: var( --alert-dark-border-color );
  --bs-alert-padding-x: var( --alert-dark-padding-top );
  --bs-alert-border: var( --alert-dark-border-width ) solid var( --alert-dark-border-color );
  background: var(--alert-dark-background);
  border-radius: var(--alert-dark-border-radius);
  border-style: var(--alert-dark-border-style);
  font-family: var(--alert-dark-text-font-family);
  font-size: var(--alert-dark-text-font-size);
  font-weight: var(--alert-dark-text-font-weight);
  padding: var(--alert-dark-padding-right) var(--alert-dark-padding-top);
}

.alert-light {
  --bs-alert-color: var( --alert-light-text-color );
  --bs-alert-bg: var( --alert-light-background );
  --bs-alert-border-color: var( --alert-light-border-color );
  --bs-alert-padding-x: var( --alert-light-padding-top );
  --bs-alert-border: var( --alert-light-border-width ) solid var( --alert-light-border-color );
  background: var(--alert-light-background);
  border-radius: var(--alert-light-border-radius);
  border-style: var(--alert-light-border-style);
  font-family: var(--alert-light-text-font-family);
  font-size: var(--alert-light-text-font-size);
  font-weight: var(--alert-light-text-font-weight);
  padding: var(--alert-light-padding-right) var(--alert-light-padding-top);
}

.alert-info {
  --bs-alert-color: var( --alert-info-text-color );
  --bs-alert-bg: var( --alert-info-background );
  --bs-alert-border-color: var( --alert-info-border-color );
  --bs-alert-padding-x: var( --alert-info-padding-top );
  --bs-alert-border: var( --alert-info-border-width ) solid var( --alert-info-border-color );
  background: var(--alert-info-background);
  border-radius: var(--alert-info-border-radius);
  border-style: var(--alert-info-border-style);
  font-family: var(--alert-info-text-font-family);
  font-size: var(--alert-info-text-font-size);
  font-weight: var(--alert-info-text-font-weight);
  padding: var(--alert-info-padding-right) var(--alert-info-padding-top);
}

.alert-success {
  --bs-alert-color: var( --alert-success-text-color );
  --bs-alert-bg: var( --alert-success-background );
  --bs-alert-border-color: var( --alert-success-border-color );
  --bs-alert-padding-x: var( --alert-success-padding-top );
  --bs-alert-border: var( --alert-success-border-width ) solid var( --alert-success-border-color );
  background: var(--alert-success-background);
  border-radius: var(--alert-success-border-radius);
  border-style: var(--alert-success-border-style);
  font-family: var(--alert-success-text-font-family);
  font-size: var(--alert-success-text-font-size);
  font-weight: var(--alert-success-text-font-weight);
  padding: var(--alert-success-padding-right) var(--alert-success-padding-top);
}

.alert-warning {
  --bs-alert-color: var( --alert-warning-text-color );
  --bs-alert-bg: var( --alert-warning-background );
  --bs-alert-border-color: var( --alert-warning-border-color );
  --bs-alert-padding-x: var( --alert-warning-padding-top );
  --bs-alert-border: var( --alert-warning-border-width ) solid var( --alert-warning-border-color );
  background: var(--alert-warning-background);
  border-radius: var(--alert-warning-border-radius);
  border-style: var(--alert-warning-border-style);
  font-family: var(--alert-warning-text-font-family);
  font-size: var(--alert-warning-text-font-size);
  font-weight: var(--alert-warning-text-font-weight);
  padding: var(--alert-warning-padding-right) var(--alert-warning-padding-top);
}

.alert-danger {
  --bs-alert-color: var( --alert-danger-text-color );
  --bs-alert-bg: var( --alert-danger-background );
  --bs-alert-border-color: var( --alert-danger-border-color );
  --bs-alert-padding-x: var( --alert-danger-padding-top );
  --bs-alert-border: var( --alert-danger-border-width ) solid var( --alert-danger-border-color );
  background: var(--alert-danger-background);
  border-radius: var(--alert-danger-border-radius);
  border-style: var(--alert-danger-border-style);
  font-family: var(--alert-danger-text-font-family);
  font-size: var(--alert-danger-text-font-size);
  font-weight: var(--alert-danger-text-font-weight);
  padding: var(--alert-danger-padding-right) var(--alert-danger-padding-top);
}

.alert-type9 {
  --bs-alert-color: var( --alert-type9-text-color );
  --bs-alert-bg: var( --alert-type9-background );
  --bs-alert-border-color: var( --alert-type9-border-color );
  --bs-alert-padding-x: var( --alert-type9-padding-top );
  --bs-alert-border: var( --alert-type9-border-width ) solid var( --alert-type9-border-color );
  background: var(--alert-type9-background);
  border-radius: var(--alert-type9-border-radius);
  border-style: var(--alert-type9-border-style);
  font-family: var(--alert-type9-text-font-family);
  font-size: var(--alert-type9-text-font-size);
  font-weight: var(--alert-type9-text-font-weight);
  padding: var(--alert-type9-padding-right) var(--alert-type9-padding-top);
}

/* =============================================================================
   BUTTONS (extended/_buttons.scss)
   ========================================================================== */
.btn {
  letter-spacing: var(--button-md-letter-spacing);
  text-decoration: var(--button-md-text-decoration);
  text-transform: var(--button-md-text-transform);
}

.btn-secondary {
  background: var(--button-secondary-background);
  --bs-btn-hover-color: var( --button-secondary-hover-color );
  --bs-btn-hover-font-weight: var( --button-secondary-hover-font-weight );
  --bs-btn-hover-bg: var( --button-secondary-hover-background );
  --bs-btn-hover-border-color: var( --button-secondary-hover-border-color );
  --bs-btn-hover-border-style: var( --button-secondary-hover-border-style );
  --bs-btn-hover-border-radius: var( --button-secondary-hover-border-radius );
  --bs-btn-hover-box-shadow: var( --button-secondary-hover-box-shadow );
  --bs-btn-color: var( --button-secondary-color );
  --bs-btn-font-weight: var( --button-secondary-font-weight );
  --bs-btn-bg: var( --button-secondary-background );
  --bs-btn-border-color: var( --button-secondary-border-color );
  --bs-btn-border-style: var( --button-secondary-border-style );
  --bs-btn-border-radius: var( --button-secondary-border-radius );
  --bs-btn-box-shadow: var( --button-secondary-box-shadow );
  --bs-btn-disabled-color: var( --button-secondary-disabled-color );
  --bs-btn-disabled-font-weight: var( --button-secondary-disabled-font-weight );
  --bs-btn-disabled-bg: var( --button-secondary-disabled-background );
  --bs-btn-disabled-border-color: var( --button-secondary-disabled-border-color );
  --bs-btn-disabled-border-style: var( --button-secondary-disabled-border-style );
  --bs-btn-disabled-border-radius: var( --button-secondary-disabled-border-radius );
  --bs-btn-disabled-box-shadow: var( --button-secondary-disabled-box-shadow );
}
.btn-secondary:hover {
  background: var(--button-secondary-hover-background);
}
.btn-secondary:hover, .btn-secondary:focus-visible {
  font-weight: var(--bs-btn-hover-font-weight);
  border-radius: var(--bs-btn-hover-border-radius);
  box-shadow: var(--bs-btn-hover-box-shadow);
}

.btn-secondary:-hover {
  background: var(--button-secondary-hover-background);
}

.btn-secondary:default {
  background: var(--button-secondarydefault-background);
}

.btn-secondary:-disabled {
  background: var(--button-secondary-disabled-background);
}

[data-theme=dark] .btn-secondary {
  background: var(--button-secondary-dark-background);
  --bs-btn-hover-color: var( --button-secondary-dark-hover-color );
  --bs-btn-hover-font-weight: var( --button-secondary-dark-hover-font-weight );
  --bs-btn-hover-bg: var( --button-secondary-dark-hover-background );
  --bs-btn-hover-border-color: var( --button-secondary-dark-hover-border-color );
  --bs-btn-hover-border-style: var( --button-secondary-dark-hover-border-style );
  --bs-btn-hover-border-radius: var( --button-secondary-dark-hover-border-radius );
  --bs-btn-hover-box-shadow: var( --button-secondary-dark-hover-box-shadow );
  --bs-btn-color: var( --button-secondary-dark-color );
  --bs-btn-font-weight: var( --button-secondary-dark-font-weight );
  --bs-btn-bg: var( --button-secondary-dark-background );
  --bs-btn-border-color: var( --button-secondary-dark-border-color );
  --bs-btn-border-style: var( --button-secondary-dark-border-style );
  --bs-btn-border-radius: var( --button-secondary-dark-border-radius );
  --bs-btn-box-shadow: var( --button-secondary-dark-box-shadow );
  --bs-btn-disabled-color: var( --button-secondary-dark-disabled-color );
  --bs-btn-disabled-font-weight: var( --button-secondary-dark-disabled-font-weight );
  --bs-btn-disabled-bg: var( --button-secondary-dark-disabled-background );
  --bs-btn-disabled-border-color: var( --button-secondary-dark-disabled-border-color );
  --bs-btn-disabled-border-style: var( --button-secondary-dark-disabled-border-style );
  --bs-btn-disabled-border-radius: var( --button-secondary-dark-disabled-border-radius );
  --bs-btn-disabled-box-shadow: var( --button-secondary-dark-disabled-box-shadow );
}

.btn-primary {
  background: var(--button-primary-background);
  --bs-btn-hover-color: var( --button-primary-hover-color );
  --bs-btn-hover-font-weight: var( --button-primary-hover-font-weight );
  --bs-btn-hover-bg: var( --button-primary-hover-background );
  --bs-btn-hover-border-color: var( --button-primary-hover-border-color );
  --bs-btn-hover-border-style: var( --button-primary-hover-border-style );
  --bs-btn-hover-border-radius: var( --button-primary-hover-border-radius );
  --bs-btn-hover-box-shadow: var( --button-primary-hover-box-shadow );
  --bs-btn-color: var( --button-primary-color );
  --bs-btn-font-weight: var( --button-primary-font-weight );
  --bs-btn-bg: var( --button-primary-background );
  --bs-btn-border-color: var( --button-primary-border-color );
  --bs-btn-border-style: var( --button-primary-border-style );
  --bs-btn-border-radius: var( --button-primary-border-radius );
  --bs-btn-box-shadow: var( --button-primary-box-shadow );
  --bs-btn-disabled-color: var( --button-primary-disabled-color );
  --bs-btn-disabled-font-weight: var( --button-primary-disabled-font-weight );
  --bs-btn-disabled-bg: var( --button-primary-disabled-background );
  --bs-btn-disabled-border-color: var( --button-primary-disabled-border-color );
  --bs-btn-disabled-border-style: var( --button-primary-disabled-border-style );
  --bs-btn-disabled-border-radius: var( --button-primary-disabled-border-radius );
  --bs-btn-disabled-box-shadow: var( --button-primary-disabled-box-shadow );
}
.btn-primary:hover {
  background: var(--button-primary-hover-background);
}
.btn-primary:hover, .btn-primary:focus-visible {
  font-weight: var(--bs-btn-hover-font-weight);
  border-radius: var(--bs-btn-hover-border-radius);
  box-shadow: var(--bs-btn-hover-box-shadow);
}

.btn-primary:-hover {
  background: var(--button-primary-hover-background);
}

.btn-primary:default {
  background: var(--button-primarydefault-background);
}

.btn-primary:-disabled {
  background: var(--button-primary-disabled-background);
}

[data-theme=dark] .btn-primary {
  background: var(--button-primary-dark-background);
  --bs-btn-hover-color: var( --button-primary-dark-hover-color );
  --bs-btn-hover-font-weight: var( --button-primary-dark-hover-font-weight );
  --bs-btn-hover-bg: var( --button-primary-dark-hover-background );
  --bs-btn-hover-border-color: var( --button-primary-dark-hover-border-color );
  --bs-btn-hover-border-style: var( --button-primary-dark-hover-border-style );
  --bs-btn-hover-border-radius: var( --button-primary-dark-hover-border-radius );
  --bs-btn-hover-box-shadow: var( --button-primary-dark-hover-box-shadow );
  --bs-btn-color: var( --button-primary-dark-color );
  --bs-btn-font-weight: var( --button-primary-dark-font-weight );
  --bs-btn-bg: var( --button-primary-dark-background );
  --bs-btn-border-color: var( --button-primary-dark-border-color );
  --bs-btn-border-style: var( --button-primary-dark-border-style );
  --bs-btn-border-radius: var( --button-primary-dark-border-radius );
  --bs-btn-box-shadow: var( --button-primary-dark-box-shadow );
  --bs-btn-disabled-color: var( --button-primary-dark-disabled-color );
  --bs-btn-disabled-font-weight: var( --button-primary-dark-disabled-font-weight );
  --bs-btn-disabled-bg: var( --button-primary-dark-disabled-background );
  --bs-btn-disabled-border-color: var( --button-primary-dark-disabled-border-color );
  --bs-btn-disabled-border-style: var( --button-primary-dark-disabled-border-style );
  --bs-btn-disabled-border-radius: var( --button-primary-dark-disabled-border-radius );
  --bs-btn-disabled-box-shadow: var( --button-primary-dark-disabled-box-shadow );
}

.btn-sm, .btn-group-sm > .btn {
  --bs-border-width: $btn-border-width-sm;
  --bs-line-height: $btn-line-height-sm;
}

.btn-md {
  --bs-border-width: $btn-border-width-md;
  --bs-line-height: $btn-line-height-md;
}

.btn-lg, .btn-group-lg > .btn {
  --bs-border-width: $btn-border-width-lg;
  --bs-line-height: $btn-line-height-lg;
}

/* =============================================================================
   FORM CHECK (extended/_checkbox.scss)
   ========================================================================== */
.form-check {
  line-height: 1;
}

.form-check-input {
  margin-top: -1px;
  box-shadow: var(--checkbox-check-off-box-shadow);
  background-size: 12.6px;
}
.form-check-input:focus {
  background-color: rgba(0, 0, 0, 0);
  border-color: #b3b3b3;
  border-style: solid;
  box-shadow: var(--checkbox-hover-check-off-box-shadow);
}
.form-check-input:hover, .form-check:hover .form-check-input {
  background-color: rgba(0, 0, 0, 0);
  border-color: #929292;
  border-style: solid;
  box-shadow: var(--checkbox-hover-check-off-box-shadow);
}
.form-check-input[disabled], .form-check-input:disabled, .form-check-input[disabled]:hover, .form-check-input:disabled:hover, .form-check:hover .form-check-input[disabled], .form-check:hover .form-check-input:disabled {
  background-color: #cccccc;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
}
.form-check-input:checked {
  background-color: #0f0a30;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
  box-shadow: var(--checkbox-check-on-box-shadow);
}
.form-check-input:checked:focus {
  background-color: #0f0a30;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
  box-shadow: var(--checkbox-check-on-box-shadow);
}
.form-check-input:checked:hover, .form-check:hover .form-check-input:checked {
  background-color: #258cf2;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
  box-shadow: var(--checkbox-hover-check-on-box-shadow);
}
.form-check-input:checked[disabled], .form-check-input:checked:disabled, .form-check-input:checked[disabled]:hover, .form-check-input:checked:disabled:hover, .form-check:hover .form-check-input:checked[disabled], .form-check:hover .form-check-input:checked:disabled {
  background-color: #7158dd;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
}

.form-check-label {
  font-size: 16px;
  font-family: "Inter";
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0px;
  text-decoration: none;
  text-transform: none;
}
.form-check-label:hover, .form-check:hover .form-check-label {
  color: rgba(0, 0, 0, 0.8);
}
[disabled] ~ .form-check-label, :disabled ~ .form-check-label, [disabled]:hover ~ .form-check-label, :disabled:hover ~ .form-check-label, .form-check:hover input[disabled] ~ .form-check-label, .form-check:hover input:disabled ~ .form-check-label {
  color: #777777;
}
input:checked ~ .form-check-label {
  color: rgba(0, 0, 0, 0.8);
}
input:checked ~ .form-check-label:hover, .form-check:hover input:checked ~ .form-check-label {
  color: rgba(0, 0, 0, 0.8);
}
input:checked[disabled] ~ .form-check-label, input:checked:disabled ~ .form-check-label, input:checked[disabled]:hover ~ .form-check-label, input:checked:disabled:hover ~ .form-check-label, .form-check:hover input:checked[disabled] ~ .form-check-label, .form-check:hover input:checked:disabled ~ .form-check-label {
  color: #777777;
}

/* =============================================================================
   MODAL (extended/_modal.scss)
   ========================================================================== */
.modal-content {
  box-shadow: var(--modal-box-shadow);
  padding: var(--modal-padding-y) var(--modal-padding-x);
}

.modal-header {
  background-color: var(--modal-header-background);
  background: var(--modal-header-background);
  border-radius: var(--modal-header-border-radius);
  padding-top: var(--modal-header-padding-top);
  padding-right: var(--modal-header-padding-right);
  padding-bottom: var(--modal-header-padding-bottom);
  padding-left: var(--modal-header-padding-left);
}

.modal-body {
  background-color: var(--modal-body-background);
  background: var(--modal-body-background);
  border-color: var(--modal-body-border-color);
  border-style: var(--modal-body-border-style);
  border-radius: var(--modal-body-border-radius);
  border-width: var(--modal-body-border-width);
  padding-top: var(--modal-body-padding-top);
  padding-right: var(--modal-body-padding-right);
  padding-bottom: var(--modal-body-padding-bottom);
  padding-left: var(--modal-body-padding-left);
}

.modal-footer {
  border-radius: var(--modal-footer-border-radius);
  padding-top: var(--modal-footer-padding-top);
  padding-right: var(--modal-footer-padding-right);
  padding-bottom: var(--modal-footer-padding-bottom);
  padding-left: var(--modal-footer-padding-left);
}

.modal-title {
  font-family: var(--modal-title-font-family);
  font-size: var(--modal-title-font-size);
  font-weight: var(--modal-title-font-weight);
  letter-spacing: var(--modal-title-letter-spacing);
}

/* =============================================================================
   RADIO (project/components/_radio.scss)
   ========================================================================== */
.form-check-input[type=radio] {
  width: 1em;
  height: 1em;
  margin-top: calc((16px - 1em) / 2);
  background-size: contain;
}

/* =============================================================================
   SELECT (extended/_select.scss)
   ========================================================================== */
.form-select:hover {
  color: #000000;
  background-color: #ffffff;
  background: #ffffff;
  border-color: #b3b3b3;
  border-style: solid;
  box-shadow: none;
}
.form-select:focus {
  color: #000000;
  background-color: #ffffff;
  background: #ffffff;
  border-color: #929292;
  border-style: solid;
  box-shadow: none;
}
.form-select:disabled {
  color: #777777;
  background-color: #f8f8f8;
  background: #f8f8f8;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
  box-shadow: none;
}
.form-select.is-invalid, .form-select.is-invalid:hover, .form-select.is-invalid:focus {
  color: #777777;
  background-color: #ffffff;
  background: #ffffff;
  background-repeat: no-repeat;
  border-color: #dc3545;
  border-style: solid;
  box-shadow: none;
}

.form-select-sm {
  line-height: 1.667;
  border-width: 1px;
}

.form-select-lg {
  line-height: 1.111;
  border-width: 1px;
}

/* =============================================================================
   SWITCH (extended/_switch.scss)
   ========================================================================== */
.form-switch {
  min-height: 16px;
}
.form-switch .form-check-input {
  height: 20px;
  margin-top: -2px;
  background-size: contain;
  box-shadow: var(--switch-off-box-shadow);
}
.form-switch .form-check-input:checked {
  box-shadow: var(--switch-on-box-shadow);
}
.form-switch .form-check-input:focus {
  box-shadow: var(--switch-on-box-shadow);
}

/* =============================================================================
   TOOLTIPS (extended/_tooltips.scss)
   ========================================================================== */
.tooltip {
  border-width: var(--tooltip-border-width);
  border-color: var(--tooltip-border-color);
  border-style: var(--tooltip-border-style);
}

.tooltip-inner {
  font-family: var(--tooltip-font-family);
  font-weight: var(--tooltip-font-weight);
  line-height: var(--tooltip-line-height);
  letter-spacing: var(--tooltip-letter-spacing);
  text-align: var(--tooltip-text-align);
  text-decoration: var(--tooltip-text-decoration);
}

/* =============================================================================
   ACCORDION (extended/_accordion.scss)
   ========================================================================== */
.accordion .accordion-button {
  font-size: 1.25rem;
  font-weight: 500;
}
.accordion .accordion-button:not(.collapsed) {
  background-color: rgba(231, 237, 245, 0.3);
  box-shadow: none;
}
.accordion .accordion-collapse {
  background-color: rgba(231, 237, 245, 0.3);
}
.accordion .accordion-body {
  padding-top: 0;
  color: #595959;
}

.accordion-spaced .accordion-item:not(:first-of-type) {
  margin-top: 1.875rem;
  border-top: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}

.accordion-flush {
  --bs-accordion-btn-padding-x: 0;
  --bs-accordion-btn-padding-y: 1.25rem;
  --bs-accordion-body-padding-x: 0;
  --bs-accordion-body-padding-y: 0;
  --bs-accordion-active-bg: transparent;
}
.accordion-flush .accordion-item:first-child .accordion-button {
  padding-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}
.accordion-flush .accordion-button {
  opacity: 1;
  transition: opacity 0.15s linear;
}
.accordion-flush .accordion-button:not(.collapsed) {
  background-color: var(--bs-accordion-bg);
}
.accordion-flush .accordion-button:hover {
  opacity: 0.7;
}
.accordion-flush .accordion-button[disabled] {
  opacity: 1;
}
.accordion-flush .accordion-collapse {
  background-color: var(--bs-accordion-bg);
}
.accordion-flush .accordion-body > * {
  margin-bottom: 1.25rem;
}

.accordion-media .accordion-body picture {
  display: block;
}
@media (min-width: 992px) {
  .accordion-media {
    width: 50%;
    margin-left: auto;
    position: relative;
  }
  .accordion-media .accordion-body picture {
    width: calc(100% - 1.875rem);
    position: absolute;
    right: calc(100% + 1.875rem);
    top: 0;
  }
}
@media (min-width: 1260px) {
  .accordion-media .accordion-body picture {
    width: 100%;
    right: calc(100% + 3.75rem);
  }
}

/* =============================================================================
   BREADCRUMB (extended/_breadcrumb.scss)
   ========================================================================== */
.breadcrumb {
  font-family: "Barlow", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.breadcrumb-item a {
  color: currentColor;
}

/* =============================================================================
   REBOOT (extended/_reboot.scss)
   ========================================================================== */
html {
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
}

h1, .h1 {
  font-size: calc(1.6rem + 4.2vw);
  font-family: var(--typography-title-1-font-family);
  font-weight: var(--typography-title-1-font-weight);
  line-height: var(--typography-title-1-line-height);
  letter-spacing: var(--typography-title-1-letter-spacing);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 4.75rem;
  }
}

h2, .h2 {
  font-size: calc(1.5rem + 3vw);
  font-family: var(--typography-title-2-font-family);
  font-weight: var(--typography-title-2-font-weight);
  line-height: var(--typography-title-2-line-height);
  letter-spacing: var(--typography-title-2-letter-spacing);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 3.75rem;
  }
}

h3, .h3 {
  font-size: calc(1.4375rem + 2.25vw);
  font-family: var(--typography-title-3-font-family);
  font-weight: var(--typography-title-3-font-weight);
  line-height: var(--typography-title-3-line-height);
  letter-spacing: var(--typography-title-3-letter-spacing);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 3.125rem;
  }
}

h4, .h4 {
  font-size: calc(1.3875rem + 1.65vw);
  font-family: var(--typography-title-4-font-family);
  font-weight: var(--typography-title-4-font-weight);
  line-height: var(--typography-title-4-line-height);
  letter-spacing: var(--typography-title-4-letter-spacing);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 2.625rem;
  }
}

h5, .h5 {
  font-size: calc(1.35rem + 1.2vw);
  font-family: var(--typography-title-5-font-family);
  font-weight: var(--typography-title-5-font-weight);
  line-height: var(--typography-title-5-line-height);
  letter-spacing: var(--typography-title-5-letter-spacing);
}
@media (min-width: 1200px) {
  h5, .h5 {
    font-size: 2.25rem;
  }
}

h6, .h6 {
  font-size: calc(1.3125rem + 0.75vw);
  font-family: var(--typography-title-6-font-family);
  font-weight: var(--typography-title-6-font-weight);
  line-height: var(--typography-title-6-line-height);
  letter-spacing: var(--typography-title-6-letter-spacing);
}
@media (min-width: 1200px) {
  h6, .h6 {
    font-size: 1.875rem;
  }
}

blockquote {
  font-size: calc(1.275rem + 0.3vw);
  font-family: var(--typography-blockquote-font-family);
  font-weight: var(--typography-blockquote-font-weight);
  line-height: var(--typography-blockquote-line-height);
  letter-spacing: var(--typography-blockquote-letter-spacing);
  font-style: italic;
}
@media (min-width: 1200px) {
  blockquote {
    font-size: 1.5rem;
  }
}

img {
  max-width: 100%;
  height: auto;
}

/* =============================================================================
   KEYFRAMES (shared/base/_font-face.scss)
   ========================================================================== */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Inter-Regular.ttf") format("ttf");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Inter-Medium.ttf") format("ttf");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Inter-SemiBold.ttf") format("ttf");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Inter-Bold.ttf") format("ttf");
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Barlow-ExtraLight.ttf") format("ttf");
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Barlow-Regular.ttf") format("ttf");
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Barlow-Medium.ttf") format("ttf");
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Barlow-SemiBold.ttf") format("ttf");
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Barlow-Bold.ttf") format("ttf");
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("https://ssc.handoff.com/fonts/Barlow-Black.ttf") format("ttf");
}
/* =============================================================================
   KEYFRAMES (shared/base/_keyframes.scss)
   ========================================================================== */
@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes tickerUp {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes blink {
  0%, 100% {
    border-color: var(--color-primary-ssc-blue);
  }
  50% {
    border-color: transparent;
  }
}
@keyframes widthAnimation {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
/* =============================================================================
   BACKGROUND (shared/common/_background.scss)
   ========================================================================== */
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.background img,
.background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.background-radial-gradient {
  background: radial-gradient(50% 50% at 50% 50%, #0c408b 0%, #100d37 100%);
}

/* =============================================================================
   COUNTER (shared/common/_counter.scss)
   ========================================================================== */
.counter {
  padding-left: 1.875rem;
  border-left: 0.0625rem solid rgba(0, 0, 0, 0.1);
}

.counter-count {
  margin-bottom: 0.3125rem;
  color: #0077c8;
}

.counter-lead {
  margin-bottom: 0;
  font-size: 1rem;
  color: #595959;
}
.counter-lead strong {
  display: block;
  color: #262626;
}

/*
@import 'shared/mixins';
@import 'shared/site/common';
@import 'shared/site/typography';
@import 'shared/site/buttons';
*/
/* =============================================================================
   HERO (shared/blocks/_hero.scss)
   ========================================================================== */
.hero {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #fff;
  contain: paint;
  overflow-x: clip;
}
@media (min-width: 992px) {
  .hero {
    padding-top: 11.875rem;
  }
}

@media (max-width: 767.98px) {
  .hero-content {
    text-align: center;
  }
}

.hero-breadcrumb {
  margin-bottom: 0.625rem;
}
@media (max-width: 767.98px) {
  .hero-breadcrumb .breadcrumb {
    justify-content: center;
  }
}

.hero-title span {
  color: #0077c8;
}

.hero-typed-text {
  font-weight: inherit;
}
.hero-typed-text span {
  padding-right: 0.125rem;
  border-right: 0.125rem solid;
  animation: blink 1s linear infinite;
}

.hero-lead {
  margin-bottom: 2.5rem;
}
@media (min-width: 768px) {
  .hero-lead {
    font-size: 1.125rem;
  }
}

.hero-cta {
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
}

@media (max-width: 767.98px) {
  .hero-media {
    margin-top: 1.25rem;
  }
}
      </style>

      <section class="hero pb-0 position-relative">
    <div class="background">
${backgroundVideo ?? `      <video playsinline="" autoplay="" muted="" loop="">
        <source src="${backgroundVideo}" type="video/mp4" >
        Your browser does not support the video tag.
      </video>
` }${backgroundImage ?? `      <picture>
        <source srcset="${backgroundImage}" >
        <img src="${backgroundImage}" alt="" >
      </picture>
` }    </div>

    <div class="hero-inner text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-11 col-lg-10">
            <div class="hero-content w-md-80 mx-auto">
              <h1 class="hero-title">
                ${title_prefix}
                <strong class="hero-typed-text"
                  >${title.map((t) => `<span>${t}</span>`)}</strong>
                ${title_suffix}
              </h1>
              <p class="hero-lead">${subTitle}</p>
              <div class="hero-cta">
                <div>
                  <a                     href="/contact"
                    target="_self"
                    class="btn btn-secondary"
                    aria-label="${button}"
                    >${button}</a>
                </div>
              </div>
            </div>
            <div class="hero-media mt-40 mt-lg-80">
              <picture>
                <source                   srcset="${image}"
                  media="(max-width: 575px)"
                >
                <img src="${image}" alt="${imageAlt}" >
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
    }
}
window.customElements.define("c001-header", C001Header);