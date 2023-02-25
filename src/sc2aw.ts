import got, {ExtendOptions, Got} from "got";
import type {ActiveLobbiesResponse, GameRegion, LobbiesDetailsResponse} from "./@types/lobbies";
import type {
    LocaleType,
    MapBasicInfoResponse,
    MapCategoriesResponse,
    MapDependenciesResponse,
    MapDetailsResponse,
    MapLocalesResponse,
    MapPlayerBaseResponse,
    MapReviewsResponse,
    MapsResponse,
    MapStatsResponse,
    MapType,
    MapVersionsResponse,
    OrderDirection
} from "./@types/maps";
import type {ProfileDetailResponse, ProfilesResponse} from "./@types/profile";

export class Sc2aw {
    public readonly client: Got;

    constructor(options?: ExtendOptions) {
        options ??= {
            prefixUrl: "https://api.sc2arcade.com",
        };

        this.client = got.extend(options);
    }

    /**
     * Open and recently closed lobbies
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Lobbies/get_lobbies_active}
     * @param regionId
     * @param includeMapInfo
     * @param includeSlots
     * @param includeSlotsProfile
     * @param includeSlotsJoinInfo
     * @param includeJoinHistory
     * @param recentlyClosedThreshold
     */
    public async getActiveLobbies(
        regionId?: GameRegion,
        includeMapInfo: boolean = false,
        includeSlots: boolean = true,
        includeSlotsProfile: boolean = true,
        includeSlotsJoinInfo: boolean = true,
        includeJoinHistory: boolean = true,
        recentlyClosedThreshold: number = 20
    ): Promise<ActiveLobbiesResponse> {
        return this.client.get("/lobbies/active", {
            searchParams: {
                regionId,
                includeMapInfo,
                includeSlots,
                includeSlotsProfile,
                includeSlotsJoinInfo,
                includeJoinHistory,
                recentlyClosedThreshold,
            }
        }).json<ActiveLobbiesResponse>();
    }

    /**
     * Lobby details
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Lobbies/get_lobbies__regionId___bnetBucketId___bnetRecordId_}
     * @param regionId
     * @param bnetBucketId
     * @param bnetRecordId
     */
    public async getLobbiesDetails(
        regionId: GameRegion,
        bnetBucketId: number,
        bnetRecordId: number
    ): Promise<LobbiesDetailsResponse> {
        return this.client.get(`/lobbies/${regionId}/${bnetBucketId}/${bnetRecordId}`).json<LobbiesDetailsResponse>();
    }

    /**
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Lobbies/get_lobbies__regionId___bnetBucketId___bnetRecordId__match}
     * @param regionId
     * @param bnetBucketId
     * @param bnetRecordId
     */
    public async getLobbiesMatch(
        regionId: GameRegion,
        bnetBucketId: number,
        bnetRecordId: number
    ) {
        throw new Error("Not implemented");
    }

    /**
     * History of public lobbies.
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Lobbies/get_lobbies_history}
     * @param regionId
     * @param mapId
     * @param profileHandle
     * @param orderDirection
     * @param includeMapInfo
     * @param includeSlots
     * @param includeSlotsProfile
     * @param includeSlotsJoinInfo
     * @param includeJoinHistory
     * @param includeMatchResults
     * @param includeMatchPlayers
     */
    public async getLobbiesHistory(
        regionId?: GameRegion,
        mapId?: number,
        profileHandle?: string,
        orderDirection: OrderDirection = "desc",
        includeMapInfo: boolean = false,
        includeSlots: boolean = false,
        includeSlotsProfile: boolean = false,
        includeSlotsJoinInfo: boolean = false,
        includeJoinHistory: boolean = false,
        includeMatchResults: boolean = false,
        includeMatchPlayers: boolean = false
    ): Promise<ActiveLobbiesResponse> {
        return this.client.get("/lobbies/history", {
            searchParams: {
                regionId,
                mapId,
                profileHandle,
                orderDirection,
                includeMapInfo,
                includeSlots,
                includeSlotsProfile,
                includeSlotsJoinInfo,
                includeJoinHistory,
                includeMatchResults,
                includeMatchPlayers,
            }
        }).json<ActiveLobbiesResponse>();
    }

    /**
     * List of maps
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps}
     * @param authorHandle
     * @param regionId
     * @param type
     * @param name
     * @param mainCategoryId
     * @param archiveHash
     * @param showPrivate
     * @param orderDirection
     * @param orderBy
     */
    public async getMaps(
        authorHandle?: string,
        regionId?: GameRegion,
        type?: MapType,
        name?: string,
        mainCategoryId?: string,
        archiveHash?: string,
        showPrivate: boolean = false,
        orderDirection: OrderDirection = "desc",
        orderBy: "id" | "versionId" | "name" | "updated" | "published" | "popularity" = "id"
    ): Promise<MapsResponse> {
        return this.client.get("/maps", {
            searchParams: {
                authorHandle,
                regionId,
                type,
                name,
                mainCategoryId,
                archiveHash,
                showPrivate,
                orderDirection,
                orderBy
            }
        }).json<MapsResponse>();
    }

    /**
     * Basic info about specific map
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId_}
     * @param regionId
     * @param mapId
     */
    public async getMapsBasicInfo(regionId: GameRegion, mapId: number): Promise<MapBasicInfoResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/basic-info`).json<MapBasicInfoResponse>();
    }

    /**
     * Locale data
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId__locales}
     * @param regionId
     * @param mapId
     */
    public async getMapsLocales(regionId: GameRegion, mapId: number): Promise<MapLocalesResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/locales`).json<MapLocalesResponse>();
    }

    /**
     * Rich details about specific map in its current version or past version
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId__details}
     * @param minorVersion
     * @param majorVersion
     * @param locale
     * @param regionId
     * @param mapId
     */
    public async getMapsDetails(
        minorVersion: number = 0,
        majorVersion: number = 0,
        locale: LocaleType = "enUS",
        regionId: GameRegion,
        mapId: number
    ): Promise<MapDetailsResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/details`).json<MapDetailsResponse>();
    }

    /**
     * List of all versions of specific map.
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId__versions}
     * @param regionId
     * @param mapId
     */
    public async getMapsVersions(regionId: GameRegion, mapId: number): Promise<MapVersionsResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/versions`).json<MapVersionsResponse>();
    }

    /**
     * List of map's dependencies
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId__dependencies}
     * @param regionId
     * @param mapId
     */
    public async getMapsDependencies(regionId: GameRegion, mapId: number): Promise<MapDependenciesResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/dependencies`).json<MapDependenciesResponse>();
    }

    /**
     * Map statistics
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId__stats}
     * @param kind
     * @param regionId
     * @param mapId
     */
    public async getMapsStats(
        kind: "daily" | "weekly" | "monthly" = "weekly",
        regionId: GameRegion,
        mapId: number
    ): Promise<MapStatsResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/stats`, {
            searchParams: {
                kind
            }
        }).json<MapStatsResponse>();
    }

    /**
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId__player_base}
     * @param name
     * @param lastPlayedMin
     * @param minStarted
     * @param orderBy
     * @param orderDirection
     * @param regionId
     * @param mapId
     */
    public async getMapsPlayerBase(
        name: string | undefined,
        lastPlayedMin: string | undefined,
        minStarted: number | undefined,
        orderBy: "id" | "profileId" | "name" | "lobbiesStarted" | "lobbiesHostedStarted" = "lobbiesStarted",
        orderDirection: OrderDirection = "desc",
        regionId: GameRegion,
        mapId: number
    ): Promise<MapPlayerBaseResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/player-base`, {
            searchParams: {
                name,
                lastPlayedMin,
                minStarted,
                orderBy,
                orderDirection
            }
        }).json<MapPlayerBaseResponse>();
    }


    /**
     * User reviews
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_maps__regionId___mapId__reviews}
     * @param orderDirection
     * @param orderBy
     * @param regionId
     * @param mapId
     */
    public async getMapsReviews(
        orderDirection: OrderDirection = "desc",
        orderBy: "updated" | "rating" | "helpful" = "updated",
        regionId: GameRegion,
        mapId: number
    ): Promise<MapReviewsResponse> {
        return this.client.get(`/maps/${regionId}/${mapId}/reviews`, {
            searchParams: {
                orderDirection,
                orderBy
            }
        }).json<MapReviewsResponse>();
    }

    /**
     * List of available map categories
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Maps/get_map_categories}
     */
    public async getMapCategories(): Promise<MapCategoriesResponse> {
        return this.client.get("/maps/categories").json<MapCategoriesResponse>();
    }

    /**
     * List of player profiles
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Profiles/get_profiles}
     */
    public async getProfiles(
        regionId: GameRegion | undefined,
        name: string | undefined,
        profileHandle: string | undefined,
        orderDirection: OrderDirection = "desc",
        orderBy: "id" | "profileId" | "name" | "lastOnlineAt" = "name"
    ): Promise<ProfilesResponse> {
        return this.client.get("/profiles", {
            searchParams: {
                regionId,
                name,
                profileHandle,
                orderDirection,
                orderBy
            }
        }).json<ProfilesResponse>();
    }

    /**
     * Info about player profile
     *
     * {@link https://api.sc2arcade.com/docs/api/index.html#/Profiles/get_profiles__regionId___realmId___profileId_}
     * @param regionId
     * @param realmId
     * @param profileId
     */
    public async getProfileDetail(
        regionId: GameRegion,
        realmId: number,
        profileId: number
    ): Promise<ProfileDetailResponse> {
        return this.client.get(`/profiles/${regionId}/${realmId}/${profileId}`).json<ProfileDetailResponse>();
    }

    public async getProfileDetailViaGameId(regionId: GameRegion, profileGameId: number): Promise<ProfileDetailResponse> {
        return this.client.get(`/profiles/${regionId}/${profileGameId}`).json<ProfileDetailResponse>();
    }
}
