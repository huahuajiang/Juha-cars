export function getLonLag(e){
    return{
        lon:e.lnglat.getLng(),
        lag:e.lnglat.getLat(),
        value:e.lnglat.getLng()+','+e.lnglat.getLat()
    }
}