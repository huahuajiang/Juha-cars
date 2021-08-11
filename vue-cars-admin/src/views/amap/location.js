export function addressSetMapCenter(address,map){
    const geocoder=new AMap.Geocoder();
    geocoder.getLocation(address,function(status,result){
        if(status==='complete'&&result.geocodes.length){
            var lat=result.geocodes[0].location.lat;
            var lng=result.geocodes[0].location.lng;
            map.setCenter([lng,lat]);
        }else{
            
        }
    })
}