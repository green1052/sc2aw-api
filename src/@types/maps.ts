import type {GameRegion} from "./lobbies";

// Misc
export type MapType = "melee_map" | "arcade_map" | "extension_mod" | "dependency_mod";
export type LocaleType =
    "enUS"
    | "koKR"
    | "frFR"
    | "deDE"
    | "zhCN"
    | "esES"
    | "zhTW"
    | "enGB"
    | "esMX"
    | "ruRU"
    | "ptBR"
    | "itIT"
    | "ptPT"
    | "enSG"
    | "plPL";
export type OrderDirection = "asc" | "desc";
// Misc

// getMaps
export interface Map {
    regionId: GameRegion;
    bnetId: number;
    type: MapType;
    iconHash: string;
    name: string;
    description: string;
    website: string | null;
    mainCategoryId: number;
    maxPlayers: number;
    updatedAt: string;
    publishedAt: string;
    currentVersion: {
        id: number;
        majorVersion: number;
        minorVersion: number;
        isPrivate: boolean;
    }
}

export interface MapsResponse {
    page: {
        prev: string | null;
        next: string | null;
    };
    results: Map[];
}

// getMaps

// getMapsBasicInfo
export interface MapBasicInfoResponse {
    id: number;
    regionId: GameRegion;
    bnentId: number;
    type: MapType;
    availableLocales: number;
    mainLocale: LocaleType;
    mainLocaleHash: string;
    iconHash: string;
    thumbnailHash: string;
    name: string;
    description: string;
    website: string | null;
    mainCategoryId: number;
    maxPlayers: number;
    maxHumanPlayers: number;
    updatedAt: string;
    publishedAt: string;
    userReviewCount: number;
    userReviewsRating: string;
    removed: boolean;
    currentVersion: {
        id: number;
        majorVersion: number;
        minorVersion: number;
        isPrivate: boolean;
        archiveSize: number;
        uploadedAt: string;
    };
    author: {
        regionId: GameRegion;
        realmId: number;
        profileId: number;
        name: string;
        discriminator: number;
        avatar: string;
    }
}

// getMapsBasicInfo

// getMapsLocales
export interface MapLocale {
    locale: LocaleType;
    initialMajorVersion: number;
    initialMinorVersion: number;
    latestMajorVersion: number;
    latestMinorVersion: number;
    inLatestVersion: boolean;
    isMain: boolean;
    tableHash: string;
    originalName: string;
    name: string;
    description: string;
    website: string | null;
}

export type MapLocalesResponse = MapLocale[];
// getMapsLocales

// getMapsDetails
export interface ScreenShoot {
    caption: string;
    picture: {
        hash: string;
        top: number;
        left: number;
        width: number;
        height: number;
    }
}

export interface HowToPlaySection {
    items: string[];
    listType: number;
    subtitle: string | null;
    title: string;
}

export interface Attribute {
    access: number;
    arbitration: number;
    default: { index: number }[];
    instance: {
        id: number;
        namespace: number;
    };
    options: number;
    sortOrder: number;
    values: {
        value: string;
        visual: {
            art: string | null;
            text: string | null;
            tip: string | null;
        }
    }[]
}

export interface MapDetailsResponse {
    id: number;
    regionId: GameRegion;
    bnetId: number;
    majorVersion: number;
    minorVersion: number;
    headerHash: string | null;
    isPrivate: boolean;
    isExtensionMod: boolean;
    archiveHash: string | null;
    archiveSize: number;
    archiveFilename: string;
    uploadedAt: string;
    info: {
        meta: {
            region: string;
            locale: LocaleType;
        };
        ddDefaultPermissions: boolean;
        addMultiMod: boolean;
        arcadeInfo: {
            gameInfoScreenShoots: ScreenShoot[];
            howToPlayScreenshots: ScreenShoot[];
            howToPlaySections: HowToPlaySection[];
            mapIcon: {
                hash: string;
                top: number;
                left: number;
                width: number;
                height: number;
            };
            matchmakerTags: string[];
            patchNoteSections: {
                items: string[];
                listType: number;
                subtitle: string | null;
                title: string;
            };
            tutorialLink: {
                map: {
                    id: number;
                    version: number;
                };
                speed: string;
                variantIndex: number;
            };
            website: string | null;
        };
        // IDK
        archiveHandle: null;
        attributes: Attribute[];
        defaultVariantIndex: number;
        extraDependencies: {
            id: number;
            version: number;
        }[];
        filename: string;
        header: {
            id: number;
            version: number;
        };
        localeTable: {
            locale: LocaleType;
            stringTable: string[];
        }[];
        mapNamespace: number;
        mapSize: {
            horizontal: number;
            vertical: number;
        };
        relevantPermissions: string[];
        specialTags: string[];
        tileset: string;
        variants: {
            achievementTags: string[];
            attributeDefaults: {
                attribute: {
                    id: number;
                    namespace: number;
                    value: { index: number } | { index: number }[];
                }[];
                attributeVisibility: {
                    id: number;
                    namespace: number;
                    hidden: number;
                };
                categoryDescription: string;
                categoryId: number;
                categoryName: string;
                lockedAttributes: {
                    attribute: {
                        id: number;
                        namespace: number;
                    };
                    lockedScopes: number;
                }[]
                maxHumanPlayers: number;
                maxOpenSlots: number;
                maxTeamSize: number;
                modeDescription: string;
                modeId: number;
                modeName: string;
                "premiumInfo": string | null;
                "teamNames": string[];
            };
        }
    };
}

// getMapsDetails

// getMapsVersions
export interface MapVersionsResponse {
    regionId: GameRegion;
    bnetId: number;
    version: {
        majorVersion: number;
        minorVersion: number;
        headerHash: string | null;
        isPrivate: boolean;
        isExtensionMod: boolean;
        archiveHash: string | null;
        archiveSize: number;
        archiveFilename: string;
        uploadedAt: string;
    }[];
}

// getMapsVersions

// getMapsDependencies
export interface MapDependenciesResponse {
    regionId: GameRegion;
    bnetId: number;
    list: {
        map: {
            id: number;
            regionId: GameRegion;
            bnetId: number;
            type: MapType;
            authorLocalProfileId: number;
            availableLocales: number;
            mainLocale: LocaleType;
            mainLocaleHash: string;
            iconHash: string;
            thumbnailHash: string;
            name: string;
            description: string;
            website: string | null;
            mainCategoryId: number;
            maxPlayers: number;
            maxHumanPlayers: number;
            updatedAt: string;
            publishedAt: string;
            userReviewCount: number;
            userReviewsRating: string;
            removed: boolean;
        };
        mapHeader: {
            id: number;
            regionId: GameRegion;
            bnetId: number;
            majorVersion: number;
            minorVersion: number;
            headerHash: string | null;
            isPrivate: boolean;
            isExtensionMod: boolean;
            archiveHash: string | null;
            archiveSize: number;
            archiveFilename: string;
            uploadedAt: string;
        };
        requestedVersion: number;
        tags: string[];
    }[];
}

// getMapsDependencies

// getMapsStats
export interface MapStatsResponse {
    lobbiesHosted: number[];
    lobbiesStarted: number[];
    participantsTotal: number[];
    participantsUniqueTotal: number[];
    pendingTimeAverage: number[];
    date: string[];
}

// getMapsStats

// getMapsPlayerBase
export interface PlayerBase {
    lobbiesStarted: number;
    lobbiesStartedDiffDays: number;
    lobbiesJoined: number;
    lobbiesHosted: number;
    lobbiesHostedStarted: number;
    timeSpentWaiting: number;
    timeSpentWaitingAsHost: number;
    lastPlayedAt: string;
    profile: {
        regionId: GameRegion;
        realmId: number;
        profileId: number;
        name: string;
        discriminator: number;
        avatar: string;
    }
}

export interface MapPlayerBaseResponse {
    page: {
        prev: string | null;
        next: string | null;
    };
    results: PlayerBase[]
}

// getMapsPlayerBase

// getMapsReviews
export interface Review {
    createdAt: string;
    updatedAt: string;
    rating: number;
    helpfulCount: number;
    body: string;
    author: {
        regionId: GameRegion;
        realmId: number;
        profileId: number;
        name: string;
        discriminator: number;
        avatar: string;
    };
}

export interface MapReviewsResponse {
    page: {
        prev: string | null;
        next: string | null;
    };
    results: Review[];
}

// getMapsReviews

// getMapCategories
export interface MapCategory {
    id: number;
    code: string;
    name: string;
    description: string;
    isMelee: boolean;
}

export type MapCategoriesResponse = MapCategory[];
// getMapCategories
