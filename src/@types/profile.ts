import type {GameRegion} from "./lobbies";

// getProfiles
export interface Profile {
    regionId: GameRegion;
    realmId: number;
    profileId: number;
    name: string;
    discriminator: number;
    avatar: string;
    lastOnlineAt: string;
}

export interface ProfilesResponse {
    page: {
        prev: string | null;
        next: string | null;
    };
    results: Profile[];
}

// getProfiles

// getProfileDetail
export interface ProfileDetailResponse {
    regionId: GameRegion;
    realmId: number;
    profileId: number;
    profileGameId: number;
    name: string;
    discriminator: number;
    battleTag: string;
    avatar: string;
}

// getProfileDetail
