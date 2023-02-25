import type {Profile} from "./profile";

// Misc
export enum GameRegion {
    US = 1,
    EU = 2,
    KR = 3,
    CN = 5,
}

export enum GameLobbyStatus {
    Open = "open",
    Started = "started",
    Abandoned = "abandoned",
    Unknown = "unknown"
}

export interface Slot {
    slotNumber: number,
    team: number,
    kind: "human" | string,
    name: string,
    profile: {
        regionId: GameRegion,
        realmId: number,
        profileId: number,
        name: string,
        discriminator: number,
        avatar?: string
    },
    joinInfo: {
        joinedAt: string;
        leftAt: string | null;
    };
}

export interface JoinInfo {
    joinedAt: string;
    leftAt: string | null;
    profile: Profile;
}

// Misc

// getActiveLobbies
export interface ActiveLobbiesResponse {
    regionId: GameRegion;
    bnetBucketId: number;
    bnetRecordId: number;
    createdAt: string;
    closedAt: string | null;
    snapshotUpdatedAt: string;
    slotsUpdatedAt: string | null;
    status: GameLobbyStatus;
    mapBnetId: number;
    extModBnetId: number | null;
    multiModBnetId: number | null;
    mapVariantIndex: number;
    mapVariantMode: string;
    lobbyTitle: string;
    slotsHumansTotal: number;
    slotsHumansTaken: number;
    slots: Slot[];
    joinHistory: JoinInfo[];
}

// getActiveLobbies

// getLobbiesDetails
export interface Mod {
    regionId: GameRegion;
    bnetId: number;
    iconHash: string;
    name: string;
    updatedAt: string;
}

export interface TitleHistory {
    date: string;
    title: string;
    hostName: string;
    profile: Profile;
}

export interface LobbiesDetailsResponse {
    regionId: GameRegion;
    bnetBucketId: number;
    bnetRecordId: number;
    createdAt: string;
    closedAt: string | null;
    snapshotUpdatedAt: string;
    slotsUpdatedAt: string | null;
    status: GameLobbyStatus;
    mapBnetId: number;
    extModBnetId: number | null;
    multiModBnetId: number | null;
    mapVariantIndex: number;
    mapVariantMode: string;
    lobbyTitle: string;
    hostName: string;
    slotsHumansTotal: number;
    slotsHumansTaken: number;
    map: {
        regionId: GameRegion;
        bnetId: number;
        iconHash: string;
        name: string;
        mainCategoryId: number;
        updatedAt: string;
    };
    extMode: Mod[] | null;
    multiMode: Mod[] | null;
    slots: Slot[];
    joinHistory: JoinInfo[];
    titleHistory: TitleHistory[];
}

// getLobbiesDetails


// getLobbiesHistory
export interface LobbiesHistoryResponse {
    page: {
        prev: string | null;
        next: string | null;
    },
    result: LobbiesHistoryResult[]
}

export interface LobbiesHistoryResult {
    id: number;
    regionId: GameRegion;
    bnetBucketId: number;
    bnetRecordId: number;
    createdAt: string;
    closedAt: string | null;
    status: GameLobbyStatus;
    mapBnetId: number;
    extModBnetId: number | null;
    multiModBnetId: number | null;
    mapVariantIndex: number;
    mapVariantMode: string;
    lobbyTitle: string;
    hostName: string;
    slotsHumansTotal: number;
    slotsHumansTaken: number;
}

// getLobbiesHistory
