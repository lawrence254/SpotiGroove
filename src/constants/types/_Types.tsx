export interface Track {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              string;
    id:                string;
    is_playable:       boolean;
    linked_from:       TrackLinkedFrom;
    restrictions:      Restrictions;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
    is_local:          boolean;
}

export interface TrackAlbum {
    album_type:             string;
    total_tracks:           number;
    available_markets:      string[];
    external_urls:          TrackExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    album_group:            string;
    artists:                TrackArtist[];
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface TrackArtist {
    external_urls: TrackExternalUrls;
    followers:     Followers;
    genres:        [];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface Followers {
    href:  string;
    total: number;
}

export interface ExternalIDS {
    isrc: string;
    ean:  string;
    upc:  string;
}

export interface TrackLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              string;
    id:                string;
    is_playable:       boolean;
    linked_from:       {}
    restrictions:      Restrictions;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
    is_local:          boolean;
}

export interface IndigoArtist {
    genres: any[];
    images: any[];
}

export interface TrackExternalUrls {
    spotify: string;
}

export interface Restrictions {
    reason: string;
}