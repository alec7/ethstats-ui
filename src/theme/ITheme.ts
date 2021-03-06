import { IBoxColors } from "../layout/content/box/IBoxColors";
import { IBoxMetrics } from "../layout/content/box/IBoxMetrics";

type ValueBoxColors = "primary" | "primaryAlt" | "primaryInvert" | "secondary" | "secondaryInvert" |
    "highlight" | "error" | "warn";
type ValueBoxVariant = "small" | "normal" | "normalThin" | "smallThin" | "big";

export interface ITheme {
    colors: IThemeColors;
    spacing: IThemeSpacing;
    mediaQueries: IThemeMediaQueries;
}

export interface IThemeBaseColors {
    primary: {
        color: string;
        contrast: string;
    };
    secondary: {
        color: string;
        contrast: string;
    };
    disabled: string;
    status: {
        error: string;
        warn: string;
        success: string;
    };
    bg: {
        main: string;
        alt: string;
    };
    highlight: {
        color: string;
        contrast: string;
    };
    accent: {
        color: string;
        contrast: string;
    };
}

export interface IThemeColors {
    base: IThemeBaseColors;

    toolbarIcon: string;
    toolbarIconHover: string;
    toolbarAlethioIcon: string;
    toolbarAlethioIconHover: string;

    sidebarBg: string;
    sidebarBorder: string;
    sidebarPageTitle: string;
    mainContentBg: string;

    overlayBg: string;
    overlayBorder: string;
    overlayToolbarBorder: string;
    overlayText: string;

    copyIcon: string;

    checkboxIcon: string;
    checkboxLabel: string;

    radioIcon: string;
    radioLabel: string;

    label: {
        default: string;
        strong: string;
        disabled: string;
    };

    gasPercentageBoxText: string;
    hexDataItem: string;

    selectBoxText: string;
    selectBoxTextDisabled: string;
    selectBoxBg: string;
    selectBoxBubble: string;
    selectBoxArrow: string;
    selectBoxBorder: string;
    closeBtn: string;

    gridHeaderHover: string;
    gridBorder: string;
    gridOddRowBg: string;
    gridEvenRowBg: string;
    gridColumnSelector: string;

    valueBox: Record<ValueBoxColors, IBoxColors>;
    error: string;

    rawDataBackground: string;
    rawDataText: string;

    spinnerStroke: string;
    spinnerBorder: string;
    spinnerBackground: string;

    expanderLabel: string;
    expanderValue: string;
    expanderBg: string;
    expanderIcon: string;
    expanderDisabled: string;
    expanderOpenLabel: string;
    expanderOpenValue: string;
    expanderOpenBg: string;
    expanderOpenIcon: string;

    accordionBg: string;
    accordionBorder: string;

    msgCountInIcon: string;
    msgCountOutIcon: string;
    msgCountPendingIcon: string;

    buttonPrimaryBg: string;
    buttonPrimaryBgActive: string;
    buttonPrimaryText: string;
    buttonSecondaryBg: string;
    buttonSecondaryBgActive: string;
    buttonSecondaryText: string;

    typedValueBoxBg: string;
    typedValueBoxText: string;
    typedValueBoxTypeText: string;
    typedValueBoxBorder: string;

    paginationBtnBorder: string;
    paginationBtnBg: string;
    paginationBtnText: string;
    paginationBtnHoverText: string;
    paginationCursorText: string;
    paginationBtnDisabledText: string;

    messageBoxPrimaryText: string;
    messageBoxPrimaryBg: string;
    messageBoxPrimaryBorder: string;
    messageBoxSecondaryText: string;
    messageBoxSecondaryBg: string;
    messageBoxSecondaryBorder: string;

    separator: string;

    link: string;
}

export interface IThemeSpacing {
    contentTop: number;
    contentBottom: number;
    sidebarWidth: number;
    valueBoxMetrics: Record<ValueBoxVariant, IBoxMetrics>;
    toolbarWidth: number;
    topbarHeight: number;
}

export interface IThemeMediaQueries {
    breakPoints: {
        lessThan620px: string;
        smallerThanStandardView: string;
        smallerThanFullView: string;
    };
}
