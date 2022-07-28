const Types =()=>{
    type Album={
        album_type:string;
        total_tracks:number;
        external_urls:ExternalURLs
        href:string;
        id:string;
        images:[];
        name:string;
        release_date:string;
        release_date_precision:string;
        restrictions:{}
        type:string;
        uri:string;
        album_group:string;
        artist:Artist
    }
}
type Artist={
    href:string;
    id:string;
    name:string;
    type:string;
    uri:string;
    genre:Genre
}[]

type ExternalURLs={
    external_urls:string
}

type Images={
    url:string;
    height:number;
    width:number;
}[]

type Genre={
    
}

type Followers={
    href:string;
    total:number
}

export default Types;